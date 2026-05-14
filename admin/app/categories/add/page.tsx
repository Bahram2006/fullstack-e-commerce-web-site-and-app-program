"use client";

"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import {
  AlertCircle,
  Loader2,
  FolderPlus,
  X,
  ImagePlus,
  Info,
} from "lucide-react";
import { createCategory, type CategoryFormState } from "./actions";


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 transition-colors"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Ýazylýar...
        </>
      ) : (
        <>
          <FolderPlus size={16} />
          Create Category
        </>
      )}
    </button>
  );
}


function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
    >
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
    />
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
        {icon && <span className="text-slate-400">{icon}</span>}
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-0.5 text-xs text-slate-400">{label}</p>
      <p className="text-sm font-semibold text-slate-700">{value}</p>
    </div>
  );
}

const initialState: CategoryFormState = {};

export default function AddCategoryPage() {

  const [state, formAction] = useActionState(createCategory, initialState);

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
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-44 items-center justify-center bg-slate-50">
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <FolderPlus size={40} className="opacity-30" />
                <p className="text-xs">Kategoriýa suraty</p>
              </div>
            </div>
            <div className="border-t border-slate-100 px-5 py-4">
              <h5 className="mb-3 text-sm font-semibold text-slate-700">
                Awtomatik dolduryljak
              </h5>
              <div className="grid grid-cols-2 gap-3">
                <InfoRow label="Created By" value="Admin" />
                <InfoRow label="Product Stock" value="0" />
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Bu meýdanlar awtomatiki ýazylýar, el bilen üýtgetmek gerek däl.
              </p>
            </div>

            <div className="flex gap-2 border-t border-slate-100 px-5 py-4">
              <SubmitButton />
              <Link
                href="/categories"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <X size={15} />
                Cancel
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-5 xl:col-span-2">
          <Card title="Thumbnail Photo" icon={<ImagePlus size={16} />}>
            <div className="rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
              <ImagePlus size={36} className="mx-auto mb-3 text-indigo-400" />
              <p className="text-sm font-medium text-slate-700">
                Drop your image here, or{" "}
                <span className="text-indigo-600">click to browse</span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                1600 × 1200 (4:3) maslahat berilýär. PNG, JPG, GIF rugsat
                berilýär.
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="image_url">ýa-da Image URL giriziň</Label>
              <Input
                id="image_url"
                name="image_url"
                type="url"
                placeholder="https://..."
              />
            </div>
          </Card>

          <Card title="General Information">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Category name */}
              <div className="sm:col-span-2">
                <Label htmlFor="name">Category Title *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Kategoriýa ady..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="created_by_display">Created By</Label>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5">
                  <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    Admin
                  </span>
                  <span className="text-xs text-slate-400">Awtomatiki</span>
                </div>
              </div>

              <div>
                <Label htmlFor="stock_display">Product Stock</Label>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5">
                  <span className="text-sm font-semibold text-slate-700">
                    0
                  </span>
                  <span className="text-xs text-slate-400">
                    Awtomatiki başlanýar
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Kategoriýa barada gysgaça maglumat..."
                />
              </div>
            </div>
          </Card>

          <Card title="Meta Options" icon={<Info size={16} />}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  name="meta_title"
                  type="text"
                  placeholder="SEO başlygy..."
                />
              </div>

              <div>
                <Label htmlFor="meta_tag">Meta Tag Keyword</Label>
                <Input
                  id="meta_tag"
                  name="meta_tag"
                  type="text"
                  placeholder="açar söz, başga söz..."
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  name="meta_description"
                  rows={3}
                  placeholder="SEO düşündirişi..."
                />
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50 transition-colors"
            >
              <X size={16} />
              Cancel
            </Link>
            <SubmitButton />
          </div>
        </div>
      </div>
    </form>
  );
}
