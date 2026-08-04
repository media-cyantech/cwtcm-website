// ============================================================
// practitioner-detail.jsx — shared profile template (Practitioners/{slug}.html)
// Lang-aware via STRINGS.lang. Reads:
//   • STRINGS.practitioners.list  → photo + base clinic data (find by slug)
//   • STRINGS.practitioners.details[slug] → profile-specific content
//   • STRINGS.practitioners.detailChrome → labels / eyebrows / hrefs
// Cream + sepia-gold palette · vermilion only on the 2 Book CTAs · 4px.
// ============================================================

const { useState: usePdState } = React;
const PD_IS_ZH = (typeof STRINGS !== 'undefined') && STRINGS.lang === 'zh';
const PD_GOLD = 'var(--sepia-300)';
const PD_RING = '#B89460';

const pdFont = (zhStack) => (PD_IS_ZH ? (zhStack || 'var(--font-sans-zh)') : 'var(--font-sans)');

// ---- top-right corner accent: 4 birds + dot grid (scalable) ----
const PdCornerAccent = ({ scale = 1 }) => (
  <svg width={46 * scale} height={30 * scale} viewBox="0 0 46 30" aria-hidden="true" style={{
    position: 'absolute', top: 0, right: 0, opacity: 0.32, pointerEvents: 'none',
  }}>
    <g stroke={PD_RING} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M2 9 q3 -3 6 0 q3 -3 6 0" />
      <path d="M9 3 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M1 16 q2.5 -2.5 5 0 q2.5 -2.5 5 0" />
      <path d="M12 13 q2 -2 4 0 q2 -2 4 0" />
    </g>
    <g fill={PD_RING} opacity="0.6">
      {[0, 1, 2].map(r => [0, 1, 2].map(c => (
        <circle key={`${r}-${c}`} cx={30 + c * 7} cy={16 + r * 6} r="1" />
      )))}
    </g>
  </svg>
);

const PdSilhouette = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true" style={{ display: 'block' }}>
    <rect width="120" height="120" fill="var(--cream-300)" />
    <g fill="var(--sepia-200)">
      <circle cx="60" cy="46" r="22" />
      <path d="M22 108 q0 -30 38 -30 q38 0 38 30 z" />
    </g>
  </svg>
);

// ---- large hero portrait (circular, sepia-gold ring) ----
const PdHeroPortrait = ({ person, caption }) => {
  const [err, setErr] = usePdState(false);
  const pr = STRINGS.practitioners;
  const ok = !!person.photo && (pr.photosReady || (pr.availablePhotos || []).includes(person.photo)) && !err;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div data-photo={person.photo || ''} style={{
        width: 280, height: 280, maxWidth: '72vw', borderRadius: '50%',
        overflow: 'hidden', position: 'relative',
        border: `4px solid ${PD_RING}`,
        boxShadow: '0 0 0 10px var(--cream-100), inset 0 0 0 1px rgba(184,148,96,0.25)',
        background: 'var(--cream-300)',
      }}>
        {ok ? (
          <img src={`assets/practitioners/${person.photo}`} alt={`Portrait of ${person.name}`}
            onError={() => setErr(true)} className="warm-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : <PdSilhouette />}
      </div>
      {!ok && caption && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--sepia-300)',
        }}>{caption}</div>
      )}
    </div>
  );
};

// ---- ▶ credential row (EN abbr bold over ZH full) ----
const PdCred = ({ cred, large }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <span aria-hidden="true" style={{ color: PD_RING, fontSize: large ? 11 : 9, lineHeight: large ? '24px' : '20px', flexShrink: 0 }}>▶</span>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: large ? 15 : 13, fontWeight: 700, color: 'var(--sepia-600)', lineHeight: 1.4 }}>{cred.en}</div>
      {PD_IS_ZH && cred.zh && <div style={{ fontFamily: 'var(--font-serif-zh)', fontSize: large ? 13 : 12, fontWeight: 500, color: 'var(--sepia-400)', letterSpacing: '0.04em', lineHeight: 1.4 }}>{cred.zh}</div>}
    </div>
  </div>
);

