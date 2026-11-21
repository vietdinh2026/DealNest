import Link from "next/link";
import StoreLogo from "@/components/StoreLogo";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { Store } from "@/lib/types";

export const dynamic = "force-dynamic";
// Never cache Supabase reads: without this, Next.js caches the fetch
// result from the first request and later SQL edits (new store
// descriptions) would not show up until a redeploy.
export const revalidate = 0;

export default async function StoresPage() {
  let stores: Store[] = [];
  if (isSupabaseConfigured()) {
    const { data } = await supabase
      .from("stores")
      .select("*")
      .order("name", { ascending: true });
    stores = (data ?? []) as Store[];
  }

  return (
    <div>
      <h1 className="text-3xl font-extrabold">Browse Stores</h1>
      <p className="mt-2 text-slate-600">
        Every store on DealNest, from fashion and beauty to travel and meal kits.
      </p>

      {stores.length === 0 ? (
        <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
          <p className="font-semibold">No stores yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Stores will appear here once the database is connected and seeded.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((s) => (
            <Link
              key={s.id}
              href={`/stores/${s.slug}`}
              className="rounded-2xl border bg-white p-5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <StoreLogo name={s.name} websiteUrl={s.website_url} />
                <h2 className="text-lg font-bold">{s.name}</h2>
              </div>
              {s.description && (
                <p className="mt-3 text-sm text-slate-600">{s.description}</p>
              )}
              {s.website_url && (
                <p className="mt-2 text-xs text-slate-400">
                  {s.website_url.replace(/^https?:\/\//, "")}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
