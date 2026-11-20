export type CouponStatus = "active" | "expired" | "reported";
export type ReportStatus = "open" | "resolved";
export type SubmissionStatus = "pending" | "approved" | "rejected";

export interface Store {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  website_url: string | null;
  description: string | null;
  created_at: string;
}

export interface Coupon {
  id: string;
  store_id: string;
  title: string;
  code: string | null;
  description: string | null;
  discount_type: "percent" | "fixed" | "free_shipping" | "other";
  discount_value: number | null;
  affiliate_url: string;
  affiliate_network: string | null;
  category: string;
  expires_at: string | null;
  is_verified: boolean;
  status: CouponStatus;
  created_at: string;
  store?: Store;
}

export interface ClickRow {
  id: string;
  coupon_id: string;
  clicked_at: string;
  referrer: string | null;
}

export interface Report {
  id: string;
  coupon_id: string;
  reason: string | null;
  status: ReportStatus;
  created_at: string;
  coupon?: Coupon;
}

export interface Submission {
  id: string;
  store_name: string;
  coupon_title: string;
  code: string | null;
  affiliate_url: string | null;
  email: string | null;
  status: SubmissionStatus;
  created_at: string;
}

export interface Vote {
  id: string;
  coupon_id: string;
  vote: "up" | "down";
  created_at: string;
}

export type VoteCounts = Record<string, { up: number; down: number }>;

export const AFFILIATE_NETWORKS = [
  "ShareASale",
  "CJ",
  "Impact",
  "Rakuten",
  "Awin",
  "Amazon Associates",
  "Other",
] as const;

export const CATEGORIES = [
  "Fashion",
  "Beauty",
  "Pets",
  "VPN & Software",
  "Home & Furniture",
  "Food & Meal Kits",
  "Groceries",
  "Travel",
  "Electronics",
  "Other",
] as const;
