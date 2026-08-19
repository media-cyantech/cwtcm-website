// ⚠️ 由 scripts/esmify.mjs 从 ../../treatment-detail.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState as useStateTD } from 'react';
import { useStrings, useIsZh } from '../data/i18n.jsx';
import { Clauses } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
import { TxIcon } from './treatments-page.jsx';
// treatment-detail.jsx — shared template for /Treatments/{slug}.html pages
//
// Reads STRINGS.treatments.details[slug] + STRINGS.treatments.detailChrome
// + STRINGS.treatments.conditionLabels. Renders the 7-block treatment page
// per TREATMENT-DETAIL-template-spec.md. Reuses Nav + Footer from the
// homepage; reuses TxIcon from treatments-page.jsx for related-treatment
// cards and the hero macro placeholder.
//
// Practitioners block intentionally renders a short placeholder line +
// link to the practitioners archive — real roster + mapping is pending
// client data. Don't surface individual practitioner names here yet.


// HTML-bearing string → React node. Treatment copy occasionally needs
// inline <em> for italicized terms (qi, suitability notes). Using
// dangerouslySetInnerHTML on a span keeps the copy in STRINGS readable.
const RichSpan = ({ html, style }) => (
  <span style={style} dangerouslySetInnerHTML={{ __html: html }} />
);
const RichP = ({ html, style }) => (
  <p style={style} dangerouslySetInnerHTML={{ __html: html }} />
);

// ============================================================
// HERO PLACEHOLDER — a calm sepia/cream macro panel, with the
// treatment's icon kind drawn LARGE but soft. Honest about being
// a placeholder; not a broken empty box.
// ============================================================
const TDHeroPlaceholder = ({ kind, alt }) => {
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
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
    {/* very faint diagonal linen */}
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      backgroundImage:
        'repeating-linear-gradient(45deg, rgba(154,110,69,0.05) 0 1px, transparent 1px 8px)',
    }} />
    {/* soft warm vignette in the lower-right */}
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      background:
        'radial-gradient(ellipse at 90% 90%, rgba(154,110,69,0.10) 0%, rgba(154,110,69,0) 50%)',
    }} />
    {/* The icon — large but at 0.55 opacity so it sits as a quiet mark,
        not a hero illustration. */}
    <div style={{
      width: 'min(280px, 60%)',
      opacity: 0.55,
      color: 'var(--sepia-400)',
      display: 'grid', placeItems: 'center',
    }}>
      <div style={{ width: '100%' }}>
        <TxIcon kind={kind} />
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
// BREADCRUMB — "Treatments / Acupuncture"
// ============================================================
const TDBreadcrumb = ({ name }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <nav aria-label="Breadcrumb" style={{
      background: 'var(--cream-100)',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container" style={{
        padding: '18px var(--gutter)',
        fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
        fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
        letterSpacing: TD_IS_ZH ? '0.04em' : '0.14em',
        textTransform: TD_IS_ZH ? 'none' : 'uppercase',
        color: 'var(--sepia-500)',
        display: 'flex', alignItems: 'center',
        gap: 12, flexWrap: 'wrap',
      }}>
        <a href={chrome.breadcrumbHomeHref} style={{
          color: 'var(--sepia-500)', borderBottom: '1px solid transparent',
        }}>{chrome.breadcrumbHome}</a>
        <span style={{ opacity: 0.5 }}>/</span>
        <span style={{ color: 'var(--sepia-700)' }}>{name}</span>
      </div>
    </nav>
  );
};

