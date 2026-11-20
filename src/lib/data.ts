import { supabase, isSupabaseConfigured } from "./supabase";
import type { Coupon, VoteCounts } from "./types";

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
