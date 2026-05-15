'use client';

import React, { useState } from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

// ─── 1. Siziň Hero.tsx içindäki hakyky Sümbär sanawyňyz (Static Array) ───
const categories = [
  {
    name: "MONITORLAR",
    imageUrl: "/assets/1.png",
    subCategories: [
      { name: "Monitorlar", subImg: "/assets/1-2.png" },
      {
        name: "Monitorlar üçin berkidijiler we goýujylar",
        subImg: "/assets/1-3.png",
      },
    ],
  },
  {
    name: "PK DÜZÜJILERI",
    imageUrl: "/assets/2.png",
    subCategories: [
      { name: "PK ucin korpuslar", subImg: "/assets/2-1.png" },
      { name: "Esasy platalar", subImg: "/assets/2-2.png" },
      { name: "Prosessorlar (CPU)", subImg: "/assets/2-3.png" },
      { name: "Yadyn moduly (RAM)", subImg: "/assets/2-4.png" },
      { name: "Wideo kartalar", subImg: "/assets/2-5.png" },
      { name: "Tizlendiriji gaty disk (SSD)", subImg: "/assets/2-6.png" },
      { name: "Icki gaty diskler (HDD)", subImg: "/assets/2-7.png" },
      { name: "Optiki toplayjylar (DWD RW)", subImg: "/assets/2-8.png" },
      { name: "Tok upjuncilik blogy", subImg: "/assets/2-9.png" },
      { name: "Howa we suwly sowadyjylar", subImg: "/assets/2-10.png" },
      { name: "Korpuslar ucin aksessuarlar", subImg: "/assets/2-11.png" },
      { name: "Termo interfeysleri", subImg: "/assets/2-12.png" },
    ],
  },
  {
    name: "PERIFERIYALAR",
    imageUrl: "/assets/3.png",
    subCategories: [
      { name: "Esbaplar periferiya ucin", subImg: "/assets/3-1.png" },
      { name: "Kompyuter sycanjygy", subImg: "/assets/3-2.png" },
      { name: "Klawituralar", subImg: "/assets/3-3.png" },
      { name: "Sycanjyk ucin halycalar", subImg: "/assets/3-4.png" },
      { name: "Gulaklyklar", subImg: "/assets/3-5.png" },
      { name: "Kolonkalar we saunbarlar", subImg: "/assets/3-6.png" },
      { name: "Portatiw kolonkalary", subImg: "/assets/3-7.png" },
      { name: "WEB kamera", subImg: "/assets/3-8.png" },
      { name: "Mikrofonlar", subImg: "/assets/3-9.png" },
      { name: "Oyun konsollary we esbaplar", subImg: "/assets/3-10.png" },
      { name: "Oyun ucin kontrollerler", subImg: "/assets/3-11.png" },
      { name: "Wideo oyunlary", subImg: "/assets/3-12.png" },
      { name: "Dok stansiyalar we HUB-lar", subImg: "/assets/3-13.png" },
    ],
  },
  {
    name: "TOPLAYJYLAR",
    imageUrl: "/assets/4.png",
    subCategories: [
      { name: "Dasky gaty diskler", subImg: "/assets/4-1.png" },
      {
        name: "Gaty diskler ucin stansiyalar we korpuslar",
        subImg: "/assets/4-2.png",
      },
      { name: "Fles toplayjy (USB)", subImg: "/assets/4-3.png" },
      { name: "Yat karty (SD)", subImg: "/assets/4-4.png" },
      { name: "Kartriderler", subImg: "/assets/4-5.png" },
    ],
  },
  {
    name: "MONOBLOK WE PK",
    imageUrl: "/assets/5.png",
    subCategories: [
      { name: "Monobloklar", subImg: "/assets/5-1.png" },
      { name: "Brend kompyuterler", subImg: "/assets/5-2.png" },
    ],
  },
  {
    name: "NOUTBUKLAR WE BEYLEKILER",
    imageUrl: "/assets/6.png",
    subCategories: [
      { name: "Noutbuklar", subImg: "/assets/6-1.png" },
      { name: "Sumkalar we ryuzaklar", subImg: "/assets/6-2.png" },
      { name: "Stendler we esbaplar", subImg: "/assets/6-3.png" },
      { name: "Btareyler", subImg: "/assets/6-4.png" },
      { name: "Zaryad berijiler", subImg: "/assets/6-5.png" },
      { name: "Yadyn moduly", subImg: "/assets/6-6.png" },
      { name: "Optiki toplayjylar DWD RW", subImg: "/assets/6-7.png" },
      { name: "Ekranlar", subImg: "/assets/6-8.png" },
      { name: "Klawiaturalar", subImg: "/assets/6-9.png" },
      { name: "Klawiatura ucin nakleykalar", subImg: "/assets/6-10.png" },
    ],
  },
  {
    name: "MOBIL PERIFERIYALARY",
    imageUrl: "/assets/7.png",
    subCategories: [
      { name: "Plansetler", subImg: "/assets/7-1.png" },
      { name: "Smart sagatlar", subImg: "/assets/7-2.png" },
      { name: "Telefon ucin zaryad berijiler", subImg: "/assets/7-3.png" },
      { name: "Telefon ucin kabeller", subImg: "/assets/7-4.png" },
      { name: "Porttatiw batareyler", subImg: "/assets/7-5.png" },
      { name: "Podstawkalar we saklayjylar", subImg: "/assets/7-6.png" },
      {
        name: "Awtoulaglar ucin wideoregistratorlar",
        subImg: "/assets/7-7.png",
      },
      { name: "Sumkalar we keysler", subImg: "/assets/7-8.png" },
      { name: "Arassalayjy serisdeler", subImg: "/assets/7-9.png" },
      { name: "Durli mobil pereferiyalary", subImg: "/assets/7-10.png" },
    ],
  },
  {
    name: "PRINTERLER WE BEYLEKILER",
    imageUrl: "/assets/8.png",
    subCategories: [
      { name: "Lazer printerler", subImg: "/assets/8-1.png" },
      { name: "Inkjet printerler", subImg: "/assets/8-2.png" },
      { name: "kopiya aparatlary", subImg: "/assets/8-3.png" },
      { name: "Skanerler", subImg: "/assets/8-4.png" },
      { name: "Oy we ofis ucin telefonlar", subImg: "/assets/8-5.png" },
      { name: "Proyektorlar we duzujiler", subImg: "/assets/8-6.png" },
      { name: "Kagyz uweyji", subImg: "/assets/8-7.png" },
      { name: "Laminatorlar", subImg: "/assets/8-8.png" },
      { name: "Kanselyariya", subImg: "/assets/8-9.png" },
      { name: "Sarp edilyan harytlar", subImg: "/assets/8-10.png" },
    ],
  },
  {
    name: "TOR ENJAMLARY",
    imageUrl: "/assets/9.png",
    subCategories: [
      { name: "Routerler", subImg: "/assets/9-1.png" },
      { name: "Simsiz guyclendirijiler", subImg: "/assets/9-2.png" },
      { name: "Tor adapteri we platalar", subImg: "/assets/9-3.png" },
      {
        name: "Swicler, konwerterler we beylekiler",
        subImg: "/assets/9-4.png",
      },
      { name: "Tor kabeli", subImg: "/assets/9-5.png" },
      { name: "Testerler we gurallar", subImg: "/assets/9-6.png" },
    ],
  },
  {
    name: "HOWPSUZLYK ULGAMY",
    imageUrl: "/assets/10.png",
    subCategories: [
      { name: "Gozegcilik kameralary", subImg: "/assets/10-1.png" },
      { name: "Elektron gulplar", subImg: "/assets/10-2.png" },
    ],
  },
  {
    name: "AWTOMATIZASIYA",
    imageUrl: "/assets/11.png",
    subCategories: [
      { name: "POS kompyuterleri we beylekiler", subImg: "/assets/11-1.png" },
      { name: "Barkod we cek printerler", subImg: "/assets/11-2.png" },
      { name: "Barkod skanerleri", subImg: "/assets/11-3.png" },
      { name: "Pul sanayjylar", subImg: "/assets/11-4.png" },
      { name: "Pul gutusy", subImg: "/assets/11-5.png" },
      { name: "Sarp edilyan harytlar", subImg: "/assets/11-6.png" },
    ],
  },
  {
    name: "TOK SAZLAYJYLAR WE UPS",
    imageUrl: "/assets/12.png",
    subCategories: [
      { name: "UPS", subImg: "/assets/12-1.png" },
      { name: "Tok sazlayjylar", subImg: "/assets/12-2.png" },
      { name: "UPS ucin batareyler", subImg: "/assets/12-3.png" },
      { name: "UPS ucin beylekiler", subImg: "/assets/12-4.png" },
    ],
  },
  {
    name: "MEBELLER",
    imageUrl: "/assets/13.png",
    subCategories: [
      { name: "Kompyuter kreslolary", subImg: "/assets/13-1.png" },
      { name: "Kompyuter stollary", subImg: "/assets/13-2.png" },
    ],
  },
  {
    name: "HOJALYK HARYTLARY",
    imageUrl: "/assets/14.png",
    subCategories: [
      { name: "Oy ucin atributlar", subImg: "/assets/14-1.png" },
      { name: "Telewizorlar", subImg: "/assets/14-2.png" },
      { name: "TW-pristawkalr we Tyunerler", subImg: "/assets/14-3.png" },
      { name: "Pylesoslar", subImg: "/assets/14-4.png" },
      { name: "Utukler we bugly utukler", subImg: "/assets/14-5.png" },
      {
        name: "Howa nemlendirijiler we arassalayjylar",
        subImg: "/assets/14-6.png",
      },
      { name: "Yyladys enjamlary", subImg: "/assets/14-7.png" },
      { name: "Ashana enjamlary we esbaplary", subImg: "/assets/14-8.png" },
      { name: "Ashana gap-gaclary", subImg: "/assets/14-9.png" },
      { name: "Caynekler", subImg: "/assets/14-10.png" },
      { name: "Kofe masynlary", subImg: "/assets/14-11.png" },
      { name: "Tosterler", subImg: "/assets/14-12.png" },
      { name: "Miwe sykyjylar", subImg: "/assets/14-13.png" },
      { name: "Blenderler", subImg: "/assets/14-14.png" },
      { name: "Et uweyji", subImg: "/assets/14-15.png" },
      { name: "Terezi", subImg: "/assets/14-16.png" },
      { name: "Howa sowadyjy", subImg: "/assets/14-17.png" },
    ],
  },
  {
    name: "GOZELLIK WE SAGLYK",
    imageUrl: "/assets/15.png",
    subCategories: [
      { name: "Aynek", subImg: "/assets/15-1.png" },
      { name: "Fenlar", subImg: "/assets/15-2.png" },
      { name: "Ploykalar we goneldijiler", subImg: "/assets/15-3.png" },
      { name: "Dis cotgalary we irregatorlar", subImg: "/assets/15-4.png" },
      { name: "Elektrobritwalar", subImg: "/assets/15-5.png" },
      { name: "Sac kesmek we trimmer", subImg: "/assets/15-6.png" },
      { name: "Massajorlar", subImg: "/assets/15-7.png" },
      { name: "Elektrik skuterler", subImg: "/assets/15-8.png" },
      { name: "Gozellik we saglyk ucin", subImg: "/assets/15-9.png" },
    ],
  },
  {
    name: "BASGALAR",
    imageUrl: "/assets/16.png",
    subCategories: [
      { name: "Lityum batareyler", subImg: "/assets/16-1.png" },
      { name: "Elcyralar", subImg: "/assets/16-2.png" },
      { name: "Kabeller", subImg: "/assets/16-3.png" },
      { name: "Audio kabeller we gecirijiler", subImg: "/assets/16-4.png" },
      { name: "Wideo kabeller we gecirijiler", subImg: "/assets/16-5.png" },
      { name: "Kabel-tertiplemesi", subImg: "/assets/16-6.png" },
      { name: "Adapterler we konwerterler", subImg: "/assets/16-7.png" },
      { name: "Splitterler we swicler", subImg: "/assets/16-8.png" },
      {
        name: "Elektrik uzaldyjylar we rozetkalar",
        subImg: "/assets/16-9.png",
      },
      { name: "Gurallar", subImg: "/assets/16-10.png" },
      { name: "Basgalar", subImg: "/assets/16-11.png" },
    ],
  },
];

