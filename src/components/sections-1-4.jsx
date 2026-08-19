// ⚠️ 由 scripts/esmify.mjs 从 ../../sections-1-4.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState, useEffect } from 'react';
import { useStrings, useCopy, useIsZh } from '../data/i18n.jsx';
import { resources } from '../data/resources.js';
import { HeroTopScrim, Clauses, ApproachMacro } from './atoms.jsx';
// Top-level sections: Hero, Trust, Practitioners, Approach
// Reads COPY + atoms


// ============================================================
// NAV
// ============================================================
const Nav = ({ theme = 'dark', active = null, bookHref = null }) => {
  const STRINGS = useStrings();
  const navItems = STRINGS.nav.items;
  const isZh = STRINGS.lang === 'zh';
  const navBookHref = bookHref || (STRINGS.bookingByClinic && STRINGS.bookingByClinic['Richmond']) || 'https://canadianwesterntcmclinic.janeapp.com';
  const navPages = ['Treatments', 'Conditions', 'Practitioners', 'Locations', 'About', 'Journal'];
  const navHref = (i) => (navPages[i] ? `${navPages[i]}${isZh ? '-ZH' : ''}.html` : '#');
  const dark = theme === 'dark';
  const ink = dark ? 'var(--cream-50)' : 'var(--sepia-700)';
  const inkMuted = dark ? 'rgba(247,241,229,0.3)' : 'rgba(58,44,24,0.2)';
  const logoFilter = dark ? 'brightness(0) invert(1)' : 'none';
  return (
    <nav style={{
      position: dark ? 'absolute' : 'relative',
      top: 0, left: 0, right: 0, zIndex: 10,
      padding: '24px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      color: ink,
      background: dark ? 'transparent' : 'var(--cream-100)',
      borderBottom: dark ? 'none' : '1px solid var(--sepia-100)',
    }}>
      <style>{`
        nav .nav-logo-lockup { flex-shrink: 0; }
        nav .nav-logo-text { white-space: nowrap; }
        @media (max-width: 1440px){
          nav .nav-links a { padding: 8px 14px !important; letter-spacing: 0.05em !important; font-size: 12px !important; }
          nav .nav-logo-text { font-size: 17px !important; padding-left: 14px !important; }
          nav .nav-logo-img { height: 84px !important; }
        }
        @media (max-width: 1300px){
          nav .nav-logo-text { display: none !important; }
          nav .nav-links a { padding: 8px 12px !important; }
        }
        @media (max-width: 980px){
          nav .nav-links { display: none !important; }
        }
        @media (max-width: 768px){
          nav { padding: 16px 20px !important; }
          nav .nav-logo-img { height: 64px !important; }
        }
      `}</style>
      <div className="nav-logo-lockup" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <a href={STRINGS.lang === 'zh' ? 'Homepage-ZH.html' : 'Homepage.html'} style={{ display: 'flex', alignItems: 'center', gap: 18, color: 'inherit' }}>
          <img className="nav-logo-img" src={resources.r_brand_logo_tight_avif} alt="加西中医 Canadian Western TCM" style={{
            height: 110, width: 'auto', display: 'block',
            filter: logoFilter,
          }} />
          <div className="nav-logo-text" style={{
            fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: ink, lineHeight: 1.25,
            borderLeft: `1px solid ${inkMuted}`,
            paddingLeft: 22,
          }}>
            Canadian<br />Western TCM
          </div>
        </a>
      </div>
      <ul className="nav-links" style={{
        display: 'flex', alignItems: 'center', gap: 0,
        fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: isZh ? 'var(--font-sans-zh)' : 'var(--font-sans)',
      }}>
        {navItems.map((item, i) => {
          const isActive = active && active === item;
          return (
            <li key={item} style={{
              padding: 0,
              borderLeft: i === 0 ? 'none' : `1px solid ${inkMuted}`,
              position: 'relative',
              color: isActive ? ink : (dark ? ink : 'var(--sepia-500)'),
              opacity: isActive ? 1 : (dark ? 0.92 : 1),
            }}>
              <a href={navHref(i)} style={{ display: 'block', padding: '8px 22px', color: 'inherit', textDecoration: 'none', whiteSpace: 'nowrap' }}>{item}</a>
              {isActive && (
                <span style={{
                  position: 'absolute', left: 22, right: 22, bottom: -2,
                  height: 2, background: dark ? 'var(--cream-50)' : 'var(--sepia-700)',
                }} />
              )}
            </li>
          );
        })}
      </ul>
      <div style={{
        display: 'flex', gap: 18, alignItems: 'center',
        fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>
        <span style={{
          display: 'inline-flex', gap: 10, alignItems: 'center',
          // 语言切换器不能断行 —— 没有这两个属性时「中文」会在两个字之间折行，
          // 在导航被挤窄的宽度区间能稳定复现。旧站同样有这个问题，不是迁移引入的。
          whiteSpace: 'nowrap', flex: 'none',
        }}>
          <span style={{ opacity: isZh ? 0.55 : 1 }}>
            {isZh
              ? <a href={STRINGS.otherLang.href} style={{ color: ink }}>{STRINGS.otherLang.label}</a>
              : <>EN</>}
          </span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span style={{ opacity: isZh ? 1 : 0.55, fontFamily: 'var(--font-serif-zh)' }}>
            {isZh
              ? <>中文</>
              : <a href={STRINGS.otherLang.href} style={{ color: ink }}>{STRINGS.otherLang.label}</a>}
          </span>
        </span>
        <a className="btn btn-outline" href={navBookHref} target="_blank" rel="noopener" style={{
          background: 'transparent',
          borderColor: dark ? 'rgba(247,241,229,0.6)' : 'var(--sepia-300)',
          color: ink, padding: '14px 26px', fontSize: 12, fontWeight: 700,
          fontFamily: isZh ? 'var(--font-sans-zh)' : 'var(--font-sans)',
        }}>{STRINGS.nav.cta}</a>
      </div>
    </nav>
  );
};

// ============================================================
// 1. HERO
// ============================================================
const Hero = ({ heroIndex = 0 }) => {
  const COPY = useCopy();
  const slides = COPY.hero.slides;
  // 站点整体是纯静态渲染（没有任何页面挂 client:* 水合指令），浏览器里
  // 一行组件 JS 都不会跑，之前这里的 useState/useInterval 轮播、左右箭头、
  // 圆点全是死代码 —— 看着能交互，点了没反应，也永远不会自动切换。
  // 改成单张静态大图，不再假装能轮播。
  const c = slides[heroIndex] || slides[0];

  return (
    <section data-screen-label="01 Hero" style={{
      position: 'relative', width: '100%', height: '90vh', minHeight: 640,
      overflow: 'hidden', background: 'var(--sepia-700)',
    }}>
      <Nav />
      <img src={c.photo} alt="" className="warm-image" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: c.crop || '50% 50%',
        filter: 'saturate(0.88) contrast(1.04) brightness(0.92)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top right, rgba(20,12,4,0.62) 0%, rgba(20,12,4,0.25) 40%, rgba(20,12,4,0) 70%)',
      }} />

      <HeroTopScrim />

      <div className="hero-title-block" style={{
        position: 'absolute', left: 0, right: 0, bottom: 110,
      }}>
        <div className="container">
          <div style={{
            color: 'var(--cream-50)', maxWidth: 760,
          }}>
            <div style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', opacity: 0.85, marginBottom: 28,
            }}>{c.eyebrow}</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 'clamp(44px, 5.4vw, 72px)', lineHeight: 1.05,
              letterSpacing: '-0.015em', margin: '0 0 18px 0',
              color: 'var(--cream-50)',
              maxWidth: 880,
              textWrap: 'balance',
            }}><Clauses text={c.h1} /></h1>
            {c.zh && (
              <div className="hero-title-zh" style={{
                fontFamily: 'var(--font-serif-zh)', fontWeight: 500,
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                letterSpacing: '0.15em', color: 'var(--cream-200)',
                opacity: 0.78, marginBottom: 28,
              }}>{c.zh}</div>
            )}
            <div className="hero-title-sub" style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 22, lineHeight: 1.4, color: 'var(--cream-100)',
              opacity: 0.92, marginBottom: 44, maxWidth: 560,
              marginTop: c.zh ? 0 : 28,
            }}>{c.sub}</div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={COPY.hero.primaryHref} target="_blank" rel="noopener"
                className="btn btn-primary">{COPY.hero.primary}</a>
              <a href={COPY.hero.secondaryHref} className="btn btn-outline" style={{
                color: 'var(--cream-50)', borderColor: 'rgba(247,241,229,0.55)',
              }}>{COPY.hero.secondary}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 2. TRUST STRIP