// ============================================================
// 1. HERO — two-up on desktop, stacked on mobile
// ============================================================
const TDHero = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <section data-screen-label="01 Hero" style={{
      background: 'var(--cream-100)',
      padding: '72px 0 88px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="td-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 56, alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: TD_IS_ZH ? '0.18em' : '0.16em',
              textTransform: TD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
              marginBottom: 28,
            }}>{d.category}</div>
            <h1 style={{
              fontFamily: TD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
              fontWeight: 500,
              fontSize: TD_IS_ZH
                ? 'clamp(44px, 5.4vw, 80px)'
                : 'clamp(52px, 6vw, 92px)',
              lineHeight: TD_IS_ZH ? 1.15 : 1.05,
              letterSpacing: TD_IS_ZH ? '0.02em' : '-0.015em',
              color: 'var(--sepia-700)',
              margin: '0 0 14px 0', textWrap: 'balance',
            }}><Clauses text={d.name} /></h1>
            {TD_IS_ZH && (
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
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontStyle: TD_IS_ZH ? 'normal' : 'italic',
              fontSize: 'clamp(20px, 1.9vw, 24px)',
              lineHeight: TD_IS_ZH ? 1.7 : 1.5,
              color: 'var(--sepia-500)',
              margin: '0 0 38px 0', textWrap: 'pretty', maxWidth: 540,
            }}>{d.lede}</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a className="btn btn-primary"
                href={chrome.heroPrimaryHref} target="_blank" rel="noopener"
                style={{ padding: '16px 28px' }}>{chrome.heroPrimary}</a>
              <a className="btn btn-outline"
                href="#practitioners"
                style={{ padding: '16px 28px' }}>{chrome.heroSecondary}</a>
            </div>
          </div>
          <div className="td-hero-image" style={{
            aspectRatio: '4/5', width: '100%',
          }}>
            {/* 正式照片到位后：把文件放进 assets/treatments/，然后给
                STRINGS.treatments.details[slug] 加一个 heroPhoto 字段指向它
                （copy.js 与 copy-zh.js 两份都要加），这里就自动换成照片。
                在此之前用插画顶着 —— 插画是完整设计，不是「缺图」的意思。 */}
            {d.heroPhoto ? (
              <img src={d.heroPhoto} alt={d.name} className="warm-image" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                border: '1px solid var(--sepia-100)', borderRadius: 4, display: 'block',
              }} />
            ) : (
              <TDHeroPlaceholder kind={d.kind}
                alt={`${d.name} ${TD_IS_ZH ? '场景图' : '— illustration'}`} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 2. WHAT IT IS
// ============================================================
const TDWhatIs = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <section data-screen-label="02 What it is" style={{
      background: 'var(--cream-200)',
      padding: '112px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="td-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: TD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: TD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.whatIsItEyebrow}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {d.whatIsIt.map((para, i) => (
              <RichP key={i} html={para} style={{
                fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                fontStyle: 'normal',
                fontSize: TD_IS_ZH ? 17 : 20, lineHeight: TD_IS_ZH ? 1.85 : 1.6,
                color: 'var(--sepia-700)',
                margin: 0, textWrap: 'pretty',
              }} />
            ))}
            {d.whatIsItFootnote && (
              <RichP html={d.whatIsItFootnote} style={{
                fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                fontStyle: TD_IS_ZH ? 'normal' : 'italic',
                fontSize: TD_IS_ZH ? 15 : 17, lineHeight: TD_IS_ZH ? 1.85 : 1.55,
                color: 'var(--sepia-500)',
                margin: '8px 0 0 0',
                paddingTop: 22, borderTop: '1px solid var(--sepia-200)',
                maxWidth: 620,
              }} />
            )}
            {d.whiteRockNote && (
              <div style={{
                marginTop: 16,
                padding: '20px 22px',
                background: 'var(--cream-50)',
                border: '1px solid var(--sepia-100)',
                borderRadius: 4,
                display: 'flex', flexWrap: 'wrap', gap: 14,
                alignItems: 'baseline', justifyContent: 'space-between',
              }}>
                <div style={{
                  fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                  fontStyle: TD_IS_ZH ? 'normal' : 'italic',
                  fontSize: TD_IS_ZH ? 15 : 17, color: 'var(--sepia-600)',
                  flex: '1 1 320px',
                }}>{d.whiteRockNote.line}</div>
                <a href={d.whiteRockNote.href} target="_blank" rel="noopener" style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
                  textTransform: TD_IS_ZH ? 'none' : 'uppercase',
                  color: 'var(--sepia-700)',
                  borderBottom: '1px solid var(--sepia-300)', paddingBottom: 3,
                }}>{d.whiteRockNote.link}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 3. WHAT A SESSION IS LIKE
