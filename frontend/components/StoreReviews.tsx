// components/StoreReviews.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Dükana degişli müşderi teswirleri — Server Component (statik maglumat)
// Geljekde: statik massiwi Supabase "reviews" tablasy bilen çalşyp bolar
// ─────────────────────────────────────────────────────────────────────────────

import { Star } from "lucide-react";

// ─── Tip ─────────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  author: string;
  date: string;
  rating: number; // 1–5
  text: string;
}

// ─── Statik test maglumatlary ─────────────────────────────────────────────────

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Merdan A.",
    date: "12.04.2025",
    rating: 5,
    text: "Harytlaryň hili örän gowy. Sargyt eden günümden ertesi günüme gowuşdy. Hödürleýärin!",
  },
  {
    id: 2,
    author: "Oguljan B.",
    date: "28.03.2025",
    rating: 5,
    text: "Noutbuky öz wagtynda geldi, gaplamagy arassa we durnuklydy. Hyzmat üçin sagboluň.",
  },
  {
    id: 3,
    author: "Röwşen G.",
    date: "15.03.2025",
    rating: 4,
    text: "Baha-hil gatnaşygy gowy. Bir kiçijik kynçylyk boldy emma dessin çözüldi.",
  },
  {
    id: 4,
    author: "Aýna M.",
    date: "02.03.2025",
    rating: 5,
    text: "Saýt ulanmak örän aňsat, telefonyma gerek bolan aksesuarlary tiz tapdym.",
  },
];

// ─── StarRating kömekçi komponenti ───────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} ýyldyz`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={12}
          strokeWidth={1.5}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }
        />
      ))}
    </div>
  );
}

// ─── ReviewItem ──────────────────────────────────────────────────────────────

function ReviewItem({ review }: { review: Review }) {
  const initials = review.author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li className="bg-gray-50 border border-gray-100 rounded-sm p-3 flex flex-col gap-1.5">
      {/* Ýokary setir: awatar + at + sene */}
      <div className="flex items-center gap-2">
        {/* Awatar */}
        <span
          aria-hidden="true"
          className={[
            "w-7 h-7 rounded-full shrink-0",
            "bg-red-100 text-red-600",
            "flex items-center justify-center",
            "text-[10px] font-bold select-none",
          ].join(" ")}
        >
          {initials}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-gray-800 truncate leading-tight">
            {review.author}
          </p>
          <p className="text-[10px] text-gray-400 leading-tight">{review.date}</p>
        </div>

        <StarRating rating={review.rating} />
      </div>

      {/* Teswir teksti */}
      <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-3">
        {review.text}
      </p>
    </li>
  );
}

// ─── Ana komponent ────────────────────────────────────────────────────────────

export default function StoreReviews() {
  const avgRating =
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

  return (
    <aside
      aria-label="Dükana degişli müşderi teswirleri"
      className="w-full lg:w-[280px] shrink-0 bg-white border border-gray-100 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      {/* ── Sözbaşy ── */}
      <div className="border-b border-gray-100 px-4 pt-4 pb-3">
        <div className="flex items-center gap-2 mb-1">
          {/* Gyzyl çyzgy bezegi */}
          <span
            aria-hidden="true"
            className="w-[3px] h-5 bg-red-600 rounded-full shrink-0"
          />
          <h3 className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">
            Müşderi teswirleri
          </h3>
        </div>

        {/* Ortaça reýting */}
        <div className="flex items-center gap-2 pl-[11px]">
          <StarRating rating={Math.round(avgRating)} />
          <span className="text-[11px] text-gray-500 font-medium">
            {avgRating.toFixed(1)} / 5.0
          </span>
          <span className="text-[11px] text-gray-400">
            ({REVIEWS.length} teswir)
          </span>
        </div>
      </div>

      {/* ── Teswir sanawy ── */}
      <ul className="flex flex-col gap-2 p-3">
        {REVIEWS.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>

      {/* ── Aşaky: teswir ýaz düwmesi ── */}
      <div className="border-t border-gray-100 px-3 py-3">
        <button
          type="button"
          className={[
            "w-full py-2 rounded-sm",
            "text-[12px] font-semibold text-red-600",
            "border border-red-200 bg-red-50",
            "hover:bg-red-600 hover:text-white hover:border-red-600",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-red-500 focus-visible:ring-offset-1",
          ].join(" ")}
        >
          Teswir ýaz
        </button>
      </div>
    </aside>
  );
}