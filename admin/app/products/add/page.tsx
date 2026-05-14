"use client";

import { useActionState, useEffect, useState } from "react"; // ✅ React 19
import Link from "next/link";
import {
  AlertCircle, DollarSign, Percent,
  FileText, Loader2, PackagePlus, X,
} from "lucide-react";
import { createProduct, getCategories, type FormState, type Category } from "./actions";

function SubmitButton() {
  // ✅ useFormStatus React 19-da react-dom içinde
  const [isPending, setIsPending] = useState(false);
  return (
    <button
      type="submit"
      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
    >
      <PackagePlus size={16} />
      Create Product
    </button>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all disabled:bg-slate-50" />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all disabled:opacity-60" />
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-4">
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

const initialState: FormState = {};

export default function AddProductPage() {
  // ✅ React 19: useActionState
  const [state, formAction, isPending] = useActionState(createProduct, initialState);

  // ✅ Supabase-den kategoriýalar
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setLoadingCats(false);
    });
  }, []);

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <Card title="Product Preview">
            <div className="mb-4">
              <Label htmlFor="image_url">Image URL (optional)</Label>
              <Input id="image_url" name="image_url" type="url" placeholder="https://..." />
            </div>
            <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
              <span className="text-5xl">📦</span>
            </div>
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700">
                ← Products sanawyna git
              </Link>
            </div>
          </Card>
        </div>

        <div className="space-y-5 xl:col-span-2">
          <Card title="Product Information">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Product Name *</Label>
                <Input id="name" name="name" type="text" placeholder="Haryt ady..." required />
              </div>

              {/* ✅ Dinamiki kategoriýalar */}
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select id="category" name="category" required disabled={loadingCats}>
                  <option value="">
                    {loadingCats ? "Ýüklenýär..." : "Kategoriýa saýlaň"}
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}> {/* ✅ value = UUID */}
                      {cat.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" name="brand" type="text" placeholder="Marka ady..." />
              </div>

              <div>
                <Label htmlFor="weight">Weight</Label>
                <Input id="weight" name="weight" type="text" placeholder="gram ýa-da kg..." />
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select id="gender" name="gender">
                  <option value="">Saýlaň</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Unisex">Unisex</option>
                  <option value="Kids">Kids</option>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="size">Size (comma separated)</Label>
                <Input id="size" name="size" type="text" placeholder="Mysal: S, M, L, XL" />
              </div>

              <div>
                <Label htmlFor="stock_left">Stock (Quantity)</Label>
                <Input id="stock_left" name="stock_left" type="number" min="0" placeholder="0" />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description" name="description" rows={4}
                  placeholder="Haryt hakda gysgaça maglumat..."
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                />
              </div>
            </div>
          </Card>

          <Card title="Pricing Details">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="price">Price *</Label>
                <div className="relative">
                  <DollarSign size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" required style={{ paddingLeft: "2.25rem" }} />
                </div>
              </div>
              <div>
                <Label htmlFor="discount">Discount (%)</Label>
                <div className="relative">
                  <Percent size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input id="discount" name="discount" type="number" min="0" max="100" step="0.1" placeholder="0" style={{ paddingLeft: "2.25rem" }} />
                </div>
              </div>
              <div>
                <Label htmlFor="tax">Tax (%)</Label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input id="tax" name="tax" type="number" min="0" step="0.1" placeholder="0" style={{ paddingLeft: "2.25rem" }} />
                </div>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
              <X size={16} /> Cancel
            </Link>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
            >
              {isPending ? <><Loader2 size={16} className="animate-spin" /> Ýazylýar...</> : <><PackagePlus size={16} /> Create Product</>}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}