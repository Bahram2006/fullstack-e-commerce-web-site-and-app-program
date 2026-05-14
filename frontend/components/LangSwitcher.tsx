"use client";

// components/LangSwitcher.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Dil saýlaýjy dropdown — Header içine goýulýar.
//
// Hydration goragy:
//   localStorage-dan gelýän `lang` server-de bilinmeýär.
//   `mounted` false bolsa hemişe default ("tk") görkezilýär —
//   server HTML-i bilen client HTML-i deň → hydration error ýok.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLangStore, type Lang } from "@/store/useLangStore";

// ─── Dil meta maglumatlary ────────────────────────────────────────────────────

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "tk", label: "Türkmen", flag: "🇹🇲" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function LangSwitcher() {
  // ── Hydration guard ────────────────────────────────────────────────────────
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const rAF = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(rAF);
  }, []);

  // ── Store ──────────────────────────────────────────────────────────────────
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);

  // ── Dropdown açyk/ýapyk ────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Daşyna basylanda ýap
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SSR-de hemişe "tk" görkezmek — hydration deňligi
  const activeLang = mounted ? lang : "tk";
  const active = LANGS.find((l) => l.code === activeLang) ?? LANGS[0];

  return (
    <div ref={ref} className="relative">
      {/* ── Açyjy düwme ── */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Dil saýla"
        className={[
          "flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm",
          "text-[12px] font-semibold text-gray-600",
          "border border-gray-200 bg-white",
          "hover:border-red-400 hover:text-red-600",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
        ].join(" ")}
      >
        <Globe size={13} strokeWidth={1.8} />
        <span>
          {active.flag} {active.code.toUpperCase()}
        </span>
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* ── Dropdown menýu ── */}
      {open && (
        <ul
          role="listbox"
          aria-label="Dil saýla"
          className={[
            "absolute right-0 top-full mt-1 z-50",
            "w-36 py-1",
            "bg-white border border-gray-100 rounded-sm",
            "shadow-[0_4px_16px_rgba(0,0,0,0.10)]",
          ].join(" ")}
        >
          {LANGS.map(({ code, label, flag }) => {
            const isActive = activeLang === code;
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={[
                    "w-full flex items-center gap-2 px-3 py-2",
                    "text-[12px] font-medium text-left",
                    "transition-colors duration-100",
                    isActive
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                  ].join(" ")}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
