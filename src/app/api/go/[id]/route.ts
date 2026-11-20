import { NextRequest, NextResponse } from "next/server";
import { getServiceClient, isSupabaseConfigured } from "@/lib/supabase";

/**
 * GET /api/go/:couponId
 * Records one click row, then redirects the visitor to the store's
 * affiliate URL. This is how DealNest tracks outbound clicks for
 * commission reconciliation with each affiliate network.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const home = new URL("/", req.url);

  if (!isSupabaseConfigured()) return NextResponse.redirect(home);

  let db;
  try {
    db = getServiceClient();
  } catch {
    return NextResponse.redirect(home);
  }

  const { data: coupon } = await db
    .from("coupons")
    .select("id, affiliate_url")
    .eq("id", params.id)
    .single();

  if (!coupon?.affiliate_url) return NextResponse.redirect(home);

  // Record the click (best effort — a logging failure must not block the redirect).
  await db.from("clicks").insert({
    coupon_id: coupon.id,
    referrer: req.headers.get("referer"),
  });

  return NextResponse.redirect(coupon.affiliate_url);
}
