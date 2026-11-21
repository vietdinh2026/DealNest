-- DealNest: replace the 12 SAMPLE coupons with REAL public offers.
-- Verified 2026-11-21 from deal sites (Slickdeals, DealNews, CyberNews,
-- Comparitech, DontPayFull) and, for Walmart THANKFUL, Walmart's own
-- announcement. Codes are public offers — some only work for new
-- customers, members, or in the store's app; check the description.
--
-- HOW TO RUN: Supabase dashboard -> SQL Editor -> New query -> paste
-- this whole file -> Run. Takes effect immediately, no redeploy needed.
-- The UPDATEs match by store slug, so they are safe to re-run.
--
-- NOTE: affiliate_url is the plain store URL and affiliate_network is
-- NULL for now — DealNest has no affiliate links yet (applications
-- pending). Update those two columns when each program approves you.

-- Nike: early Black Friday code, verified working Nov 16-20, 2026.
update coupons set
  title = 'Extra 25% Off Select Styles',
  code = 'EARLYBF',
  description = 'Nike''s early Black Friday code — extra 25% off select styles at checkout.',
  discount_type = 'percent', discount_value = 25,
  affiliate_url = 'https://www.nike.com', affiliate_network = null,
  expires_at = '2026-11-30 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'nike');

-- Sephora: 20% off for free Beauty Insider members, through Nov 30.
update coupons set
  title = '20% Off Any Purchase for Beauty Insiders',
  code = 'SPICEBOMB',
  description = '20% off any purchase for Beauty Insider members (free to join).',
  discount_type = 'percent', discount_value = 20,
  affiliate_url = 'https://www.sephora.com', affiliate_network = null,
  expires_at = '2026-11-30 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'sephora');

-- Chewy: 50% off first Autoship order on select items, through Dec 31.
update coupons set
  title = '50% Off Your First Autoship Order',
  code = 'MORE4LESS',
  description = '50% off your first Autoship order on select pet food and supplies.',
  discount_type = 'percent', discount_value = 50,
  affiliate_url = 'https://www.chewy.com', affiliate_network = null,
  expires_at = '2026-12-31 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'chewy');

-- NordVPN: Black Friday deal, no code needed — discount applies at checkout.
update coupons set
  title = 'Up to 78% Off 2-Year Plans + 3 Free Months',
  code = null,
  description = 'Black Friday deal — up to 78% off 2-year plans plus 3 extra months free. No code needed.',
  discount_type = 'percent', discount_value = 78,
  affiliate_url = 'https://nordvpn.com', affiliate_network = null,
  expires_at = '2026-12-09 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'nordvpn');

-- Wayfair: extra 10% off select items in the app, through Dec 6.
update coupons set
  title = 'Extra 10% Off Select Items in the App',
  code = 'APP10',
  description = 'Extra 10% off select furniture and home essentials in the Wayfair app.',
  discount_type = 'percent', discount_value = 10,
  affiliate_url = 'https://www.wayfair.com', affiliate_network = null,
  expires_at = '2026-12-06 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'wayfair');

-- HelloFresh: 50% off first box for new customers.
update coupons set
  title = '50% Off Your First Box',
  code = 'SOYUMMY4LIFE',
  description = '50% off your first HelloFresh meal kit box for new customers.',
  discount_type = 'percent', discount_value = 50,
  affiliate_url = 'https://www.hellofresh.com', affiliate_network = null,
  expires_at = null, is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'hellofresh');

-- Adidas: 15% off qualifying styles online, stacks with sale prices.
update coupons set
  title = '15% Off Qualifying Online Styles',
  code = 'DN15',
  description = '15% off qualifying styles online — stacks with Black Friday sale prices.',
  discount_type = 'percent', discount_value = 15,
  affiliate_url = 'https://www.adidas.com', affiliate_network = null,
  expires_at = '2026-11-30 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'adidas');

-- Ulta: 10% off sitewide. (The old GIFTS $10-off-$50 code expired Nov 8.)
update coupons set
  title = '10% Off Sitewide',
  code = 'FLEX10',
  description = '10% off your Ulta Beauty order sitewide.',
  discount_type = 'percent', discount_value = 10,
  affiliate_url = 'https://www.ulta.com', affiliate_network = null,
  expires_at = null, is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'ulta');

-- Target: 25% off eligible items, through Dec 31.
update coupons set
  title = '25% Off Eligible Items',
  code = 'STYLE',
  description = '25% off eligible items at Target, online and in store.',
  discount_type = 'percent', discount_value = 25,
  affiliate_url = 'https://www.target.com', affiliate_network = null,
  expires_at = '2026-12-31 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'target');

-- Walmart: free Express Delivery on a $35+ holiday order (per Walmart's
-- own announcement). The old WALMART20 code had no Walmart terms behind it.
update coupons set
  title = 'Free Express Delivery on $35+ Holiday Orders',
  code = 'THANKFUL',
  description = 'Free Express Delivery on a $35+ order that includes a featured Thanksgiving item.',
  discount_type = 'free_shipping', discount_value = null,
  affiliate_url = 'https://www.walmart.com', affiliate_network = null,
  expires_at = '2026-11-30 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'walmart');

-- Booking.com: Black Friday sale, no code needed — discount shows on site.
update coupons set
  title = 'Black Friday: Up to 40% Off Stays Worldwide',
  code = null,
  description = 'Black Friday deals from 30% off, up to 40% off stays at participating properties. No code needed.',
  discount_type = 'percent', discount_value = 40,
  affiliate_url = 'https://www.booking.com', affiliate_network = null,
  expires_at = '2026-12-02 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'booking');

-- Domino's: 50% off menu-priced pizzas, verified applied Oct 11, 2026.
update coupons set
  title = '50% Off Menu-Priced Pizzas',
  code = '50OFF',
  description = '50% off all menu-priced pizzas for carryout or delivery.',
  discount_type = 'percent', discount_value = 50,
  affiliate_url = 'https://www.dominos.com', affiliate_network = null,
  expires_at = '2026-12-01 23:59:59+00', is_verified = false, status = 'active'
where store_id = (select id from stores where slug = 'dominos');

-- Quick check (run after the updates): should list 12 rows, all active.
-- select s.name, c.title, c.code, c.discount_type, c.discount_value,
--        c.expires_at from coupons c join stores s on s.id = c.store_id
-- order by s.name;
