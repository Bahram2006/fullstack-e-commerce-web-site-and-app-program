import SidebarCategories from '../../components/SidebarCategories';
import StoreReviews      from "@/components/StoreReviews";
import SideBanners       from "@/components/SideBanners";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-6">
      {/* Ähli sahypalarda işlejek esasy iki kolonka layout-y */}
      <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">
        
        {/* ── ÇEP GAPDAL (Sidebar): ÄHLI sahypalarda birwagtda durnukly durar ── */}
        <aside className="w-full lg:w-[280px] shrink-0 flex flex-col space-y-6">
          {/* 1. Ähli harytlar kategoriýa listi */}
          <SidebarCategories />
          
          {/* 2. Müşderi teswirleri */}
          <StoreReviews />
          
          {/* 3. Aşakly-aşagyna 3 sany reklama banneri */}
          <SideBanners />
        </aside>

        {/* ── SAG GAPDAL: Mazmun (Baş sahypa, Biz barada, we ş.m. şu ýere açylar) ── */}
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>

      </div>
    </div>
  );
}