// ============================================================
const TDWhatToExpect = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <section data-screen-label="03 What a session is like" style={{
      background: 'var(--cream-100)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="td-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
        }}>
          <div>
            <div style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: TD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: TD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.whatToExpectEyebrow}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {d.whatToExpect.map((para, i) => (
              <RichP key={i} html={para} style={{
                fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
                fontSize: TD_IS_ZH ? 17 : 20, lineHeight: TD_IS_ZH ? 1.85 : 1.6,
                color: 'var(--sepia-700)',
                margin: 0, textWrap: 'pretty',
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 4. CONDITIONS — small cards linking to Conditions/{slug}.html (#)
// ============================================================
const TDConditionCard = ({ slug }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const [hover, setHover] = useStateTD(false);
  const label = STRINGS.treatments.conditionLabels[slug];
  if (!label) return null;
  return (
    <a
      href={`Conditions/${slug}${TD_IS_ZH ? '-ZH' : ''}.html`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        gap: 22,
        padding: '24px 22px 22px',
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4, color: 'inherit',
        minHeight: 156,
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? '0 8px 22px rgba(43,33,26,0.07)' : 'none',
        borderColor: hover ? 'var(--sepia-200)' : 'var(--sepia-100)',
      }}>
      <div style={{
        fontFamily: TD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontWeight: 500,
        fontSize: TD_IS_ZH ? 22 : 24, lineHeight: 1.2,
        color: 'var(--sepia-700)',
      }}>{label.name}</div>
      <div style={{
        fontFamily: TD_IS_ZH ? 'var(--font-sans)' : 'var(--font-serif-zh)',
        fontSize: TD_IS_ZH ? 11 : 13,
        fontWeight: TD_IS_ZH ? 600 : 500,
        letterSpacing: '0.16em',
        textTransform: TD_IS_ZH ? 'uppercase' : 'none',
        color: 'var(--sepia-400)',
      }}>{TD_IS_ZH ? label.en : 'Explore →'}</div>
    </a>
  );
};

const TDConditions = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <section data-screen-label="04 Often used for" style={{
      background: 'var(--cream-200)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
            letterSpacing: TD_IS_ZH ? '0.22em' : '0.18em',
            textTransform: TD_IS_ZH ? 'none' : 'uppercase',
            color: 'var(--sepia-500)',
          }}>{chrome.conditionsEyebrow}</div>
        </div>
        <div className="td-conditions-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 18,
        }}>
          {d.conditions.map((slug) => <TDConditionCard key={slug} slug={slug} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 5. PRACTITIONERS — restrained placeholder. Per build instructions
// we do NOT render specific practitioner names/cards yet (real
// roster + mapping pending client data).
// ============================================================
const TDPractitioners = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  return (
    <section id="practitioners" data-screen-label="05 Practitioners" style={{
      background: 'var(--cream-100)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div className="td-text-grid" style={{
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80,
          alignItems: 'baseline',
        }}>
          <div>
            <div style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
              letterSpacing: TD_IS_ZH ? '0.22em' : '0.18em',
              textTransform: TD_IS_ZH ? 'none' : 'uppercase',
              color: 'var(--sepia-500)',
            }}>{chrome.practitionersEyebrow}</div>
          </div>
          <div>
            {d.practitionersNote ? (
              <RichP html={d.practitionersNote} style={{
                fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
                fontSize: TD_IS_ZH ? 16 : 16, lineHeight: 1.9,
                color: 'var(--sepia-600)',
                margin: '0 0 26px 0', maxWidth: 720, textWrap: 'pretty',
              }} />
            ) : (
            <p style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
              fontStyle: TD_IS_ZH ? 'normal' : 'italic',
              fontSize: TD_IS_ZH ? 18 : 22, lineHeight: TD_IS_ZH ? 1.75 : 1.5,
              color: 'var(--sepia-600)',
              margin: '0 0 26px 0', maxWidth: 640, textWrap: 'pretty',
            }}>{chrome.practitionersBody}</p>
            )}
            <a href={chrome.practitionersHref} style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: TD_IS_ZH ? 14 : 12, fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: TD_IS_ZH ? 'none' : 'uppercase',
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
// 6. RELATED TREATMENTS — 2-3 service cards linking to other
// detail pages. Live status comes from STRINGS.treatments.live.
// ============================================================
const TDRelatedCard = ({ slug }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const [hover, setHover] = useStateTD(false);
  // Find the card data inside the archive's groups[]
  let card = null;
  for (const g of STRINGS.treatments.groups) {
    for (const c of g.cards) {
      if (c.slug === slug) { card = c; break; }
    }
    if (card) break;
  }
  if (!card) return null;
  const live = (STRINGS.treatments.live || []).includes(slug);
  // Resolve relative to the project root, not the page. Each detail page
  // sits at /Treatments/{slug}.html but uses <base href="../"> so its
  // baseURI is the project root — a bare "acupuncture.html" would 404.
  // ZH pages live at /Treatments/{slug}-ZH.html (site suffix convention).
  const suffix = STRINGS.lang === 'zh' ? '-ZH' : '';
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
      <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          fontFamily: TD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: 24, lineHeight: 1.2, color: 'var(--sepia-700)',
          textWrap: 'balance',
        }}>{card.name}</div>
        {TD_IS_ZH && (
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
          fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: TD_IS_ZH ? 'normal' : 'italic',
          fontSize: TD_IS_ZH ? 14 : 15, lineHeight: TD_IS_ZH ? 1.7 : 1.5,
          color: 'var(--sepia-500)', textWrap: 'pretty',
        }}>{card.tagline}</div>
      </div>
    </Tag>
  );
};

