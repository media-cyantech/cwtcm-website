// ⚠️ 由 scripts/esmify.mjs 从 ../../practitioners-page.jsx 转换而来，之后有人工改动，不要重跑覆盖。
// 与根目录原文件的差异仅限：ESM 导入导出 + 语言由 useStrings() 注入（原为自由全局 STRINGS）。

import React from 'react';
import { useState as usePr } from 'react';
import { useStrings, useIsZh } from '../data/i18n.jsx';
import { Clauses } from './atoms.jsx';
import { CustomerCareSection } from './customer-care-card.jsx';
import { Nav } from './sections-1-4.jsx';
import { Footer } from './sections-9-12.jsx';
// ============================================================
// practitioners-page.jsx — team archive (Practitioners.html, lang-aware)
// Phase 4.1 restructure — NO filters; 4 static sections:
//   1) Founders & Senior Practitioners (3 large anchored cards)
//   2) All Practitioners (remaining 21, alphabetical by first name)
//   3) Registered Massage Therapists (own section, sepia divider)
//   4) Customer Care Team (existing simplified cards)
// EN page  → ▶ rows show English abbreviations ONLY (no Chinese).
// ZH page  → ▶ rows show Chinese primary + standardized English abbr.
// Clinic line → borderless small-caps (EN) / 中文 · 分隔 (ZH). No chips.
// Cream + sepia-gold · NO vermilion in cards · ≤1 vermilion in CTA band.
// ============================================================


const PR_GOLD = 'var(--sepia-300)';     // name + ring tone (sepia-gold)
const PR_RING = '#B89460';              // copper/sepia-gold ring

// ---- standardized English credential abbreviations (applies to BOTH pages) ----
const PR_ABBR_MAP = {
  'Doctor TCM': 'Dr. TCM',
  'Doctor of TCM': 'Dr. TCM',
  'Dr. TCM': 'Dr. TCM',
  'Registered Acupuncturist': 'R.Ac',
  'Acupuncturist': 'R.Ac',
  'R.AC': 'R.Ac',
  'R.Ac': 'R.Ac',
  'Registered TCM Practitioner': 'R.TCM.P',
  'R.TCM.P': 'R.TCM.P',
  'RMT': 'R.M.T.',
  'R.M.T.': 'R.M.T.',
};
const prStdAbbr = (en) => PR_ABBR_MAP[en] || en;

// ---- small top-right card accent: 4 birds + dot grid (very restrained) ----
const CardCornerAccent = () => (
  <svg width="46" height="30" viewBox="0 0 46 30" aria-hidden="true" style={{
    position: 'absolute', top: 14, right: 14, opacity: 0.34, pointerEvents: 'none',
  }}>
    <g stroke={PR_RING} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
      <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
    </g>
    <g fill={PR_RING} opacity="0.6">
      {[0, 1, 2].map(r => [0, 1, 2].map(c => (
        <circle key={`${r}-${c}`} cx={30 + c * 7} cy={16 + r * 6} r="1" />
      )))}
    </g>
  </svg>
);

// ---- sepia silhouette placeholder (used when photo missing) ----
const PortraitSilhouette = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true" style={{ display: 'block' }}>
    <rect width="120" height="120" fill="var(--cream-300)" />
    <g fill="var(--sepia-200)">
      <circle cx="60" cy="46" r="22" />
      <path d="M22 108 q0 -30 38 -30 q38 0 38 30 z" />
    </g>
  </svg>
);

const PractitionerPhoto = ({ p, caption, large }) => {
  const STRINGS = useStrings();
  const [err, setErr] = usePr(false);
  const pr = STRINGS.practitioners;
  const dia = large ? 178 : 150;
  const photoAvailable = !!p.photo && (pr.photosReady || (pr.availablePhotos || []).includes(p.photo));
  const showPhoto = photoAvailable && !err;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: dia, height: dia, borderRadius: '50%',
        overflow: 'hidden', position: 'relative',
        border: `3px solid ${PR_RING}`,
        boxShadow: '0 0 0 6px var(--cream-100), inset 0 0 0 1px rgba(184,148,96,0.25)',
        background: 'var(--cream-300)',
      }} data-photo={p.photo || ''}>
        {showPhoto ? (
          <img
            src={`assets/practitioners/${p.photo}`}
            alt={`Portrait of ${p.name}`}
            onError={() => setErr(true)}
            className="warm-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.crop || '50% 20%', display: 'block' }}
          />
        ) : (
          <PortraitSilhouette />
        )}
      </div>
      {!showPhoto && caption && (
        <div style={{
          marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 10,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-300)',
        }}>{caption}</div>
      )}
    </div>
  );
};

