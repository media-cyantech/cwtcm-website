// ⚠️ 由 scripts/esmify.mjs 从 ../../conditions-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import { useState as useStateCD } from 'react';
import { useStrings, useIsZh } from '../data/i18n.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// conditions-page.jsx — Conditions archive (调理方向总览)
// Hero (text-forward) → 3 groups of condition cards
// → "Browse treatments" bridge → CTA band → Footer.
// Reads window.STRINGS.conditions. Reuses Nav + Footer from sections-1-4/9-12.
//
// Honest, non-overclaiming health language throughout — "for / commonly
// used for / support" only. No cure or treatment-outcome promises.


// ============================================================
// CONDITION ICONS — small, refined editorial line marks.
// Per spec: 48–56px display, ~1.5px sepia stroke. Drawn on 32×32
// viewBox so they sit in the same calm icon zone as the refined
// treatment cards. Each condition has a distinct, restrained motif.
// ============================================================
const CdIcon = ({ kind }) => {
  const s = {
    fill: 'none', stroke: 'currentColor', strokeWidth: 1.5,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  const faint = { ...s, opacity: 0.5, strokeWidth: 1 };
  let art;
  switch (kind) {
    case 'pain': // simple body silhouette w/ a small "pain ping" at the shoulder
      art = (
        <>
          {/* head */}
          <circle cx="16" cy="7" r="2.6" {...s} />
          {/* torso + arms (down) */}
          <path d="M16 10 v9" {...s} />
          <path d="M16 12.5 l-5 4 M16 12.5 l5 4" {...s} />
          {/* legs */}
          <path d="M16 19 l-4 9 M16 19 l4 9" {...s} />
          {/* pain ping at right shoulder */}
          <path d="M22 11 l1.8 -1.8" {...faint} />
          <path d="M22.6 9.6 l2 0" {...faint} />
          <path d="M21.6 8.6 l0 -2" {...faint} />
          <circle cx="21" cy="11.5" r="1.2" {...s} fill="var(--cream-50)" />
        </>
      );
      break;
    case 'icbc': // gentle car silhouette + one trailing motion line
      art = (
        <>
          {/* body */}
          <path d="M6 19 l1.5 -4.5 a2 2 0 0 1 1.9 -1.3 h13.2
                   a2 2 0 0 1 1.9 1.3 l1.5 4.5
                   v2 a1 1 0 0 1 -1 1 h-2 a1 1 0 0 1 -1 -1 v-1
                   h-11 v1 a1 1 0 0 1 -1 1 h-2 a1 1 0 0 1 -1 -1 z" {...s} />
          {/* windshield split */}
          <path d="M10 14 l-1 4.5 M22 14 l1 4.5" {...s} />
          <line x1="10" y1="18" x2="22" y2="18" {...faint} />
          {/* wheels */}
          <circle cx="10" cy="21.5" r="1.3" {...s} fill="var(--cream-50)" />
          <circle cx="22" cy="21.5" r="1.3" {...s} fill="var(--cream-50)" />
          {/* motion line */}
          <line x1="3" y1="22" x2="5" y2="22" {...faint} />
          <line x1="3" y1="19" x2="4.5" y2="19" {...faint} />
        </>
      );
      break;
    case 'headaches': // head profile + 3 arcs radiating from temple
      art = (
        <>
          <path d="M13 25 v-3 c-1.4 -0.5 -2.4 -2 -2.4 -4 v-1
                   c-1 -0.4 -1.5 -1.2 -1.5 -2.5
                   q0 -6.5 6 -8.5 q6.5 -1.4 8.6 4.6 v3
                   q1 0 0.8 1.6 t-2 1.6 v1.2
                   a2.4 2.4 0 0 1 -2.4 2.4 z" {...s} />
          {/* hairline */}
          <path d="M10.5 12.5 q3 -3 8 -2.5 q3 1 4 3" {...faint} />
          {/* throbbing arcs at temple */}
          <path d="M5 11 q1 -1 2 0" {...faint} />
          <path d="M3.5 13 q1.5 -1.5 3 0" {...faint} />
          <path d="M2 15 q2 -2 4 0" {...faint} />
        </>
      );
      break;
    case 'sleep': // crescent moon + 3 small stars
      art = (
        <>
          <path d="M21 10 a8 8 0 1 0 1 11
                   a6 6 0 0 1 -1 -11 z" {...s} />
          {/* stars */}
          <path d="M8 8 v3 M6.5 9.5 h3" {...faint} />
          <path d="M11 16 v2 M10 17 h2" {...faint} />
          <path d="M8 22 v2 M7 23 h2" {...faint} />
        </>
      );
      break;
    case 'digestion': // soft bowl/abdomen arc + small leaf
      art = (
        <>
          {/* abdomen rounded arc */}
          <path d="M8 14 q0 -6 8 -6 q8 0 8 6 v3
                   q0 6 -8 6 q-8 0 -8 -6 z" {...s} />
          {/* inner soft swirl */}
          <path d="M11 15 q3 -3 6 -1 q3 2 3 5" {...faint} />
          {/* leaf above */}
          <path d="M16 5 q-2 -2 -4 -2 q2 0 4 2 q2 -2 4 -2 q-2 0 -4 2" {...s} />
        </>
      );
      break;
    case 'women': // venus symbol (circle + cross), gentle proportions
      art = (
        <>
          <circle cx="16" cy="13" r="6" {...s} />
          <line x1="16" y1="19" x2="16" y2="27" {...s} />
          <line x1="13" y1="24" x2="19" y2="24" {...s} />
          {/* small ornament arc */}
          <path d="M12 10 q4 -3 8 0" {...faint} />
        </>
      );
      break;
    case 'fertility': // sprout / new leaf from a soft cradle
      art = (
        <>
          {/* cradle */}
          <path d="M5 22 q11 5 22 0" {...s} />
          <path d="M5 22 q3 -7 11 -7 q8 0 11 7" {...s} />
          {/* sprout stem */}
          <path d="M16 16 v-7" {...s} />
          {/* two leaves */}
          <path d="M16 12 q-4 0 -5 -3 q5 -1 5 3" {...s} />
          <path d="M16 11 q4 0 5 -3 q-5 -1 -5 3" {...s} />
          {/* small bud tip */}
          <circle cx="16" cy="8.5" r="1.1" {...s} fill="var(--cream-50)" />
        </>
      );
      break;
    case 'skin': // face profile inside soft frame, 2 tiny acu/skin dots
      art = (
        <>
          {/* face profile */}
          <path d="M13 26 v-3 c-1.4 -0.5 -2.4 -2 -2.4 -4 v-1
                   c-1 -0.4 -1.5 -1.2 -1.5 -2.5
                   q0 -6.5 6 -8.5 q6.5 -1.4 8.6 4.6 v3
                   q1 0 0.8 1.6 t-2 1.6 v1.2
                   a2.4 2.4 0 0 1 -2.4 2.4 z" {...s} />
          {/* gentle hairline */}
          <path d="M10.5 12.5 q3 -3 8 -2.5 q3 1 4 3" {...faint} />
          {/* features hint */}
          <path d="M15 16 v2 h-1.5" {...faint} />
          <path d="M14 21 q2 1 4 -0.5" {...faint} />
          {/* tiny skin dots */}
          <circle cx="14" cy="14.5" r="0.9" fill="currentColor" />
          <circle cx="20" cy="16" r="0.9" fill="currentColor" />
        </>
      );
      break;
    default:
      art = null;
  }
  return (
    <div className="cd-icon-zone" style={{
      width: '100%', display: 'grid', placeItems: 'center',
      padding: '34px 0 30px',
      background: 'var(--cream-50)',
      borderBottom: '1px solid var(--sepia-100)',
      color: 'var(--sepia-400)',
    }}>
      <svg viewBox="0 0 32 32" width="52" height="52"
        aria-hidden="true" focusable="false">
        {art}
      </svg>
    </div>
  );
};

// ============================================================
// HERO — text-forward, no large photo (mirrors Treatments hero)
// ============================================================
const CdHero = ({ c }) => {
  const CD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <section data-screen-label="01 Hero" style={{
    background: 'var(--cream-100)',
    borderBottom: '1px solid var(--sepia-100)',
    padding: '88px 0 96px',
  }}>
    <div className="container">
      <div style={{ maxWidth: 920 }}>
        <div style={{
          fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          fontSize: CD_IS_ZH ? 13 : 11, fontWeight: 600,
          letterSpacing: CD_IS_ZH ? '0.22em' : '0.16em',
          textTransform: CD_IS_ZH ? 'none' : 'uppercase',
          color: 'var(--sepia-500)',
          marginBottom: 36,
        }}>{c.eyebrow}</div>
        <h1 style={{
          fontFamily: CD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: CD_IS_ZH
            ? 'clamp(44px, 5.6vw, 82px)'
            : 'clamp(52px, 6.4vw, 96px)',
          lineHeight: CD_IS_ZH ? 1.15 : 1.08,
          letterSpacing: CD_IS_ZH ? '0.02em' : '-0.015em',
          color: 'var(--sepia-700)',
          margin: '0 0 28px 0', textWrap: 'balance', maxWidth: 920,
        }}>{c.h1}</h1>
        <p style={{
          fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: CD_IS_ZH ? 'normal' : 'italic',
          fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: CD_IS_ZH ? 1.7 : 1.45,
          color: 'var(--sepia-500)',
          margin: 0, maxWidth: 720, textWrap: 'pretty',
        }}>{c.sub}</p>
      </div>
    </div>
  </section>
);
};

