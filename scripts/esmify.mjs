// 把根目录的 .jsx 组件机械转换成 ESM，输出到 src/components/。
// 只做「一定不会出错」的三件事，语言相关的改造（STRINGS / COPY / IS_ZH）留给人工：
//
//   1. const { useState, useRef } = React;      → import { useState, useRef } from 'react';
//      （支持 `useState: useStateTX` 这种重命名）
//   2. React.useState / React.Fragment 等直接调用 → 补一条 import React from 'react';
//   3. window.Foo = Foo;                        → 文件末尾 export { Foo, ... };
//
// 转换完会打印每个文件里剩余的 STRINGS / COPY 引用位置——那些就是待人工处理的清单。
//
// 用法：node scripts/esmify.mjs <file.jsx> [file2.jsx ...]

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'src', 'components');

const files = process.argv.slice(2);
if (!files.length) {
  console.error('用法: node scripts/esmify.mjs <file.jsx> [...]');
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

for (const name of files) {
  const base = basename(name);
  const outPath = join(OUT_DIR, base);
  if (existsSync(outPath)) {
    console.error(`⏭  src/components/${base} 已存在，跳过（避免覆盖人工改动）`);
    continue;
  }

  let text = readFileSync(join(ROOT, base), 'utf8');
  const imports = [];

  // 1. React 解构 → 具名 import
  text = text.replace(/^const \{([^}]*)\} = React;\n/gm, (_, inner) => {
    const specs = inner.split(',').map((s) => s.trim()).filter(Boolean)
      .map((s) => s.replace(/^(\w+)\s*:\s*(\w+)$/, '$1 as $2'));
    imports.push(`import { ${specs.join(', ')} } from 'react';`);
    return '';
  });

  // 2. 仍然直接用 React.xxx 的，补默认 import
  if (/\bReact\.[A-Za-z]/.test(text)) imports.unshift(`import React from 'react';`);

  // 3. window.Foo = Foo; → export { ... }
  const exported = [];
  text = text.replace(/^window\.(\w+) = (\w+);\n/gm, (m, lhs, rhs) => {
    if (lhs !== rhs) throw new Error(`${base}: window.${lhs} = ${rhs} 左右不同名，需人工处理`);
    exported.push(lhs);
    return '';
  });
  // 有 5 个文件（clinic-page / condition-detail / conditions-page /
  // treatment-detail / treatments-page）压根没有 window.X = X —— 旧站所有
  // <script type="text/babel"> 共享同一个全局作用域，顶层 const 直接就是全局，
  // 页面内联脚本拿来就用。这里回退成「导出全部顶层 PascalCase 常量」。
  if (!exported.length) {
    for (const m of text.matchAll(/^const ([A-Z][A-Za-z0-9]*) = /gm)) exported.push(m[1]);
    if (!exported.length) throw new Error(`${base}: 既无 window.X 导出，也没有顶层 PascalCase 常量`);
    console.log(`   ℹ️  ${base} 无 window 导出，按顶层常量导出 ${exported.length} 个`);
  }

  const header =
    `// ⚠️ 由 scripts/esmify.mjs 从 ../../${base} 转换而来，之后有人工改动，不要重跑覆盖。\n` +
    `// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。\n\n`;

  text = header + imports.join('\n') + (imports.length ? '\n' : '')
       + text.replace(/\n{3,}$/, '\n')
       + `\nexport { ${exported.join(', ')} };\n`;

  writeFileSync(outPath, text);

  const pending = text.split('\n')
    .map((line, i) => [i + 1, line])
    .filter(([, l]) => /\b(STRINGS|COPY)\b/.test(l) && !/^\s*\/\//.test(l));

  console.log(`✅ src/components/${base}  导出 ${exported.length} 个：${exported.join(', ')}`);
  if (pending.length) {
    console.log(`   ⚠️  ${pending.length} 处 STRINGS/COPY 待人工处理：${pending.map(([n]) => n).join(', ')}`);
  }
}
