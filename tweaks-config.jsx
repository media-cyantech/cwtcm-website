// Tweaks panel for hero selection + small audits
const { useState: useStateT } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": 0,
  "view": "desktop"
}/*EDITMODE-END*/;

const Tweaks = ({ tweaks, setTweak }) => {
  return (
    <TweaksPanel>
      <TweakSection title="Hero photo">
        <TweakSelect
          label="Choice"
          value={tweaks.hero}
          options={[
            { label: "Acupuncture (back)", value: 0 },
            { label: "Herbal jars (shelf)", value: 1 },
            { label: "Black teapot (steam)", value: 2 },
            { label: "Herbal warm pack", value: 3 },
          ]}
          onChange={(v) => setTweak('hero', v)}
        />
      </TweakSection>
      <TweakSection title="Viewport">
        <TweakRadio
          label="Show"
          value={tweaks.view}
          options={[
            { label: "Desktop", value: "desktop" },
            { label: "Mobile", value: "mobile" },
          ]}
          onChange={(v) => setTweak('view', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

window.Tweaks = Tweaks;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