// ============================================================
// CONDITION CARD
// ============================================================
const CdCard = ({ card }) => {
  const STRINGS = useStrings();
  const CD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const [hover, setHover] = useStateCD(false);
  const live = (STRINGS.conditions.live || []).includes(card.slug);
  const suffix = CD_IS_ZH ? '-ZH' : '';
  const href = live ? `Conditions/${card.slug}${suffix}.html` : '#';
  return (
    <a
      href={href}
      onClick={(e) => { if (!live) e.preventDefault(); }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4,
        overflow: 'hidden', color: 'inherit',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover
          ? '0 10px 28px rgba(43,33,26,0.08)' : 'none',
        borderColor: hover ? 'var(--sepia-200)' : 'var(--sepia-100)',
      }}>
      <CdIcon kind={card.kind} />
      <div style={{
        padding: '22px 22px 22px',
        display: 'flex', flexDirection: 'column',
        gap: 12, flex: 1,
      }}>
        <div>
          <div style={{
            fontFamily: CD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
            fontWeight: 500,
            fontSize: 22, lineHeight: 1.2, color: 'var(--sepia-700)',
            marginBottom: 6, textWrap: 'balance',
          }}>{card.name}</div>
          {CD_IS_ZH && (
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--sepia-400)',
            }}>{card.sub}</div>
          )}
        </div>
        <div style={{
          fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: CD_IS_ZH ? 'normal' : 'italic',
          fontSize: CD_IS_ZH ? 14 : 15, lineHeight: CD_IS_ZH ? 1.7 : 1.5,
          color: 'var(--sepia-500)',
          textWrap: 'pretty',
        }}>{card.desc}</div>
        <div style={{
          marginTop: 'auto', paddingTop: 8,
          display: 'flex', justifyContent: 'flex-end',
          fontSize: 18, lineHeight: 1,
          color: hover ? 'var(--vermilion)' : 'var(--sepia-400)',
          transition: 'color var(--dur) var(--ease), transform var(--dur) var(--ease)',
          transform: hover ? 'translateX(4px)' : 'none',
        }}>{STRINGS.conditions.arrow}</div>
      </div>
    </a>
  );
};

