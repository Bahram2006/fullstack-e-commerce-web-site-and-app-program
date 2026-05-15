"use client";

import Link from "next/link";
import { useDict } from "@/store/useLangStore";

export default function Footer() {
  const dict = useDict();

  return (
    <footer className="bg-[#111111] text-white pt-10 pb-6 w-full font-sans border-t border-gray-800">
      {/* ── 1. Brendleriň Logolary (Full Row) ── */}
      <div className="w-full bg-[#0a0a0a] py-4 border-b border-gray-900 mb-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-6 opacity-75 text-sm font-bold tracking-wider">
          <span className="text-blue-500 font-mono tracking-tighter">intel</span>
          <span className="text-green-500 font-serif lowercase italic">razer</span>
          <span className="text-white tracking-widest font-light">SONY</span>
          <span className="text-orange-500 font-extrabold uppercase">jbl</span>
          <span className="text-purple-400 font-sans tracking-tight">BenQ</span>
          <span className="text-gray-300 font-medium">COOLER MASTER</span>
          <span className="text-yellow-600 font-mono">Esonic</span>
          <span className="text-red-500 tracking-tight font-black">T-FORCE</span>
          <span className="text-cyan-400 uppercase font-semibold">dell</span>
          <span className="text-white tracking-tight font-sans font-bold">Belet</span>
        </div>
      </div>

      {/* ── 2. Esasy Linkler we Maglumatlar ── */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Çep Kolonka: Logo we Kontaktlar */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {/* Hakyky Sumbar dizaýn logotyby */}
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center font-bold text-white text-base tracking-tighter">SC</div>
            <span className="text-xl font-black text-white tracking-tighter">
              SUMBAR <span className="text-red-600 text-xs block font-bold tracking-widest -mt-1">COMPUTER</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Türkmenistan, Aşgabat, köç. A.Nyýazow (Hudaýberdiýew), jaý 99
          </p>
          <div className="text-xs text-gray-400 flex flex-col gap-2">
            <a href="mailto:sumbar.computer@gmail.com" className="hover:text-red-500 transition">
              sumbar.computer@gmail.com
            </a>
            <a href="tel:+99312492343" className="hover:text-red-500 transition">
              +993 (12) 49-23-43
            </a>
            <a href="tel:+99362708045" className="hover:text-red-500 transition">
              +993 (62) 70-80-45
            </a>
          </div>
          <div className="flex gap-4 text-xs text-gray-400 pt-1">
            <span className="cursor-pointer hover:text-white transition">Instagram</span>
            <span className="cursor-pointer hover:text-white transition">TikTok</span>
          </div>
        </div>

        {/* Orta Kolonka 1: Biz barada */}
        <div>
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 border-b border-gray-800 pb-1">
            Sumbar Computer
          </h4>
          <ul className="text-xs text-gray-400 flex flex-col gap-2.5">
            <li><Link href="#" className="hover:text-white transition">Biz barada</Link></li>
            <li><Link href="#" className="hover:text-white transition">Kepillilik</Link></li>
            <li><Link href="#" className="hover:text-white transition">Galereýa</Link></li>
            <li><Link href="#" className="hover:text-white transition">Gizlinlik syýasaty</Link></li>
          </ul>
        </div>

        {/* Orta Kolonka 2: Hyzmatlar */}
        <div>
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4 border-b border-gray-800 pb-1">
            Hyzmatdaşlyk
          </h4>
          <ul className="text-xs text-gray-400 flex flex-col gap-2.5">
            <li><Link href="#" className="hover:text-white transition">Tehniki hyzmat</Link></li>
            <li><Link href="#" className="hover:text-white transition">Eltip bermek we töleg</Link></li>
            <li><Link href="#" className="hover:text-white transition">Brendler</Link></li>
            <li><Link href="#" className="hover:text-white transition">Bal toplamak ulgamy</Link></li>
          </ul>
        </div>

        {/* Sag Kolonka: Abuna we QR */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-bold text-gray-300 mb-3">
              Täzeliklere abuna boluň
            </h4>
            <div className="flex items-center bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="E-poçtaňyz"
                className="bg-white text-black text-xs px-3 py-2 w-full outline-none border-none text-left"
              />
              <button className="bg-red-600 text-white font-bold px-3 py-2 text-xs hover:bg-red-700 transition">➔</button>
            </div>
          </div>

          {/* Websaýty gowulandyrmaga kömek ediň */}
          <div className="text-xs">
            <span className="text-gray-400 block mb-1">Websaýty gowulandyrmaga kömek ediň</span>
            <button className="text-red-500 font-semibold border border-red-900/50 hover:border-red-500 rounded px-2.5 py-1 text-[11px] transition bg-red-950/20">
              Nägilelik bildirmek
            </button>
          </div>

          {/* Programmany Ýükläp almak baradaky guty (Hakyky Sumbar dizaýny) */}
          <div className="border border-gray-800 p-3 rounded flex items-center gap-3 bg-[#161616] max-w-xs">
            <div className="w-14 h-14 bg-white text-black text-[9px] flex flex-col items-center justify-center font-bold rounded shrink-0 p-0.5 leading-none text-center select-none">
              <span className="text-[7px] text-gray-400 mb-0.5">SCAN</span>
              QR
              <span className="text-[6px] text-gray-500 mt-0.5">CODE</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <span className="text-[10px] text-gray-400 font-medium leading-tight">
                Programmany ýükläp almak üçin skanirläň
              </span>
              <div className="flex gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-400">
                <span className="bg-[#222] px-1.5 py-0.5 rounded hover:text-white cursor-pointer border border-gray-800">App Store</span>
                <span className="bg-[#222] px-1.5 py-0.5 rounded hover:text-white cursor-pointer border border-gray-800">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800/60 pt-4 mt-6 flex justify-between items-center text-[11px] text-gray-500">
        <span>© 2026 sumbar-computer.com Ähli hukuklary goraglydyr.</span>
      </div>
    </footer>
  );
}
