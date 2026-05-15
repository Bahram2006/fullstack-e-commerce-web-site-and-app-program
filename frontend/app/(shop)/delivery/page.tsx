import { Truck, CreditCard, Info, Phone, Mail, CheckCircle } from 'lucide-react';
import SideBanners from "@/components/SideBanners";

export default function DeliveryAndPaymentPage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── BAŞLYK ── */}
      <h1 className="text-xl font-black text-gray-950 border-b-2 border-gray-100 pb-3 uppercase tracking-tight flex items-center gap-2">
        <Truck size={20} className="text-[#cc0000]" />
        <span>Eltip Bermek we Töleg</span>
      </h1>
      
      {/* ── GRID LAYOUT ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-6">
        
        {/* SOL WE ORTA KOLONKA (Tekstler) */}
        <div className="xl:col-span-2 space-y-6 text-[13px] text-gray-700">
          
          <div className="space-y-4">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <Truck size={16} />
              <span>Eltip bermegiň usullary:</span>
            </h3>

            {/* 1. Özüň baryp almak */}
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[13px]">1. Özüň baryp almak:</h4>
              <p>
                Sargydy dükanyň satyjylaryna deslapdan jaň etmek arkaly A.Nyýazow (Hudayberdiýew) köçesi, 99 jaý salgysyndan özüňiz alyp bilersiňiz.
              </p>
            </div>

            {/* 2. Aşgabat şäheriniň çäklerinde eltip bermek */}
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[13px]">2. Aşgabat şäheriniň çäklerinde eltip bermek:</h4>
              <p>
                Aşgabat şäheriniň çäklerinde eltip bermek – günüň dowamynda ýa-da ertesi gün (sargyt wagtyna baglylykda) amala aşyrylýar. Sargyt 500 manat möçberden geçýän bolsa, eltip bermek mugt (eltip bermegiň bahasy – 20 manat). Uzak etraplara eltip bermek mugt, ýöne diňe sargyt 1000 manatdan ýokary bolsa (eltip bermegiň bahasy 50 manat).
              </p>
              <p>
                Aşgabat şäheri boýunça eltip bermek sagat 09:00 – 19:00 aralygynda amala aşyrylýar.
              </p>
              <p>
                Dükanyň iş wagty: her gün 09:30-dan 18:30-a çenli, ýekşenbe 11:00-dan 19:00-a çenli.
              </p>
            </div>

            {/* 3. Welaýatara eltip bermek */}
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-[13px]">3. Welaýatara eltip bermek:</h4>
              <p>
                Welaýatlara eltip bermek Türkmenistanyň poçta gullugy tarapyndan amala aşyrylýar. Eltip bermegiň möhleti – ortaça 2-5 gün. Baýramçylyk ýa-da dynç günleri sargyt edilen harytlaryň eltip berilmegi üçin has köp wagt gerek bolup biler. Saýtdan Türkmenistanyň islendik ýerine sargyt edeniňizde, eltip bermek mugt, ýöne sargyt 1500 manat möçberinden geçmeli (eltip bermegiň bahasy – 50 manat). Sargyt edilende, maglumatlary takyk doldurmakda üns bermegiňizi haýyş edýäris, eger salgy we şäher gabat gelmese, sargyt gaýtadan resmileşdirilýänçä, haryt iberilmez.
              </p>
            </div>

            {/* Goşmaça şertler */}
            <p className="text-gray-600 italic text-[12px] pt-2">
              Eltip bermegiň ýokardaky usullary müşderiniň talaplaryna laýyk gelmeýän bolsa, müşderi öz usulyny teklip etmäge hukugy bardyr, munda harytlaryň abatlygy we eltip bermek çykdajylary üçin jogapkärçiligi dolulygyna müşderi öz üstüne alýar.
            </p>
            <p className="text-gray-600 font-medium">
              Sargyt resmileşdirenden soň satyjymyz käbir soraglary anyklamak üçin Siziň bilen telefon arkaly habarlaşar. Günüň dowamynda telefon elýeterli bolmasa, sargyt ýatyrylýar.
            </p>
          </div>

          {/* TÖLEG USULLARY */}
          <div className="space-y-3 border-t border-gray-100 pt-4">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <CreditCard size={16} />
              <span>Töleg usullary:</span>
            </h3>
            <p>Töleg şu aşakdaky usullar arkaly amala aşyrylyp bilner:</p>
            
            <ul className="flex flex-col gap-2.5 pl-1">
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                <span>Nagt hasaplaşygy;</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                <span>Bank karty (müşderiniň özi gelip alanda we Aşgabat şäheriniň çäklerinde eltip bermekde terminal arkaly töleg);</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                <span>{"Onlaýn töleg (VPN we dürli proksi-serwerleri ulananyňyzda, onlaýn tölegiň işlemeýändigini ýadyňyzdan çykarmaň);"}</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                <span>Nagt däl töleg (ýuridiki şahslar we kärhanalar üçin bank arkaly pul serişdelerini geçirmek, daşary ýurt kompaniýalary üçin walýuta hasabyna tölemäge mümkinçilik berýäris);</span>
              </li>
            </ul>
          </div>

          {/* GOŞMAÇA MAGLUMAT */}
          <div className="border-t border-gray-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000]">
                <Info size={15} />
                <span>Goşmaça maglumat üçin:</span>
              </h3>
              <div className="space-y-2 pl-1 text-gray-600">
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <span className="font-semibold text-gray-900">+993 (12) 49-23-43, +993 (12) 26-13-69, +993 (62) 70-80-45</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400 shrink-0" />
                  <a href="mailto:sumbar.computer@gmail.com" className="text-blue-600 hover:underline">sumbar.computer@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SAG GAPDAL (Hakyky Sumbar Eltip bermek UGREEN Suraty we 3 sany Banner) */}
        <div className="w-full flex flex-col gap-4">
          
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 border border-gray-200 group shadow-sm">
            <img 
              src="/assets/Banners/Banner_7.jpg" // UGREEN eltip bermek suraty
              alt="Sumbar Computer Eltip Bermek Ugreen" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
          
          <div className="mt-2 w-full">
            <SideBanners />
          </div>

        </div>

      </div>
    </div>
  );
}
