// ⚠️ 由 scripts/esmify.mjs 从 ../../condition-detail.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState as useStateCDD } from 'react';
import { useStrings, useIsZh } from '../data/i18n.jsx';
import { Clauses } from './atoms.jsx';
import { CdIcon } from './conditions-page.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
import { TxIcon } from './treatments-page.jsx';
// condition-detail.jsx — shared template for /Conditions/{slug}.html pages
//
// Reads STRINGS.conditions.details[slug] + STRINGS.conditions.detailChrome.
// Same architecture as treatment-detail.jsx — 7 blocks, language-aware,
// reuses Nav + Footer from the homepage and TxIcon from treatments-page.jsx
// for the hero macro placeholder + the treatment service cards.
//
// Honest, non-overclaiming health language throughout — "commonly used for /
// supports / often / may help" only. No cure or guarantee claims. The
// Practitioners block intentionally stays a placeholder (per build
// instructions); real roster + per-condition mapping is pending client data.


const RichP = ({ html, style }) => (
  <p style={style} dangerouslySetInnerHTML={{ __html: html }} />
);
const RichSpan = ({ html, style }) => (
  <span style={style} dangerouslySetInnerHTML={{ __html: html }} />
);

// ============================================================
// HERO PLACEHOLDER — sepia/cream macro panel with the condition's
// small icon drawn large but soft. Honest about being a placeholder.
// (Mirrors TDHeroPlaceholder but uses CdIcon from conditions-page.jsx.)
// ============================================================
const CDDHeroPlaceholder = ({ kind, alt }) => {
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <div role="img" aria-label={alt} style={{
    position: 'relative', width: '100%', height: '100%',
    background:
      'radial-gradient(ellipse at 30% 25%, var(--cream-50) 0%, var(--cream-100) 45%, var(--cream-200) 100%)',
    border: '1px solid var(--sepia-100)',
    borderRadius: 4,
    overflow: 'hidden',
    display: 'grid', placeItems: 'center',
  }}>
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(154,110,69,0.05) 0 1px, transparent 1px 8px)',
    }} />
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      background:
        'radial-gradient(ellipse at 90% 90%, rgba(154,110,69,0.10) 0%, rgba(154,110,69,0) 50%)',
    }} />
    <div style={{
      width: 'min(260px, 56%)',
      opacity: 0.55,
      color: 'var(--sepia-400)',
      display: 'grid', placeItems: 'center',
    }}>
      <div style={{ width: '100%' }}>
        <CdIcon kind={kind} />
      </div>
    </div>
    {/* 这里原本在插画底部压一行「图片即将上线 / Photography coming soon」。
        插画本身是画好的完整设计，加这行字等于对每位访客说「这站还没做完」，
        在诊所类站点上尤其别扭。去掉字、保留插画 —— 正式照片什么时候到都不影响，
        换图的做法见下面 hero 槽位那段注释。 */}
  </div>
);
};

// ============================================================
// BREADCRUMB
// ============================================================
const CDDBreadcrumb = ({ name }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <nav aria-label="Breadcrumb" style={{
      background: 'var(--cream-100)',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container" style={{
        padding: '18px var(--gutter)',
        fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
        fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
        letterSpacing: CDD_IS_ZH ? '0.04em' : '0.14em',
        textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
        color: 'var(--sepia-500)',
        display: 'flex', alignItems: 'center',
        gap: 12, flexWrap: 'wrap',
      }}>
        <a href={chrome.breadcrumbHomeHref} style={{ color: 'var(--sepia-500)' }}>
          {chrome.breadcrumbHome}
        </a>
        <span style={{ opacity: 0.5 }}>/</span>
        <span style={{ color: 'var(--sepia-700)' }}>{name}</span>
      </div>
    </nav>
  );
};

