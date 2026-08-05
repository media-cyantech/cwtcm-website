// 读取 src/data/seo/ 下的 SEO 数据 —— 165 页的 title / description /
// canonical / hreflang / robots / sitemap，构建时静态写进每页 <head>。
// 那些 JSON 是同步进来的生成物（见 src/data/seo/README.md），不要手改。

import pagesData from './seo/pages.json';
import orgGraph from './seo/schema-org.json';
import faqData from './seo/schema-faq.json';

const BY_FILE = new Map(pagesData.pages.map((p) => [p.file, p]));

/** 按旧站文件名取一页的 SEO 数据，例如 seoFor('Homepage-ZH.html')。 */
export function seoFor(file) {
  const page = BY_FILE.get(file);
  if (!page) {
    throw new Error(
      `src/data/seo/pages.json 里没有 "${file}"。URL 改了就要同步改那份数据——` +
      `注意智能体知识库的外链也按同一套 .html 规则写的，是三边同步。`
    );
  }
  return page;
}

/**
 * 一页要输出的 JSON-LD。**必须静态写进 HTML** —— 旧站有 50 页是 React 运行时注入的，
 * 那对 ChatGPT / Perplexity 这类不执行 JS 的爬虫等于不存在。
 *
 * 首页输出完整 @graph（Organization + WebSite + 4 家门店 LocalBusiness）；
 * 其余页面只挂各自的 FAQPage，靠 @id 指回首页的实体，避免每页重复整张图。
 */
const DOMAIN = pagesData.domain;
const ORG_ID = `${DOMAIN}/#organization`;

/** 中文页一律带 -ZH 后缀。 */
const langOf = (file) => (/-ZH\.html$/.test(file) ? 'zh' : 'en');

/**
 * 面包屑：首页 → （分区）→ 当前页。
 * 名字取 pages.json 的 title 首段（`—` / `·` / `|` 之前那一截）——
 * 首段本来就是人写的页面名，不另建数据文件。
 */
function breadcrumbFor(file) {
  const page = seoFor(file);
  const zh = langOf(file) === 'zh';
  const home = zh ? 'Homepage-ZH.html' : 'Homepage.html';
  const name = String(page.title || '').split(/\s*[—·|]\s*/)[0].trim();

  const items = [
    { '@type': 'ListItem', position: 1, name: zh ? '首页' : 'Home', item: `${DOMAIN}/${home}` },
  ];
  // 详情页多一层分区：Practitioners/xxx.html → 医师团队
  const dir = file.includes('/') ? file.split('/')[0] : null;
  if (dir) {
    const SECTION = {
      Practitioners: { en: 'Practitioners', zh: '医师团队' },
      Treatments: { en: 'Treatments', zh: '诊疗项目' },
      Conditions: { en: 'Conditions', zh: '调理方向' },
    }[dir];
    items.push({
      '@type': 'ListItem', position: 2, name: SECTION[zh ? 'zh' : 'en'],
      item: `${DOMAIN}/${dir}${zh ? '-ZH' : ''}.html`,
    });
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name, item: page.canonical });

  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

/**
 * 医师页的 Person。数据来自 copy.js 的 STRINGS.practitioners.list —— 不新建数据文件，
 * 否则又多一份会过期的生成物。
 *
 * 只输出**数据里确实有**的字段：姓名、职称、执业门店、所属机构。
 * 不编造 email / 电话 / 社媒 —— 数据里没有。
 */
function personFor(file, bundle) {
  const slug = file.split('/')[1].replace(/-ZH\.html$/, '').replace(/\.html$/, '');
  const list = bundle.STRINGS.practitioners.list || [];
  const p = list.find((x) => x.slug === slug);
  if (!p) return null;

  const zh = langOf(file) === 'zh';
  const creds = (p.creds || []).map((c) => (zh ? (c.zh || c.en) : c.en)).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${seoFor(file).canonical}#person`,
    name: p.name,
    url: seoFor(file).canonical,
    ...(creds.length ? { hasCredential: creds } : {}),
    ...(p.roles?.length ? { jobTitle: p.roles } : {}),
    worksFor: { '@id': ORG_ID },
    ...(p.clinics?.length
      ? { workLocation: p.clinics.map((c) => ({ '@type': 'Place', name: c })) }
      : {}),
  };
}

/**
 * 一页要输出的 JSON-LD。**必须静态写进 HTML** —— 旧站有 50 页是 React 运行时注入的，
 * 那对 ChatGPT / Perplexity 这类不执行 JS 的爬虫等于不存在。
 *
 * 首页输出完整 @graph（Organization + WebSite + 4 家门店 LocalBusiness）；
 * 其余页面挂各自的 FAQPage / Person / BreadcrumbList，靠 @id 指回首页的实体，
 * 避免每页重复整张图。
 *
 * 注意：诊疗项目页与调理方向页的 MedicalTherapy / MedicalWebPage 是组件自己
 * 渲染的（treatment-detail.jsx 的 TDJsonLd、condition-detail.jsx 的 CDDJsonLd），
 * 不在这里重复输出。
 */
export function schemaFor(file, { withOrgGraph = false, bundle = null } = {}) {
  const blocks = [];
  if (withOrgGraph) blocks.push(orgGraph);

  const faq = faqData.byPage[file];
  if (faq) blocks.push({ '@context': faqData['@context'], ...faq });

  if (bundle && file.startsWith('Practitioners/')) {
    const person = personFor(file, bundle);
    if (person) blocks.push(person);
  }

  // 首页不需要面包屑（它就是根）
  if (!/^(Homepage(-ZH)?|index)\.html$/.test(file)) blocks.push(breadcrumbFor(file));

  return blocks;
}

/** schema-faq.json 只覆盖了 9 个英文页 —— 中文页目前没有 FAQ schema，见 README 待办。 */
export const faqPages = Object.keys(faqData.byPage);

export const allPages = pagesData.pages;
export const seoMeta = { domain: pagesData.domain, urlRule: pagesData.urlRule, langPolicy: pagesData.langPolicy };
