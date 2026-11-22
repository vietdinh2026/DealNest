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
  /** Store this guide is about (its live coupons are shown on the page). */
  storeSlug?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
}

/**
 * Long-form savings guides. Every fact here was checked against deal
 * sites in November 2026; anything that changes often (the actual
 * codes) is NOT written into the text — the guide page renders the
 * store's live coupons from the database instead, so the page can
 * never show a stale code.
 */
export const GUIDES: Guide[] = [
  {
    slug: "how-to-save-at-nike",
    title: "How to Save at Nike: Promo Codes, Membership & Sale Tips (2026)",
    description:
      "The working ways to save at Nike in 2026: current promo codes, free Nike Membership perks, verified 10% discounts, and the best sale windows.",
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
  return GUIDES.find((g) => g.slug === slug);
}

export function getGuideForStore(storeSlug: string): Guide | undefined {
  return GUIDES.find((g) => g.storeSlug === storeSlug);
}