// ============================================================
// GROUP — eyebrow + ZH/EN ghost label + grid
// ============================================================
const CdGroup = ({ g, idx }) => {
  const CD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <section data-screen-label={`0${idx + 2} ${g.eyebrow}`} style={{
    background: idx % 2 === 0 ? 'var(--cream-200)' : 'var(--cream-100)',
    padding: '96px 0 88px',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container">
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 22, marginBottom: 48, flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
          fontSize: CD_IS_ZH ? 15 : 12,
          fontWeight: CD_IS_ZH ? 600 : 500,
          letterSpacing: CD_IS_ZH ? '0.22em' : '0.14em',
          textTransform: CD_IS_ZH ? 'none' : 'uppercase',
          color: CD_IS_ZH ? 'var(--sepia-600)' : 'var(--sepia-300)',
        }}>{g.eyebrow}</div>
        <div style={{
          flex: 1, height: 1, background: 'var(--sepia-200)',
          minWidth: 80,
        }} />
        {CD_IS_ZH && (
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--sepia-400)',
          }}>{g.zh}</div>
        )}
      </div>
      <div className="cd-grid" style={{
        display: 'grid',
        // Always 3-up on desktop; groups with 2 cards leave intentional
        // editorial whitespace in the third column.
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 24,
      }}>
        {g.cards.map((card, i) => <CdCard key={i} card={card} />)}
      </div>
    </div>
  </section>
);
};

