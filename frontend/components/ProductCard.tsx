"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ZoomIn, Heart, Check, ShoppingCart } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";
import { useCartStore } from "@/store/useCartStore";
import ImageModal from "@/components/ImageModal";
import AuthModal from "@/components/AuthModal";
import type { Product } from "@/app/page";

// ─────────────────────────────────────────────────────────────────────────────
// ProductCard — Sumbar Computer dizaýny
//
// Üýtgän zatlar (original logika BOZULMADY):
//   • text-center → text-left
//   • rounded-full düwme → rounded-md (Sumbar stili)
//   • bg-red-500 → bg-red-600, hover:bg-red-700, active:bg-red-800
//   • Baha formaty: "1 250 TMT" (çep tarapda), köne baha üstünde line-through
//   • Kart kölege/border: subtle shadow, border-gray-100
//   • Hydration Guard: mounted state bilen useCompareStore goralan
//   • Image: fill + sizes (responsive), aspect-square
// ─────────────────────────────────────────────────────────────────────────────

export default function ProductCard({ product }: { product: Product }) {
  const { id, name, price, old_price, image_url } = product;

  // ── Local UI state ──────────────────────────────────────────────────────────
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // ── Hydration Guard ─────────────────────────────────────────────────────────
  // Zustand persist store-laryndaky maglumatlar server HTML-i bilen
  // gabat gelmeýär (client-only). `mounted` false bolsa, bu bahalary
  // ulanmaýarys → "Text content did not match" hydration error ýok.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const rAF = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(rAF);
  }, []);

  // ── Zustand stores ──────────────────────────────────────────────────────────
  const { add, remove, isSelected, items } = useCompareStore();
  const addToCart = useCartStore((s) => s.addItem);

  // SSR-de hemişe false; mount bolandan soň hakyky ýagdaý
  const selected = mounted && isSelected(id);
  const maxReached = mounted && items.length >= 4 && !selected;

  // ── Handlers ────────────────────────────────────────────────────────────────
  function handleCompare(checked: boolean) {
    checked ? add({ id, name, image_url }) : remove(id);
  }

  function handleWishlist() {
    if (!wished) setAuthModalOpen(true);
    else setWished(false);
  }

  function handleAuthSuccess() {
    setAuthModalOpen(false);
    setWished(true);
  }

  function handleAddToCart() {
    addToCart({ id, name, price, image_url });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  // ── Baha formaty: "1 250 TMT" ───────────────────────────────────────────────
  function fmt(n: number): string {
    return n.toLocaleString("ru-RU") + " TMT";
  }

  const showOldPrice = old_price && old_price > price;

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <>
      <div
        className={[
          "group flex flex-col bg-white w-full text-left",
          "border border-gray-100 rounded-sm",
          "shadow-[0_1px_4px_rgba(0,0,0,0.07)]",
          "hover:shadow-[0_4px_18px_rgba(0,0,0,0.11)] hover:border-gray-200",
          "transition-all duration-250 overflow-hidden",
        ].join(" ")}
      >
        {/* ── [A] Ýokarky zolak: Deňeşdirmek | Zoom + Halanlarym ─────────────── */}
        <div className="flex items-center justify-between px-2.5 pt-2.5">
          {/* Deňeşdirmek checkbox */}
          <label
            className={[
              "flex items-center gap-1.5 cursor-pointer select-none",
              maxReached ? "opacity-40 cursor-not-allowed" : "",
            ].join(" ")}
          >
            <input
              type="checkbox"
              checked={selected}
              disabled={maxReached}
              onChange={(e) => handleCompare(e.target.checked)}
              className="w-3.5 h-3.5 accent-red-600 cursor-pointer disabled:cursor-not-allowed"
            />
            <span className="text-[11px] text-gray-500 font-medium">
              Deňeşdirmek
            </span>
          </label>

          {/* Zoom + Halanlarym */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setImageModalOpen(true)}
              aria-label="Suratyny ulalt"
              className="p-1.5 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ZoomIn size={14} strokeWidth={1.8} />
            </button>
            <button
              onClick={handleWishlist}
              aria-label={wished ? "Halanlarymdan aýyr" : "Halanlarma goş"}
              className={[
                "p-1.5 rounded transition-colors",
                wished
                  ? "text-red-500"
                  : "text-gray-300 hover:text-red-400 hover:bg-gray-50",
              ].join(" ")}
            >
              <Heart
                size={14}
                strokeWidth={1.8}
                fill={wished ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>

        {/* ── [B] Surat meýdany ────────────────────────────────────────────────── */}
        <Link
          href={`/products/${id}`}
          className="block relative aspect-square bg-white overflow-hidden"
        >
          {/* Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" />
          )}
          <Image
            src={image_url}
            alt={name}
            fill
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 25vw, 20vw"
            className={[
              "object-contain p-3",
              "transition-all duration-300 group-hover:scale-[1.04]",
              imageLoaded ? "opacity-100" : "opacity-0",
            ].join(" ")}
            onLoad={() => setImageLoaded(true)}
            priority={false}
          />
        </Link>

        {/* ── [C] Maglumаt meýdany ─────────────────────────────────────────────── */}
        <div className="flex flex-col flex-1 px-3 pb-3.5 pt-2">
          {/* Haryt ady — text-left */}
          <Link href={`/products/${id}`}>
            <h3
              className={[
                "text-[13px] font-medium text-gray-800 leading-snug",
                "line-clamp-2 min-h-[38px] mb-3",
                "hover:text-red-600 transition-colors duration-150",
              ].join(" ")}
            >
              {name}
            </h3>
          </Link>

          {/* Baha bölegi — text-left */}
          <div className="flex flex-col items-start gap-0.5 mb-3">
            {/* Köne baha — häzirki bahanyň ÜSTÜnde */}
            {showOldPrice && (
              <span className="text-[11px] text-gray-400 line-through leading-none">
                {fmt(old_price!)}
              </span>
            )}
            {/* Häzirki baha */}
            <div className="flex items-baseline gap-1">
              <span className="text-[17px] font-bold text-gray-900 leading-tight">
                {fmt(price)}
              </span>
            </div>
          </div>

          {/* ── SEBEDE GOŞ düwmesi ────────────────────────────────────────────── */}
          <button
            onClick={handleAddToCart}
            aria-label={added ? "Sebede goşuldy" : "Sebede goş"}
            className={[
              "mt-auto w-full py-[9px] px-3 rounded-md",
              "flex items-center justify-center gap-1.5",
              "text-white text-[11.5px] font-bold tracking-wide uppercase",
              "transition-all duration-200 active:scale-[0.97]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-red-500 focus-visible:ring-offset-1",
              added
                ? "bg-emerald-500 cursor-default"
                : "bg-red-600 hover:bg-red-700 active:bg-red-800 cursor-pointer",
            ].join(" ")}
          >
            {added ? (
              <>
                <Check size={13} strokeWidth={2.5} />
                <span>Goşuldy</span>
              </>
            ) : (
              <>
                <ShoppingCart size={13} strokeWidth={2} />
                <span>Sebede goş</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Modallar (original logika üýtgemedi) ─────────────────────────────── */}
      {imageModalOpen && (
        <ImageModal
          src={image_url}
          alt={name}
          onClose={() => setImageModalOpen(false)}
        />
      )}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}
