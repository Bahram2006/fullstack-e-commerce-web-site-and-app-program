import { supabase } from "@/lib/supabase"; // Biziň durnukly client-ymyz
import Link from "next/link";
import { Plus, Eye, Pencil, Trash2, ChevronLeft, ChevronRight, FolderOpen, Tag } from "lucide-react";

// ---- Type ----
// ---- Highlight colors for top cards (cycle) ----
const CARD_COLORS = [
  "bg-slate-100",
  "bg-indigo-50",
  "bg-amber-50",
  "bg-cyan-50",
];


export interface Category {
  id: number;
  name: string;
  description: string | null;
  image_url: string | null;
  product_stock: number;
  created_by: string | null;
  created_at: string;
}

// ---- Server fetch (Simplified & Reliable) ----
async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, description, image_url, product_stock, created_by, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return (data as Category[]) ?? [];
}


// ---- Date formatter ----
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ---- Action buttons ----
function ActionButtons({ id }: { id: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <Link
        href={`/categories/${id}`}
        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-500 shadow-sm hover:bg-slate-50 hover:text-slate-700 transition-colors"
        title="View"
      >
        <Eye size={15} />
      </Link>
      <Link
        href={`/categories/${id}/edit`}
        className="inline-flex items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 px-2.5 py-1.5 text-indigo-600 hover:bg-indigo-100 transition-colors"
        title="Edit"
      >
        <Pencil size={15} />
      </Link>
      <button
        className="inline-flex items-center justify-center rounded-lg border border-red-100 bg-red-50 px-2.5 py-1.5 text-red-500 hover:bg-red-100 transition-colors"
        title="Delete"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

// ---- Category image / fallback ----
function CategoryImage({
  url,
  name,
  size = "md",
}: {
  url?: string | null;
  name: string;
  size?: "md" | "xl";
}) {
  const dim = size === "xl" ? "h-16 w-16 text-3xl" : "h-12 w-12 text-xl";
  if (url) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={name}
        className={`${dim} rounded-lg object-cover`}
      />
    );
  }
  return (
    <div
      className={`${dim} flex flex-shrink-0 items-center justify-center rounded-lg bg-slate-100`}
    >
      <FolderOpen className="text-slate-400" />
    </div>
  );
}

// ---- Main page (Server Component) ----
export default async function CategoriesPage() {
  const categories = await getCategories();

  // Top 4 for the summary cards
  const topFour = categories.slice(0, 4);

  return (
    <div className="space-y-5">

      {/* ===== Top summary cards ===== */}
      {topFour.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {topFour.map((cat, i) => (
            <div
              key={cat.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex flex-col items-center px-4 py-5 text-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl ${CARD_COLORS[i % CARD_COLORS.length]}`}
                >
                  <CategoryImage url={cat.image_url} name={cat.name} size="xl" />
                </div>
                <h5 className="mt-3 text-sm font-semibold text-slate-800 leading-snug">
                  {cat.name}
                </h5>
                <p className="mt-0.5 text-xs text-slate-400">
                  {cat.product_stock.toLocaleString()} products
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== Main table card ===== */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        {/* Card header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
          <h4 className="text-base font-semibold text-slate-800">
            All Categories List
          </h4>
          <div className="flex items-center gap-2">
            <Link
              href="/categories/add"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              <Plus size={14} />
              Add Category
            </Link>
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
                <th className="px-4 py-3 text-left">Category Name</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Created By</th>
                <th className="px-4 py-3 text-left">Product Stock</th>
                <th className="px-4 py-3 text-left">Created At</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-16 text-center"
                  >
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <Tag size={32} className="opacity-30" />
                      <p className="text-sm">Kategoriýa tapylmady.</p>
                      <p className="text-xs">
                        Supabase &quot;categories&quot; tablisasyny barlaň ýa-da täze kategoriýa goşuň.
                      </p>
                      <Link
                        href="/categories/add"
                        className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
                      >
                        <Plus size={13} /> Add Category
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr
                    key={cat.id}
                    className="group hover:bg-slate-50 transition-colors"
                  >
                    {/* Checkbox */}
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>

                    {/* Name + image */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                          <CategoryImage url={cat.image_url} name={cat.name} />
                        </div>
                        <Link
                          href={`/categories/${cat.id}`}
                          className="font-medium text-slate-800 hover:text-indigo-600 transition-colors"
                        >
                          {cat.name}
                        </Link>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-4 py-3 max-w-xs">
                      <p className="truncate text-xs text-slate-500">
                        {cat.description ?? "—"}
                      </p>
                    </td>

                    {/* Created by */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          cat.created_by?.toLowerCase() === "admin"
                            ? "bg-indigo-50 text-indigo-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {cat.created_by ?? "Admin"}
                      </span>
                    </td>

                    {/* Product stock */}
                    <td className="px-4 py-3 font-semibold text-slate-700">
                      {cat.product_stock.toLocaleString()}
                    </td>

                    {/* Created at */}
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {formatDate(cat.created_at)}
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <ActionButtons id={cat.id} />
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
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {categories.length}
            </span>{" "}
            categories
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