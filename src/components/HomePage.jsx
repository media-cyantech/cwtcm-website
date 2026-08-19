// 首页 —— 取代旧站 Homepage.html:376-391 的内联 <Page> 组件。
//
// 与旧站的差异只有一处：不再有 tweaks 调参面板。
// 旧站的 <App> 用 useTweaks 驱动 <Page heroIndex={tweaks.hero} />，并在
// tweaks.view === 'mobile' 时把整页**再渲染一遍**塞进 .mobile-frame 预览框。
// 那是设计期的调参工具，不属于线上站点（见迁移计划「不迁」一节）。
// heroIndex 固定为 TWEAK_DEFAULTS.hero 的当前值 0。

import { I18nProvider } from '../data/i18n.jsx';
import { Hero, TrustStrip, Practitioners, Approach } from './sections-1-4.jsx';
import { Treatments, Conditions, Locations, Heritage } from './sections-5-8.jsx';
import { Testimonials, Journal, Footer } from './sections-9-12.jsx';

const HERO_INDEX = 0; // 原 TWEAK_DEFAULTS.hero

export default function HomePage({ lang }) {
  return (
    <I18nProvider lang={lang}>
      <Hero heroIndex={HERO_INDEX} />
      <TrustStrip />
      <Practitioners />
      <Approach />
      <Treatments />
      <Conditions />
      <Locations />
      <Heritage />
      <Testimonials />
      <Journal />
      <Footer />
    </I18nProvider>
  );
}
