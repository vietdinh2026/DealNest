import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CouponBoard from "@/components/CouponBoard";
import StoreFaq from "@/components/StoreFaq";
import StoreLogo from "@/components/StoreLogo";
import { getCouponsForStore, getStoreBySlug } from "@/lib/data";
import { buildStoreFaq, faqJsonLd } from "@/lib/faq";

export const dynamic = "force-dynamic";
// Never cache Supabase reads: without this, Next.js caches the fetch
// result from the first request and later SQL edits (new codes, new
// descriptions) would not show up until a redeploy.
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const store = await getStoreBySlug(params.slug);
  if (!store) return { title: "Store not found — DealNest" };
  const { coupons } = await getCouponsForStore(store.id);
  const best = coupons.reduce(
    (max, c) => Math.max(max, c.discount_value ?? 0),
    0
  );
  const discount = best > 0 ? `${best}% off` : "deals";
  return {
    title: `${store.name} Promo Code — ${discount} | DealNest`,
    description:
      store.description ??
      `Save at ${store.name} with the latest DealNest promo codes and deals.`,
  };
}

export default async function StoreDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const store = await getStoreBySlug(params.slug);
  if (!store) notFound();

  const { coupons, votes } = await getCouponsForStore(store.id);
  const faqs = buildStoreFaq(store, coupons);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Link
        href="/stores"
        className="text-sm font-semibold text-brand-700 hover:underline"
      >
        ← All stores
      </Link>

      {/* Store header: big logo + name + SEO description */}
      <section className="mt-3 rounded-3xl border bg-white p-6 sm:p-8">
        <div className="flex items-start gap-5">
          <StoreLogo
            name={store.name}
            websiteUrl={store.website_url}
            size={96}
          />
          <div>
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              {store.name}
            </h1>
            {store.description && (
              <p className="mt-2 max-w-2xl text-slate-600">
                {store.description}
              </p>
            )}
            <p className="mt-3 text-sm text-slate-400">
              {store.website_url?.replace(/^https?:\/\//, "")}
              {" · "}
              {coupons.length} active coupon
              {coupons.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <CouponBoard
          coupons={coupons}
          votes={votes}
          initialStore={store.name}
        />
      </div>

      <StoreFaq storeName={store.name} items={faqs} />
    </div>
  );
}