const PdChip = ({ label, zh }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'baseline', gap: 7,
    border: '1px solid var(--sepia-200)', borderRadius: 4,
    padding: '8px 14px', whiteSpace: 'nowrap',
  }}>
    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--sepia-600)' }}>{label}</span>
    {zh && PD_IS_ZH && <span style={{ fontFamily: 'var(--font-serif-zh)', fontSize: 12, color: 'var(--sepia-400)' }}>{zh}</span>}
  </span>
);

const PdSectionEyebrow = ({ children }) => (
  <div className="eyebrow" style={{ marginBottom: 26, letterSpacing: '0.16em' }}>{children}</div>
);

// ============================================================
// Breadcrumb
// ============================================================
const PdBreadcrumb = ({ name }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  return (
    <nav aria-label="Breadcrumb" style={{ background: 'var(--cream-100)', borderBottom: '1px solid var(--sepia-100)' }}>
      <div className="container" style={{
        padding: '18px 0', fontFamily: pdFont(), fontSize: PD_IS_ZH ? 13 : 11, fontWeight: 600,
        letterSpacing: PD_IS_ZH ? '0.04em' : '0.14em', textTransform: PD_IS_ZH ? 'none' : 'uppercase',
        color: 'var(--sepia-500)', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      }}>
        <a href={chrome.breadcrumbHomeHref} style={{ color: 'var(--sepia-500)' }}>{chrome.breadcrumbHome}</a>
        <span style={{ opacity: 0.5 }}>/</span>
        <span style={{ color: 'var(--sepia-700)' }}>{name}</span>
      </div>
    </nav>
  );
};

// ============================================================
// 1. HERO
// ============================================================
const PdHero = ({ person, d, first, bookHref }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  const creds = d.creds || person.creds;
  const clinicName = (c) => (chrome.clinicNames && chrome.clinicNames[c]) || (STRINGS.practitioners[STRINGS.lang]?.clinicNames?.[c]) || c;
  const chip = person.clinics.length > 1 ? person.clinics.map(clinicName).join(' + ') : clinicName(person.clinics[0]);
  const lede = PD_IS_ZH ? d.ledeZh : d.ledeEn;
  return (
    <section data-screen-label="01 Hero" style={{ position: 'relative', background: 'var(--cream-100)', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '72px 0 104px' }}>
        <div className="pd-hero-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 64, alignItems: 'center' }}>
          <PdHeroPortrait person={person} caption={chrome.photoComingSoon} />
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -6, right: 0 }}><PdCornerAccent scale={1.7} /></div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(44px, 5.6vw, 60px)', lineHeight: 1.05,
              color: PD_GOLD, margin: '0 0 24px',
            }}><Clauses text={person.name} /></h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
              {creds.map((c, i) => <PdCred key={i} cred={c} large />)}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
              <PdChip label={chip} />
            </div>
            {lede && (
              <p className="lede" style={{ maxWidth: 560, margin: '0 0 34px' }}>{lede}</p>
            )}
            <a href={bookHref || chrome.bookHref} className="btn btn-primary" style={{ padding: '17px 30px' }}>
              {chrome.bookWith(first)}
            </a>
          </div>
        </div>
      </div>
      {/* ink-wash mountain accent along bottom */}
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true" style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 130, opacity: 0.5, pointerEvents: 'none',
      }}>
        <path d="M0 160 L0 96 q120 -46 240 -10 q120 36 320 -28 q160 -52 300 6 q140 52 300 -18 q120 -52 280 -8 L1440 160 Z" fill="var(--cream-300)" />
        <path d="M0 160 L0 120 q160 -30 320 4 q160 32 360 -18 q180 -44 360 8 q150 42 400 -6 L1440 160 Z" fill="var(--cream-400)" opacity="0.6" />
      </svg>
    </section>
  );
};

