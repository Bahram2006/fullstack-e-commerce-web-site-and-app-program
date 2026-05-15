"use client";

import Link from "next/link";
import { useDict } from "@/store/useLangStore";

export default function Footer() {
  const dict = useDict();

  return (
    <footer className="bg-[#111111] text-white pt-10 pb-6 w-full font-sans">
      {/* ── 1. Brendleriň Logolary ── */}
      <div className="max-w-7xl mx-auto px-4 border-b border-gray-800 pb-8 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 text-sm font-bold tracking-wider">
        <span className="text-cyan-400">RAPOO</span>
        <span className="text-green-500">UGREEN</span>
        <span className="text-orange-500">JBL</span>
        <span className="text-gray-400">AORUS</span>
        <span className="text-yellow-600">TUF GAMING</span>
        <span className="text-red-500">T-FORCE</span>
        <span className="text-red-600">PREDATOR</span>
        <span className="text-gray-200">CASSIDA</span>
        <span className="text-blue-400">EPSON</span>
      </div>

      {/* ── 2. Esasy Linkler we Maglumatlar ── */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Çep Kolonka: Logo we Kontaktlar */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-red-600 tracking-tighter">
              S SUMBAR
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Türkmenistan, Aşgabat, köç. A.Niýazow (Hudaýberdiýew), jaý 99
          </p>
          <div className="text-xs text-gray-400 flex flex-col gap-1.5">
            <a
              href="mailto:sumbar.computer@gmail.com"
              className="hover:text-red-500 transition"
            >
              sumbar.computer@gmail.com
            </a>
            <a
              href="tel:+99312492343"
              className="hover:text-red-500 transition"
            >
              +993 (12) 49-23-43
            </a>
            <a
              href="tel:+99362708045"
              className="hover:text-red-500 transition"
            >
              +993 (62) 70-80-45
            </a>
          </div>
          <div className="flex gap-4 text-xs text-gray-400 pt-2">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">TikTok</span>
          </div>
        </div>

        {/* Orta Kolonka 1: Biz barada */}
        <div>
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
            Sumbar Computer
          </h4>
          <ul className="text-xs text-gray-400 flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-white transition">
                Biz barada
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Kepillilik
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Galereýa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Gizlinlik syýasaty
              </Link>
            </li>
          </ul>
        </div>

        {/* Orta Kolonka 2: Hyzmatlar */}
        <div>
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
            Hyzmatdaşlyk
          </h4>
          <ul className="text-xs text-gray-400 flex flex-col gap-2.5">
            <li>
              <Link href="#" className="hover:text-white transition">
                Tehniki hyzmat
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Eltip bermek we töleg
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Brendler
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Bal toplamak ulgamy
              </Link>
            </li>
          </ul>
        </div>

        {/* Sag Kolonka: Abuna we QR */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xs font-bold text-gray-300 mb-3">
              Täzeliklere abuna boluň
            </h4>
            <input
              type="email"
              placeholder="E-poçtaňyz"
              className="bg-white text-black text-xs px-3 py-2 w-full outline-none text-left border-none"
            />
          </div>

          <div className="border border-gray-800 p-3 rounded flex items-center gap-3 bg-[#1a1a1a] max-w-xs">
            <div className="w-12 h-12 bg-white text-black text-[9px] flex items-center justify-center font-bold rounded">
              QR
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400">
                Programmany ýükläp almak üçin skanirläň
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-4 mt-6 flex justify-between items-center text-[11px] text-gray-500">
        <span>© 2026 sumbar-computer.com Ähli hukuklary goraglydyr.</span>
      </div>
    </footer>
  );
}
