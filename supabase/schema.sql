-- ============================================================
-- DealNest — Supabase (Postgres) schema
-- Run this file in the Supabase SQL Editor (Dashboard > SQL Editor).
-- It creates all tables, enables Row Level Security with permissive
-- read policies, and seeds a SAMPLE starter catalog of 12 US
-- stores/coupons. The seed codes are SAMPLE data only — replace them
-- with real affiliate links/codes from your networks before going live.
-- ============================================================

-- ---------- Tables ----------

create table if not exists stores (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text,
  website_url text,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists coupons (
  id uuid primary key default gen_random_uuid(),
  store_id uuid not null references stores(id) on delete cascade,
  title text not null,
  code text,
  description text,
  discount_type text not null default 'percent'
    check (discount_type in ('percent', 'fixed', 'free_shipping', 'other')),
  discount_value numeric,
  affiliate_url text not null,
  affiliate_network text,
  category text not null default 'Other',
  expires_at timestamptz,
  is_verified boolean not null default false,
  status text not null default 'active'
    check (status in ('active', 'expired', 'reported')),
  created_at timestamptz not null default now()
);

create table if not exists clicks (
  id uuid primary key default gen_random_uuid(),
  coupon_id uuid not null references coupons(id) on delete cascade,
  clicked_at timestamptz not null default now(),
  referrer text
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  coupon_id uuid not null references coupons(id) on delete cascade,
  reason text,
  status text not null default 'open'
    check (status in ('open', 'resolved')),
  created_at timestamptz not null default now()
);

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  store_name text not null,
  coupon_title text not null,
  code text,
  affiliate_url text,
  email text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

-- "Did it work?" up/down votes on coupons
create table if not exists votes (
  id uuid primary key default gen_random_uuid(),
  coupon_id uuid not null references coupons(id) on delete cascade,
  vote text not null check (vote in ('up', 'down')),
  created_at timestamptz not null default now()
);

-- Messages sent through the /contact page
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  topic text not null default 'Other',
  message text not null,
  status text not null default 'open'
    check (status in ('open', 'resolved')),
  created_at timestamptz not null default now()
);

-- ---------- Indexes ----------

create index if not exists idx_coupons_store_id on coupons(store_id);
create index if not exists idx_coupons_status on coupons(status);
create index if not exists idx_coupons_category on coupons(category);
create index if not exists idx_coupons_expires_at on coupons(expires_at);
create index if not exists idx_clicks_coupon_id on clicks(coupon_id);
create index if not exists idx_clicks_clicked_at on clicks(clicked_at);
create index if not exists idx_reports_coupon_id on reports(coupon_id);
create index if not exists idx_reports_status on reports(status);
create index if not exists idx_submissions_status on submissions(status);
create index if not exists idx_votes_coupon_id on votes(coupon_id);
create index if not exists idx_contact_messages_status on contact_messages(status);

-- ---------- Row Level Security ----------
-- Public read access for the storefront; writes go through the
-- service-role key in server actions / API routes. Tighten these
-- policies (and add admin auth) before going live.

alter table stores enable row level security;
alter table coupons enable row level security;
alter table clicks enable row level security;
alter table reports enable row level security;
alter table submissions enable row level security;
alter table votes enable row level security;
alter table contact_messages enable row level security;

drop policy if exists "public read stores" on stores;
create policy "public read stores" on stores for select using (true);

drop policy if exists "public read coupons" on coupons;
create policy "public read coupons" on coupons for select using (true);

drop policy if exists "public read clicks" on clicks;
create policy "public read clicks" on clicks for select using (true);

drop policy if exists "public read reports" on reports;
create policy "public read reports" on reports for select using (true);

drop policy if exists "public read submissions" on submissions;
create policy "public read submissions" on submissions for select using (true);

drop policy if exists "public read votes" on votes;
create policy "public read votes" on votes for select using (true);

