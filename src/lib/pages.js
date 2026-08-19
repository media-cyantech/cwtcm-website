// 页面注册表 —— 把 seo/cwtcm/pages.json 的 165 条 `file` 映射到「用哪个组件、传什么参数」。
//
// 映射规则逐条对照旧站每个 HTML 的内联渲染代码，例如
//   Conditions/pain-injury.html:  <ConditionDetailPage slug="pain-injury" />
//   Locations-Burnaby.html:       <BurnabyPage />
//
// 语言从文件名的 `-ZH` 后缀推出 —— 旧站就是靠「加载 copy.js 还是 copy-zh.js」区分的，
// 现在改由 i18n Context 按这里推出的 lang 注入。

import { allPages } from '../data/seo.js';

/** 旧站 URL 规则：中文页一律加 -ZH 后缀。 */
export function langOf(file) {
  return /-ZH\.html$/.test(file) ? 'zh' : 'en';
}

/** 去掉 -ZH 与 .html，拿到「与语言无关」的页面标识。 */
export function keyOf(file) {
  return file.replace(/-ZH\.html$/, '').replace(/\.html$/, '');
}

/** 4 家门店各有一个包装组件（clinic-page.jsx:1145-1148）。 */
const CLINIC = {
  'Locations-Richmond': 'RichmondPage',
  'Locations-Burnaby': 'BurnabyPage',
  'Locations-Vancouver': 'VancouverPage',
  'Locations-WhiteRock': 'WhiteRockPage',
};

/** 单页（key → 组件名）。 */
const SINGLE = {
  'About': 'AboutPage',
  'Conditions': 'ConditionsPage',
  'Contact': 'ContactPage',
  'FAQ': 'FAQPage',
  'First-Visit': 'FirstVisitPage',
  'Journal': 'JournalPage',
  'Legal': 'LegalPage',
  'Locations': 'LocationsPage',
  'Practitioners': 'PractitionersPage',
  'Treatments': 'TreatmentsPage',
  ...CLINIC,
};

/** 三个详情路由：目录名 → 组件名，slug 作为 prop 传入。 */
const DETAIL = {
  'Practitioners': 'PractitionerDetailPage',
  'Treatments': 'TreatmentDetailPage',
  'Conditions': 'ConditionDetailPage',
};

/**
 * 全站默认零水合（没有一处挂 client:*），组件里的 onClick/useState 在浏览器里
 * 从不执行。绝大多数页面本来就不需要——但这几个组件的交互是页面本身的功能
 * （门店筛选会改变列表内容，不是纯装饰），所以要单独水合。
 * 见 [...path].astro：这里给的是组件名，不是组件引用，真正的 client:visible
 * 写在 .astro 模板里两个静态并列的 <PageShell> 标签上（Astro 编译期要求
 * client:* 挂在写死的标签上，不能挂在运行时才决定的组件变量上）。
 */
export const HYDRATE = new Set(['PractitionersPage']);

/**
 * 解析一条 pages.json 记录。
 * 返回 null 表示这一页不走通用路由（首页有独立路由）。
 */
export function resolve(file) {
  const key = keyOf(file);
  const lang = langOf(file);

  // 首页三条走 src/pages/Homepage[-ZH].astro。
  // index.html 与 Homepage.html **字节完全相同**（审计脚本查出来的），
  // 新站不再生成 index.html —— 它是重复内容，且旧站根路径本来就靠它。
  // 上线时由 Nginx 把 / 指到 Homepage.html。
  if (key === 'Homepage' || key === 'index') return null;

  if (key.includes('/')) {
    const [dir, slug] = key.split('/');
    const comp = DETAIL[dir];
    if (!comp) throw new Error(`pages.js: 不认识的详情目录 "${dir}"（来自 ${file}）`);
    return { file, key, lang, comp, props: { slug } };
  }

  const comp = SINGLE[key];
  if (!comp) throw new Error(`pages.js: 不认识的页面 "${key}"（来自 ${file}）`);
  return { file, key, lang, comp, props: {} };
}

/** 通用路由要生成的全部页面。 */
export const ROUTED = allPages.map((p) => resolve(p.file)).filter(Boolean);