// ============================================================
const TrustStrip = () => {
  const COPY = useCopy();
  return (
  <section data-screen-label="02 Trust" style={{
    background: 'var(--cream-100)',
    borderTop: '1px solid rgba(184,148,96,0.25)',
    borderBottom: '1px solid rgba(184,148,96,0.25)',
    padding: '32px 0',
  }}>
    <div className="container" style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      alignItems: 'center', gap: 0,
    }}>
      {COPY.trust.map((t, i) => (
        <div key={i} style={{
          textAlign: 'center', padding: '0 24px',
          borderLeft: i === 0 ? 'none' : '1px solid var(--copper)',
          fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--sepia-500)',
        }}>{t}</div>
      ))}
    </div>
  </section>
  );
};

// ============================================================
// 3. FEATURED PRACTITIONERS
// ============================================================
const HOME_PR_RING = '#B89460';
const HOME_PR_GOLD = 'var(--sepia-300)';

// 4-bird silhouette corner accent (same vocabulary as the archive anchor card)
const HomePrBirds = () => (
  <svg width="46" height="30" viewBox="0 0 46 30" aria-hidden="true" style={{
    position: 'absolute', top: 14, right: 14, opacity: 0.34, pointerEvents: 'none',
  }}>
    <g stroke={HOME_PR_RING} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
      <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
    </g>
  </svg>
);

