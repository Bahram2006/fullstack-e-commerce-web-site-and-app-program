import { supabase } from "@/lib/supabase"; // Seniň eýýäm bar bolan faýlyň
import Link from "next/link";
import { Eye, Pencil, Trash2, Plus, Star, ChevronLeft, ChevronRight } from "lucide-react";

// ---- Supabase type ----
export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  stock_left: number;
  stock_sold: number;
  category: string;
  rating: number;
  review_count: number;
  image_url?: string;
}

// ---- Data fetch (Directly using our supabase client) ----
async function getProducts(): Promise<Product[]> {
  // auth-helpers-iň ýerine gönümel biziň supabase client-ymyzy ulanýarys
  const { data, error } = await supabase
    .from("products")
    .select("id, name, size, price, stock_left, stock_sold, category, rating, review_count, image_url")
    .order("id", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return (data as Product[]) ?? [];
}

// ... Galan bölekleri (StarRating we Page funksiýasy) üýtgemän galyp biler


// ---- Rating stars helper ----
function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
      <Star size={12} className="fill-amber-400 text-amber-400" />
      {rating.toFixed(1)}
    </span>
  );
}

// ---- Action buttons ----
function ActionButtons({ id }: { id: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Link
        href={`/products/${id}`}
        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700 transition-colors"
        title="View"
      >
        <Eye size={15} />
      </Link>
      <Link
        href={`/products/${id}/edit`}
        className="inline-flex items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 px-2.5 py-1.5 text-indigo-600 hover:bg-indigo-100 transition-colors"
        title="Edit"
      >
        <Pencil size={15} />
      </Link>
      {/* Delete is a client action — extract to a Client Component if needed */}
      <button
        className="inline-flex items-center justify-center rounded-lg border border-red-100 bg-red-50 px-2.5 py-1.5 text-red-500 hover:bg-red-100 transition-colors"
        title="Delete"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

// ---- Main page (Server Component) ----
export default async function ProductListPage() {
  const products = await getProducts();

  return (
    <div className="space-y-4">
      {/* Page card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        {/* Card header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
          <h4 className="text-base font-semibold text-slate-800">
            All Product List
          </h4>
          <div className="flex items-center gap-2">
            <Link
              href="/products/add"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              <Plus size={14} />
              Add Product
            </Link>
            {/* Filter dropdown placeholder */}
            <select className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </th>
                <th className="px-4 py-3 text-left">Product Name & Size</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Stock</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Rating</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-sm text-slate-400"
                  >
                    Haryt tapylmady. Supabase &quot;products&quot; tablenyňy barlaň.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="group hover:bg-slate-50 transition-colors"
                  >
                    {/* Checkbox */}
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>

                    {/* Product name + size */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                          {product.image_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={product.image_url}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className="text-xl">📦</span>
                          )}
                        </div>
                        <div>
                          <Link
                            href={`/products/${product.id}`}
                            className="font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                          >
                            {product.name}
                          </Link>
                          {product.size && (
                            <p className="mt-0.5 text-xs text-slate-400">
                              Size: {product.size}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      ${product.price.toFixed(2)}
                    </td>

                    {/* Stock */}
                    <td className="px-4 py-3">
                      <p className="text-xs text-slate-700">
                        <span className="font-semibold">{product.stock_left} Item</span> Left
                      </p>
                      <p className="text-xs text-slate-400">{product.stock_sold} Sold</p>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                        {product.category}
                      </span>
                    </td>

                    {/* Rating */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-0.5">
                        <StarRating rating={product.rating} />
                        <span className="text-xs text-slate-400">
                          {product.review_count} Reviews
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <ActionButtons id={product.id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-6 py-4">
          <p className="text-xs text-slate-500">
            Showing <span className="font-semibold text-slate-700">{products.length}</span> products
          </p>
          <nav className="flex items-center gap-1">
            <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft size={13} /> Prev
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                  p === 1
                    ? "border-indigo-600 bg-indigo-600 font-semibold text-white"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
              Next <ChevronRight size={13} />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}