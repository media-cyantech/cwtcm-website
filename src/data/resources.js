// 图片路径解析器 —— 原 copy.js:6 / copy-zh.js:4 的 `window.__resources` Proxy。
// 两份文件里字节完全相同，这里提取为共享模块。
//
// 唯一改动：不再挂 window（Astro 构建在 Node 下跑，没有 window 会直接崩），
// 也不再做 `window.__resources || ...` 的 fallback —— 旧站那个 fallback 是为
// bundled standalone（内联 manifest 覆盖）准备的，静态构建下不存在这条路径。
// 解析逻辑一字未动。

export const resources = new Proxy({}, {
  get(_, key) {
    const k = String(key);
    const knownFolders = [
      ['hero_candidates', 'hero-candidates'],
      ['practitioners', 'practitioners'],
      ['treatments', 'treatments'],
      ['brand', 'brand'],
    ];
    for (const [prefix, folder] of knownFolders) {
      const re = new RegExp('^r_' + prefix + '_(.+)_(jpg|jpeg|png|avif|webp|svg)$', 'i');
      const m = k.match(re);
      if (m) {
        const file = m[1].replace(/_/g, '-') + '.' + m[2];
        return `assets/${folder}/${file}`;
      }
    }
    return undefined;
  }
});