// ---- credential row ----
// EN page: ▶ English abbreviation only.  ZH page: ▶ 中文 primary + EN abbr beneath.
const CredRow = ({ cred }) => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const en = prStdAbbr(cred.en);
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
      <span aria-hidden="true" style={{ color: PR_RING, fontSize: 9, lineHeight: '20px', flexShrink: 0 }}>▶</span>
      {PR_IS_ZH ? (
        <div>
          <div style={{
            fontFamily: 'var(--font-serif-zh)', fontSize: 13, fontWeight: 600,
            color: 'var(--sepia-600)', letterSpacing: '0.02em', lineHeight: 1.4,
          }}>{cred.zh}</div>
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
            color: 'var(--sepia-400)', letterSpacing: '0.02em', lineHeight: 1.4,
          }}>{en}</div>
        </div>
      ) : (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700,
          color: 'var(--sepia-600)', lineHeight: '20px',
        }}>{en}</div>
      )}
    </div>
  );
};

// ---- borderless small-caps clinic line (replaces chips) ----
const ClinicLine = ({ clinics, clinicNames }) => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const name = (c) => (clinicNames && clinicNames[c]) || c;
  const txt = PR_IS_ZH
    ? clinics.map(name).join(' · ')
    : clinics.map(c => name(c).toUpperCase()).join(' · ');
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
      letterSpacing: PR_IS_ZH ? '0.08em' : '0.16em',
      color: 'var(--sepia-400)',
    }}>{txt}</div>
  );
};

const PractitionerCard = ({ p, viewProfile, chrome, large }) => {
  const STRINGS = useStrings();
  const [hover, setHover] = usePr(false);
  const [linkHover, setLinkHover] = usePr(false);
  const badgeLabel = (chrome.badgeMap && chrome.badgeMap[p.badge]) || p.badge;
  const suffix = STRINGS.lang === 'zh' ? '-ZH' : '';
  const isLive = (STRINGS.practitioners.live || []).includes(p.slug);
  const isExternal = !!p.profileHref;
  const hasProfile = isLive || isExternal;
  const cardHref = p.profileHref || (isLive ? `Practitioners/${p.slug}${suffix}.html` : undefined);
  return (
    <a
      href={cardHref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      data-clinics={p.clinics.join(',')}
      data-roles={p.roles.join(',')}
      data-live={isLive ? 'true' : 'false'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setLinkHover(false); }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        background: 'var(--cream-50)',
        border: '1px solid var(--sepia-100)',
        borderRadius: 4,
        padding: large ? '46px 30px 34px' : '40px 28px 30px',
        position: 'relative',
        cursor: hasProfile ? 'pointer' : 'default',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 18px 38px -22px rgba(58,44,24,0.45), 0 4px 10px -6px rgba(58,44,24,0.2)'
          : '0 1px 2px rgba(58,44,24,0.04)',
        borderColor: hover ? 'var(--sepia-200)' : 'var(--sepia-100)',
        color: 'inherit',
      }}
    >
      <CardCornerAccent />

      <PractitionerPhoto p={p} caption={viewProfile.photoComingSoon} large={large} />

      {/* name + optional badge */}
      <div style={{ marginTop: large ? 24 : 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: large ? 30 : 26, lineHeight: 1.1, color: PR_GOLD, margin: 0,
        }}>{p.name}</h3>
        {p.badge && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--sepia-500)', background: 'var(--cream-200)',
            border: '1px solid var(--sepia-100)', borderRadius: 4,
            padding: '4px 10px',
          }}>{badgeLabel}</span>
        )}
      </div>

      {/* credentials (English-only on EN page; 中文+abbr on ZH page) */}
      <div style={{
        marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10,
        textAlign: 'left', width: '100%', maxWidth: 240,
      }}>
        {p.creds.map((c, i) => <CredRow key={i} cred={c} />)}
      </div>

      {/* borderless small-caps clinic line — pinned to the bottom so clinic + view-profile line up across cards */}
      <div style={{ marginTop: 'auto', paddingTop: 22 }}>
        <ClinicLine clinics={p.clinics} clinicNames={chrome.clinicNames} />
      </div>

      {/* view profile / coming soon */}
      {hasProfile ? (
        <div
          onMouseEnter={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          style={{
            marginTop: 22, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: linkHover ? 'var(--vermilion)' : 'var(--sepia-500)',
            borderBottom: `1px solid ${linkHover ? 'var(--vermilion)' : 'transparent'}`,
            paddingBottom: 3, transition: 'color var(--dur) var(--ease), border-color var(--dur) var(--ease)',
          }}
        >{viewProfile.label}</div>
      ) : (
        <div style={{
          marginTop: 22, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--sepia-300)',
        }}>{viewProfile.comingSoon}</div>
      )}
    </a>
  );
};

