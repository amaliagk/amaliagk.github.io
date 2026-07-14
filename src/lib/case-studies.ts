export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type CaseStudySection = {
  heading?: string;
  body: string;
  images?: CaseStudyImage[];
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
  /** Copy structure per design.md: Context -> Approach -> Outcome */
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-branding",
    title: "Corporate Branding & Visual Identity",
    subtitle:
      "Building coherent brand systems — from logo development to guidelines and applications.",
    tags: [
      "Logo development",
      "Brand extensions",
      "Corporate stationery",
      "Brand guidelines",
      "Digital brand applications",
      "Signage",
    ],
    cover: null,
    gallery: [],
    sections: [],
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
      "Campaign key visuals adapted across every digital touchpoint.",
    tags: [
      "Campaign key visual",
      "LinkedIn & Instagram formats",
      "Paid advertising visuals",
      "Email campaigns",
      "Website banners",
    ],
    cover: null,
    gallery: [],
    sections: [],
  },
  {
    slug: "exhibitions-events",
    title: "Exhibitions & Events",
    subtitle:
      "Event identities carried through from invitation to booth to follow-up.",
    tags: [
      "Exhibition booth graphics",
      "Event identity",
      "Invitations",
      "Roll-up banners",
      "Backdrops",
      "Video walls",
    ],
    cover: null,
    gallery: [],
    sections: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