// ============================================================
// 1. HERO
// ============================================================
const CDDHero = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <section data-screen-label="01 Hero" style={{
      background: 'var(--cream-100)',
      padding: '72px 0 88px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="cdd-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 56, alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
              marginBottom: 28,
            }}>{CDD_IS_ZH ? d.category : d.category}</div>
            <h1 style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
              fontWeight: 500,
              fontSize: CDD_IS_ZH
                ? 'clamp(44px, 5.4vw, 80px)'
                : 'clamp(52px, 6vw, 92px)',
              lineHeight: CDD_IS_ZH ? 1.15 : 1.05,
              letterSpacing: CDD_IS_ZH ? '0.02em' : '-0.015em',
              color: 'var(--sepia-700)',
              margin: '0 0 14px 0', textWrap: 'balance',
            }}><Clauses text={d.name} /></h1>
            {CDD_IS_ZH && (
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sepia-400)',
                marginBottom: 28,
              }}>{d.nameEn}</div>
            )}
            <p style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
              fontSize: 'clamp(20px, 1.9vw, 24px)',
              lineHeight: CDD_IS_ZH ? 1.7 : 1.5,
              color: 'var(--sepia-500)',
              margin: '0 0 38px 0', textWrap: 'pretty', maxWidth: 540,
            }}>{d.lede}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a className="btn btn-primary"
                href={chrome.heroPrimaryHref} target="_blank" rel="noopener"
                style={{ padding: '16px 28px' }}>{chrome.heroPrimary}</a>
              <a className="btn btn-outline"
                href="#how-tcm-helps"
                style={{ padding: '16px 28px' }}>{chrome.heroSecondary}</a>
            </div>
          </div>
          <div className="cdd-hero-image" style={{
            aspectRatio: '4/5', width: '100%',
          }}>
            {/* 正式照片到位后：把文件放进 assets/conditions/，然后给
                STRINGS.conditions.details[slug] 加一个 heroPhoto 字段指向它
                （copy.js 与 copy-zh.js 两份都要加），这里就自动换成照片。
                在此之前用插画顶着 —— 插画是完整设计，不是「缺图」的意思。 */}
            {d.heroPhoto ? (
              <img src={d.heroPhoto} alt={d.name} className="warm-image" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                border: '1px solid var(--sepia-100)', borderRadius: 4, display: 'block',
              }} />
            ) : (
              <CDDHeroPlaceholder kind={d.kind}
                alt={`${d.name} ${CDD_IS_ZH ? '场景图' : '— illustration'}`} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 2. HOW TCM CAN HELP
// ============================================================
const CDDHowHelps = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <section id="how-tcm-helps"
      data-screen-label="02 How TCM helps" style={{
      background: 'var(--cream-200)',
      padding: '112px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="cdd-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.howEyebrow}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <RichP html={d.howTcm} style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontSize: CDD_IS_ZH ? 17 : 20, lineHeight: CDD_IS_ZH ? 1.85 : 1.6,
              color: 'var(--sepia-700)',
              margin: 0, textWrap: 'pretty',
            }} />
            {d.howTcmFootnote && (
              <RichP html={d.howTcmFootnote} style={{
                fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
                fontSize: CDD_IS_ZH ? 15 : 17, lineHeight: CDD_IS_ZH ? 1.85 : 1.55,
                color: 'var(--sepia-500)',
                margin: '8px 0 0 0',
                paddingTop: 22, borderTop: '1px solid var(--sepia-200)',
                maxWidth: 620,
              }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 3. TREATMENTS WE OFTEN USE — service cards linking to live treatments.
// Cards mirror TDRelatedCard from treatment-detail.jsx (icon + name + sub).
// ============================================================
const CDDTreatmentCard = ({ slug }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const [hover, setHover] = useStateCDD(false);
  // Find the card data inside the treatments archive groups.
  let card = null;
  for (const g of STRINGS.treatments.groups) {
    for (const c of g.cards) { if (c.slug === slug) { card = c; break; } }
    if (card) break;
  }
  if (!card) return null;
  const live = (STRINGS.treatments.live || []).includes(slug);
  const suffix = CDD_IS_ZH ? '-ZH' : '';
  // 同 conditions-page.jsx CdCard / treatments-page.jsx TxCard：不渲染
  // href="#" 的假链接，onClick preventDefault 在零水合的静态站里不会执行。
  const Tag = live ? 'a' : 'div';
  return (
    <Tag
      {...(live ? { href: `Treatments/${slug}${suffix}.html` } : {})}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4, overflow: 'hidden', color: 'inherit',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? '0 10px 28px rgba(43,33,26,0.08)' : 'none',
        borderColor: hover ? 'var(--sepia-200)' : 'var(--sepia-100)',
      }}>
      <TxIcon kind={card.kind} />
      <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          fontFamily: CDD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: 22, lineHeight: 1.2, color: 'var(--sepia-700)',
          textWrap: 'balance',
        }}>{card.name}</div>
        {CDD_IS_ZH && (
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--sepia-400)',
          }}>{card.sub}</div>
        )}
        <div style={{
          fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
          fontSize: CDD_IS_ZH ? 14 : 15, lineHeight: CDD_IS_ZH ? 1.7 : 1.5,
          color: 'var(--sepia-500)', textWrap: 'pretty',
        }}>{card.tagline}</div>
      </div>
    </Tag>
  );
};

