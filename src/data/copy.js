// ⚠️ 由 scripts/build-data.mjs 从 ../../copy.js 生成，不要手改。
// 改文案请改根目录的 copy.js，然后重跑 node scripts/build-data.mjs

// CWTCM Heritage — section copy + data
// Single source of truth for content used across sections

import { resources } from './resources.js';

export const COPY = {
  hero: {
    slides: [
      {
        photo: resources.r_hero_candidates_05_acupuncture_back_warm_jpg,
        crop: "50% 40%",
        eyebrow: "Registered Acupuncture · Greater Vancouver",
        h1: "Heritage medicine, attentively practised.",
        zh: "",
        sub: "Traditional Chinese medicine across four clinics in Greater Vancouver.",
      },
      {
        photo: resources.r_hero_candidates_04_herbal_jars_shelf_warm_jpg,
        crop: "75% 55%",
        eyebrow: "Custom Herbal Formulas",
        h1: "Two thousand years of herbal craft.",
        zh: "",
        sub: "Pulse, tongue and history shape every formula — decocted on site in Vancouver by registered herbalists.",
      },
      {
        photo: resources.r_hero_candidates_01_black_teapot_steam_jpg,
        crop: "50% 50%",
        eyebrow: "Decoction Service",
        h1: "The patience of slow medicine.",
        zh: "",
        sub: "Bespoke decoctions, prepared with the same care your grandmother would recognise.",
      },
      {
        photo: resources.r_hero_candidates_03_herbal_warm_pack_jpg,
        crop: "50% 50%",
        eyebrow: "Canadian Western TCM · Greater Vancouver",
        h1: "Heritage medicine, attentively practised.",
        zh: "",
        sub: "Traditional Chinese herbal medicine across four clinics in Greater Vancouver.",
      },
    ],
    primary: "Book a Visit",
    secondary: "Find your nearest clinic",
  },
  trust: [
    "30+ BC-Registered TCM Practitioners",
    "4 Clinics across Greater Vancouver",
    "ICBC & insurance reimbursement",
    "Bilingual care — English & Chinese",
  ],
  practitioners: {
    eyebrow: "Our Practitioners",
    h2: "A team built over decades.",
    sub: "Our team of 30+ BC-registered practitioners includes a senior physician with 50 years of clinical experience, a Floating Needle specialist, and graduates of Beijing, Guangzhou, Liaoning, Chengdu, Hong Kong and Vancouver schools of TCM.",
    cards: [
      {
        photo: "rmd-bby-van-taylor-wang.jpg",
        crop: "50% 25%",
        name: "Taylor Wang",
        badge: "FOUNDER",
        creds: ["Dr. TCM", "R.Ac", "R.Esthetician", "Founder"],
        subtitle: "Jiangxi University of TCM · Bone-Setting · University Lecturer (7 years)",
        clinic: "RICHMOND · BURNABY · VANCOUVER · WHITE ROCK",
      },
      {
        photo: "wr-di-wu.jpg",
        crop: "50% 18%",
        name: "Di Wu",
        badge: "WHITE ROCK FOUNDER",
        creds: ["R.TCM.P", "Floating Needle Instructor"],
        subtitle: "President, ATCMA & Canada Floating Needle Medicine Association · 30 years in China & Canada",
        clinic: "WHITE ROCK",
      },
      {
        photo: "van-shirley-zhu.jpg",
        crop: "50% 25%",
        name: "Shirley Zhu",
        creds: ["R.TCM.P", "R.Ac", "Registered Aromatherapist (North America)"],
        subtitle: "From a distinguished TCM family · Beijing International SOS Clinic",
        clinic: "VANCOUVER",
      },
      {
        photo: "van-william-wang.jpg",
        crop: "50% 22%",
        name: "William Wang",
        creds: ["R.Ac", "Senior Rehabilitation Therapist"],
        subtitle: "Acupuncture & acupoint Tuina · holistic pulse, facial & abdominal diagnosis",
        clinic: "VANCOUVER",
      },
      {
        photo: "rmd-xianyi-hu.jpg",
        crop: "50% 20%",
        name: "Xianyi Hu",
        badge: "50+ YEARS",
        creds: ["Dr. TCM", "R.Ac", "Renowned TCM Doctor (China)"],
        subtitle: "Chengdu University of TCM · Immune disorders · Women's health",
        clinic: "RICHMOND",
      },
      {
        photo: "rmd-jack-bai.jpg",
        crop: "50% 22%",
        name: "Jake Bai",
        badge: "36 YEARS",
        creds: ["R.TCM.P", "R.Ac", "Senior TCM Practitioner"],
        subtitle: "Beijing University of TCM (Master's) · 36 years clinical · post-surgical / pain / geriatric",
        clinic: "RICHMOND",
      },
      {
        photo: "van-jim-yi.jpg",
        crop: "50% 22%",
        name: "Jim Yi",
        badge: "30+ YEARS",
        creds: ["R.TCM.P", "R.Ac", "TCM Orthopedics"],
        subtitle: "Master of TCM Orthopedics · bone-setting · musculoskeletal & spinal care",
        clinic: "VANCOUVER",
      },
      {
        photo: "bby-wing-ho-chan.jpg",
        crop: "50% 22%",
        name: "Wingho Chan",
        creds: ["R.TCM.P"],
        subtitle: "Master of TCM, University of Hong Kong · Integrative herbs & acupuncture",
        clinic: "BURNABY",
      },
    ],
  },
  approach: {
    h2: "How we practise.",
    cols: [
      {
        h3: "Treatment paired with cultivation",
        sub: "",
        body: "Relief is the entry point, not the destination. Every plan also addresses sleep, digestion and constitution so improvement holds beyond the clinic.",
      },
      {
        h3: "Heritage methods, modern standards",
        sub: "",
        body: "Five-element diagnosis, single-use needles, BC-regulated practitioners and clean linens. The wisdom is ancient; the standards are current.",
      },
      {
        h3: "One body, one plan",
        sub: "",
        body: "No protocol is run twice the same way. Your pulse, tongue, posture and history shape the session you receive that day.",
      },
    ],
  },
  treatments: {
    eyebrow: "Treatments",
    h2: "Eight signature treatments,\nrefined over generations.",
    cards: [
      { photo: resources.r_treatments_04_acupuncture_session_jpg, name: "Acupuncture", zh: "", body: "Fine sterile needles at precisely chosen points to settle pain, sleep and stress.", meta: "50 min · from CAD $120" },
      { photo: resources.r_treatments_01_tuina_massage_jpg, name: "Tui Na", zh: "", body: "Hands-on therapy along the meridians for muscular tension, headaches and circulation.", meta: "50 min · from CAD $100" },
      { photo: resources.r_treatments_05_bone_setting_jpg, name: "Manual Bone Setting", zh: "", body: "Skilled realignment of joints and soft tissue for chronic and acute musculoskeletal pain.", meta: "50 min · from CAD $100" },
      { photo: resources.r_treatments_02_moxibustion_jpg, name: "Moxibustion", zh: "", body: "Slow-burning mugwort warms specific points to nourish circulation and the immune system.", meta: "50 min · from CAD $100" },
      { photo: resources.r_treatments_06_cupping_jpg, name: "Cupping & Gua Sha", zh: "", body: "Glass cups and bone tools to release tension, refresh blood flow and reset stagnant qi.", meta: "25–50 min · from CAD $50" },
      { photo: resources.r_treatments_07_head_therapy_jpg, name: "Head & Scalp Therapy", zh: "", body: "Traditional or aromatic scalp work for tension, fatigue and the modern screen-strained head.", meta: "50 min · from CAD $75" },
      { photo: resources.r_treatments_03_herbal_medicine_jpg, name: "Herbal Consultation", zh: "", body: "Custom formulas decocted on site, written by registered herbalists after pulse and tongue diagnosis.", meta: "20–30 min consult" },
      { photo: resources.r_treatments_08_acupuncture_facial_jpg, name: "Aesthetic Acupuncture", zh: "", body: "Whole-system facial work — collagen response, complexion, definition — without injectables.", meta: "75 min · from CAD $200" },
    ],
  },
  conditions: {
    eyebrow: "What We Help With",
    h2: "Care for the conditions that quietly shape daily life.",
    cards: [
      { icon: "pain", title: "Pain & Injury", body: "Acute and chronic pain, post-collision recovery." },
      { icon: "icbc", title: "ICBC Recovery", body: "Direct billing for whiplash and soft-tissue claims." },
      { icon: "sleep", title: "Sleep & Stress", body: "Restoring rhythm in the nervous system." },
      { icon: "digestion", title: "Digestion", body: "Bloating, IBS-like patterns and chronic discomfort." },
      { icon: "womens", title: "Women's Health", body: "Cycle, perimenopause and postpartum care." },
      { icon: "fertility", title: "Fertility & Pregnancy", body: "Pre-conception support through trimesters." },
      { icon: "skin", title: "Skin & Acne", body: "Whole-body approach beyond topical fixes." },
      { icon: "headache", title: "Headaches & Migraines", body: "Pattern-based diagnosis and prevention." },
      { icon: "sports", title: "Sports Performance", body: "Recovery, mobility and tendon care." },
      { icon: "aging", title: "Healthy Aging", body: "Energy, focus and longevity protocols." },
    ],
  },
  locations: {
    eyebrow: "Our Clinics",
    h2: "Four clinics, held to the highest standard of care.",
    cards: [
      { city: "Richmond", caption: "Heritage flagship on Cooney Road", address: "5611 Cooney Rd #130, Richmond, BC V6X 3J6", hours: "Mon–Sun  10:00–18:30", phone: "(604) 285-5778" },
      { city: "Burnaby",  caption: "Our practice on the Kingsway corridor", address: "5665 Kingsway #125, Burnaby, BC V5H 2G4",     hours: "Mon–Sun  10:00–18:30", phone: "(604) 423-9633" },
      { city: "Vancouver", caption: "Kitsilano on West Broadway", address: "3652 West Broadway, Vancouver, BC V6R 2B7",  hours: "Mon–Sun  10:00–18:30", phone: "(778) 323-6356" },
      { city: "White Rock", caption: "By the pier on Johnston Road · Specialty in Floating Needle therapy", address: "1549 Johnston Rd, White Rock, BC V4B 3Z6",
        hours: "Mon–Sun 9:30–19:00",
        phone: "(604) 560-6399" },
    ],
  },
  heritage: {
    eyebrow: "Heritage",
    h2: "A medicine older than the country we practise in.",
    body: "Traditional Chinese medicine has been refined for over two thousand years. Our practitioners trained in Beijing, Guangzhou, Liaoning, Chengdu and Hong Kong, then chose to build their lives in British Columbia. The result is care that is unmistakably Chinese in lineage and unmistakably Canadian in standards — single-use needles, registered practitioners, ICBC-recognised, and held to the same hygiene and consent expectations you'd find at any clinic on this side of the Pacific. We see ourselves as quiet stewards of this tradition: we don't shout about it; we just practise it well, every day, in four neighbourhoods.",
  },
  testimonials: {
    eyebrow: "In Their Words",
    h2: "Quiet results, in the patient's own words.",
    empty: "We're gathering reviews from our patients, shared with their consent — their words will appear here soon.",
    reviews: [],
  },
  journal: {
    eyebrow: "The Journal",
    h2: "Notes from the clinic.",
    cards: [
      { tag: "TCM 101", title: "Reading the Pulse: What 28 Pulse Qualities Actually Tell Us", excerpt: "A pulse, in our practice, is not one rate but a vocabulary. Floating, sunken, slippery, wiry — twenty-eight qualities that, taken together, describe an internal weather report we then learn to interpret over years of careful listening.", read: "8 min read" },
      { tag: "Conditions", title: "ICBC and Acupuncture: A Plain-English Guide", excerpt: "If a vehicle collision left you with a soft-tissue claim, ICBC recognises registered acupuncture care — and we bill them direct. Here's exactly how that works, what to bring, and why most claims are simpler than they sound.", read: "6 min read" },
      { tag: "Wellness Rituals", title: "Sleep Rituals Borrowed from a 2,000-Year-Old Pharmacy", excerpt: "An hour before bed, the body wants warming, not stimulation. A small bowl of jujube tea, a foot soak, lights down. Three rituals from the herbal tradition that translate cleanly into a Vancouver evening.", read: "5 min read" },
    ],
  },
  newsletter: {
    text: "Seasonal notes from our practitioners — four times a year, never more.",
    placeholder: "you@email.com",
    button: "Subscribe",
  },
};

