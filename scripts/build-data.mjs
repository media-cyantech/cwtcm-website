// 把仓库根目录的 copy.js / copy-zh.js 机械转换成 ESM，输出到 src/data/。
//
// 为什么用脚本而不是手改：
//   两份文件合计约 500 KB 全是文案数据，手改必然出错；且转换必须可复现——
//   文案一旦有更新，改根目录的原文件后重跑本脚本即可，不需要再来一遍。
// 为什么不直接改根目录原文件：
//   旧站的 165 个 HTML 还用 <script src="copy.js"> 非模块方式加载它，
//   加 export 会当场语法错误。迁移完成、旧 HTML 删除之前，原文件保持原样，
//   同时它还是 audit 内容比对的基线。
//
// 转换只做五件事，不碰任何文案：
//   1. 抽掉 window.__resources 的 Proxy 定义 → import { resources } from './resources.js'
//   2. window.__resources.xxx  →  resources.xxx
//   3. const COPY    →  export const COPY
//   4. const STRINGS →  export const STRINGS
//   5. 删掉结尾的 window.COPY = / window.STRINGS = 赋值
//
// 用法：node scripts/build-data.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'src', 'data');

const PROXY_START = 'window.__resources = window.__resources || new Proxy({}, {';

const FILES = ['copy.js', 'copy-zh.js'];

mkdirSync(OUT_DIR, { recursive: true });

let failed = false;

for (const name of FILES) {
  const srcPath = join(ROOT, name);
  let text = readFileSync(srcPath, 'utf8');
  const before = text.length;

  // 1. 摘掉 Proxy 定义块（从起始行到其后第一个 `\n});\n`）
  //    连同紧邻其上的注释一起删——那段注释描述的正是被删掉的 fallback 逻辑
  let start = text.indexOf(PROXY_START);
  if (start === -1) throw new Error(`${name}: 找不到 __resources Proxy 起始标记`);
  while (start > 0) {
    const prevBreak = text.lastIndexOf('\n', start - 2);
    const prevLine = text.slice(prevBreak + 1, start - 1);
    if (!prevLine.trimStart().startsWith('//')) break;
    start = prevBreak + 1;
  }
  const endMarker = '\n});\n';
  const end = text.indexOf(endMarker, start);
  if (end === -1) throw new Error(`${name}: 找不到 __resources Proxy 结束标记`);
  text = text.slice(0, start)
       + `import { resources } from './resources.js';\n`
       + text.slice(end + endMarker.length);

  // 2. 引用改名（8 处）
  text = text.replaceAll('window.__resources.', 'resources.');

  // 3 / 4. 顶层声明加 export
  for (const id of ['COPY', 'STRINGS']) {
    const re = new RegExp(`^const ${id} = \\{`, 'm');
    if (!re.test(text)) throw new Error(`${name}: 找不到顶层 const ${id}`);
    text = text.replace(re, `export const ${id} = {`);
  }

  // 5. 删掉 window 赋值
  text = text.replace(/^window\.(COPY|STRINGS) = \1;\n/gm, '');

  // 断言：转换后不允许再出现任何 window 引用
  const leftovers = text.split('\n')
    .map((line, i) => [i + 1, line])
    .filter(([, line]) => /\bwindow\b/.test(line));
  if (leftovers.length) {
    failed = true;
    console.error(`❌ ${name}: 仍有 ${leftovers.length} 处 window 引用`);
    for (const [n, line] of leftovers.slice(0, 10)) {
      console.error(`   ${n}: ${line.trim().slice(0, 120)}`);
    }
  }

  const banner = `// ⚠️ 由 scripts/build-data.mjs 从 ../../${name} 生成，不要手改。\n`
               + `// 改文案请改根目录的 ${name}，然后重跑 node scripts/build-data.mjs\n\n`;
  writeFileSync(join(OUT_DIR, name), banner + text);
  console.log(`✅ src/data/${name}  ${(before / 1024).toFixed(0)} KB → ${((banner.length + text.length) / 1024).toFixed(0)} KB`);
}

// ── 校验：转换产物与原文件逐字一致 ──────────────────────────────
// 用 window 垫片按旧站的方式执行原文件，与 ESM 产物做深比对。
// 这是防「转换过程中悄悄改了文案」唯一有效的办法。
for (const name of FILES) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(readFileSync(join(ROOT, name), 'utf8'), sandbox, { filename: name });

  const mod = await import(join(OUT_DIR, name) + `?v=${process.pid}`);
  for (const id of ['COPY', 'STRINGS']) {
    const legacy = JSON.stringify(sandbox.window[id]);
    const built = JSON.stringify(mod[id]);
    if (legacy !== built) {
      failed = true;
      console.error(`❌ ${name} ${id}: 与原文件不一致（${legacy.length} vs ${built.length} 字符）`);
    } else {
      console.log(`   ↳ ${name} ${id} 深比对逐字一致（${legacy.length} 字符）`);
    }
  }
}

if (failed) process.exit(1);
console.log('✅ 转换零内容漂移');