const CDDTreatments = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  if (!d.treatments || !d.treatments.length) return null;
  return (
    <section data-screen-label="03 Treatments" style={{
      background: 'var(--cream-100)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
            letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
            textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
            color: 'var(--sepia-500)',
          }}>{chrome.treatmentsEyebrow}</div>
        </div>
        <div className="cdd-treatments-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 24,
        }}>
          {d.treatments.map((slug) => <CDDTreatmentCard key={slug} slug={slug} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 4. PRACTITIONERS — restrained placeholder only. No specific names.
// ============================================================
const CDDPractitioners = () => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <section data-screen-label="04 Practitioners" style={{
      background: 'var(--cream-200)',
      padding: '96px 0',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="cdd-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
          alignItems: 'baseline',
        }}>
          <div>
            <div style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.practitionersEyebrow}</div>
          </div>
          <div>
            <p style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
              fontSize: CDD_IS_ZH ? 18 : 22, lineHeight: CDD_IS_ZH ? 1.75 : 1.5,
              color: 'var(--sepia-600)',
              margin: '0 0 26px 0', maxWidth: 640, textWrap: 'pretty',
            }}>{chrome.practitionersBody}</p>
            <a href={chrome.practitionersHref} style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 14 : 12, fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-700)',
              borderBottom: '1px solid var(--sepia-300)', paddingBottom: 4,
            }}>{chrome.practitionersLink}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 5. WHAT TO EXPECT
