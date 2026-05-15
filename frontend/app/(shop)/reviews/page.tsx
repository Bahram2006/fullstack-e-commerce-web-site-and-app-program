import { Star, MessageSquare, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';

interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  isRealCustomer: boolean;
  likes: number;
  dislikes: number;
}

export default function ReviewsPage() {
  // Siziň suratyňyzdaky ähli hakyky müşderi teswirleriniň maglumat sanawy
  const reviewsList: ReviewItem[] = [
    {
      id: "rev_1",
      author: "Begench",
      rating: 4,
      date: "27.04.2026",
      title: "Gowy",
      content: "Все хорошо, но все никак не привезут шире ассортимент коннекторов https://amazon.com Pass Through",
      isRealCustomer: true,
      likes: 0,
      dislikes: 0
    },
    {
      id: "rev_2",
      author: "Kadyr Wepayew",
      rating: 5,
      date: "22.04.2026",
      title: "Örän gowy",
      content: "Лучший магазин! Обменяли бракованные наушники, даже когда гарантия вышла пару дней назад. Не бросили в беде, поступили по человечески. Сервис на высоте, всем рекомендую!",
      isRealCustomer: true,
      likes: 10,
      dislikes: 0
    },
    {
      id: "rev_3",
      author: "Эмин",
      rating: 5,
      date: "31.03.2026",
      title: "Örän gowy",
      content: "Приобрел в этом магазине стол. Качество отличное, покупкой вполне доволен. Весь товар был идеально укомплектован.",
      isRealCustomer: true,
      likes: 5,
      dislikes: 0
    },
    {
      id: "rev_4",
      author: "Nazar",
      rating: 4,
      date: "17.03.2026",
      title: "Örän gowy",
      content: "Качеством товара доволен, но при оплате онлайн с карты снимает сумма + 20 манат.",
      isRealCustomer: true,
      likes: 3,
      dislikes: 1
    },
    {
      id: "rev_5",
      author: "Myrat Yarmetow",
      rating: 5,
      date: "16.03.2026",
      title: "Örän gowy",
      content: "Arman pulym azyrak, bolmasa gerek däl zatlara çenli alasym gelýä. Sebäp baha GOWY, hyzmat GOWY, ähli hyzmatlar ýuridiki dogry, tak çto meň",
      isRealCustomer: true,
      likes: 9,
      dislikes: 0
    }
  ];

  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm font-sans text-gray-800 leading-relaxed">
      
      {/* ── 1. BAŞLYK ── */}
      <h1 className="text-md font-black text-gray-900 border-b border-gray-100 pb-3 uppercase tracking-wider text-center">
        Dükana Degişli Teswirler
      </h1>
      
      {/* ── 2. ÝOKARKY METRIKA PANEL (4.69 Baly we Baha beriň düwmesi) ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 p-6 rounded-sm border border-gray-100 mt-6">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-4xl font-black text-gray-950 tracking-tight">4.69</span>
          <div className="flex items-center gap-1 mt-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "text-gray-300" : ""} />
            ))}
            <span className="text-xs text-gray-400 ml-1 font-medium">(193)</span>
          </div>
        </div>
        
        <button className="bg-white hover:bg-gray-50 text-gray-700 font-bold px-5 py-2 text-xs border border-gray-300 rounded shadow-sm transition active:scale-98 cursor-pointer">
          Baha beriň
        </button>
      </div>

      {/* ── 3. TESWIRLER SANAWY (Hakyky Sumbar dizaýny) ── */}
      <div className="mt-8 flex flex-col divide-y divide-gray-100">
        {reviewsList.map((review) => (
          <div key={review.id} className="py-5 first:pt-0 last:pb-0 flex flex-col gap-2">
            
            {/* Ýyldyzlar, Ýazgy we Sene */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-orange-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-200" : ""} />
                  ))}
                </div>
                <span className="font-black text-gray-950">{review.title}</span>
                <span className="text-gray-400 font-medium">{review.date}</span>
              </div>
            </div>

            {/* Awtor we Hakyky Müşderi belligi */}
            <div className="flex items-center gap-2 text-[12px]">
              <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-[10px] uppercase">
                {review.author[0]}
              </div>
              <span className="font-bold text-gray-900">{review.author}</span>
              {review.isRealCustomer && (
                <span className="text-emerald-600 font-bold text-[10px] flex items-center gap-0.5 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100/60">
                  <CheckCircle2 size={10} fill="currentColor" className="text-white" />
                  Hakyky müşderi
                </span>
              )}
            </div>

            {/* Teswiriň Mazmuny */}
            <p className="text-[12px] text-gray-700 pt-0.5 font-medium leading-relaxed break-words">
              {review.content}
            </p>

            {/* Like / Dislike düwmeleri (Sumbaryň edil özi) */}
            <div className="flex items-center gap-4 text-[11px] text-gray-400 pt-1">
              <button className="flex items-center gap-1 hover:text-gray-600 transition cursor-pointer">
                <ThumbsUp size={12} />
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-600 transition cursor-pointer">
                <ThumbsDown size={12} />
                <span>{review.dislikes}</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
