// 语言注入 —— 替代旧站「每个 HTML 只 <script src> 加载 copy.js 或 copy-zh.js」的机制。
//
// 为什么必须改：
//   旧站每个页面是独立的浏览器文档，`STRINGS` 是那个文档里的自由全局变量，
//   加载哪份文件就是哪种语言。Astro 构建时 165 个页面跑在**同一个 Node 进程**里，
//   模块只 import 一次、模块顶层的常量只求值一次 —— 中英文会串台，
//   而且是**静默产出错误内容**，不报错。这是整个迁移里唯一会悄悄出错的一类问题。
//
// 为什么用 Context 而不是可变模块变量：
//   `export let STRINGS` + `setLang()` 看起来改动更小，但那只是把同一个竞态挪了个位置——
//   Astro 的渲染是 async 的，两个页面的渲染一旦交错，就又串台了。Context 的值随
//   React 树走，天然不会跨页面泄漏。
//
// 用法：
//   .astro 页面    <HomePage lang="zh" />        （每页一个 React 根）
//   组件函数体首行  const STRINGS = useStrings();  → 函数体内原有引用一字不改
//   非组件的辅助函数  显式接 strings 参数（不能调 hook）

import { createContext, useContext } from 'react';
import * as EN from './copy.js';
import * as ZH from './copy-zh.js';

export const BUNDLES = { en: EN, zh: ZH };

const I18nContext = createContext(EN);

export function I18nProvider({ lang, children }) {
  const bundle = BUNDLES[lang];
  if (!bundle) throw new Error(`未知语言 "${lang}"，可选：${Object.keys(BUNDLES).join(' / ')}`);
  return <I18nContext.Provider value={bundle}>{children}</I18nContext.Provider>;
}

export const useBundle = () => useContext(I18nContext);
export const useStrings = () => useContext(I18nContext).STRINGS;
export const useCopy = () => useContext(I18nContext).COPY;

/** 中文页的 URL 后缀（旧站规则：Homepage.html / Homepage-ZH.html）。 */
export const useSuffix = () => (useContext(I18nContext).STRINGS.lang === 'zh' ? '-ZH' : '');
export const useIsZh = () => useContext(I18nContext).STRINGS.lang === 'zh';
