-- DealNest — contact form table (2026-11-22)
-- Run this file in the Supabase SQL Editor (project `dealnest`) so the
-- new /contact page can save messages. No redeploy needed for this
-- table itself — but the /contact page is a code change, so upload the
-- new code zip to GitHub and let Vercel deploy it first (or run this
-- SQL first; either order works, the form just needs both).

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

create index if not exists idx_contact_messages_status on contact_messages(status);

alter table contact_messages enable row level security;

drop policy if exists "public read contact_messages" on contact_messages;
create policy "public read contact_messages" on contact_messages for select using (true);

grant select on public.contact_messages to anon, authenticated;