export const STRINGS = {
  lang: 'en',
  otherLang: { label: '中文', href: 'Homepage-ZH.html' },
  bookingByClinic: { 'Richmond': 'https://canadianwesterntcmclinic.janeapp.com', 'Burnaby': 'https://canadianwesterntcmclinic.janeapp.com', 'Vancouver': 'https://canadianwesterntcmclinic.janeapp.com', 'White Rock': 'https://cwtcm.janeapp.com/' },
  selfLang: { label: 'EN' },
  nav: {
    items: ['Treatments', 'Conditions', 'Practitioners', 'Locations', 'About', 'Journal'],
    cta: 'Book Now',
  },
  practitionerCTA: { title: 'Meet all practitioners', link: 'Browse the team →' },
  treatmentsViewAll: 'View all treatments →',

  // ============================================================
  // PRACTITIONERS — team archive page (Practitioners.html)
  // ============================================================
  practitioners: {
    en: {
      seoTitle: 'Our Practitioners — Greater Vancouver TCM Team | Canadian Western TCM',
      seoDescription: 'Meet the 30+ BC-registered practitioners of Canadian Western TCM across Richmond, Burnaby, Vancouver and White Rock — TCM doctors, acupuncturists, rehabilitation therapists, registered massage therapists and aestheticians trained in Beijing, Guangzhou, Liaoning, Chengdu, Hong Kong and Vancouver.',
      hero: {
        eyebrow: 'Practitioners',
        h1: 'A team built over decades.',
        lede: 'Trained in Beijing, Guangzhou, Liaoning, Chengdu, Hong Kong and Vancouver — now practising on this side of the Pacific.',
      },
      sections: {
        founders: { title: 'Founders & Senior Practitioners' },
        all: { title: 'All Practitioners' },
        rmt: { title: 'Registered Massage Therapists' },
      },
      filters: {
        locationLabel: 'Location',
        roleLabel: 'Role',
        locations: ['All', 'Richmond', 'Burnaby', 'Vancouver', 'White Rock'],
        locationKeys: ['All', 'Richmond', 'Burnaby', 'Vancouver', 'White Rock'],
        roles: ['All', 'TCM Doctor', 'Acupuncturist', 'Rehabilitation Therapist', 'RMT', 'Aesthetician', 'Customer Care'],
        roleKeys: ['All', 'TCM Doctor', 'Acupuncturist', 'Rehabilitation Therapist', 'RMT', 'Aesthetician', 'Customer Care'],
        empty: 'No practitioners match these filters yet.',
      },
      rmtEyebrow: 'Registered Massage Therapists',
      photoComingSoon: 'Photo coming soon',
      viewProfile: 'View profile →',
      viewProfileComingSoon: 'Profile coming soon',
      cta: {
        h2: 'Looking for a specific concern or treatment?',
        tiles: [
          { label: 'Browse Treatments →', href: 'Treatments.html' },
          { label: 'Browse Conditions →', href: 'Conditions.html' },
        ],
        primary: 'Book a Visit',
        primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
        secondary: 'Find your nearest clinic →',
        secondaryHref: 'Locations.html',
      },
    },
    // Order is locked — do not re-sort. clinics use full names for filtering + chips.
    // roles[] drives the Role filter. creds[] = top 1–2 credentials (en abbr + zh full).
    //
    // PHOTO LOADING: real portraits aren't uploaded yet, so cards render the sepia
    // silhouette placeholder. When the client drops the 32 originals into
    // assets/practitioners/ (named to match each entry's `photo`), either:
    //   • flip photosReady to true (load ALL), or
    //   • add specific filenames to availablePhotos (load just those).
    // This avoids failed image requests until the files exist.
    photosReady: false,
    availablePhotos: [
      'rmd-bby-van-taylor-wang.jpg',
      'wr-di-wu.jpg',
      'wr-su-zhang.jpg',
      'wr-vivian-chen.jpg',
      'wr-cathy-luo.jpg',
      'wr-dongwei-li.jpg',
      'wr-sean-zhou.jpg',
      'wr-winnie-yang.jpg',
      'wr-dave-gifford.jpg',
      'wr-qin-pei.jpg',
      'wr-william-zhou.jpg',
      'wr-vivi-zhao.jpg',
      'rmd-xianyi-hu.jpg',
      'rmd-jack-bai.jpg',
      'rmd-van-kalen-shen.jpg',
      'rmd-jiabin-nan.jpg',
      'rmd-angel-yu.jpg',
      'rmd-david-leung.jpg',
      'rmd-vickie-xu.jpg',
      'sunny-wei.jpg',
      'rmd-bby-mengli-song.jpg',
      'rmd-bby-pearson-zhang.jpg',
      'rmd-bby-hong-guan.jpg',
      'rmd-bby-bin-li.jpg',
      'rmd-bby-rosa-shu.jpg',
      'rmd-bby-van-helen-he.jpg',
      'bby-wing-ho-chan.jpg',
      'bby-feng-kang.jpg',
      'bby-li-gao.jpg',
      'bby-nikka-wu.jpg',
      'bby-monica-liu.jpg',
      'bby-jasmine-zhang.jpg',
      'bby-tony-liang.jpg',
      'van-shirley-zhu.jpg',
      'van-jim-yi.jpg',
      'van-rmd-lynn-liu.jpg',
      'van-rmd-simon-zhang.jpg',
      'van-gemmie-lam.jpg',
      'van-william-wang.jpg',
      'van-shawn-feng.jpg',
      'rmd-emmett-zhang.jpg',
      'rmd-lihong-zhou.jpg',
    ],

    // Profiles that exist on disk. Archive "View profile →" links only navigate
    // for slugs in this list; others show "Profile coming soon".
    live: ['taylor-wang', 'xianyi-hu', 'jack-bai', 'kalen-shen', 'wingho-chan', 'jiabin-nan', 'jim-yi', 'gemmie-lam', 'helen-he', 'rosa-shu', 'pearson-zhang', 'lynn-liu', 'simon-zhang', 'william-wang', 'shawn-feng', 'mengli-song', 'jasmine-zhang', 'monica-liu', 'david-leung', 'angel-yu', 'hong-guan', 'bin-li', 'feng-kang', 'li-gao', 'nikka-wu', 'shirley-zhu', 'emmett-zhang', 'lihong-zhou', 'tony-liang', 'vickie-xu', 'sunny-wei', 'di-wu', 'su-zhang', 'vivian-chen', 'cathy-luo', 'dongwei-li', 'sean-zhou', 'winnie-yang', 'dave-gifford', 'qin-pei', 'william-zhou', 'vivi-zhao'],

    // ---- Shared chrome for individual profile pages (Practitioners/{slug}.html) ----
    detailChrome: {
      breadcrumbHome: 'Practitioners',
      breadcrumbHomeHref: 'Practitioners.html',
      eyebrows: {
        bio: 'Bio',
        specialties: 'Specialties',
        conditions: 'Often helps with',
        treatments: 'Treatments offered',
        education: 'Education',
        languages: 'Languages',
        testimonials: 'What patients say',
      },
      whereEyebrow: (first) => `Where to find ${first}`,
      testimonialsPlaceholder: 'Testimonials coming soon',
      bookWith: (first) => `Book a Visit with ${first} →`,
      bookHeadline: (first) => `Book a Visit with ${first}.`,
      bookPrimary: 'Book a Visit',
      bookHref: 'https://canadianwesterntcmclinic.janeapp.com',
      browseTeam: 'Browse our team →',
      browseTeamHref: 'Practitioners.html',
      photoComingSoon: 'Photo coming soon',
      viewClinic: 'View clinic →',
      locationPrefix: 'Locations-',
      locationSuffix: '.html',
    },

    // ---- Profile-specific data, keyed by slug. The shared component also
    //      reads list[slug] for the photo + base clinic data. ----
    details: {
      "jiabin-nan": {"seoTitle": "Jiabin Nan — Acupuncturist · R.Ac | Canadian Western TCM", "seoDescription": "Jiabin Nan, registered acupuncturist at Canadian Western TCM — over 30 years of clinical experience across Europe and North America, graduate of Beijing University of Chinese Medicine, practising in Richmond.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered acupuncturist with over 30 years of clinical experience across Europe and North America.", "ledeZh": "三十余年欧洲与北美临床经验的注册针灸师。", "bioEn": "Jiabin Nan graduated from Beijing University of Chinese Medicine and has practised and taught in several countries across Europe and North America. With over 30 years of clinical experience in TCM, he has developed extensive expertise in pain-related conditions such as sports injuries, headaches, frozen shoulder and lumbar strain. He also has strong clinical results with facial paralysis, post-stroke hemiplegia, menstrual irregularities and insomnia, as well as paediatric concerns including enuresis, growth delays and digestive issues.", "bioZh": "毕业于北京中医学院（今北京中医药大学），曾在欧洲及北美多国行医与教学。三十余年中医临床经验，擅长运动损伤、头痛、五十肩、腰肌劳损等各类痛症，并在面瘫、中风后偏瘫、月经不调与失眠方面临床疗效显著；对小儿遗尿、生长迟缓及消化不良亦有独到调理。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Pain Management", "zh": "痛症调理"}, {"en": "Paediatric TCM", "zh": "小儿调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "headaches-migraines", "en": "Headaches & Migraines", "zh": "头痛与偏头痛"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Beijing University of Chinese Medicine (Beijing College of TCM)", "30+ years of clinical practice across Europe & North America", "Clinical practice and teaching in multiple countries"], "educationZh": ["北京中医学院（今北京中医药大学）", "欧洲与北美 30+ 年临床", "多国行医与教学"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "jim-yi": {"seoTitle": "Jim Yi — TCM Orthopedics · R.TCM.P, R.Ac | Canadian Western TCM", "seoDescription": "Jim Yi, registered TCM practitioner and acupuncturist at Canadian Western TCM — Master of TCM Orthopedics from the China Academy of Chinese Medical Sciences, specialising in musculoskeletal and spinal care in Vancouver.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Master of TCM Orthopedics", "zh": "中医骨伤科硕士"}, {"en": "Associate Chief Physician (China)", "zh": "中医骨伤科副主任医师"}], "ledeEn": "Registered TCM practitioner and acupuncturist with over 30 years of experience, specialising in Chinese orthopedics.", "ledeZh": "三十余年临床经验、专精中医骨伤的注册中医师与针灸师。", "bioEn": "Jim Yi graduated from Shanghai University of Traditional Chinese Medicine and earned a Master's degree in Traditional Chinese Orthopedics from the China Academy of Chinese Medical Sciences in Beijing. He integrates Tuina, orthopedic manipulation, acupuncture, moxibustion, cupping and Chinese herbal medicine to treat acute and chronic musculoskeletal pain, spinal disorders such as cervical spondylosis and lumbar disc herniation, and joint injuries of the knee and ankle. He also brings rich clinical experience in internal-medicine and skin conditions.", "bioZh": "毕业于上海中医药大学，并获北京中国中医科学院中医骨伤科硕士学位。擅长综合运用推拿、整骨、针刺、艾灸、拔罐及中药，治疗头颈肩腰腿疼痛、颈椎病、腰椎间盘突出、膝痛及足踝损伤等急慢性骨关节与肌肉筋膜疾病，并对内科杂病及皮肤病有丰富临床经验。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Orthopedic Manipulation", "zh": "整骨"}, {"en": "Acupuncture", "zh": "针灸"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Chinese Herbal Medicine", "zh": "中药"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}, {"slug": "skin-acne", "en": "Skin & Acne", "zh": "皮肤与痤疮"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "manual-bone-setting", "en": "Manual Bone Setting", "zh": "正骨"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["30+ years of clinical experience", "Shanghai University of Traditional Chinese Medicine — Bachelor of TCM", "China Academy of Chinese Medical Sciences, Beijing — Master of TCM Orthopedics", "Associate Chief Physician of Traditional Chinese Orthopedics"], "educationZh": ["30+ 年临床经验", "上海中医药大学 — 中医学学士", "北京中国中医科学院 — 中医骨伤科硕士", "中医骨伤科副主任医师"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "gemmie-lam": {"seoTitle": "Gemmie Lam — Registered TCM Practitioner · R.TCM.P | Canadian Western TCM", "seoDescription": "Gemmie Lam, registered TCM practitioner at Canadian Western TCM — Master's in Acupuncture from the University of Hong Kong, blending Tuina, moxibustion and aromatherapy in Vancouver.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "Registered CMP (Hong Kong)", "zh": "香港注册中医师"}, {"en": "Master of TCM (Acupuncture)", "zh": "针灸学硕士"}], "ledeEn": "Registered TCM practitioner with a Master's in Acupuncture from the University of Hong Kong, blending Tuina, moxibustion and aromatherapy.", "ledeZh": "香港大学针灸学硕士的注册中医师，融合推拿、艾灸与精油按摩。", "bioEn": "Gemmie Lam holds a Bachelor of Chinese Medicine and a Master's degree in Acupuncture from The University of Hong Kong. She combines Tuina therapy, moxibustion, cupping, exercise rehabilitation and aromatherapy massage to relieve musculoskeletal pain, restore mobility and improve circulation, and to support sleep, digestion and emotional wellbeing.", "bioZh": "毕业于香港大学，获中医全科学士及针灸学硕士学位。擅长结合中医推拿、艾灸、拔罐、运动治疗及精油按摩，处理颈肩腰腿痛、肌肉劳损与软组织粘连，恢复活动度、促进循环，并改善睡眠、消化及情绪问题。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Exercise Rehabilitation", "zh": "运动康复"}, {"en": "Aromatherapy Massage", "zh": "精油按摩"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["University of Hong Kong — Bachelor of Chinese Medicine", "University of Hong Kong — Master's in Acupuncture", "Registered Chinese Medicine Practitioner (Hong Kong)"], "educationZh": ["香港大学 — 中医全科学士", "香港大学 — 针灸学硕士", "香港注册中医师"], "languages": [{"en": "Cantonese", "zh": "粤语"}, {"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "helen-he": {"seoTitle": "Helen He — Women's Health & Postpartum Rehab | Canadian Western TCM", "seoDescription": "Helen He, Associate Chief Obstetrician and rehabilitation therapist at Canadian Western TCM — nearly 40 years in women's health, specialising in postpartum recovery and pelvic floor rehabilitation across Richmond, Burnaby, Vancouver and White Rock.", "creds": [{"en": "Associate Chief Obstetrician (China)", "zh": "中国产科副主任医师"}, {"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Associate Chief Obstetrician with nearly 40 years in women's health, specialising in postpartum recovery and pelvic floor rehabilitation.", "ledeZh": "近四十年妇产科经验的产科副主任医师，专注产后康复与盆底功能调理。", "bioEn": "Helen He has nearly 40 years of clinical experience in obstetrics and gynecology. She led the establishment of a postpartum rehabilitation centre and integrates Chinese and Western approaches to support women's health concerns such as dysmenorrhea, infertility and pelvic conditions. She is also experienced with postpartum and menopausal care and pelvic floor dysfunction — including pelvic floor tension, urinary incontinence and constipation — and is skilled in pelvic alignment correction, posture assessment and rehabilitation training.", "bioZh": "拥有近四十年妇产科临床经验，主导建立产后康复中心，运用中西医结合方法调理痛经、不孕及各类盆腔问题。亦擅长产后与更年期调理及盆底功能障碍（盆底高张、尿失禁、便秘等），并在骨盆矫正、体态评估与康复训练指导方面经验丰富。", "specialties": [{"en": "Postpartum Rehabilitation", "zh": "产后康复"}, {"en": "Pelvic Floor Therapy", "zh": "盆底调理"}, {"en": "Women's Health", "zh": "妇科调理"}, {"en": "Pelvic Alignment Correction", "zh": "骨盆矫正"}, {"en": "Rehabilitation Training", "zh": "康复训练"}], "conditions": [{"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}, {"slug": "fertility-pregnancy", "en": "Fertility & Pregnancy", "zh": "备孕与孕产"}, {"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "manual-bone-setting", "en": "Manual Bone Setting", "zh": "正骨"}], "educationEn": ["Nearly 40 years of clinical obstetrics & gynecology (China)", "Founder of a postpartum rehabilitation centre", "Integrative Chinese–Western women's health & pelvic rehabilitation"], "educationZh": ["中国妇产科临床近四十年", "创建产后康复中心", "中西医结合妇科与盆底康复"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "rosa-shu": {"seoTitle": "Rosa Shu — Registered TCM Practitioner · R.TCM.P | Canadian Western TCM", "seoDescription": "Rosa Shu, registered TCM practitioner at Canadian Western TCM — graduate of Oshio College of Acupuncture & Herbology, blending acupuncture, Tuina and DDS bioelectric therapy across Richmond and Burnaby.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}], "ledeEn": "Registered TCM practitioner blending acupuncture, Tuina and DDS bioelectric therapy, with a focus on pain relief and facial rejuvenation.", "ledeZh": "融合针灸、推拿与 DDS 生物电疗法的注册中医师，专注疼痛调理与面部焕活。", "bioEn": "Rosa Shu graduated from Oshio College of Acupuncture & Herbology in Canada and has years of acupuncture and Tuina experience in China. She integrates traditional techniques — acupuncture, Tuina, moxibustion, cupping and gua sha — with modern methods to address pain, strain and insomnia. She also applies DDS bioelectric therapy for muscle weakness, constipation and post-stroke recovery, and offers TCM facial rejuvenation such as facial bioelectric lifting and cosmetic acupuncture.", "bioZh": "毕业于加拿大皇家太平洋学院（Oshio College of Acupuncture & Herbology），在国内有多年针灸推拿经验。擅长结合针灸、推拿、艾灸、拔罐、刮痧等传统技法与现代疗法，调理各类疼痛、劳损及失眠；并运用 DDS 生物电疗法改善肌肉无力、便秘及中风后遗症，兼擅面部生物电提升与面部针灸美容。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"en": "DDS Bioelectric Therapy", "zh": "DDS生物电"}, {"en": "Facial Rejuvenation", "zh": "面部美容"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "skin-acne", "en": "Skin & Acne", "zh": "皮肤与痤疮"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "aesthetic-acupuncture", "en": "Aesthetic Acupuncture", "zh": "美容针"}], "educationEn": ["Oshio College of Acupuncture & Herbology, Canada", "Years of acupuncture & Tuina practice in China", "DDS bioelectric therapy & TCM facial rejuvenation"], "educationZh": ["加拿大皇家太平洋学院（Oshio College of Acupuncture & Herbology）", "国内多年针灸推拿临床", "DDS 生物电疗法与中医面部美容"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "pearson-zhang": {"seoTitle": "Pearson Zhang — Registered TCM Practitioner · R.TCM.P, R.Ac | Canadian Western TCM", "seoDescription": "Pearson Zhang, registered TCM practitioner and acupuncturist at Canadian Western TCM — root-cause care for neck and back pain, injury rehabilitation and everyday wellbeing across Richmond and Burnaby.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered TCM practitioner and acupuncturist treating the root cause — from neck and back pain to injury rehabilitation and everyday wellbeing.", "ledeZh": "标本兼治的注册中医师与针灸师——从颈肩腰腿痛到运动康复与日常调理。", "bioEn": "Pearson Zhang practises by the principle of “treating the root and harmonising body and mind,” pairing whole-person diagnosis with individualised treatment. He is experienced with shoulder and neck conditions such as frozen shoulder and stiff neck; lumbar and leg concerns including muscle strain and sciatica; and systematic rehabilitation for sports and accident-related injuries. He also supports everyday wellbeing — easing insomnia, headaches, low appetite and digestive complaints — to restore overall balance.", "bioZh": "秉持“治病求本、身心同调”的理念，注重整体辨证与个体化治疗。擅长诊治肩周炎、落枕等肩颈问题，腰肌劳损、坐骨神经痛等腰腿疾病，并为运动损伤与交通意外提供系统化康复方案；亦调理失眠、头痛、食欲不振及消化不适等亚健康状态，恢复身心平衡。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Shoulder & Neck Care", "zh": "肩颈调理"}, {"en": "Injury Rehabilitation", "zh": "运动康复"}, {"en": "Subhealth Management", "zh": "亚健康调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered TCM Practitioner & Acupuncturist (BC)", "Root-cause diagnosis & individualised treatment", "Musculoskeletal care, injury rehabilitation & subhealth management"], "educationZh": ["BC省注册中医师与针灸师", "治病求本 · 辨证个体化治疗", "颈肩腰腿 · 运动康复 · 亚健康调理"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "lynn-liu": {"seoTitle": "Lynn Liu | Canadian Western TCM", "seoDescription": "Lynn Liu, registered TCM practitioner at Canadian Western TCM — nearly 20 years of clinical rehabilitation, Master's from Nanjing University of Chinese Medicine, across Vancouver and Richmond.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "Master of TCM", "zh": "中医学硕士"}], "ledeEn": "Registered TCM practitioner with nearly 20 years in clinical rehabilitation, blending acupuncture, Tuina and herbal medicine.", "ledeZh": "近二十年康复临床的注册中医师，融合针灸、推拿与中草药。", "bioEn": "Lynn Liu graduated from Anhui University of Traditional Chinese Medicine in acupuncture and Tuina, and earned a Master's degree from Nanjing University of Chinese Medicine. With nearly 20 years of clinical rehabilitation experience, she combines acupuncture, Tuina and herbal medicine to support pain management, digestive and menstrual health, stroke rehabilitation, sleep concerns and constitutional wellness.", "bioZh": "毕业于安徽中医药大学针灸推拿专业，并获南京中医药大学中医学硕士学位，具江苏省高级专业技术资格。从事中医康复临床近二十年，擅长运用针灸、推拿及中草药调理痛证、消化系统疾病、月经不调、中风后遗症、睡眠障碍及体质。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Chinese Herbal Medicine", "zh": "中草药"}, {"en": "Stroke Rehabilitation", "zh": "中风康复"}, {"en": "Constitutional Wellness", "zh": "体质调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["Anhui University of TCM — Acupuncture & Tuina", "Nanjing University of Chinese Medicine — Master's degree", "Nearly 20 years of clinical rehabilitation; senior professional-technical qualification (Jiangsu)"], "educationZh": ["安徽中医药大学 — 针灸推拿", "南京中医药大学 — 中医学硕士", "近 20 年康复临床；江苏省高级专业技术资格"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "simon-zhang": {"seoTitle": "Simon Zhang | Canadian Western TCM", "seoDescription": "Simon Zhang, registered acupuncturist and rehabilitation therapist at Canadian Western TCM — Tuina, moxibustion and cupping for pain, tension and sleep, across Vancouver and Richmond.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Acupuncturist and rehabilitation therapist skilled in Tuina, moxibustion and cupping for pain, tension and sleep.", "ledeZh": "擅长推拿、艾灸与拔罐的注册针灸师与康复治疗师，调理疼痛、紧张与睡眠。", "bioEn": "Simon Zhang specializes in traditional Chinese therapies — including Tuina, moxibustion, bloodletting and cupping — to address pain, muscular tension, insomnia and digestive concerns. He is currently pursuing advanced studies in acupuncture.", "bioZh": "擅长推拿、艾灸、刺络放血及拔罐等传统中医疗法，调理各类疼痛、肌肉紧张、失眠及消化不适，目前正进修针灸。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Bloodletting", "zh": "刺络放血"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Registered Acupuncturist (BC)", "Traditional Chinese Tuina, moxibustion & cupping", "Advanced acupuncture studies in progress"], "educationZh": ["BC省注册针灸师", "传统推拿、艾灸与拔罐", "针灸进修中"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "william-wang": {"seoTitle": "William Wang | Canadian Western TCM", "seoDescription": "William Wang, registered acupuncturist and senior rehabilitation therapist at Canadian Western TCM — acupuncture, acupoint Tuina and holistic diagnosis in Vancouver.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Senior Rehabilitation Therapist", "zh": "高级康复理疗师"}], "ledeEn": "Registered acupuncturist and senior rehabilitation therapist offering holistic care through pulse, facial and abdominal diagnosis.", "ledeZh": "注册针灸师与高级康复理疗师，结合手诊、面诊、腹诊提供整体调理。", "bioEn": "William Wang specializes in acupuncture, acupoint Tuina, fire cupping, moxibustion and gua sha. Using pulse, facial and abdominal diagnosis, he provides holistic care for musculoskeletal pain, skin disorders, hypertension, gynecological and men's-health concerns, with attention to dietary therapy and whole-body wellness.", "bioZh": "擅长运用针灸、穴位推拿、火罐、艾灸及刮痧，结合手诊、面诊及腹诊，为患者调理颈肩腰腿痛、皮肤病、高血压及妇科、男科等问题，并注重食疗与整体养生。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Acupoint Tuina", "zh": "穴位推拿"}, {"en": "Fire Cupping", "zh": "火罐"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Gua Sha", "zh": "刮痧"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "skin-acne", "en": "Skin & Acne", "zh": "皮肤与痤疮"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Registered Acupuncturist (BC)", "Senior Rehabilitation Therapist", "Pulse, facial & abdominal diagnosis; dietary therapy & holistic wellness"], "educationZh": ["BC省注册针灸师", "高级康复理疗师", "手诊、面诊、腹诊；食疗与整体养生"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "shawn-feng": {"seoTitle": "Shawn Feng | Canadian Western TCM", "seoDescription": "Shawn Feng, registered acupuncturist and rehabilitation therapist at Canadian Western TCM Vancouver — acupuncture, moxibustion, Tuina and cupping for pain care.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Acupuncturist and rehabilitation therapist focused on personalized pain care through acupuncture, moxibustion, Tuina and cupping.", "ledeZh": "康复治疗师与注册针灸师，以针灸、艾灸、推拿、拔罐提供个性化疼痛调理。", "bioEn": "Shawn Feng has extensive clinical experience in Traditional Chinese Medicine. He specializes in treating neck, shoulder, back, joint and muscle pain using acupuncture, moxibustion, Tuina and cupping therapy, and provides personalized treatment plans to relieve pain, restore mobility and support overall health and wellness.", "bioZh": "拥有丰富的中医临床经验，擅长运用针灸、艾灸、推拿及拔罐等传统疗法治疗各类疼痛问题，包括颈肩腰腿痛、肌肉劳损及关节疼痛。坚持因人施治，帮助患者缓解疼痛、恢复身体功能，促进整体健康。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Tui Na", "zh": "推拿"}, {"en": "Cupping", "zh": "拔罐"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Registered Acupuncturist (BC)", "Rehabilitation Therapist", "Personalized treatment plans for pain relief and functional recovery"], "educationZh": ["BC省注册针灸师", "康复治疗师", "因人施治的个性化疼痛与功能康复方案"]},
      "mengli-song": {"seoTitle": "Mingli Song | Canadian Western TCM", "seoDescription": "Mingli Song, registered acupuncturist at Canadian Western TCM — over 25 years of acupuncture, trained at Liaoning University of TCM, across Richmond and Burnaby.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered acupuncturist with over 25 years of experience, trained at Liaoning University of TCM.", "ledeZh": "辽宁中医药大学出身、25 年以上经验的注册针灸师。", "bioEn": "Mingli Song graduated from Liaoning University of Traditional Chinese Medicine with a Bachelor's degree and has over 25 years of acupuncture experience. Specializing in acupuncture, acupressure, cupping, moxibustion and gua sha, she treats headaches and migraines, facial paralysis, neck, shoulder and back pain, tennis elbow, sciatica, arthritis, colds and respiratory concerns.", "bioZh": "毕业于辽宁中医药大学中医学专业，拥有 25 年以上针灸经验。主治针灸、穴位按摩、火罐、艾灸、刮痧，擅长头痛、偏头痛、面瘫、颈肩背痛、网球肘、坐骨神经痛、关节炎、感冒及呼吸系统问题。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Acupressure", "zh": "穴位按摩"}, {"en": "Cupping", "zh": "火罐"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Gua Sha", "zh": "刮痧"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "headaches-migraines", "en": "Headaches & Migraines", "zh": "头痛与偏头痛"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}], "educationEn": ["Liaoning University of TCM — Bachelor of TCM", "25+ years of acupuncture practice", "Acupuncture, acupressure, cupping, moxibustion & gua sha"], "educationZh": ["辽宁中医药大学 — 中医学学士", "25+ 年针灸临床", "针灸、穴位按摩、火罐、艾灸与刮痧"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "jasmine-zhang": {"seoTitle": "Jasmine Zhang | Canadian Western TCM", "seoDescription": "Jasmine Zhang, registered acupuncturist and moxibustion therapist at Canadian Western TCM — 17 years in women's, internal and paediatric care, in Burnaby.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Moxibustion Therapist", "zh": "艾灸师"}], "ledeEn": "Registered acupuncturist and moxibustion therapist with 17 years of experience in women's, internal and paediatric care.", "ledeZh": "17 年经验的注册针灸师与艾灸师，专于妇科、内科及儿科调理。", "bioEn": "Jasmine Zhang has practised moxibustion therapy for 17 years and specializes in moxibustion, acupuncture, cupping, gua sha, Tuina and paediatric Tuina. She uses moxibustion and acupuncture to support gynecological, internal-medicine and paediatric conditions, as well as various pain concerns.", "bioZh": "从事艾灸治疗已有 17 年，擅长艾灸、针灸、拔罐、刮痧、推拿及小儿推拿。擅长运用艾灸与针灸调理妇科、内科、儿科疾病及各种痛症。", "specialties": [{"en": "Moxibustion", "zh": "艾灸"}, {"en": "Acupuncture", "zh": "针灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Paediatric Tuina", "zh": "小儿推拿"}], "conditions": [{"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}, {"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}], "treatments": [{"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["17 years of moxibustion therapy", "Acupuncture, cupping, gua sha & Tuina", "Paediatric Tuina; women's, internal & paediatric care"], "educationZh": ["17 年艾灸治疗", "针灸、拔罐、刮痧与推拿", "小儿推拿；妇科、内科、儿科调理"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "monica-liu": {"seoTitle": "Monica Liu | Canadian Western TCM", "seoDescription": "Monica Liu, certified acupressure and rehabilitation therapist at Canadian Western TCM — over 10 years in Tuina, easing neck, shoulder and lower-back pain in Burnaby.", "creds": [{"en": "Registered Acupressure Therapist", "zh": "BC省注册指压师"}, {"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Certified acupressure and rehabilitation therapist with over 10 years in Tuina, easing neck, shoulder and lower-back pain.", "ledeZh": "持牌指压与康复治疗师，10+ 年推拿经验，缓解颈肩腰腿疼痛。", "bioEn": "Monica Liu is a certified acupressure therapist with over 10 years of experience in TCM Tuina. She specializes in Tuina, moxibustion, cupping and gua sha, and achieves noticeable results for neck, shoulder and lower-back pain as well as sciatica. She is also skilled in lymphatic detoxification to help unblock the meridians and support overall wellbeing.", "bioZh": "加拿大认证的专业持牌指压师，拥有十多年中医推拿经验，擅长中医推拿、艾灸、拔罐、刮痧等传统疗法。对颈肩、腰腿疼痛及坐骨神经痛等病症有显著疗效，并擅长通过淋巴排毒疏通经络、促进健康。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Acupressure", "zh": "指压"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}, {"en": "Lymphatic Detox", "zh": "淋巴排毒"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Certified professional Acupressure Therapist (Canada)", "10+ years of TCM Tuina experience", "Tuina, moxibustion, cupping, gua sha & lymphatic detox"], "educationZh": ["加拿大认证持牌指压师", "10+ 年中医推拿经验", "推拿、艾灸、拔罐、刮痧与淋巴排毒"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "david-leung": {"seoTitle": "David Leung | Canadian Western TCM", "seoDescription": "David Leung, registered acupuncturist at Canadian Western TCM — Tuina, essential-oil massage and moxibustion for everyday muscular pain, in Richmond.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered acupuncturist skilled in Tuina, essential-oil massage and moxibustion for everyday muscular pain.", "ledeZh": "擅长推拿、精油按摩与艾灸的注册针灸师，调理日常肌肉疼痛。", "bioEn": "With six years of experience in traditional Chinese Tuina and having worked in countries including Australia, David Leung holds a professional Tuina certificate from the International Manual Therapy Association. He specializes in relieving common muscular pain — such as neck, shoulder, waist and leg pain — using traditional Tuina, essential-oil massage and moxibustion.", "bioZh": "六年中医推拿按摩经验，曾于澳大利亚等多国从事推拿工作，持有国际手法治疗协会专业推拿师证书。擅长使用传统推拿、精油按摩及艾灸疗法，调理颈肩腰腿痛等常见肌肉疼痛。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Essential Oil Massage", "zh": "精油按摩"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Acupuncture", "zh": "针灸"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}], "educationEn": ["6 years of traditional Chinese Tuina", "International Manual Therapy Association — professional Tuina certificate", "Clinical practice across countries including Australia"], "educationZh": ["六年中医推拿按摩经验", "国际手法治疗协会 — 专业推拿师证书", "曾于澳大利亚等多国从事推拿工作"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "angel-yu": {"seoTitle": "Angel Yu — Rehabilitation Therapist | Canadian Western TCM", "seoDescription": "Angel Yu, rehabilitation therapist at Canadian Western TCM — eight years in meridian Tuina, easing muscle fatigue, pain and stress in Richmond.", "creds": [{"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Rehabilitation therapist with eight years in meridian Tuina, easing muscle fatigue, pain and stress.", "ledeZh": "八年经络推拿经验的康复治疗师，缓解肌肉疲劳、疼痛与压力。", "bioEn": "Angel Yu brings eight years of expertise in meridian Tuina massage, with a keen ability to identify muscle issues and pinpoint areas of pain. Her specialties include Tuina, essential-oil therapy, moxibustion, cupping, gua sha, lymphatic detox, head therapy and postpartum recovery. By relieving muscle fatigue, easing pain and lowering stress, her treatments also support blood circulation and overall recovery.", "bioZh": "拥有八年中医经络推拿经验，能够精准识别肌肉问题与疼痛部位。擅长经络推拿、精油推背、艾灸、拔罐、刮痧、淋巴排毒、头疗及产后修复，帮助缓解肌肉疲劳、减轻疼痛、降低压力，并促进血液循环与身体康复。", "specialties": [{"en": "Meridian Tuina", "zh": "经络推拿"}, {"en": "Essential Oil Therapy", "zh": "精油推背"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}, {"en": "Lymphatic Detox", "zh": "淋巴排毒"}, {"en": "Head Therapy", "zh": "头疗"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "fertility-pregnancy", "en": "Fertility & Pregnancy", "zh": "备孕与孕产"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "head-therapy", "en": "Head & Scalp Therapy", "zh": "头疗"}], "educationEn": ["8 years of meridian Tuina massage", "Tuina, essential-oil therapy, moxibustion, cupping & gua sha", "Lymphatic detox, head therapy & postpartum recovery"], "educationZh": ["八年经络推拿经验", "经络推拿、精油推背、艾灸、拔罐与刮痧", "淋巴排毒、头疗与产后修复"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "hong-guan": {"seoTitle": "Hong Guan — Rehabilitation Therapist | Canadian Western TCM", "seoDescription": "Hong Guan, rehabilitation therapist at Canadian Western TCM — Yuan Shi Dian therapy for neck, shoulder and lower-back pain across Richmond and Burnaby.", "creds": [{"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Rehabilitation therapist specialising in Yuan Shi Dian (Origin Point) therapy for neck, shoulder and lower-back pain.", "ledeZh": "专修「原始点疗法」的康复治疗师，擅长颈肩腰腿痛与坐骨神经痛。", "bioEn": "Hong Guan specializes in Yuan Shi Dian (Origin Point) therapy, achieving notable results for neck, shoulder and lower-back pain as well as sciatica, and providing relief for many types of pain. He is skilled in traditional methods including Tuina, moxibustion, cupping and gua sha.", "bioZh": "专修「原始点疗法」，在临床上对颈肩、腰腿疼痛及坐骨神经痛等有显著疗效，对各类痛症均有缓解作用。擅长中医推拿、艾灸、拔罐、刮痧等传统治疗方法。", "specialties": [{"en": "Yuan Shi Dian Therapy", "zh": "原始点疗法"}, {"en": "Tuina", "zh": "推拿"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Specialist in Yuan Shi Dian (Origin Point) Therapy", "Tuina, moxibustion, cupping & gua sha", "Neck, shoulder & lower-back pain, sciatica"], "educationZh": ["专修原始点疗法", "推拿、艾灸、拔罐与刮痧", "颈肩腰腿痛与坐骨神经痛"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "bin-li": {"seoTitle": "Bin Li — Rehabilitation Therapist · R.Ac | Canadian Western TCM", "seoDescription": "Bin Li, rehabilitation therapist and acupuncturist at Canadian Western TCM — over 10 years in Tuina for muscle tension and pain across Richmond and Burnaby.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Rehabilitation therapist and acupuncturist with over 10 years in Tuina for muscle tension, strain and pain.", "ledeZh": "10+ 年推拿经验的康复治疗师与注册针灸师，调理肌肉紧张、劳损与痛症。", "bioEn": "Bin Li has over 10 years of experience in TCM Tuina therapy, treating muscle tension, strain and pain with steady, precise techniques. He combines Tuina, cupping, gua sha and moxibustion for comprehensive, effective care.", "bioZh": "拥有十多年中医推拿治疗经验，擅长治疗各种肌肉紧张、劳损与痛症，手法稳健、精准有效。结合推拿、拔罐、刮痧与艾灸等综合治疗，取得良好效果。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Acupuncture", "zh": "针灸"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}], "educationEn": ["10+ years of TCM Tuina therapy", "Precise techniques for muscle tension, strain & pain", "Tuina, cupping, gua sha & moxibustion"], "educationZh": ["十多年中医推拿经验", "精准调理肌肉紧张、劳损与痛症", "推拿、拔罐、刮痧与艾灸"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "feng-kang": {"seoTitle": "Feng Kang — Rehabilitation Therapist | Canadian Western TCM", "seoDescription": "Feng Kang, rehabilitation therapist at Canadian Western TCM — over 30 years in chronic pain, neurological rehabilitation and sports-injury recovery, in Burnaby.", "creds": [{"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Rehabilitation therapist with over 30 years of clinical experience in chronic pain, neurological rehabilitation and sports-injury recovery.", "ledeZh": "30+ 年临床经验的康复治疗师，专注慢性疼痛、神经系统康复与运动损伤恢复。", "bioEn": "Feng Kang is a rehabilitation therapist with over 30 years of clinical experience in Traditional Chinese Medicine, focusing on chronic pain, neurological rehabilitation and sports-injury recovery. Care is tailored to each individual, and treatment outcomes vary from person to person.", "bioZh": "康复治疗师，拥有 30 余年中医临床经验，专注于慢性疼痛、神经系统康复及运动损伤恢复。诊疗因人而异，每位患者的疗效各不相同。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Herbal Medicine", "zh": "中药"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["30+ years of clinical TCM practice", "Chronic pain, neurological rehabilitation & sports-injury recovery", "Individualised, integrative care"], "educationZh": ["30+ 年中医临床", "慢性疼痛、神经系统康复与运动损伤恢复", "因人而异的整体调理"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "li-gao": {"seoTitle": "Lily Gao — Acupuncturist · R.Ac | Canadian Western TCM", "seoDescription": "Lily Gao, registered acupuncturist at Canadian Western TCM — trained at Calgary College of TCM & Acupuncture, in Burnaby.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered acupuncturist trained at Calgary College of TCM & Acupuncture in acupuncture and Tuina.", "ledeZh": "毕业于 Calgary College of TCM & Acupuncture 的注册针灸师，专于针灸与推拿。", "bioEn": "Lily Gao graduated from Calgary College of Traditional Chinese Medicine and Acupuncture with training in acupuncture and Tuina therapy. She specializes in acupuncture, moxibustion, acupressure, cupping and gua sha.", "bioZh": "毕业于 Calgary College of Traditional Chinese Medicine and Acupuncture 针灸及推拿专业，擅长针灸、艾灸、中医穴位按压、拔罐及刮痧等中医特色疗法。", "specialties": [{"en": "Acupuncture", "zh": "针灸"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Acupressure", "zh": "穴位按压"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Calgary College of TCM & Acupuncture — Acupuncture & Tuina", "Acupuncture, moxibustion & acupressure", "Cupping & gua sha"], "educationZh": ["Calgary College of TCM & Acupuncture — 针灸及推拿", "针灸、艾灸与穴位按压", "拔罐与刮痧"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "nikka-wu": {"seoTitle": "Nikka Wu — Rehabilitation Therapist | Canadian Western TCM", "seoDescription": "Nikka Wu, rehabilitation therapist at Canadian Western TCM — over 10 years blending TCM therapies with modern rehabilitation, in Burnaby.", "creds": [{"en": "Rehabilitation Therapist", "zh": "康复理疗师"}], "ledeEn": "Rehabilitation therapist with over 10 years blending traditional TCM therapies with modern rehabilitation.", "ledeZh": "10+ 年经验的康复理疗师，融合传统中医疗法与现代康复理念。", "bioEn": "Nikka Wu has over 10 years of experience in TCM rehabilitation, combining traditional therapies with modern rehabilitation to create personalised care. Her clinical expertise includes therapeutic massage, acupuncture, breast wellness therapy, head therapy for stress relief and sleep, facial rejuvenation, as well as cupping, gua sha, moxibustion and Fire Dragon moxibustion.", "bioZh": "拥有十余年中医康复理疗经验，擅长将传统中医疗法与现代康复理念相结合，为每位客户制定个性化调理方案。擅长推拿按摩、针灸、乳腺调理、头疗助眠、面部美容，以及拔罐、刮痧、艾灸与火龙灸等中医特色疗法。", "specialties": [{"en": "Therapeutic Massage", "zh": "推拿按摩"}, {"en": "Acupuncture", "zh": "针灸"}, {"en": "Breast Wellness Therapy", "zh": "乳腺调理"}, {"en": "Head Therapy", "zh": "头疗"}, {"en": "Facial Rejuvenation", "zh": "面部美容"}, {"en": "Fire Dragon Moxibustion", "zh": "火龙灸"}], "conditions": [{"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "head-therapy", "en": "Head & Scalp Therapy", "zh": "头疗"}, {"slug": "aesthetic-acupuncture", "en": "Aesthetic Acupuncture", "zh": "美容针"}], "educationEn": ["10+ years of TCM rehabilitation", "Therapeutic massage, acupuncture & head therapy", "Breast wellness, facial rejuvenation & Fire Dragon moxibustion"], "educationZh": ["十余年中医康复理疗", "推拿按摩、针灸与头疗", "乳腺调理、面部美容与火龙灸"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "shirley-zhu": {"seoTitle": "Shirley Zhu — Registered TCM Practitioner · R.TCM.P, R.Ac | Canadian Western TCM", "seoDescription": "Shirley Zhu, registered TCM practitioner and aromatherapist at Canadian Western TCM — gentle manual alignment, floating needle and acupuncture, from a distinguished TCM family, in Vancouver.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "Registered Aromatherapist", "zh": "北美注册芳疗师"}], "ledeEn": "Registered TCM practitioner and aromatherapist from a distinguished TCM family, blending gentle manual alignment, floating needle and acupuncture.", "ledeZh": "出身中医世家的注册中医师与芳疗师，融合柔性正骨、浮针与针灸。", "bioEn": "Shirley Zhu is a registered TCM practitioner, acupuncturist and North American registered aromatherapist. Coming from a distinguished TCM family, she has extensive clinical experience, including years at the Beijing International SOS Clinic. She blends gentle manual alignment, floating-needle therapy, acupuncture, herbal medicine and plant-based aromatherapy to support pain, sports injuries, chronic conditions and stress. Her hands-on approach is gentle and comfortable.", "bioZh": "注册中医师、注册针灸师及北美注册芳疗师。出身中医世家，曾于北京国际SOS诊所工作多年，临床经验丰富。擅长结合柔性正骨、浮针、针灸、中药及植物精油疗法，调理各类疼痛、运动损伤、慢性疾病及情绪压力问题，临床手法轻柔舒适。", "specialties": [{"en": "Gentle Manual Alignment", "zh": "柔性正骨"}, {"en": "Floating Needle", "zh": "浮针"}, {"en": "Acupuncture", "zh": "针灸"}, {"en": "Herbal Medicine", "zh": "中药"}, {"en": "Aromatherapy", "zh": "芳香疗法"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "floating-needle", "en": "Floating Needle", "zh": "浮针"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["From a distinguished TCM family", "Years of clinical experience, incl. Beijing International SOS Clinic", "North American Registered Aromatherapist"], "educationZh": ["出身中医世家", "临床经验丰富，曾任职北京国际SOS诊所", "北美注册芳疗师"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "emmett-zhang": {"seoTitle": "Emmett Zhang — Registered Massage Therapist · R.M.T., ACE-CPT | Canadian Western TCM", "seoDescription": "Emmett Zhang, registered massage therapist and ACE-certified trainer at Canadian Western TCM — therapeutic massage and movement rehabilitation in Richmond.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}, {"en": "ACE-CPT", "zh": "持牌私人教练"}], "ledeEn": "Registered massage therapist and ACE-certified trainer combining therapeutic massage with movement rehabilitation.", "ledeZh": "注册按摩师与 ACE 认证私人教练，结合治疗性按摩与运动康复。", "bioEn": "Emmett Zhang graduated from Langara College in Vancouver, BC. With a strong foundation in anatomy, pathology, orthopedic assessment and therapeutic massage, he provides evidence-based, personalised treatments to help clients relieve pain, recover from injuries and improve physical function. As an ACE-certified fitness trainer, he integrates movement rehabilitation and home-exercise programs to support long-term wellbeing.", "bioZh": "毕业于 Langara College（加拿大 BC 省温哥华）。具备扎实的人体解剖学、病理学、骨科评估及治疗性按摩基础，能基于循证医学制定个性化治疗方案，有效缓解疼痛、促进损伤修复并提升身体功能。作为 ACE 认证的持牌健身教练，他将运动康复与居家训练结合，帮助客户建立长期健康管理。", "specialties": [{"en": "Therapeutic Massage", "zh": "治疗性按摩"}, {"en": "Orthopedic Assessment", "zh": "骨科评估"}, {"en": "Movement Rehabilitation", "zh": "运动康复"}, {"en": "Home Exercise Programs", "zh": "居家训练"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Langara College, Vancouver, BC", "Anatomy, pathology & orthopedic assessment", "ACE-certified fitness trainer — movement rehab & home exercise"], "educationZh": ["Langara College（温哥华）", "解剖学、病理学与骨科评估", "ACE 认证健身教练 — 运动康复与居家训练"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "lihong-zhou": {"seoTitle": "Lihong Zhou — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Lihong Zhou, registered massage therapist at Canadian Western TCM — TCM Tuina with modern massage for musculoskeletal and sports injuries in Richmond.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}], "ledeEn": "Registered massage therapist integrating TCM Tuina with modern massage for musculoskeletal and sports injuries.", "ledeZh": "融合中医推拿与现代按摩的注册按摩治疗师，专于筋骨与运动损伤。", "bioEn": "Lihong Zhou is a Registered Massage Therapist in BC. With many years of experience in TCM Tuina, he integrates traditional techniques with modern massage to provide personalised treatment plans that relieve pain and improve physical function. He focuses on musculoskeletal injuries, chronic pain and sports injuries, using natural therapies to support recovery.", "bioZh": "BC 省注册按摩治疗师（RMT）。从事多年中医推拿工作，擅长将中医推拿与现代按摩技术相结合，为患者提供个性化的治疗方案，有效缓解疼痛、改善身体机能。专注于处理筋骨损伤、慢性疼痛及运动损伤，致力于通过自然疗法促进康复。", "specialties": [{"en": "TCM Tuina", "zh": "中医推拿"}, {"en": "Modern Massage", "zh": "现代按摩"}, {"en": "Sports Injury Care", "zh": "运动损伤调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered Massage Therapist (BC)", "TCM Tuina integrated with modern massage", "Musculoskeletal injuries, chronic pain & sports injuries"], "educationZh": ["BC 省注册按摩治疗师", "中医推拿结合现代按摩", "筋骨损伤、慢性疼痛与运动损伤"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "tony-liang": {"seoTitle": "Tony Liang — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Tony Liang, registered massage therapist and BC RMT-program instructor at Canadian Western TCM — muscle, fascia and joint care in Burnaby.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}, {"en": "RMT Program Instructor", "zh": "BC省RMT课程授课老师"}], "ledeEn": "Registered massage therapist and BC RMT-program instructor treating muscle, fascia, joint and neuromuscular pain.", "ledeZh": "注册按摩师与 BC 省 RMT 课程授课老师，调理肌肉、筋膜、关节与神经肌肉疼痛。", "bioEn": "Tony Liang is a Registered Massage Therapist with many years of clinical experience and serves as an instructor for the BC RMT Program. He specializes in professional massage techniques to treat muscle, fascia, joint and neuromuscular pain. Drawing on a deep understanding of anatomy, physiology and pathology, he assesses each client and tailors evidence-based treatment plans to support recovery.", "bioZh": "BC 省注册按摩师，拥有多年临床经验，并担任 BC 省 RMT 课程授课老师。擅长以专业按摩手法治疗肌肉、筋膜、关节及神经肌肉疼痛。凭借对人体解剖学、生理学与病理学的深刻理解，科学评估并制定个性化治疗方案，帮助患者康复。", "specialties": [{"en": "Therapeutic Massage", "zh": "专业按摩"}, {"en": "Myofascial Release", "zh": "筋膜松解"}, {"en": "Joint Mobilization", "zh": "关节松动"}, {"en": "Neuromuscular Therapy", "zh": "神经肌肉治疗"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered Massage Therapist (BC)", "Instructor for the BC RMT Program", "Anatomy, physiology & pathology — evidence-based assessment"], "educationZh": ["BC 省注册按摩师", "BC 省 RMT 课程授课老师", "解剖、生理与病理 — 循证评估"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "vickie-xu": {"seoTitle": "Vickie Xu — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Vickie Xu, registered massage therapist at Canadian Western TCM — blending massage therapy with TCM for effective pain relief in Richmond.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}], "ledeEn": "Registered massage therapist blending massage therapy with TCM knowledge for effective pain relief.", "ledeZh": "结合按摩治疗与中医知识的注册按摩师，提供有效的疼痛缓解。", "bioEn": "Vickie Xu has been a Registered Massage Therapist for over four years and holds an M.Sc from Canada. She combines her registered massage-therapy training with a knowledge of Traditional Chinese Medicine to provide effective pain relief. Depending on each client's needs, she draws on Swedish massage, myofascial release, deep tissue, joint mobilization, trigger-point therapy and acupressure, and has a strong interest in aromatherapy.", "bioZh": "从事注册按摩治疗（RMT）超过四年，并在加拿大获得硕士学位。她将注册按摩治疗的训练与中医知识相结合，提供有效的疼痛缓解。根据患者需求，运用瑞典式按摩、筋膜释放、深层组织按摩、关节松动、触发点疗法及穴位按摩，并对芳香疗法颇有心得。", "specialties": [{"en": "Swedish Massage", "zh": "瑞典式按摩"}, {"en": "Myofascial Release", "zh": "筋膜释放"}, {"en": "Deep Tissue", "zh": "深层组织"}, {"en": "Trigger Point Therapy", "zh": "触发点疗法"}, {"en": "Acupressure", "zh": "穴位按摩"}, {"en": "Aromatherapy", "zh": "芳香疗法"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered Massage Therapist, 4+ years", "M.Sc, Canada", "Swedish, myofascial release, deep tissue & trigger-point therapy"], "educationZh": ["注册按摩治疗师，4+ 年", "加拿大硕士学位", "瑞典式、筋膜释放、深层组织与触发点疗法"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "sunny-wei": {"seoTitle": "Sunny Wei — Rehabilitation Therapist | Canadian Western TCM", "seoDescription": "Sunny Wei, rehabilitation therapist at Canadian Western TCM — over ten years in Tuina, easing muscle tension and calming the mind.", "creds": [{"en": "Rehabilitation Therapist", "zh": "康复治疗师"}], "ledeEn": "Rehabilitation therapist with over ten years in Tuina, easing muscle tension and calming the mind.", "ledeZh": "十余年推拿经验的康复治疗师，缓解肌肉紧张、舒缓身心。", "bioEn": "With over ten years of experience in TCM Tuina massage, Sunny Wei specializes in treating muscle tension, strain and pain. She is proficient in essential-oil therapy, moxibustion, cupping, gua sha, lymphatic detox and head therapy — traditional methods that can quickly and effectively relieve muscle tension, calm the mind and promote relaxation.", "bioZh": "拥有十多年中医推拿经验，专长于处理各类肌肉紧张与疼痛问题。擅长精油推拿、艾灸、拔罐、刮痧、淋巴排毒及头疗，这些传统疗法能快速有效地缓解肌肉紧张、舒缓心情、放松身心。", "specialties": [{"en": "Tuina", "zh": "推拿"}, {"en": "Essential Oil Therapy", "zh": "精油推拿"}, {"en": "Moxibustion", "zh": "艾灸"}, {"en": "Cupping", "zh": "拔罐"}, {"en": "Gua Sha", "zh": "刮痧"}, {"en": "Lymphatic Detox", "zh": "淋巴排毒"}, {"en": "Head Therapy", "zh": "头疗"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "head-therapy", "en": "Head & Scalp Therapy", "zh": "头疗"}], "educationEn": ["10+ years of TCM Tuina", "Essential-oil therapy, moxibustion, cupping & gua sha", "Lymphatic detox & head therapy"], "educationZh": ["十多年中医推拿", "精油推拿、艾灸、拔罐与刮痧", "淋巴排毒与头疗"], "languages": [{"en": "Mandarin", "zh": "普通话"}, {"en": "English", "zh": "英语"}]},
      "di-wu": {"seoTitle": "Di Wu — Senior Acupuncturist · R.TCM.P · White Rock Founder | Canadian Western TCM", "seoDescription": "Senior acupuncturist with 30 years of clinical experience in China and Canada — President of the BC Association of TCM & Acupuncture Practitioners (ATCMA) and of the Canada Floating Needle Medicine Association.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "White Rock Founder", "zh": "白石诊所创办人"}, {"en": "President, ATCMA (BC)", "zh": "卑诗省中医针灸师公会 会长"}, {"en": "President, Canada Floating Needle Medicine Association", "zh": "加拿大浮针医学会 会长"}, {"en": "Acupuncture Instructor, KPU", "zh": "昆特兰理工大学（KPU）针灸讲师"}], "ledeEn": "Senior acupuncturist with 30 years of clinical experience in China and Canada — President of the BC Association of TCM & Acupuncture Practitioners (ATCMA) and of the Canada Floating Needle Medicine Association.", "ledeZh": "中加30年临床经验的高级针灸师，卑诗省中医针灸师公会会长、加拿大浮针医学会会长，KPU中医系讲师。", "bioEn": "Di Wu is the senior acupuncturist at CWTCM White Rock. He earned his master's degree in acupuncture from Heilongjiang University of Chinese Medicine, studying under Professor Sun Shentian, a National Master of TCM and acupuncture, and has 30 years of clinical experience in China and Canada. He currently serves as President of the BC Association of TCM & Acupuncture Practitioners (ATCMA) and of the Canada Floating Needle Medicine Association (FSNAC), and teaches acupuncture in the TCM department at Kwantlen Polytechnic University. Skilled in scalp, auricular and trigger-point acupuncture and above all Fu's Subcutaneous Needling (FSN), he treats pain conditions, sports injuries and post-accident pain — often with clear results within one or two sessions — along with stroke rehabilitation, essential tremor, aphasia and other neurological conditions. In recent years he has trained nearly a hundred acupuncturists in FSN across Greater Vancouver and, as North America's chief FSN lecturer, is committed to building the White Rock clinic into Canada's first FSN training demonstration base.", "bioZh": "加西中医白石诊所高级针灸师。黑龙江中医药大学针灸硕士，师从国医大师孙申田教授，中加30年临床经验。现任卑诗省中医针灸师公会会长、加拿大浮针医学会会长，并担任昆特兰理工大学（KPU）中医系讲师。临床擅长头针、耳针、激痛点针法，尤精浮针疗法，对各类痛症、运动损伤、车祸后遗症常一两次即明显见效，并对脑中风康复、震颤、失语等神经内科疾病有独特疗效。数年来培训大温地区近百位针灸医师使用浮针，作为北美浮针疗法主讲人，致力于把白石诊所打造为加拿大第一家浮针培训示范基地。", "specialties": [{"en": "FSN Therapy", "zh": "浮针疗法"}, {"en": "Scalp & Auricular Acupuncture", "zh": "头针与耳针"}, {"en": "Trigger Point Acupuncture", "zh": "激痛点针法"}, {"en": "Sports Injuries", "zh": "运动损伤"}, {"en": "Neurological Disorders", "zh": "神经内科疾病"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}], "treatments": [{"slug": "floating-needle", "en": "Floating Needle", "zh": "浮针"}, {"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["Master of Acupuncture — Heilongjiang University of Chinese Medicine", "Studied under Professor Sun Shentian, National Master of TCM & Acupuncture", "President, ATCMA (BC) · President, Canada Floating Needle Medicine Association", "Acupuncture Instructor, TCM Department, Kwantlen Polytechnic University"], "educationZh": ["黑龙江中医药大学 — 针灸硕士", "师从国医大师孙申田教授", "卑诗省中医针灸师公会会长 · 加拿大浮针医学会会长", "昆特兰理工大学（KPU）中医系针灸讲师"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "su-zhang": {"seoTitle": "Su Zhang — Registered TCM Practitioner · R.TCM.P | Canadian Western TCM", "seoDescription": "Registered TCM practitioner guided by the classical prescriptions of the Shanghan Lun — pulse diagnosis, complex cases, and minimal, focused prescribing.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "Lecturer — Shanghan Lun & Huangdi Neijing", "zh": "《伤寒论》《黄帝内经》讲师"}, {"en": "Founder, TCM Youth Summer Camp", "zh": "中医青少年夏令营 创办人"}], "ledeEn": "Registered TCM practitioner guided by the classical prescriptions of the Shanghan Lun — pulse diagnosis, complex cases, and minimal, focused prescribing.", "ledeZh": "以《伤寒杂病论》经方为指导的注册中医师——脉诊、疑难杂症、用药精简而专注。", "bioEn": "Su Zhang is a registered TCM practitioner (acupuncture and herbal medicine) in British Columbia. His practice is guided by the prescription theory of the Han-dynasty Treatise on Cold Damage and Miscellaneous Diseases and by a holistic view of the body. He treats general conditions and complex cases with a strictly individualized approach — one body, one way of thinking — combining meridian principles with the Four Examinations for diagnostic precision, and follows the principle of minimal, focused prescriptions to achieve clear and rapid outcomes. He lectures on the Shanghan Lun and Huangdi Neijing and founded a TCM youth summer camp.", "bioZh": "BC省注册中医师（针灸/中药）。医学实践以汉代《伤寒杂病论》经方理论为指导，秉承天人合一的整体观。擅长处理全科疾病与各类疑难杂症，坚持一个身体一个思维、绝不分科；以经络结合望闻问切四诊，使诊断更精准，用药精简而专注，追求显著而迅速的疗效。兼任《伤寒论》《黄帝内经》讲师，中医青少年夏令营创办人。", "specialties": [{"en": "Pulse Diagnosis", "zh": "脉诊"}, {"en": "Difficult & Complex Cases", "zh": "疑难杂症"}, {"en": "Women's & Men's Health Regulation", "zh": "妇科、男科调理"}, {"en": "Respiratory Conditions", "zh": "呼吸道疾病"}], "conditions": [{"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["R.TCM.P — Registered TCM Practitioner (Acupuncture / Herbal Medicine, BC)", "Practice guided by the Shanghan Zabing Lun classical prescriptions", "Lecturer — Shanghan Lun & Huangdi Neijing · Founder, TCM Youth Summer Camp"], "educationZh": ["BC省注册中医师（针灸/中药）", "以《伤寒杂病论》经方理论为指导", "《伤寒论》《黄帝内经》讲师 · 中医青少年夏令营创办人"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "vivian-chen": {"seoTitle": "Vivian Chen (Yao Chen) — R.TCM.P, R.Ac | Canadian Western TCM", "seoDescription": "Registered TCM practitioner and acupuncturist from a TCM family — trigger-point acupuncture, FSN, cupping and moxibustion for pain, internal balance and menopause care.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "TCM Family Lineage", "zh": "中医世家"}], "ledeEn": "Registered TCM practitioner and acupuncturist from a TCM family — trigger-point acupuncture, FSN, cupping and moxibustion for pain, internal balance and menopause care.", "ledeZh": "出身中医世家的注册中医师与针灸师——激痛点针法、浮针、拔罐与艾灸，调理痛症、内科与更年期。", "bioEn": "Yao (Vivian) Chen is a Registered Acupuncturist and Registered TCM Practitioner in British Columbia from a family of TCM practitioners — her family has run a TCM clinic in the United States for nearly 30 years. In clinic she draws on a range of techniques, including myofascial trigger-point acupuncture, FSN, cupping and moxibustion, to treat pain conditions such as migraine, neck and shoulder pain and lower-back pain. She also supports internal concerns — stress-related insomnia, poor appetite, eye fatigue and low energy — and has strong clinical experience with menopause-related issues such as insomnia, hot flashes, night sweats, cold hands and feet, and mood swings.", "bioZh": "BC省注册中医师、注册针灸师，出身中医世家——家族在美国经营中医诊所近30年，得父辈传授。临床运用激痛点针法、浮针、拔罐、艾灸等多种技术治疗各类痛症，尤其对偏头痛、肩颈痛、腰痛等常见痛症疗效较佳；亦擅长调理压力导致的失眠、食欲不振、眼部疲劳、情绪低落等问题，并对更年期失眠、潮热盗汗、手脚冰凉、情绪波动等症状有丰富临床经验。", "specialties": [{"en": "Pain & Sports Injuries", "zh": "痛症及运动损伤"}, {"en": "Trigger Point & FSN", "zh": "激痛点与浮针"}, {"en": "Menopause Care", "zh": "更年期调理"}, {"en": "Puberty Support", "zh": "青春期调理"}, {"en": "Pediatric Tuina", "zh": "小儿推拿"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "headaches-migraines", "en": "Headaches & Migraines", "zh": "头痛与偏头痛"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "floating-needle", "en": "Floating Needle", "zh": "浮针"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}], "educationEn": ["R.TCM.P & R.Ac — Registered TCM Practitioner & Acupuncturist (BC)", "TCM family lineage — family clinic in the United States for nearly 30 years"], "educationZh": ["BC省注册中医师与注册针灸师", "中医世家 — 家族在美国经营中医诊所近30年"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "cathy-luo": {"seoTitle": "Cathy Luo (Zhi Lan Luo) — Registered TCM Practitioner · R.TCM.P | Canadian Western TCM", "seoDescription": "Registered TCM practitioner in acupuncture and herbal medicine — pain and injury recovery, chronic health support, TCM eye care, facial acupuncture and post-chemotherapy breast health.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}], "ledeEn": "Registered TCM practitioner in acupuncture and herbal medicine — pain and injury recovery, chronic health support, TCM eye care, facial acupuncture and post-chemotherapy breast health.", "ledeZh": "专长针灸与中药的注册中医师——疼痛与损伤康复、慢性健康调理、中医眼科、美容针灸与化疗后乳腺健康。", "bioEn": "Cathy (Zhi Lan) Luo is a Registered TCM Practitioner in British Columbia specializing in acupuncture and herbal medicine. She helps patients recover from pain, injuries and chronic health conditions — many seek her care for musculoskeletal pain, sports injuries, stress-related conditions, fatigue, depression and long-standing imbalances that affect daily comfort, mobility, sleep and quality of life. She also offers specialized support in TCM eye care, facial acupuncture and post-chemotherapy breast health. Many patients arrive through word-of-mouth referrals and appreciate her gentle technique, attentive care and practical, individualized treatment plans.", "bioZh": "BC省注册中医师，专长针灸与中药。致力于帮助患者改善疼痛、损伤及各类慢性健康问题——许多患者因肌肉骨骼疼痛、运动损伤、压力相关问题、疲劳、抑郁及长期体质失衡前来就诊。另提供中医眼部调理（缓解眼疲劳、干涩）、美容针灸（促进面部气血循环）及化疗后乳腺健康调理等特色服务。患者多经口碑介绍而来，认可其手法温和、诊疗细致、治疗务实有效。", "specialties": [{"en": "Emotional Balance", "zh": "疏肝解郁"}, {"en": "Pain & Injury Care", "zh": "痛症及运动损伤"}, {"en": "TCM Eye Care", "zh": "中医眼科"}, {"en": "Facial Acupuncture", "zh": "针灸美容"}, {"en": "Post-Chemo Breast Support", "zh": "乳腺癌放化疗后护理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}, {"slug": "aesthetic-acupuncture", "en": "Aesthetic Acupuncture", "zh": "美容针"}], "educationEn": ["R.TCM.P — Registered TCM Practitioner (Acupuncture / Herbal Medicine, BC)", "Specialized support — TCM eye care, facial acupuncture, post-chemotherapy breast health"], "educationZh": ["BC省注册中医师（针灸/中药）", "特色调理 — 中医眼科、美容针灸、化疗后乳腺健康"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "dongwei-li": {"seoTitle": "Dongwei Li — Doctor of TCM (Oshio College) · R.TCM.P | Canadian Western TCM", "seoDescription": "Doctor of TCM (Oshio College, Victoria) blending acupuncture with meditation-informed care for mind–body health, chronic pain and women's health.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "Doctor of TCM (Oshio College)", "zh": "Oshio 中医针灸学院 中医博士"}], "ledeEn": "Doctor of TCM (Oshio College, Victoria) blending acupuncture with meditation-informed care for mind–body health, chronic pain and women's health.", "ledeZh": "Oshio 中医博士，将禅修融入中医——身心调理、慢性疼痛与女性健康。", "bioEn": "Dongwei Li began practising QiGong at eighteen and has kept a daily meditation practice for more than a decade. He emigrated to Canada in 2003 and completed his Doctor of Traditional Chinese Medicine at Oshio College of Acupuncture & Herbology in Victoria, BC in 2017. He practises TCM, acupuncture, acupressure, cupping, auricular therapy, foot reflexology and yang-sheng health preservation, helping patients find relief from headaches, insomnia, dizziness, stress and anxiety, digestive problems and chronic pain, as well as women's health concerns such as menstrual pain and hormonal imbalance. A Buddhist with an open heart, he leads workshops on self-care acupressure and meditation, and his specialty is infusing meditation into TCM treatment for mental-health concerns such as anxiety, ADHD, insomnia and depression.", "bioZh": "十八岁起习练气功，坚持每日禅修十余年。2003年移居加拿大，2017年于BC省维多利亚 Oshio 中医针灸学院取得中医博士学位。临床运用中医、针灸、指压、拔罐、耳穴、足底反射与养生之道，帮助患者改善头痛、失眠、眩晕、压力焦虑、消化问题及慢性疼痛，并调理痛经、激素失衡等女性健康问题。作为一名心怀开放的佛教徒，他常开设自我保健指压与禅修工作坊，尤其擅长将禅修融入中医治疗，调理焦虑、多动、失眠、抑郁等身心问题。", "specialties": [{"en": "Mental Health Support", "zh": "精神心理调理"}, {"en": "Meditation-Informed TCM", "zh": "禅修结合中医"}, {"en": "Holistic Natural Therapies", "zh": "综合自然疗法"}, {"en": "Joint / Muscle Pain", "zh": "关节/肌肉疼痛"}, {"en": "Menstrual Issues", "zh": "痛经"}], "conditions": [{"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}, {"slug": "cupping-gua-sha", "en": "Cupping & Gua Sha", "zh": "拔罐刮痧"}], "educationEn": ["Doctor of TCM — Oshio College of Acupuncture & Herbology, Victoria BC (2017)", "QiGong practice since age 18 · 11+ years of daily meditation", "Emigrated to Canada in 2003"], "educationZh": ["Oshio 中医针灸学院（维多利亚）— 中医博士（2017）", "十八岁习练气功 · 十余年每日禅修", "2003年移居加拿大"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "sean-zhou": {"seoTitle": "Sean Zhou (Xiang Zhou) — R.TCM.P, R.Ac | Canadian Western TCM", "seoDescription": "Registered TCM practitioner and acupuncturist for acute and chronic pain, sports injuries and ICBC recovery — restoring the body's regulatory capacity, root cause and symptom together.", "creds": [{"en": "R.TCM.P", "zh": "BC省注册中医师"}, {"en": "R.Ac", "zh": "BC省注册针灸师"}], "ledeEn": "Registered TCM practitioner and acupuncturist for acute and chronic pain, sports injuries and ICBC recovery — restoring the body's regulatory capacity, root cause and symptom together.", "ledeZh": "注册中医师与针灸师——急慢性疼痛、运动损伤与车祸康复，标本兼治、恢复机体调节能力。", "bioEn": "Xiang (Sean) Zhou is a Registered Acupuncturist and Registered TCM Practitioner in British Columbia, providing acupuncture and herbal medicine. He focuses on acute and chronic pain, sports injuries and functional imbalance — commonly neck, shoulder and low-back pain, sports-related injuries and post-motor-vehicle-accident (ICBC) conditions — as well as overall concerns such as sleep, digestion and allergies. His care emphasizes restoring the body's regulatory capacity, addressing both root causes and symptoms: rebuilding movement patterns and load tolerance after sports injury, supporting coordination and stability after accidents, providing systematic regulation for sub-health states, and offering integrative TCM support alongside conventional care for chronic conditions.", "bioZh": "BC省注册中医师与注册针灸师，提供针灸与中药治疗。专注急慢性疼痛、运动损伤及功能失衡——常见颈肩腰背疼痛、运动相关损伤及车祸（ICBC）后的身体不适，同时关注睡眠、消化及过敏等整体状态。临床不仅着眼于症状改善，更强调机体调节能力的恢复、标本兼治：运动损伤后重建运动模式与负荷耐受，车祸后帮助恢复协调与稳定，为亚健康状态提供系统调理，并在常规医疗框架内为慢性病提供中医协同支持。", "specialties": [{"en": "Sports Injury Rehabilitation", "zh": "运动损伤康复"}, {"en": "Neck & Shoulder Issues", "zh": "肩颈问题"}, {"en": "Accident (ICBC) Recovery", "zh": "交通意外康复"}, {"en": "Sub-Health Regulation", "zh": "亚健康调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}, {"slug": "sleep-stress", "en": "Sleep & Stress", "zh": "睡眠与压力"}, {"slug": "digestion", "en": "Digestion", "zh": "消化调理"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "herbal-medicine", "en": "Herbal Medicine", "zh": "中药调理"}], "educationEn": ["R.TCM.P & R.Ac — Registered TCM Practitioner & Acupuncturist (BC)", "Acupuncture & herbal medicine — root-cause and symptom care"], "educationZh": ["BC省注册中医师与注册针灸师", "针灸与中药 — 标本兼治"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "winnie-yang": {"seoTitle": "Winnie Yang (Tzu-Yun Yang) — Registered Acupuncturist · R.Ac | Canadian Western TCM", "seoDescription": "KPU-trained registered acupuncturist and Pilates instructor — musculoskeletal conditions, sports injuries, and women's health.", "creds": [{"en": "R.Ac", "zh": "BC省注册针灸师"}, {"en": "KPU Acupuncture Program Graduate", "zh": "昆特兰理工大学（KPU）针灸专业毕业"}, {"en": "Pilates Instructor", "zh": "普拉提教练"}], "ledeEn": "KPU-trained registered acupuncturist and Pilates instructor — musculoskeletal conditions, sports injuries, and women's health.", "ledeZh": "毕业于 KPU 针灸专业的注册针灸师、普拉提教练——肌骨疾病、运动损伤与女性健康。", "bioEn": "Tzu-Yun (Winnie) Yang is a Registered Acupuncturist in British Columbia and a graduate of the Acupuncture Program at Kwantlen Polytechnic University. She focuses on musculoskeletal conditions, sports injuries and movement-related dysfunction — from neck, shoulder and low-back pain, sciatica and tennis elbow to running-related injuries, plantar fasciitis and postural discomfort — and provides care for women's health concerns including menstrual pain, irregular cycles and PMS. Treatment may combine gentle acupuncture with moxibustion where appropriate. With additional training as a Pilates instructor, she brings a strong understanding of posture, movement mechanics and rehabilitation principles, building individualized plans that address both symptoms and underlying contributing factors.", "bioZh": "BC省注册针灸师，毕业于昆特兰理工大学（KPU）针灸专业。专注肌肉骨骼疾病、运动损伤与运动功能障碍——从颈肩痛、下背痛与坐骨神经痛、网球肘，到跑步相关损伤、足底筋膜炎及姿势相关不适；同时关注痛经、月经不调、经前综合征等女性健康问题。治疗视情况结合针刺与艾灸，手法温和、兼顾安全与疗效。具备普拉提教练背景，对姿势控制、运动力学与康复原则有深入理解，方案个体化，既缓解症状也改善根本功能。", "specialties": [{"en": "Sports Injuries", "zh": "运动损伤"}, {"en": "Low Back Pain & Sciatica", "zh": "下背痛与坐骨神经痛"}, {"en": "Menstrual Issues & PMS", "zh": "痛经 / 月经不调 / 经前综合征"}, {"en": "Postural & Movement Care", "zh": "姿势与运动功能调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "womens-health", "en": "Women's Health", "zh": "妇科健康"}], "treatments": [{"slug": "acupuncture", "en": "Acupuncture", "zh": "针灸"}, {"slug": "moxibustion", "en": "Moxibustion", "zh": "艾灸"}], "educationEn": ["Kwantlen Polytechnic University — Acupuncture Program", "R.Ac — Registered Acupuncturist (BC)", "Pilates instructor training"], "educationZh": ["昆特兰理工大学（KPU）— 针灸专业", "BC省注册针灸师", "普拉提教练训练背景"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "dave-gifford": {"seoTitle": "Dave Gifford — Registered Massage Therapist · R.M.T. (since 2002) | Canadian Western TCM", "seoDescription": "Registered massage therapist since 2002 — sports massage, pre/post-natal care, ICBC claimants, and experience with seniors and multiple-sclerosis clients.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}, {"en": "Practising since 2002 (WCCMT)", "zh": "2002年起执业（西海岸按摩治疗学院）"}], "ledeEn": "Registered massage therapist since 2002 — sports massage, pre/post-natal care, ICBC claimants, and experience with seniors and multiple-sclerosis clients.", "ledeZh": "2002年起执业的注册按摩师——运动按摩、产前产后按摩、ICBC 客户，及老年与多发性硬化症患者护理经验。", "bioEn": "Dave Gifford graduated from the West Coast College of Massage Therapy in 2002 and has practised ever since. His expertise covers athletic and sports massage, pre- and post-natal massage, workplace stress, headaches and ergonomic issues, and ICBC claimants, with valuable experience serving specialized populations including geriatric clients and multiple-sclerosis patients — he has also collaborated with UBC athletic teams. His techniques include Active Release, myofascial release, sports petrissage, trigger-point therapy, systemic deep-tissue therapy and joint mobilizations, tailored to each client to balance effectiveness with minimal post-treatment discomfort. Born and raised in White Rock, Dave stays active through cycling, snowboarding and travel.", "bioZh": "2002年毕业于西海岸按摩治疗学院（West Coast College of Massage Therapy），从业至今。专长运动按摩、产前产后按摩、工作压力/头痛与人体工学问题及 ICBC 客户，并拥有服务老年客户、多发性硬化症患者等特殊人群的宝贵经验，曾与 UBC 运动队合作。技术涵盖主动释放、筋膜松解、运动揉捏、触发点疗法、系统性深层组织疗法与关节松动术，因人定制，在高效治疗的同时尽量减少治疗后不适。Dave 生长并定居于白石本地，闲暇喜爱骑行、单板滑雪与旅行。", "specialties": [{"en": "Athletic / Sports Massage", "zh": "运动 / 体育按摩"}, {"en": "Pre & Post-Natal Massage", "zh": "产前和产后按摩"}, {"en": "Workplace Stress & Ergonomics", "zh": "工作压力与人体工学"}, {"en": "ICBC Claimants", "zh": "ICBC 客户"}, {"en": "Special Populations Care", "zh": "特殊人群护理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}, {"slug": "icbc-recovery", "en": "ICBC Recovery", "zh": "车祸康复"}, {"slug": "headaches-migraines", "en": "Headaches & Migraines", "zh": "头痛与偏头痛"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["West Coast College of Massage Therapy — graduated 2002", "Collaboration with UBC athletic teams", "Active Release, myofascial release, trigger point, deep tissue & joint mobilizations"], "educationZh": ["西海岸按摩治疗学院 — 2002年毕业", "曾与 UBC 运动队合作", "主动释放、筋膜松解、触发点、深层组织与关节松动术"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "qin-pei": {"seoTitle": "Edward Qin (Pei Qin) — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Registered massage therapist since 2009, trained at the Canadian College of Massage and Hydrotherapy, with additional osteopathy manipulative training.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}, {"en": "RMT since 2009 (CCMH Toronto)", "zh": "2009年起执业（多伦多CCMH）"}, {"en": "Osteopathy Manipulative Training", "zh": "肌骨整骨手法进修"}], "ledeEn": "Registered massage therapist since 2009, trained at the Canadian College of Massage and Hydrotherapy, with additional osteopathy manipulative training.", "ledeZh": "2009年毕业于加拿大推拿及水疗学院的注册按摩师，进修肌骨整骨手法。", "bioEn": "Edward (Pei) Qin obtained his registered massage therapist certification in Toronto in 2009, graduating from the Canadian College of Massage and Hydrotherapy, and has built extensive clinical experience since. To provide better care he also completed a program in osteopathy manipulative practice. He joined Spa Utopia in 2015 and practised as an RMT at a Surrey clinic from 2019; he now practises at CWTCM White Rock, dedicated to treating symptoms arising from muscular conditions as effectively as possible.", "bioZh": "2009年毕业于安省加拿大推拿及水疗学院并取得注册按摩师资格，自此积累了丰富的专业经验。为给患者提供更好的服务，还进修了肌骨整骨手法课程。2015年起在温哥华 Spa Utopia 担任注册按摩师，2019年起在素里一家诊所任职，现就职于加西中医白石诊所，致力于更有效地治疗由肌肉引起的各种症状。", "specialties": [{"en": "Sports Massage", "zh": "运动 / 体育按摩"}, {"en": "Deep Tissue Release", "zh": "肌筋膜放松"}, {"en": "Chinese Tuina", "zh": "中式推拿"}, {"en": "Osteopathy-Informed Care", "zh": "肌骨手法调理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Canadian College of Massage and Hydrotherapy, Toronto — RMT (2009)", "Osteopathy manipulative practice program", "Spa Utopia (2015) · Surrey clinic (2019) · CWTCM White Rock"], "educationZh": ["加拿大推拿及水疗学院（多伦多）— 注册按摩师（2009）", "肌骨整骨手法课程", "Spa Utopia（2015）· 素里诊所（2019）· 现就职加西中医白石"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "william-zhou": {"seoTitle": "William Zhou (Jianwei Zhou) — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Registered massage therapist helping people return to the activities they love — sports recovery, pain relief and stress management.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}], "ledeEn": "Registered massage therapist helping people return to the activities they love — sports recovery, pain relief and stress management.", "ledeZh": "帮助人们重返所爱活动的注册按摩师——运动恢复、疼痛缓解与压力管理。", "bioEn": "William (Jianwei) Zhou is a registered massage therapist dedicated to helping people live happy, active lifestyles — assisting every patient in returning to the activities they love while improving overall health and wellness. A sports enthusiast who embraces BC's outdoor lifestyle, he understands movement and recovery first-hand, and provides personalised, attentive care to relieve pain, reduce stress and enhance wellbeing through professional massage therapy.", "bioZh": "充满热忱的注册按摩治疗师，致力于帮助人们拥有健康、积极、快乐的生活方式，协助每一位客人重返所热爱的活动。作为热爱运动、享受BC省户外生活的人，他深知活动与恢复的重要性，以个性化、细致的护理，通过专业按摩帮助缓解疼痛、减轻压力、提升整体身心健康。", "specialties": [{"en": "Sports Massage", "zh": "运动 / 体育按摩"}, {"en": "Deep Tissue Release", "zh": "肌筋膜放松"}, {"en": "Rehabilitation Massage Care", "zh": "康复性按摩护理"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered Massage Therapist (BC)", "TCM Tuina combined with modern massage techniques", "Sports recovery, chronic pain & stress management"], "educationZh": ["BC省注册按摩师", "中医推拿结合现代按摩技术", "运动恢复、慢性疼痛与压力管理"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      "vivi-zhao": {"seoTitle": "Vivi Zhao (Weiwei Zhao) — Registered Massage Therapist · R.M.T. | Canadian Western TCM", "seoDescription": "Registered massage therapist offering client-centred, personalised care for muscle tension and chronic pain.", "creds": [{"en": "R.M.T.", "zh": "BC省注册按摩师"}], "ledeEn": "Registered massage therapist offering client-centred, personalised care for muscle tension and chronic pain.", "ledeZh": "以客户为中心、定制个性化方案的注册按摩师，缓解肌肉紧张与慢性疼痛。", "bioEn": "Weiwei (Vivi) Zhao is a registered massage therapist whose goal is to empower clients to prioritise their body's health through targeted massage therapy. Proficient in Swedish massage, myofascial release, trigger-point therapy and joint mobilization for muscle tension and chronic pain, she takes a client-centred approach — tailoring each session to individual needs for optimal comfort and tangible results, in a calm, welcoming environment that promotes physical healing, stress relief and holistic wellness.", "bioZh": "注册按摩治疗师，目标是通过针对性的按摩疗法帮助客户重视并维护身体健康。熟练掌握瑞典式按摩、肌筋膜放松、触发点疗法及关节松动术，有效缓解肌肉紧张与慢性疼痛；坚持以客户为中心，按个人需求定制每次理疗方案，在宁静友好的环境中助力身体康复、舒缓压力、实现身心整体健康。", "specialties": [{"en": "Swedish Massage", "zh": "瑞典式按摩"}, {"en": "Trigger Point Therapy", "zh": "触发点疗法"}, {"en": "Deep Tissue Release", "zh": "肌筋膜放松"}, {"en": "Joint Mobilization", "zh": "关节松动术"}], "conditions": [{"slug": "pain-injury", "en": "Pain & Injury", "zh": "疼痛与损伤"}], "treatments": [{"slug": "tui-na", "en": "Tui Na", "zh": "推拿"}], "educationEn": ["Registered Massage Therapist (BC)", "Swedish massage, myofascial release, trigger-point therapy & joint mobilization"], "educationZh": ["BC省注册按摩师", "瑞典式按摩、肌筋膜放松、触发点疗法与关节松动术"], "moreHref": "https://whiterock.cwtcm.ca/Our-team", "moreLabel": "Also on our White Rock clinic site →"},
      'taylor-wang': {
        seoTitle: 'Taylor Wang — Founder · Dr. TCM | Canadian Western TCM',
        seoDescription: 'Taylor Wang, founder of Canadian Western TCM — Dr. TCM and registered acupuncturist trained at Jiangxi University of Traditional Chinese Medicine (orthopedics), blending heritage Chinese orthopedics with attentive modern care across Richmond, Burnaby, Vancouver and White Rock.',
        // Full hero credentials (4 rows) — fuller than the archive card.
        creds: [
          { en: 'Dr. TCM', zh: 'BC省注册高级中医师' },
          { en: 'R.Ac', zh: 'BC省注册针灸师' },
          { en: 'R.Esthetician', zh: 'BC省注册美容师' },
          { en: 'Founder', zh: '加西中医 创始人' },
        ],
        ledeEn: 'Founder of Canadian Western TCM, blending heritage Chinese orthopedics with attentive modern care.',
        ledeZh: '加西中医创始人，融合中医骨伤传承与现代细致照护。',
        bioZh: '毕业于江西中医药大学中医学（骨伤方向），博士在读。曾于江西省中医院针灸科临床研修，并在江西中医药大学任教七年。擅长针灸、热敏灸、推拿、理筋正骨及中草药治疗中医骨伤、美容及妇科疾病，主持多项国家及省级课题，发表十余篇论文。',
        bioEn: 'Dr. Wang graduated from Jiangxi University of Traditional Chinese Medicine (specializing in orthopedics) and is currently pursuing a Ph.D. She taught at Jiangxi University for seven years. She specialises in acupuncture, thermal moxibustion, Tuina, bone-setting and Chinese herbal medicine, treating orthopedic, cosmetic and gynecological conditions. She has led multiple national and provincial projects and published over ten papers.',
        specialties: [
          { en: 'Acupuncture', zh: '针灸' },
          { en: 'Thermal Moxibustion', zh: '热敏灸' },
          { en: 'Tuina', zh: '推拿' },
          { en: 'Bone-setting', zh: '理筋正骨' },
          { en: 'Chinese Herbal Medicine', zh: '中草药' },
          { en: 'Aesthetic Acupuncture', zh: '美容针' },
          { en: 'Orthopedic', zh: '骨伤' },
          { en: 'Gynecological', zh: '妇科' },
          { en: 'Cosmetic', zh: '美容' },
        ],
        conditions: [
          { slug: 'pain-injury', en: 'Pain & Injury', zh: '疼痛与损伤' },
          { slug: 'womens-health', en: "Women's Health", zh: '妇科健康' },
          { slug: 'skin-acne', en: 'Skin & Acne', zh: '皮肤与痤疮' },
          { slug: 'sleep-stress', en: 'Sleep & Stress', zh: '睡眠与压力' },
        ],
        treatments: [
          { slug: 'acupuncture', en: 'Acupuncture', zh: '针灸' },
          { slug: 'moxibustion', en: 'Moxibustion', zh: '艾灸' },
          { slug: 'tui-na', en: 'Tui Na', zh: '推拿' },
          { slug: 'manual-bone-setting', en: 'Manual Bone Setting', zh: '正骨' },
          { slug: 'herbal-medicine', en: 'Herbal Medicine', zh: '中药调理' },
          { slug: 'aesthetic-acupuncture', en: 'Aesthetic Acupuncture', zh: '美容针' },
        ],
        educationEn: [
          'Jiangxi University of TCM — Chinese Medicine (Orthopedics specialization); Ph.D. in progress',
          'Clinical rotation: Jiangxi Provincial TCM Hospital, Acupuncture department',
          'Teaching: 7 years at Jiangxi University of TCM',
          'Research: multiple national & provincial projects; 10+ published papers',
        ],
        educationZh: [
          '江西中医药大学 — 中医学（骨伤方向）；博士在读',
          '临床研修：江西省中医院 针灸科',
          '任教：江西中医药大学 七年',
          '科研：主持多项国家及省级课题；发表论文十余篇',
        ],
        languages: [
          { en: 'Mandarin', zh: '普通话' },
          { en: 'English', zh: '英语' },
        ],
      },
      'xianyi-hu': {
        "seoTitle": "Xianyi Hu — Senior · Dr. TCM | Canadian Western TCM",
        "seoDescription": "Xianyi Hu, senior physician at Canadian Western TCM — over 50 years of clinical Traditional Chinese Medicine, Master’s from Chengdu University of TCM, with a focus on immune system disorders, internal medicine and women’s health in Richmond.",
        "ledeEn": "Senior physician with over 50 years in clinical TCM, recognised as one of China’s Famous Doctors.",
        "ledeZh": "五十余年中医临床的资深医师，曾荣获『中国名医』称号。",
        "bioZh": "毕业于成都中医药大学，获得中医学硕士学位，拥有五十多年的临床经验，并荣获『中国名医』称号。她长期专注于中医临床实践，参与多项国家级重点课题研究及教材编写。胡医生擅长运用中医药、传统针灸及推拿治疗多种疾病，尤其在免疫系统疾病的诊疗方面积累了丰富的经验。",
        "bioEn": "Dr. Hu holds a Master’s degree in Traditional Chinese Medicine from Chengdu University of Traditional Chinese Medicine and has more than 50 years of clinical experience. Recognised with the prestigious title of “China’s Famous Doctor,” she has contributed to several national research projects and textbooks. Dr. Hu specializes in treating various conditions using Chinese Herbal Medicine, Acupuncture, and Tuina, with a particular focus on immune system disorders.",
        "specialties": [
          {
            "en": "Chinese Herbal Medicine",
            "zh": "中药"
          },
          {
            "en": "Acupuncture",
            "zh": "传统针灸"
          },
          {
            "en": "Tuina",
            "zh": "推拿"
          },
          {
            "en": "Immune System Care",
            "zh": "免疫系统调理"
          },
          {
            "en": "Internal Medicine",
            "zh": "内科杂病"
          }
        ],
        "conditions": [
          {
            "slug": "pain-injury",
            "en": "Pain & Injury",
            "zh": "疼痛与损伤"
          },
          {
            "slug": "sleep-stress",
            "en": "Sleep & Stress",
            "zh": "睡眠与压力"
          },
          {
            "slug": "digestion",
            "en": "Digestion",
            "zh": "消化调理"
          },
          {
            "slug": "womens-health",
            "en": "Women's Health",
            "zh": "妇科健康"
          }
        ],
        "treatments": [
          {
            "slug": "acupuncture",
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "slug": "tui-na",
            "en": "Tui Na",
            "zh": "推拿"
          },
          {
            "slug": "herbal-medicine",
            "en": "Herbal Medicine",
            "zh": "中药调理"
          },
          {
            "slug": "moxibustion",
            "en": "Moxibustion",
            "zh": "艾灸"
          }
        ],
        "educationEn": [
          "Master’s degree, Chengdu University of TCM",
          "50+ years of clinical TCM practice",
          "National research projects & textbook contributions",
          "“China’s Famous Doctor” honour"
        ],
        "educationZh": [
          "成都中医药大学（中医学硕士）",
          "五十余年中医临床",
          "参与多项国家级重点课题及教材编写",
          "荣获『中国名医』称号"
        ],
        "languages": [
          {
            "en": "Mandarin",
            "zh": "普通话"
          }
        ]
      },
      'jack-bai': {
        "seoTitle": "Jake Bai — Senior TCM Practitioner | Canadian Western TCM",
        "seoDescription": "Jake Bai, senior TCM practitioner at Canadian Western TCM — 36 years of clinical experience, Master’s from Beijing University of Chinese Medicine (Acupuncture & Tuina), formerly at a Beijing tertiary hospital, practising in Richmond.",
        "ledeEn": "Senior TCM practitioner with 36 years of experience, formerly at a Beijing top-tier tertiary hospital.",
        "ledeZh": "资深中医专家，36 年临床经验，曾任职于北京三甲医院。",
        "bioZh": "毕业于北京中医药大学针灸推拿系，获临床医学硕士学位。曾任职于北京三甲医院，现为资深退休中医专家，拥有36年丰富临床经验。擅长运用传统中医理论结合针灸、推拿等综合疗法，治疗各科常见及疑难疾病，尤其在术后综合征、各类痛症、老年病、消化系统疾病、斑秃、过敏性鼻炎及皮疹等方面经验丰富。同时精通小儿捏脊疗法及耳穴压豆调理，注重整体辨证与个体化治疗，帮助患者改善体质、促进康复及健康调理。",
        "bioEn": "Graduated from the Acupuncture and Tuina Department of Beijing University of Chinese Medicine and obtained a Master’s degree in Clinical Medicine from the same institution. Formerly practised at a top-tier tertiary hospital in Beijing, with over 36 years of extensive clinical experience in Traditional Chinese Medicine. Specializes in integrating traditional Chinese medicine theory with acupuncture, tuina, and other holistic therapies to treat a wide range of acute and chronic conditions. Areas of expertise include post-surgical recovery, pain management, geriatric conditions, digestive disorders, alopecia areata, allergic rhinitis, and skin conditions. Also experienced in pediatric tuina therapy and auricular acupressure, with a strong focus on individualized diagnosis, constitutional regulation, rehabilitation, and long-term wellness care.",
        "specialties": [
          {
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "en": "Tuina",
            "zh": "推拿"
          },
          {
            "en": "Pediatric Tuina",
            "zh": "小儿捏脊"
          },
          {
            "en": "Auricular Acupressure",
            "zh": "耳穴压豆"
          },
          {
            "en": "Post-Surgical Care",
            "zh": "术后调理"
          },
          {
            "en": "Geriatric Care",
            "zh": "老年调理"
          }
        ],
        "conditions": [
          {
            "slug": "pain-injury",
            "en": "Pain & Injury",
            "zh": "疼痛与损伤"
          },
          {
            "slug": "digestion",
            "en": "Digestion",
            "zh": "消化调理"
          },
          {
            "slug": "headaches-migraines",
            "en": "Headaches & Migraines",
            "zh": "头痛与偏头痛"
          },
          {
            "slug": "sleep-stress",
            "en": "Sleep & Stress",
            "zh": "睡眠与压力"
          }
        ],
        "treatments": [
          {
            "slug": "acupuncture",
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "slug": "tui-na",
            "en": "Tui Na",
            "zh": "推拿"
          }
        ],
        "educationEn": [
          "Beijing University of Chinese Medicine — Acupuncture & Tuina Dept., Master’s in Clinical Medicine",
          "Formerly practised at a top-tier tertiary hospital in Beijing",
          "36+ years of clinical experience"
        ],
        "educationZh": [
          "北京中医药大学针灸推拿系（临床医学硕士）",
          "曾任职于北京三甲医院",
          "36 年丰富临床经验"
        ],
        "languages": [
          {
            "en": "Mandarin",
            "zh": "普通话"
          }
        ]
      },
      'kalen-shen': {
        "seoTitle": "Kalen Shen — Senior Acupuncturist & Aesthetician | Canadian Western TCM",
        "seoDescription": "Kalen Shen at Canadian Western TCM — Korean-style aesthetic acupuncture for facial lifting and skin rejuvenation, blended with acupuncture, Tuina and heat-sensitive moxibustion, practising in Richmond and Vancouver.",
        "ledeEn": "Specialist in Korean-style aesthetic acupuncture, blending facial rejuvenation with acupuncture, Tuina and heat-sensitive moxibustion.",
        "ledeZh": "专精韩式美容针的注册针灸师，融合面部焕活与针灸、推拿、热敏灸。",
        "bioZh": "毕业于辽宁中医药大学。专精韩式美容针灸，在面部提升、紧致除皱、祛斑及肤质修护方面疗效显著；并擅长运用针灸、推拿及热敏灸调理颈肩腰痛、神经系统疾病及慢性病。",
        "bioEn": "Kalen specializes in Korean-style aesthetic acupuncture — facial lifting, wrinkle reduction, pigmentation improvement and skin rejuvenation — alongside acupuncture, Tuina and heat-sensitive moxibustion for pain management, neurological disorders and chronic conditions.",
        "specialties": [
          {
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "en": "Tuina",
            "zh": "推拿"
          },
          {
            "en": "Heat-sensitive Moxibustion",
            "zh": "热敏灸"
          },
          {
            "en": "Korean Aesthetic Acupuncture",
            "zh": "韩式美容针"
          },
          {
            "en": "Facial Lifting",
            "zh": "面部提升"
          }
        ],
        "conditions": [
          {
            "slug": "pain-injury",
            "en": "Pain & Injury",
            "zh": "疼痛与损伤"
          },
          {
            "slug": "sleep-stress",
            "en": "Sleep & Stress",
            "zh": "睡眠与压力"
          },
          {
            "slug": "skin-acne",
            "en": "Skin & Acne",
            "zh": "皮肤与痤疮"
          }
        ],
        "treatments": [
          {
            "slug": "acupuncture",
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "slug": "tui-na",
            "en": "Tui Na",
            "zh": "推拿"
          },
          {
            "slug": "moxibustion",
            "en": "Moxibustion",
            "zh": "艾灸"
          },
          {
            "slug": "aesthetic-acupuncture",
            "en": "Aesthetic Acupuncture",
            "zh": "美容针"
          }
        ],
        "educationEn": [
          "Liaoning University of TCM",
          "Korean Certified Aesthetician (Skin Care Specialist)",
          "Clinical TCM — acupuncture, Tuina & heat-sensitive moxibustion"
        ],
        "educationZh": [
          "辽宁中医药大学",
          "韩国认证美容师（皮肤管理师）",
          "韩式美容针灸 · 面部焕活；针灸、推拿与热敏灸临床"
        ],
        "languages": [
          {
            "en": "Mandarin",
            "zh": "普通话"
          },
          {
            "en": "Korean",
            "zh": "韩语"
          }
        ]
      },
      'wingho-chan': {
        "seoTitle": "Wingho Chan — R.TCM.P · Hong Kong-trained | Canadian Western TCM",
        "seoDescription": "Wingho Chan at Canadian Western TCM — Hong Kong-trained R.TCM.P integrating acupuncture, herbal medicine and gentle bone-setting for internal medicine, digestive, gynecological and skin conditions, practising in Burnaby.",
        "ledeEn": "Hong Kong-trained Master of TCM integrating acupuncture, herbs and gentle bone-setting for internal medicine, gynecology and skin conditions.",
        "ledeZh": "香港大学中医硕士，针药并用，专长内科、妇科与皮肤外科。",
        "bioZh": "毕业于香港大学，获中医学硕士学位，擅长针药并用，结合中医药理论与现代医学处理内科、胃肠、慢性病和妇科问题。对中医皮肤外科有深入研究，擅用中药治疗皮肤问题。此外，陈医师掌握传统中医正骨及轻柔推拿，根据患者状况提供全方位针对性治疗。",
        "bioEn": "Wingho Chan graduated from The University of Hong Kong with a Master’s degree in Traditional Chinese Medicine. He specializes in integrating acupuncture and herbal medicine with TCM principles and modern medical knowledge to treat internal medicine conditions, gastrointestinal issues, chronic illnesses, and gynecological disorders. Wingho also has expertise in TCM dermatology, utilizing herbal therapies for skin conditions. Additionally, he is proficient in traditional bone-setting and gentle Tuina, providing personalised, comprehensive care tailored to each patient’s condition and lifestyle.",
        "specialties": [
          {
            "en": "Acupuncture + Herbal",
            "zh": "针药并用"
          },
          {
            "en": "Internal Medicine",
            "zh": "内科"
          },
          {
            "en": "Digestive",
            "zh": "胃肠"
          },
          {
            "en": "Chronic Conditions",
            "zh": "慢性病"
          },
          {
            "en": "Gynecology",
            "zh": "妇科"
          },
          {
            "en": "TCM Dermatology",
            "zh": "皮肤外科"
          },
          {
            "en": "Bone-setting",
            "zh": "正骨"
          },
          {
            "en": "Tuina",
            "zh": "推拿"
          }
        ],
        "conditions": [
          {
            "slug": "digestion",
            "en": "Digestion",
            "zh": "消化调理"
          },
          {
            "slug": "womens-health",
            "en": "Women's Health",
            "zh": "妇科健康"
          },
          {
            "slug": "skin-acne",
            "en": "Skin & Acne",
            "zh": "皮肤与痤疮"
          },
          {
            "slug": "pain-injury",
            "en": "Pain & Injury",
            "zh": "疼痛与损伤"
          }
        ],
        "treatments": [
          {
            "slug": "acupuncture",
            "en": "Acupuncture",
            "zh": "针灸"
          },
          {
            "slug": "herbal-medicine",
            "en": "Herbal Medicine",
            "zh": "中药调理"
          },
          {
            "slug": "tui-na",
            "en": "Tui Na",
            "zh": "推拿"
          },
          {
            "slug": "manual-bone-setting",
            "en": "Manual Bone Setting",
            "zh": "正骨"
          }
        ],
        "educationEn": [
          "The University of Hong Kong — Master’s in Traditional Chinese Medicine"
        ],
        "educationZh": [
          "香港大学中医学硕士"
        ],
        "languages": [
          {
            "en": "Mandarin",
            "zh": "普通话"
          },
          {
            "en": "Cantonese",
            "zh": "粤语"
          },
          {
            "en": "English",
            "zh": "英语"
          }
        ]
      },
    },

    list: [
      // ---- FOUNDER ----
      { slug: 'taylor-wang', name: 'Taylor Wang', clinics: ['Richmond', 'Burnaby', 'Vancouver', 'White Rock'], roles: ['TCM Doctor'], photo: 'rmd-bby-van-taylor-wang.jpg', badge: 'Founder',
        creds: [{ en: 'Dr. TCM', zh: 'BC省注册高级中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'R.Esthetician', zh: 'BC省注册美容师' }, { en: 'Founder', zh: '加西中医 创始人' }] },
      // ---- WHITE ROCK LEAD (Floating Needle) — full team lives on the White Rock subsite ----
      { slug: 'di-wu', name: 'Di Wu', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-di-wu.jpg', badge: 'White Rock Founder',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'White Rock Founder', zh: '白石诊所创办人' }, { en: 'President, ATCMA & FSNAC', zh: '卑诗省中医针灸师公会 · 浮针医学会 会长' }] },
      // ---- WHITE ROCK team (from 加西白石在职员工PPT简介 2026-07) — detail pages on the White Rock subsite ----
      { slug: 'su-zhang', name: 'Su Zhang', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-su-zhang.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'Lecturer — Shanghan Lun & Huangdi Neijing', zh: '《伤寒论》《黄帝内经》讲师' }] },
      { slug: 'vivian-chen', name: 'Vivian Chen', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-vivian-chen.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'TCM Family Lineage', zh: '中医世家' }] },
      { slug: 'cathy-luo', name: 'Cathy Luo', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-cathy-luo.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }] },
      { slug: 'dongwei-li', name: 'Dongwei Li', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-dongwei-li.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }] },
      { slug: 'sean-zhou', name: 'Sean Zhou', clinics: ['White Rock'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'wr-sean-zhou.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'winnie-yang', name: 'Winnie Yang', clinics: ['White Rock'], roles: ['Acupuncturist'], photo: 'wr-winnie-yang.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Pilates Instructor', zh: '普拉提教练' }] },
      { slug: 'dave-gifford', name: 'Dave Gifford', clinics: ['White Rock'], roles: ['RMT'], photo: 'wr-dave-gifford.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }, { en: '20+ Years of Massage Therapy', zh: '20+ 年按摩治疗经验' }] },
      { slug: 'qin-pei', name: 'Edward Qin', clinics: ['White Rock'], roles: ['RMT'], photo: 'wr-qin-pei.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }, { en: 'Chinese Tuina & Western Massage', zh: '中式推拿与西式按摩' }] },
      { slug: 'william-zhou', name: 'William Zhou', clinics: ['White Rock'], roles: ['RMT'], photo: 'wr-william-zhou.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }] },
      { slug: 'vivi-zhao', name: 'Vivi Zhao', clinics: ['White Rock'], roles: ['RMT'], photo: 'wr-vivi-zhao.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }] },
      // ---- SENIOR ----
      { slug: 'xianyi-hu', name: 'Xianyi Hu', clinics: ['Richmond'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'rmd-xianyi-hu.jpg', badge: '50+ years',
        creds: [{ en: 'Dr. TCM', zh: 'BC省注册高级中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'jack-bai', name: 'Jake Bai', clinics: ['Richmond'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'rmd-jack-bai.jpg', badge: '36 years',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'kalen-shen', name: 'Kalen Shen', clinics: ['Richmond', 'Burnaby', 'Vancouver'], roles: ['Acupuncturist', 'Aesthetician'], photo: 'rmd-van-kalen-shen.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Korean Certified Aesthetician', zh: '韩国认证美容师' }] },
      // ---- RICHMOND-based ----
      { slug: 'jiabin-nan', name: 'Jiabin Nan', clinics: ['Richmond'], roles: ['Acupuncturist'], photo: 'rmd-jiabin-nan.jpg', badge: '30+ years',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'angel-yu', name: 'Angel Yu', clinics: ['Richmond'], roles: ['Rehabilitation Therapist'], photo: 'rmd-angel-yu.jpg',
        creds: [{ en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'david-leung', name: 'David Leung', clinics: ['Richmond'], roles: ['Acupuncturist'], photo: 'rmd-david-leung.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      // Sunny Wei — clinic tentative (Richmond), pending client confirmation
      { slug: 'sunny-wei', name: 'Sunny Wei', clinics: ['Richmond'], roles: ['Rehabilitation Therapist'], photo: 'sunny-wei.jpg',
        creds: [{ en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      // ---- RMD + BBY shared ----
      { slug: 'mengli-song', name: 'Mingli Song', clinics: ['Richmond', 'Burnaby'], roles: ['Acupuncturist'], photo: 'rmd-bby-mengli-song.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'pearson-zhang', name: 'Pearson Zhang', clinics: ['Richmond', 'Burnaby'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'rmd-bby-pearson-zhang.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'hong-guan', name: 'Hong Guan', clinics: ['Richmond', 'Burnaby'], roles: ['Rehabilitation Therapist'], photo: 'rmd-bby-hong-guan.jpg',
        creds: [{ en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'bin-li', name: 'Bin Li', clinics: ['Richmond', 'Burnaby'], roles: ['Rehabilitation Therapist', 'Acupuncturist'], photo: 'rmd-bby-bin-li.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'rosa-shu', name: 'Rosa Shu', clinics: ['Richmond', 'Burnaby'], roles: ['Acupuncturist'], photo: 'rmd-bby-rosa-shu.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }] },
      // ---- RMD + BBY + VAN ----
      { slug: 'helen-he', name: 'Helen He', clinics: ['Richmond', 'Burnaby', 'Vancouver'], roles: ['Rehabilitation Therapist'], photo: 'rmd-bby-van-helen-he.jpg',
        creds: [{ en: 'Associate Chief Obstetrician (China)', zh: '中国产科副主任医师' }, { en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      // ---- BURNABY-based ----
      { slug: 'wingho-chan', name: 'Wingho Chan', clinics: ['Burnaby'], roles: ['TCM Doctor'], photo: 'bby-wing-ho-chan.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }] },
      { slug: 'feng-kang', name: 'Feng Kang', clinics: ['Burnaby'], roles: ['Rehabilitation Therapist'], photo: 'bby-feng-kang.jpg',
        bio: { en: 'Rehabilitation Therapist with over 30 years of clinical experience in chronic pain, neurological rehabilitation, and sports injury recovery. Treatment outcomes vary by individual.', zh: '康复治疗师，30+ 年慢性疼痛、神经系统康复及运动损伤恢复的临床经验。每位患者的疗效因人而异。' },
        creds: [{ en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'li-gao', name: 'Lily Gao', clinics: ['Burnaby'], roles: ['Acupuncturist'], photo: 'bby-li-gao.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'nikka-wu', name: 'Nikka Wu', clinics: ['Burnaby'], roles: ['Rehabilitation Therapist'], photo: 'bby-nikka-wu.jpg',
        creds: [{ en: 'Rehabilitation Therapist', zh: '康复理疗师' }] },
      { slug: 'monica-liu', name: 'Monica Liu', clinics: ['Burnaby'], roles: ['Rehabilitation Therapist'], photo: 'bby-monica-liu.jpg',
        creds: [{ en: 'Registered Acupressure Therapist', zh: 'BC省注册指压师' }, { en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'jasmine-zhang', name: 'Jasmine Zhang', clinics: ['Burnaby'], roles: ['Acupuncturist'], photo: 'bby-jasmine-zhang.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Moxibustion Therapist', zh: '艾灸师' }] },
      // ---- VANCOUVER-based ----
      { slug: 'shirley-zhu', name: 'Shirley Zhu', clinics: ['Vancouver'], roles: ['TCM Doctor'], photo: 'van-shirley-zhu.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Registered Aromatherapist', zh: '北美注册芳疗师' }] },
      { slug: 'jim-yi', name: 'Jim Yi', clinics: ['Vancouver'], roles: ['TCM Doctor', 'Acupuncturist'], photo: 'van-jim-yi.jpg', badge: '30+ years',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'R.Ac', zh: 'BC省注册针灸师' }] },
      { slug: 'lynn-liu', name: 'Lynn Liu', clinics: ['Vancouver', 'Richmond'], roles: ['TCM Doctor'], photo: 'van-rmd-lynn-liu.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }] },
      { slug: 'simon-zhang', name: 'Simon Zhang', clinics: ['Vancouver', 'Richmond'], roles: ['Acupuncturist', 'Rehabilitation Therapist'], photo: 'van-rmd-simon-zhang.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      { slug: 'gemmie-lam', name: 'Gemmie Lam', clinics: ['Vancouver'], roles: ['Acupuncturist'], photo: 'van-gemmie-lam.jpg',
        creds: [{ en: 'R.TCM.P', zh: 'BC省注册中医师' }, { en: 'Registered CMP (Hong Kong)', zh: '香港注册中医师' }] },
      { slug: 'william-wang', name: 'William Wang', clinics: ['Vancouver'], roles: ['Acupuncturist', 'Rehabilitation Therapist'], photo: 'van-william-wang.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Senior Rehabilitation Therapist', zh: '高级康复理疗师' }] },
      { slug: 'shawn-feng', name: 'Shawn Feng', clinics: ['Vancouver'], roles: ['Acupuncturist', 'Rehabilitation Therapist'], photo: 'van-shawn-feng.jpg',
        creds: [{ en: 'R.Ac', zh: 'BC省注册针灸师' }, { en: 'Rehabilitation Therapist', zh: '康复治疗师' }] },
      // ---- RMT subsection ----
      { slug: 'emmett-zhang', name: 'Emmett Zhang', clinics: ['Richmond'], roles: ['RMT'], photo: 'rmd-emmett-zhang.jpg', rmtDivider: true,
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }, { en: 'ACE-CPT', zh: '持牌私人教练' }] },
      { slug: 'lihong-zhou', name: 'Lihong Zhou', clinics: ['Richmond'], roles: ['RMT'], photo: 'rmd-lihong-zhou.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }] },
      { slug: 'tony-liang', name: 'Tony Liang', clinics: ['Burnaby'], roles: ['RMT'], photo: 'bby-tony-liang.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }, { en: 'RMT Program Instructor', zh: 'BC省RMT课程授课老师' }] },
      { slug: 'vickie-xu', name: 'Vickie Xu', clinics: ['Richmond'], roles: ['RMT'], photo: 'rmd-vickie-xu.jpg',
        creds: [{ en: 'R.M.T.', zh: 'BC省注册按摩师' }] }
    ],
  },

  // ============================================================
  // ABOUT — brand story page (About.html)
  // ============================================================
  about: {
    en: {
      seoTitle: 'About — Heritage TCM Across Greater Vancouver | Canadian Western TCM',
      seoDescription: "A comprehensive Traditional Chinese Medicine practice across four clinics in Greater Vancouver — Chinese in lineage, Canadian in standards. Practitioners trained in Beijing, Guangzhou, Liaoning, Chengdu and Hong Kong; registered in British Columbia.",
      hero: {
        eyebrow: 'About',
        h1: 'Heritage medicine, attentively practised.',
        lede: 'A comprehensive Traditional Chinese Medicine practice across four clinics in Greater Vancouver — Chinese in lineage, Canadian in standards.',
        primary: 'Book a Visit',
        primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      },
      heritage: {
        eyebrow: 'Our Heritage',
        body: "Traditional Chinese medicine has been refined for over two thousand years. Our practitioners trained in Beijing, Guangzhou, Liaoning, Chengdu and Hong Kong, then chose to build their lives in British Columbia. The result is care that is unmistakably Chinese in lineage and unmistakably Canadian in standards — single-use needles, registered practitioners, ICBC-recognised, and held to the same hygiene and consent expectations you would find at any clinic on this side of the Pacific. We see ourselves as quiet stewards of this tradition: we do not shout about it; we just practise it well, every day, in four neighbourhoods.",
        placeholderCaption: 'Heritage macro — image coming soon',
      },
      practice: {
        eyebrow: 'How We Practise',
        h2: 'Three principles that shape every treatment.',
        principles: [
          {
            kind: 'cultivation',
            h3: 'Treatment paired with cultivation',
            zh: '',
            body: 'Relief is the entry point, not the destination. Every plan also addresses sleep, digestion and constitution so improvement holds beyond the clinic.',
          },
          {
            kind: 'standards',
            h3: 'Heritage methods, modern standards',
            zh: '',
            body: 'Five-element diagnosis, single-use needles, BC-regulated practitioners and clean linens. The wisdom is ancient; the standards are current.',
          },
          {
            kind: 'individual',
            h3: 'One body, one plan',
            zh: '',
            body: 'No protocol is run twice the same way. Your pulse, tongue, posture and history shape the session you receive that day.',
          },
        ],
      },
      numbers: {
        eyebrow: 'By the Numbers',
        items: [
          '30+ BC-Registered TCM Practitioners',
          '4 clinics across Greater Vancouver',
          'Since 2019',
          'ICBC & insurance reimbursement',
          'Bilingual care — English & Chinese',
        ],
      },
      team: {
        eyebrow: 'The Team',
        line: 'A team built over decades.',
        body: "Our 30+ practitioners include a senior physician with 50 years in practice, a Floating Needle specialist who founded Canada's first demonstration clinic, and graduates of Beijing, Guangzhou, Liaoning and Chengdu schools of Traditional Chinese Medicine — all registered in British Columbia.",
        link: 'Meet all practitioners →',
        href: 'Practitioners.html',
      },
      clinics: {
        eyebrow: 'Our Clinics',
        h2: 'Four clinics, held to the highest standard of care.',
        cards: [
          { city: 'Richmond',   line: 'Our flagship, on Cooney Road.',       href: 'Locations-Richmond.html' },
          { city: 'Burnaby',    line: 'On the Kingsway corridor.',           href: 'Locations-Burnaby.html' },
          { city: 'Vancouver',  line: 'Kitsilano, on West Broadway.',        href: 'Locations-Vancouver.html' },
          { city: 'White Rock', line: 'By the pier on Johnston Road.',       href: 'Locations-WhiteRock.html', badge: "Canada's first Floating Needle clinic" },
        ],
        viewAll: 'View all clinics →',
        viewAllHref: 'Locations.html',
        cardCta: 'Visit clinic →',
      },
      cta: {
        ribbon: 'Book your nearest clinic →',
        ribbonHref: 'Locations.html',
      },
    },
  },

  // ============================================================
  // FAQ — info page (FAQ.html)
  // ============================================================
  faq: {
    en: {
      seoTitle: 'FAQ | Canadian Western TCM',
      seoDescription: 'Plain-spoken answers about acupuncture, ICBC and extended health coverage, what to expect on a first visit, herbal safety in pregnancy or with medication, language of care and booking at Canadian Western TCM.',
      hero: {
        eyebrow: 'FAQ',
        h1: 'Good questions, plainly answered.',
        sub: "Honest answers to the things people most often ask before their first visit. If you don't find yours here, please ask.",
      },
      items: [
        {
          q: 'Do I need a referral?',
          a: 'No — you can book directly. For ICBC claims, our front desk will guide you through the process.',
          schema: true,
        },
        {
          q: 'Does acupuncture hurt?',
          a: 'Most people feel only a small pinch, then a heavy or warm sensation. Needles are sterile and single-use.',
          schema: true,
        },
        {
          q: 'How many sessions will I need?',
          a: 'It varies by person and concern — often a short series, reviewed as you progress.',
          schema: true,
        },
        {
          q: 'Is it covered by insurance?',
          a: 'Registered acupuncture is recognised by ICBC, and many extended-health plans include acupuncture / RMT.',
          schema: true,
        },
        {
          q: 'Do you speak Chinese?',
          a: 'Yes — our team offers care in English and Chinese.',
          schema: true,
        },
        {
          q: 'Are the herbs safe with my medication / pregnancy?',
          a: 'Tell us your medications, and if you are or may be pregnant, so we can advise on suitability.',
          schema: true,
        },
        {
          q: 'How do I book?',
          a: 'Call your nearest clinic, or book online where available — our front desk is happy to help.',
          schema: false,
        },
        {
          q: 'Parking & transit?',
          a: 'Each clinic page lists parking and transit. <a href="Locations.html">See all locations →</a>',
          schema: true,
          plainAnswer: 'Each clinic page lists parking and transit.',
        },
      ],
      stillAsk: {
        headline: 'Still have a question?',
        sub: 'Reach out and we will get back to you.',
        primary: 'Contact us',
        primaryHref: 'Contact.html',
        secondary: 'Find your nearest clinic →',
        secondaryHref: 'Locations.html',
      },
    },
  },

  // ============================================================
  // FIRST VISIT — info page (First-Visit.html)
  // ============================================================
  firstVisit: {
    en: {
      seoTitle: 'Your First Visit | Canadian Western TCM',
      seoDescription: "What to expect on your first visit at Canadian Western TCM — what to wear, how the assessment works (history, pulse and tongue), how treatment is tailored, and what follow-up usually looks like.",
      hero: {
        eyebrow: 'Your First Visit',
        h1: 'What to expect, your first time.',
        sub: 'A quiet, considered first visit — assessment, treatment, and a plan for what comes next.',
      },
      steps: [
        {
          n: '01',
          h3: 'Before you come',
          body: 'Wear loose, comfortable clothing. Eat something light beforehand — not on a completely empty stomach. Bring a list of medications and any relevant reports.',
        },
        {
          n: '02',
          h3: 'The assessment',
          body: 'Your practitioner will ask about your history and goals, and look at your pulse and tongue — the traditional way of reading your constitution.',
        },
        {
          n: '03',
          h3: 'Your treatment',
          body: 'Treatment is tailored to you that day — often acupuncture with bodywork, moxibustion or cupping. Tell us about anything that feels uncomfortable.',
        },
        {
          n: '04',
          h3: 'After & follow-up',
          body: 'You may feel relaxed or a little tired. We will suggest a plan and any home advice, and review at follow-ups.',
        },
      ],
      details: {
        eyebrow: 'A Few Practical Details',
        items: [
          { label: 'How long is a first visit?',  body: 'Allow time for a full intake and treatment.' },
          { label: 'What should I wear?',         body: 'Loose, comfortable clothing. We have gowns if needed.' },
          { label: 'What does it cost?',          body: 'Fees vary by treatment — please ask the clinic when you book.' },
          { label: 'Do you direct-bill?',         body: 'We direct-bill ICBC; for other extended-health plans, please confirm details with the clinic.' },
        ],
      },
      cta: {
        headline: 'Ready to book?',
        sub: 'Pick the clinic nearest you, or meet our practitioners first.',
        primary: 'Book a Visit',
        primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
        secondary: 'See our practitioners →',
        secondaryHref: 'Practitioners.html',
      },
    },
  },

  // ============================================================
  // CONTACT — info page (Contact.html)
  // ============================================================
  contact: {
    en: {
      seoTitle: 'Contact & Locations | Canadian Western TCM',
      seoDescription: 'Contact and locations for Canadian Western TCM — four clinics across Greater Vancouver: Richmond, Burnaby, Vancouver and White Rock. Addresses, phone numbers, hours and a contact form.',
      hero: {
        eyebrow: 'Contact',
        h1: 'Find us, call us, come by.',
        sub: 'Four clinics across Greater Vancouver — and a quiet line you can write to.',
      },
      napEyebrow: 'Our Clinics',
      clinics: [
        {
          city: 'Richmond',
          address: '5611 Cooney Rd #130, Richmond, BC V6X 3J6',
          phone: '(604) 285-5778',
          hours: 'Mon–Sun 10:00–18:30',
          href: 'Locations-Richmond.html',
          directions: 'https://maps.google.com/?q=5611+Cooney+Rd+Richmond+BC',
          lat: 49.1773, lng: -123.1377,
        },
        {
          city: 'Burnaby',
          address: '5665 Kingsway #125, Burnaby, BC V5H 2G4',
          phone: '(604) 423-9633',
          hours: 'Mon–Sun 10:00–18:30',
          href: 'Locations-Burnaby.html',
          directions: 'https://maps.google.com/?q=5665+Kingsway+Burnaby+BC',
          lat: 49.2233, lng: -123.0029,
        },
        {
          city: 'Vancouver',
          address: '3652 West Broadway, Vancouver, BC V6R 2B7',
          phone: '(778) 323-6356',
          hours: 'Mon–Sun 10:00–18:30',
          href: 'Locations-Vancouver.html',
          directions: 'https://maps.google.com/?q=3652+West+Broadway+Vancouver+BC',
          lat: 49.2643, lng: -123.1850,
        },
        {
          city: 'White Rock',
          address: '1549 Johnston Rd, White Rock, BC V4B 3Z6',
          phone: '(604) 560-6399',
          hours: 'Mon–Sun 9:30–19:00',
          href: 'Locations-WhiteRock.html',
          directions: 'https://maps.google.com/?q=1549+Johnston+Rd+White+Rock+BC',
          lat: 49.0289, lng: -122.8025,
        },
      ],
      form: {
        eyebrow: 'Write to us',
        h2: 'Reach out — we read everything.',
        fields: {
          name: 'Your name',
          email: 'Email',
          phone: 'Phone (optional)',
          clinic: 'Preferred clinic',
          clinicDefault: 'Select a clinic',
          message: 'How can we help?',
        },
        submit: 'Send message',
        helper: 'Please don’t include sensitive medical or financial details here.',
        disabled: 'Online form coming soon — please call or email us.',
      },
      wechat: {
        eyebrow: 'Find us on WeChat',
        title: 'Scan to add us on WeChat',
        sub: 'For appointments and updates in Chinese.',
      },
    },
  },

  // ============================================================
// TREATMENTS — archive page (Treatments.html)
// ============================================================
treatments: {
  // Detail pages that exist on disk. Treatment cards in the archive
  // link to /Treatments/{slug}.html when their slug is in this list;
  // otherwise the card's "Read more →" is a placeholder.
  live: [
    'acupuncture', 'tui-na', 'moxibustion', 'cupping-gua-sha',
    'manual-bone-setting', 'head-therapy', 'herbal-medicine',
    'floating-needle', 'aesthetic-acupuncture',
    'fuyang-moxibustion', 'fire-dragon-moxibustion', 'thread-embedding',
    'xiaoyan-facial', 'facial-bojin', 'tcm-acne',
    'manual-osteopathy', 'counselling',
    // 'rmt' detail page not yet built — card stays placeholder
  ],
  seoTitle: 'TCM Treatments — Acupuncture, Herbal Medicine, Tui Na, Floating Needle | Canadian Western TCM',
    seoDescription: 'Acupuncture, tui na, moxibustion, cupping, manual bone setting, head therapy, herbal medicine, floating needle, aesthetic acupuncture and registered massage therapy — traditional TCM, practised to a modern standard, across four Greater Vancouver clinics.',
    hero: {
      eyebrow: 'Treatments',
      h1: 'Treatments, refined over generations.',
      sub: 'From acupuncture and herbal medicine to hands-on bodywork — traditional methods, practised to a modern standard.',
    },
    groups: [
      {
        eyebrow: 'Traditional',
        zh: '传统疗法',
        cards: [
          { slug: 'acupuncture',     name: 'Acupuncture',          sub: '针灸',       tagline: 'Fine needles, precise points — for pain, sleep and balance.',        kind: 'needle'  },
          { slug: 'tui-na',          name: 'Tui Na',               sub: '推拿',       tagline: 'Therapeutic Chinese bodywork for muscles and meridians.',           kind: 'tuina'   },
          { slug: 'moxibustion',     name: 'Moxibustion',          sub: '艾灸',       tagline: 'Gentle warming therapy with mugwort heat.',                          kind: 'moxa'    },
          { slug: 'cupping-gua-sha', name: 'Cupping & Gua Sha',    sub: '拔罐与刮痧', tagline: 'Suction and scraping to release tension and circulation.',         kind: 'cupping' },
          { slug: 'manual-bone-setting',    name: 'Manual Bone Setting',  sub: '正骨',       tagline: 'Hands-on realignment for joints and the spine.',                    kind: 'boneset' },
          { slug: 'head-therapy',    name: 'Head Therapy',         sub: '头疗',       tagline: 'Scalp and head work for tension, sleep and clarity.',               kind: 'scalp'   },
          { slug: 'herbal-medicine', name: 'Herbal Medicine',      sub: '中药调理',   tagline: 'Custom Chinese herbal formulas, prepared for you.',                 kind: 'herbs'   },
        ],
      },
      {
        eyebrow: 'Signature',
        zh: '加西特色',
        cards: [
          { slug: 'floating-needle',    name: 'Floating Needle (FSN)',  sub: '浮针',     tagline: 'A modern, near-painless technique for muscular and myofascial pain.', kind: 'fsn'    },
          { slug: 'aesthetic-acupuncture', name: 'Aesthetic Acupuncture', sub: '美容针', tagline: 'Acupuncture for facial tone and rejuvenation.',                       kind: 'facial' },
          { slug: 'fuyang-moxibustion',      name: 'Fu Yang Moxibustion',      sub: '扶阳灸',       tagline: 'Deep, layered moxa warmth to nourish yang and dispel cold.',            kind: 'moxa'   },
          { slug: 'fire-dragon-moxibustion', name: 'Fire Dragon Moxibustion',  sub: '火龙灸',       tagline: 'Spinal moxibustion — penetrating warmth along the back.',     kind: 'moxa'   },
          { slug: 'thread-embedding',        name: 'Acupoint Thread Embedding', sub: '埋线减肥',    tagline: 'Absorbable threads at acupoints — support for weight management.',      kind: 'needle' },
          { slug: 'xiaoyan-facial',          name: 'Xiao Yan Facial Acupuncture', sub: '古法小颜针', tagline: 'Heritage small-face needling for jaw tension and contour.',            kind: 'facial' },
          { slug: 'facial-bojin',            name: 'Facial Bo Jin',            sub: '面部拨筋',     tagline: 'Tool-assisted facial meridian release for tension and glow.',           kind: 'tuina'  },
          { slug: 'tcm-acne',                name: 'TCM Acne Care',            sub: '中医暗疮治疗', tagline: 'Whole-person acne care — needling, herbs and guidance.',                kind: 'herbs'  },
        ],
      },
      {
        eyebrow: 'Clinical Care',
        zh: '注册临床',
        cards: [
          { slug: 'rmt', name: 'Registered Massage Therapy (RMT)', sub: '注册按摩', tagline: 'Registered massage therapy for recovery and relief.', kind: 'rmt' },
          { slug: 'manual-osteopathy', name: 'Manual Osteopathic Therapy (MOT)', sub: '整骨疗法（MOT）', tagline: 'Gentle, whole-body manual therapy for joints, muscles and fascia.', kind: 'boneset' },
          { slug: 'counselling', name: 'Counselling', sub: '心理咨询', tagline: 'Supportive one-on-one sessions alongside TCM care (Vancouver).', kind: 'scalp' },
        ],
      },
    ],
    readMore: 'Read more →',
    bridge: {
      title: 'Not sure which treatment? Start from how you feel.',
      link: 'Browse by condition →',
      href: 'Conditions.html',
    },
    cta: {
      headline: 'Care that meets you where you are.',
      sub: 'Book a visit at any of our four clinics across Greater Vancouver.',
      primary: 'Book a Visit',
      primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      secondary: 'Find your nearest clinic →',
      secondaryHref: 'Locations.html',
    },

    // ============================================================
    // CONDITION LABELS — slug → display label for condition cards
    // yet, so each card href stays `#`.)
    // ============================================================
    conditionLabels: {
      'pain-injury':           { name: 'Pain & Injury',          zh: '疼痛与损伤' },
      'sleep-stress':          { name: 'Sleep & Stress',         zh: '睡眠与压力' },
      'headaches-migraines':   { name: 'Headaches & Migraines',  zh: '头痛与偏头痛' },
      'womens-health':         { name: "Women's Health",         zh: '妇科健康' },
      'fertility-pregnancy':   { name: 'Fertility & Pregnancy',  zh: '备孕与孕产' },
      'digestion':             { name: 'Digestion',              zh: '消化调理' },
      'icbc-recovery':         { name: 'ICBC Recovery',          zh: '车祸康复' },
      'skin-acne':             { name: 'Skin & Acne',            zh: '皮肤与痤疮' },
      'healthy-aging':         { name: 'Healthy Aging',          zh: '健康抗衰' },
    },

    // ============================================================
    // DETAIL PAGES — keyed by slug. Each entry feeds the shared
    // treatment-detail.jsx template (7 blocks). Adding a key here
    // and including the slug in `live` above publishes the page.
    // ============================================================
    details: {
      acupuncture: {
        slug: 'acupuncture',
        name: 'Acupuncture', nameZh: '针灸',
        category: 'Traditional',
        kind: 'needle',
        lede: 'Fine needles, precise points — a calm, time-tested therapy for pain, sleep and balance.',
        seoTitle: 'Acupuncture — what it is, what to expect | Canadian Western TCM',
        seoDescription: 'Acupuncture at Canadian Western TCM — fine, single-use needles at precise points to support pain, sleep, tension and circulation. Educational guide and what a session is like.',
        whatIsIt: [
          'Acupuncture places very fine, single-use needles at specific points on the body to prompt its own responses — easing muscle tension, calming an over-active nervous system, and supporting local circulation.',
          'It is one of the most studied traditional therapies, and is widely used alongside conventional care for several kinds of pain, tension and sleep difficulty.',
        ],
        whatIsItFootnote: 'In traditional Chinese medicine, these points lie along channels (meridians), and the work is described as restoring the smooth movement of <em>qi</em>.',
        whatToExpect: [
          'After a short intake (pulse, tongue, history), needles are placed and left in for a period of rest. Most people feel only a small pinch, then a heavy or warm sensation.',
          'Needles are sterile and single-use. You may feel relaxed or a little tired afterward.',
        ],
        conditions: ['pain-injury', 'sleep-stress', 'headaches-migraines', "womens-health", 'digestion'],
        related: ['tui-na', 'moxibustion', 'cupping-gua-sha'],
      },

      'floating-needle': {
        slug: 'floating-needle',
        name: 'Floating Needle (FSN)', nameZh: '浮针',
        category: 'Signature',
        kind: 'fsn',
        lede: "A modern, near-painless technique for muscular and myofascial pain — Canada's first dedicated demonstration clinic is ours, in White Rock.",
        seoTitle: 'Floating Needle (FSN) — what it is, what to expect | Canadian Western TCM',
        seoDescription: "Floating Needle (Fu's Subcutaneous Needling, FSN) at Canadian Western TCM — a modern, near-painless technique for muscular and myofascial pain. Our White Rock clinic is Canada's first dedicated FSN demonstration clinic.",
        whatIsIt: [
          "Floating needle (Fu's Subcutaneous Needling, FSN) works in the layer just under the skin, using a soft, sweeping movement rather than deep insertion.",
          "It targets tight, painful muscle and fascia and is known for being modern and near-painless, often with quick relief in the same session.",
          "Our White Rock clinic is Canada's first dedicated FSN demonstration clinic. Suitability is assessed for each patient.",
        ],
        whatIsItFootnote: null,
        whatToExpect: [
          'A soft needle works in the surface layer with a gentle sweeping motion while you move the area; most people find it near-painless.',
          'Single-use, sterile. Often used in a short series. The number of sessions varies from person to person.',
        ],
        conditions: ['pain-injury', 'icbc-recovery', 'headaches-migraines'],
        related: ['acupuncture', 'tui-na'],
        // Surfaces a small footer pointer to the dedicated White Rock site.
        whiteRockNote: {
          line: 'White Rock has its own home for FSN online.',
          link: 'Visit our White Rock site →',
          href: 'https://whiterock.cwtcm.ca/',
        },
      },

      'tui-na': {
        slug: 'tui-na',
        name: 'Tui Na', nameZh: '推拿',
        category: 'Traditional',
        kind: 'tuina',
        lede: "Therapeutic Chinese bodywork for muscles, joints and meridians.",
        seoTitle: 'Tui Na — Chinese therapeutic bodywork | Canadian Western TCM',
        seoDescription: 'Tui na at Canadian Western TCM — hands-on Chinese therapeutic bodywork that kneads, presses and stretches muscles and joints to release tension and improve mobility. Educational guide and what a session is like.',
        whatIsIt: [
          'Tui na is hands-on Chinese therapeutic bodywork — kneading, pressing and stretching muscles and joints to release tension, ease stiffness and improve mobility and circulation.',
          'It is often used for musculoskeletal pain and tension, on its own or alongside acupuncture.',
        ],
        whatIsItFootnote: "In TCM, the same techniques are described as freeing the flow along the body's channels.",
        whatToExpect: [
          'A clothed or partially-clothed session of pressure and movement along muscles and joints. Pressure is adjusted to your comfort; some areas may feel tender.',
          'No needles.',
        ],
        conditions: ['pain-injury', 'headaches-migraines', 'icbc-recovery'],
        related: ['acupuncture', 'manual-bone-setting'],
      },

      moxibustion: {
        slug: 'moxibustion',
        name: 'Moxibustion', nameZh: '艾灸',
        category: 'Traditional',
        kind: 'moxa',
        lede: 'Gentle warming therapy using the heat of mugwort (moxa).',
        seoTitle: 'Moxibustion — gentle warming therapy with mugwort | Canadian Western TCM',
        seoDescription: 'Moxibustion at Canadian Western TCM — warming specific points and areas with smouldering mugwort (moxa) to ease cold, stiff or achy areas and support circulation. Educational guide and what a session is like.',
        whatIsIt: [
          'Moxibustion warms specific points or areas using smouldering mugwort (moxa), held near the skin.',
          'The gentle, penetrating heat is used to ease cold, stiff or achy areas and to support circulation and digestive comfort. It is often paired with acupuncture.',
        ],
        whatIsItFootnote: "In TCM it is described as warming and moving <em>qi</em> and dispelling 'cold' patterns.",
        whatToExpect: [
          "Warmth near the skin — a comfortable radiant heat, carefully tended by your practitioner.",
          'There may be a faint herbal smoke and aroma. Tell your practitioner if it feels too warm.',
        ],
        conditions: ['pain-injury', 'digestion', 'womens-health'],
        related: ['acupuncture', 'cupping-gua-sha'],
      },

      'fuyang-moxibustion': {
        slug: 'fuyang-moxibustion',
        name: 'Fu Yang Moxibustion', nameZh: '扶阳灸',
        category: 'Signature',
        kind: 'moxa',
        lede: 'Deep, layered moxa warmth over key areas to nourish yang and dispel cold.',
        seoTitle: 'Fu Yang Moxibustion (扶阳灸) — deep warming therapy | Canadian Western TCM',
        seoDescription: 'Fu Yang moxibustion at Canadian Western TCM — layered, sustained moxa warmth over the back and abdomen to nourish yang qi, ease cold and fatigue patterns and support circulation. Educational guide.',
        whatIsIt: [
          "Fu Yang ('yang-nourishing') moxibustion applies generous, sustained moxa warmth over broader areas — typically the lower back and abdomen — rather than single points.",
          "In TCM it is chosen for patterns described as 'cold' or 'yang-deficient': feeling chronically cold or tired, cold hands and feet, a cold, achy lower back, and digestive weakness. Many people find it deeply comforting.",
        ],
        whatIsItFootnote: 'In TCM terms it warms and tonifies <em>yang qi</em> through the Governor and Conception vessels.',
        whatToExpect: [
          'A broad, steady radiant warmth that builds gradually — comfortable, carefully tended by your practitioner.',
          'Sessions are slow-paced and quietly restorative; a light herbal aroma is normal. Tell your practitioner if it ever feels too warm.',
        ],
        bookHeadline: 'Book Fu Yang Moxibustion in Richmond, Vancouver or White Rock.',
        bookSub: 'Available at three of our four clinics — pick the one closest to you.',
        conditions: ['digestion', 'womens-health', 'pain-injury'],
        related: ['moxibustion', 'herbal-medicine'],
      },

      'fire-dragon-moxibustion': {
        slug: 'fire-dragon-moxibustion',
        name: 'Fire Dragon Moxibustion', nameZh: '火龙灸',
        category: 'Signature',
        kind: 'moxa',
        lede: "A signature spinal moxibustion — herbal layers and moxa warmth laid along the back like a dragon.",
        seoTitle: 'Fire Dragon Moxibustion (火龙灸) — spinal warming therapy | Canadian Western TCM',
        seoDescription: 'Fire Dragon moxibustion at Canadian Western TCM Burnaby — a spinal moxibustion with herbal layers and penetrating warmth along the back, used for cold-damp patterns, stiffness and fatigue. Educational guide.',
        whatIsIt: [
          "Fire Dragon moxibustion lays a warm 'dragon' of herbal layers and smouldering moxa along the spine, warming the whole back in one continuous pathway.",
          'The strong yet comfortable penetrating heat is used in TCM for cold-damp patterns — chronic back and neck stiffness, aversion to cold, fatigue and period pain. It is one of the most warming treatments in the clinic.',
        ],
        whatIsItFootnote: "In TCM it is described as warming the Governor vessel — the 'sea of yang'.",
        whatToExpect: [
          'Layers of ginger, herbs and moxa are built along your back; warmth arrives in slow, comfortable waves.',
          'You rest face-down throughout; most people find it deeply soothing. Brief redness from the warmth is normal.',
        ],
        bookHeadline: 'Book Fire Dragon Moxibustion at our Burnaby clinic.',
        bookSub: 'A Burnaby signature, on the Kingsway corridor — book your visit.',
        conditions: ['pain-injury', 'womens-health', 'sleep-stress'],
        related: ['moxibustion', 'cupping-gua-sha'],
      },

      'thread-embedding': {
        slug: 'thread-embedding',
        name: 'Acupoint Thread Embedding', nameZh: '埋线减肥',
        category: 'Signature',
        kind: 'needle',
        lede: 'Absorbable threads at acupoints for continuous, between-visit stimulation — used to support weight management.',
        seoTitle: 'Acupoint Thread Embedding (埋线减肥) — weight-management support | Canadian Western TCM',
        seoDescription: 'Acupoint thread embedding at Canadian Western TCM — fine absorbable threads placed at selected acupoints for continuous stimulation between visits, used alongside diet and activity to support appetite regulation and weight management. Results vary.',
        whatIsIt: [
          'A fine, absorbable thread is placed at each selected acupoint with a slim needle applicator. As it absorbs over the following weeks it keeps stimulating the point gently — like an acupuncture session that continues between visits.',
          'In TCM weight-management care it is used to support appetite regulation, digestion and metabolism, always alongside sensible eating and activity. Results vary from person to person; your practitioner will assess your pattern first.',
        ],
        whatIsItFootnote: 'Also known as acupoint catgut / PDO embedding (穴位埋线); single-use, sterile materials only.',
        whatToExpect: [
          'A brief pinch at each point as the thread is placed; the area may feel mildly heavy or tender for a day or two.',
          'Threads absorb on their own — nothing to remove. Sessions are spaced to match your plan.',
        ],
        conditions: ['digestion'],
        related: ['acupuncture', 'herbal-medicine'],
      },

      'xiaoyan-facial': {
        slug: 'xiaoyan-facial',
        name: 'Xiao Yan Facial Acupuncture', nameZh: '古法小颜针',
        category: 'Signature',
        kind: 'facial',
        lede: "Heritage 'small-face' acupuncture — ultra-fine needling to ease jaw tension and refine facial contour.",
        seoTitle: 'Xiao Yan Facial Acupuncture (古法小颜针) — contour & jaw-tension care | Canadian Western TCM',
        seoDescription: "Xiao Yan ('small face') acupuncture at Canadian Western TCM — heritage ultra-fine needling of the facial muscles and fascia to ease jaw and masseter tension and support a firmer, more refined contour, without injections.",
        whatIsIt: [
          "Xiao Yan ('small face') acupuncture works on the facial muscles and fascia with ultra-fine needles, following heritage techniques.",
          'It is commonly chosen to ease clenching-related jaw and masseter tension and to support a firmer-looking contour along the jaw and cheeks. It is needle-only care — no injections — usually taken as a course.',
        ],
        whatIsItFootnote: 'Effects build gradually and vary from person to person.',
        whatToExpect: [
          'Very fine needles placed along the jaw, cheeks and temples; most people feel only light sensations.',
          'A course of sessions is typical; your practitioner reviews your response as you go.',
        ],
        conditions: ['skin-acne'],
        related: ['aesthetic-acupuncture', 'facial-bojin'],
      },

      'facial-bojin': {
        slug: 'facial-bojin',
        name: 'Facial Bo Jin', nameZh: '面部拨筋',
        category: 'Signature',
        kind: 'tuina',
        lede: 'Tool-assisted release along the facial meridians — easing tension, supporting circulation and glow.',
        seoTitle: 'Facial Bo Jin (面部拨筋) — facial meridian release | Canadian Western TCM',
        seoDescription: 'Facial Bo Jin at Canadian Western TCM — a smooth tool worked in precise strokes along the facial meridians and fascia to ease tension, support circulation and lymph flow, and reduce the look of puffiness.',
        whatIsIt: [
          'Bo Jin uses a smooth tool (traditionally ox horn) worked in precise strokes along the facial meridians and fascia.',
          'It is used to ease facial and jaw tension, support local circulation and lymph flow, and reduce the look of puffiness — many people find their face feels lighter and looks more rested after a session.',
        ],
        whatIsItFootnote: 'In TCM it is described as unblocking the facial channels.',
        whatToExpect: [
          'Firm but comfortable strokes along the brow, cheeks and jawline; brief redness from circulation is normal.',
          'Often paired with head therapy or facial acupuncture.',
        ],
        conditions: ['sleep-stress', 'headaches-migraines'],
        related: ['xiaoyan-facial', 'head-therapy'],
      },

      'tcm-acne': {
        slug: 'tcm-acne',
        name: 'TCM Acne Care', nameZh: '中医暗疮治疗',
        category: 'Signature',
        kind: 'herbs',
        lede: 'Whole-person acne care — fine needling, herbal support and pattern-based guidance.',
        seoTitle: 'TCM Acne Care (中医暗疮治疗) — whole-person acne support | Canadian Western TCM',
        seoDescription: 'TCM acne care at Canadian Western TCM — pattern diagnosis with fine facial needling, tailored herbal support and practical dietary guidance for recurring and hormone-related breakouts, working alongside dermatological care.',
        whatIsIt: [
          'Rather than treating the surface alone, TCM acne care starts from your pattern — skin, digestion, menstrual cycle, sleep and stress are read together.',
          'Care may combine fine facial needling, a tailored herbal formula and practical dietary guidance, and is often chosen for recurring or hormone-related breakouts. We work alongside, not instead of, dermatological care.',
        ],
        whatIsItFootnote: 'See also our Skin &amp; Acne condition guide.',
        whatToExpect: [
          'A full intake first; then fine needling, herbs, or both, depending on your pattern.',
          'Skin changes gradually — progress is reviewed over a course of care.',
        ],
        conditions: ['skin-acne'],
        related: ['herbal-medicine', 'aesthetic-acupuncture'],
      },

      'manual-osteopathy': {
        slug: 'manual-osteopathy',
        name: 'Manual Osteopathic Therapy (MOT)', nameZh: '整骨疗法（MOT）',
        category: 'Clinical Care',
        kind: 'boneset',
        lede: 'Gentle, whole-body manual therapy for joints, muscles and fascia.',
        seoTitle: 'Manual Osteopathic Therapy (MOT) — gentle whole-body manual care | Canadian Western TCM',
        seoDescription: 'Manual osteopathic therapy at Canadian Western TCM — gentle, whole-body assessment and hands-on mobilization of joints, muscles and fascia for chronic tension, postural strain and restricted movement.',
        whatIsIt: [
          'Manual osteopathic therapy (MOT) looks at the body as a whole — posture, joints, muscles, fascia and circulation are assessed together.',
          'Treatment uses gentle, hands-on mobilization and soft-tissue techniques to ease chronic tension, joint restriction and postural strain, and to support easier movement. It pairs naturally with our TCM bodywork.',
        ],
        whatIsItFootnote: 'Distinct from our traditional manual bone setting (正骨) — MOT follows Western osteopathic principles.',
        whatToExpect: [
          'A postural and movement assessment first, then slow, attentive hands-on work; wear comfortable clothing.',
          'Techniques are gentle — most people find sessions relaxing, with a feeling of looseness afterwards.',
        ],
        bookHeadline: 'Book Manual Osteopathic Therapy with us.',
        bookSub: 'Please contact the clinic to confirm availability — our front desk will arrange your visit.',
        conditions: ['pain-injury', 'headaches-migraines'],
        related: ['manual-bone-setting', 'tui-na'],
      },

      counselling: {
        slug: 'counselling',
        name: 'Counselling', nameZh: '心理咨询',
        category: 'Clinical Care',
        kind: 'scalp',
        lede: 'Supportive one-on-one counselling, offered alongside TCM care at our Vancouver clinic.',
        seoTitle: 'Counselling — supportive one-on-one sessions | Canadian Western TCM',
        seoDescription: 'Counselling at Canadian Western TCM Vancouver — supportive, confidential one-on-one sessions for stress, low mood and life transitions, offered in English and Chinese alongside TCM care.',
        whatIsIt: [
          'A confidential, supportive space to talk through stress, anxiety, low mood or a difficult season of life — offered in English and Chinese.',
          'Counselling here sits alongside TCM care: many people pair talking sessions with acupuncture or herbal support for a body-and-mind approach. It complements, and does not replace, medical or psychiatric care.',
        ],
        whatIsItFootnote: "If you are in crisis, call or text 9-8-8 (Canada's Suicide Crisis Helpline), call 911, or reach BC's mental-health support line at 310-6789.",
        whatToExpect: [
          'A relaxed first conversation about what brings you in and what support would help.',
          'Sessions are private and paced by you; your counsellor may suggest pairing with acupuncture where appropriate.',
        ],
        bookHeadline: 'Book Counselling at our Vancouver clinic.',
        bookSub: 'Offered at our Vancouver (Kitsilano) clinic on West Broadway.',
        conditions: ['sleep-stress'],
        related: ['acupuncture', 'head-therapy'],
      },

      'cupping-gua-sha': {
        slug: 'cupping-gua-sha',
        name: 'Cupping & Gua Sha', nameZh: '拔罐与刮痧',
        category: 'Traditional',
        kind: 'cupping',
        lede: 'Suction and gentle scraping to release tension and bring circulation to the surface.',
        seoTitle: 'Cupping & Gua Sha — release tension, support circulation | Canadian Western TCM',
        seoDescription: 'Cupping and gua sha at Canadian Western TCM — gentle suction and surface scraping for muscle tension, tightness and the early stages of a cold. Educational guide and what a session is like.',
        whatIsIt: [
          'Cupping uses gentle suction to lift the skin and underlying tissue, while gua sha uses a smooth tool to scrape lightly along the skin.',
          'Both draw fresh circulation to an area and are commonly used for muscle tension, tightness and the early stages of a cold. They can leave temporary marks that fade in a few days.',
        ],
        whatIsItFootnote: 'In TCM, both are described as moving stagnation.',
        whatToExpect: [
          'A pulling sensation (cupping) or light scraping (gua sha).',
          'Temporary circular or reddish marks are normal and not bruises in the usual sense; they fade within days.',
        ],
        conditions: ['pain-injury', 'sleep-stress', 'icbc-recovery'],
        related: ['moxibustion', 'tui-na'],
      },

      'manual-bone-setting': {
        slug: 'manual-bone-setting',
        name: 'Manual Bone Setting', nameZh: '正骨',
        category: 'Traditional',
        kind: 'boneset',
        lede: 'Hands-on realignment for joints, the spine and the musculoskeletal frame.',
        seoTitle: 'Manual Bone Setting — hands-on realignment | Canadian Western TCM',
        seoDescription: 'Manual bone setting at Canadian Western TCM — careful positioning and adjustment to ease joint and spinal restrictions, improve alignment and relieve related pain. Educational guide and what a session is like.',
        whatIsIt: [
          'Manual bone setting is a hands-on technique that uses careful positioning and adjustment to ease joint and spinal restrictions, improve alignment and relieve related pain.',
          'It is often used for neck, shoulder and back complaints, frequently after a thorough assessment and alongside soft-tissue work. <em>Suitability is assessed case by case.</em>',
        ],
        whatIsItFootnote: null,
        whatToExpect: [
          'An assessment first, then gentle, targeted adjustments. You may hear or feel a release.',
          "Your practitioner will check that it's appropriate for you before proceeding.",
        ],
        conditions: ['pain-injury', 'icbc-recovery'],
        related: ['tui-na', 'acupuncture'],
      },

      'head-therapy': {
        slug: 'head-therapy',
        name: 'Head Therapy', nameZh: '头疗',
        category: 'Traditional',
        kind: 'scalp',
        lede: 'Scalp and head work for tension, sleep and a clearer head.',
        seoTitle: 'Head Therapy — scalp & head work for tension and sleep | Canadian Western TCM',
        seoDescription: 'Head therapy at Canadian Western TCM — scalp massage and point work around the head and neck to ease tension, support sleep and relieve the tightness that builds from screens and stress.',
        whatIsIt: [
          'Head therapy combines scalp massage and point work around the head and neck to ease tension, support sleep and relieve the tightness that builds from screens and stress.',
          "It's a calming, restorative session many people pair with acupuncture.",
        ],
        whatIsItFootnote: null,
        whatToExpect: [
          'Seated or lying, with massage and pressure around the scalp, temples and neck.',
          'Deeply relaxing; many find it eases headaches and helps them sleep.',
        ],
        conditions: ['sleep-stress', 'headaches-migraines'],
        related: ['acupuncture', 'tui-na'],
      },

      'aesthetic-acupuncture': {
        slug: 'aesthetic-acupuncture',
        name: 'Aesthetic Acupuncture', nameZh: '美容针',
        category: 'Signature',
        kind: 'facial',
        lede: 'Acupuncture for facial tone, freshness and a rested look.',
        seoTitle: 'Aesthetic Acupuncture — facial tone, freshness, a rested look | Canadian Western TCM',
        seoDescription: 'Aesthetic acupuncture at Canadian Western TCM — very fine needles on the face to support local circulation and muscle tone, grounded in our whole-body view of sleep, digestion and constitution. Educational guide and what a session is like.',
        whatIsIt: [
          'Aesthetic (cosmetic) acupuncture uses very fine needles on the face to support local circulation and muscle tone, for a fresher, more rested appearance.',
          'It is a gentle, gradual approach often done in a series, and is grounded in the same whole-body view as the rest of our practice — your sleep, digestion and constitution are part of the picture. <em>Not a medical or cosmetic-surgery procedure; results vary.</em>',
        ],
        whatIsItFootnote: null,
        whatToExpect: [
          'Fine needles at facial points; minimal discomfort. Single-use, sterile.',
          'Often combined with body points and lifestyle / constitutional advice. Done in a series for gradual results.',
        ],
        conditions: ['skin-acne', 'sleep-stress'],  /* 移除 'healthy-aging'：Conditions/ 下从来没有这个页面（旧站同样断链），向量库与其他任何地方也都没有这项服务的表述。首页那张「健康抗衰」展示卡不可点、不受影响，故保留。将来若补了详情页，把它加回来即可。 */
        related: ['acupuncture', 'herbal-medicine'],
      },

      'herbal-medicine': {
        slug: 'herbal-medicine',
        name: 'Herbal Medicine', nameZh: '中药调理',
        category: 'Traditional',
        kind: 'herbs',
        lede: 'Custom Chinese herbal formulas, prepared for your constitution.',
        seoTitle: 'Chinese Herbal Medicine — what it is, what to expect | Canadian Western TCM',
        seoDescription: 'Chinese herbal medicine at Canadian Western TCM — combinations of plant (and mineral) ingredients formulated to your individual pattern after a TCM assessment. Educational guide and what a session is like.',
        whatIsIt: [
          'Chinese herbal medicine uses combinations of plant (and mineral) ingredients, formulated to your individual pattern after a TCM assessment.',
          'Formulas are commonly used to support digestion, sleep, women\u2019s health, skin and recovery — adjusted over time as you change. Our practitioners prescribe and, where offered, prepare formulas on site.',
        ],
        whatIsItFootnote: '<em>Tell us about medications or pregnancy so we can advise on suitability.</em>',
        practitionersNote: '<strong>Richmond</strong> — raw herbs &amp; patent formulas: <a href="Practitioners/xianyi-hu.html">Xianyi Hu</a>, <a href="Practitioners/jack-bai.html">Jake Bai</a>, <a href="Practitioners/lynn-liu.html">Lynn Liu</a>, <a href="Practitioners/taylor-wang.html">Taylor Wang</a><br/><strong>Burnaby</strong> — raw herbs &amp; patent formulas: <a href="Practitioners/wingho-chan.html">Wingho Chan</a>, <a href="Practitioners/taylor-wang.html">Taylor Wang</a><br/><strong>Vancouver</strong> — scientific (granule) herbs: <a href="Practitioners/lynn-liu.html">Lynn Liu</a>, <a href="Practitioners/jim-yi.html">Jim Yi</a>, <a href="Practitioners/shirley-zhu.html">Shirley Zhu</a>, <a href="Practitioners/taylor-wang.html">Taylor Wang</a><br/><strong>White Rock</strong> — scientific herbs: <a href="https://cwtcm.janeapp.com/#/chinese-herbal-medicine" target="_blank" rel="noopener">book online →</a>',
        richSections: [
          { title: 'Three forms of herbal medicine', html: '<strong>🌿 Raw Chinese Herbs（中草药）</strong><br/>Best for: personalised prescriptions, classic formulas with modifications, chronic-condition care, and concerns such as women\u2019s health, digestion, sleep and pain.<br/>✔ Prescribed after pattern diagnosis&nbsp;&nbsp;✔ Flexibly adjusted as your condition changes&nbsp;&nbsp;✔ The classic form of TCM treatment<br/><br/><strong>💊 Patent Herbal Medicine（中成药）</strong><br/>Best for: everyday support, common complaints, portability and simple dosing. We carry patent formulas from reputable manufacturers, recommended by your registered practitioner.<br/><br/><strong>🍵 Concentrated Herbal Granules（科学中药）</strong><br/>More and more Canadian patients choose granules:&nbsp;✔ dissolve and drink&nbsp;&nbsp;✔ no decoction needed&nbsp;&nbsp;✔ precise dosing&nbsp;&nbsp;✔ easier to keep up. Ideal for busy schedules, travel and students.' },
          { title: 'Herbal decoction service（代煎）', html: 'For patients who need traditional raw herbs, we offer:&nbsp;✔ professional dispensing&nbsp;&nbsp;✔ on-site decoction&nbsp;&nbsp;✔ sealed liquid pouches&nbsp;&nbsp;✔ portable, ready to drink. It saves you the time of preparing herbs at home — and makes staying consistent much easier.' },
          { title: 'Commonly supported concerns', html: 'After a TCM assessment, a formula may be tailored for concerns including: digestion (stomach pain, bloating, reflux, constipation, diarrhoea) · sleep (insomnia, dream-disturbed sleep) · women\u2019s health (irregular cycles, period pain, menopause) · pain (neck, shoulder, back and legs) · respiratory (cough, rhinitis) · sub-health, fatigue and stress · constitutional care and seasonal wellness.<br/><em>Actual treatment plans are set by a registered practitioner after individual assessment.</em>' },
          { title: 'Why Canadian Western TCM', html: '✔ One-on-one pattern diagnosis with BC-registered practitioners<br/>✔ Personalised herbal prescriptions<br/>✔ Three forms to choose from — raw herbs, granules and patent formulas<br/>✔ Herbal decoction service<br/>✔ Combined care with acupuncture, moxibustion and more<br/>✔ Multiple clinics across Greater Vancouver' },
        ],
        whatToExpect: [
          'A TCM assessment, then a formula in granule, raw-herb or other form (availability varies by clinic), with instructions on preparation and timing.',
          'Formulas are reviewed and adjusted at follow-ups.',
        ],
        conditions: ['digestion', 'womens-health', 'sleep-stress', 'skin-acne'],
        related: ['acupuncture', 'moxibustion'],
      },
    },

    // Shared chrome for detail pages (labels)
    detailChrome: {
      breadcrumbHome: 'Treatments',
      breadcrumbHomeHref: 'Treatments.html',
      whatIsItEyebrow: 'What it is',
      whatToExpectEyebrow: 'What a session is like',
      conditionsEyebrow: 'Often used for',
      practitionersEyebrow: 'Practitioners who offer this',
      practitionersBody: 'Most of our practitioners offer this treatment. Specific practitioner mappings are being finalized — in the meantime, you can browse the full team.',
      practitionersLink: 'Meet our practitioners →',
      practitionersHref: 'Practitioners.html',
      relatedEyebrow: 'Related treatments',
      heroPrimary: 'Book a Visit',
      heroPrimaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      heroSecondary: 'See practitioners ↓',
      bookHeadline: (name) => `Book ${name} at any of our clinics.`,
      bookSub: 'Four locations across Greater Vancouver — pick the one closest to you.',
      bookPrimary: 'Book a Visit',
      bookPrimaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      bookSecondary: 'Find your nearest clinic →',
      bookSecondaryHref: 'Locations.html',
    },
  },

  // ============================================================
  // CONDITIONS — archive page (Conditions.html)
  // ============================================================
  conditions: {
    seoTitle: "Conditions We Help — Pain, Sleep, Digestion, Women's Health & More | Canadian Western TCM",
    seoDescription: "An honest overview of the conditions we commonly help with at Canadian Western TCM — pain and injury, ICBC recovery, headaches, sleep and stress, digestion, women's health, fertility and pregnancy, skin and acne. Start from how you feel.",
    live: [
      'pain-injury',
      'icbc-recovery',
      'headaches-migraines',
      'sleep-stress',
      'digestion',
      'womens-health',
      'fertility-pregnancy',
      'skin-acne',
    ],
    hero: {
      eyebrow: 'Conditions',
      h1: 'Care for the conditions that quietly shape daily life.',
      sub: "Start from how you feel — we'll point you to the treatments and practitioners that help.",
    },
    groups: [
      {
        eyebrow: 'Body & Pain',
        zh: '身体与疼痛',
        cards: [
          { slug: 'pain-injury',         name: 'Pain & Injury',         sub: '疼痛与损伤',    desc: 'Back, neck, shoulder, joint and sports pain.',     kind: 'pain' },
          { slug: 'icbc-recovery',       name: 'ICBC Recovery',         sub: '车祸康复',      desc: 'Recovering from a motor-vehicle accident.',         kind: 'icbc' },
          { slug: 'headaches-migraines', name: 'Headaches & Migraines', sub: '头痛与偏头痛',  desc: 'Tension headaches and migraines.',                  kind: 'headaches' },
        ],
      },
      {
        eyebrow: 'Internal & Wellness',
        zh: '内调与养护',
        cards: [
          { slug: 'sleep-stress', name: 'Sleep & Stress', sub: '睡眠与压力', desc: 'Insomnia, restlessness and burnout.', kind: 'sleep' },
          { slug: 'digestion',    name: 'Digestion',      sub: '消化调理',    desc: 'Bloating, appetite and gut comfort.', kind: 'digestion' },
        ],
      },
      {
        eyebrow: 'Women & Skin',
        zh: '女性与皮肤',
        cards: [
          { slug: 'womens-health',       name: "Women's Health",        sub: '妇科健康',    desc: "Cycles, menopause and women's concerns.",     kind: 'women' },
          { slug: 'fertility-pregnancy', name: 'Fertility & Pregnancy', sub: '备孕与孕产',  desc: 'Support before, during and after pregnancy.', kind: 'fertility' },
          { slug: 'skin-acne',           name: 'Skin & Acne',           sub: '皮肤与痤疮',  desc: 'Acne, dullness and skin balance.',            kind: 'skin' },
        ],
      },
    ],
    arrow: '→',
    bridge: {
      title: 'Prefer to choose a treatment directly?',
      link: 'Browse treatments →',
      href: 'Treatments.html',
    },
    cta: {
      headline: 'Care that meets you where you are.',
      sub: 'Book a visit at any of our four clinics across Greater Vancouver.',
      primary: 'Book a Visit',
      primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      secondary: 'Find your nearest clinic →',
      secondaryHref: 'Locations.html',
    },

    // Shared chrome for condition detail pages (labels, CTAs)
    detailChrome: {
      breadcrumbHome: 'Conditions',
      breadcrumbHomeHref: 'Conditions.html',
      howEyebrow: 'How TCM can help',
      howFootnoteEyebrow: 'In Chinese medicine',
      treatmentsEyebrow: 'Treatments we often use',
      practitionersEyebrow: 'Practitioners who focus here',
      practitionersBody: 'Practitioners for this area are being added.',
      practitionersLink: 'Meet all practitioners →',
      practitionersHref: 'Practitioners.html',
      whatToExpectEyebrow: 'What to expect',
      faqEyebrow: 'Common questions',
      heroPrimary: 'Book a Visit',
      heroPrimaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      heroSecondary: 'See how we help ↓',
      bookHeadline: (name) => `Book a Visit for ${name}.`,
      bookSub: 'Four clinics across Greater Vancouver — pick the one closest to you.',
      bookPrimary: 'Book a Visit',
      bookPrimaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      bookSecondary: 'Find your nearest clinic →',
      bookSecondaryHref: 'Locations.html',
    },

    // ============================================================
    // CONDITION DETAIL PAGES — keyed by slug. Each entry feeds the
    // shared condition-detail.jsx (7 blocks). Adding a key here and
    // including the slug in `live` above publishes the page.
    // ============================================================
    details: {
      'pain-injury': {
        slug: 'pain-injury',
        name: 'Pain & Injury', nameZh: '疼痛与损伤',
        category: 'Body & Pain', categoryZh: '身体与疼痛',
        kind: 'pain',
        seoTitle: 'Pain & Injury — Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Pain and injury at Canadian Western TCM — acupuncture, tui na, cupping, manual bone setting, floating needle and moxibustion to release muscle and fascia tension, calm the pain response and restore movement and circulation. Educational guide and what to expect.',
        lede: 'Back, neck, shoulder, joint and sports pain — eased with hands-on, time-tested care.',
        howTcm: 'Most everyday pain involves tight muscle and fascia, irritated joints and a nervous system stuck in a guarded state. Acupuncture, tui na, cupping and bone-setting are commonly used to release that tension, calm the pain response and restore movement and circulation — often bringing relief over a short series of visits. We work alongside your medical care, not instead of it.',
        howTcmFootnote: 'In TCM, persistent pain is described as blocked flow that the treatment helps to move.',
        treatments: ['acupuncture', 'tui-na', 'cupping-gua-sha', 'manual-bone-setting', 'floating-needle', 'moxibustion'],
        whatToExpect: 'After an assessment, we plan an individualized course of care. Treatments are often combined — for example, acupuncture with tui na or cupping — and reviewed and adjusted as you respond.',
        whatToExpectFootnote: 'Frequency and duration vary; many people see meaningful change over a short series of visits.',
        faqs: [
          {
            q: 'Does it hurt?',
            a: 'Most people feel only a small pinch from acupuncture, followed by a heavy or warm sensation. Bodywork pressure is always adjusted to your comfort — tell your practitioner what feels like too much.',
          },
          {
            q: 'How many sessions?',
            a: 'It varies. For many everyday-pain complaints, a short series works well; your practitioner reassesses and adjusts as you go.',
          },
          {
            q: 'Is it covered by insurance?',
            a: 'Acupuncture and registered massage therapy are commonly eligible under extended health benefits, and after a motor-vehicle accident under ICBC.',
          },
        ],
      },

      'icbc-recovery': {
        slug: 'icbc-recovery',
        name: 'ICBC Recovery', nameZh: '车祸康复',
        category: 'Body & Pain', categoryZh: '身体与疼痛',
        kind: 'icbc',
        seoTitle: 'ICBC Recovery & Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Recovery after a motor-vehicle accident at Canadian Western TCM — registered acupuncture and related therapies commonly used to ease neck, back and shoulder pain, stiffness, headaches and sleep difficulties, and to support return to movement. Educational guide.',
        lede: 'Recovering from a motor-vehicle accident — supportive care for whiplash, strains and stiffness.',
        howTcm: 'After a collision, neck, back and shoulder pain, stiffness, headaches and trouble sleeping are common. Registered acupuncture and related therapies are commonly used to ease pain and tension and support recovery and mobility. In British Columbia, ICBC recognises treatment by registered practitioners — we can help you understand the process.<br/><br/><strong>ICBC coverage by clinic</strong><table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:0.92em;"><thead><tr style="text-align:left;border-bottom:1px solid var(--sepia-300);"><th style="padding:8px 12px 8px 0;">Clinic</th><th style="padding:8px 12px;">Acupuncture</th><th style="padding:8px 12px;">Massage (RMT)</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--sepia-100);"><td style="padding:8px 12px 8px 0;">Richmond</td><td style="padding:8px 12px;">Direct-billed to ICBC</td><td style="padding:8px 12px;">Direct-billed to ICBC</td></tr><tr style="border-bottom:1px solid var(--sepia-100);"><td style="padding:8px 12px 8px 0;">Burnaby</td><td style="padding:8px 12px;">Direct-billed to ICBC</td><td style="padding:8px 12px;">Direct-billed to ICBC</td></tr><tr style="border-bottom:1px solid var(--sepia-100);"><td style="padding:8px 12px 8px 0;">Vancouver</td><td style="padding:8px 12px;">Direct-billed to ICBC</td><td style="padding:8px 12px;">Available (not billed to ICBC)</td></tr><tr><td style="padding:8px 12px 8px 0;">White Rock</td><td style="padding:8px 12px;">Direct-billed to ICBC</td><td style="padding:8px 12px;">Direct-billed to ICBC</td></tr></tbody></table>',
        howTcmFootnote: null,
        treatments: ['acupuncture', 'tui-na', 'manual-bone-setting', 'floating-needle', 'cupping-gua-sha'],
        whatToExpect: 'After an assessment of your injuries and any ICBC paperwork, we plan an individualized course of care. Sessions often combine acupuncture with bodywork — adjusted as you recover and return to activity.',
        whatToExpectFootnote: 'Frequency and duration vary by injury and case.',
        faqs: [
          {
            q: 'Is acupuncture covered by ICBC?',
            a: 'Yes — registered acupuncture is recognised by ICBC for treatment after a motor-vehicle accident.',
          },
          {
            q: 'Do I need a referral?',
            a: 'You can book with us directly — for ICBC claims, contact the clinic and our front desk will guide you through the current intake process.',
          },
          {
            q: 'How soon after the accident should I come in?',
            a: 'As soon as you feel ready. Early care is commonly used to ease pain and stiffness and to support recovery.',
          },
        ],
      },

      'headaches-migraines': {
        slug: 'headaches-migraines',
        name: 'Headaches & Migraines', nameZh: '头痛与偏头痛',
        category: 'Body & Pain', categoryZh: '身体与疼痛',
        kind: 'headaches',
        seoTitle: 'Headaches & Migraines — Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Headaches and migraines at Canadian Western TCM — acupuncture, head therapy and bodywork commonly used to ease neck and shoulder tension, support the nervous system and reduce the frequency and intensity of headaches over a course of care. Educational guide.',
        lede: 'Tension headaches and migraines — calmer, less often, with steady care.',
        howTcm: 'Headaches often build from neck and shoulder tension, stress, poor sleep and screen strain. Acupuncture, head therapy and bodywork are commonly used to ease that tension and support the nervous system; many people find their headaches become less frequent or less intense over a course of care. We work alongside any medical management of migraine.',
        howTcmFootnote: null,
        treatments: ['acupuncture', 'tui-na', 'head-therapy', 'floating-needle'],
        whatToExpect: 'After an intake (including your headache patterns, sleep and triggers), we plan an individualized course of care. Treatments are often combined — for example, acupuncture with head therapy or bodywork — and reviewed as your headaches change.',
        whatToExpectFootnote: 'Frequency and duration vary; many people notice change over a short series of visits.',
        faqs: [
          {
            q: 'Can acupuncture help migraines?',
            a: 'Acupuncture is commonly used to support people with migraines — many find their headaches become less frequent or less intense over a course of care. Results vary, and we work alongside any medical management of migraine.',
          },
          {
            q: 'How many sessions will I need?',
            a: 'It varies. For headaches, a short series is common, with the practitioner reassessing as you respond.',
          },
          {
            q: 'Should I keep my migraine medication?',
            a: 'Yes — please continue any medication and management plan with your doctor. We complement, not replace, medical care.',
          },
        ],
      },

      'sleep-stress': {
        slug: 'sleep-stress',
        name: 'Sleep & Stress', nameZh: '睡眠与压力',
        category: 'Internal & Wellness', categoryZh: '内调与养护',
        kind: 'sleep',
        seoTitle: 'Sleep & Stress — Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Sleep and stress at Canadian Western TCM — acupuncture, head therapy and tailored herbal formulas commonly used to calm an over-active stress response and support sleep, with steady improvement as the aim. Educational guide and what to expect.',
        lede: 'Insomnia, restlessness and burnout — a calmer nervous system, better rest.',
        howTcm: 'Trouble falling or staying asleep, a racing mind and the wrung-out feeling of burnout often go together. Acupuncture and head therapy are commonly used to calm an over-active stress response and support sleep, and herbal formulas may be tailored to your pattern. The aim is steady improvement you keep — not just one good night.',
        howTcmFootnote: 'In TCM this is described as settling the <em>shen</em> (mind-spirit) and rebalancing.',
        treatments: ['acupuncture', 'head-therapy', 'herbal-medicine'],
        whatToExpect: 'After an intake (sleep patterns, stress, history), we plan an individualized course of care. Sessions often combine acupuncture with head therapy, and may include a tailored herbal formula reviewed at follow-ups.',
        whatToExpectFootnote: 'Steady, gradual change is the aim; frequency and duration vary.',
        faqs: [
          {
            q: 'How soon will I sleep better?',
            a: 'It varies. Some people notice change quickly; for most, improvement is gradual over a short series of visits. The aim is steady improvement you keep — not just one good night.',
          },
          {
            q: 'Will I need herbal formulas as well?',
            a: 'Sometimes. Herbal formulas may be tailored to your pattern and reviewed at follow-ups.',
          },
          {
            q: 'Can I keep my sleep medication?',
            a: 'Yes — please continue any medication and management plan with your doctor. We work alongside your medical care, not in place of it.',
          },
        ],
      },

      'womens-health': {
        slug: 'womens-health',
        name: "Women's Health", nameZh: '妇科健康',
        category: 'Women & Skin', categoryZh: '女性与皮肤',
        kind: 'womens',
        seoTitle: "Women's Health & Traditional Chinese Medicine | Canadian Western TCM",
        seoDescription: "Women's health at Canadian Western TCM — acupuncture, moxibustion and tailored herbal formulas commonly used to support cycle regularity, ease discomfort and steady mood and sleep through hormonal change. Educational guide, always alongside your medical care.",
        lede: "Cycles, menopause and women's concerns — steady, individualized care.",
        howTcm: "Irregular or painful cycles, PMS, and the changes of perimenopause and menopause are areas many women seek TCM for. Acupuncture, moxibustion and tailored herbal formulas are commonly used to support cycle regularity, ease discomfort and steady mood and sleep through hormonal change — always alongside your medical care.",
        howTcmFootnote: null,
        treatments: ['acupuncture', 'moxibustion', 'herbal-medicine'],
        whatToExpect: 'After a careful intake (cycle history, sleep, stress and any medical care you are receiving), we plan an individualized course. Sessions often combine acupuncture with moxibustion, and a herbal formula may be tailored and reviewed at follow-ups.',
        whatToExpectFootnote: 'Frequency and duration vary; we adjust care to the phase of your cycle and to how you respond.',
        faqs: [
          {
            q: 'Can I come during my period?',
            a: 'Generally yes — many treatments are still appropriate during menstruation, and care is adjusted to the phase of your cycle. Please mention where you are in your cycle at intake.',
          },
          {
            q: 'Are herbs safe with my medication?',
            a: 'Please tell us about any medications, supplements and conditions at intake so the practitioner can advise on what is appropriate. We coordinate with your medical care.',
          },
          {
            q: 'Is this only for fertility?',
            a: "No — women's health here covers cycles, PMS, perimenopause and menopause, and general wellbeing. Fertility and pregnancy support is a separate area — see our Fertility & Pregnancy page.",
          },
        ],
      },

      'fertility-pregnancy': {
        slug: 'fertility-pregnancy',
        name: 'Fertility & Pregnancy', nameZh: '备孕与孕产',
        category: 'Women & Skin', categoryZh: '女性与皮肤',
        kind: 'fertility',
        seoTitle: 'Fertility & Pregnancy — Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Fertility, pregnancy and postpartum support at Canadian Western TCM — acupuncture and TCM used as supportive, complementary care alongside your medical team. Not a substitute for fertility or obstetric care; no promises about conception or outcomes.',
        lede: 'Support before, during and after pregnancy — gentle care alongside your medical team.',
        howTcm: 'Many people use acupuncture and TCM as supportive, complementary care while trying to conceive, through pregnancy, and in recovery afterward — for stress, sleep, energy and overall wellbeing. TCM is not a substitute for fertility or obstetric medical care, and we make no promises about conception or outcomes. We coordinate with, and work alongside, your doctor or fertility clinic, and take extra care with what is appropriate at each stage.',
        howTcmFootnote: null,
        treatments: ['acupuncture', 'herbal-medicine'],
        whatToExpect: 'A careful intake covers where you are in your journey, any medical care or fertility treatment you are receiving, and what is appropriate at this stage. Sessions are gentle and coordinated with your medical team; herbal formulas, if used, are chosen carefully for the stage.',
        whatToExpectFootnote: 'We take extra care in pregnancy — certain points, herbs and techniques are avoided. Please always tell us if you are or may be pregnant.',
        faqs: [
          {
            q: 'Is it safe in pregnancy?',
            a: 'Certain approaches are used supportively in pregnancy; others are avoided. We take extra care and coordinate with your medical team. Please always tell us if you are or may be pregnant so we can adjust care.',
          },
          {
            q: 'Will it help me conceive?',
            a: 'We make no such promise. Acupuncture and TCM are used here as supportive, complementary care alongside your medical or fertility team — for stress, sleep, energy and overall wellbeing — not as a substitute for fertility medicine.',
          },
          {
            q: 'Do you work with my fertility clinic?',
            a: 'Yes — we work alongside your doctor or fertility clinic and are happy to coordinate with their plan. Please bring details of any treatment, medication or timing so the practitioner can adjust care.',
          },
        ],
      },

      'skin-acne': {
        slug: 'skin-acne',
        name: 'Skin & Acne', nameZh: '皮肤与痤疮',
        category: 'Women & Skin', categoryZh: '女性与皮肤',
        kind: 'skin',
        seoTitle: 'Skin & Acne — Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Skin and acne at Canadian Western TCM — tailored herbal formulas, acupuncture and aesthetic acupuncture commonly used to support clearer, more balanced skin by addressing underlying patterns (digestion, sleep, stress, hormonal balance) as well as the skin itself.',
        lede: 'Acne, dullness and skin balance — supported from the inside out.',
        howTcm: 'Skin often reflects what is happening inside — digestion, sleep, stress and hormonal balance. Tailored herbal formulas, acupuncture and aesthetic acupuncture are commonly used to support clearer, more balanced skin by addressing those underlying patterns as well as the skin itself. Gradual, whole-person care rather than a quick fix; we work alongside any dermatological treatment.',
        howTcmFootnote: null,
        treatments: ['herbal-medicine', 'acupuncture', 'aesthetic-acupuncture'],
        whatToExpect: 'After an intake (including digestion, sleep, stress and any dermatological care), we plan an individualized course. Treatments are often combined — for example, a herbal formula alongside acupuncture or aesthetic acupuncture — and reviewed at follow-ups.',
        whatToExpectFootnote: 'Skin changes gradually; this is whole-person care, not a quick fix.',
        faqs: [
          {
            q: 'How long until I see a change?',
            a: 'Skin changes gradually. Most people review progress over a course of care rather than a single visit — improvement tends to build alongside changes in digestion, sleep and stress.',
          },
          {
            q: 'Can I keep my dermatology treatment?',
            a: 'Yes — please continue any treatment and follow-up with your dermatologist or doctor. We work alongside dermatological care, not in place of it.',
          },
          {
            q: 'Is aesthetic acupuncture the same as Botox?',
            a: 'No. Aesthetic acupuncture uses very fine acupuncture needles and is part of a whole-person TCM approach — it is not a cosmetic injection and works differently.',
          },
        ],
      },

      digestion: {
        slug: 'digestion',
        name: 'Digestion', nameZh: '消化调理',
        category: 'Internal & Wellness', categoryZh: '内调与养护',
        kind: 'digestion',
        seoTitle: 'Digestion & Traditional Chinese Medicine | Canadian Western TCM',
        seoDescription: 'Digestion at Canadian Western TCM — acupuncture, moxibustion and tailored herbal formulas commonly used to support digestive comfort and regularity, with attention to stress and sleep. We complement, not replace, medical investigation of digestive symptoms.',
        lede: 'Bloating, appetite and gut comfort — gentle support for everyday digestion.',
        howTcm: 'Bloating, irregular appetite, sluggish digestion and discomfort after eating are common and wearing. Acupuncture, moxibustion and tailored herbal formulas are commonly used to support digestive comfort and regularity, often with attention to stress and sleep, which are closely linked to the gut. We complement, not replace, medical investigation of digestive symptoms.',
        howTcmFootnote: null,
        treatments: ['acupuncture', 'moxibustion', 'herbal-medicine'],
        whatToExpect: 'After an intake (including diet, sleep and stress), we plan an individualized course of care. Sessions often combine acupuncture with moxibustion, and a herbal formula may be tailored and reviewed at follow-ups.',
        whatToExpectFootnote: 'Frequency and duration vary; please continue any medical investigation alongside our care.',
        faqs: [
          {
            q: 'Should I still see my doctor?',
            a: 'Yes. TCM works alongside medical care — please continue any tests, treatment and follow-up with your doctor. We complement, not replace, medical investigation of digestive symptoms.',
          },
          {
            q: 'Does it involve dietary changes?',
            a: "Often we'll talk about meal patterns, timing and a few small adjustments alongside the treatment — kept practical for everyday life.",
          },
          {
            q: 'Will I need herbal formulas?',
            a: 'Sometimes. A tailored herbal formula may be reviewed at follow-ups.',
          },
        ],
      },
    },
  },
  bookAtClinic: 'Book at this clinic',
  journalViewAll: 'View all articles →',
  scanWechat: 'Scan to add us on WeChat',
  footer: {
    tagline: ['Heritage medicine, attentively practised', 'across Greater Vancouver since 2019.'],
    columns: {
      locations: 'Locations',
      treatments: 'Treatments',
      conditions: 'Conditions',
      resources: 'Practitioners & Resources',
      connected: 'Stay Connected',
    },
    resourceLinks: [
      'About', 'Browse the full team', 'The Journal', 'FAQ', 'First Visit Guide',
      'ICBC Insurance', 'Contact',
    ],
    viewAll: 'View all →',
    treatmentNames: [
      'Acupuncture', 'Tui Na', 'Manual Bone Setting', 'Moxibustion',
      'Cupping & Gua Sha', 'Head Therapy', 'Herbal Medicine', 'Aesthetic Acupuncture',
    ],
    conditionNames: [
      'Pain & Injury', 'ICBC Recovery', 'Sleep & Stress', 'Digestion',
      "Women's Health", 'Fertility & Pregnancy', 'Skin & Acne', 'Headaches & Migraines',
    ],
    legal: ['Privacy Policy', 'Terms of Service', 'Cancellation Policy', 'Cookie Policy'],
    copyright: '© 2026 Canadian Western TCM Clinic',
  },
  locator: {
    eyebrow: 'Our Clinics',
    h1: 'Four clinics, held to the highest standard of care.',
    intro: "We've grown to four clinics across Greater Vancouver — each with its own character, all held to the same standard: registered practitioners, single-use needles, herbal medicine dispensed on site, and care offered in both English and Chinese.",
    cards: [
      {
        key: 'richmond',
        city: 'Richmond',
        photo: 'assets/locations/hero-richmond-reception-1.jpg',
        alt: 'Reception and herbal cabinet at Canadian Western TCM Richmond clinic',
        caption: 'Our flagship, on Cooney Road',
        address: '5611 Cooney Rd #130, Richmond, BC V6X 3J6',
        phone: '(604) 285-5778',
        href: 'Locations-Richmond.html',
      },
      {
        key: 'burnaby',
        city: 'Burnaby',
        photo: 'assets/locations/hero-burnaby-exterior-day.jpg',
        alt: 'Canadian Western TCM Burnaby clinic storefront by day on Kingsway',
        caption: 'On the Kingsway corridor',
        address: '5665 Kingsway #125, Burnaby, BC V5H 2G4',
        phone: '(604) 423-9633',
        href: 'Locations-Burnaby.html',
      },
      {
        key: 'vancouver',
        city: 'Vancouver',
        photo: 'assets/locations/hero-vancouver-exterior-day.jpg',
        alt: 'Canadian Western TCM Vancouver clinic entrance on West Broadway',
        caption: 'Kitsilano, on West Broadway',
        address: '3652 West Broadway, Vancouver, BC V6R 2B7',
        phone: '(778) 323-6356',
        href: 'Locations-Vancouver.html',
      },
      {
        key: 'whiterock',
        city: 'White Rock',
        photo: 'assets/locations/hero-whiterock-exterior-day.jpg',
        alt: 'Canadian Western TCM White Rock clinic storefront on Johnston Road',
        caption: 'By the pier on Johnston Road',
        address: '1549 Johnston Rd, White Rock, BC V4B 3Z6',
        phone: '(604) 560-6399',
        href: 'Locations-WhiteRock.html',
      },
    ],
    viewClinic: 'View this clinic →',
    standardEyebrow: 'The same care, wherever you visit',
    standardPoints: [
      'BC-registered practitioners',
      'Single-use needles & clean linens',
      'Herbal pharmacy & on-site decoction',
      'ICBC & insurance reimbursement',
    ],
    ctaLine: 'Find the clinic nearest you and book a visit.',
    ctaPrimary: 'Book a Visit',
    mapTitle: 'Greater Vancouver',
    mapCaption: 'Four clinics across the region',
  },
  richmond: {
    priceList: {
      eyebrow: 'Services & Rates',
      h2: 'Richmond services & pricing.',
      groups: [
        { title: 'Traditional Wellness Treatments',
          note: 'Member packages are 50-minute sessions. Prices before tax — 5% GST applies.',
          items: [
            { name: 'Tuina Massage', price: '$120', dur: '50 min', pkg: 'Member package $960 / 10 sessions' },
            { name: 'Moxibustion', price: '$120', dur: '50 min', pkg: 'Member package $960 / 10 sessions' },
            { name: 'Musculoskeletal Therapy', price: '$120', dur: '50 min', pkg: 'Member package $960 / 10 sessions' },
            { name: 'Cupping', price: '$60 / session', pkg: 'Complimentary with member combined treatments' },
            { name: 'Gua Sha', price: '$60 / session', pkg: 'Complimentary with member combined treatments' },
            { name: 'Fire Dragon / Fu Yang Moxibustion', price: '$220', dur: '90 min', pkg: 'Packages $580 / 3 · $1080 / 6 · $1480 / 9' },
            { name: 'Head Therapy', price: '$120', dur: '50 min', pkg: 'Member package $960 / 10 sessions' },
            { name: 'Full-Body Lymphatic Drainage', price: '$240', dur: '120 min', pkg: 'Member package $1920 / 10 sessions' },
            { name: 'Herbal Steam Cabin', price: '$88', dur: '40 min', pkg: 'Member package $600 / 10 sessions' },
            { name: 'Moxibustion Dry-Heat Cabin', price: '$88', dur: '40 min', pkg: 'Member package $600 / 10 sessions' },
            { name: 'Bioelectric Therapy', price: '$180', dur: '75 min', pkg: 'Member package $1450 / 10 sessions' },
            { name: 'Breast Wellness Therapy', price: '$180', dur: '75 min', pkg: 'Member package $1450 / 10 sessions' },
          ] },
        { title: 'Registered Care',
          note: 'Registered-practitioner services are single-visit only — no prepaid packages.',
          items: [
            { name: 'Acupuncture', price: '$120', dur: '50 min' },
            { name: 'Registered Massage Therapy (RMT)', price: '$125 + GST', dur: '50 min' },
            { name: 'Initial TCM Consultation & Pulse Diagnosis', price: '$35 + GST / visit', pkg: 'Herbal medicine billed separately' },
            { name: 'Follow-up TCM Consultation', price: '$35 + GST / visit', pkg: 'Same practitioner · fee waived with herbal prescription' },
          ] },
      ],
      footnote: 'Rates apply to our Richmond and Burnaby clinics and are subject to change. For insurance and direct-billing questions, please ask our front desk.',
    },
    hero: {
      photo: 'assets/locations/richmond/hero-richmond-reception-1.jpg',
      alt: 'Reception at Canadian Western TCM Richmond flagship clinic',
      eyebrow: 'Richmond · Flagship Clinic',
      h1: 'Richmond',
      sub: 'Where Canadian Western TCM began.',
      chips: ['Open 7 days', 'ICBC — acupuncture & massage (RMT)', 'Full herbal pharmacy'],
      primary: 'Book a Visit',
      primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      primaryTarget: '_blank',
      secondary: 'Get directions',
    },
    story: {
      eyebrow: 'The flagship',
      body: "Our Richmond flagship is where the clinic began. Behind the reception sits a full traditional herbal pharmacy — a wall of more than a hundred wooden drawers, each holding a different herb, weighed, dispensed and decocted on site. It's the location that best expresses who we are: heritage medicine, practised to modern Canadian standards, in a space that feels calm and welcoming.",
      photo: 'assets/heritage/hero-richmond-herbal-cabinet-baizigui.jpg',
      alt: 'Traditional herbal medicine cabinet wall at Canadian Western TCM Richmond',
    },
    info: {
      eyebrow: 'Visit Richmond',
      addressLabel: 'Address',
      address: '5611 Cooney Rd. #130, Richmond, BC V6X 3J6',
      hoursLabel: 'Hours',
      hours: 'Mon–Sun  10:00–18:30',
      hoursNote: 'Holiday hours may vary; calling ahead recommended.',
      phoneLabel: 'Phone',
      phone: '(604) 285-5778',
      transitLabel: 'Parking & transit',
      transit: '8–12 min walk to Lansdowne or Richmond-Brighouse Canada Line stations · on-site visitor parking (paid)',
      mapSrc: 'https://www.google.com/maps?q=5611+Cooney+Rd+%23130,+Richmond,+BC+V6X+3J6&output=embed',
      mapIframeTitle: 'Map of Canadian Western TCM Richmond clinic',
      directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=5611+Cooney+Rd+%23130,+Richmond,+BC+V6X+3J6',
      directionsLabel: 'Get directions →',
    },
    gallery: {
      eyebrow: 'Inside the clinic',
      h2: 'A look around.',
      cards: [
        { photo: 'assets/locations/richmond/hero-richmond-herbal-vessel-corridor.jpg', alt: 'Herbal vessel display corridor at Canadian Western TCM Richmond' },
        { photo: 'assets/locations/richmond/hero-richmond-consultation-room.jpg', alt: 'TCM consultation room at Canadian Western TCM Richmond' },
        { photo: 'assets/locations/richmond/gallery-richmond-treatment-room-1.jpg', alt: 'Treatment room at Canadian Western TCM Richmond' },
        { photo: 'assets/locations/richmond/gallery-richmond-interior-1.jpg', alt: 'Waiting area with living plant wall at Canadian Western TCM Richmond clinic' },
        { photo: 'assets/locations/richmond/gallery-richmond-credentials-wall.jpg', alt: 'Registered practitioner credentials at Canadian Western TCM Richmond' },
      ],
    },
    find: {
      eyebrow: 'What you\u2019ll find here',
      h2: 'Practitioners & treatments at Richmond.',
      practitionersTitle: 'Practitioners at our Richmond clinic',
      practitioners: [
        {
          name: 'Taylor Wang',
          badge: 'FOUNDER',
          photo: 'rmd-bby-van-taylor-wang.jpg',
          crop: '50% 25%',
          creds: ['Dr. TCM', 'R.Ac', 'R.Esthetician', 'Founder'],
          subtitle: 'Jiangxi University of TCM · Founder of CWTCM · University Lecturer',
        },
        {
          name: 'Xianyi Hu',
          badge: '50+ YEARS',
          photo: 'rmd-xianyi-hu.jpg',
          crop: '50% 20%',
          creds: ['Dr. TCM', 'R.Ac'],
          subtitle: 'Chengdu University of TCM · Immune disorders · Women\u2019s health',
        },
        {
          name: 'Jake Bai',
          badge: '36 YEARS',
          photo: 'rmd-jack-bai.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P', 'R.Ac'],
          subtitle: 'Beijing University of TCM (Master\u2019s) · Post-surgical · pain · geriatric',
        },
        {
          name: 'Jiabin Nan',
          badge: '30+ YEARS',
          photo: 'rmd-jiabin-nan.jpg',
          crop: '50% 22%',
          creds: ['R.Ac'],
          subtitle: 'Beijing University of Chinese Medicine · 30+ years across Europe & North America',
        },
      ],
      teamCta: { label: 'View all practitioners on our Team page →', href: 'Practitioners.html' },
      services: [
        { name: 'Acupuncture', href: 'Treatments/acupuncture.html' },
        { name: 'Tui Na', href: 'Treatments/tui-na.html' },
        { name: 'Moxibustion', href: 'Treatments/moxibustion.html' },
        { name: 'Cupping & Gua Sha', href: 'Treatments/cupping-gua-sha.html' },
        { name: 'Manual Bone Setting', href: 'Treatments/manual-bone-setting.html' },
        { name: 'Head Therapy', href: 'Treatments/head-therapy.html' },
        { name: 'Aromatherapy', href: 'Treatments.html' },
        { name: 'Herbal Medicine', href: 'Treatments/herbal-medicine.html' },
        { name: 'Aesthetic Acupuncture', href: 'Treatments/aesthetic-acupuncture.html' },
        { name: 'Fu Yang Moxibustion', href: 'Treatments/fuyang-moxibustion.html' },
        { name: 'Acupoint Thread Embedding', href: 'Treatments/thread-embedding.html' },
        { name: 'Xiao Yan Facial Acupuncture', href: 'Treatments/xiaoyan-facial.html' },
        { name: 'Facial Bo Jin', href: 'Treatments/facial-bojin.html' },
        { name: 'TCM Acne Care', href: 'Treatments/tcm-acne.html' },
      ],
    },
    neighbourhood: {
      eyebrow: 'The neighbourhood',
      line: 'In the heart of Richmond, close to Richmond Centre.',
      backLink: 'View our other clinics →',
      backHref: 'Locations.html',
    },
    sticky: {
      call: 'Call',
      book: 'Book',
      directions: 'Directions',
    },
  },
  burnaby: {
    hero: {
      photo: 'assets/locations/burnaby/hero-burnaby-exterior-day.jpg',
      heroCrop: '55% 50%',
      alt: 'Canadian Western TCM Burnaby clinic storefront by day on Kingsway',
      eyebrow: 'Burnaby · On Kingsway',
      h1: 'Burnaby',
      sub: 'On the Kingsway corridor.',
      chips: ['Open 7 days', 'ICBC — acupuncture & massage (RMT)', 'Senior practitioner on site'],
      primary: 'Book a Visit',
      primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      primaryTarget: '_blank',
      secondary: 'Get directions',
    },
    story: {
      eyebrow: 'On Kingsway',
      body: "Our Burnaby clinic sits on the busy Kingsway corridor. By the entrance, a row of illuminated panels names the traditional therapies practised inside — acupuncture, tui na, moxibustion and more. It's a neighbourhood clinic in the best sense: unhurried, experienced, and home to some of our most senior practitioners.",
      photo: 'assets/locations/burnaby/hero-burnaby-exterior-day.jpg',
      alt: 'Daytime storefront of Canadian Western TCM Burnaby clinic on Kingsway',
    },
    info: {
      eyebrow: 'Visit Burnaby',
      addressLabel: 'Address',
      address: '5665 Kingsway #125, Burnaby, BC V5H 2G4',
      hoursLabel: 'Hours',
      hours: 'Mon–Sun  10:00–18:30',
      hoursNote: 'Holiday hours may vary; calling ahead recommended.',
      phoneLabel: 'Phone',
      phone: '(604) 423-9633',
      transitLabel: 'Parking & transit',
      transit: 'On the #19 Kingsway bus route · ~8–10 min walk from Metrotown SkyTrain · shared plaza parking on-site',
      mapSrc: 'https://www.google.com/maps?q=5665+Kingsway+%23125,+Burnaby,+BC+V5H+2G4&output=embed',
      mapIframeTitle: 'Map of Canadian Western TCM Burnaby clinic',
      directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=5665+Kingsway+%23125,+Burnaby,+BC+V5H+2G4',
      directionsLabel: 'Get directions →',
    },
    gallery: {
      eyebrow: 'Inside the clinic',
      h2: 'A look around.',
      cards: [
        { photo: 'assets/locations/burnaby/gallery-burnaby-storefront-day.jpg', alt: 'Daytime exterior of Canadian Western TCM Burnaby clinic' },
        { photo: 'assets/locations/burnaby/hero-burnaby-reception-1.jpg', alt: 'Reception at Canadian Western TCM Burnaby clinic' },
        { photo: 'assets/locations/burnaby/gallery-burnaby-treatment-room-1.jpg', alt: 'Treatment room at Canadian Western TCM Burnaby clinic' },
        { photo: 'assets/locations/burnaby/gallery-burnaby-corridor.jpg', alt: 'Treatment-room corridor at Canadian Western TCM Burnaby clinic' },
        { photo: 'assets/locations/burnaby/gallery-burnaby-interior-1.jpg', alt: 'Interior at Canadian Western TCM Burnaby clinic' },
        { photo: 'assets/locations/burnaby/gallery-burnaby-credentials-wall.jpg', alt: 'Registered practitioner credentials at Canadian Western TCM Burnaby clinic' },
      ],
    },
    find: {
      eyebrow: 'What you\u2019ll find here',
      h2: 'Practitioners & treatments at Burnaby.',
      practitionersTitle: 'Practitioners at our Burnaby clinic',
      practitioners: [
        {
          name: 'Wingho Chan',
          photo: 'bby-wing-ho-chan.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P'],
          subtitle: 'Master of TCM, University of Hong Kong · Integrative herbs & acupuncture',
        },
        {
          name: 'Monica Liu',
          photo: 'bby-monica-liu.jpg',
          crop: '50% 22%',
          creds: ['Registered Acupressure Therapist', 'Rehabilitation Therapist'],
          subtitle: 'Acupressure & rehabilitation therapy · neck, shoulder & lower-back pain',
        },
        {
          name: 'Jasmine Zhang',
          badge: '17 YEARS',
          photo: 'bby-jasmine-zhang.jpg',
          crop: '50% 22%',
          creds: ['R.Ac', 'Moxibustion Therapist'],
          subtitle: 'Moxibustion & acupuncture · women’s, internal & paediatric care',
        },
        {
          name: 'Pearson Zhang',
          photo: 'rmd-bby-pearson-zhang.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P', 'R.Ac'],
          subtitle: 'Root-cause care · neck & back pain · injury rehabilitation',
        },
      ],
      teamCta: { label: 'View all practitioners on our Team page →', href: 'Practitioners.html' },
      services: [
        { name: 'Acupuncture', href: 'Treatments/acupuncture.html' },
        { name: 'Tui Na', href: 'Treatments/tui-na.html' },
        { name: 'Moxibustion', href: 'Treatments/moxibustion.html' },
        { name: 'Cupping & Gua Sha', href: 'Treatments/cupping-gua-sha.html' },
        { name: 'Manual Bone Setting', href: 'Treatments/manual-bone-setting.html' },
        { name: 'Head Therapy', href: 'Treatments/head-therapy.html' },
        { name: 'Aromatherapy', href: 'Treatments.html' },
        { name: 'Herbal Medicine', href: 'Treatments/herbal-medicine.html' },
        { name: 'Aesthetic Acupuncture', href: 'Treatments/aesthetic-acupuncture.html' },
        { name: 'Fire Dragon Moxibustion', href: 'Treatments/fire-dragon-moxibustion.html' },
        { name: 'Acupoint Thread Embedding', href: 'Treatments/thread-embedding.html' },
        { name: 'Xiao Yan Facial Acupuncture', href: 'Treatments/xiaoyan-facial.html' },
        { name: 'Facial Bo Jin', href: 'Treatments/facial-bojin.html' },
        { name: 'TCM Acne Care', href: 'Treatments/tcm-acne.html' },
      ],
    },
    neighbourhood: {
      eyebrow: 'The neighbourhood',
      line: 'On the Kingsway corridor in Burnaby.',
      backLink: 'View our other clinics →',
      backHref: 'Locations.html',
    },
    sticky: {
      call: 'Call',
      book: 'Book',
      directions: 'Directions',
    },
  },
  vancouver: {
    priceList: {
      eyebrow: 'Services & Rates',
      h2: 'Vancouver services & pricing.',
      lede: 'Professional, comprehensive and personalized care — Traditional Chinese Medicine combined with modern rehabilitation, with a treatment plan tailored to every patient.',
      items: [
        { name: 'Acupuncture', price: '$120', dur: '50 min' },
        { name: 'Chinese Tuina Massage', price: '$100 + tax', dur: '50 min' },
        { name: 'Registered Massage Therapy (RMT)', price: '$130 + tax', dur: '50 min' },
        { name: 'Cosmetic Acupuncture & TCM Aesthetics', price: '$180 + tax', dur: '75 min' },
        { name: 'Essential Oil Scalp Therapy', price: '$130 + tax', dur: '50 min' },
        { name: 'Traditional Chinese Head Therapy', price: '$130 + tax', dur: '50 min' },
        { name: 'TCM Musculoskeletal Therapy', price: '$100 + tax', dur: '50 min' },
        { name: 'Sports Rehabilitation', price: '$100 + tax', dur: '50 min' },
        { name: 'Postpartum Rehabilitation', price: 'Please inquire' },
        { name: 'Psychological Counselling & Healing', price: '$120 + tax', dur: '50 min' },
        { name: 'Clinical Hypnotherapy', price: '$200 + tax', dur: '100 min' },
        { name: 'Personalized Herbal Medicine (granules)', price: '$1.20 / gram' },
        { name: 'Moxibustion', price: '$100 + tax', dur: '50 min' },
        { name: 'Fu Yang Moxibustion', price: '$220 + tax', dur: '90 min' },
        { name: 'doTERRA Essential Oil Full-Body Massage', price: '$145 + tax', dur: '50 min' },
        { name: 'Manual Lymphatic Drainage', price: '$130 + tax', dur: '50 min' },
        { name: 'Cupping', price: '$100 + tax', dur: '50 min' },
        { name: 'Therapeutic Bloodletting', price: '$100 + tax', dur: '50 min' },
        { name: 'Gua Sha', price: '$100 + tax', dur: '50 min' },
      ],
      footnote: 'Rates apply to the Vancouver (West Broadway) clinic and are subject to change. For insurance and direct-billing questions, please ask our front desk.',
    },
    hero: {
      photo: 'assets/locations/vancouver/hero-vancouver-exterior-day.jpg',
      alt: 'Canadian Western TCM Vancouver clinic entrance on West Broadway',
      eyebrow: 'Vancouver · Kitsilano',
      h1: 'Vancouver',
      sub: 'On West Broadway, in the heart of Kitsilano.',
      chips: ['Open 7 days', 'ICBC — acupuncture', 'Musculoskeletal & sports recovery'],
      primary: 'Book a Visit',
      primaryHref: 'https://canadianwesterntcmclinic.janeapp.com',
      primaryTarget: '_blank',
      secondary: 'Get directions',
    },
    story: {
      eyebrow: 'West Side',
      body: "Our Vancouver clinic sits on West Broadway, in the heart of Kitsilano \u2014 our home on the city's west side. It's a calm, welcoming space offering the full range of traditional treatments, with practitioners experienced in musculoskeletal and sports recovery.",
      photo: 'assets/locations/vancouver/gallery-vancouver-corridor-bright.jpg',
      alt: 'Reception at Canadian Western TCM Vancouver clinic',
    },
    info: {
      eyebrow: 'Visit Vancouver',
      addressLabel: 'Address',
      address: '3652 West Broadway, Vancouver, BC V6R 2B7',
      hoursLabel: 'Hours',
      hours: 'Mon\u2013Sun  10:00\u201318:30',
      hoursNote: 'Holiday hours may vary; calling ahead recommended.',
      phoneLabel: 'Phone',
      phone: '(778) 323-6356',
      transitLabel: 'Parking & transit',
      transit: 'On the #14 & #9 bus routes along West Broadway · metered street parking',
      mapSrc: 'https://www.google.com/maps?q=3652+West+Broadway,+Vancouver,+BC+V6R+2B7&output=embed',
      mapIframeTitle: 'Map of Canadian Western TCM Vancouver clinic',
      directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=3652+West+Broadway,+Vancouver,+BC+V6R+2B7',
      directionsLabel: 'Get directions \u2192',
    },
    gallery: {
      eyebrow: 'Inside the clinic',
      h2: 'A look around.',
      cards: [
        { photo: 'assets/locations/vancouver/gallery-vancouver-corridor-bright.jpg', alt: 'Treatment-room corridor at Canadian Western TCM Vancouver clinic' },
        { photo: 'assets/locations/vancouver/gallery-vancouver-interior-1.jpg', alt: 'Interior at Canadian Western TCM Vancouver clinic' },
        { photo: 'assets/locations/vancouver/gallery-vancouver-interior-2.jpg', alt: 'Treatment space at Canadian Western TCM Vancouver clinic' },
        { photo: 'assets/locations/vancouver/gallery-vancouver-waiting-area.jpg', alt: 'Waiting area at Canadian Western TCM Vancouver clinic' },
        { photo: 'assets/locations/vancouver/gallery-vancouver-storefront-glass.jpg', alt: 'Storefront on West Broadway at Canadian Western TCM Vancouver clinic' },
      ],
    },
    find: {
      eyebrow: 'What you\u2019ll find here',
      h2: 'Practitioners & treatments at Vancouver.',
      practitionersTitle: 'Practitioners at our Vancouver clinic',
      practitioners: [
        {
          name: 'Taylor Wang',
          badge: 'FOUNDER',
          photo: 'rmd-bby-van-taylor-wang.jpg',
          crop: '50% 25%',
          creds: ['Dr. TCM', 'R.Ac', 'R.Esthetician', 'Founder'],
          subtitle: 'Jiangxi University of TCM · Founder of CWTCM · Visits Vancouver',
        },
        {
          name: 'William Wang',
          photo: 'van-william-wang.jpg',
          crop: '50% 22%',
          creds: ['R.Ac', 'Senior Rehabilitation Therapist'],
          subtitle: 'Acupuncture & acupoint Tuina · holistic pulse, facial & abdominal diagnosis',
        },
        {
          name: 'Shirley Zhu',
          photo: 'van-shirley-zhu.jpg',
          crop: '50% 25%',
          creds: ['R.TCM.P', 'R.Ac', 'Registered Aromatherapist (North America)'],
          subtitle: 'From a distinguished TCM family · Beijing International SOS Clinic',
        },
        {
          name: 'Lynn Liu',
          photo: 'van-rmd-lynn-liu.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P', 'Master of TCM'],
          subtitle: 'Nanjing University of Chinese Medicine · nearly 20 years in clinical rehabilitation',
        },
      ],
      teamCta: { label: 'View all practitioners on our Team page →', href: 'Practitioners.html' },
      servicesTitle: 'Services offered here',
      services: [
        { name: 'Acupuncture', href: 'Treatments/acupuncture.html' },
        { name: 'Tui Na', href: 'Treatments/tui-na.html' },
        { name: 'Moxibustion', href: 'Treatments/moxibustion.html' },
        { name: 'Cupping & Gua Sha', href: 'Treatments/cupping-gua-sha.html' },
        { name: 'Manual Bone Setting', href: 'Treatments/manual-bone-setting.html' },
        { name: 'Head Therapy', href: 'Treatments/head-therapy.html' },
        { name: 'Aromatherapy', href: 'Treatments.html' },
        { name: 'Herbal Medicine', href: 'Treatments/herbal-medicine.html' },
        { name: 'Aesthetic Acupuncture', href: 'Treatments/aesthetic-acupuncture.html' },
        { name: 'Lymphatic Drainage', href: 'Treatments.html' },
        { name: 'Sports Rehabilitation', href: 'Treatments.html' },
        { name: 'Fu Yang Moxibustion', href: 'Treatments/fuyang-moxibustion.html' },
        { name: 'Acupoint Thread Embedding', href: 'Treatments/thread-embedding.html' },
        { name: 'Xiao Yan Facial Acupuncture', href: 'Treatments/xiaoyan-facial.html' },
        { name: 'Facial Bo Jin', href: 'Treatments/facial-bojin.html' },
        { name: 'TCM Acne Care', href: 'Treatments/tcm-acne.html' },
        { name: 'Counselling', href: 'Treatments/counselling.html' },
      ],
    },
    neighbourhood: {
      eyebrow: 'The neighbourhood',
      line: "On West Broadway in Kitsilano, Vancouver's west side.",
      backLink: 'View our other clinics →',
      backHref: 'Locations.html',
    },
    sticky: {
      call: 'Call',
      book: 'Book',
      directions: 'Directions',
    },
  },
  whiterock: {
    hero: {
      photo: 'assets/locations/whiterock/hero-whiterock-storefront.jpg',
      heroCrop: '70% 60%',
      alt: 'Canadian Western TCM White Rock clinic storefront on Johnston Road',
      eyebrow: 'White Rock · By the Pier',
      h1: 'White Rock',
      sub: "By the pier on Johnston Road \u2014 Canada\u2019s first Floating Needle clinic.",
      chips: ['Floating Needle demonstration clinic', 'ICBC — acupuncture & massage (RMT)', 'Open 7 days'],
      primary: 'Book a Visit',
      primaryHref: 'https://cwtcm.janeapp.com/',
      primaryTarget: '_blank',
      secondary: 'Get directions',
    },
    story: {
      eyebrow: 'The flagship of Floating Needle',
      body: "Our White Rock clinic sits by the pier on Johnston Road \u2014 and it\u2019s a place apart. It is Canada\u2019s first dedicated Floating Needle (\u6d6e\u9488) demonstration clinic, a modern, near-painless technique for muscular and myofascial pain. It has its own home online, too: a dedicated White Rock site with the full team, services and online booking.",
      photo: 'assets/locations/whiterock/gallery-whiterock-emblem-fsn-cert.jpg',
      alt: 'Floating Needle demonstration base certificate and brand emblem at Canadian Western TCM White Rock clinic',
    },
    info: {
      eyebrow: 'Visit White Rock',
      addressLabel: 'Address',
      address: '1549 Johnston Rd, White Rock, BC V4B 3Z6',
      hoursLabel: 'Hours',
      hours: 'Mon–Sun 9:30–19:00',
      hoursNote: 'Holiday hours may vary; calling ahead recommended.',
      phoneLabel: 'Phone',
      phone: '(604) 560-6399',
      transitLabel: 'Parking & transit',
      transit: 'Steps from White Rock Centre bus exchange (routes to Surrey Central & Bridgeport SkyTrain) · metered street + nearby paid lot parking',
      mapSrc: 'https://www.google.com/maps?q=1549+Johnston+Rd,+White+Rock,+BC+V4B+3Z6&output=embed',
      mapIframeTitle: 'Map of Canadian Western TCM White Rock clinic',
      directionsHref: 'https://www.google.com/maps/dir/?api=1&destination=1549+Johnston+Rd,+White+Rock,+BC+V4B+3Z6',
      directionsLabel: 'Get directions \u2192',
    },
    gallery: {
      eyebrow: 'Inside the clinic',
      h2: 'A look around.',
      cards: [
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-reception.jpg',
          alt: 'Stone reception desk at Canadian Western TCM White Rock clinic',
          caption: 'Reception at White Rock',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-fsn-association.jpg',
          alt: "Fu's Subcutaneous Needling Association of Canada facade at Canadian Western TCM White Rock",
          caption: 'Home of the FSN Association of Canada',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-fsn-needle.jpg',
          alt: 'Floating Needle (FSN) therapy in progress at White Rock',
          caption: 'Floating Needle therapy in progress',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-treatment-room.jpg',
          alt: 'Bright treatment room at Canadian Western TCM White Rock clinic',
          caption: 'A treatment room',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-treatment.jpg',
          alt: 'Practitioner treating neck and shoulder at White Rock clinic',
          caption: 'Neck & shoulder care',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-guasha.jpg',
          alt: 'Gua sha treatment at White Rock clinic',
          caption: 'Gua sha in session',
        },
        {
          photo: 'assets/locations/whiterock/gallery-whiterock-consultation.jpg',
          alt: 'Pulse diagnosis during consultation at White Rock clinic',
          caption: 'Pulse diagnosis at intake',
        },
      ],
    },
    find: {
      eyebrow: 'What you\u2019ll find here',
      h2: 'Practitioners & treatments at White Rock.',
      practitionersTitle: 'Practitioners at our White Rock clinic',
      practitioners: [
        {
          name: 'Taylor Wang',
          badge: 'FOUNDER',
          photo: 'rmd-bby-van-taylor-wang.jpg',
          crop: '50% 25%',
          creds: ['Dr. TCM', 'R.Ac', 'R.Esthetician', 'Founder'],
          subtitle: 'Jiangxi University of TCM · Founder of CWTCM',
        },
        {
          name: 'Di Wu',
          badge: 'WHITE ROCK FOUNDER',
          photo: 'wr-di-wu.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P', 'Floating Needle Instructor'],
          subtitle: 'President, ATCMA & FSNAC · KPU instructor · 30 years in China & Canada',
        },
        {
          name: 'Su Zhang',
          photo: 'wr-su-zhang.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P'],
          subtitle: 'Pulse diagnosis · complex cases · women\u2019s & men\u2019s health · respiratory',
        },
        {
          name: 'Vivian Chen',
          photo: 'wr-vivian-chen.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P', 'R.Ac', 'TCM Family Lineage'],
          subtitle: 'Pain & sports injuries · menopause & puberty care · pediatric Tuina',
        },
        {
          name: 'Cathy Luo',
          photo: 'wr-cathy-luo.jpg',
          crop: '50% 22%',
          creds: ['R.TCM.P'],
          subtitle: 'Emotional balance · TCM eye care · facial acupuncture · post-chemo support',
        },
      ],
      teamCta: { label: 'View all practitioners on our Team page \u2192', href: 'Practitioners.html' },
      servicesTitle: 'Services offered here',
      services: [
        { name: 'Floating Needle', href: 'Treatments/floating-needle.html' },
        { name: 'Acupuncture', href: 'Treatments/acupuncture.html' },
        { name: 'Tui Na', href: 'Treatments/tui-na.html' },
        { name: 'Moxibustion', href: 'Treatments/moxibustion.html' },
        { name: 'Cupping & Gua Sha', href: 'Treatments/cupping-gua-sha.html' },
        { name: 'Manual Bone Setting', href: 'Treatments/manual-bone-setting.html' },
        { name: 'Head Therapy', href: 'Treatments/head-therapy.html' },
        { name: 'Herbal Medicine', href: 'Treatments/herbal-medicine.html' },
        { name: 'Fu Yang Moxibustion', href: 'Treatments/fuyang-moxibustion.html' },
        { name: 'Acupoint Thread Embedding', href: 'Treatments/thread-embedding.html' },
        { name: 'Xiao Yan Facial Acupuncture', href: 'Treatments/xiaoyan-facial.html' },
        { name: 'Facial Bo Jin', href: 'Treatments/facial-bojin.html' },
        { name: 'TCM Acne Care', href: 'Treatments/tcm-acne.html' },
      ],
    },
    neighbourhood: {
      eyebrow: 'The neighbourhood',
      line: 'By the pier on Johnston Road, in the heart of White Rock.',
      backLink: 'View our other clinics →',
      backHref: 'Locations.html',
    },
    featureBand: {
      eyebrow: 'Dedicated site',
      headline: 'White Rock has its own home online.',
      body: 'A complete site for the White Rock team — Floating Needle specialty, full roster, services and online booking.',
      cta: 'Visit our White Rock site →',
      ctaHref: 'https://whiterock.cwtcm.ca/',
      ctaTarget: '_blank',
    },
    sticky: {
      call: 'Call',
      book: 'Book',
      directions: 'Directions',
    },
  },
};

STRINGS.customerCare = {
  en: { title: 'Customer Care Team', subtitle: 'Front-of-house · Bilingual care from your first call', roleLine: 'Customer Care', photoComingSoon: 'Photo coming soon' },
  zh: { title: '客服团队', subtitle: '前台 · 中英双语接待', roleLine: '客服团队 · Customer Care', photoComingSoon: '照片即将上线' },
  photosReady: true, // all 5 reception portraits uploaded
  availablePhotos: [],
  list: [
    { slug: 'angel-lai', name: 'Angel Lai', clinics: ['Richmond'], role: 'Front Desk Supervisor', photo: 'reception-rmd-angel-lai.jpg' },
    { slug: 'serena-chen', name: 'Serena Chen', clinics: ['Burnaby'], role: 'Front Desk Supervisor', photo: 'reception-bby-serena-chen.jpg' },
    { slug: 'ivy-chen', name: 'Ivy Chen', clinics: ['Vancouver'], role: 'Front Desk Supervisor', photo: 'reception-van-ivy-chen.jpg' },
    { slug: 'eunice-zhang', name: 'Eunice Zhang', clinics: ['White Rock'], role: 'Front Desk Supervisor', photo: 'reception-wr-eunice-zhang.jpg' },
    { slug: 'stephanie-yan', name: 'Stephanie Yan', clinics: ['Burnaby'], photo: 'reception-bby-stephanie-yan.jpg' },
    { slug: 'shasha-wang', name: 'Sasha Wang', clinics: ['Vancouver'], photo: 'reception-van-shasha-wang.jpg' },
    { slug: 'lizzie-ma', name: 'Lizzie Ma', clinics: ['Richmond', 'Burnaby'], photo: 'reception-rmd-bby-lizzie-ma.jpg' },
    { slug: 'mani-tan', name: 'Mani Tan', clinics: ['Richmond', 'Burnaby'], photo: 'reception-rmd-bby-mani-tan.jpg' },
    { slug: 'jessica-zhu', name: 'Jessica Zhu', clinics: ['White Rock'], photo: 'reception-wr-jessica-zhu.jpg' },
    { slug: 'nika-lin', name: 'Nika Lin', clinics: ['White Rock'], photo: 'reception-wr-nika-lin.jpg' },
  ],
};

STRINGS.journalPage = {
  eyebrow: 'Journal',
  title: 'Notes from the clinic, launching soon.',
  body: "Our editorial column is coming soon — TCM 101, conditions in depth, herbs, patient stories, and clinic life. Subscribe to know when the first issue lands.",
  cta: 'Take me to the Practitioners team →',
  ctaHref: 'Practitioners.html',
  expected: 'Coming soon',
};

STRINGS.legalPage = { en: {"hero": {"eyebrow": "Legal", "h1": "Policies & Terms", "sub": "How we handle your information, and the terms of care and booking at Canadian Western TCM."}, "updated": "Last updated: 9 July 2026", "tocLabel": "On this page", "note": "", "sections": [{"id": "privacy", "title": "Privacy Policy", "body": "<p>Canadian Western TCM Clinic (“we”, “us”, “the Clinic”) is committed to protecting the personal information you entrust to us across our four Greater Vancouver clinics. This policy explains what we collect, how we use it, and your rights, in accordance with British Columbia’s <em>Personal Information Protection Act</em> (PIPA).</p><h3>Information we collect</h3><ul><li><strong>Contact details</strong> — name, phone, email, address.</li><li><strong>Health information</strong> — medical history, symptoms, diagnoses, treatment records, and other information you share so we can provide care.</li><li><strong>Insurance &amp; billing</strong> — extended-health or ICBC claim details needed to process your treatment and billing.</li><li><strong>Appointment &amp; account data</strong> — booking history and your communications with the Clinic.</li><li><strong>Website data</strong> — limited technical and usage information (see our Cookie Policy below).</li></ul><h3>How we use your information</h3><p>We use your information to provide and coordinate your care, schedule appointments, dispense herbal medicine, process insurance and ICBC billing, communicate with you, meet our professional and legal obligations, and improve our services. We collect, use and disclose personal information only for these purposes, or as permitted or required by law.</p><h3>Disclosure</h3><p>We do not sell your personal information. We disclose it only where necessary — for example, to your insurer or ICBC for billing you have authorised, to service providers who help us operate (such as our booking system and payment processor) under confidentiality safeguards, or where required by law or a regulatory body.</p><h3>Your rights</h3><p>Subject to legal and regulatory limits, you may request access to the personal information we hold about you, ask us to correct it, or withdraw consent for uses that are not required for your care or by law. To make a request, contact us.</p><h3>Safeguards</h3><p>We protect your information with reasonable physical, organisational and technical safeguards appropriate to its sensitivity.</p>"}, {"id": "terms", "title": "Terms of Service", "body": "<p>These Terms govern your use of this website and the services of Canadian Western TCM Clinic. By using this website or booking with us, you agree to these Terms.</p><h3>Our services</h3><p>We provide Traditional Chinese Medicine care — including acupuncture, herbal medicine, Tui Na, moxibustion, cupping and related therapies — delivered by practitioners registered in British Columbia. Care is individualised, and outcomes vary from person to person.</p><h3>Not a substitute for emergency or conventional care</h3><p>Our services complement, and do not replace, conventional medical care. <strong>In a medical emergency, call 911</strong> or go to the nearest emergency department. Always consult your physician about serious or worsening conditions and before stopping any prescribed treatment.</p><h3>Website content is educational</h3><p>Information on this website is provided for general education only. It does not constitute medical advice, diagnosis or treatment, and does not create a practitioner–patient relationship. That relationship is formed only through an in-person consultation and assessment at one of our clinics.</p><h3>Booking, fees &amp; payment</h3><p>Appointments may be booked online, by phone or in person. Fees are as posted or quoted at the time of booking. Cancellations are subject to our Cancellation &amp; No-Show Policy below.</p><h3>Intellectual property</h3><p>The content, design and marks on this website belong to Canadian Western TCM Clinic and may not be copied or reused without permission.</p><h3>Limitation of liability</h3><p>To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website. Nothing in these Terms limits any liability that cannot be limited under applicable law.</p><h3>Governing law</h3><p>These Terms are governed by the laws of British Columbia and the applicable laws of Canada.</p><h3>Changes</h3><p>We may update these Terms from time to time; the current version is always posted here.</p>"}, {"id": "cancellation", "title": "Cancellation &amp; No-Show Policy", "body": "<p>We reserve dedicated time for every appointment. To keep care accessible to all patients, we ask for reasonable notice when you need to change or cancel.</p><h3>Notice</h3><p>Please cancel or reschedule at least <strong>24 hours</strong> before your appointment, by phone or through our booking system.</p><h3>Late cancellation &amp; no-shows</h3><p>Cancellations with less than the required notice, and missed appointments (“no-shows”), may be subject to a fee. Repeated no-shows may require prepayment for future bookings.</p><h3>Late arrivals</h3><p>If you arrive late, we will do our best to treat you within the remaining time; your session may be shortened so the next patient is not delayed.</p><h3>ICBC &amp; insurance appointments</h3><p>Missed insurer- or ICBC-related appointments may not be covered by your claim and may be billed to you directly.</p><h3>Exceptions</h3><p>We understand emergencies happen. Fees may be waived at the Clinic’s discretion in genuine emergency or illness situations.</p>"}, {"id": "cookies", "title": "Cookie Policy", "body": "<p>This website uses a small number of cookies and similar technologies to function properly and to remember your preferences.</p><h3>What cookies we use</h3><ul><li><strong>Essential</strong> — required for the site to work and to remember your language choice (English / 中文).</li></ul><p>We do not use cookies for advertising or to sell your information.</p><h3>Managing cookies</h3><p>You can control or delete cookies through your browser settings. Blocking essential cookies may affect how the site works.</p><h3>Consent</h3><p>By continuing to use this website, you consent to our use of cookies as described here.</p>"}]} };


STRINGS.burnaby.priceList = Object.assign({}, STRINGS.richmond.priceList, { h2: 'Burnaby services & pricing.' });
