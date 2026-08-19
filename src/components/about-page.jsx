import { useStrings } from '../data/i18n.jsx';
import { resources } from '../data/resources.js';
import { ApproachMacro, Clauses, HeroTopScrim } from './atoms.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// ⚠️ 由 scripts/esmify.mjs 从 ../../about-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

// ============================================================
// AboutPage — brand story page (About.html, EN)
// ============================================================
// Reads STRINGS.about.en for all copy.
// Reuses shared Nav + Footer + tokens; does NOT add nav items.
// ============================================================

const AboutPage = () => {
  const STRINGS = useStrings();
  const c = STRINGS.about[STRINGS.lang] || STRINGS.about.en;
  return (
    <>
      <AboutHero c={c.hero} />
      <AboutHeritage c={c.heritage} />
      <AboutPractice c={c.practice} />
      <AboutNumbers c={c.numbers} />
      <AboutTeam c={c.team} />
      <AboutClinics c={c.clinics} />
      <AboutCta c={c.cta} />
      <Footer />
    </>
  );
};

// ------------------------------------------------------------
// 1. HERO — sepia heritage image, warm filter
// ------------------------------------------------------------
const AboutHero = ({ c }) => {
  const STRINGS = useStrings();
  const photo = resources.r_brand_logo_avif; // unused, keep below
  const heritagePhoto = 'assets/heritage/hero-richmond-herbal-cabinet-baizigui.jpg';
  return (
    <section data-screen-label="01 Hero" data-comment-anchor="about-hero" className="ab-hero-section" style={{
      position: 'relative',
      minHeight: '78vh',
      display: 'flex', flexDirection: 'column',
      background: 'var(--sepia-700)', color: 'var(--cream-50)',
      overflow: 'hidden',
    }}>
      <img
        src={heritagePhoto}
        alt="Traditional herbal medicine cabinet wall at our Richmond flagship"
        className="warm-image"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'saturate(0.85) contrast(1.04) brightness(0.62) sepia(0.18)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(40,30,16,0.32) 0%, rgba(40,30,16,0.55) 60%, rgba(40,30,16,0.78) 100%)',
      }} />
      <HeroTopScrim />
      <Nav theme="dark" active={STRINGS.nav.items[4]} />
      <div className="ab-hero-content" style={{
        position: 'relative', flex: 1,
        display: 'flex', alignItems: 'flex-end',
        padding: '0 48px 96px',
      }}>
        <div className="container" style={{ padding: 0, maxWidth: 880 }}>
          <div className="eyebrow" style={{
            color: 'rgba(247,241,229,0.78)', marginBottom: 18,
          }}>{c.eyebrow}</div>
          <h1 className="h-display" style={{
            color: 'var(--cream-50)',
            fontSize: 'clamp(48px, 6.4vw, 84px)',
            marginBottom: 22,
          }}><Clauses text={c.h1} /></h1>
          <p className="lede" style={{
            color: 'rgba(247,241,229,0.82)', fontStyle: 'italic',
            maxWidth: 640, marginBottom: 36,
          }}>{c.lede}</p>
          <a
            href={c.primaryHref}
            className="btn btn-primary"
            style={{ padding: '18px 32px' }}
          >{c.primary}</a>
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------
// 2. OUR HERITAGE — editorial herb flat-lay photo + body
// ------------------------------------------------------------
const HeritageHeroImage = () => {
  const STRINGS = useStrings();
  const isZh = STRINGS.lang === 'zh';
  return (
    <div style={{
      width: '100%', aspectRatio: '4/5',
      position: 'relative', overflow: 'hidden',
      border: '1px solid var(--sepia-300)',
    }}>
      <img
        src="assets/heritage/about-heritage-hero.jpg"
        alt={isZh
          ? '中药编辑级 flat-lay — 加西中医传承'
          : 'Editorial flat-lay of Chinese herbs and traditional warm pack — Canadian Western TCM heritage'}
        className="warm-image"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: 'sepia(0.10) saturate(0.94) contrast(1.03) brightness(1.0)',
        }}
      />
    </div>
  );
};

const AboutHeritage = ({ c }) => (
  <section data-screen-label="02 Heritage" className="section" data-comment-anchor="about-heritage">
    <div className="container ab-heritage-grid" style={{
      display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'center',
    }}>
      <div>
        <HeritageHeroImage />
      </div>
      <div style={{ maxWidth: 620 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
        <p className="body" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 2vw, 26px)',
          lineHeight: 1.55,
          fontStyle: 'normal',
          color: 'var(--sepia-600)',
          marginTop: 0,
        }}>{c.body}</p>
      </div>
    </div>
  </section>
);

