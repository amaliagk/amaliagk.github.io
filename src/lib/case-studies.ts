export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Render with object-contain on a padded neutral card (logos, marks)
   *  instead of object-cover (photos, full-bleed graphics). */
  contain?: boolean;
};

export type CaseStudyVideo = {
  src: string;
  poster: string;
  /** Poster/display dimensions, for aspect-ratio + CLS avoidance. */
  width: number;
  height: number;
  title: string;
};

export type CaseStudyBeforeAfter = {
  before: CaseStudyImage;
  after: CaseStudyImage;
  /** true = interactive drag-to-compare wipe; false/undefined = labelled pair. */
  slider?: boolean;
};

/** Grouped old/new slide sets shown as two labelled strips. The two sets are a
 *  whole-system comparison, NOT a 1:1 slide-to-slide correspondence. */
export type CaseStudySlideComparison = {
  before: CaseStudyImage[];
  after: CaseStudyImage[];
};

export type CaseStudyYouTube = { id: string; title: string };

/** A website presented as a paired desktop browser window + phone mockup. */
export type CaseStudyWebsiteMockup = {
  /** Displayed in the address bar (e.g. "fhg.global"). */
  url: string;
  /** Optional live link rendered as a "Visit the live site" action. */
  href?: string;
  desktop: CaseStudyImage;
  mobile: CaseStudyImage;
};

/** One campaign concept shown in two formats — the social-media visual and its
 *  Google Ads adaptation — paired side by side so they read as the same idea. */
export type CaseStudyConceptPair = {
  social: CaseStudyImage;
  googleAd: CaseStudyImage;
};

