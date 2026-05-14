"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";

const SLOTS = [0, 1, 2, 3];

export default function CompareBar() {
  const { items, remove, clear } = useCompareStore();
  const router = useRouter();

  const visible = items.length > 0;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#1a1a1a] border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">

          {/* Çep: Ýazgy */}
          <div className="hidden sm:block flex-shrink-0 min-w-[200px]">
            <p className="text-white text-sm leading-snug">
              Haryt deňeşdirmek üçin goşuldy.{" "}
              <span className="text-gray-400">
                Siz diňe 4 sany haryt goşup bilýärsiňiz.
              </span>
            </p>
          </div>

          {/* Orta: Thumbnails */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            {SLOTS.map((i) => {
              const product = items[i];
              return (
                <div
                  key={i}
                  className="relative w-16 h-16 rounded-lg border border-gray-600 bg-[#2a2a2a] flex-shrink-0 flex items-center justify-center overflow-hidden"
                >
                  {product ? (
                    <>
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                      <button
                        onClick={() => remove(product.id)}
                        className="absolute top-0.5 right-0.5 w-4 h-4 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Aýyr"
                      >
                        <X size={9} className="text-white" />
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-600 text-xl font-light">+</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sag: Düwmeler */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => {
                const ids = items.map((p) => p.id).join(",");
                router.push(`/compare?ids=${ids}`);
              }}
              disabled={items.length < 2}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-40
                         disabled:cursor-not-allowed text-white text-sm font-semibold
                         rounded border border-red-500 transition-colors whitespace-nowrap"
            >
              Harytlary deňeşdirmek
            </button>

            <button
              onClick={clear}
              className="w-8 h-8 flex items-center justify-center rounded
                         border border-gray-600 text-gray-400 hover:text-white
                         hover:border-gray-400 transition-colors flex-shrink-0"
              aria-label="Ýap"
            >
              <X size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}