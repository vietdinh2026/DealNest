import type { MetadataRoute } from "next";
import { getAllStores } from "@/lib/data";
import { GUIDES } from "@/lib/guides";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Sitemap: /, /stores, one /stores/[slug] per store, the guides and
 * the static info pages.
 * The base URL comes from NEXT_PUBLIC_SITE_URL — set it in Vercel to
 * https://dealnest.online (the default below is the same, so the
 * sitemap is correct even if the env var is missing).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealnest.online";
  const stores = await getAllStores();
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${base}/stores`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${base}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...GUIDES.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...["about", "contact", "privacy", "disclosure", "submit"].map(
      (p) => ({
        url: `${base}/${p}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.4,
      })
    ),
  ];
  return [
    ...staticPages,
    ...stores.map((s) => ({
      url: `${base}/stores/${s.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];
}