// ---- section header (EN: serif title only · ZH: 中文 title + EN italic subtitle) ----
const PrSectionHeader = ({ title, sub }) => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <div style={{ marginBottom: 44 }}>
    <h2 className="h-section" style={{
      margin: 0,
      fontFamily: PR_IS_ZH ? 'var(--font-serif-zh)' : 'var(--font-display)',
    }}>{title}</h2>
    {PR_IS_ZH && sub && (
      <div style={{
        marginTop: 8, fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 19, color: 'var(--sepia-400)', letterSpacing: '0.01em',
      }}>{sub}</div>
    )}
  </div>
);
};

const PrGrid = ({ cards, viewProfile, chrome, large }) => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <div className="pr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
    {cards.map(p => (
      <PractitionerCard key={p.slug} p={p} viewProfile={viewProfile} chrome={chrome} large={large} />
    ))}
  </div>
);
};

// ---- clinic filter bar (browse the team by location) ----
// 原为模块顶层常量 —— 与 *_IS_ZH 同一类隐患：Astro 构建时中英页同进程，
// 模块常量只求值一次，两种语言会拿到同一份筛选标签。改成按语言取值的纯函数。
const clinicFilters = (isZh) => (isZh
  ? [['All', '全部'], ['Richmond', '列治文'], ['Burnaby', '本拿比'], ['Vancouver', '温哥华'], ['White Rock', '白石']]
  : [['All', 'All'], ['Richmond', 'Richmond'], ['Burnaby', 'Burnaby'], ['Vancouver', 'Vancouver'], ['White Rock', 'White Rock']]);

const ClinicFilterBar = ({ clinic, setClinic }) => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <div style={{ background: 'var(--cream-200)', borderBottom: '1px solid var(--sepia-100)' }}>
    <div className="container" style={{
      display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center',
      padding: '22px var(--gutter)',
    }}>
      {clinicFilters(PR_IS_ZH).map(([key, label]) => {
        const active = clinic === key;
        return (
          <button key={key} onClick={() => setClinic(key)} style={{
            fontFamily: PR_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: 13, fontWeight: 600, letterSpacing: PR_IS_ZH ? '0.06em' : '0.1em',
            textTransform: PR_IS_ZH ? 'none' : 'uppercase',
            padding: '9px 20px', borderRadius: 999, cursor: 'pointer',
            border: `1px solid ${active ? 'var(--sepia-700)' : 'var(--sepia-200)'}`,
            background: active ? 'var(--sepia-700)' : 'transparent',
            color: active ? 'var(--cream-50)' : 'var(--sepia-600)',
            transition: 'all var(--dur) var(--ease)',
          }}>{label}</button>
        );
      })}
    </div>
  </div>
);
};

const WhiteRockTeamPanel = () => {
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  return (
  <section className="section" style={{ background: 'var(--cream-100)' }}>
    <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{PR_IS_ZH ? '白石 · 浮针专科' : 'White Rock · Floating Needle'}</div>
      <h2 className="h-section" style={{ margin: '0 0 18px' }}>{PR_IS_ZH ? '白石团队在其专属网站。' : 'The White Rock team has its own site.'}</h2>
      <p className="body" style={{ margin: '0 auto 30px', maxWidth: 560 }}>{PR_IS_ZH
        ? '白石诊所是加拿大首家浮针示范基地，拥有独立的浮针专科团队、服务与在线预约。'
        : "Canada's first Floating Needle demonstration clinic, with its own specialist team, services and online booking."}</p>
      <a href="https://whiterock.cwtcm.ca/" target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: '16px 30px' }}>
        {PR_IS_ZH ? '访问白石站 →' : 'Visit the White Rock site →'}</a>
    </div>
  </section>
);
};

