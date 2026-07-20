import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Required for `output: "export"` — emit robots.txt as a static file at build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
