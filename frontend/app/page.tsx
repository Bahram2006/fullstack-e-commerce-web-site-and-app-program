// app/page.tsx  — Server Component, "use client" ýok
// ─────────────────────────────────────────────────────────────────────────────
// ✅ getProducts()      — üýtgemedi
// ✅ Product interfeysi — üýtgemedi
// ✅ Supabase import    — üýtgemedi
// ✅ HomeTabs layout    — üýtgemedi
// 🆕 <aside>           — StoreReviews komponenti bilen çalşyldy
// ─────────────────────────────────────────────────────────────────────────────

import { supabase }     from "@/lib/supabase";
import HomeTabs         from "@/components/HomeTabs";
import Hero             from "@/components/Hero";
import StoreReviews     from "@/components/StoreReviews";

// ─── Product tipi (ProductCard + HomeTabs bu ýerden import edýär) ─────────────

export interface Product {
  id:               string;
  name:             string;
  price:            number;
  old_price:        number | null;
  image_url:        string;
  discount_percent: number | null;
  is_new:           boolean;
}

// ─── Server-side data fetch (üýtgemedi) ───────────────────────────────────────

async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, old_price, image_url, discount, is_new")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    console.error("Harytlar çekilmedi:", error.message);
    return [];
  }

  return (data ?? []).map((row) => ({
    id:               row.id,
    name:             row.name,
    price:            row.price,
    old_price:        row.old_price  ?? null,
    image_url:        row.image_url  ?? "/placeholder.png",
    discount_percent: row.discount   ?? null,
    is_new:           row.is_new     ?? false,
  }));
}

// ─── Baş sahypa ───────────────────────────────────────────────────────────────

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-6">
      {/* Hero bölümi */}
      <Hero />

      {/* Ana layout: çep teswirler + sag harytlar */}
      <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">

        {/* ── Çep: Müşderi teswirleri ── */}
        <StoreReviews />

        {/* ── Sag: Tab menýusy + Haryt grid-i ── */}
        <div className="flex-1 w-full min-w-0">
          <HomeTabs products={products} />
        </div>

      </div>
    </div>
  );
}