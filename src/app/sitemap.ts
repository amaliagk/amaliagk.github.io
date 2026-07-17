import type { MetadataRoute } from "next";
import { publishedCaseStudies } from "@/lib/case-studies";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...publishedCaseStudies.map((study) => ({
      url: `${siteUrl}/work/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