// ============================================================
// 2. BIO (ZH serif first, then EN sans)
// ============================================================
const PdBio = ({ d }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  return (
    <section data-screen-label="02 Bio" className="section">
      <div className="container" style={{ maxWidth: 880 }}>
        <PdSectionEyebrow>{chrome.eyebrows.bio}</PdSectionEyebrow>
        {PD_IS_ZH && d.bioZh && (
          <p style={{
            fontFamily: 'var(--font-serif-zh)', fontSize: 19, lineHeight: 1.95,
            color: 'var(--sepia-600)', letterSpacing: '0.02em', margin: '0 0 26px',
          }}>{d.bioZh}</p>
        )}
        {d.bioEn && (
          <p className="body" style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--sepia-500)', margin: 0, maxWidth: 760 }}>{d.bioEn}</p>
        )}
        {d.moreHref && (
          <a href={d.moreHref} target="_blank" rel="noopener" style={{
            display: 'inline-block', marginTop: 26,
            fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--sepia-500)', borderBottom: '1px solid var(--sepia-300)', paddingBottom: 3,
          }}>{d.moreLabel}</a>
        )}
      </div>
    </section>
  );
};

// ============================================================
// 3. SPECIALTIES
// ============================================================
const PdSpecialties = ({ d }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  return (
    <section data-screen-label="03 Specialties" className="section" style={{
      background: 'var(--cream-100)', borderTop: '1px solid var(--sepia-100)', borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <PdSectionEyebrow>{chrome.eyebrows.specialties}</PdSectionEyebrow>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {d.specialties.map((s, i) => <PdChip key={i} label={s.en} zh={s.zh} />)}
        </div>
      </div>
    </section>
  );
};

// ---- small linked card (used by conditions + treatments) ----
const PdLinkCard = ({ href, label, zh }) => {
  const [hover, setHover] = usePdState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 6,
        background: 'var(--cream-50)', border: `1px solid ${hover ? 'var(--sepia-200)' : 'var(--sepia-100)'}`,
        borderRadius: 4, padding: '22px 22px 20px', color: 'inherit',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover ? '0 14px 30px -20px rgba(58,44,24,0.42)' : '0 1px 2px rgba(58,44,24,0.04)',
      }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--sepia-700)', lineHeight: 1.15 }}>{label}</span>
      {zh && PD_IS_ZH && <span style={{ fontFamily: 'var(--font-serif-zh)', fontSize: 13, color: 'var(--sepia-400)' }}>{zh}</span>}
      <span style={{ marginTop: 10, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: hover ? 'var(--sepia-700)' : 'var(--sepia-400)' }}>→</span>
    </a>
  );
};