// ============================================================
// BRIDGE — "Prefer to choose a treatment directly?"
// ============================================================
const CdBridge = ({ c }) => {
  const CD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <section data-screen-label="05 Bridge" style={{
    background: 'var(--cream-200)',
    padding: '88px 0',
    borderBottom: '1px solid var(--sepia-100)',
  }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: CD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
        fontWeight: 500,
        fontSize: CD_IS_ZH ? 'clamp(24px, 2.4vw, 34px)' : 'clamp(28px, 3vw, 40px)',
        lineHeight: CD_IS_ZH ? 1.4 : 1.25,
        color: 'var(--sepia-700)',
        margin: '0 auto 28px', maxWidth: 760, textWrap: 'balance',
      }}>{c.title}</div>
      <a href={c.href} style={{
        fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
        fontSize: CD_IS_ZH ? 14 : 12,
        fontWeight: 600, letterSpacing: '0.14em',
        textTransform: CD_IS_ZH ? 'none' : 'uppercase',
        color: 'var(--sepia-700)',
        borderBottom: '1px solid var(--sepia-300)', paddingBottom: 4,
      }}>{c.link}</a>
    </div>
  </section>
);
};

// ============================================================
// CTA BAND — vermilion Book + outline Find clinic
// ============================================================
const CdCTA = ({ c }) => {
  const CD_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <section data-screen-label="06 CTA" style={{
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
          fontFamily: CD_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
          fontWeight: 500,
          fontSize: CD_IS_ZH ? 'clamp(28px, 3vw, 42px)' : 'clamp(32px, 3.4vw, 48px)',
          lineHeight: CD_IS_ZH ? 1.3 : 1.15,
          color: 'var(--cream-50)',
          marginBottom: 16, textWrap: 'balance',
        }}>{c.headline}</div>
        <div style={{
          fontFamily: CD_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-display)',
          fontStyle: CD_IS_ZH ? 'normal' : 'italic',
          fontSize: CD_IS_ZH ? 17 : 19, color: 'var(--cream-300)',
          maxWidth: 620, lineHeight: 1.6,
        }}>{c.sub}</div>
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <a className="btn btn-primary"
          href={c.primaryHref} target="_blank" rel="noopener"
          style={{ padding: '18px 32px' }}>{c.primary}</a>
        <a className="btn btn-outline"
          href={c.secondaryHref}
          style={{
            color: 'var(--cream-50)',
            borderColor: 'rgba(247,241,229,0.55)',
            padding: '18px 32px',
          }}>{c.secondary}</a>
      </div>
    </div>
  </section>
);
};

// ============================================================
// PAGE
// ============================================================
const ConditionsPage = () => {
  const STRINGS = useStrings();
  const c = STRINGS.conditions;
  return (
    <>
      <Nav theme="light" active={STRINGS.nav.items[1]} />
      <CdHero c={c.hero} />
      {c.groups.map((g, i) => <CdGroup key={i} g={g} idx={i} />)}
      <CdBridge c={c.bridge} />
      <CdCTA c={c.cta} />
      <Footer />
    </>
  );
};


export { CdIcon, CdHero, CdCard, CdGroup, CdBridge, CdCTA, ConditionsPage };
