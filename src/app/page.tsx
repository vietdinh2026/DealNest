import Link from "next/link";
import CouponBoard from "@/components/CouponBoard";
import StoreLogo from "@/components/StoreLogo";
import { getActiveCoupons } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams?: { store?: string };
}) {
  const { coupons, votes } = await getActiveCoupons();

  // When a store is selected (?store=Nike), show that store's header
  // (logo + name + description) instead of the generic hero. The store
  // record comes from the coupons' embedded store data — no extra query.
  const storeName = searchParams?.store;
  const storeCoupons = storeName
    ? coupons.filter((c) => c.store?.name === storeName)
    : [];
  const store = storeCoupons[0]?.store ?? null;

  return (
    <div>
      {store ? (
        <>
          <Link
            href="/stores"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            ← All stores
          </Link>
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
                  {storeCoupons.length} active coupon
                  {storeCoupons.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Hero */
        <section className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-10 text-white sm:px-10">
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Coupons &amp; promo codes that actually work
          </h1>
          <p className="mt-3 max-w-xl text-brand-100">
            Hand-checked deals from top US stores. Click a coupon, copy the code,
            and save at checkout — our links go straight to the store.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#coupons"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-brand-700"
            >
              Browse coupons
            </a>
            <Link
              href="/submit"
              className="rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Submit a coupon
            </Link>
          </div>
        </section>
      )}

      {/* Real offers banner */}
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
        <strong>Real offers, checked Nov 21, 2026:</strong> every coupon below
        is a current public offer from the store — no sample codes. Offers
        expire fast and some only work for new customers or members, so if
        one doesn&apos;t work, please report it with the “Report broken code”
        link on the coupon.
      </div>

      <div id="coupons" className="mt-8">
        <CouponBoard
          coupons={coupons}
          votes={votes}
          initialStore={searchParams?.store}
        />
      </div>

      {/* How it works */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "1. Find a deal",
            text: "Search or filter by store and category to find a coupon for what you're buying.",
          },
          {
            title: "2. Copy the code",
            text: "Tap “Show Code” to reveal and copy the promo code — or go straight to the store.",
          },
          {
            title: "3. Save at checkout",
            text: "Paste the code at checkout and save — no account or sign-up needed.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-5">
            <h3 className="font-bold">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
