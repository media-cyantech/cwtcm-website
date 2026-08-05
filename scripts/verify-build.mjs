// 构建产物自检 —— audit.py 管 SEO 标签，这里管「链接与资源到底能不能打开」。
// CI 里在 audit 之后跑，不通过就不部署。
//
// 检查四项：
//   1. 站内 .html 链接是否都指向真实存在的页面（考虑 <base href>）
//   2. <img> 引用的文件是否都存在
//   3. sitemap 里的每条 URL 是否都对应真实文件
//   4. 是否有单张超过 500 KB 的图被正文引用（LCP）

import { readFileSync, existsSync, statSync } from 'node:fs';
import { globSync } from 'node:fs';
import { join, dirname, relative, normalize } from 'node:path';

const DIST = 'dist';
const files = globSync(`${DIST}/**/*.html`);
if (!files.length) { console.error('❌ dist 里没有 HTML'); process.exit(1); }

const existing = new Set(files.map((f) => relative(DIST, f)));
let fail = 0;

// 1 + 2 —— 相对路径的解析基准取决于页面有没有 <base href>
const brokenLinks = new Map();
const missingImgs = new Set();
let nLinks = 0, nImgs = 0;

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const rel = relative(DIST, f);
  const hasBase = /<base\s+href=/.test(html);
  const baseDir = hasBase ? '' : dirname(rel);
  const resolve = (u) => (u.startsWith('/') ? u.slice(1) : normalize(join(baseDir, u)));

  for (const m of html.matchAll(/<a [^>]*href="([^"#?:]+\.html)"/g)) {
    nLinks++;
    const t = resolve(m[1]);
    if (!existing.has(t)) brokenLinks.set(t, (brokenLinks.get(t) || 0) + 1);
  }
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|data:)/.test(u)) continue;
    nImgs++;
    if (!existsSync(join(DIST, resolve(u)))) missingImgs.add(u);
  }
}

console.log(`  站内 .html 链接 ${nLinks} 条 · 图片引用 ${nImgs} 处 · 页面 ${files.length} 个`);
if (brokenLinks.size) {
  fail++;
  console.error(`❌ ${brokenLinks.size} 种链接指向不存在的页面：`);
  for (const [t, n] of [...brokenLinks].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
    console.error(`      ${t}  ×${n}`);
  }
} else console.log('  ✅ 零死链');

if (missingImgs.size) {
  fail++;
  console.error(`❌ ${missingImgs.size} 个图片文件不存在：${[...missingImgs].slice(0, 6).join(', ')}`);
} else console.log('  ✅ 图片全部存在');

// 3 —— sitemap 的每条 URL 都要能落到真实文件
const smFiles = globSync(`${DIST}/sitemap-[0-9].xml`);
let nSitemap = 0, badSitemap = [];
for (const sm of smFiles) {
  for (const m of readFileSync(sm, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    nSitemap++;
    const path = new URL(m[1]).pathname.replace(/^\//, '');
    const target = path === '' ? 'index.html' : (path.endsWith('/') ? path + 'index.html' : path);
    if (!existing.has(target)) badSitemap.push(m[1]);
  }
}
if (badSitemap.length) {
  fail++;
  console.error(`❌ sitemap 里 ${badSitemap.length} 条 URL 找不到对应文件：${badSitemap.slice(0, 5).join(', ')}`);
} else console.log(`  ✅ sitemap ${nSitemap} 条 URL 全部对应真实文件`);

// 4 —— 正文引用的大图
const big = [];
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const baseDir = /<base\s+href=/.test(html) ? '' : dirname(relative(DIST, f));
  for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|data:)/.test(u)) continue;
    const p = join(DIST, u.startsWith('/') ? u.slice(1) : normalize(join(baseDir, u)));
    if (existsSync(p) && statSync(p).size > 500 * 1024) big.push([Math.round(statSync(p).size / 1024), u]);
  }
}
const uniqBig = [...new Map(big.map(([k, v]) => [v, k])).entries()];
if (uniqBig.length) {
  console.warn(`  ⚠️  ${uniqBig.length} 张正文图片超过 500 KB（影响 LCP，不阻断部署）：`);
  for (const [u, kb] of uniqBig.sort((a, b) => b[1] - a[1]).slice(0, 5)) console.warn(`      ${kb} KB  ${u}`);
} else console.log('  ✅ 无超过 500 KB 的正文图片');

process.exit(fail ? 1 : 0);