-- contact_messages has NO public read policy on purpose: messages contain
-- visitors' names and emails. Only the owner (service_role, which
-- bypasses RLS) can read them.

-- ---------- Table privileges ----------
-- RLS policies alone are NOT enough: the anon/authenticated roles also
-- need SELECT privileges on the tables, otherwise every read fails with
-- "permission denied for table ..." (PostgREST error 42501).
grant select on public.stores to anon, authenticated;
grant select on public.coupons to anon, authenticated;
grant select on public.votes to anon, authenticated;
grant select on public.clicks to anon, authenticated;
grant select on public.reports to anon, authenticated;
grant select on public.submissions to anon, authenticated;

-- Server writes go through the service_role key, which bypasses RLS but
-- NOT table privileges. Since 2026-10-30 Supabase no longer auto-grants
-- privileges on new tables, so every table the server writes to needs an
-- explicit GRANT to service_role, or writes fail with 42501
-- "permission denied for table ...".
grant select, insert, update, delete on public.stores to service_role;
grant select, insert, update, delete on public.coupons to service_role;
grant select, insert, update, delete on public.votes to service_role;
grant select, insert, update, delete on public.clicks to service_role;
grant select, insert, update, delete on public.reports to service_role;
grant select, insert, update, delete on public.submissions to service_role;
grant select, insert, update, delete on public.contact_messages to service_role;

-- ---------- Seed data: real public offers (verified 2026-11-21) ----------
-- 12 real US store offers, checked against deal sites on Nov 21, 2026.
-- Codes are PUBLIC offers, not affiliate codes — affiliate_url is the
-- plain store URL and affiliate_network is NULL until each program
-- approves DealNest. is_verified is FALSE for every seed coupon: the
-- codes were verified from deal sites, not by placing test orders, so
-- the site never shows a fake "Verified" badge.
-- To refresh the live site with these values, run
-- supabase/real-coupons-2026-11-21.sql in the SQL Editor instead
-- (this seed only inserts when the coupons table is empty).

insert into stores (name, slug, website_url, description) values
  ('Nike', 'nike', 'https://www.nike.com', 'Nike is the world''s leading sports brand, famous for running shoes, sneakers and athletic apparel. Shop authentic Nike gear with our latest promo codes.'),
  ('Sephora', 'sephora', 'https://www.sephora.com', 'Sephora is the go-to beauty destination for makeup, skincare, fragrance and haircare. Save more with verified Sephora coupon codes.'),
  ('Chewy', 'chewy', 'https://www.chewy.com', 'Chewy delivers pet food, treats, toys and supplies for dogs, cats and more, straight to your door.'),
  ('NordVPN', 'nordvpn', 'https://nordvpn.com', 'NordVPN keeps your online activity private and secure with fast, reliable VPN protection.'),
  ('Wayfair', 'wayfair', 'https://www.wayfair.com', 'Wayfair is one of the largest online furniture stores, with sofas, beds, rugs and decor for every room.'),
  ('HelloFresh', 'hellofresh', 'https://www.hellofresh.com', 'HelloFresh delivers fresh ingredients and easy recipes to your door, making home cooking simple.'),
  ('Adidas', 'adidas', 'https://www.adidas.com', 'Adidas blends sport and street style with iconic sneakers, running shoes and activewear.'),
  ('Ulta', 'ulta', 'https://www.ulta.com', 'Ulta Beauty is America''s largest beauty retailer, with makeup, skincare, haircare and salon services.'),
  ('Target', 'target', 'https://www.target.com', 'Target is your one-stop shop for everyday essentials, home goods, electronics, clothing and groceries.'),
  ('Walmart', 'walmart', 'https://www.walmart.com', 'Walmart offers everyday low prices on groceries, electronics and home essentials, with free delivery over $35.'),
  ('Booking.com', 'booking', 'https://www.booking.com', 'Booking.com is the world''s leading hotel booking site, with millions of properties worldwide.'),
  ('Domino''s', 'dominos', 'https://www.dominos.com', 'Domino''s is America''s favorite pizza delivery chain, serving hot, fresh pizzas in 30 minutes or less.')
