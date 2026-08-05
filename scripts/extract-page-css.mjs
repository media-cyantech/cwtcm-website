// 从旧站 HTML 的内联 <style> 里抽出真正的页面样式，丢掉 .mobile-frame 预览壳。
//
// 背景：Homepage.html 的内联 <style> 有 56 条规则，其中 32 条是 tweaks 调参面板的
// 「移动端预览框」样式（.mobile-frame / .breakpoint-label）。那个面板不迁移，
// 这些规则也就没有意义。剩下的 24 条是真正的首页响应式覆盖，必须搬走。
//
// 用法：node scripts/extract-page-css.mjs <源 HTML> <起始行> <结束行> <输出 css>

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const [src, startLine, endLine, out] = process.argv.slice(2);
if (!out) {
  console.error('用法: node scripts/extract-page-css.mjs <html> <startLine> <endLine> <out.css>');
  process.exit(1);
}

const lines = readFileSync(src, 'utf8').split('\n');
// 去掉 <style> / </style> 两行本身
const css = lines.slice(Number(startLine), Number(endLine) - 1).join('\n');

// 按顶层大括号切块（@media 会带嵌套，用深度计数）
const blocks = [];
let depth = 0, buf = '';
for (const ch of css) {
  buf += ch;
  if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) { blocks.push(buf.trim()); buf = ''; }
  }
}
if (buf.trim()) blocks.push(buf.trim());

const DROP = /mobile-frame|breakpoint-label/;

// 分类只看选择器本身。块前面常挂着注释，而注释里可能正好提到 .mobile-frame
// （原文件里那句「Real mobile breakpoint — 不是 .mobile-frame 预览」就是），
// 按含注释的文本判断会把真规则误杀。
const selectorOf = (block) =>
  block.slice(0, block.indexOf('{')).replace(/\/\*[\s\S]*?\*\//g, '').trim();

const kept = [], dropped = [];
for (const b of blocks) {
  // @media 块：逐条过滤内部规则，整块都是预览壳才丢
  if (selectorOf(b).startsWith('@media')) {
    const head = b.slice(0, b.indexOf('{') + 1);
    const body = b.slice(b.indexOf('{') + 1, b.lastIndexOf('}'));
    const inner = [];
    let d = 0, ibuf = '';
    for (const ch of body) {
      ibuf += ch;
      if (ch === '{') d++;
      else if (ch === '}') { d--; if (d === 0) { inner.push(ibuf.trim()); ibuf = ''; } }
    }
    const keptInner = inner.filter((r) => !DROP.test(selectorOf(r)));
    dropped.push(...inner.filter((r) => DROP.test(selectorOf(r))));
    if (keptInner.length) kept.push(`${head}\n  ${keptInner.join('\n  ')}\n}`);
    continue;
  }
  const selector = selectorOf(b);
  (DROP.test(selector) ? dropped : kept).push(b);
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out,
  `/* 由 scripts/extract-page-css.mjs 从 ${src} 的内联 <style> 抽出。\n` +
  `   已剔除 ${dropped.length} 条 .mobile-frame / .breakpoint-label 预览壳规则\n` +
  `   （tweaks 调参面板不迁移，见迁移计划「不迁」一节）。 */\n\n` +
  kept.join('\n\n') + '\n');

console.log(`✅ ${out}`);
console.log(`   保留 ${kept.length} 块 · 丢弃 ${dropped.length} 条预览壳规则`);
