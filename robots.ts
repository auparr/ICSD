import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/layout";

// Required for static export mode (output: 'export' in next.config.mjs)
export const dynamic = "force-static";

// ─── Robots ───────────────────────────────────────────────────────────────────
// Next.js serves this as /robots.txt
// Tells search engines what to crawl and where the sitemap is
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next.js internals from being indexed
        disallow: ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}