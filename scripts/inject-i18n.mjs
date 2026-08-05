// 给 src/components/ 下的组件注入语言 Context。
//
// 背景（这是整个迁移里唯一会「静默产出错误内容」的一类问题）：
//   旧站每个 HTML 只加载 copy.js **或** copy-zh.js，`STRINGS` / `COPY` 是那个
//   浏览器文档里的自由全局变量。Astro 构建时 165 个页面跑在同一个 Node 进程里，
//   模块只 import 一次、模块顶层常量只求值一次 —— 中英文会串台，而且不报错。
//
// 本脚本做四件事：
//   1. 把模块顶层的 `const X_IS_ZH = ... STRINGS.lang === 'zh'` 常量移进用到它的组件
//   2. 给每个函数体里引用 STRINGS / COPY 的顶层组件，在首行插入
//      `const STRINGS = useStrings();` / `const COPY = useCopy();`
//      —— 函数体内原有的引用一字不用改
//   3. 表达式体的箭头函数（`const X = () => (`）先转成块体，才能插语句
//   4. 补 import
//
// 非组件的辅助函数（不能调 hook）会被单独列出来，需要人工改成显式接参数。
//
// 用法：node scripts/inject-i18n.mjs <file.jsx> [...]

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src', 'components');

const files = process.argv.slice(2);
if (!files.length) { console.error('用法: node scripts/inject-i18n.mjs <file.jsx> [...]'); process.exit(1); }

const HOOKS = { STRINGS: 'useStrings()', COPY: 'useCopy()' };

for (const arg of files) {
  const base = basename(arg);
  const path = join(DIR, base);
  let text = readFileSync(path, 'utf8');
  const notes = [];

  // ── 1. 模块顶层的 *_IS_ZH 常量 ────────────────────────────────────────
  const isZhNames = [];
  text = text.replace(/^const (\w*IS_ZH) = \(typeof STRINGS[^\n]*\n/gm, (_, name) => {
    isZhNames.push(name);
    return '';
  });

  // ── 2. 其它模块顶层的 STRINGS/COPY 用法（不能自动修，列出来）──────────
  for (const [i, line] of text.split('\n').entries()) {
    if (/^(const|let|var) /.test(line) && /\b(STRINGS|COPY)\b/.test(line) && !/^\/\//.test(line.trim())) {
      notes.push(`第 ${i + 1} 行仍在模块顶层用 STRINGS/COPY：${line.trim().slice(0, 96)}`);
    }
  }

  // ── 3. 逐个顶层组件插 hook ────────────────────────────────────────────
  const lines = text.split('\n');
  // 顶层组件：`const Name = (...) => {` 或 `const Name = (...) => (`
  const heads = [];
  for (const [i, l] of lines.entries()) {
    const m = l.match(/^const ([A-Z][A-Za-z0-9]*) = \(([^)]*)\) => (\{|\()\s*$/);
    if (m) heads.push({ i, name: m[1], body: m[3] });
  }
  heads.push({ i: lines.length, name: null });

  const edits = [];
  for (let k = 0; k < heads.length - 1; k++) {
    const { i, name, body } = heads[k];
    const end = heads[k + 1].i;
    const chunk = lines.slice(i, end).join('\n');
    const need = [];
    for (const id of ['STRINGS', 'COPY']) {
      // 函数体里用到，且不是自己声明的
      if (new RegExp(`\\b${id}\\b`).test(chunk.slice(chunk.indexOf('\n')))) need.push(id);
    }
    const needIsZh = isZhNames.filter((n) => new RegExp(`\\b${n}\\b`).test(chunk));
    if (!need.length && !needIsZh.length) continue;

    const inject = [
      ...need.map((id) => `  const ${id} = ${HOOKS[id]};`),
      ...needIsZh.map((n) => `  const ${n} = useIsZh();   // 原为模块顶层常量，会导致中英串台`),
    ];
    edits.push({ i, end, body, inject, name });
  }

  // 从后往前改，避免行号漂移
  for (const e of edits.reverse()) {
    if (e.body === '{') {
      lines.splice(e.i + 1, 0, ...e.inject);
    } else {
      // 表达式体 → 块体
      lines[e.i] = lines[e.i].replace(/=> \($/, '=> {');
      lines.splice(e.i + 1, 0, ...e.inject, '  return (');
      // 找到该组件的结束 `);`
      for (let j = e.end + e.inject.length; j > e.i; j--) {
        if (lines[j] && /^\);\s*$/.test(lines[j])) { lines[j] = ');\n};'; break; }
      }
    }
  }

  text = lines.join('\n');

  // ── 4. 补 import ──────────────────────────────────────────────────────
  const used = [];
  if (/= useStrings\(\)/.test(text)) used.push('useStrings');
  if (/= useCopy\(\)/.test(text)) used.push('useCopy');
  if (/= useIsZh\(\)/.test(text)) used.push('useIsZh');
  if (used.length && !text.includes("from '../data/i18n.jsx'")) {
    const ls = text.split('\n');
    const last = ls.findLastIndex((l) => l.startsWith('import '));
    ls.splice(last + 1, 0, `import { ${used.join(', ')} } from '../data/i18n.jsx';`);
    text = ls.join('\n');
  }
  if (/\bresources\./.test(text) && !text.includes("from '../data/resources.js'")) {
    const ls = text.split('\n');
    const last = ls.findLastIndex((l) => l.startsWith('import '));
    ls.splice(last + 1, 0, `import { resources } from '../data/resources.js';`);
    text = ls.join('\n');
  }

  writeFileSync(path, text);
  console.log(`✅ ${base}  注入 ${edits.length} 个组件` + (isZhNames.length ? `  · 移走 ${isZhNames.length} 个模块级 IS_ZH` : ''));
  for (const n of notes) console.log(`   ⚠️  ${n}`);
}
