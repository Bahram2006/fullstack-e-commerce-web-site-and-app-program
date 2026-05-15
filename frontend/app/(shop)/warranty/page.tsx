import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';

export default function WarrantyPage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── BAŞLYK ── */}
      <h1 className="text-xl font-black text-gray-950 border-b-2 border-gray-100 pb-3 uppercase tracking-tight flex items-center gap-2">
        <ShieldCheck size={20} className="text-[#cc0000]" />
        <span>Kepillilik</span>
      </h1>
      
      {/* ── ESASY GRID LAYOUT (Tekstler we Sag gapdal kepillik möhri suraty) ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-6">
        
        {/* SOL WE ORTA KOLONKA (Kepillik şertleri) */}
        <div className="xl:col-span-2 space-y-6 text-[13px] text-gray-700">
          
          {/* Giriş Ýazgysy */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm">Kepilligiň şertleri:</h3>
            <p>
              Aşakda görkezilen kepillik şertleri sarp ediji we sol bir wagtda ýerine ýetiriji hem degişlidir. Bu şertler Türkmenistanyň döwlet syýasatynyň guramaçylyk-hukuk, durmuş-ykdysady esaslaryny we sarp edijileri goramak babatandaky kanunyň esaslaryny düzýär.
            </p>
          </div>

          {/* I. BÖLÜM */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000]">
              <FileText size={15} />
              <span>I. Kepilligiň borçnamalary</span>
            </h3>
            
            <ul className="flex flex-col gap-3 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gray-900 shrink-0 mt-0.5">1.</span>
                <span>Öndüriji tarapyndan kesgitlenen kepillik möhleti bolmadyk ýagdaýynda, şeýle hem gulluk möhleti döwründe kepillik berilmeyän komponentli harytlardan başgalaryna (sarp ediş materiallary, kartrijler, CD-DVD diskleri, sumkalar, metal we plastmassa önümleri, podstawkalar, berkidijiler, kabeller, gurallar, elektron komponentleri bolmadyk harytlar, şeýle hem programma üpjünçiligi, islendik operasion ulgamy, programmalar we ş.m.) ýerine ýetiriji harytlara kepilligiň möhletini kesgitlemäge borçludyr.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gray-900 shrink-0 mt-0.5">2.</span>
                <span>Şertnamada başga düzgün göz öňünde tutulmadyk bolsa, harytlara kepillikli möhlet harydyň sarp edijä satylan gününden開始 edip hasaplanýar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gray-900 shrink-0 mt-0.5">3.</span>
                <span>Kepillik möhleti harydyň toplumyna we onuň esasy harydyň gurluş böleklerine berlip biliner, mysal üçin: ýygnalan kompýutere we onun toplumlaşdyryjy böleklerine kepillikli möhletler bellenip bilner.</span>
              </li>
            </ul>
          </div>

          {/* II. BÖLÜM */}
          <div className="space-y-3 border-t border-gray-100 pt-4">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000]">
              <FileText size={15} />
              <span>II. Sarp edijiniň harydyň satyn alandygyny tassyklayan resminamany satyjydan (ýerine ýetirijiden) almak hukugy</span>
            </h3>
            
            <ul className="flex flex-col gap-3 pl-1">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gray-900 shrink-0 mt-0.5">1.</span>
                <span>Sarp edijiniň harydyň satyn alandygyny tassyklayan resminamany satyjydan (ýerine ýetirijiden) almaga hukugy bar. Harytlaryň satyn alandygyny tassyklayan resminama hökmünde kassa ýa-da haryt töleghaty, girdeji kassa orderi, kesilen talonyň töleghaty, töleg tabşyrygy ýa-da harytlaryň ady, bahasy, harydyň satyn alnan senesi, satyjy (ýerine ýetiriji) barada maglumatlary öz içine alýan resminama kabul edilýär.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-gray-900 shrink-0 mt-0.5">2.</span>
                <span>Satyjy (ýerine ýetiriji) haryt satylanda, sarp edijä harydyň satyn alandygyny tassyklayan resminama bermäge borçludyr.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SAG GAPDAL (Hakyky Sumbar Kepillik Möhri Suraty) */}
        <div className="w-full flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 border border-gray-200 shadow-sm group">
            {/* Hakyky ekrandaky kepillik şahadatnamasyna gök gysgyçly möhür basylýan surat meýdançasy */}
            <img 
              src="/assets/Banners/Banner_11.jpg" // Surat adyny ýa-da ugruny özüňize laýyk goýuň
              alt="Sumbar Computer Kepillilik" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
