import type { MetadataRoute } from "next";
import { getAllStores } from "@/lib/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Sitemap: /, /stores and one /stores/[slug] per store.
 * The base URL comes from NEXT_PUBLIC_SITE_URL — set it in Vercel to
 * https://dealnest.online (the default below is the same, so the
 * sitemap is correct even if the env var is missing).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealnest.online";
  const stores = await getAllStores();
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    {
      url: `${base}/stores`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...stores.map((s) => ({
      url: `${base}/stores/${s.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ];
}
