"use client";

// components/HomeTabs.tsx
// ─────────────────────────────────────────────────────────────────────────────
// ✅ products prop-y kabul edýär: HomeTabs({ products }: { products: Product[] })
// ✅ Product tipi page.tsx-den import edilýär — ýeke çeşme, gapma-garşylyk ýok
// ✅ 4 sütünli Sumbar grid, tab süzgüçleri, boş ýagdaý — ählisi saklandy
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import type { Product } from "@/app/page"; // ✅ ýeke tip çeşmesi
import ProductCard from "@/components/ProductCard";

// ─── Tab kesgitlemeleri ───────────────────────────────────────────────────────

type TabKey = "maslahat" | "tazeler" | "meshurlar";

interface Tab {
  key: TabKey;
  label: string;
}

const TABS: Tab[] = [
  { key: "maslahat", label: "Maslahat edilýänler" },
  { key: "tazeler", label: "Täzeler" },
  { key: "meshurlar", label: "Meşhurlar" },
];

// Her tab üçin filtr funksiýalary — giňeltmek üçin diňe şu ýere goş
const FILTER_MAP: Record<TabKey, (p: Product) => boolean> = {
  maslahat: () => true,
  tazeler: (p) => p.is_new === true,
  meshurlar: () => true,
};

// ─── Props ───────────────────────────────────────────────────────────────────

interface HomeTabsProps {
  products: Product[];
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeTabs({ products }: HomeTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("maslahat");

  const filtered = (products || []).filter(FILTER_MAP[activeTab]);

  return (
    <section className="w-full">
      {/* ── Tab düwmeleri ─────────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Haryt kategoriýalary"
        className="flex items-end border-b border-gray-200"
      >
        {TABS.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${key}`}
              onClick={() => setActiveTab(key)}
              className={[
                "relative px-4 py-2.5",
                "text-[13px] font-semibold whitespace-nowrap",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-red-500 focus-visible:ring-inset",
                isActive ? "text-red-600" : "text-gray-500 hover:text-gray-800",
              ].join(" ")}
            >
              {label}

              {/* Aktif tab aşagyndaky gyzyl çyzyk */}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-t-sm"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Haryt grid-i ──────────────────────────────────────────────────── */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-label={TABS.find((t) => t.key === activeTab)?.label}
      >
        {filtered.length === 0 ? (
          /* Boş ýagdaý */
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="text-4xl mb-3">📦</span>
            <p className="text-sm font-medium">Bu bölümde haryt ýok.</p>
          </div>
        ) : (
          /* 4 sütünli Sumbar grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