export type CaseStudySection = {
  heading?: string;
  /** Supports multiple paragraphs, split on a blank line. May be empty. */
  body: string;
  /** Bulleted list rendered after the body. */
  bullets?: string[];
  /** Further paragraphs rendered after the bullets. */
  bodyAfter?: string;
  /** Lazy-loaded YouTube embed (facade until played). */
  youtube?: CaseStudyYouTube;
  /** Overrides the "Part NN" eyebrow on a `part` section (e.g. "2024 · Role"). */
  eyebrow?: string;
  images?: CaseStudyImage[];
  /** Render images as a compact mosaic collage (first tile featured) rather
   *  than the default 2-column grid. */
  collage?: boolean;
  /** Videos belonging to this chapter (rendered after any images). */
  videos?: CaseStudyVideo[];
  /** Before/after comparison (rendered after the body, before images). */
  beforeAfter?: CaseStudyBeforeAfter;
  /** Grouped old/new slide strips (rendered after the body). Not a 1:1 pairing. */
  slideComparison?: CaseStudySlideComparison;
  /** Website shown as a desktop browser + phone mockup pair. */
  websiteMockup?: CaseStudyWebsiteMockup;
  /** A single campaign concept as a social-media + Google Ads pair, sized to an
   *  equal height (no cropping) side by side; stacks on narrow screens. */
  conceptPair?: CaseStudyConceptPair;
  /** Top-level part heading (large gradient display + numbered eyebrow) vs a
   *  normal sub-chapter heading. */
  part?: boolean;
  /** Show a compact "coming soon" placeholder instead of images (empty event). */
  comingSoon?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  client?: string;
  year?: string;
  /** Used for the home card thumbnail, the case-study hero, and the OG image.
   *  null until real work assets land in public/work/<slug>/. */
  cover: CaseStudyImage | null;
  /** Skip the big cover image on the case-study page (typographic intro) while
   *  still using `cover` for the home-grid thumbnail + OG image. */
  hideHeroImage?: boolean;
  gallery: CaseStudyImage[];
  /** Copy structure per design.md: Context -> narrative chapters -> Outcome */
  sections: CaseStudySection[];
  /** Project announced but assets not yet delivered: home grid renders a
   *  non-clickable teaser card; the page is excluded from build + sitemap. */
  comingSoon?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fameline-holding-group",
    title: "Fameline Holding Group",
    subtitle:
      "Creative direction of the Group's rebranding — and the collateral that carried it into the world.",
    client: "Fameline Holding Group",
    year: "2024–Present",
    tags: [
      "Creative direction",
      "Rebranding",
      "Collateral & print",
      "Digital campaigns",
      "Video & motion",
    ],
    cover: {
      src: "/work/fameline-holding-group/presentation-after.webp",
      alt: "Fameline Holding Group rebranded presentation cover",
      width: 1600,
      height: 900,
    },
    hideHeroImage: true,
    gallery: [],
    sections: [
      {
        part: true,
        heading: "Rebranding",
        body: "The brief was to modernise the identity without losing what already made it recognisable. Maritime branding leans traditional — strict, minimal, corporate — so I directed a measured facelift: a lighter monogram, cleaner proportions, and the wordmark shifted from black to the brand navy — modern, but still within the industry's conventions.",
        beforeAfter: {
          before: {
            src: "/work/fameline-holding-group/logo-before.webp",
            alt: "Fameline Holding Group logo before the rebrand",
            width: 1040,
            height: 771,
          },
          after: {
            src: "/work/fameline-holding-group/logo-after.webp",
            alt: "Fameline Holding Group logo after the rebrand",
            width: 1040,
            height: 771,
          },
        },
      },
      {
        heading: "Presentation",
        body: "The corporate presentation, rebuilt. I moved it from a dark, formal deck to a brighter, more open one, and restructured the content so the Group's scale and story read at a glance.",
        beforeAfter: {
          before: {
            src: "/work/fameline-holding-group/presentation-before.webp",
            alt: "Old Fameline presentation cover — dark and formal",
            width: 1600,
            height: 900,
          },
          after: {
            src: "/work/fameline-holding-group/presentation-after.webp",
            alt: "New Fameline presentation cover — brighter and more open",
            width: 1600,
            height: 900,
          },
        },
        images: [
          {
            src: "/work/fameline-holding-group/deck-stats.webp",
            alt: "New presentation slide — key figures: years, turnover, professionals, vessels served",
            width: 1600,
            height: 900,
          },
          {
            src: "/work/fameline-holding-group/deck-locations.webp",
            alt: "New presentation slide — global locations map",
            width: 1600,
            height: 900,
          },
          {
            src: "/work/fameline-holding-group/deck-history.webp",
            alt: "New presentation slide — company history timeline",
            width: 1600,
            height: 900,
          },
          {
            src: "/work/fameline-holding-group/deck-vision.webp",
            alt: "New presentation slide — vision diagram",
            width: 1600,
            height: 900,
          },
        ],
      },
      {
        heading: "Stationery",
        body: "A full stationery suite on the new identity — folder, letterhead, business cards, compliment slips, and envelopes.",
        images: [
          {
            src: "/work/fameline-holding-group/stationery-suite.webp",
            alt: "Fameline stationery suite mockup — folder, letterhead, business cards, compliment slips, envelopes",
            width: 1469,
            height: 1213,
          },
        ],
      },
      {
        heading: "Brand guidelines",
        body: "A guidelines document to hold it all together — logo usage, colour, and typography, systematised for the whole Group.",
        images: [
          {
            src: "/work/fameline-holding-group/guide-colours.webp",
            alt: "Brand guidelines spread — colour palette",
            width: 1600,
            height: 1131,
          },
          {
            src: "/work/fameline-holding-group/guide-type.webp",
            alt: "Brand guidelines spread — typography",
            width: 1600,
            height: 1131,
          },
          {
            src: "/work/fameline-holding-group/guide-icons.webp",
            alt: "Brand guidelines spread — iconography",
            width: 1600,
            height: 1131,
          },
        ],
      },
      {
        heading: "Website",
        body: "The final piece of the rebrand, carried online. I led the creative direction for the Group's website facelift — applying the refreshed identity across the site, guiding art direction and imagery, and shaping the content so the Group's scale, services, and companies read clearly on every screen.",
        websiteMockup: {
          url: "fhg.global",
          href: "https://fhg.global/",
          desktop: {
            src: "/work/fameline-holding-group/website-desktop.webp",
            alt: "Fameline Holding Group website homepage on desktop — aerial container-ship hero with the 'Relationships Beyond Contracts' headline",
            width: 1600,
            height: 1000,
          },
          mobile: {
            src: "/work/fameline-holding-group/website-mobile.webp",
            alt: "Fameline Holding Group website homepage on mobile — logo, tagline and container-ship hero over the vessel",
            width: 600,
            height: 1298,
          },
        },
      },
      {
        part: true,
        heading: "Digital Campaigns",
        body: "With the new identity in place, I built the Group's first real social presence — a campaign to introduce the rebrand and grow awareness. Until then, little had been shared about the company or its scale, so I led with facts and figures, introduced the people behind it, and used international awareness days and ESG initiatives to give audiences a reason to engage.",
        videos: [
          {
            src: "/work/fameline-holding-group/video/rebranding.mp4",
            poster: "/work/fameline-holding-group/video/rebranding.webp",
            width: 1280,
            height: 1280,
            title: "Rebranding announcement",
          },
          {
            src: "/work/fameline-holding-group/video/statistics.mp4",
            poster: "/work/fameline-holding-group/video/statistics.webp",
            width: 720,
            height: 1280,
            title: "Group statistics",
          },
          {
            src: "/work/fameline-holding-group/video/global-presence.mp4",
            poster: "/work/fameline-holding-group/video/global-presence.webp",
            width: 720,
            height: 1280,
            title: "Global presence",
          },
          {
            src: "/work/fameline-holding-group/video/meet-the-team.mp4",
            poster: "/work/fameline-holding-group/video/meet-the-team.webp",
            width: 720,
            height: 1280,
            title: "Meet the team",
          },
        ],
      },
      {
        heading: "Awareness & ESG",
        body: "A run of social posts across international awareness days and ESG initiatives — consistent with the new look, and built to earn engagement.",
        images: [
          {
            src: "/work/fameline-holding-group/tree-planting.webp",
            alt: "Tree-planting campaign social post",
            width: 1080,
            height: 1080,
          },
          {
            src: "/work/fameline-holding-group/womens-day.webp",
            alt: "International Women's Day social post",
            width: 1080,
            height: 1080,
          },
          {
            src: "/work/fameline-holding-group/easter.webp",
            alt: "Easter greeting social post",
            width: 1080,
            height: 1080,
          },
          {
            src: "/work/fameline-holding-group/breast-cancer.webp",
            alt: "Breast Cancer Awareness social post",
            width: 1080,
            height: 1080,
          },
        ],
      },
    ],
  },
  {
    slug: "global-stss",
    title: "Global STSS Holding Group",
    subtitle:
      "Creative direction for the Group's rebrand — a distinctive new identity that signals growth and moves the marine business away from convention.",
    client: "Global STSS Holding Group",
    tags: [
      "Creative direction",
      "Rebranding",
      "Visual identity",
      "Brand guidelines",
    ],
    cover: {
      src: "/work/global-stss/cover.webp",
      alt: "Global STSS Holding Group rebranded logo — blue-to-turquoise gradient monogram and wordmark",
      width: 1600,
      height: 1067,
    },
    hideHeroImage: true,
    gallery: [],
    sections: [
      {
        part: true,
        heading: "Rebrand",
        eyebrow: "Creative Direction · Visual Identity",
        body: "As Global STSS Holding Group expanded, it needed a stronger identity that reflected its growth and positioned it more clearly in the market. I provided the creative direction for the rebrand.\n\nThe new identity introduces a distinctive colour palette that moves away from the marine industry's more conventional and traditional visual language.",
        beforeAfter: {
          before: {
            src: "/work/global-stss/logo-before.webp",
            alt: "Global STSS logo before the rebrand — teal globe mark and Stern Tube Sealing Solutions wordmark",
            width: 1040,
            height: 771,
          },
          after: {
            src: "/work/global-stss/logo-after.webp",
            alt: "Global STSS logo after the rebrand — blue-to-turquoise gradient monogram and Holding Group wordmark",
            width: 1040,
            height: 771,
          },
        },
        images: [
          {
            src: "/work/global-stss/brand-guidelines.webp",
            alt: "Global STSS brand guidelines — logo, subsidiary marks, primary colour palette, and typography",
            width: 1800,
            height: 1032,
            caption: "Brand guidelines — logo system, the new colour palette, and typography.",
          },
        ],
      },
      {
        heading: "Presentation Rebrand",
        body: "A before-and-after comparison showing how the presentation system was reworked under my creative direction to create a stronger, more consistent identity for future brand materials.",
        slideComparison: {
          before: [
            {
              src: "/work/global-stss/presentation-before-1.webp",
              alt: "Old presentation title slide — 'Aftermarket Marine Sterntube Seals', dark navy layout co-branded with SKF",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-before-2.webp",
              alt: "Old presentation slide — 'The story behind Global STSS' on a cream background with a stock cargo-ship photo",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-before-3.webp",
              alt: "Old presentation slide — 'Opportunity' on a cream background with a stock propeller photo",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-before-4.webp",
              alt: "Old presentation slide — 'Market disruption' navy layout with a 3D pie chart",
              width: 1280,
              height: 720,
            },
          ],
          after: [
            {
              src: "/work/global-stss/presentation-after-1.webp",
              alt: "New presentation title slide — 'A new Global Force in Marine Sealing' on the blue-to-turquoise gradient identity with subsidiary logos",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-after-2.webp",
              alt: "New presentation slide — 'Group structure' laying out the Luminar Marine, Global STSS and Bolt Cargo subsidiaries",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-after-3.webp",
              alt: "New presentation slide — 'Who we are' gradient layout highlighting expertise, innovation and trusted partnerships",
              width: 1280,
              height: 720,
            },
            {
              src: "/work/global-stss/presentation-after-4.webp",
              alt: "New presentation slide — 'Our mission' setting out the Group's strategic goals",
              width: 1280,
              height: 720,
            },
          ],
        },
      },
      {
        heading: "Print Collateral",
        body: "A selection of printed brand applications designed to extend the identity across essential corporate materials.",
        images: [
          {
            src: "/work/global-stss/print-business-cards.webp",
            alt: "Global STSS business cards — front with the new logo, reverse with contact details and QR code",
            width: 1500,
            height: 1154,
          },
          {
            src: "/work/global-stss/print-brochure.webp",
            alt: "Luminar Marine brochure — cover and inside spread on the new identity",
            width: 1600,
            height: 1230,
          },
        ],
      },
      {
        heading: "Digital Brand Applications",
        body: "A selection of campaign assets showing how the refreshed identity was applied across digital communication.",
        images: [
          {
            src: "/work/global-stss/digital-posidonia.webp",
            alt: "Global STSS Posidonia Expo social announcement — 'Visit us at Posidonia Expo', stand No. 321, Hall 2, 1–5 June 2026, on the blue-to-turquoise gradient identity",
            width: 1080,
            height: 1080,
            caption: "Posidonia Expo Participation",
          },
        ],
        videos: [
          {
            src: "/work/global-stss/video/announcement.mp4",
            poster: "/work/global-stss/video/announcement.webp",
            width: 1280,
            height: 720,
            title: "Website announcement",
          },
        ],
      },
    ],
  },
  {
    slug: "events-exhibitions",
    title: "Events & Exhibitions",
    subtitle:
      "Event coordination, communication strategy and production — from an offshore sailing regatta to an international marine exhibition.",
    client: "Fameline Holding Group",
    tags: [
      "Event coordination",
      "Communication strategy",
      "Event production",
      "Booth & signage",
    ],
    cover: {
      src: "/work/events-exhibitions/eastmed-video.webp",
      alt: "East Med Marine and Offshore Exhibition 2025 key visual",
      width: 1280,
      height: 720,
    },
    hideHeroImage: true,
    gallery: [],
    sections: [
      {
        part: true,
        heading: "Fameline Offshore Sailing Regatta",
        eyebrow: "2024 · Event Coordination · Communication Strategy",
        body: "",
        youtube: { id: "kFWmGjErnyQ", title: "Fameline Offshore Sailing Regatta 2024" },
      },
      {
        heading: "The Event",
        body: "Organised by Fameline Holding Group, the Regatta combines sailing, networking, teamwork and social impact in one dynamic experience.\n\nThe day includes the race, professional recognition, corporate social responsibility, team building activities and an evening celebration.",
      },
      {
        heading: "My Role",
        body: "I coordinated the event day across the race, awards ceremony and party to ensure everything ran smoothly.\n\nI also developed the communication plan, including:",
        bullets: [
          "Internal invitations, updates and reminders",
          "Sponsorship packages and partner communication",
          "Event branding and sponsor visibility",
          "Post-event social media and email campaigns",
        ],
      },
      {
        part: true,
        heading: "East Med Marine and Offshore Exhibition",
        eyebrow: "2025 · Communication Strategy · Event Production",
        body: "",
        youtube: { id: "JkoQHBH7hTU", title: "East Med Marine and Offshore Exhibition 2025" },
      },
      {
        heading: "The Event",
        body: "Held in Limassol, Cyprus, the exhibition brings together more than 80 international exhibitors from the marine and offshore sectors.\n\nThe three-day programme combines a large-scale exhibition with two days of conferences focused on Maritime industry developments and technological advancements.",
      },
      {
        heading: "My Role",
        body: "I developed and executed the communication plan to attract the right audience through:",
        bullets: [
          "Social media and email campaigns",
          "Exhibitor promotion",
          "Targeted invitations for partners and clients",
          "Maritime publication advertising",
          "Google Ads",
        ],
        bodyAfter:
          "I also created booth graphics, signage, badge templates, floor plans, catalogues and supporting print materials.\n\nDuring the event, I provided on-site coordination and worked with the construction company to ensure correct booth assembly and accurate design implementation.",
        collage: true,
        images: [
          { src: "/work/events-exhibitions/eastmed-1.webp", alt: "Elite Blue Group booth with a living green wall and product display", width: 1600, height: 1067 },
          { src: "/work/events-exhibitions/eastmed-2.webp", alt: "Elite Blue Group booth, further view", width: 1600, height: 1066 },
          { src: "/work/events-exhibitions/eastmed-3.webp", alt: "Exhibition stand detail", width: 1600, height: 1066 },
          { src: "/work/events-exhibitions/eastmed-4.webp", alt: "Exhibition stand branding", width: 1600, height: 1067 },
          { src: "/work/events-exhibitions/eastmed-5.webp", alt: "Exhibition stand, product shelf", width: 1066, height: 1600 },
          { src: "/work/events-exhibitions/eastmed-6.webp", alt: "Exhibition stand signage", width: 1067, height: 1600 },
          { src: "/work/events-exhibitions/eastmed-7.webp", alt: "Exhibition hall view", width: 1600, height: 1067 },
        ],
      },
    ],
  },
  {
    slug: "social-casino-ads",
    title: "Social Casino Ads",
    subtitle:
      "A selection of social casino advertising visuals created for social media and Google Ads campaigns, designed to deliver engaging concepts across multiple digital formats.",
    tags: ["Digital Advertising", "Social Media", "Google Ads"],
    cover: {
      src: "/work/social-casino-ads/social-1.webp",
      alt: "Social casino ad — neon slot machine spilling gold and green coins with a '50,000 GC + 1 free SC' sign-up offer",
      width: 1080,
      height: 1350,
    },
    hideHeroImage: true,
    gallery: [],
    sections: [
      {
        heading: "Concept 01",
        body: "",
        conceptPair: {
          social: {
            src: "/work/social-casino-ads/social-1.webp",
            alt: "Social media post — a glowing neon slot machine spilling gold and green coins, headlined 'Join today & get 50,000 GC + 1 free SC' with a Sign Up button",
            width: 1080,
            height: 1350,
          },
          googleAd: {
            src: "/work/social-casino-ads/google-ad-1.webp",
            alt: "Google Ads banner of the same concept — the neon slot machine and coins with 'Join today & get 50,000 GC + 1 free SC' and a Sign Up button, in a wide format",
            width: 1200,
            height: 628,
          },
        },
      },
      {
        heading: "Concept 02",
        body: "",
        conceptPair: {
          social: {
            src: "/work/social-casino-ads/social-2.webp",
            alt: "Social media post — an open gift box bursting with gold coins and gems, headlined 'Double the fun from day one!' with 50,000 GC + 1 free SC and 1M GC + 50 free SC offers and a Play Now button",
            width: 1080,
            height: 1350,
          },
          googleAd: {
            src: "/work/social-casino-ads/google-ad-2.webp",
            alt: "Google Ads banner of the same concept — the gift box of coins and gems with 'Double the fun from day one!', the same welcome offers and a Play Now button, in a wide format",
            width: 1200,
            height: 628,
          },
        },
      },
      {
        heading: "Concept 03",
        body: "",
        conceptPair: {
          social: {
            src: "/work/social-casino-ads/social-3.webp",
            alt: "Social media post — a giant golden ticket rising from a treasure chest of coins and gems, headlined 'Claim up to 1M GC + 50 free SC on your first purchase' with a Get Offer button",
            width: 1080,
            height: 1350,
          },
          googleAd: {
            src: "/work/social-casino-ads/google-ad-3.webp",
            alt: "Google Ads banner of the same concept — the golden ticket and treasure chest with 'Claim up to 1M GC + 50 free SC on your first purchase' and a Get Offer button, in a wide format",
            width: 1200,
            height: 628,
          },
        },
      },
    ],
  },
];

/** Projects with real content — the only ones that get pages, links, and sitemap entries. */
export const publishedCaseStudies = caseStudies.filter((c) => !c.comingSoon);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return publishedCaseStudies.find((c) => c.slug === slug);
}
