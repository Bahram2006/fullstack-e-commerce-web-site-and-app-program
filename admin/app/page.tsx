import { supabase } from "@/lib/supabase";

import {
  ShoppingCart,
  Award,
  Backpack,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  MapPin,
  BarChart2,
  Globe,
  FileText,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface RecentOrder {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  address: string;
  payment_type: string;
  status: string;
  date: string;
  total_price: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`;
  return `$${n.toFixed(2)}`;
}

function formatNumber(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  trend,
  trendUp,
  period,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  period: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
            {icon}
          </div>
          <div className="text-right">
            <p className="truncate text-sm text-gray-500">{label}</p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">{value}</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-50 bg-gray-50/50 px-5 py-2.5">
        <div className="flex items-center gap-1.5">
          {trendUp ? (
            <TrendingUp className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 text-red-500" />
          )}
          <span
            className={`text-xs font-semibold ${
              trendUp ? "text-green-600" : "text-red-500"
            }`}
          >
            {trend}
          </span>
          <span className="text-xs text-gray-400">{period}</span>
        </div>
        <a
          href="#!"
          className="flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-indigo-600"
        >
          Doly gör <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

// ─── Order Status ─────────────────────────────────────────────────────────────

function OrderStatusBadge({ status }: { status: string }) {
  const isCompleted =
    status?.toLowerCase() === "completed" ||
    status?.toLowerCase() === "delivered";

  if (isCompleted) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-green-600">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Tamamlandy
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-sm text-indigo-500">
      <Clock className="h-3.5 w-3.5" />
      Işlenýär
    </span>
  );
}

// ─── Chart Placeholder ────────────────────────────────────────────────────────

function ChartPlaceholder({
  title,
  height = "h-48",
}: {
  title?: string;
  height?: string;
}) {
  return (
    <div
      className={`${height} flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 bg-gray-50`}
    >
      <BarChart2 className="h-8 w-8 text-gray-300" />
      {title && <p className="text-xs text-gray-400">{title}</p>}
    </div>
  );
}

// ─── Top Pages table (static from HTML) ──────────────────────────────────────

const TOP_PAGES = [
  { path: "larkon/ecommerce.html", views: 465, exit: "4.4%", ok: true },
  { path: "larkon/dashboard.html", views: 426, exit: "20.4%", ok: false },
  { path: "larkon/chat.html", views: 254, exit: "12.25%", ok: null },
  { path: "larkon/auth-login.html", views: 3369, exit: "5.2%", ok: true },
  { path: "larkon/email.html", views: 985, exit: "64.2%", ok: false },
  { path: "larkon/social.html", views: 653, exit: "2.4%", ok: true },
  { path: "larkon/blog.html", views: 478, exit: "1.4%", ok: false },
];

// ─── Page (Server Component) ──────────────────────────────────────────────────

export default async function DashboardPage() {

  // Parallel data fetching
  const [
    { count: totalProducts },
    { count: totalOrders },
    { count: totalCustomers },
    { data: revenueRows },
    { data: recentOrders },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("customers").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("total_price"),
    supabase
      .from("orders")
      .select(
        "id, customer_name, email, phone, address, payment_type, status, date, total_price"
      )
      .order("date", { ascending: false })
      .limit(5),
  ]);

  const totalRevenue = (revenueRows ?? []).reduce(
    (sum: number, r: { total_price: number }) => sum + (r.total_price ?? 0),
    0
  );

  const orders = (recentOrders ?? []) as RecentOrder[];

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">

      {/* ── Alert Banner ── */}
      <div className="flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
        <div className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
        <p className="truncate">
          Serwerimiziň häzirki wagtda tehniki kynçylyklary başdan geçirýändigi üçin ötünç soraýarys.
        </p>
      </div>

      {/* ── Top Row: Stat Cards + Performance Chart ── */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">

        {/* Stat Cards — 2 col */}
        <div className="xl:col-span-2 grid grid-cols-2 gap-4 content-start">
          <StatCard
            icon={<ShoppingCart className="h-6 w-6 text-indigo-600" />}
            label="Jemi Sargytlar"
            value={formatNumber(totalOrders ?? 0)}
            trend="2.3%"
            trendUp={true}
            period="Geçen Hepde"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-indigo-600" />}
            label="Jemi Müşderiler"
            value={formatNumber(totalCustomers ?? 0)}
            trend="8.1%"
            trendUp={true}
            period="Geçen Aý"
          />
          <StatCard
            icon={<Backpack className="h-6 w-6 text-indigo-600" />}
            label="Jemi Harytlar"
            value={formatNumber(totalProducts ?? 0)}
            trend="0.3%"
            trendUp={false}
            period="Geçen Aý"
          />
          <StatCard
            icon={<DollarSign className="h-6 w-6 text-indigo-600" />}
            label="Umumy Gazanç"
            value={formatCurrency(totalRevenue)}
            trend="10.6%"
            trendUp={false}
            period="Geçen Aý"
          />
        </div>

        {/* Performance Chart — 3 col */}
        <div className="xl:col-span-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">Öndürijilik</h4>
            <div className="flex gap-1.5">
              {["Ähli", "1A", "6A", "1Y"].map((t) => (
                <button
                  key={t}
                  className={`rounded-lg border px-3 py-1 text-xs font-medium transition ${
                    t === "1Y"
                      ? "border-indigo-500 bg-indigo-500 text-white"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <ChartPlaceholder title="Öndürijilik grafikasy" height="h-56" />
        </div>
      </div>

      {/* ── Middle Row: Conversions + Map + Top Pages ── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Conversions */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <h5 className="mb-4 font-semibold text-gray-800">Öwrülişikler</h5>
          <ChartPlaceholder title="Öwrülişik grafikasy" height="h-40" />
          <div className="mt-4 grid grid-cols-2 divide-x divide-gray-100 text-center">
            <div className="pr-3">
              <p className="text-xs text-gray-400">Bu Hepde</p>
              <h3 className="mt-1 text-xl font-bold text-gray-800">23.5k</h3>
            </div>
            <div className="pl-3">
              <p className="text-xs text-gray-400">Geçen Hepde</p>
              <h3 className="mt-1 text-xl font-bold text-gray-800">41.05k</h3>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
            Doly gör
          </button>
        </div>

        {/* Sessions by Country (Map placeholder) */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <h5 className="mb-4 font-semibold text-gray-800">Ýurt boýunça Sessiýalar</h5>
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50">
            <Globe className="h-10 w-10 text-gray-300" />
          </div>
          <div className="mt-4 grid grid-cols-2 divide-x divide-gray-100 text-center">
            <div className="pr-3">
              <p className="text-xs text-gray-400">Bu Hepde</p>
              <h3 className="mt-1 text-xl font-bold text-gray-800">23.5k</h3>
            </div>
            <div className="pl-3">
              <p className="text-xs text-gray-400">Geçen Hepde</p>
              <h3 className="mt-1 text-xl font-bold text-gray-800">41.05k</h3>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <h4 className="font-semibold text-gray-800">Iň Köp Sahypalar</h4>
            <a
              href="#"
              className="flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100"
            >
              Ählisi <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-400">
                <tr>
                  <th className="px-5 py-3">Sahypa Ýoly</th>
                  <th className="px-5 py-3">Görüş</th>
                  <th className="px-5 py-3">Çykış</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {TOP_PAGES.map((p) => (
                  <tr key={p.path} className="hover:bg-gray-50">
                    <td className="px-5 py-2.5">
                      <a href="#" className="text-xs text-gray-500 hover:text-indigo-600">
                        {p.path}
                      </a>
                    </td>
                    <td className="px-5 py-2.5 text-xs font-medium text-gray-700">
                      {p.views}
                    </td>
                    <td className="px-5 py-2.5">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          p.ok === true
                            ? "bg-green-100 text-green-700"
                            : p.ok === false
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {p.exit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Bottom Row: Recent Orders ── */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h4 className="font-semibold text-gray-800">Soňky Sargytlar</h4>
          <a
            href="/orders"
            className="flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100"
          >
            <Plus className="h-3.5 w-3.5" />
            Sargyt döret
          </a>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-400">
              <tr>
                <th className="px-5 py-3">Sargyt ID</th>
                <th className="px-5 py-3">Sene</th>
                <th className="px-5 py-3">Müşderi</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Telefon</th>
                <th className="px-5 py-3">Salgy</th>
                <th className="px-5 py-3">Töleg</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-10 text-center text-gray-400">
                    Sargyt tapylmady.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="transition-colors hover:bg-gray-50">
                    <td className="px-5 py-3">
                      <a
                        href={`/orders/${order.id}`}
                        className="font-mono text-xs font-medium text-indigo-600 hover:underline"
                      >
                        #{order.id.slice(0, 7).toUpperCase()}
                      </a>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      {formatDate(order.date)}
                    </td>
                    <td className="px-5 py-3 font-medium text-gray-800">
                      {order.customer_name}
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      {order.email}
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      {order.phone}
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-gray-300" />
                        {order.address}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-600">
                      {order.payment_type}
                    </td>
                    <td className="px-5 py-3">
                      <OrderStatusBadge status={order.status} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-gray-100 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-400">
            Iň soňky <span className="font-semibold text-gray-600">{orders.length}</span> sargyt görkezilýär
            (jemi <span className="font-semibold text-gray-600">{formatNumber(totalOrders ?? 0)}</span>)
          </p>
          <a
            href="/orders"
            className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:underline"
          >
            Ähli sargytlara git <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}