// ⚠️ 由 scripts/esmify.mjs 从 ../../atoms.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import React from 'react';
// Reusable atoms — sepia line illustrations + condition icons
// Used across the homepage where we don't have a real photo
// All single-stroke, sepia, hand-drawn feel — never geometric flat icons

const Stroke = (props) => ({
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...props,
});

// ====================================================================
// Condition icons — small, expressive, sepia line, 32×32
// ====================================================================
const ConditionIcon = ({ name, size = 28 }) => {
  const s = { ...Stroke() };
  const v = `0 0 32 32`;
  const C = { width: size, height: size, viewBox: v, xmlns: 'http://www.w3.org/2000/svg' };
  switch (name) {
    case 'pain': // figure with radiating lines at lower back
      return (
        <svg {...C}>
          <circle cx="16" cy="8" r="3" {...s} />
          <path d="M16 11 v9 M11 14 h10 M13 20 l-2 7 M19 20 l2 7" {...s} />
          <path d="M22 14 l3 -1 M22 16 l3 1 M7 14 l-3 -1 M7 16 l-3 1" {...s} opacity="0.55" />
        </svg>
      );
    case 'icbc': // car silhouette + cross
      return (
        <svg {...C}>
          <path d="M5 21 v-3 l3 -6 h13 l3 6 v3 h-3 a2 2 0 0 1 -4 0 H12 a2 2 0 0 1 -4 0 H5z" {...s} />
          <path d="M22 7 v4 M20 9 h4" {...s} />
        </svg>
      );
    case 'sleep': // crescent moon
      return (
        <svg {...C}>
          <path d="M22 19 a9 9 0 1 1 -9 -14 a7 7 0 0 0 9 14 z" {...s} />
          <circle cx="24" cy="9" r="0.6" fill="currentColor" />
          <circle cx="6" cy="11" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'digestion': // abdomen w/ winding line
      return (
        <svg {...C}>
          <ellipse cx="16" cy="16" rx="9" ry="11" {...s} />
          <path d="M11 11 c2 1 4 1 5 -1 c1 -2 4 -1 5 1 M11 16 c2 1 4 1 5 -1 c1 -2 4 -1 5 1 M11 21 c2 1 4 1 5 -1 c1 -2 4 -1 5 1" {...s} opacity="0.7" />
        </svg>
      );
    case 'womens': // venus glyph
      return (
        <svg {...C}>
          <circle cx="16" cy="12" r="5" {...s} />
          <path d="M16 17 v9 M13 22 h6" {...s} />
        </svg>
      );
    case 'fertility': // seedling sprout
      return (
        <svg {...C}>
          <path d="M16 26 v-9" {...s} />
          <path d="M16 17 c-4 0 -7 -3 -7 -7 c4 0 7 3 7 7 z" {...s} />
          <path d="M16 19 c4 0 7 -3 7 -7 c-4 0 -7 3 -7 7 z" {...s} />
        </svg>
      );
    case 'skin': // face profile
      return (
        <svg {...C}>
          <path d="M11 26 v-3 c-2 -1 -3 -3 -3 -5 v-5 a8 8 0 0 1 16 0 v5 c0 1 -1 1 -2 1 v3 a3 3 0 0 1 -3 3 z" {...s} />
          <circle cx="13" cy="13" r="0.7" fill="currentColor" />
          <path d="M16 14 v3 h-1" {...s} />
          <path d="M14 19 q2 1 4 0" {...s} />
        </svg>
      );
    case 'headache': // head w/ lightning
      return (
        <svg {...C}>
          <path d="M9 22 v-3 c-1 -1 -2 -3 -2 -5 a8 8 0 0 1 16 0 c0 2 -1 4 -2 5 v4 a2 2 0 0 1 -2 2 h-4" {...s} />
          <path d="M16 11 l-2 4 h2 l-2 4" {...s} />
        </svg>
      );
    case 'sports': // running figure
      return (
        <svg {...C}>
          <circle cx="19" cy="7" r="2" {...s} />
          <path d="M19 9 l-3 6 l3 3 v6 M16 15 l-4 -1 M19 18 l4 2 M11 28 l5 -7" {...s} />
        </svg>
      );
    case 'aging': // sun + horizon
      return (
        <svg {...C}>
          <circle cx="16" cy="16" r="5" {...s} />
          <path d="M16 7 v-2 M16 27 v-2 M7 16 h-2 M27 16 h-2 M9.5 9.5 l-1.5 -1.5 M22.5 22.5 l1.5 1.5 M9.5 22.5 l-1.5 1.5 M22.5 9.5 l1.5 -1.5" {...s} opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
};

// ====================================================================
// Treatment placeholder graphics — sepia line illustration + cream bg
// 4:3 aspect, used when we don't have a photo
// ====================================================================
const TreatmentPlaceholder = ({ kind }) => {
  const s = { ...Stroke({ strokeWidth: 1 }) };
  const wrap = {
    width: '100%',
    aspectRatio: '4/3',
    background: 'var(--cream-100)',
    color: 'var(--sepia-300)',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  };
  let svg;
  switch (kind) {
    case 'boneset':
      svg = (
        <svg viewBox="0 0 200 150" width="60%" height="60%">
          <path d="M50 75 q15 -25 50 -25 q35 0 50 25" {...s} />
          <path d="M50 75 q15 25 50 25 q35 0 50 -25" {...s} opacity="0.7" />
          <circle cx="100" cy="75" r="4" fill="currentColor" />
          <path d="M70 75 l-8 -8 M70 75 l-8 8 M130 75 l8 -8 M130 75 l8 8" {...s} />
        </svg>
      );
      break;
    case 'cupping':
      svg = (
        <svg viewBox="0 0 200 150" width="65%" height="65%">
          <ellipse cx="60" cy="90" rx="18" ry="6" {...s} />
          <path d="M42 90 v-25 a18 6 0 0 1 36 0 v25" {...s} />
          <ellipse cx="105" cy="80" rx="14" ry="5" {...s} />
          <path d="M91 80 v-20 a14 5 0 0 1 28 0 v20" {...s} />
          <ellipse cx="145" cy="95" rx="20" ry="7" {...s} />
          <path d="M125 95 v-28 a20 7 0 0 1 40 0 v28" {...s} />
          <path d="M30 110 q40 8 80 0 q35 -7 75 0" {...s} opacity="0.5" />
        </svg>
      );
      break;
    case 'scalp':
      svg = (
        <svg viewBox="0 0 200 150" width="55%" height="55%">
          <path d="M60 110 v-18 c-8 -4 -14 -14 -14 -25 a35 35 0 0 1 70 0 c0 11 -6 21 -14 25 v18" {...s} />
          <path d="M80 50 q5 -8 16 0 M104 50 q5 -8 16 0 M92 60 q4 -6 12 0" {...s} opacity="0.7" />
          <path d="M132 60 l16 -8 M138 75 l18 -2 M132 92 l16 8" {...s} opacity="0.5" />
        </svg>
      );
      break;
    case 'facial':
      svg = (
        <svg viewBox="0 0 200 150" width="55%" height="55%">
          <path d="M70 120 v-12 c-6 -3 -10 -12 -10 -22 v-12 a30 30 0 0 1 60 0 v12 c0 6 -2 11 -5 14" {...s} />
          <circle cx="78" cy="78" r="1" fill="currentColor" />
          <circle cx="100" cy="78" r="1" fill="currentColor" />
          <path d="M89 80 v6 h-2 M83 95 q6 3 12 0" {...s} />
          <path d="M125 70 l8 -3 M130 80 l9 -1 M128 92 l8 3" {...s} opacity="0.6" />
          <circle cx="138" cy="68" r="1.2" fill="currentColor" />
          <circle cx="143" cy="80" r="1.2" fill="currentColor" />
          <circle cx="138" cy="92" r="1.2" fill="currentColor" />
        </svg>
      );
      break;
    default:
      svg = null;
  }
  return <div style={wrap}>{svg}</div>;
};

// ====================================================================
// Location placeholder — sepia map-pin emblem on linen card
// ====================================================================
const LocationPlaceholder = ({ city }) => {
  const wrap = {
    width: '100%',
    aspectRatio: '4/3',
    background: 'linear-gradient(140deg, var(--cream-100) 0%, var(--cream-300) 100%)',
    color: 'var(--sepia-300)',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  };
  return (
    <div style={wrap}>
      <svg viewBox="0 0 200 150" width="50%" height="50%">
        <path d="M100 30 c-12 0 -22 9 -22 22 c0 18 22 38 22 38 s22 -20 22 -38 c0 -13 -10 -22 -22 -22 z" {...Stroke({ strokeWidth: 1 })} />
        <circle cx="100" cy="52" r="6" {...Stroke({ strokeWidth: 1 })} />
        <path d="M40 110 h120 M55 120 h90 M70 130 h60" {...Stroke({ strokeWidth: 0.8 })} opacity="0.5" />
      </svg>
      <div style={{
        position: 'absolute', bottom: 14, left: 0, right: 0,
        textAlign: 'center', fontSize: 10, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--sepia-300)',
      }}>{city}</div>
    </div>
  );
};

// ====================================================================
// Article placeholder thumbnail — abstract editorial textures
// ====================================================================
const ArticlePlaceholder = ({ kind }) => {
  const wrap = {
    width: '100%',
    aspectRatio: '3/2',
    background: 'var(--cream-100)',
    color: 'var(--sepia-300)',
    overflow: 'hidden',
    position: 'relative',
  };
  let svg;
  switch (kind) {
    case 'pulse':
      svg = (
        <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <path d="M0 120 q40 -10 60 -30 t60 -10 t60 -40 t60 30 t60 -10" {...Stroke({ strokeWidth: 0.8 })} opacity="0.4" />
          <path d="M0 130 q40 -10 60 -30 t60 -10 t60 -40 t60 30 t60 -10" {...Stroke({ strokeWidth: 1 })} />
          <path d="M0 145 q40 -10 60 -30 t60 -10 t60 -40 t60 30 t60 -10" {...Stroke({ strokeWidth: 0.8 })} opacity="0.4" />
          <circle cx="120" cy="80" r="3" fill="currentColor" />
          <circle cx="180" cy="100" r="3" fill="currentColor" />
        </svg>
      );
      break;
    case 'icbc':
      svg = (
        <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="50" width="180" height="100" rx="2" {...Stroke({ strokeWidth: 1 })} />
          <path d="M75 75 h60 M75 90 h120 M75 105 h100 M75 120 h80" {...Stroke({ strokeWidth: 0.8 })} opacity="0.6" />
          <circle cx="210" cy="120" r="14" {...Stroke({ strokeWidth: 1 })} />
          <path d="M203 120 h14 M210 113 v14" {...Stroke({ strokeWidth: 1 })} />
        </svg>
      );
      break;
    case 'sleep':
      svg = (
        <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <path d="M210 60 a40 40 0 1 1 -40 -52 a30 30 0 0 0 40 52 z" {...Stroke({ strokeWidth: 1 })} />
          <circle cx="80" cy="50" r="1.5" fill="currentColor" />
          <circle cx="120" cy="30" r="1" fill="currentColor" />
          <circle cx="50" cy="90" r="1" fill="currentColor" />
          <circle cx="240" cy="120" r="1" fill="currentColor" />
          <path d="M40 160 q40 -12 80 0 t80 -8 t60 4" {...Stroke({ strokeWidth: 0.8 })} opacity="0.5" />
          <path d="M40 175 q40 -12 80 0 t80 -8 t60 4" {...Stroke({ strokeWidth: 0.8 })} opacity="0.3" />
        </svg>
      );
      break;
  }
  return <div style={wrap}>{svg}</div>;
};

// ====================================================================
// Approach micro-image — abstract editorial macro
// ====================================================================
const ApproachMacro = ({ kind }) => {
  const wrap = {
    width: 100, height: 100,
    color: 'var(--sepia-400)',
    marginBottom: 12,
    display: 'block',
  };
  const s = { ...Stroke({ strokeWidth: 1.5 }) };
  let svg;
  switch (kind) {
    case 'cultivation':
      svg = (
        <svg viewBox="0 0 80 80" width="100%" height="100%">
          <path d="M22 56 q18 8 36 0" {...s} />
          <path d="M22 56 q4 14 18 14 t18 -14" {...s} />
          <path d="M40 56 v-26" {...s} />
          <path d="M40 40 q-9 -3 -13 -11 q7 2 13 11 z" {...s} strokeWidth="1" />
          <path d="M40 34 q9 -3 13 -11 q-7 2 -13 11 z" {...s} strokeWidth="1" />
          <path d="M40 48 q-7 -3 -10 -8 q5 1 10 8 z" {...s} strokeWidth="1" />
        </svg>
      );
      break;
    case 'standards':
      svg = (
        <svg viewBox="0 0 80 80" width="100%" height="100%">
          <rect x="14" y="48" width="52" height="14" rx="1.5" {...s} />
          <path d="M20 55 h40" {...s} strokeWidth="0.6" opacity="0.4" />
          <line x1="26" y1="28" x2="26" y2="48" {...s} strokeWidth="0.9" />
          <circle cx="26" cy="25" r="2" {...s} strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="48" {...s} strokeWidth="0.9" />
          <circle cx="40" cy="17" r="2" {...s} strokeWidth="1" />
          <line x1="54" y1="32" x2="54" y2="48" {...s} strokeWidth="0.9" />
          <circle cx="54" cy="29" r="2" {...s} strokeWidth="1" />
        </svg>
      );
      break;
    case 'individual':
      svg = (
        <svg viewBox="0 0 80 80" width="100%" height="100%">
          <path d="M14 44 q14 -8 32 -4 q18 4 26 -8" {...s} />
          <path d="M14 50 q14 -8 32 -4 q18 4 26 -8" {...s} opacity="0.55" />
          <circle cx="36" cy="40" r="2" {...s} strokeWidth="1" />
          <circle cx="44" cy="41" r="2" {...s} strokeWidth="1" />
          <circle cx="52" cy="40" r="2" {...s} strokeWidth="1" />
        </svg>
      );
      break;
  }
  return <div style={wrap}>{svg}</div>;
};

// ====================================================================
// Clauses — semantic line-break helper for headings.
// Splits a string at its natural pauses (comma / 、 / em-dash) into
// non-breaking units, so a wrap can ONLY happen at a punctuation pause
// — never mid-phrase ("Four clinics, one ↵ standard" can't occur).
// Strings with no internal pause pass straight through (balance still
// governs them via CSS). A clause flows to the next line whole, but
// wraps internally as a last resort at narrow widths — never overflows.
// ====================================================================
const Clauses = ({ text }) => {
  if (typeof text !== 'string') return text;
  const parts = text.split(/(?<=[,，、—])\s+/);
  if (parts.length < 2) return text;
  return parts.map((p, i) => (
    <React.Fragment key={i}>
      {i > 0 ? ' ' : ''}
      <span style={{ display: 'inline-block' }}>{p}</span>
    </React.Fragment>
  ));
};

// ====================================================================
// HeroTopScrim — full-width gradient darkening the top band of a photo
// hero so the white nav stays legible. Styled via .hero-top-scrim
// (tokens.css) for responsive height. Insert AFTER the hero image /
// existing overlays and BEFORE the title block; the nav (z-index:10)
// paints above it, so only the image is darkened — not nav or title.
// ====================================================================
const HeroTopScrim = () => <div aria-hidden className="hero-top-scrim" />;


export { Stroke, HeroTopScrim, Clauses, ConditionIcon, TreatmentPlaceholder, LocationPlaceholder, ArticlePlaceholder, ApproachMacro };