// ============================================================
const CDDWhatToExpect = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <section data-screen-label="05 What to expect" style={{
      background: 'var(--cream-100)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="cdd-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.whatToExpectEyebrow}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <RichP html={d.whatToExpect} style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontSize: CDD_IS_ZH ? 17 : 20, lineHeight: CDD_IS_ZH ? 1.85 : 1.6,
              color: 'var(--sepia-700)',
              margin: 0, textWrap: 'pretty',
            }} />
            {d.whatToExpectFootnote && (
              <RichP html={d.whatToExpectFootnote} style={{
                fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
                fontSize: CDD_IS_ZH ? 15 : 17, lineHeight: CDD_IS_ZH ? 1.85 : 1.55,
                color: 'var(--sepia-500)',
                margin: '8px 0 0 0',
                paddingTop: 22, borderTop: '1px solid var(--sepia-200)',
                maxWidth: 620,
              }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 6. FAQ — static, editorial. Question in serif/display, answer in body.
// ============================================================
const CDDFaq = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  if (!d.faqs || !d.faqs.length) return null;
  return (
    <section data-screen-label="06 FAQ" style={{
      background: 'var(--cream-200)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="cdd-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: CDD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: CDD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: CDD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.faqEyebrow}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {d.faqs.map((qa, i) => (
              <div key={i} style={{
                padding: i === 0 ? '0 0 28px' : '28px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--sepia-200)',
              }}>
                <div style={{
                  fontFamily: CDD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: CDD_IS_ZH ? 22 : 24, lineHeight: 1.3,
                  color: 'var(--sepia-700)', marginBottom: 10,
                  textWrap: 'balance',
                }}>{qa.q}</div>
                <RichP html={qa.a} style={{
                  fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                  fontStyle: CDD_IS_ZH ? 'normal' : 'normal',
                  fontSize: CDD_IS_ZH ? 16 : 18, lineHeight: CDD_IS_ZH ? 1.8 : 1.55,
                  color: 'var(--sepia-600)', margin: 0, textWrap: 'pretty',
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 7. BOOK CTA BAND — deep sepia, vermilion + outline
// ============================================================
const CDDBookCTA = ({ d }) => {
  const STRINGS = useStrings();
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.conditions.detailChrome;
  return (
    <section data-screen-label="07 Book" style={{
      background: 'var(--sepia-700)', color: 'var(--cream-100)',
      padding: '96px 0',
    }}>
      <div className="container" style={{
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: 36,
      }}>
        <div style={{ flex: '1 1 540px', minWidth: 280 }}>
          <div style={{
            fontFamily: CDD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
            fontWeight: 500,
            fontSize: CDD_IS_ZH ? 'clamp(26px, 2.9vw, 38px)' : 'clamp(30px, 3.2vw, 44px)',
            lineHeight: CDD_IS_ZH ? 1.3 : 1.15,
            color: 'var(--cream-50)',
            marginBottom: 16, textWrap: 'balance',
          }}>{chrome.bookHeadline(d.name)}</div>
          <div style={{
            fontFamily: CDD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
            fontStyle: CDD_IS_ZH ? 'normal' : 'italic',
            fontSize: CDD_IS_ZH ? 16 : 18, color: 'var(--cream-300)',
            maxWidth: 620, lineHeight: 1.6,
          }}>{chrome.bookSub}</div>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn btn-primary"
            href={chrome.bookPrimaryHref} target="_blank" rel="noopener"
            style={{ padding: '18px 32px' }}>{chrome.bookPrimary}</a>
          <a className="btn btn-outline"
            href={chrome.bookSecondaryHref}
            style={{
              color: 'var(--cream-50)',
              borderColor: 'rgba(247,241,229,0.55)',
              padding: '18px 32px',
            }}>{chrome.bookSecondary}</a>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// JSON-LD — MedicalWebPage. Educational only — describes the page
// (about this condition area + the therapies we use). NOT a cure
// claim and NOT a MedicalCondition entity which would imply medical
// authority beyond what we offer.
// ============================================================
const CDDJsonLd = ({ d }) => {
  const CDD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const json = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: d.name,
    inLanguage: CDD_IS_ZH ? 'zh-CN' : 'en-CA',
    description: d.seoDescription,
    about: {
      '@type': 'Thing',
      name: d.name,
      alternateName: CDD_IS_ZH ? d.nameEn : d.nameZh,
    },
    mentions: (d.treatments || []).map((slug) => ({
      '@type': 'MedicalTherapy',
      name: slug.replace(/-/g, ' '),
    })),
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
};

// ============================================================
// PAGE — parametric on slug
// ============================================================
const ConditionDetailPage = ({ slug }) => {
  const STRINGS = useStrings();
  const d = STRINGS.conditions.details && STRINGS.conditions.details[slug];
  if (!d) {
    return (
      <>
        <Nav theme="light" active={STRINGS.nav.items[1]} />
        <div className="container" style={{ padding: '120px var(--gutter)' }}>
          <h1>Missing condition data for "{slug}".</h1>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <CDDJsonLd d={d} />
      <Nav theme="light" active={STRINGS.nav.items[1]} />
      <CDDBreadcrumb name={d.name} />
      <CDDHero d={d} />
      <CDDHowHelps d={d} />
      <CDDTreatments d={d} />
      <CDDPractitioners />
      <CDDWhatToExpect d={d} />
      <CDDFaq d={d} />
      <CDDBookCTA d={d} />
      <Footer />
    </>
  );
};


export { RichP, RichSpan, CDDHeroPlaceholder, CDDBreadcrumb, CDDHero, CDDHowHelps, CDDTreatmentCard, CDDTreatments, CDDPractitioners, CDDWhatToExpect, CDDFaq, CDDBookCTA, CDDJsonLd, ConditionDetailPage };
