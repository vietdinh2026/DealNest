import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealnest.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DealNest — Verified Coupons & Promo Codes",
  description:
    "Find working coupon codes and deals from top US stores. Save on fashion, beauty, pets, software, home goods and more.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DealNest — Verified Coupons & Promo Codes",
    description:
      "Find working coupon codes and deals from top US stores. Save on fashion, beauty, pets, software, home goods and more.",
    url: "/",
    siteName: "DealNest",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-brand-600">
              Deal<span className="text-slate-900">Nest</span>
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium sm:gap-2">
              <Link href="/" className="rounded-lg px-3 py-2 hover:bg-slate-100">Coupons</Link>
              <Link href="/stores" className="rounded-lg px-3 py-2 hover:bg-slate-100">Stores</Link>
              <Link href="/submit" className="rounded-lg px-3 py-2 hover:bg-slate-100">Submit a Coupon</Link>
              <Link href="/admin" className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100">Owner</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-8">{children}</main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/about" className="hover:text-slate-900">About Us</Link>
              <Link href="/contact" className="hover:text-slate-900">Contact</Link>
              <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
              <Link href="/disclosure" className="hover:text-slate-900">Affiliate Disclosure</Link>
              <Link href="/submit" className="hover:text-slate-900">Submit a Coupon</Link>
              <Link href="/stores" className="hover:text-slate-900">All Stores</Link>
            </div>
            <p className="mt-4">
              DealNest is a coupon-sharing site. We may earn a commission when you shop
              through links on this site, at no extra cost to you. See our{" "}
              <Link href="/disclosure" className="underline">Affiliate Disclosure</Link>.
            </p>
            <p className="mt-2">© {new Date().getFullYear()} DealNest. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
