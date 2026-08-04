// ============================================================
// customer-care-card.jsx — simplified front-of-house card + section
// Used on Practitioners.html / Practitioners-ZH.html (archive only).
// Simpler than the practitioner card: circular avatar + name + clinic
// chips + a single role line. NO credentials block, NO profile link.
// ============================================================

const { useState: useCcState } = React;
const CC_GOLD = 'var(--sepia-300)';
const CC_RING = '#B89460';
const CC_IS_ZH = (typeof STRINGS !== 'undefined') && STRINGS.lang === 'zh';

const CcSilhouette = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" aria-hidden="true" style={{ display: 'block' }}>
    <rect width="120" height="120" fill="var(--cream-300)" />
    <g fill="var(--sepia-200)">
      <circle cx="60" cy="46" r="22" />
      <path d="M22 108 q0 -30 38 -30 q38 0 38 30 z" />
    </g>
  </svg>
);

const CcAvatar = ({ person, caption }) => {
  const [err, setErr] = useCcState(false);
  const cc = STRINGS.customerCare;
  const ok = !!person.photo && (cc.photosReady || (cc.availablePhotos || []).includes(person.photo)) && !err;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div data-photo={person.photo || ''} style={{
        width: 132, height: 132, borderRadius: '50%',
        overflow: 'hidden', position: 'relative',
        border: `3px solid ${CC_RING}`,
        boxShadow: '0 0 0 6px var(--cream-100), inset 0 0 0 1px rgba(184,148,96,0.25)',
        background: 'var(--cream-300)',
      }}>
        {ok ? (
          <img src={`assets/practitioners/${person.photo}`} alt={`Portrait of ${person.name}`}
            onError={() => setErr(true)} className="warm-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : <CcSilhouette />}
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

// borderless small-caps clinic line (matches the practitioner card — no chip box)
const CcClinicLine = ({ clinics, clinicNames }) => {
  const cn = (c) => (clinicNames && clinicNames[c]) || c;
  const txt = CC_IS_ZH
    ? clinics.map(cn).join(' · ')
    : clinics.map(c => cn(c).toUpperCase()).join(' · ');
  return (
    <div style={{
      fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
      letterSpacing: CC_IS_ZH ? '0.08em' : '0.16em', color: 'var(--sepia-400)',
    }}>{txt}</div>
  );
};

const CustomerCareCard = ({ person, data, clinicNames }) => {
  const [hover, setHover] = useCcState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex: '1 1 300px', maxWidth: 380,
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        background: 'var(--cream-50)', border: `1px solid ${hover ? 'var(--sepia-200)' : 'var(--sepia-100)'}`,
        borderRadius: 4, padding: '36px 24px 30px', position: 'relative',
        transition: 'transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? '0 18px 38px -22px rgba(58,44,24,0.45)' : '0 1px 2px rgba(58,44,24,0.04)',
      }}
    >
      <CcAvatar person={person} caption={data.photoComingSoon} />
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.1,
        color: CC_GOLD, margin: '20px 0 0', whiteSpace: 'nowrap',
      }}>{person.name}</h3>
      <div style={{ marginTop: 14 }}>
        <CcClinicLine clinics={person.clinics} clinicNames={clinicNames} />
      </div>
      <div style={{
        marginTop: 16, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-400)',
      }}>{person.role || data.roleLine}</div>
    </div>
  );
};

const CustomerCareSection = ({ cards, clinicNames }) => {
  const data = STRINGS.customerCare[STRINGS.lang] || STRINGS.customerCare.en;
  return (
    <section data-screen-label="11 Customer Care" className="section" style={{
      background: 'var(--cream-200)', borderTop: '1px solid var(--sepia-200)',
    }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <h2 className="h-section" style={{ margin: '0 0 10px' }}>{data.title}</h2>
          <p style={{
            fontFamily: CC_IS_ZH ? 'var(--font-sans-zh)' : 'var(--font-sans)',
            fontSize: 13, fontWeight: 500, letterSpacing: CC_IS_ZH ? '0.04em' : '0.08em',
            textTransform: CC_IS_ZH ? 'none' : 'uppercase', color: 'var(--sepia-400)', margin: 0,
          }}>{data.subtitle}</p>
        </div>
        <div className="cc-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28 }}>
          {cards.map((p) => <CustomerCareCard key={p.slug} person={p} data={data} clinicNames={clinicNames} />)}
        </div>
      </div>
    </section>
  );
};

window.CustomerCareCard = CustomerCareCard;
window.CustomerCareSection = CustomerCareSection;