// ============================================================
// Page
// ============================================================
// Core-team ("资深/创始") cards per clinic view. Each clinic tab has its own
// curated membership and order (client-directed); people not anchored for the
// current view fall through to the regular grid below.
const PRACT_ANCHORED_BY = {
  All: [
    'taylor-wang', 'di-wu', 'xianyi-hu',
    'jack-bai', 'wingho-chan', 'mengli-song',
    'shirley-zhu', 'jim-yi', 'lynn-liu',
  ],
  Richmond: ['taylor-wang', 'xianyi-hu', 'jack-bai', 'mengli-song', 'jiabin-nan', 'bin-li'],
  Burnaby: ['taylor-wang', 'wingho-chan', 'monica-liu', 'pearson-zhang', 'hong-guan', 'jasmine-zhang'],
  Vancouver: ['taylor-wang', 'william-wang', 'shirley-zhu', 'lynn-liu', 'jim-yi'],
  'White Rock': ['taylor-wang', 'di-wu'],
};

const PractitionersPage = () => {
  const STRINGS = useStrings();
  const PR_IS_ZH = useIsZh();   // 原为模块顶层常量，会导致中英串台
  const data = STRINGS.practitioners[STRINGS.lang] || STRINGS.practitioners.en;
  const list = STRINGS.practitioners.list;
  const sec = data.sections;

  const [clinic, setClinic] = React.useState('All');
  const inClinic = (p) => clinic === 'All' || (p.clinics || []).includes(clinic);

  const bySlug = (s) => list.find(p => p.slug === s);
  const rmtAll = list.filter(p => p.roles.includes('RMT'));
  const rmtSlugs = new Set(rmtAll.map(p => p.slug));
  const anchored = PRACT_ANCHORED_BY[clinic] || PRACT_ANCHORED_BY.All;
  const founders = anchored.map(bySlug).filter(Boolean).filter(inClinic);
  const rmt = rmtAll.filter(inClinic);
  const others = list
    .filter(p => !anchored.includes(p.slug) && !rmtSlugs.has(p.slug))
    .filter(inClinic)
    .sort((a, b) => a.name.localeCompare(b.name, 'en'));

  const viewProfile = {
    label: data.viewProfile,
    photoComingSoon: data.photoComingSoon,
    comingSoon: data.viewProfileComingSoon || 'Profile coming soon',
  };

  const ccList = (STRINGS.customerCare && STRINGS.customerCare.list) || [];
  const isWhiteRock = clinic === 'White Rock';
  const clinicName = (data.clinicNames && data.clinicNames[clinic]) || clinic;
  const empty = clinic !== 'All' && !isWhiteRock && founders.length === 0 && others.length === 0 && rmt.length === 0;

  return (
    <>
      <PractitionersHero c={data.hero} />
      <ClinicFilterBar clinic={clinic} setClinic={setClinic} />

      <>
          {/* Founders & Senior Practitioners */}
          {founders.length > 0 && (
            <section data-screen-label="02 Founders" className="section" style={{ background: 'var(--cream-200)' }}>
              <div className="container">
                <PrSectionHeader title={sec.founders.title} sub={sec.founders.sub} />
                <PrGrid cards={founders} viewProfile={viewProfile} chrome={data} large />
              </div>
            </section>
          )}

          {/* All / clinic practitioners */}
          {others.length > 0 && (
            <section data-screen-label="03 All Practitioners" className="section" style={{ background: 'var(--cream-100)' }}>
              <div className="container">
                <PrSectionHeader
                  title={clinic === 'All' ? sec.all.title : (PR_IS_ZH ? `${clinicName}门店医师` : `Practitioners at ${clinicName}`)}
                  sub={clinic === 'All' ? sec.all.sub : ''} />
                <PrGrid cards={others} viewProfile={viewProfile} chrome={data} />
              </div>
            </section>
          )}

          {/* Registered Massage Therapists */}
          {rmt.length > 0 && (
            <section data-screen-label="04 RMT" className="section" style={{
              background: 'var(--cream-100)', paddingTop: 0,
            }}>
              <div className="container">
                <div style={{ borderTop: '1px solid var(--sepia-200)', paddingTop: 64 }}>
                  <PrSectionHeader title={sec.rmt.title} sub={sec.rmt.sub} />
                  <PrGrid cards={rmt} viewProfile={viewProfile} chrome={data} />
                </div>
              </div>
            </section>
          )}

          {empty && (
            <section className="section" style={{ background: 'var(--cream-100)', textAlign: 'center' }}>
              <div className="container">
                <p className="body">{PR_IS_ZH ? '该诊所暂无可显示的医师。' : 'No practitioners to show for this clinic yet.'}</p>
              </div>
            </section>
          )}
          {isWhiteRock && <WhiteRockTeamPanel />}
      </>

      {/* Customer Care Team — shown on the full view */}
      {clinic === 'All' && ccList.length > 0 && typeof CustomerCareSection !== 'undefined' && (
        <CustomerCareSection cards={ccList} clinicNames={data.clinicNames} />
      )}

      <PractitionersCta c={data.cta} />
      <Footer />
    </>
  );
};

