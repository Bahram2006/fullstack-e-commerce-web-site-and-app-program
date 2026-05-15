import { Phone, Mail, MapPin, Clock, Info, CheckCircle, Briefcase } from 'lucide-react';
import SideBanners from "@/components/SideBanners";

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── BAŞLYK ── */}
      <h1 className="text-xl font-black text-gray-950 border-b-2 border-gray-100 pb-3 uppercase tracking-tight flex items-center gap-2">
        <Info size={20} className="text-[#cc0000]" />
        <span>Biz Barada</span>
      </h1>
      
      {/* ── ESASY GRID LAYOUT ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-6">
        
        {/* SOL WE ORTA KOLONKA (Tekstler) */}
        <div className="xl:col-span-2 space-y-6 text-[13px]">
          
          <p className="text-gray-700">
            <strong className="text-[#cc0000]">{"\"Sumbar Computer\""}</strong> dükany 2010-njy ýylda esaslandyryldy we korporatiw pudak we hususy müşderiler üçin IT enjamlarynyň ähli toplumynyň ygtybarly üpjün edijisi bolup durýar. Kompýuter enjamlarynyň bölek we lomaý satuw dükany.
          </p>

          <p className="text-gray-700">
            <strong className="text-[#cc0000]">{"\"Sumbar Computer\""}</strong> şu harytlaryň dürli görnüşlerini hödürleýär: şahsy kompýuterler, aýratyn toplumlaşdyryjylar, noutbuklar, periferiýa gurluşlary, kompýuter esbaprary, printerler, ofis guramaçylykly tehnikasy, öýjükli periferiýa we dünýäniň öňdebaryjy öndürijilerinden başga harytlar.
          </p>

          {/* ESASY HARYTLAR */}
          <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px] text-[#cc0000]">
              SC-niň esasy harytlary:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
              {[
                "Şahsy kompýuterler, monobloklar;",
                "Ofis we oýun noutbuklary;",
                "Oýunçylar üçin toplumlaşdyryjy enjamlar we periferiýa enjamlary;",
                "Üznüksiz elektrik üpjünçiligi ulgamlary we bloklary;",
                "Ofis enjamlary we guramaçylykly tehnika;",
                "Ulgamlaýyn enjamlar;",
                "Dürli görnüşli periferiýa enjamlary, sarp ediş materiallary we ş.m."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KORPORATIW MÜŞDERILER */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2">
              <Briefcase size={16} className="text-gray-500" />
              <span>Korporatiw müşderiler üçin enjamlar bilen üpjün etmek we taslamalary durmuşa geçirmek üçin hyzmatlaryň doly toplumy hödürlenýär:</span>
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>Kiçi, orta we iri kärhanalar üçin täjirçilik enjamlaryny satyn almakda ýörite meýilleşdirilen bahalar göz öňünde tutulýar;</li>
              <li>Döwlet buýrujysyna öndürijiler bilen bilelikde ylalaşylan ýa-da işlenip düzülen taslamalar üçin aýratyn arzanladyşlar bilen döwlet pudagyna harytlary işjeň üpjün edýäris;</li>
            </ul>
          </div>

          {/* BÖLEK SATUW MÜŞDERILERI */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-950 text-sm">Bölek satuw müşderileri üçin:</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>Aňryçäk derejede pes bahalar;</li>
              <li>Hünär derejeli we hoşniýetli menejerler;</li>
              <li>Harytlary Türkmenistanyň ähli ýerine {"\"gapyňyza\""} eltip bermek.</li>
              <li>Onlaýn dükan (saýt marketpleýs ýa-da ikinji derejeli bazar däl).</li>
              <li>Saýtda döwürleýin arzanladyşlar.</li>
              <li>Kart arkaly töleg (onlaýn we töleg terminaly arkaly).</li>
              <li>Sarp edijileriň hukuklaryny goramak baradaky Türkmenistanyň kanunyna esaslanýan kepillik şertleri.</li>
            </ul>
          </div>

          {/* HYZMATLARYŇ DOLY GÖRNÜŞI */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-950 text-sm">Müşderilerimiz üçin hyzmatlaryň doly görnüşi:</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>Saýtda bolan harytlaryň elmydama elýeterliligini kepillendirýäris.</li>
              <li>Hemişelik müşderiler üçin arzanladyşlar bar, uly sargytlar üçin bahalar goşmaça ara alnyp maslahatlaşylýar;</li>
              <li>Sargydyňyzy gysga wagtda Türkmenistanyň islendik şäherine ibereris.</li>
              <li>Dükanymyzyň hyzmat merkezi (enjamlary abatlamak we hyzmat etmek).</li>
              <li>Ýüze çykan ähli soraglary we islegleri ara alyp maslahatlaşmaga we çözmäge taýýardyrys.</li>
            </ul>
          </div>

          {/* IŞ WAGTY WE HABARLAŞMAK */}
          <div className="border-t border-gray-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span>Iş wagty:</span>
              </h3>
              <ul className="space-y-1 text-gray-600 pl-1">
                <li><span className="font-semibold text-gray-900">Iş günleri:</span> 9:00-dan 19:00-a çenli.</li>
                <li><span className="font-semibold text-gray-900">Dynç güni:</span> 11:00-dan 19:00-a çenli.</li>
                <li className="text-[11px] text-gray-400 mt-1">Dükan we eltip bermek hyzmaty baýramçylyk günlerinde işlemeýär.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-950 text-sm">Habarlaşmak üçin:</h3>
              <div className="space-y-2 pl-1 text-gray-600">
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <span className="font-semibold text-gray-900">+993 (12) 49-23-43, +993 (12) 26-13-69, +993 (62) 70-80-45</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-gray-400 shrink-0" />
                  <a href="mailto:sumbar.computer@gmail.com" className="text-blue-600 hover:underline">sumbar.computer@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span className="font-medium">sumbarcomputer_official</span>
                </div>
              </div>
            </div>
          </div>

          {/* SALGY */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-start gap-2 text-gray-700 bg-red-50/40 p-3 rounded-sm border border-red-100/60">
              <MapPin size={16} className="text-[#cc0000] mt-0.5 shrink-0" />
              <p>
                Dükanymyz <span className="font-bold text-gray-950">A.Nyýazow (Hudayberdiýew, 4 mkr.) köçesi, 99 jaý</span> salgysy boýunça Aşgabat şäheriniň merkezinde ýerleşýär (Hudaýberdiýew köçäniň hem-de Bomako köçäniň çatrygy, AŞTU-nyň garşysy).
              </p>
            </div>
          </div>

        </div>

        {/* SAG GAPDAL (Problemaly onError funksiýalary doly aýryldy) */}
        <div className="w-full flex flex-col gap-4">
          
          {/* Dükan Içiniň Birinji Suraty */}
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 border border-gray-200 group">
            <img 
              src="/assets/Banners/Banner_8.jpg" 
              alt="Sumbar Computer Dükan Içi" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Dükan Içiniň Ikinji Suraty */}
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 border border-gray-200 group">
            <img 
              src="/assets/Banners/Banner_9.jpg" 
              alt="Sumbar Computer Haryt Tekjeleri" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
          
          {/* 3 sany durnukly banner */}
          <div className="mt-2 w-full">
            <SideBanners />
          </div>

        </div>

      </div>
    </div>
  );
}
