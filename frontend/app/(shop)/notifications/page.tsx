import { Bell, Megaphone, Wrench, Calendar } from 'lucide-react';

interface NotificationItem {
  id: string;
  date: string;
  type: 'product' | 'news' | 'system';
  title: string;
  content: string;
}

export default function NotificationsPage() {
  // Siziň suratyňyzdaky ähli hakyky bildirişleriň maglumat sanawy
  const notificationsList: NotificationItem[] = [
    {
      id: "not_1",
      date: "25.04.2026 18:49",
      type: "product",
      title: "Täze harytlaryň gelmegi",
      content: "UGREEN harytlarynyň täze tapgyry geldi. Dostlar, size ýakymly söwdalary arzuw edýäris! 😊"
    },
    {
      id: "not_2",
      date: "14.04.2026 16:40",
      type: "news",
      title: "Täzelikler",
      content: "Hormatly dostlar, Ardesto brendi boýunça täzeligimiz bar! Indi bu brendiň harytlaryny satyn alanyňyzda, size ballar berler. Siz olary indiki söwdaňyzda islendik haryt üçin ulanyp bilersiňiz. 🛍️🤝"
    },
    {
      id: "not_3",
      date: "09.04.2026 16:56",
      type: "product",
      title: "Täze harytlaryň gelmegi",
      content: "XIAOMI önümleriniň uly tapgyry geldi! Şeýle hem ähli bölümlerde, aýratyn-da noutbuklar, maglumat saklaýjy enjamlar, prosessorlar, öý goşlary, durmuş tehnikasy we başga-da köp sanly harytlarymyz täzelendi. Gadyrly dostlar, täze söwdalar üçin biziň dükanymyza howlugyň! Sizi aramyzda görmäge diýseň şat bolaris. 😉"
    },
    {
      id: "not_4",
      date: "08.04.2026 16:44",
      type: "system",
      title: "Programma täzelenmesi v1.5.3",
      content: "Bu wersiýada täzelikler:\n• Täzeleme möhüm düzedişleri öz içine alýar.\n\nHökmany suratda täzelemek maslahat berilýär.\n\nEger ýalňyşlyk tapsaňyz, ony tehniki goldawa habar bermegiňizi haýyş edýäris."
    },
    {
      id: "not_5",
      date: "06.04.2026 10:54",
      type: "product",
      title: "Täze harytlaryň gelmegi",
      content: "Ardesto brendiniň harytlary köpeldildi! 150-den gowrak täze model satuwa çykdy. Hormatly dostlar, size şowly söwdalary arzuw edýäris! 😊"
    }
  ];

  // Ikonlary kesgitleýän kömekçi funksiýa
  const getIcon = (type: string) => {
    switch (type) {
      case 'product': return <Megaphone size={14} className="text-orange-500" />;
      case 'news': return <Bell size={14} className="text-blue-500" />;
      case 'system': return <Wrench size={14} className="text-gray-500" />;
      default: return <Bell size={14} className="text-gray-500" />;
    }
  };

  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── 1. BAŞLYK ── */}
      <h1 className="text-md font-black text-gray-900 border-b border-gray-100 pb-3 uppercase tracking-wider text-center">
        Bildirişler
      </h1>

      {/* ── 2. BILDIRIŞLER LISTI (Hakyky Sumbar dizaýny) ── */}
      <div className="mt-6 flex flex-col space-y-6">
        {notificationsList.map((item) => (
          <div key={item.id} className="flex flex-col gap-1.5 border-b border-gray-100/60 pb-5 last:border-0 last:pb-0">
            
            {/* Sene zolagy */}
            <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-medium">
              <Calendar size={12} />
              <span>{item.date}</span>
            </div>

            {/* Başlyk we Ikon gurluşy */}
            <div className="flex items-center gap-2 mt-0.5">
              <div className="p-1 bg-gray-50 rounded-sm border border-gray-100 shrink-0">
                {getIcon(item.type)}
              </div>
              <h3 className="font-black text-gray-950 text-[13px] tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Mazmuny */}
            <p className="text-[12px] text-gray-600 pl-7 pt-0.5 font-medium leading-relaxed whitespace-pre-line break-words max-w-3xl">
              {item.content}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}