const PractitionersHero = ({ c }) => {
  const STRINGS = useStrings();
  return (
  <section data-screen-label="01 Hero" style={{
    position: 'relative', background: 'var(--cream-100)', overflow: 'hidden',
  }}>
    <Nav theme="light" active={STRINGS.nav.items[2]} />
    <div className="container" style={{
      position: 'relative', zIndex: 2,
      padding: '72px var(--gutter) 96px', maxWidth: 1000,
    }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>{c.eyebrow}</div>
      <h1 className="h-display" style={{ marginBottom: 22, maxWidth: 860 }}><Clauses text={c.h1} /></h1>
      <p className="lede" style={{ maxWidth: 680, margin: 0 }}>{c.lede}</p>
    </div>
    {/* ink-wash mountain accent along bottom edge */}
    <svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true" style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 140,
      opacity: 0.5, pointerEvents: 'none',
    }}>
      <path d="M0 160 L0 96 q120 -46 240 -10 q120 36 320 -28 q160 -52 300 6 q140 52 300 -18 q120 -52 280 -8 L1440 160 Z"
        fill="var(--cream-300)" />
      <path d="M0 160 L0 120 q160 -30 320 4 q160 32 360 -18 q180 -44 360 8 q150 42 400 -6 L1440 160 Z"
        fill="var(--cream-400)" opacity="0.6" />
    </svg>
  </section>
);
};

const PractitionersCta = ({ c }) => (
  <section data-screen-label="05 CTA" style={{
    background: 'var(--sepia-700)', color: 'var(--cream-50)', padding: '96px 0',
  }}>
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <h2 className="h-section" style={{ color: 'var(--cream-50)', margin: '0 0 40px' }}>{c.h2}</h2>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 48,
      }} className="pr-cta-tiles">
        {c.tiles.map((t, i) => (
          <a key={i} href={t.href} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '26px 30px', borderRadius: 4,
            border: '1px solid rgba(184,148,96,0.4)',
            background: 'rgba(247,241,229,0.03)',
            color: 'var(--cream-100)',
            fontFamily: 'var(--font-display)', fontSize: 24,
            transition: 'background var(--dur) var(--ease), border-color var(--dur) var(--ease)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(247,241,229,0.08)'; e.currentTarget.style.borderColor = 'rgba(184,148,96,0.7)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(247,241,229,0.03)'; e.currentTarget.style.borderColor = 'rgba(184,148,96,0.4)'; }}
          >{t.label}</a>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <a href={c.primaryHref} className="btn btn-primary" style={{ padding: '18px 32px' }}>{c.primary}</a>
        <a href={c.secondaryHref} style={{
          color: 'var(--cream-300)', fontSize: 13, fontWeight: 600,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          borderBottom: '1px solid rgba(247,241,229,0.4)', paddingBottom: 4,
        }}>{c.secondary}</a>
      </div>
    </div>
  </section>
);


export { PractitionersPage };
