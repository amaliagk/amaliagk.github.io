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

export type CaseStudySection = {
  heading?: string;
  body: string;
  images?: CaseStudyImage[];
  /** Render images as a compact mosaic collage (first tile featured) rather
   *  than the default 2-column grid. */
  collage?: boolean;
  /** Videos belonging to this chapter (rendered after any images). */
  videos?: CaseStudyVideo[];
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
      "Day-to-day creative direction for a maritime holding group — one rebrand, a family of brand identities, and the campaigns, social content, and motion that carry them.",
    client: "Fameline Holding Group",
    year: "2024–Present",
    tags: [
      "Creative direction",
      "Rebranding",
      "Multi-brand systems",
      "Social & campaigns",
      "Video & motion",
    ],
    cover: {
      src: "/work/fameline-holding-group/cover.webp",
      alt: "Fameline Holding Group business cards in navy with an embossed monogram",
      width: 1800,
      height: 1272,
    },
    gallery: [],
    sections: [
      {
        heading: "Context",
        body: "The Fameline Holding Group spans a portfolio of maritime and logistics companies, and I run its creative in-house — identity systems, print, social campaigns, video, and event graphics. Each company needs an identity distinct enough to stand on its own, yet clearly part of one family, and every piece has to ship at the pace of a working marketing calendar.",
      },
      {
        heading: "Rebrand & creative direction",
        body: "I led the creative direction of the group's rebrand — evolving the identity while keeping the equity of the established mark, then rolling it out across stationery, presentations, and digital channels. The announcement itself became a motion piece for the group's social audience.",
        videos: [
          {
            src: "/work/fameline-holding-group/video/rebranding.mp4",
            poster: "/work/fameline-holding-group/video/rebranding.webp",
            width: 1280,
            height: 1280,
            title: "Rebranding announcement",
          },
        ],
      },
      {
        heading: "The brand family",
        body: "I developed and refined logo systems across the group's companies — each mark distinct enough to stand alone, with a shared logic in construction, colour, and typography that holds the family together.",
        images: [
          {
            src: "/work/fameline-holding-group/logo-tideway.webp",
            alt: "Tideway Cargo Logistics logo",
            width: 1000,
            height: 387,
            contain: true,
          },
          {
            src: "/work/fameline-holding-group/logo-unichem.webp",
            alt: "Unichem logo, horizontal lockup",
            width: 1000,
            height: 411,
            contain: true,
          },
          {
            src: "/work/fameline-holding-group/logo-zenglobal.webp",
            alt: "ZenGlobal Cargo Logistics logo",
            width: 1000,
            height: 562,
            contain: true,
          },
          {
            src: "/work/fameline-holding-group/logo-shipwell.webp",
            alt: "ShipWell logo",
            width: 1000,
            height: 1000,
            contain: true,
          },
          {
            src: "/work/fameline-holding-group/logo-zoomline.webp",
            alt: "Zoomline logo",
            width: 1000,
            height: 1000,
            contain: true,
          },
        ],
      },
      {
        heading: "Applications",
        body: "The identities extend into the everyday touchpoints — business cards, letterheads, and print collateral — with typography, colour, and logo placement kept consistent so every piece reads as one brand.",
        images: [
          {
            src: "/work/fameline-holding-group/letterhead.webp",
            alt: "Corporate letterhead layout",
            width: 1500,
            height: 1000,
          },
        ],
      },
      {
        heading: "Social media & campaigns",
        body: "An always-on social presence sets the group's public look and feel — international awareness days, seasonal greetings, and CSR initiatives like the “Be the reason Lofou turns green” tree-planting campaign. Each set starts from a single key visual and adapts across formats without losing consistency.",
        collage: true,
        images: [
          {
            src: "/work/fameline-holding-group/tree-planting.webp",
            alt: "“Be the reason Lofou turns Green” tree-planting campaign invitation",
            width: 1080,
            height: 1080,
          },
          {
            src: "/work/fameline-holding-group/breast-cancer.webp",
            alt: "Breast Cancer Awareness event invitation",
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
        ],
      },
      {
        heading: "Video & motion",
        body: "Short motion pieces built for social feeds — the group's global presence, key statistics, and team features — designed to hold attention with or without sound.",
        videos: [
          {
            src: "/work/fameline-holding-group/video/global-presence.mp4",
            poster: "/work/fameline-holding-group/video/global-presence.webp",
            width: 720,
            height: 1280,
            title: "Global presence",
          },
          {
            src: "/work/fameline-holding-group/video/fhg-statistics.mp4",
            poster: "/work/fameline-holding-group/video/fhg-statistics.webp",
            width: 720,
            height: 1280,
            title: "Group statistics",
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
