import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white p-6 rounded-lg border border-gray-200 shadow-sm font-sans">
      <h1 className="text-2xl font-black text-gray-800 border-b border-gray-100 pb-3 uppercase text-center lg:text-left">
        Biz Barada
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        {/* Tekst meýdançasy */}
        <div className="xl:col-span-2 text-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            {/* ESLint ýalňyşlygynyň öňüni almak üçin dyrnakly teksti string içine aldyk */}
            <strong className="text-red-600">{"\"Sumbar Computer\""}</strong> dükany 2010-njy ýylda esaslandyryldy we korporatiw pudak we hususy müşderiler üçin IT enjamlarynyň ähli toplumynyň ygtybarly üpjün edijisi bolup durýar.
          </p>
          <p>
            Kompýuter enjamlarynyň bölek we lomaý satuw dükany hökmünde dünýä belli markalaryň önümlerini hödürleýäris.
          </p>
          
          <h3 className="font-bold text-gray-900 pt-2 text-base">SC-niň esasy harytlary:</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
            <li>Şahsy kompýuterler, monobloklar;</li>
            <li>Ofis we oýun noutbuklary;</li>
            <li>Oýunçylar üçin ýöriteleşdirilen periferiýa enjamlary;</li>
            <li>Üznüksiz elektrik üpjünçiligi ulgamlary we bloklary.</li>
          </ul>
        </div>

        {/* Sag tarapdaky Surat meýdançasy (Sumbaryň dükanynyň suraty) */}
        <div className="w-full flex flex-col gap-4">
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-md overflow-hidden bg-gray-100 border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">STORE IMAGE PLACEHOLDER</div>
          </div>
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-md overflow-hidden bg-gray-100 border border-gray-200">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">PRODUCT SHELF PLACEHOLDER</div>
          </div>
        </div>
      </div>
    </div>
  );
}
