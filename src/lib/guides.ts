export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** ISO date string (YYYY-MM-DD) for sitemap lastModified & Article schema. */
  updatedAt: string;
  /** Store this guide is about (its live coupons are shown on the page). */
  storeSlug?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
}
export function getGuide(slug: string): Guide | undefined {
  const normalized = slug.trim().toLowerCase();
  return GUIDES.find((g) => g.slug === normalized);
}

export function getGuideForStore(storeSlug: string): Guide | undefined {
  const normalized = storeSlug.trim().toLowerCase();
  return GUIDES.find((g) => g.storeSlug === normalized);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