on conflict (slug) do nothing;

insert into coupons (store_id, title, code, description, discount_type, discount_value, affiliate_url, affiliate_network, category, expires_at, is_verified, status)
select s.id,
       c.title, c.code, c.description, c.discount_type, c.discount_value,
       c.affiliate_url, c.affiliate_network, c.category, c.expires_at::timestamptz, false, 'active'
from stores s
join (values
  ('nike',     'Extra 25% Off Select Styles',            'EARLYBF',    'Nike''s early Black Friday code — extra 25% off select styles at checkout.', 'percent', 25, 'https://www.nike.com', null, 'Fashion', '2026-11-30 23:59:59+00'),
  ('sephora',  '20% Off Any Purchase for Beauty Insiders','SPICEBOMB', '20% off any purchase for Beauty Insider members (free to join).', 'percent', 20, 'https://www.sephora.com', null, 'Beauty', '2026-11-30 23:59:59+00'),
  ('chewy',    '50% Off Your First Autoship Order',      'MORE4LESS',  '50% off your first Autoship order on select pet food and supplies.', 'percent', 50, 'https://www.chewy.com', null, 'Pets', '2026-12-31 23:59:59+00'),
  ('nordvpn',  'Up to 78% Off 2-Year Plans + 3 Free Months', null,     'Black Friday deal — up to 78% off 2-year plans plus 3 extra months free. No code needed.', 'percent', 78, 'https://nordvpn.com', null, 'VPN & Software', '2026-12-09 23:59:59+00'),
  ('wayfair',  'Extra 10% Off Select Items in the App',  'APP10',      'Extra 10% off select furniture and home essentials in the Wayfair app.', 'percent', 10, 'https://www.wayfair.com', null, 'Home & Furniture', '2026-12-06 23:59:59+00'),
  ('hellofresh','50% Off Your First Box',                'SOYUMMY4LIFE','50% off your first HelloFresh meal kit box for new customers.', 'percent', 50, 'https://www.hellofresh.com', null, 'Food & Meal Kits', null),
  ('adidas',   '15% Off Qualifying Online Styles',       'DN15',       '15% off qualifying styles online — stacks with Black Friday sale prices.', 'percent', 15, 'https://www.adidas.com', null, 'Fashion', '2026-11-30 23:59:59+00'),
  ('ulta',     '10% Off Sitewide',                      'FLEX10',     '10% off your Ulta Beauty order sitewide.', 'percent', 10, 'https://www.ulta.com', null, 'Beauty', null),
  ('target',   '25% Off Eligible Items',                'STYLE',      '25% off eligible items at Target, online and in store.', 'percent', 25, 'https://www.target.com', null, 'Home & Furniture', '2026-12-31 23:59:59+00'),
  ('walmart',  'Free Express Delivery on $35+ Holiday Orders','THANKFUL','Free Express Delivery on a $35+ order that includes a featured Thanksgiving item.', 'free_shipping', null, 'https://www.walmart.com', null, 'Groceries', '2026-11-30 23:59:59+00'),
  ('booking',  'Black Friday: Up to 40% Off Stays Worldwide', null,   'Black Friday deals from 30% off, up to 40% off stays at participating properties. No code needed.', 'percent', 40, 'https://www.booking.com', null, 'Travel', '2026-12-02 23:59:59+00'),
  ('dominos',  '50% Off Menu-Priced Pizzas',            '50OFF',      '50% off all menu-priced pizzas for carryout or delivery.', 'percent', 50, 'https://www.dominos.com', null, 'Food & Meal Kits', '2026-12-01 23:59:59+00')
) as c(slug, title, code, description, discount_type, discount_value, affiliate_url, affiliate_network, category, expires_at)
  on s.slug = c.slug;
