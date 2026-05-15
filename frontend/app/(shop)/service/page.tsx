import { Wrench, CheckCircle, Phone, Info } from 'lucide-react';

export default function TechnicalServicePage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── BAŞLYK ── */}
      <h1 className="text-xl font-black text-gray-950 border-b-2 border-gray-100 pb-3 uppercase tracking-tight flex items-center gap-2">
        <Wrench size={20} className="text-[#cc0000]" />
        <span>Tehniki Hyzmat</span>
      </h1>
      
      {/* ── ESASY GRID LAYOUT (Tekstler we Sag gapdal abatlaýyş suraty) ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-6">
        
        {/* SOL WE ORTA KOLONKA (Tehniki düşündirişler) */}
        <div className="xl:col-span-2 space-y-5 text-[13px]">
          
          {/* Giriş Teksti */}
          <p className="text-gray-700 text-sm">
            <strong className="text-[#cc0000]">{"Service Sumbar Computer"}</strong> – Aşgabadyň merkezinde ýerleşýän professional kompýuter hyzmat merkezidir. 10 ýyldan gowrak wagt bäri hyzmatlarymyzy şahsyýetlere we iri guralamalara hödürleýäris.
          </p>

          {/* BIZIŇ HYZMATLARYMYZ LISTI */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1.5">
              <Info size={15} />
              <span>Biziň hyzmatlarymyz şular:</span>
            </h3>
            
            <ul className="flex flex-col gap-3 pl-1">
              {[
                "Kompýuter enjamlarynyň doly hyzmaty (abatlamak, proşiwka, programma üpjünçiligi);",
                "Dürli kompýuterleriň we noutbuklaryň diagnostikasy, gözlemek we näsazlyklaryny düzetmek;",
                "Ofis enjamlaryny (printerler, fakslar we ş.m.) abatlamak we profilaktika etmek;",
                "Struýnyý we lazer printerleri zaprawka etmek."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <CheckCircle size={15} className="text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TELEFON NOMERI BÖLÜMI */}
          <div className="border-t border-gray-100 pt-4 mt-6">
            <div className="flex items-center gap-2 text-gray-700 bg-red-50/40 p-4 rounded-sm border border-red-100/60 w-max max-w-full">
              <Phone size={16} className="text-[#cc0000] shrink-0" />
              <p className="text-sm font-bold">
                Telefon: <a href="tel:+99362233759" className="text-gray-950 hover:text-[#cc0000] transition-colors">+993 (62) 23-37-59</a>
              </p>
            </div>
          </div>

        </div>

        {/* SAG GAPDAL (Hakyky Sumbar Tehniki Hyzmat Suraty) */}
        <div className="w-full flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-50 border border-gray-200 shadow-sm group">
            {/* Hakyky ekrandaky platany sanyjak bilen bejerýän uly surat meýdançasy */}
            <img 
              src="/assets/Banners/Banner_10.jpg" // Surat adyny ýa-da ugruny özüňize laýyk goýuň
              alt="Sumbar Computer Tehniki Hyzmat" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
