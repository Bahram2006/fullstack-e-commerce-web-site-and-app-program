import { Wallet, MapPin, ChevronRight, LogIn, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── 1. BAŞLYK ── */}
      <h1 className="text-md font-black text-gray-900 border-b border-gray-100 pb-3 uppercase tracking-wider text-center">
        Sebedim
      </h1>

      {/* ── 2. SEBET STOLY BAŞLYKLARY ── */}
      <div className="hidden md:grid grid-cols-12 text-[11px] font-bold text-gray-400 uppercase tracking-wider pt-4 pb-2 border-b border-gray-100/60 px-2">
        <div className="col-span-6">Haryt</div>
        <div className="col-span-3 text-center">Sany</div>
        <div className="col-span-2 text-right">Bahasy</div>
        <div className="col-span-1 text-right"></div>
      </div>

      {/* ── 3. BOŞ SEBET MEÝDANÇASY (Sumbaryň edil özi) ── */}
      <div className="flex flex-col items-center justify-center py-16 border-b border-gray-100/80">
        <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center relative text-gray-400 shrink-0">
          <Wallet size={32} strokeWidth={1.5} />
          <span className="absolute -bottom-1 -right-1 bg-gray-400 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-black">✕</span>
        </div>
        <h2 className="text-sm font-black text-gray-900 mt-4 tracking-tight">Siziň sebediňiz boş</h2>
      </div>

      {/* ── 4. AŞAKY GOŞMAÇA SEKTORLAR (2 Kolonkaly Grid) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 text-[12px]">
        
        {/* ÇEP GAPDAL: Maslahat we Hasabyma gir zolagy */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-gray-950 text-[13px]">Maslahat berilýär:</h3>
            <p className="font-bold text-gray-900 leading-snug">
              Satyn almazdan ozal awtorizasiýa etmek bilen, aşakdaky artykmaçlyklary alarsyňyz:
            </p>
            <ul className="space-y-2 pl-1 text-gray-500 font-medium leading-relaxed">
              <li>1) Siziň sargytlaryňyzyň taryhy profilde saklanar, şeýle hem priloženiýanyň üsti bilen hem görüp bolar;</li>
              <li>2) Siz satyn alanyňyzda ýazgydaky maglumatlaryňyzy girizmek zerurlygy bolmaz;</li>
              <li>3) Siz halan önümleriňizi satyn almak üçin aýratyn sanawa goşup bilersiňiz;</li>
              <li>4) Harytlara synlaryňyzy-pikirleriňizi ýazmak, halan harytlaryňyza bellik goýmak mümkinçiligi;</li>
              <li>5) Web sahypasyndan harytlary sebediňize goşanyňyzdan soň, satyn almaklygy priloženiýadan we tersine dowam etdirip bilersiňiz;</li>
              <li>6) Siz ballary toplap olary priloženiýanyň üsti bilen haryt satyn alyp harçlap bilersiňiz.</li>
            </ul>
          </div>

          {/* Gyzyl Hasabyma gir düwmesi */}
          <Link 
            href="/auth" 
            className="w-full bg-[#cc0000] hover:bg-[#b30000] text-white font-black py-2.5 uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm shadow transition active:scale-99 select-none mt-2"
          >
            <LogIn size={14} />
            <span>Hasabyma gir</span>
          </Link>
        </div>

        {/* SAG GAPDAL: Eltip bermek we Hasap zolagy */}
        <div className="space-y-4">
          {/* Ýer saýlama meýdançasy */}
          <div className="flex flex-col gap-1.5">
            <label className="font-bold text-gray-800">Eltip bermek üçin ýeriňiz <span className="text-[#cc0000]">*</span></label>
            <div className="relative w-full">
              <select className="w-full border border-gray-300 p-2.5 outline-none rounded-sm bg-white text-gray-900 appearance-none font-bold pr-10 cursor-pointer">
                <option value="ashgabat">Aşgabat şäheri</option>
                <option value="ahal">Ahal welaýaty</option>
                <option value="balkan">Balkan welaýaty</option>
                <option value="mary">Mary welaýaty</option>
                <option value="lebap">Lebap welaýaty</option>
                <option value="dashoguz">Daşoguz welaýaty</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]">▼</span>
            </div>
          </div>

          {/* Bahalandyryş Hasap Gutusy */}
          <div className="bg-gray-50/50 border border-gray-200/80 rounded-sm p-4 space-y-3 font-bold text-gray-500">
            <div className="flex justify-between items-center">
              <span>Harytlar</span>
              <span className="text-gray-900">0.00 TMT</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Eltip bermek</span>
              <span className="text-gray-900">0.00 TMT</span>
            </div>
            <div className="h-px bg-gray-200 my-1" />
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-900">Jemi</span>
              <span className="text-[#cc0000] font-black text-base">0.00 TMT</span>
            </div>
          </div>

          {/* Gyzyl Sargyt et düwmesi */}
          <button 
            disabled 
            className="w-full bg-[#cc0000] hover:bg-[#b30000] text-white font-black py-3 uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm shadow transition disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
            <span>Sargyt et</span>
          </button>
        </div>

      </div>

    </div>
  );
}