export default function SidebarCategories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Arassa URL link ýasayjy funksiýa
  const slugify = (text: string) =>
    text.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_-]+/g, '-');

  return (
    <aside className="w-full lg:w-[280px] bg-white border border-gray-300 rounded-sm z-30 shrink-0 font-sans">
      {/* 2. Siziň Hakyky Gözgyl gyzylymtyk Başlygyňyz */}
      <div className="bg-[#cc0000] text-white p-3 font-bold text-[13px] flex items-center gap-3 rounded-t-sm select-none">
        <div className="flex flex-col gap-1 w-4">
          <div className="h-0.5 w-full bg-white"></div>
          <div className="h-0.5 w-full bg-white"></div>
          <div className="h-0.5 w-full bg-white"></div>
        </div>
        ÄHLI HARYTLAR
      </div>

      {/* 3. Mega Menu Logikaly Çep Navigasiýa */}
      <nav
        className="flex flex-col relative"
        onMouseLeave={() => setActiveCategory(null)}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative border-b border-gray-200/80"
            onMouseEnter={() => setActiveCategory(index)}
          >
            {/* Esasy Kategoriýa Linki */}
            <Link
              href={`/category/${slugify(cat.name)}`}
              className="flex items-center justify-between p-2 hover:bg-gray-50 transition-all group"
            >
              <div className="flex items-center gap-3">
                {/* Haryt Baş Suratjygy */}
                <div className="w-8 h-8 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[12px] font-bold text-gray-700 group-hover:text-[#cc0000] uppercase tracking-tight">
                  {cat.name}
                </span>
              </div>
              <ChevronRight
                size={14}
                className="text-gray-300 group-hover:text-[#cc0000] transition-colors"
              />
            </Link>

            {/* ─── 4. Siziň Hakyky SAG GAPDALDA AÇYLÝAN MEGA MENUŇYZ ─── */}
            {activeCategory === index && cat.subCategories.length > 0 && (
              <div className="absolute left-[279px] top-0 w-[380px] h-auto bg-white border border-gray-300 shadow-2xl z-50 p-6 flex flex-col gap-4 rounded-r-sm animate-in fade-in slide-in-from-left-1 duration-150">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100 pb-1.5 -mt-2 mb-1">
                  {cat.name} jikme-jik
                </div>
                <div className="flex flex-col gap-5">
                  {cat.subCategories.map((sub, i) => (
                    <Link
                      key={i}
                      href={`/category/${slugify(sub.name)}`}
                      className="flex items-center gap-4 group/sub hover:bg-slate-50 p-2 -m-2 rounded transition-all"
                    >
                      {/* Sub-kategoriýanyň kiçi suraty */}
                      <div className="w-14 h-14 bg-white border border-gray-100 rounded p-1 flex items-center justify-center shadow-sm shrink-0">
                        <img
                          src={sub.subImg}
                          alt={sub.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-[13px] font-semibold text-gray-800 group-hover/sub:text-[#cc0000] leading-tight">
                        {sub.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}