// ============================================================
// 4 + 5. CONDITIONS / TREATMENTS (double-axis links)
// ============================================================
const PdLinkGrid = ({ eyebrow, items, hrefBase, cols, bg, border }) => (
  <section className="section" style={bg ? { background: bg, borderTop: border, borderBottom: border } : {}}>
    <div className="container">
      <PdSectionEyebrow>{eyebrow}</PdSectionEyebrow>
      <div className="pd-link-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 18 }}>
        {items.map((it, i) => (
          <PdLinkCard key={i} href={`${hrefBase}${it.slug}${PD_IS_ZH ? '-ZH' : ''}.html`} label={PD_IS_ZH ? it.zh : it.en} zh={PD_IS_ZH ? null : it.zh} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// 6. WHERE THIS PRACTITIONER PRACTISES
// ============================================================
const PdClinics = ({ person, first }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  const langChrome = STRINGS.practitioners[STRINGS.lang] || {};
  const clinicName = (c) => (langChrome.clinicNames && langChrome.clinicNames[c]) || c;
  const href = (c) => `${chrome.locationPrefix}${c.replace(/\s+/g, '')}${chrome.locationSuffix}`;
  return (
    <section data-screen-label="06 Clinics" className="section" style={{
      background: 'var(--cream-100)', borderTop: '1px solid var(--sepia-100)', borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <PdSectionEyebrow>{chrome.whereEyebrow(first)}</PdSectionEyebrow>
        <div className="pd-clinic-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${person.clinics.length}, 1fr)`, gap: 18 }}>
          {person.clinics.map((c, i) => <PdLinkCard key={i} href={href(c)} label={clinicName(c)} zh={null} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 7. EDUCATION
// ============================================================
const PdEducation = ({ d }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  const items = PD_IS_ZH ? d.educationZh : d.educationEn;
  return (
    <section data-screen-label="07 Education" className="section">
      <div className="container" style={{ maxWidth: 880 }}>
        <PdSectionEyebrow>{chrome.eyebrows.education}</PdSectionEyebrow>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map((it, i) => (
            <li key={i} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              padding: '18px 0', borderBottom: i < items.length - 1 ? '1px solid var(--sepia-100)' : 'none',
            }}>
              <span aria-hidden="true" style={{ color: PD_RING, fontSize: 10, lineHeight: '26px', flexShrink: 0 }}>▶</span>
              <span style={{ fontFamily: pdFont('var(--font-serif-zh)'), fontSize: 16, lineHeight: 1.6, color: 'var(--sepia-600)' }}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ============================================================
// 8. LANGUAGES
// ============================================================
const PdLanguages = ({ d }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  if (!d.languages || !d.languages.length) return null;
  return (
    <section data-screen-label="08 Languages" className="section" style={{
      background: 'var(--cream-100)', borderTop: '1px solid var(--sepia-100)', borderBottom: '1px solid var(--sepia-100)',
    }}>
      <div className="container">
        <PdSectionEyebrow>{chrome.eyebrows.languages}</PdSectionEyebrow>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {d.languages.map((l, i) => <PdChip key={i} label={l.en} zh={l.zh} />)}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 9. TESTIMONIALS (honest placeholder)
// ============================================================
const PdTestimonials = () => {
  const chrome = STRINGS.practitioners.detailChrome;
  return (
    <section data-screen-label="09 Testimonials" className="section">
      <div className="container" style={{ maxWidth: 880 }}>
        <PdSectionEyebrow>{chrome.eyebrows.testimonials}</PdSectionEyebrow>
        <div style={{
          border: '1px dashed var(--sepia-200)', borderRadius: 4,
          background: 'var(--cream-100)', padding: '48px 32px', textAlign: 'center',
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--sepia-400)',
        }}>{chrome.testimonialsPlaceholder}</div>
      </div>
    </section>
  );
};

// ============================================================
// 10. BOOKING CTA band
// ============================================================
const PdBookCta = ({ first, bookHref }) => {
  const chrome = STRINGS.practitioners.detailChrome;
  return (
    <section data-screen-label="10 Book" style={{ background: 'var(--sepia-700)', color: 'var(--cream-50)', padding: '96px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <h2 className="h-section" style={{ color: 'var(--cream-50)', margin: '0 0 40px' }}>{chrome.bookHeadline(first)}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <a href={bookHref || chrome.bookHref} className="btn btn-primary" style={{ padding: '18px 32px' }}>{chrome.bookPrimary}</a>
          <a href={chrome.browseTeamHref} style={{
            color: 'var(--cream-300)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', borderBottom: '1px solid rgba(247,241,229,0.4)', paddingBottom: 4,
          }}>{chrome.browseTeam}</a>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Page
// ============================================================
const PractitionerDetailPage = ({ slug }) => {
  const person = STRINGS.practitioners.list.find(p => p.slug === slug);
  const d = STRINGS.practitioners.details[slug];
  const chrome = STRINGS.practitioners.detailChrome;
  const first = person.name.split(' ')[0];
  // per-clinic booking: send patients to the Jane instance of this person's clinic
  const bookHref = (STRINGS.bookingByClinic && STRINGS.bookingByClinic[person.clinics[0]]) || chrome.bookHref;
  return (
    <>
      <Nav theme="light" active={STRINGS.nav.items[2]} bookHref={bookHref} />
      <PdBreadcrumb name={person.name} />
      <PdHero person={person} d={d} first={first} bookHref={bookHref} />
      <PdBio d={d} />
      <PdSpecialties d={d} />
      <PdLinkGrid eyebrow={chrome.eyebrows.conditions} items={d.conditions} hrefBase="Conditions/" cols={4} />
      <PdLinkGrid eyebrow={chrome.eyebrows.treatments} items={d.treatments} hrefBase="Treatments/" cols={3}
        bg="var(--cream-100)" border="1px solid var(--sepia-100)" />
      <PdClinics person={person} first={first} />
      <PdEducation d={d} />
      <PdLanguages d={d} />
      <PdTestimonials />
      <PdBookCta first={first} bookHref={bookHref} />
      <Footer />
    </>
  );
};

window.PractitionerDetailPage = PractitionerDetailPage;
