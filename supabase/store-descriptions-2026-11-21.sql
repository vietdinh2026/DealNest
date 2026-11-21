-- DealNest: friendly SEO descriptions for the 12 stores (Browse Stores page).
-- Written 2026-11-21. Run in Supabase SQL Editor — takes effect immediately,
-- no redeploy needed. Safe to re-run (matches by store slug).

update stores set description = 'Nike is the world''s leading sports brand, famous for running shoes, sneakers and athletic apparel. Shop authentic Nike gear with our latest promo codes.'
where slug = 'nike';

update stores set description = 'Sephora is the go-to beauty destination for makeup, skincare, fragrance and haircare. Save more with verified Sephora coupon codes.'
where slug = 'sephora';

update stores set description = 'Chewy delivers pet food, treats, toys and supplies for dogs, cats and more, straight to your door.'
where slug = 'chewy';

update stores set description = 'NordVPN keeps your online activity private and secure with fast, reliable VPN protection.'
where slug = 'nordvpn';

update stores set description = 'Wayfair is one of the largest online furniture stores, with sofas, beds, rugs and decor for every room.'
where slug = 'wayfair';

update stores set description = 'HelloFresh delivers fresh ingredients and easy recipes to your door, making home cooking simple.'
where slug = 'hellofresh';

update stores set description = 'Adidas blends sport and street style with iconic sneakers, running shoes and activewear.'
where slug = 'adidas';

update stores set description = 'Ulta Beauty is America''s largest beauty retailer, with makeup, skincare, haircare and salon services.'
where slug = 'ulta';

update stores set description = 'Target is your one-stop shop for everyday essentials, home goods, electronics, clothing and groceries.'
where slug = 'target';

update stores set description = 'Walmart offers everyday low prices on groceries, electronics and home essentials, with free delivery over $35.'
where slug = 'walmart';

update stores set description = 'Booking.com is the world''s leading hotel booking site, with millions of properties worldwide.'
where slug = 'booking';

update stores set description = 'Domino''s is America''s favorite pizza delivery chain, serving hot, fresh pizzas in 30 minutes or less.'
where slug = 'dominos';

-- Quick check: should list 12 rows.
-- select slug, description from stores order by name;
