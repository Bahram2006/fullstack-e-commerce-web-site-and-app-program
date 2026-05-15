import { createServerClient } from "@/lib/supabase";
import HomeTabs from "@/components/HomeTabs";
import Hero from "@/components/Hero";
import { Product } from "@/app/page"; // Öňki tipiňiz bolşy ýaly dursun

async function getProducts(): Promise<Product[]> {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, old_price, image_url, discount, is_new")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) return [];
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
    <div className="w-full">
      {/* Üst tarapdaky Uly Slider */}
      <Hero />
      
      {/* Sag tarapda diňe Tablar we Harytlar galar */}
      <div className="mt-6">
        <HomeTabs products={products} />
      </div>
    </div>
  );
}
