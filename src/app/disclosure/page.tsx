export const metadata = {
  title: "Affiliate Disclosure — DealNest",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          DealNest is a coupon-sharing website. Some of the links on this site are
          affiliate links, which means we may earn a commission if you click a link
          and make a purchase — <strong>at no additional cost to you</strong>.
        </p>
        <p>
          We work with affiliate networks and programs including ShareASale,
          Commission Junction (CJ), Impact, Rakuten Advertising, Awin and Amazon
          Associates. When you shop through one of our links, the store or network
          may pay us a percentage of your order or a fixed fee.
        </p>
        <p>
          Affiliate commissions help us keep DealNest free and pay for the work of
          finding, checking and updating coupon codes. They do not affect the price
          you pay, and they do not influence which coupons we list: we publish
          codes we believe will help you save, whether or not they earn us a
          commission.
        </p>
        <p>
          Coupon codes can expire or stop working without notice. We do our best
          to verify codes and remove broken ones, but we cannot guarantee that
          every code on this site will work for every order. If a code doesn&apos;t
          work, please use the “Report broken code” link on the coupon so we can
          check it.
        </p>
        <p>
          This disclosure is provided in accordance with the U.S. Federal Trade
          Commission&apos;s guidelines on endorsements and testimonials (16 CFR
          Part 255). If you have any questions about how affiliate links work on
          DealNest, contact us at the email address listed on our submission page.
        </p>
      </div>
    </div>
  );
}
