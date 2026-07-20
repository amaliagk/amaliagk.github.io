import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages has no Node server, so the Image Optimization API can't run.
  // Images are already pre-optimized .webp, so serve them as-is.
  images: { unoptimized: true },
  // Emit `/route/index.html` (not `/route.html`) so paths resolve cleanly on
  // GitHub Pages without extension rewrites.
  trailingSlash: true,
};

export default nextConfig;