// ------------------------------------------------------------
// 3. HOW WE PRACTISE — 3 principles
// ------------------------------------------------------------
const AboutPractice = ({ c }) => (
  <section data-screen-label="03 Practice" className="section" data-comment-anchor="about-practice" style={{
    background: 'var(--cream-100)',
    borderTop: '1px solid var(--sepia-100)',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div style={{ maxWidth: 720, marginBottom: 64 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
        <h2 className="h-section" style={{ margin: 0 }}>{c.h2}</h2>
      </div>
      <div className="ab-practice-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 56,
      }}>
        {c.principles.map((p, i) => (
          <div key={i}>
            <ApproachMacro kind={p.kind} />
            <h3 className="h-card" style={{
              fontSize: 24, marginTop: 4, marginBottom: 6,
            }}>{p.h3}</h3>
            {p.zh && (
              <div className="zh" style={{ fontSize: 14, marginBottom: 14 }}>{p.zh}</div>
            )}
            <p className="body" style={{ marginTop: p.zh ? 0 : 14 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ------------------------------------------------------------
// 4. BY THE NUMBERS — text-only trust strip
// ------------------------------------------------------------
const AboutNumbers = ({ c }) => (
  <section data-screen-label="04 Numbers" data-comment-anchor="about-numbers" style={{
    background: 'var(--cream-200)',
    padding: '48px 0',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container ab-numbers-grid" style={{
      display: 'grid', gridTemplateColumns: `repeat(${c.items.length}, 1fr)`, gap: 0,
    }}>
      {c.items.map((item, i) => (
        <div key={i} style={{
          borderLeft: i === 0 ? 'none' : '1px solid rgba(184,148,96,0.35)',
          padding: '4px 22px',
          fontSize: 12, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--sepia-500)',
          textAlign: 'center', textWrap: 'balance',
          fontFamily: 'var(--font-sans)',
        }}>{item}</div>
      ))}
    </div>
  </section>
);

// ------------------------------------------------------------
// 5. THE TEAM (teaser)
// ------------------------------------------------------------
const AboutTeam = ({ c }) => (
  <section data-screen-label="05 Team" className="section" data-comment-anchor="about-team">
    <div className="container ab-team-grid" style={{
      display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start',
    }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
        <h2 className="h-section" style={{ margin: 0, fontSize: 'clamp(32px, 3vw, 44px)' }}>
          <Clauses text={c.line} />
        </h2>
      </div>
      <div>
        <p className="body" style={{
          fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginTop: 4, marginBottom: 28,
        }}>{c.body}</p>
        <a
          href={c.href}
          className="btn-ghost"
          style={{
            fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--sepia-700)',
            borderBottom: '1px solid var(--sepia-300)',
            paddingBottom: 4,
          }}
        >{c.link}</a>
      </div>
    </div>
  </section>
);

// ------------------------------------------------------------
// 6. OUR CLINICS (teaser) — 4 mini cards
// ------------------------------------------------------------
const AboutClinics = ({ c }) => (
  <section data-screen-label="06 Clinics" className="section" data-comment-anchor="about-clinics" style={{
    background: 'var(--cream-100)',
    borderTop: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        marginBottom: 56, gap: 32, flexWrap: 'wrap',
      }}>
        <div style={{ maxWidth: 640 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
          <h2 className="h-section" style={{ margin: 0 }}><Clauses text={c.h2} /></h2>
        </div>
        <a href={c.viewAllHref} className="btn-ghost" style={{
          fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--sepia-700)',
        }}>{c.viewAll}</a>
      </div>
      <style>{`
        .about-clinic-card { transition: all 220ms cubic-bezier(0.22,0.61,0.36,1); }
        .about-clinic-card:hover { background: var(--cream-50) !important; border-color: #B89460 !important; transform: translateY(-3px); }
        .about-clinic-card:hover .acc-city { color: var(--vermilion); }
      `}</style>
      <div className="ab-clinics-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24,
      }}>
        {c.cards.map((card, i) => (
          <a key={i} href={card.href} className="about-clinic-card" style={{
            background: 'var(--cream-50)',
            border: '1px solid #B89460',
            padding: '32px 28px 26px',
            color: 'var(--sepia-700)',
            position: 'relative',
            minHeight: 188,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
            {/* 4-bird heritage accent, top-right */}
            <svg width="40" height="26" viewBox="0 0 46 30" aria-hidden="true" style={{
              position: 'absolute', top: 14, right: 14, opacity: 0.3, pointerEvents: 'none',
            }}>
              <g stroke="#B89460" strokeWidth="1" fill="none" strokeLinecap="round">
                <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
                <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
                <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
                <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
              </g>
            </svg>
            <div>
              {card.badge && (
                <div style={{
                  display: 'inline-block',
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--vermilion)',
                  background: 'transparent',
                  padding: '5px 9px', marginBottom: 16,
                  border: '1px solid var(--vermilion)', borderRadius: 2,
                }}>{card.badge}</div>
              )}
              <h3 className="h-card acc-city" style={{ fontSize: 28, marginBottom: 10, transition: 'color 200ms ease' }}>{card.city}</h3>
              <p className="body" style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--sepia-400)', margin: 0 }}>
                {card.line}
              </p>
            </div>
            <div style={{
              marginTop: 24, display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--sepia-500)',
            }}>
              {/* vermilion micro-dot brand anchor */}
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--vermilion)', flexShrink: 0 }} />
              {c.cardCta}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ------------------------------------------------------------
// 7. CTA RIBBON — single quiet sepia line
// ------------------------------------------------------------
const AboutCta = ({ c }) => {
  const STRINGS = useStrings();
  const isZh = STRINGS.lang === 'zh';
  return (
    <section data-screen-label="07 CTA" data-comment-anchor="about-cta" style={{
      background: 'var(--cream-200)',
      borderTop: '1px solid var(--sepia-100)',
      borderBottom: '1px solid var(--sepia-100)',
      padding: '40px 0',
    }}>
      <style>{`
        .about-ribbon { transition: color 200ms ease; }
        .about-ribbon:hover { color: var(--vermilion); }
        .about-ribbon:hover .about-ribbon-arrow { transform: translateX(5px); }
        .about-ribbon-arrow { display: inline-block; transition: transform 200ms ease; }
      `}</style>
      <div className="container" style={{ textAlign: 'center' }}>
        <a href={c.ribbonHref} className="about-ribbon" style={{
          fontFamily: isZh ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontStyle: isZh ? 'normal' : 'italic',
          fontSize: 24, fontWeight: 500, letterSpacing: isZh ? '0.04em' : '0',
          color: 'var(--sepia-600)',
        }}>{c.ribbon.replace(/\s*→\s*$/, '')}<span className="about-ribbon-arrow" style={{ marginLeft: 8 }}>→</span></a>
      </div>
    </section>
  );
};


export { AboutPage };