const PractitionerCard = ({ p }) => {
  // 原为模块顶层常量（sections-1-4.jsx:266）。Astro 构建时中英页同进程，
  // 模块常量只求值一次会导致中英串台，因此改为每次渲染取当前语言。
  const STRINGS = useStrings();
  const HOME_PR_IS_ZH = useIsZh();
  const [hover, setHover] = useState(false);
  const _sfx = HOME_PR_IS_ZH ? '-ZH' : '';
  const _list = (typeof STRINGS !== 'undefined' && STRINGS.practitioners && STRINGS.practitioners.list) || [];
  const _m = _list.find((x) => x.name === p.name);
  const _live = _m && (STRINGS.practitioners.live || []).includes(_m.slug);
  const profileHref = _live ? `Practitioners/${_m.slug}${_sfx}.html` : undefined;
  return (
    <a
      href={profileHref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: '0 0 300px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        background: 'var(--cream-50)',
        border: `1px solid ${hover ? 'var(--sepia-200)' : 'var(--sepia-100)'}`,
        borderRadius: 4, padding: '42px 28px 32px', position: 'relative',
        textDecoration: 'none', color: 'inherit', cursor: profileHref ? 'pointer' : 'default',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 18px 38px -22px rgba(58,44,24,0.45), 0 4px 10px -6px rgba(58,44,24,0.2)'
          : '0 1px 2px rgba(58,44,24,0.04)',
      }}>
      <HomePrBirds />

      {/* circular portrait + sepia-gold ring */}
      <div style={{
        width: 150, height: 150, borderRadius: '50%', overflow: 'hidden', position: 'relative',
        border: `3px solid ${HOME_PR_RING}`,
        boxShadow: '0 0 0 6px var(--cream-100), inset 0 0 0 1px rgba(184,148,96,0.25)',
        background: 'var(--cream-300)',
      }}>
        <img src={`assets/practitioners/${p.photo}`} alt={`Portrait of ${p.name}`} className="warm-image" style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: p.crop || '50% 25%', display: 'block',
        }} />
      </div>

      {/* name + optional badge */}
      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26,
          lineHeight: 1.1, color: HOME_PR_GOLD, margin: 0, whiteSpace: 'nowrap',
        }}>{p.name}</h3>
        {p.badge && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--sepia-500)', background: 'var(--cream-200)',
            border: '1px solid var(--sepia-100)', borderRadius: 4, padding: '4px 10px',
            whiteSpace: 'nowrap',
          }}>{p.badge}</span>
        )}
      </div>

      {/* ▶ credential row */}
      <div style={{
        marginTop: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        gap: '5px 12px', maxWidth: 252,
      }}>
        {p.creds.map((c, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontFamily: HOME_PR_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: 12, fontWeight: 700, color: 'var(--sepia-600)', lineHeight: 1.3,
          }}>
            <span aria-hidden="true" style={{ color: HOME_PR_RING, fontSize: 8 }}>▶</span>{c}
          </span>
        ))}
      </div>

      {/* italic subtitle */}
      <div style={{
        marginTop: 14,
        fontFamily: HOME_PR_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontStyle: HOME_PR_IS_ZH ? 'normal' : 'italic',
        fontSize: HOME_PR_IS_ZH ? 13 : 14, lineHeight: 1.55,
        color: 'var(--sepia-400)', maxWidth: 252,
      }}>{p.subtitle}</div>

      {/* borderless small-caps clinic line — pinned to the bottom for a uniform format */}
      <div style={{
        marginTop: 'auto', paddingTop: 18, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
        letterSpacing: HOME_PR_IS_ZH ? '0.08em' : '0.16em', color: 'var(--sepia-400)',
      }}>{p.clinic}</div>
      {profileHref && (
        <div style={{
          marginTop: 14, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: hover ? 'var(--vermilion)' : 'var(--sepia-500)',
          transition: 'color var(--dur) var(--ease)',
        }}>{HOME_PR_IS_ZH ? '查看简介 →' : 'View profile →'}</div>
      )}
    </a>
  );
};

