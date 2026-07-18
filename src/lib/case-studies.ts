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

export type CaseStudySection = {
  heading?: string;
  body: string;
  images?: CaseStudyImage[];
  /** Render images as a compact mosaic collage (first tile featured) rather
   *  than the default 2-column grid. */
  collage?: boolean;
  /** Videos belonging to this chapter (rendered after any images). */
  videos?: CaseStudyVideo[];
  /** Before/after comparison (rendered after the body, before images). */
  beforeAfter?: CaseStudyBeforeAfter;
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
            src: "/work/fameline-holding-group/stationery.webp",
            alt: "Fameline stationery suite mockup — folder, letterhead, business cards, compliment slips, envelopes",
            width: 1800,
            height: 1350,
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
      "Turning complex information into clear corporate stories — a launch event, technical print, and motion for a marine-engineering group.",
    client: "Global STSS Holding Group",
    tags: [
      "Launch event",
      "Brochure design",
      "Corporate storytelling",
      "Motion",
    ],
    cover: {
      src: "/work/global-stss/cover.webp",
      alt: "Global STSS launch event backdrop wall with the group's family of brand logos",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    sections: [
      {
        heading: "Context",
        body: "Global STSS brings stern tube seal system specialists together under one holding group. The brief behind every deliverable is the same: dense, technical subject matter that has to read clearly and look confident — to partners, clients, and event audiences.",
      },
      {
        heading: "Launch event",
        body: "The group's launch was built as one branded environment — from the backdrop wall carrying the family of brand logos through to plinths, signage, and staging.",
        collage: true,
        images: [
          { src: "/work/global-stss/launch-1.webp", alt: "Global STSS launch, event space", width: 1600, height: 1067 },
          { src: "/work/global-stss/launch-2.webp", alt: "Global STSS launch, branded detail", width: 1600, height: 1067 },
          { src: "/work/global-stss/launch-3.webp", alt: "Global STSS launch, guests", width: 1600, height: 1066 },
          { src: "/work/global-stss/launch-4.webp", alt: "Global STSS launch, staging", width: 1600, height: 1066 },
          { src: "/work/global-stss/launch-5.webp", alt: "Global STSS launch, branded elements", width: 1600, height: 1067 },
        ],
      },
      {
        heading: "Print — Luminar Marine brochure",
        body: "A product brochure for Luminar Marine's stern tube seal system: specification-heavy content structured into clean spreads, with hierarchy and diagrams doing the heavy lifting.",
        images: [
          {
            src: "/work/global-stss/brochure-1.webp",
            alt: "Luminar Marine stern tube seal system brochure, cover",
            width: 1132,
            height: 1600,
          },
          {
            src: "/work/global-stss/brochure-2.webp",
            alt: "Luminar Marine brochure, inside spread",
            width: 1132,
            height: 1600,
          },
          {
            src: "/work/global-stss/brochure-3.webp",
            alt: "Luminar Marine brochure, inside spread",
            width: 1132,
            height: 1600,
          },
        ],
      },
      {
        heading: "Motion",
        body: "The group's website launch, announced with a short motion piece for its social channels.",
        videos: [
          {
            src: "/work/global-stss/video/announcement.mp4",
            poster: "/work/global-stss/video/announcement.webp",
            width: 1280,
            height: 720,
            title: "Global STSS website announcement",
          },
        ],
      },
    ],
  },
  {
    slug: "eastmed-exhibition",
    title: "EastMed Exhibition",
    subtitle:
      "Exhibition stands for the group's brands at the EastMed exhibition — stand graphics, signage, and branded environments.",
    client: "Fameline Holding Group",
    tags: [
      "Exhibition stands",
      "Booth graphics",
      "Signage",
      "Branded environments",
    ],
    cover: {
      src: "/work/eastmed-exhibition/eastmed-1.webp",
      alt: "Elite Blue Group booth with a living green wall and product display",
      width: 1600,
      height: 1067,
    },
    gallery: [],
    sections: [
      {
        heading: "Context",
        body: "An exhibition presence for the group's brands at EastMed — taking each identity off the page and into a physical stand that has to work at a distance, in a crowded hall, and up close.",
      },
      {
        heading: "On the floor",
        body: "Highlights from the exhibition floor, including the Elite Blue Group booth with its living green wall and product display.",
        collage: true,
        images: [
          { src: "/work/eastmed-exhibition/eastmed-2.webp", alt: "Elite Blue Group booth, further view", width: 1600, height: 1066 },
          { src: "/work/eastmed-exhibition/eastmed-3.webp", alt: "Exhibition stand detail", width: 1600, height: 1066 },
          { src: "/work/eastmed-exhibition/eastmed-4.webp", alt: "Exhibition stand branding", width: 1600, height: 1067 },
          { src: "/work/eastmed-exhibition/eastmed-5.webp", alt: "Exhibition stand, product shelf", width: 1066, height: 1600 },
          { src: "/work/eastmed-exhibition/eastmed-6.webp", alt: "Exhibition stand signage", width: 1067, height: 1600 },
          { src: "/work/eastmed-exhibition/eastmed-7.webp", alt: "Exhibition hall view", width: 1600, height: 1067 },
        ],
      },
    ],
  },
  {
    slug: "sailing-regatta",
    title: "Fameline Offshore Sailing Regatta",
    subtitle:
      "Logo development and event identity for the group's offshore sailing regatta.",
    client: "Fameline Holding Group",
    year: "2024",
    tags: ["Logo development", "Event identity", "On-site branding"],
    cover: null,
    gallery: [],
    sections: [],
    comingSoon: true,
  },
];

/** Projects with real content — the only ones that get pages, links, and sitemap entries. */
export const publishedCaseStudies = caseStudies.filter((c) => !c.comingSoon);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return publishedCaseStudies.find((c) => c.slug === slug);
}
