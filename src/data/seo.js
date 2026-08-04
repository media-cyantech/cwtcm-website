// 读取 -skill-rag-/seo/cwtcm/pages.json —— 165 页的 title / description /
// canonical / hreflang / robots / sitemap。生成物不在本仓库，改数据要去那边重跑 build.py。

import pagesData from '../../../-skill-rag-/seo/cwtcm/pages.json';
import orgGraph from '../../../-skill-rag-/seo/cwtcm/schema-org.json';
import faqData from '../../../-skill-rag-/seo/cwtcm/schema-faq.json';

const BY_FILE = new Map(pagesData.pages.map((p) => [p.file, p]));

/** 按旧站文件名取一页的 SEO 数据，例如 seoFor('Homepage-ZH.html')。 */
export function seoFor(file) {
  const page = BY_FILE.get(file);
  if (!page) {
    throw new Error(
      `seo/cwtcm/pages.json 里没有 "${file}"。URL 改了就要同步改那份数据——` +
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
export function schemaFor(file, { withOrgGraph = false } = {}) {
  const blocks = [];
  if (withOrgGraph) blocks.push(orgGraph);

  const faq = faqData.byPage[file];
  if (faq) blocks.push({ '@context': faqData['@context'], ...faq });

  return blocks;
}

/** schema-faq.json 只覆盖了 9 个英文页 —— 中文页目前没有 FAQ schema，见 README 待办。 */
export const faqPages = Object.keys(faqData.byPage);

export const allPages = pagesData.pages;
export const seoMeta = { domain: pagesData.domain, urlRule: pagesData.urlRule, langPolicy: pagesData.langPolicy };
