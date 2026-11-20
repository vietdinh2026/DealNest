import Link from "next/link";
import CouponBoard from "@/components/CouponBoard";
import { getActiveCoupons } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams?: { store?: string };
}) {
  const { coupons, votes } = await getActiveCoupons();

  return (
    <div>
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-10 text-white sm:px-10">
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Coupons &amp; promo codes that actually work
        </h1>
        <p className="mt-3 max-w-xl text-brand-100">
          Hand-checked deals from top US stores. Click a coupon, copy the code,
          and save at checkout — we earn a small commission from the store, at no
          extra cost to you.
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

      {/* Starter catalog banner */}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <strong>Starter catalog:</strong> the coupons below are sample data
        included with the first version of DealNest. Real, working codes from
        our affiliate partners will replace them as stores are onboarded.
        Codes marked “Verified by DealNest” are the only ones we have checked
        ourselves.
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
            text: "Paste the code at checkout. The store pays us a small commission; you pay nothing extra.",
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
