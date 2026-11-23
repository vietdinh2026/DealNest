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