const TDRelated = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
  if (!d.related || !d.related.length) return null;
  return (
    <section data-screen-label="06 Related" style={{
      background: 'var(--cream-200)',
      padding: '104px 0 96px',
      borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: TD_IS_ZH ? 13 : 11, fontWeight: 600,
            letterSpacing: TD_IS_ZH ? '0.22em' : '0.18em',
            textTransform: TD_IS_ZH ? 'none' : 'uppercase',
            color: 'var(--sepia-500)',
          }}>{chrome.relatedEyebrow}</div>
        </div>
        <div className="td-related-grid" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.max(2, Math.min(3, d.related.length))}, minmax(0, 1fr))`,
          gap: 28,
        }}>
          {d.related.map((slug) => <TDRelatedCard key={slug} slug={slug} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 7. BOOK CTA BAND
// ============================================================
const TDBookCTA = ({ d }) => {
  const STRINGS = useStrings();
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const chrome = STRINGS.treatments.detailChrome;
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
            fontFamily: TD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
            fontWeight: 500,
            fontSize: TD_IS_ZH ? 'clamp(26px, 2.9vw, 38px)' : 'clamp(30px, 3.2vw, 44px)',
            lineHeight: TD_IS_ZH ? 1.3 : 1.15,
            color: 'var(--cream-50)',
            marginBottom: 16, textWrap: 'balance',
          }}>{d.bookHeadline || chrome.bookHeadline(d.name)}</div>
          <div style={{
            fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
            fontStyle: TD_IS_ZH ? 'normal' : 'italic',
            fontSize: TD_IS_ZH ? 16 : 18, color: 'var(--cream-300)',
            maxWidth: 620, lineHeight: 1.6,
          }}>{d.bookSub || chrome.bookSub}</div>
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
// JSON-LD — MedicalTherapy. Educational only. No price, no
// overclaiming, no `provider` claim that would imply medical
// authority beyond what we offer.
// ============================================================
const TDJsonLd = ({ d }) => {
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const json = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: d.name,
    alternateName: TD_IS_ZH ? d.nameEn : d.nameZh,
    description: d.seoDescription,
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
};

// ============================================================
// PAGE — parametric on slug
// ============================================================

// ============================================================
// Optional rich sections (client-authored blocks, e.g. herbal forms)
// ============================================================
const TDRichSections = ({ d }) => {
  const TD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  if (!d.richSections || !d.richSections.length) return null;
  return (
    <>
      {d.richSections.map((sec, i) => (
        <section key={i} data-screen-label={`R${i}`} className="section" style={{
          background: i % 2 === 0 ? 'var(--cream-100)' : 'var(--cream-50)',
          borderTop: '1px solid var(--sepia-100)',
        }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <h2 style={{
              fontFamily: TD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
              fontWeight: 500, fontSize: TD_IS_ZH ? 28 : 30,
              color: 'var(--sepia-700)', margin: '0 0 26px',
            }}>{sec.title}</h2>
            <RichP html={sec.html} style={{
              fontFamily: TD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
              fontSize: 16, lineHeight: 2.0, color: 'var(--sepia-600)',
              margin: 0, maxWidth: 800,
            }} />
          </div>
        </section>
      ))}
    </>
  );
};

const TreatmentDetailPage = ({ slug }) => {
  const STRINGS = useStrings();
  const d = STRINGS.treatments.details && STRINGS.treatments.details[slug];
  if (!d) {
    return (
      <>
        <Nav theme="light" active={STRINGS.nav.items[0]} />
        <div className="container" style={{ padding: '120px var(--gutter)' }}>
          <h1>Missing treatment data for "{slug}".</h1>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <TDJsonLd d={d} />
      <Nav theme="light" active={STRINGS.nav.items[0]} />
      <TDBreadcrumb name={d.name} />
      <TDHero d={d} />
      <TDWhatIs d={d} />
      <TDWhatToExpect d={d} />
      <TDRichSections d={d} />
      <TDConditions d={d} />
      <TDPractitioners d={d} />
      <TDRelated d={d} />
      <TDBookCTA d={d} />
      <Footer />
    </>
  );
};


export { RichSpan, RichP, TDHeroPlaceholder, TDBreadcrumb, TDHero, TDWhatIs, TDWhatToExpect, TDConditionCard, TDConditions, TDPractitioners, TDRelatedCard, TDRelated, TDBookCTA, TDJsonLd, TDRichSections, TreatmentDetailPage };