const PractitionerCTACard = () => {
  const STRINGS = useStrings();
  const ctaHref = (STRINGS.practitionerCTA && STRINGS.practitionerCTA.href)
    || (STRINGS.lang === 'zh' ? 'Practitioners-ZH.html' : 'Practitioners.html');
  return (
  <a href={ctaHref} style={{
    flex: '0 0 280px', aspectRatio: '4/5',
    background: 'var(--cream-100)',
    border: '1px solid var(--sepia-200)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: 40, textAlign: 'center', cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all var(--dur) var(--ease)',
  }}
  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--cream-300)'; }}
  onMouseOut={(e) => { e.currentTarget.style.background = 'var(--cream-100)'; }}>
    <div style={{
      fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500,
      color: 'var(--sepia-700)', lineHeight: 1.2, marginBottom: 16,
    }}>{STRINGS.practitionerCTA.title}</div>
    <div style={{
      fontSize: 11, fontWeight: 500, letterSpacing: '0.16em',
      textTransform: 'uppercase', color: 'var(--sepia-500)',
    }}>{STRINGS.practitionerCTA.link}</div>
  </a>
  );
};

const Practitioners = () => {
  const COPY = useCopy();
  const c = COPY.practitioners;
  return (
    <section data-screen-label="03 Practitioners" style={{ padding: '120px 0 96px', background: 'var(--cream-200)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr',
          gap: 80, marginBottom: 64,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
            <h2 className="h-section"><Clauses text={c.h2} /></h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic',
            lineHeight: 1.5, color: 'var(--sepia-500)', margin: 0,
            alignSelf: 'end', maxWidth: 560,
          }}>{c.sub}</p>
        </div>
      </div>

      <div style={{
        display: 'flex', gap: 28, padding: '0 64px', overflowX: 'auto',
        alignItems: 'stretch',
        scrollbarWidth: 'none', paddingBottom: 16,
      }}>
        <style>{`
          section[data-screen-label="03 Practitioners"] > div:last-child::-webkit-scrollbar { display: none; }
        `}</style>
        {c.cards.map((p, i) => <PractitionerCard key={i} p={p} />)}
        <PractitionerCTACard />
      </div>
    </section>
  );
};

// ============================================================
// 4. OUR APPROACH
// ============================================================
const Approach = () => {
  const COPY = useCopy();
  const c = COPY.approach;
  const macros = ['cultivation', 'standards', 'individual'];
  return (
    <section data-screen-label="04 Approach" style={{ background: 'var(--cream-100)', padding: '72px 0 80px' }}>
      <div className="container">
        <h2 className="h-section" style={{ marginBottom: 40, maxWidth: 720 }}>{c.h2}</h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 56,
        }}>
          {c.cols.map((col, i) => (
            <div key={i}>
              <ApproachMacro kind={macros[i]} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 500,
                  fontSize: 26, lineHeight: 1.25, color: 'var(--sepia-700)',
                  margin: 0,
                }}>{col.h3}</h3>
                {col.sub && (
                  <div style={{
                    fontFamily: 'var(--font-serif-zh)', fontSize: 14,
                    letterSpacing: '0.15em', color: 'var(--sepia-400)',
                  }}>{col.sub}</div>
                )}
              </div>
              <p className="body" style={{ margin: 0 }}>{col.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export { Nav, Hero, TrustStrip, Practitioners, Approach };
