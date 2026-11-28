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
    slug: "cyber-monday-2026",
    title: "Cyber Monday 2026: How to Win the Online-Only Deals (November 30)",
    description:
      "Cyber Monday 2026 is Monday, November 30: midnight deal drops, flash sales with timers, app-only codes and the tech that peaks on Monday — how to win the biggest online shopping day of the year.",
    updatedAt: "2026-11-28",
    intro: [
      "Cyber Monday began as the online-only answer to Black Friday, and it has stayed that way: no queues, no parking lots, just a browser and a clock. In 2026 it falls on Monday, November 30, and Adobe expects Americans to spend over $15 billion online in a single day — the biggest online shopping day of the season.",
      "That scale is also the trap. The best prices appear around midnight and disappear in hours, some discounts are real and some are dressed up, and the code that worked on Friday is already dead. This guide is about the mechanics that are specific to Monday: when the deals drop, how to be ready before they do, and how to tell a genuine cut from a fake one.",
    ],
    sections: [
      {
        heading: "The deals drop at midnight — and the good ones don't wait for morning",
        paragraphs: [
          "Many big stores open their Cyber Monday prices around midnight Eastern — 9 p.m. Sunday on the West Coast — and the deepest discounts are often flash deals with a countdown timer and a limited stock count. A laptop or a pair of headphones can be gone by breakfast, even though the sale page stays up all day.",
          "So treat Monday morning as the second wave, not the start. If there is one item you really want, be there when the clock turns over on Sunday night. Everything after that is what's left — still worth checking, but not the price you saw advertised.",
        ],
        bullets: [
          "Many stores go live around midnight Eastern, 9 p.m. Pacific on Sunday",
          "Flash deals run on a timer and a stock counter — when either hits zero, the price is gone",
          "Cyber Week keeps rolling after Monday, so a sold-out item can come back at a different price",
        ],
      },
      {
        heading: "Do your setup on Sunday night, not Monday morning",
        paragraphs: [
          "A flash deal gives you minutes, not an afternoon. On Sunday evening, sign in to the stores you plan to buy from, save your payment method and delivery address, and load the items you want into your cart or wishlist. Install the store's app too — some of Monday's best offers are app-only and never appear on the website.",
          "The test is simple: if you had to buy something in under two minutes right now, could you? If the answer involves typing a card number or resetting a password, fix it on Sunday. Monday morning is for clicking Buy, not for admin.",
        ],
      },
      {
        heading: "How to tell a real price cut from a dressed-up one",
        paragraphs: [
          "A percentage off means nothing without the starting price. Before you trust a '60% off' badge, check what the item actually sold for a week ago — search the model name, look at the price history on a tracker, or compare the same item at a second store. If the 'was' price only appeared last week, the discount is mostly theatre.",
          "Compare like with like, too: retailers run near-identical models with one letter different in the name, and the cheaper one may be last year's version. Match the full model number, not just the brand and the screen size, before you decide which store's deal is actually better.",
        ],
        bullets: [
          "Check the price from a week ago before trusting a 'was' price",
          "Compare the same item at a second store — the same model, not a lookalike",
          "A big percentage on an inflated starting price is not a saving",
        ],
      },
      {
        heading: "What actually peaks on Cyber Monday",
        paragraphs: [
          "Monday has always leaned toward tech: laptops, headphones, tablets, small appliances and smart-home gear are the categories where the deepest cuts land on November 30 rather than on Friday. Fashion and beauty run strong online too — laptops, smaller electronics, online-exclusive apparel and prestige beauty usually peak on Monday or the Sunday before.",
          "The flip side is what not to chase on Monday. Big items you want to see, sit on or try first — a sofa, a mattress, a pair of shoes in a tricky size — were Friday's in-store game. On Monday, buy the things you already know fit, and leave the try-before-you-buy items for a store visit.",
        ],
      },
      {
        heading: "Shipping and the Christmas clock",
        paragraphs: [
          "Cyber Monday still leaves plenty of time before Christmas: orders placed on November 30 arrive well ahead of the holiday with standard shipping at most big stores. What matters is the delivery estimate on the item itself — check it at checkout before you pay, because a deal that arrives after you need it is not a deal.",
          "Many stores drop their free-shipping minimums for the day, but not all of them, so confirm the shipping cost on the final total rather than assuming it. Holiday return windows are often longer than usual, stretching into January at several big retailers — worth a glance at the store's returns page before you order gifts.",
        ],
      },
      {
        heading: "Missed it on Friday? Monday is your second chance",
        paragraphs: [
          "Stores know that plenty of shoppers missed the Black Friday code they wanted, so many release a fresh code just for Monday. On Monday morning, open the store's page on DealNest first: what you see there is live today, not a screenshot from Friday, and it is the fastest way to see whether a new code beats the automatic sale price.",
          "And if the item you want sells out, don't pay a marked-up price somewhere else in a panic. Cyber Week deals run through the following days at several big stores — Walmart's event runs to December 2, Best Buy's Cyber Week to December 6 — so check back on the store page before you settle for second best.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is Cyber Monday 2026?",
        answer:
          "Cyber Monday 2026 is Monday, November 30, 2026 — three days after Black Friday (November 27). Adobe expects it to be the biggest online shopping day of the season, with over $15 billion spent online in a single day.",
      },
      {
        question: "Is Cyber Monday better than Black Friday?",
        answer:
          "It depends on what you are buying. Cyber Monday is online-only and usually wins for tech — laptops, headphones, tablets and small appliances — while Black Friday is better for in-store doorbusters and items you want to see before you buy. The two days now share most of their catalogue, so the real difference is the channel, not the size of the discount.",
      },
      {
        question: "What time do Cyber Monday deals start?",
        answer:
          "Many big stores go live around midnight Eastern on Monday, which is 9 p.m. Pacific on Sunday night. Walmart's event opens at 12:01 a.m. Eastern, and Amazon runs its event on Pacific time, so check the store's own page for the exact hour — and have your cart ready on Sunday evening either way.",
      },
      {
        question: "Do I need a promo code on Cyber Monday?",
        answer:
          "Not always — many Cyber Monday discounts apply automatically at checkout. But several stores also release Monday-only codes, so it is worth opening the store's live page on DealNest on Monday morning to see whether a code beats the automatic price.",
      },
      {
        question: "What if the deal I want sells out?",
        answer:
          "Check back during Cyber Week: several big stores keep deals running for days after Monday, and sold-out items sometimes come back. If the price you missed was on a specific model, compare the same model at a second store before paying more elsewhere.",
      },
    ],
  },
  {
    slug: "how-to-save-at-kohls",
    title: "How to Save at Kohl's: Kohl's Cash, Rewards & Stacking (2026)",
    description:
      "How to save the most at Kohl's in 2026: earn Kohl's Cash during earn events, spend it inside the redemption window, stack it with coupons in the right order, and let Kohl's Rewards pay you back every month.",
    updatedAt: "2026-11-26",
    storeSlug: "kohls",
    intro: [
      "Kohl's does not save you money the way most stores do. Instead of one big discount, it pays you in Kohl's Cash — dollars you earn on one trip and spend on the next — and the whole game is timing: earn during the right window, then come back and spend it before the redemption window closes.",
      "Add in the free Kohl's Rewards program, which turns 5% of everything you spend into more Kohl's Cash every month, and a Kohl's Card that lifts that rate to 7.5%, and a single order can earn three ways at once. This guide explains the order to use them in, what counts toward earning, and the traps that quietly eat your Kohl's Cash.",
    ],
    sections: [
      {
        heading: "Kohl's Cash: earn now, spend later — on Kohl's schedule",
        paragraphs: [
          "Kohl's Cash is a dollar-off coupon you earn during select promotional events: $10 for every $50 spent in a single transaction. Earning is counted on what you actually pay for merchandise after all discounts and coupons, before tax — so a $60 cart with a 20% coupon drops to $48 and earns nothing, while the same $60 at full price earns $10.",
          "The catch is that earning and spending happen in two separate windows. You earn during the earn period, then you can only redeem during the dates printed on the coupon — not before, not after. In store you get a printed coupon with your receipt; online, at a kiosk or in the app, it arrives by email within 24 hours. Put the redemption dates in your calendar the day you earn it: the window is short, and unused Kohl's Cash is forfeited.",
        ],
        bullets: [
          "Earn $10 Kohl's Cash for every $50 spent in one transaction, during earn events",
          "Earning is counted after discounts, before tax — gift cards and Sephora at Kohl's purchases do not earn",
          "Redeem only inside the printed window, in one transaction — any unused amount is lost",
        ],
      },
      {
        heading: "The stacking order decides how much you actually save",
        paragraphs: [
          "Kohl's lets you stack Kohl's Cash with promo codes — but the order they come off matters. Dollar-off discounts, including Kohl's Cash, are applied before percent-off coupons, so your percentage coupon applies to the smaller remaining total. A $100 cart with $20 of Kohl's Cash and a 25% coupon works out as $100 minus $20, then 25% off $80 — $60 in the end. If the percentage had applied first, the same order would have been $55.",
          "That $5 difference is the price of stacking them together. The practical rule: when you hold a strong percent-off coupon, use it on a trip without Kohl's Cash and save the Kohl's Cash for a trip where you have no percentage code. When you do stack, you can apply up to four promo codes plus up to six Kohl's Cash vouchers on a single online order.",
        ],
        bullets: [
          "Dollar-off coupons come off first, percent-off coupons second",
          "Use a big percent-off coupon on its own trip when you can — Kohl's Cash shrinks what it applies to",
          "Up to 4 promo codes and up to 6 Kohl's Cash vouchers per online order",
        ],
      },
      {
        heading: "Kohl's Rewards: 5% back every month, no card needed",
        paragraphs: [
          "Kohl's Rewards is free to join and needs no credit card: every qualifying purchase earns 5% back. On the first of each month your balance converts into Kohl's Cash in $5 increments — spend $100 in a month and $5 of Kohl's Cash lands in your account. Rewards-issued Kohl's Cash is valid for 30 days, and it stacks with event Kohl's Cash and promo codes.",
          "This is the quiet earner most shoppers ignore, because nothing happens at the register. Check your balance at the start of the month and plan a small trip around it — a $5 coupon that expires unused is the same as paying $5 too much.",
        ],
      },
      {
        heading: "The Kohl's Card and MVC: worth it only if you shop here often",
        paragraphs: [
          "Paying with a Kohl's Card lifts your Rewards rate from 5% to 7.5% and comes with a 35% discount on your first purchase. Spend $600 on the card in a calendar year and you reach Most Valued Customer (MVC) status, which brings monthly free-shipping events with no minimum — otherwise free standard shipping starts at $49.",
          "Do the math before you apply: if you spend well under $600 a year at Kohl's, the free Rewards tier already gives you most of the value, and the card's extra 2.5% will not change your year. If Kohl's is where you buy most of your family's clothes and home goods, the card plus MVC status pays for itself in shipping alone.",
        ],
      },
      {
        heading: "Black Friday Week: the one week the earn rate jumps",
        paragraphs: [
          "During Black Friday Week — November 22 to 28, 2026 — the earn rate rises to $15 of Kohl's Cash for every $50 spent, and the same rate carries into the Cyber Deals days of November 29 and 30. That is the best week of the year to plan a bigger earn trip: buy the gifts and winter clothes you were going to buy anyway, then return in the redemption window that follows to spend the Kohl's Cash on the things you held back.",
          "Before you shop, open the Kohl's page on DealNest: the live offers there are what you can actually use today, and the guide above is how to make them worth more. Check the live codes again at checkout, because Kohl's Cash earn rates and coupon terms can change from one day of the event to the next.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does Kohl's Cash work?",
        answer:
          "During a Kohl's Cash earn event you get $10 in Kohl's Cash for every $50 you spend in a single transaction, counted after discounts and before tax. You then redeem it only during the redemption dates printed on the coupon — in store or on Kohls.com — and any unused amount is forfeited.",
      },
      {
        question: "Can I use Kohl's Cash and a promo code together?",
        answer:
          "Yes, Kohl's Cash stacks with promo codes. Dollar-off discounts come off first and percent-off coupons second, so a percentage code applies to the smaller remaining total. You can use up to four promo codes and up to six Kohl's Cash vouchers on one online order.",
      },
      {
        question: "Do I need a Kohl's Card to earn Kohl's Rewards?",
        answer:
          "No. Kohl's Rewards is free to join with no card and earns 5% back on qualifying purchases. A Kohl's Card raises the rate to 7.5% and adds first-purchase savings and MVC status at $600 of card spend per year.",
      },
      {
        question: "What is the best Kohl's promo code today?",
        answer:
          "Kohl's codes change with each sale event, and the Kohl's Cash earn rate can change day to day during Black Friday Week. Check the live Kohl's codes on DealNest right before checkout to see what is currently working.",
      },
    ],
  },
  {
    slug: "black-friday-shopping-tips-2026",
    title: "Black Friday Shopping Tips 2026: Don't Pay Full Price — Check for a Promo Code First",
    description:
      "Black Friday 2026 shopping tips: check for a promo code before you pay, stack sale prices with codes, avoid fake discounts, and know when to shop — with live codes for Kohl's, Macy's, Target, Sephora, Ulta, Chewy, Wayfair and more.",
    updatedAt: "2026-11-24",
    intro: [
      "Black Friday 2026 falls on Friday, November 27, with Cyber Monday on Monday, November 30. The biggest mistake shoppers make is not a bad deal — it is a good deal paid for at full price because the promo code was never applied.",
      "Before you pay for anything, check the live codes on the store's DealNest page, copy the best code, and paste it in the promo-code box before you pay. It takes 30 seconds, and it is the easiest saving of the whole weekend.",
    ],
    sections: [
      {
        heading: "Find a code before you check out — every time",
        paragraphs: [
          "Do this for every order: find the store on DealNest first, copy the live code, shop as normal, then paste the code in the promo-code box before you pay. Check that the total changed — if it did not, read the code's terms for a minimum spend or excluded brands, and try the next live code on the store page.",
          "Codes change daily during Black Friday week, and the best ones can end before Friday itself. Check the live store page right before checkout, not a screenshot or a code from last week.",
        ],
        bullets: [
          "Check the store's live codes on DealNest before you shop",
          "Paste the code before you pay — most stores will not apply it afterwards",
          "If no code works, use 'Report broken code' so DealNest can check it",
        ],
      },
      {
        heading: "Make a list and a budget first",
        paragraphs: [
          "Write down what you actually need, with the store and the price you would be happy to pay, and set a total budget for the weekend. Check the regular price before the sale, compare the same item at two stores, and do not buy a 'deal' on something you would not buy at full price.",
        ],
      },
      {
        heading: "Stack the savings: sale price + code + free shipping",
        paragraphs: [
          "The biggest wins come from stacking: shop the sale section first, apply a promo code on top, and use free membership shipping where it exists. Check delivery costs before you celebrate — a 20% code is worthless if delivery costs more than you saved.",
        ],
      },
      {
        heading: "Watch out for Black Friday traps",
        paragraphs: [
          "Check the minimum spend, excluded brands and categories, and the return policy before you buy — especially on sale and clearance items. Doorbusters sell out fast, and 'buy more, save more' is only worth it if you genuinely need the extra items.",
        ],
      },
      {
        heading: "Timing: don't wait for Friday if the code is good now",
        paragraphs: [
          "Early Black Friday sales start one to two weeks before Friday, November 27, and the best codes often appear in that early window. If you see a code you like, use it — Black Friday codes can end at midnight with no warning. Cyber Monday, November 30, is usually the best day for online-only codes.",
        ],
      },
      {
        heading: "Where to look first, by what you're buying",
        paragraphs: [
          "Fashion and department stores: Kohl's, Macy's, Adidas and Target. Beauty: Sephora and Ulta — compare the same product at both, as one code per order is the norm. Home: Wayfair, Walmart and Target. Pets: Chewy — compare the live code with the Autoship offer. Food: HelloFresh and Domino's. Travel: Booking.com — check stay dates and cancellation terms. Health and software: Puritan's Pride and NordVPN.",
          "Every store above has a live code page on DealNest — open the store page from the guide's live offers or the All Stores page and check the codes there before you check out.",
        ],
      },
    ],
    faqs: [
      {
        question: "When is Black Friday 2026?",
        answer:
          "Black Friday 2026 is Friday, November 27, 2026. Most stores start their sales one to two weeks early, and Cyber Monday follows on Monday, November 30, 2026.",
      },
      {
        question: "Do I still need a promo code if the item is already on sale?",
        answer:
          "Yes — that is exactly when a code saves the most. Sale prices and promo codes usually stack, so the code is an extra discount on top of the sale price. Always check the store's live codes on DealNest before you pay.",
      },
      {
        question: "Can I use more than one promo code on one order?",
        answer:
          "Usually no. Most stores allow one promo code per order, so compare the live codes on the store page and pick the one that saves the most.",
      },
      {
        question: "What if the code doesn't work?",
        answer:
          "Check the minimum spend, expiry date and exclusions first. If it still does not work, try the next live code on the store page — and use 'Report broken code' on the coupon so DealNest can check it.",
      },
      {
        question: "Do Black Friday promo codes expire quickly?",
        answer:
          "Yes. Black Friday codes often end at midnight or when the event ends. DealNest hides expired codes automatically, so anything listed on a store page is still within its dates — but use a code as soon as you find a good one.",
      },
    ],
  },
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

export function getSortedGuides(): Guide[] {
  return [...GUIDES].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getGuide(slug: string): Guide | undefined {
  const normalized = slug.trim().toLowerCase();
  return GUIDES.find((g) => g.slug === normalized);
}

export function getGuideForStore(storeSlug: string): Guide | undefined {
  const normalized = storeSlug.trim().toLowerCase();
  return GUIDES.find((g) => g.storeSlug === normalized);
}
