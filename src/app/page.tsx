import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import CouponBoard from "@/components/CouponBoard";
import { getActiveCoupons, getAllStores } from "@/lib/data";

export const dynamic = "force-dynamic";
// Never cache Supabase reads: without this, Next.js caches the fetch
// result from the first request and later SQL edits (new codes, new
// descriptions) would not show up until a redeploy.
export const revalidate = 0;

export const metadata: Metadata = {
  title: "DealNest — Verified Coupons & Promo Codes",
  description:
    "Find working coupon codes and deals from top US stores. Save on fashion, beauty, pets, software, home goods and more.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DealNest — Verified Coupons & Promo Codes",
    description:
      "Find working coupon codes and deals from top US stores. Save on fashion, beauty, pets, software, home goods and more.",
    url: "/",
    type: "website",
  },
};

function normalizeBaseUrl(rawUrl?: string): string {
  const fallback = "https://dealnest.online";
  return (rawUrl || fallback).trim().replace(/\/+$/, "");
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { store?: string };
}) {
  const { coupons, votes } = await getActiveCoupons();

  // Legacy store links (?store=Nike) redirect to the canonical
  // SEO-friendly store page (/stores/nike). The store page is the only
  // copy of the store header — the homepage must NOT render a second
  // copy of the same content.
  const storeParam = searchParams?.store?.trim().toLowerCase();
  if (storeParam) {
    const byName =
      coupons.find(
        (c) => c.store?.name?.toLowerCase() === storeParam
      )?.store ?? null;
    if (byName) redirect(`/stores/${byName.slug}`);

    // The store may have no active coupons, so look it up directly
    // by name or slug as a fallback.
    const stores = await getAllStores();
    const byStore =
      stores.find(
        (s) =>
          s.name.toLowerCase() === storeParam ||
          s.slug.toLowerCase() === storeParam
      ) ?? null;
    if (byStore) redirect(`/stores/${byStore.slug}`);
    // Unknown store: fall through to the generic hero below.
  }

  const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DealNest",
    url: baseUrl,
    description:
      "Verified coupons and promo codes from top US stores, checked daily.",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DealNest",
    url: baseUrl,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero */}
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

      {/* Real offers banner */}
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
        <strong>Real offers, checked Nov 21, 2026:</strong> every coupon below
        is a current public offer from the store — no sample codes. Offers
        expire fast and some only work for new customers or members, so if
        one doesn&apos;t work, please report it with the “Report broken code”
        link on the coupon.
      </div>

      <div id="coupons" className="mt-8">
        <CouponBoard coupons={coupons} votes={votes} />
      </div>

      {/* Savings guides */}
      <section className="mt-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Savings guides</h2>
          <Link
            href="/guides"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            All guides →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              href: "/guides/how-to-save-at-nike",
              title: "How to Save at Nike",
              text: "Promo codes, free membership perks and the best sale windows.",
            },
            {
              href: "/guides/how-to-save-at-chewy",
              title: "How to Save at Chewy",
              text: "First Autoship discounts, free shipping and 5% off every order.",
            },
            {
              href: "/guides/black-friday-2026",
              title: "Black Friday 2026",
              text: "The biggest live codes and deals, updated daily.",
            },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-2xl border bg-white p-5 hover:border-brand-300"
            >
              <h3 className="font-bold">{g.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{g.text}</p>
            </Link>
          ))}
        </div>
      </section>

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
