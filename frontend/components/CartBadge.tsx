"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function CartBadge() {
  const count = useCartStore((s) => s.getTotalCount());

  return (
    <Link href="/cart" className="relative inline-flex items-center p-2 text-gray-700 hover:text-red-600 transition-colors">
      <ShoppingCart size={22} strokeWidth={1.8} />

      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5
                         min-w-[18px] h-[18px] px-1
                         bg-red-500 text-white text-[10px] font-bold
                         rounded-full flex items-center justify-center
                         animate-in zoom-in duration-200">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}