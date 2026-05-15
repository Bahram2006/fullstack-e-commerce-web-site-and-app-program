"use client";

import React, { useState, useEffect } from "react";
import ProfileDropdown from "./ProfileDropdown";
import MoreDropdown from "./MoreDropdown";
import ContactDropdown from "./ContactDropdown";
import { useComplaintModal } from "@/store/useComplaintModal";
import Link from "next/link";
import {
  Search,
  User,
  Bell,
  ShoppingCart,
  Globe,
  ChevronDown,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TOP_LINKS = [
  { label: "Biz barada", href: "/about-us" },
  { label: "Tehniki hyzmat", href: "/service" },
  { label: "Kepillilik", href: "/warranty" },
  { label: "Eltip bermek we töleg", href: "/delivery" },
  { label: "Teswirler", href: "/reviews" },
];

const LANGUAGES = ["Türkmen", "Русский", "English"];

const BADGE_NOTIFICATIONS = 2;
const BADGE_CART = 2;

// ─── Top Bar ──────────────────────────────────────────────────────────────────

function TopBar() {
  const [lang, setLang] = useState("Türkmen");
  const [langOpen, setLangOpen] = useState(false);

  // 🆕 GOŞULDY: Zustand modal açyjy funksiýasyny çagyrýarys
  const openComplaint = useComplaintModal((s) => s.openModal);

  return (
    <div className="w-full bg-[#111] border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <ContactDropdown />

        {/* Center nav links */}
        <nav className="hidden md:flex items-center">
          {/* Sanawy aýlanym edip elementleri we indeksleri (idx) tertipleýäris */}
          {TOP_LINKS.map((l, idx) => (
            <React.Fragment key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-1 text-[11px] text-white/55 transition-colors hover:text-white"
              >
                {l.label}
              </Link>

              {/* 'Teswirler' (sanawda 4-nji indeks) linkinden soň degişli düwmeleri tertipleýäris */}
              {idx === 4 && (
                <>
                  {/* 1. Global Pop-up Modal gutusyny açýan düwme */}
                  <button
                    onClick={openComplaint}
                    className="px-3 py-1 text-[11px] text-white/55 transition-colors hover:text-white cursor-pointer outline-none font-sans"
                  >
                    Nägilelik bildirmek
                  </button>

                  {/* 2. 🆕 GOŞULDY: Ak guty dropdown listini dökýän täze komponentimiz */}
                  <MoreDropdown />
                </>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right language picker */}
        <div className="relative">
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] text-white/65 transition hover:text-white cursor-pointer outline-none"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang}
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          {langOpen && (
            <div className="absolute right-0 top-full z-50 mt-1 min-w-[110px] rounded-lg border border-white/10 bg-[#1c1c1c] py-1 shadow-2xl">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setLangOpen(false);
                  }}
                  className={`w-full px-3 py-1.5 text-left text-[11px] transition-colors hover:bg-white/5 cursor-pointer outline-none ${
                    lang === l ? "text-white font-semibold" : "text-white/55"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3 select-none group"
    >
      {/* SL emblem */}
      <div className="relative flex h-9 w-9 shrink-0 items-end justify-end overflow-hidden">
        {/* White S */}
        <span
          className="absolute left-0 bottom-0 text-3xl font-black italic leading-none text-white"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          S
        </span>
        {/* Red L */}
        <span
          className="absolute right-0 top-0 text-2xl font-black italic leading-none text-red-600"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          L
        </span>
        {/* Red diagonal slash */}
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <span
            className="block w-0.5 h-full bg-red-600 opacity-80"
            style={{ transform: "rotate(20deg) scaleY(1.4)" }}
          />
        </span>
      </div>

      {/* Word mark */}
      <div className="flex flex-col leading-none gap-px">
        <span
          className="text-[22px] font-black italic tracking-[5px] text-white group-hover:text-red-500 transition-colors"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          SUMBAR
        </span>
        <span
          className="text-[9px] font-bold tracking-[5px] text-red-500 uppercase"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          COMPUTER
        </span>
        <span className="block h-px bg-white/20 mt-0.5" />
      </div>
    </Link>
  );
}

// ─── Search Bar ───────────────────────────────────────────────────────────────

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (query.trim()) {
      console.log("search:", query);
    }
  }

  return (
    <div className="flex flex-1 max-w-[520px] items-stretch overflow-hidden rounded-sm shadow-inner">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Gözleg"
        className="flex-1 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none"
      />
      <button
        onClick={handleSearch}
        aria-label="Gözle"
        className="flex items-center justify-center bg-red-600 px-4 transition-colors hover:bg-red-700 active:bg-red-800"
      >
        <Search className="h-4 w-4 text-white" />
      </button>
    </div>
  );
}

// ─── Icon Button with Badge ───────────────────────────────────────────────────

function IconBtn({
  href,
  icon: Icon,
  badge,
  label,
}: {
  href: string;
  icon: React.ElementType;
  badge?: number;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition-colors hover:text-white hover:bg-white/8"
    >
      <Icon className="h-5 w-5" strokeWidth={1.7} />
      {badge != null && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-600 text-[9px] font-bold text-white leading-none border-2 border-[#1a1a1a]">
          {badge}
        </span>
      )}
    </Link>
  );
}

// ─── Main Header Row ──────────────────────────────────────────────────────────

function MainHeader() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3.5">
        {/* Logo */}
        <Logo />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <SearchBar />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <ProfileDropdown />
          <IconBtn
            href="/notifications"
            icon={Bell}
            badge={BADGE_NOTIFICATIONS}
            label="Bildirişler"
          />
          <IconBtn
            href="/cart"
            icon={ShoppingCart}
            badge={BADGE_CART}
            label="Sebet"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export default function Header() {
  const openComplaint = useComplaintModal((s) => s.openModal);
  return (
    <header className="sticky top-0 z-40 shadow-2xl shadow-black/60">
      <TopBar />
      <MainHeader />
    </header>
  );
}
