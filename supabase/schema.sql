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

-- ---------- Seed data: SAMPLE starter catalog ----------
-- 12 sample US stores/coupons. Codes are SAMPLE codes, not real
-- working codes. is_verified is FALSE for every seed coupon — the
-- site never shows a fake "Verified" badge.

insert into stores (name, slug, website_url, description) values
  ('Nike', 'nike', 'https://www.nike.com', 'Athletic shoes, apparel and gear.'),
  ('Sephora', 'sephora', 'https://www.sephora.com', 'Beauty, skincare, makeup and fragrance.'),
  ('Chewy', 'chewy', 'https://www.chewy.com', 'Pet food, treats, toys and supplies.'),
  ('NordVPN', 'nordvpn', 'https://nordvpn.com', 'VPN and online security software.'),
  ('Wayfair', 'wayfair', 'https://www.wayfair.com', 'Furniture, home decor and appliances.'),
  ('HelloFresh', 'hellofresh', 'https://www.hellofresh.com', 'Meal kit delivery service.'),
  ('Adidas', 'adidas', 'https://www.adidas.com', 'Sportswear, shoes and accessories.'),
  ('Ulta', 'ulta', 'https://www.ulta.com', 'Beauty products, salon services and fragrance.'),
  ('Target', 'target', 'https://www.target.com', 'Everyday essentials, home, electronics and more.'),
  ('Walmart', 'walmart', 'https://www.walmart.com', 'Groceries, electronics, home and everyday low prices.'),
  ('Booking.com', 'booking', 'https://www.booking.com', 'Hotels, flights and vacation rentals worldwide.'),
  ('Domino''s', 'dominos', 'https://www.dominos.com', 'Pizza delivery and carryout.')
on conflict (slug) do nothing;

insert into coupons (store_id, title, code, description, discount_type, discount_value, affiliate_url, affiliate_network, category, expires_at, is_verified, status)
select s.id,
       c.title, c.code, c.description, c.discount_type, c.discount_value,
       c.affiliate_url, c.affiliate_network, c.category, c.expires_at::timestamptz, false, 'active'
from stores s
join (values
  ('nike',     '20% Off Sitewide',                 'JUSTDOIT20', 'Save 20% on full-price shoes, apparel and gear.', 'percent', 20, 'https://www.nike.com', 'ShareASale', 'Fashion', '2027-01-31 23:59:59+00'),
  ('sephora',  '15% Off Beauty & Skincare',       'GLOW15',     'Get 15% off makeup, skincare and fragrance.', 'percent', 15, 'https://www.sephora.com', 'Rakuten', 'Beauty', '2027-01-31 23:59:59+00'),
  ('chewy',    '20% Off Your First Autoship',     'AUTOSHIP20', 'Save 20% on your first Autoship order of pet food and supplies.', 'percent', 20, 'https://www.chewy.com', 'CJ', 'Pets', '2027-02-28 23:59:59+00'),
  ('nordvpn',  '68% Off the 2-Year Plan',         'NORDDEAL68', 'Huge savings on the 2-year VPN plan plus 3 extra months.', 'percent', 68, 'https://nordvpn.com', 'Impact', 'VPN & Software', '2027-02-28 23:59:59+00'),
  ('wayfair',  'Up to 70% Off Furniture',         'HOME70',     'Up to 70% off sofas, beds, rugs and home decor.', 'percent', 70, 'https://www.wayfair.com', 'CJ', 'Home & Furniture', '2027-01-31 23:59:59+00'),
  ('hellofresh','50% Off Your First Box',         'FRESH50',    'Get 50% off your first HelloFresh meal kit box.', 'percent', 50, 'https://www.hellofresh.com', 'Impact', 'Food & Meal Kits', '2027-02-28 23:59:59+00'),
  ('adidas',   '25% Off Full-Price Items',        'ADI25',      'Save 25% on full-price sneakers, apparel and accessories.', 'percent', 25, 'https://www.adidas.com', 'Awin', 'Fashion', '2027-01-31 23:59:59+00'),
  ('ulta',     '$10 Off Orders Over $50',         'ULTA10',     'Take $10 off your beauty order of $50 or more.', 'fixed', 10, 'https://www.ulta.com', 'Rakuten', 'Beauty', '2027-01-31 23:59:59+00'),
  ('target',   '30% Off Home Essentials',         'TARGET30',   'Save 30% on bedding, bath, kitchen and home decor.', 'percent', 30, 'https://www.target.com', 'ShareASale', 'Home & Furniture', '2027-02-28 23:59:59+00'),
  ('walmart',  '$20 Off Your First Grocery Order','WALMART20',  'Get $20 off your first Walmart grocery delivery order.', 'fixed', 20, 'https://www.walmart.com', 'Impact', 'Groceries', '2027-02-28 23:59:59+00'),
  ('booking',  '15% Off Hotels Worldwide',        'STAY15',     'Save 15% on select hotels and vacation rentals.', 'percent', 15, 'https://www.booking.com', 'Awin', 'Travel', '2027-03-31 23:59:59+00'),
  ('dominos',  '50% Off All Pizzas',              'PIZZA50',    'Half price on all pizzas for carryout or delivery.', 'percent', 50, 'https://www.dominos.com', 'ShareASale', 'Food & Meal Kits', '2027-01-31 23:59:59+00')
) as c(slug, title, code, description, discount_type, discount_value, affiliate_url, affiliate_network, category, expires_at)
  on s.slug = c.slug;
