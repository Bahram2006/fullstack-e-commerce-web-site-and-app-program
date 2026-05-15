import { ShieldCheck, FileText, RefreshCw, AlertTriangle, Phone } from 'lucide-react';
import SideBanners from "@/components/SideBanners";

export default function WarrantyPage() {
  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── BAŞLYK ── */}
      <h1 className="text-xl font-black text-gray-950 border-b-2 border-gray-100 pb-3 uppercase tracking-tight flex items-center gap-2">
        <ShieldCheck size={20} className="text-[#cc0000]" />
        <span>Kepillilik</span>
      </h1>
      
      {/* ── GRID LAYOUT ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-6">
        
        {/* SOL WE ORTA KOLONKA (Tekstler) */}
        <div className="xl:col-span-2 space-y-6 text-[13px] text-gray-700">
          
          {/* Kepilligiň şertleri */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-950 text-sm">Kepilligiň şertleri:</h3>
            <p>
              Aşakda görkezilen kepillikli şertler sarp edijä we şol bir wagtda ýerine ýetirijä hem degişlidir. Bu şertler Türkmenistanyň döwlet syýasatynyň guramaçylyk-hukuk, durmuş-ykdysady esaslaryny we sarp edijileri goramak babatyndaky kanunyň esaslaryny düzýär.
            </p>
          </div>

          {/* I. BÖLÜM */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <FileText size={15} />
              <span>I. Kepilligiň borçnamalary</span>
            </h3>
            <div className="flex flex-col gap-3 pl-1">
              <p>
                Öndüriji tarapyndan kesgitlenen kepillik möhleti bolmadyk ýagdaýynda, şeýle hem gulluk möhleti döwründe kepillik berilmeýän komponentli harytlardan başgalaryna (sarp ediş materiallary, kartrijler, CD-DVD diskleri, sumkalar, metal we plastmassa önümleri, podstawkalar, berkidijiler, kabeller, gurallar, elektron komponentleri bolmadyk harytlar, şeýle hem programma üpjünçiligi, islendik operasion ulgamy, programmalar we ş.m.) ýerine yetiriji harytlara kepilligiň möhletini kesgitlemäge borçludyr.
              </p>
              <p>
                Şertnamada başga düzgün göz öňünde tutulmadyk bolsa, harytlara kepillikli möhlet harydyň sarp edijä satylan gününden hasaplanýar.
              </p>
              <p>
                Kepillik möhleti harytlaryň toplumyna we esasy harydyň gurluş böleklerine berilip biliner, mysal üçin: ýygnalan kompýutere we onuň toplumlaşdyryjy böleklerine kepillikli möhletler bellenip bilner.
              </p>
            </div>
          </div>

          {/* II. BÖLÜM */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <FileText size={15} />
              <span>II. Sarp edijiniň harydyň satyn alnandygyny tassyklaýan resminamany satyjydan (ýerine ýetirijiden) almak hukugy</span>
            </h3>
            <div className="flex flex-col gap-3 pl-1">
              <p>
                Sarp edijiniň harydyň satyn alnandygyny tassyklaýan resminamany satyjydan (ýerine ýetirijiden) almaga hukugy bar. Harytlaryň satyn alnandygyny tassyklaýan resminama hökmünde kassa ýa-da haryt töleghaty, girdeji kassa orderi, kesilen talonyň töleghaty, töleg tabşyrygy ýa-da harytlaryň ady, bahasy, harydyň satyn alnan senesi, satyjy (ýerine ýetiriji) barada maglumatlary öz içine alýan resminama kabul edilýär.
              </p>
              <p>
                Satyjy (ýerine ýetiriji) haryt satylanda, sarp edijä harydyň satyn alnandygyny tassyklaýan resminama bermäge borçludyr.
              </p>
            </div>
          </div>

          {/* III. BÖLÜM */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <RefreshCw size={15} />
              <span>III. Sarp edijiniň harytlary çalyşmaga hukugy</span>
            </h3>
            <div className="flex flex-col gap-3 pl-1">
              <p>Sarp edijiniň çalyşmaga hukugy bar:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Abat görnüşindäki haryt – satyn alnan gününi hasaba almazdan, on bäş senenama günüň dowamynda;</li>
                <li>Harydyň çalşyrylmagy eger şol haryt ulanylmadyk bolsa, onuň daş görnüşi, programma üpjünçiligi we proşiwkasy, gaplamasy (gutusy), içindäki degişli resminamalar, sarp ediji häsiýetleri, möhürleri, zawod belligi (ýarlyklary), şeýle hem harydyň töleginiň edilendigini tassyklaýan resminama saklanan ýagdaýynda amala aşyrylýar.</li>
                <li>Meňzeş kysymly (modelli, artikully) täze haryt sarp edijiniň satyja ýüz tutan gününde satuwda ýok bolsa, sarp edijiniň şertnamany ýerine ýetirmekden ýüz öwürmäge we degişli abat haryt üçin tölenen puluň yzyna gaýtarylmagyny talap etmäge hukugy bar. Sarp edijiniň görkezilen harytlar üçin tölenen pul möçberini yzyna gaýtarmak talaby görkezilen harytlaryň yzyna gaýtarylan gününden başlap, üç senenama günüň dowamynda kanagatlandyrylýar.</li>
                <li>Sarp ediji bilen satyjynyň arasynda gazanylan ylalaşyk boýunça harytlary çalyşmak satuwa meňzeş kysymly (modelli, artikully) täze haryt gelip gowşandan soň amala aşyrylyp bilner. Satyjy satuwa çykarylan meňzeş kysymly (modelli, artikully) täze harydyň gelip gowşandygy barada sarp edijä dessine habar bermäge borçly.</li>
              </ul>
            </div>
          </div>

          {/* IV. BÖLÜM */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-950 text-sm flex items-center gap-2 uppercase tracking-wide text-[#cc0000] border-b border-gray-100 pb-1">
              <FileText size={15} />
              <span>IV. Harytda kemçilik ýüze çykan ýagdaýynda, sarp edijiniň hukuklary</span>
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Haryt satyn alynandan soň on bäş senenama günüň dowamynda sarp ediji kemçilik ýüze çykarsa, kemçilikli harytlary meňzeş kysymly (modelli, artikullly) harytlar bilen çalşyrylmagyny talap etmäge haklydyr.</li>
              <li>Kepillikli möhlet kesgitlenen harytlara satyjy doly jogapkärçilik çekýär, egerde haryt sarp ediji tarapyndan kabul edilenden soň sarp edijiniň harydy ulanmak, saklamak ýa-da daşamak düzgünlerini bozmak, üçünji taraplaryň hereketleri ýa-da göz öňüne tutulmadyk güýçler sebäpli kemçiligiň ýüze çykandygyny subut etmese.</li>
              <li>Ýerine ýetiriji satyn alnan senesinden 15 günüň geçmegi bilen harytlaryň kepillikli möhletiniň dowamynda harytlary abatlamak we tehniki hyzmat etmek mümkinçiligini üpjün etmäge borçludyr.</li>
              <li>Eger-de harydyň satylanyna 90 günden geçmedik ýagdaýynda harydyň kemçiligi satyjy (ýerine ýetiriji, ygtyýarly şahs) tarapyndan sarp edijiniň ýüz tutan senesinden ýigrimi senenama günüň dowamynda kanagatlandyrylmaly. Haryt satylan gününden 90 gün geçenden soň, hyzmat etmegiň şertleri 20 günden 40 güne çenli uzaldylyp biliner. (dynç alyş günleri hasaba almazdan).</li>
              <li>Satyjy (ýerine ýetiriji) tarapyndan harytdaky kemçiligi aradan aýyrmak möhleti bozulan ýagdaýynda, sarp edijiniň şertnamany bozmaga we haryt üçin tölenen puluň yzyna gaýtarylmagyny talap etmäge hukugy bar. Bu ýagdaýda satyjy (ýerine ýetiriji) sarp edijiniň şertnamany bozmak talabyny beren gününden başlap, üç iş günüň dowamynda sarp edijä haryt üçin tölenen pul möçberini yzyna gaýtarmaga borçludyr.</li>
            </ul>
          </div>

          <div className="bg-red-50/50 p-4 border border-red-100 rounded-sm space-y-2">
            <h4 className="font-bold text-[#cc0000] flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <AlertTriangle size={15} />
              <span>Üns Beriň:</span>
            </h4>
            <p className="text-gray-700 font-medium text-[12px] leading-relaxed">
              {"Haryt kabul edilende, sarp ediji gaplamanyň daşky ýagdaýyna zeper ýetendigini we önümiň degişli görnüşiniň dogry gelendigini hökmany suratda barlamalydyr. Eger gaplamanyň daşky görnüşi şübhe döredýän bolsa, bu barada satyja ýa-da kurýere habar bermek zerurdyr. Sargyt kabul edilenden soň, harydyň daşky kemçilikleri, hili, toplumy we daş görnüşi bilen bagly arz-şikaýatlar kabul edilmeýär we bu ýagdaýda sarp edijiniň özi tarapyndan haryt zaýalanan diýlip kabul ediler. Şeýle hem, sarp ediji tarapyndan islendik herketler (harydy üýtgetmek, gurnama düzgünlerini bozmak, proşiwka ýa-da programma üpjünçiligini üýtgetmek), şeýle-de ulanylan wagty önüme zeper ýetmegi doly kepilligiň ýitirilmegine sebäp bolýar."}
            </p>
          </div>

          <div className="pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-sm border border-gray-100">
              <Phone size={14} className="text-gray-400 mt-0.5 shrink-0" />
              <p>
                {"Yzyna almak we kepillikli hyzmat meseleleri boýunça "}
                <span className="font-bold text-gray-900">+993 (62) 23-37-59</span>
                {" telefon belgisi arkaly Sumbar Computer hyzmat merkezine ýüz tutmagyňyzy haýyş edýäris."}
              </p>
            </div>
          </div>

        </div>

        {/* SAG GAPDAL (Hakyky Sumbar Kepillik Möhri Suraty we 3 sany Banner) */}
        <div className="w-full flex flex-col gap-4">
          
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 border border-gray-200 group shadow-sm">
            <img 
              src="/assets/Banners/Banner_11.jpg" 
              alt="Sumbar Computer Kepillilik Möhri" 
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
