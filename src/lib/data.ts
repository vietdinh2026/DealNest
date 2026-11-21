import { supabase, isSupabaseConfigured } from "./supabase";
import type { Coupon, Store, VoteCounts } from "./types";

/** Load all active coupons (with store) + aggregated vote counts. */
export async function getActiveCoupons(): Promise<{ coupons: Coupon[]; votes: VoteCounts }> {
  if (!isSupabaseConfigured()) return { coupons: [], votes: {} };
  const { data, error } = await supabase
    .from("coupons")
    .select("*, store:stores(*)")
    .eq("status", "active")
    .order("created_at", { ascending: false });
  if (error || !data) return { coupons: [], votes: {} };

  const votes: VoteCounts = {};
  const { data: voteRows } = await supabase.from("votes").select("coupon_id, vote");
  for (const row of voteRows ?? []) {
    votes[row.coupon_id] ??= { up: 0, down: 0 };
    if (row.vote === "up") votes[row.coupon_id].up += 1;
    else votes[row.coupon_id].down += 1;
  }
  return { coupons: data as Coupon[], votes };
}

/** All stores, alphabetical — used by /stores and the sitemap. */
export async function getAllStores(): Promise<Store[]> {
  if (!isSupabaseConfigured()) return [];
  const { data } = await supabase
    .from("stores")
    .select("*")
    .order("name", { ascending: true });
  return (data ?? []) as Store[];
}

/** One store by its URL slug, e.g. "chewy". */
export async function getStoreBySlug(slug: string): Promise<Store | null> {
  if (!isSupabaseConfigured()) return null;
  const { data } = await supabase
    .from("stores")
    .select("*")
    .eq("slug", slug)
    .single();
  return (data ?? null) as Store | null;
}

/** Active coupons for one store, with the store embedded. */
export async function getCouponsForStore(
  storeId: string
): Promise<{ coupons: Coupon[]; votes: VoteCounts }> {
  if (!isSupabaseConfigured()) return { coupons: [], votes: {} };
  const { data } = await supabase
    .from("coupons")
    .select("*, store:stores(*)")
    .eq("store_id", storeId)
    .eq("status", "active")
    .order("created_at", { ascending: false });
  const coupons = (data ?? []) as Coupon[];
  const votes: VoteCounts = {};
  if (coupons.length > 0) {
    const { data: voteRows } = await supabase
      .from("votes")
      .select("coupon_id, vote")
      .in(
        "coupon_id",
        coupons.map((c) => c.id)
      );
    for (const row of voteRows ?? []) {
      votes[row.coupon_id] ??= { up: 0, down: 0 };
      if (row.vote === "up") votes[row.coupon_id].up += 1;
      else votes[row.coupon_id].down += 1;
    }
  }
  return { coupons, votes };
}

export function formatDiscount(c: Coupon): string {
  if (c.discount_type === "percent" && c.discount_value != null) return `${c.discount_value}% OFF`;
  if (c.discount_type === "fixed" && c.discount_value != null) return `$${c.discount_value} OFF`;
  if (c.discount_type === "free_shipping") return "FREE SHIPPING";
  return "DEAL";
}

export function daysLeft(expiresAt: string | null): number | null {
  if (!expiresAt) return null;
  const diff = new Date(expiresAt).getTime() - Date.now();
  return Math.ceil(diff / 86_400_000);
}
