import type { FaqItem } from "./faq";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  /** Store this guide is about (its live coupons are shown on the page). */
  storeSlug?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
}

export const GUIDES: Guide[] = [
  {
    slug: "how-to-save-at-sephora",
    title: "How to Save at Sephora: Beauty Insider, Promo Codes & Sale Events (2026)",
    description:
      "Practical ways to save at Sephora in 2026: Beauty Insider tiers, stackable promo codes, free sample perks, Birthday Gifts, and the best sale windows.",
    updatedAt: "2026-11-24",
    storeSlug: "sephora",
    intro: [
      "Sephora rarely runs random sitewide clearance markdowns every week, so knowing how Beauty Insider perks, promo codes, and seasonal events line up makes a big difference. A smart routine combines the right tier discount or promo code with free samples and timely reward redemptions.",
      "Before checking out, look at the live Sephora offers listed on DealNest so you can compare active promo codes against whatever Beauty Insider perk or gift-with-purchase is running today.",
    ],
    sections: [
      {
        heading: "How Sephora promo codes and perks work",
        paragraphs: [
          "Sephora generally lets you apply one promo code per order at checkout. Depending on the campaign, a code may unlock a percentage off an eligible order, a targeted brand discount, a deluxe sample, or a free beauty bag when your cart hits a minimum spend.",
          "Because codes rotate frequently and some have brand or item exclusions, always test the best active code in your bag before paying and check whether a gift-with-purchase gives you better value than a small point redemption.",
        ],
      },
      {
        heading: "Get more value from Beauty Insider",
        paragraphs: [
          "Beauty Insider is Sephora's free loyalty program and the easiest way to save consistently across the year. Members earn points on qualifying purchases, get a free Birthday Gift during their birthday month, and unlock seasonal Savings Events based on tier (Insider, VIB, and Rouge).",
          "If you only shop occasionally, the free base tier still gets you points, birthday perks, and access to member promos without needing to force extra spend just to hit a higher tier.",
        ],
        bullets: [
          "Free to join with points earned on eligible orders",
          "Free Birthday Gift during your birthday month",
          "Tiered access to seasonal Savings Events and member offers",
          "Points can be redeemed in the Rewards Bazaar when available",
        ],
      },
      {
        heading: "Free shipping, samples, and smart cart habits",
        paragraphs: [
          "Beauty Insider members typically receive free standard shipping on orders without a shipping minimum, while adding free samples at checkout helps you test skincare or fragrance before committing to full sizes.",
          "To avoid overspending on skincare, makeup, or haircare, keep a running wishlist of restocks and new launches, check unit prices or travel sizes first, and pair your order with an active live offer rather than buying on impulse.",
        ],
      },
      {
        heading: "Best times to shop Sephora",
        paragraphs: [
          "Sephora's biggest savings moments cluster around seasonal Beauty Insider Savings Events, Black Friday and Cyber Monday, and end-of-year holiday sets and value kits.",
          "Value sets and holiday gift editions often deliver strong cost-per-milliliter value on popular skincare and fragrance, especially when paired with a timely promo code or member event.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best Sephora promo code today?",
        answer:
          "Active Sephora promotions change regularly depending on current sales and events. Check the live Sephora codes on DealNest right before checkout to see what is currently working.",
      },
      {
        question: "Can you stack multiple promo codes at Sephora?",
        answer:
          "Usually Sephora allows one promo code per order at checkout, so compare your options—such as an active code versus a points reward or gift-with-purchase—and pick the one that saves you the most.",
      },
      {
        question: "Is Beauty Insider free to join?",
        answer:
          "Yes, joining Beauty Insider is free and lets you earn points on qualifying purchases, claim a birthday perk during your birthday month, and access member offers.",
      },
      {
        question: "How do I get free samples on a Sephora order?",
        answer:
          "When eligible, you can select complimentary samples on the checkout or bag screen before completing your order, subject to availability.",
      },
    ],
  },
  {
    slug: "how-to-save-at-nike",
    title: "How to Save at Nike: Promo Codes, Membership & Sale Tips (2026)",
    description:
      "The working ways to save at Nike in 2026: current promo codes, free Nike Membership perks, verified 10% discounts, and the best sale windows.",
    updatedAt: "2026-11-21",
    storeSlug: "nike",
    intro: [
      "Nike rarely gives a sitewide code, but the savings stack up fast once you know how the layers work: a promo code on top of a sale price, free membership shipping, and a verified discount if you qualify. This guide covers every method that actually works in 2026.",
      "The fastest win is the live code list at the bottom of this page — it always shows the best Nike offer on DealNest right now, checked against deal sites and updated daily.",
    ],
    sections: [
      {
        heading: "Nike promo codes: how they work",
        paragraphs: [
          "Nike promo codes usually take an extra percentage off select sale styles at checkout — not the full-price range. You enter the code in the promo code box in your bag before you pay. Codes change often and are usually tied to a sale event, so a code that worked last week may be gone today.",
          "The best approach is to shop the sale section first, then apply the best live code on top. Our Nike page always lists the current codes, and expired ones are hidden automatically.",
        ],
      },
      {
        heading: "Join Nike Membership — it's free",
        paragraphs: [
          "Nike Membership costs nothing and takes about two minutes to set up. It is the foundation of almost every Nike saving: free standard shipping on orders over $50, 60-day free returns, early access to sales, and a 10% discount during your birthday month.",
          "Without membership the free-shipping threshold is higher, so joining is worth it even if you only buy once a year.",
        ],
        bullets: [
          "Free shipping on orders over $50 for members",
          "60-day returns, no receipt needed",
          "10% off during your birthday month",
          "Early access to sale events",
        ],
      },
      {
        heading: "10% off for students, military and more",
        paragraphs: [
          "Nike offers a verified 10% discount to students (16 and up), active military and veterans, teachers, first responders and medical professionals. You verify your status once through SheerID, and the discount applies to eligible orders.",
        ],
      },
      {
        heading: "Best times to shop Nike",
        paragraphs: [
          "Nike runs its deepest discounts around seasonal sales, with markdowns of up to 50% off on select styles. Black Friday and Cyber Monday are the biggest windows of the year, and the early Black Friday sale usually starts more than a week before the day itself.",
          "Between events, the clearance section is where the best prices hide — sale shoes often start under $50, and a live promo code can take another percentage off on top.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best Nike promo code today?",
        answer:
          "Nike codes change with each sale event. The live list on our Nike page always shows the best current offer — check there before you check out, because a code from last week may already be expired.",
      },
      {
        question: "How do I use a Nike promo code?",
        answer:
          "Add items to your bag on nike.com, open the bag, click “Do you have a Promo Code?”, enter the code and click Apply. The discount shows before you pay.",
      },
      {
        question: "Is Nike Membership free?",
        answer:
          "Yes. Nike Membership is free to join, with no purchase required. Members get free shipping on orders over $50, 60-day returns and a 10% birthday discount.",
      },
      {
        question: "Does Nike have a student discount?",
        answer:
          "Yes — Nike offers 10% off for students aged 16 and over, verified through SheerID. The same 10% discount is available to military members, teachers, first responders and medical professionals.",
      },
    ],
  },
  {
    slug: "how-to-save-at-chewy",
    title: "How to Save at Chewy: Autoship, Free Shipping & Promo Codes (2026)",
    description:
      "How to save the most at Chewy in 2026: first Autoship discounts, free shipping thresholds, Autoship savings on every order, and the current live codes.",
    updatedAt: "2026-11-21",
    storeSlug: "chewy",
    intro: [
      "Chewy is one of the easiest stores to save at, because the savings are built into how you shop: the first Autoship order gets the deepest discount, repeat orders keep saving, and shipping is free once your cart is big enough.",
      "The live code list at the bottom of this page always shows the best Chewy offer on DealNest right now — check it before you order, because promo codes can beat Chewy's standard Autoship discount.",
    ],
    sections: [
      {
        heading: "Start with your first Autoship order",
        paragraphs: [
          "The single biggest saving at Chewy is the first Autoship order. Chewy's own Autoship program gives 35% off your first Autoship order (up to $20) — and a promo code from DealNest can be even better, so always compare the live code list before you check out.",
          "Autoship is Chewy's recurring delivery program: you pick the food, treats or supplies your pet needs and how often they arrive. You can change the schedule or skip a delivery any time.",
        ],
      },
      {
        heading: "Keep saving on every Autoship order",
        paragraphs: [
          "After the first order, Autoship saves 5% on every order. It adds up fast on food and litter you buy every month, and a recurring cart also makes it easy to clear the free-shipping threshold without thinking about it.",
        ],
      },
      {
        heading: "Free shipping thresholds",
        paragraphs: [
          "Standard orders ship free once they reach $49, and first-time customers only need $35 for free delivery. Orders arrive in 1–3 days. If your cart is just short of the threshold, adding a small toy or treat is usually cheaper than paying for shipping.",
        ],
        bullets: [
          "Free shipping on orders over $49",
          "Free shipping on first orders over $35",
          "1–3 day delivery on eligible items",
        ],
      },
      {
        heading: "Returns are free for a year",
        paragraphs: [
          "Chewy offers free 365-day returns. If a food or product doesn't work for your pet, you can return it — that makes it low-risk to try a new brand with a promo code.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best Chewy promo code today?",
        answer:
          "Chewy's best offer is usually on the first Autoship order. The live list on our Chewy page always shows the best current code — check there before you order.",
      },
      {
        question: "How does Chewy Autoship work?",
        answer:
          "You choose the products and delivery frequency, and Chewy ships them automatically. The first Autoship order gets the deepest discount, later orders save 5%, and you can change or skip deliveries any time.",
      },
      {
        question: "Does Chewy offer free shipping?",
        answer:
          "Yes — orders over $49 ship free, and first-time customers only need $35 for free delivery. Delivery takes 1–3 days on eligible items.",
      },
      {
        question: "Can I return items to Chewy for free?",
        answer:
          "Yes. Chewy offers free returns for 365 days.",
      },
    ],
  },
  {
    slug: "black-friday-2026",
    title: "Black Friday 2026: Best Coupon Codes & Deals",
    description:
      "Black Friday 2026 falls on November 27, with Cyber Monday on November 30. Here are the best live coupon codes and deals on DealNest, updated daily.",
    updatedAt: "2026-11-21",
    intro: [
      "Black Friday 2026 falls on Friday, November 27, and Cyber Monday follows on Monday, November 30. Most stores start their sales early — early Black Friday deals are already live at Nike, Chewy, Sephora and more.",
      "The list below always shows the biggest live offers on DealNest right now, sorted by discount. Codes expire fast during Black Friday week, so check the expiry date on each coupon before you shop.",
    ],
    sections: [
      {
        heading: "When do Black Friday sales start?",
        paragraphs: [
          "Stores no longer wait for the Friday itself. Early Black Friday sales typically start one to two weeks before, and the best promo codes often appear in that early window — then get replaced by a new code for the main event.",
          "If you see a code you like, use it: Black Friday codes are often single-use per event and the deepest ones can end before the Friday.",
        ],
      },
      {
        heading: "How to get the most out of Black Friday codes",
        paragraphs: [
          "The biggest wins come from stacking: a sale price, plus a promo code on top, plus free membership shipping. At Nike that can mean a sale shoe, an extra percentage off with a code, and free shipping over $50 as a member. At Chewy, a first Autoship discount stacks with Black Friday pet deals.",
          "Three rules for the week: shop the sale section first, apply the code before you pay, and check the expiry — Black Friday codes can end at midnight with no warning.",
        ],
        bullets: [
          "Shop the sale section first, then apply a code on top",
          "Join the store's free membership for lower free-shipping thresholds",
          "Use the code early — the best ones can end before Black Friday itself",
        ],
      },
      {
        heading: "Cyber Monday: November 30, 2026",
        paragraphs: [
          "Cyber Monday follows Black Friday by three days and is usually the best day for online-only codes. If a Black Friday code you wanted has expired, check back on Cyber Monday — stores often release a fresh code for the day.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is Black Friday 2026?",
        answer:
          "Black Friday 2026 falls on Friday, November 27. Most stores start their sales one to two weeks early, and Cyber Monday follows on November 30, 2026.",
      },
      {
        question: "Do Black Friday promo codes expire quickly?",
        answer:
          "Yes. Black Friday codes often end at midnight on the day they are issued, or when the event ends. DealNest hides expired codes automatically, so anything listed here is still within its dates.",
      },
      {
        question: "Can I stack a Black Friday code on a sale price?",
        answer:
          "At most stores, yes — promo codes usually apply on top of sale prices for select styles. The coupon description states what each code applies to, and some codes exclude clearance items.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  const normalized = slug.trim().toLowerCase();
  return GUIDES.find((g) => g.slug === normalized);
}

export function getGuideForStore(storeSlug: string): Guide | undefined {
  const normalized = storeSlug.trim().toLowerCase();
  return GUIDES.find((g) => g.storeSlug === normalized);
}
