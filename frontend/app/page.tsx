import { supabase } from "@/lib/supabase";
import HomeTabs from "@/components/HomeTabs";
import Hero from "@/components/Hero";
import StoreReviews from "@/components/StoreReviews";
import SideBanners from "@/components/SideBanners";

export interface Product {
  id: string;
  name: string;
  price: number;
  old_price: number | null;
  image_url: string;
  discount_percent: number | null;
  is_new: boolean;
}

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
    id: row.id,
    name: row.name,
    price: row.price,
    old_price: row.old_price ?? null,
    image_url: row.image_url ?? "/placeholder.png",
    discount_percent: row.discount ?? null,
    is_new: row.is_new ?? false,
  }));
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
