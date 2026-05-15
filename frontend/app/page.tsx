import { createServerClient } from "@/lib/supabase";
import HomeTabs from "@/components/HomeTabs";
import Hero from "@/components/Hero";
import StoreReviews from "@/components/StoreReviews";
import SideBanners from "@/components/SideBanners";

// ─── Product Interfeysi ──────────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  price: number;
  old_price: number | null;
  image_url: string;
  discount_percent: number | null;
  is_new: boolean;
}

// Supabase-den geljek maglumatyň hakyky TypeScript tipi (row any hatasyny aýyrýar)
interface SupabaseProductRow {
  id: string;
  name: string;
  price: number;
  old_price: number | null;
  image_url: string | null;
  discount: number | null;
  is_new: boolean;
}

// ─── Server-side Data Fetch ──────────────────────────────────────────────────
async function getProducts(): Promise<Product[]> {
  // 1. Supabase üýtgeýjisini server client-y arkaly dördýäris (Cannot find name erroryny çözýär)
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, old_price, image_url, discount, is_new")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    console.error("Harytlar çekilmedi:", error.message);
    return [];
  }

  // 2. (row: SupabaseProductRow) arkaly implicitly has an 'any' type ýalňyşlygy doly çözüldi
  return ((data as SupabaseProductRow[]) ?? []).map(
    (row: SupabaseProductRow) => ({
      id: row.id,
      name: row.name,
      price: row.price,
      old_price: row.old_price ?? null,
      image_url: row.image_url ?? "/placeholder.png",
      discount_percent: row.discount ?? null,
      is_new: row.is_new ?? false,
    }),
  );
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-6">
      <Hero />

      <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">
        <div className="w-full lg:w-[280px] shrink-0 flex flex-col space-y-6">
          <StoreReviews />
          <SideBanners />
        </div>

        <div className="flex-1 w-full min-w-0">
          <HomeTabs products={products} />
        </div>
      </div>
    </div>
  );
}
