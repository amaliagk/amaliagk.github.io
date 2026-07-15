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

export type CaseStudySection = {
  heading?: string;
  body: string;
  images?: CaseStudyImage[];
};

export type CaseStudyVideo = {
  src: string;
  poster: string;
  /** Poster/display dimensions, for aspect-ratio + CLS avoidance. */
  width: number;
  height: number;
  title: string;
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
  videos?: CaseStudyVideo[];
  /** Copy structure per design.md: Context -> Approach -> Outcome */
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-branding",
    title: "Corporate Branding & Visual Identity",
    subtitle:
      "Building coherent brand systems for a group of maritime and logistics companies — from logo development to stationery and applications.",
    client: "Fameline Holding Group",
    tags: [
      "Logo development",
      "Brand systems",
      "Corporate stationery",
      "Applications",
    ],
    cover: {
      src: "/work/corporate-branding/cover.webp",
      alt: "Fameline Holding Group business cards in navy with an embossed monogram",
      width: 1800,
      height: 1272,
    },
    sections: [
      {
        heading: "Context",
        body: "The Fameline Holding Group spans a portfolio of maritime and logistics brands. Each company needs an identity distinct enough to stand on its own, yet clearly part of one family. The work runs from logo development through to the stationery and applications that carry a brand day to day.",
      },
      {
        heading: "Logo development",
        body: "I developed and refined logo systems across several of the group's companies, keeping a shared logic in how each mark, wordmark, and colour palette behaves.",
        images: [
          {
            src: "/work/corporate-branding/logo-tideway.webp",
            alt: "Tideway Cargo Logistics logo",
            width: 1000,
            height: 387,
            contain: true,
          },
          {
            src: "/work/corporate-branding/logo-unichem.webp",
            alt: "Unichem logo, horizontal lockup",
            width: 1000,
            height: 411,
            contain: true,
          },
          {
            src: "/work/corporate-branding/logo-zenglobal.webp",
            alt: "ZenGlobal Cargo Logistics logo",
            width: 1000,
            height: 562,
            contain: true,
          },
          {
            src: "/work/corporate-branding/logo-shipwell.webp",
            alt: "ShipWell logo",
            width: 1000,
            height: 1000,
            contain: true,
          },
          {
            src: "/work/corporate-branding/logo-zoomline.webp",
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
            src: "/work/corporate-branding/letterhead.webp",
            alt: "Corporate letterhead layout",
            width: 1500,
            height: 1000,
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/work/corporate-branding/gstss-brochure-1.webp",
        alt: "Luminar Marine stern tube seal system brochure, cover",
        width: 1132,
        height: 1600,
      },
      {
        src: "/work/corporate-branding/gstss-brochure-2.webp",
        alt: "Luminar Marine brochure, inside spread",
        width: 1132,
        height: 1600,
      },
      {
        src: "/work/corporate-branding/gstss-brochure-3.webp",
        alt: "Luminar Marine brochure, inside spread",
        width: 1132,
        height: 1600,
      },
    ],
  },
  {
    slug: "corporate-presentations",
    title: "Corporate Presentations",
    subtitle: "Turning complex information into clear corporate stories.",
    tags: [
      "Cover slides",
      "Infographics",
      "Data visualisation",
      "Service diagrams",
      "Presentation templates",
    ],
    cover: null,
    gallery: [],
    sections: [],
  },
  {
    slug: "digital-campaigns",
    title: "Digital Campaigns & Social Media",
    subtitle:
      "Campaign key visuals adapted across every digital touchpoint — from CSR initiatives to awareness days.",
    client: "Fameline Holding Group",
    tags: [
      "Campaign key visual",
      "Social formats",
      "Motion & video",
      "Awareness campaigns",
    ],
    cover: {
      src: "/work/digital-campaigns/cover.webp",
      alt: "“Be the reason Lofou turns Green” tree-planting campaign invitation",
      width: 1080,
      height: 1080,
    },
    gallery: [
      {
        src: "/work/digital-campaigns/breast-cancer.webp",
        alt: "Breast Cancer Awareness event invitation",
        width: 1080,
        height: 1080,
      },
      {
        src: "/work/digital-campaigns/womens-day.webp",
        alt: "International Women's Day social post",
        width: 1080,
        height: 1080,
      },
      {
        src: "/work/digital-campaigns/easter.webp",
        alt: "Easter greeting social post",
        width: 1080,
        height: 1080,
      },
    ],
    videos: [
      {
        src: "/work/digital-campaigns/video/rebranding.mp4",
        poster: "/work/digital-campaigns/video/rebranding.webp",
        width: 1280,
        height: 1280,
        title: "Rebranding announcement",
      },
      {
        src: "/work/digital-campaigns/video/gstss-announcement.mp4",
        poster: "/work/digital-campaigns/video/gstss-announcement.webp",
        width: 1280,
        height: 720,
        title: "Global STSS website announcement",
      },
      {
        src: "/work/digital-campaigns/video/global-presence.mp4",
        poster: "/work/digital-campaigns/video/global-presence.webp",
        width: 720,
        height: 1280,
        title: "Global presence",
      },
      {
        src: "/work/digital-campaigns/video/fhg-statistics.mp4",
        poster: "/work/digital-campaigns/video/fhg-statistics.webp",
        width: 720,
        height: 1280,
        title: "Group statistics",
      },
      {
        src: "/work/digital-campaigns/video/meet-the-team.mp4",
        poster: "/work/digital-campaigns/video/meet-the-team.webp",
        width: 720,
        height: 1280,
        title: "Meet the team",
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Corporate social responsibility and awareness campaigns for the Fameline Holding Group — environmental initiatives, awareness days, and seasonal greetings — each needing a key visual that holds up across social formats and digital invitations.",
      },
      {
        heading: "Approach",
        body: "I build each campaign around a single strong key visual, then adapt it for the formats it needs: square social posts, digital invitations, and internal announcements — plus motion pieces for launches and announcements — keeping messaging, colour, and layout consistent across the set.",
      },
    ],
  },
  {
    slug: "exhibitions-events",
    title: "Exhibitions & Events",
    subtitle:
      "Event identities carried from invitation through to on-site booth graphics, backdrops, and branded environments.",
    client: "Fameline Holding Group",
    tags: [
      "Exhibition booth graphics",
      "Event identity",
      "Backdrops & signage",
      "Branded environments",
    ],
    cover: {
      src: "/work/exhibitions-events/cover.webp",
      alt: "Global STSS launch event backdrop wall with the group's family of brand logos",
      width: 1800,
      height: 1200,
    },
    gallery: [
      {
        src: "/work/exhibitions-events/eastmed-1.webp",
        alt: "Elite Blue Group exhibition stand with a living green wall and product display",
        width: 1800,
        height: 1200,
      },
      {
        src: "/work/exhibitions-events/eastmed-2.webp",
        alt: "Elite Blue Group exhibition stand, further view",
        width: 1800,
        height: 1200,
      },
      {
        src: "/work/exhibitions-events/eastmed-3.webp",
        alt: "Exhibition stand detail",
        width: 1800,
        height: 1200,
      },
      {
        src: "/work/exhibitions-events/stss-1.webp",
        alt: "Global STSS launch event space",
        width: 1800,
        height: 1200,
      },
      {
        src: "/work/exhibitions-events/stss-2.webp",
        alt: "Global STSS launch event detail",
        width: 1800,
        height: 1200,
      },
      {
        src: "/work/exhibitions-events/stss-3.webp",
        alt: "Global STSS launch event branding",
        width: 1800,
        height: 1200,
      },
    ],
    sections: [
      {
        heading: "Context",
        body: "Event identities for Fameline Holding Group launches and industry exhibitions — carried from the first invitation through to the physical space visitors walk into.",
      },
      {
        heading: "Approach",
        body: "I design the on-site environment as a whole: backdrops, booth graphics, branded plinths, and signage, so the space reflects the group's identity and its family of brands consistently — whether it's a product launch or an international trade exhibition.",
      },
      {
        heading: "Event collateral",
        body: "Alongside the built environment, each event needs its printed and standing pieces — roll-up banners, signage, and announcements — designed to match the launch identity.",
        images: [
          {
            src: "/work/exhibitions-events/enginelink-rollup.webp",
            alt: "EngineLink 2.0 launch roll-up banner",
            width: 640,
            height: 1600,
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
