import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/layout";

// Required for static export mode (output: 'export' in next.config.mjs)
export const dynamic = "force-static";

// ─── Sitemap ──────────────────────────────────────────────────────────────────
// Next.js auto-submits this to Google as /sitemap.xml
// Submit the URL manually at: https://search.google.com/search-console
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage — highest priority ──────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Program pages ────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/program-pendidikan/KB`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/program-pendidikan/TK`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/program-pendidikan/MI`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── PPDB — high priority during enrollment season ────────────────────────
    {
      url: `${SITE_URL}/PPDB`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Prestasi ─────────────────────────────────────────────────────────────
    {
      url: `${SITE_URL}/prestasi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}