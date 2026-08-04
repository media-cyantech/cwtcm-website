// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://cwtcm.ca';

export default defineConfig({
  site: SITE,

  // ⚠️ 关键：保留 .html 后缀的 URL 形态。
  // 旧站 vercel.json 是 cleanUrls:false，全站内链、copy.js 里的外链、
  // 以及 AI 智能体知识库里的外链，全部按「URL 带 .html」写的。
  // 改成 directory 形态会同时打断这三处，风险远大于收益。
  build: { format: 'file' },

  integrations: [
    react(),
    sitemap({
      // thank-you / 404 / 与 Homepage 重复的 index 不进 sitemap
      filter: (page) => !/\/(404|index)\.html$/.test(page),
    }),
  ],

  // 图片路径沿用旧站的 assets/ 相对结构，避免动 copy.js 里的资源引用
  publicDir: './public',
  outDir: './dist',
});
