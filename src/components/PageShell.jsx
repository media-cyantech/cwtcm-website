// 页面外壳 —— 负责「按语言注入 + 选组件」，整棵树在 React 内部组装。
//
// ⚠️ 为什么不能在 .astro 里写 <I18nProvider><Page /></I18nProvider>：
//   Astro 把 React 组件的 children 当 slot 单独渲染，子组件是**另一棵 React 树**，
//   Context 不跨这个边界。那样写不会报错，但 Provider 完全不生效 ——
//   中文页会整页渲染成英文。实测过：ZH 页中文字符占比只有 1%。
//   这正是本次迁移最要防的「静默产出错误内容」。
//
// 所以 .astro 只传 comp / props / lang 三个可序列化的值，组装在这里做。

import { I18nProvider } from '../data/i18n.jsx';

import { AboutPage } from './about-page.jsx';
import { RichmondPage, BurnabyPage, VancouverPage, WhiteRockPage } from './clinic-page.jsx';
import { ConditionDetailPage } from './condition-detail.jsx';
import { ConditionsPage } from './conditions-page.jsx';
import { FAQPage, FirstVisitPage, ContactPage } from './info-pages.jsx';
import { JournalPage } from './journal-page.jsx';
import { LegalPage } from './legal-page.jsx';
import { LocationsPage } from './locations-page.jsx';
import { PractitionerDetailPage } from './practitioner-detail.jsx';
import { PractitionersPage } from './practitioners-page.jsx';
import { TreatmentDetailPage } from './treatment-detail.jsx';
import { TreatmentsPage } from './treatments-page.jsx';

const COMPONENTS = {
  AboutPage, RichmondPage, BurnabyPage, VancouverPage, WhiteRockPage,
  ConditionDetailPage, ConditionsPage, FAQPage, FirstVisitPage, ContactPage,
  JournalPage, LegalPage, LocationsPage, PractitionerDetailPage,
  PractitionersPage, TreatmentDetailPage, TreatmentsPage,
};

export default function PageShell({ comp, lang, props = {} }) {
  const Page = COMPONENTS[comp];
  if (!Page) {
    throw new Error(
      `PageShell: 不认识的组件 "${comp}"。` +
      `可选：${Object.keys(COMPONENTS).join(', ')}`
    );
  }
  return (
    <I18nProvider lang={lang}>
      <Page {...props} />
    </I18nProvider>
  );
}
