"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  Eye,
  Pencil,
  Trash2,
  ShoppingBag,
  Package,
  Truck,
  Clock,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Canceled" | "Refund";

interface Order {
  id: string;
  customer_name: string;
  total_price: number;
  status: OrderStatus;
  date: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; classes: string; border: string; text: string }
> = {
  Pending: {
    label: "Garaşylýar",
    classes: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-700",
  },
  Shipped: {
    label: "Ugradyldy",
    classes: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-700",
  },
  Delivered: {
    label: "Gowşuryldy",
    classes: "bg-green-100",
    border: "border-green-600",
    text: "text-green-700",
  },
  Canceled: {
    label: "Ýatyryldy",
    classes: "bg-red-100",
    border: "border-red-400",
    text: "text-red-700",
  },
  Refund: {
    label: "Yzyna",
    classes: "bg-gray-100",
    border: "border-gray-400",
    text: "text-gray-700",
  },
};

function StatusBadge({ status }: { status: OrderStatus }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG["Pending"];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${cfg.classes} ${cfg.border} ${cfg.text}`}
    >
      {cfg.label}
    </span>
  );
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tk-TM", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} bg-opacity-10`}
      >
        {icon}
      </div>
    </div>
  );
}

// ─── Skeleton Row ─────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 rounded bg-gray-100" />
        </td>
      ))}
    </tr>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const PAGE_SIZE = 9;

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  async function fetchOrders() {
    setLoading(true);
    setError(null);

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const {
      data,
      count,
      error: err,
    } = await supabase
      .from("orders")
      .select("id, customer_name, total_price, status, date", {
        count: "exact",
      })
      .order("date", { ascending: false })
      .range(from, to);

    if (err) {
      setError(err.message);
    } else {
      setOrders((data as Order[]) ?? []);
      setTotal(count ?? 0);
    }

    setLoading(false);
  }

  useEffect(() => {
    // fetchOrders funksiýasyny gönümel däl-de, içerki loadData arkaly çagyrýarys
    const loadData = async () => {
      await fetchOrders();
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Derived stats from current page (for a real app, fetch aggregates separately)
  const pending = orders.filter((o) => o.status === "Pending").length;
  const shipped = orders.filter((o) => o.status === "Shipped").length;
  const delivered = orders.filter((o) => o.status === "Delivered").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* ── Header ── */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sargytlar Sanawy</h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Jemi {total} sargyt tapyldy
          </p>
        </div>
        <button
          onClick={fetchOrders}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4" />
          Täzele
        </button>
      </div>

      {/* ── Stat Cards ── */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          icon={<Clock className="h-6 w-6 text-yellow-500" />}
          label="Garaşylýan"
          value={pending}
          color="bg-yellow-500"
        />
        <StatCard
          icon={<Truck className="h-6 w-6 text-blue-500" />}
          label="Ugradylan"
          value={shipped}
          color="bg-blue-500"
        />
        <StatCard
          icon={<Package className="h-6 w-6 text-green-600" />}
          label="Gowşurylan"
          value={delivered}
          color="bg-green-600"
        />
        <StatCard
          icon={<ShoppingBag className="h-6 w-6 text-indigo-500" />}
          label="Jemi"
          value={total}
          color="bg-indigo-500"
        />
      </div>

      {/* ── Table Card ── */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="font-semibold text-gray-800">Ähli Sargytlar</h2>
          <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-medium text-indigo-600">
            Bu Aý
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="px-5 py-4 text-sm text-red-600">
            Ýalňyşlyk: {error}
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-3">Sargyt ID</th>
                <th className="px-5 py-3">Sene</th>
                <th className="px-5 py-3">Müşderi</th>
                <th className="px-5 py-3">Jemi</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Hereket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonRow key={i} />
                  ))
                : orders.map((order) => (
                    <tr
                      key={order.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="px-5 py-3 font-mono text-xs text-gray-600">
                        #{order.id.slice(0, 8).toUpperCase()}
                      </td>
                      <td className="px-5 py-3 text-gray-600">
                        {formatDate(order.date)}
                      </td>
                      <td className="px-5 py-3 font-medium text-indigo-600 hover:underline">
                        <a href="#">{order.customer_name}</a>
                      </td>
                      <td className="px-5 py-3 font-semibold text-gray-800">
                        {formatCurrency(order.total_price)}
                      </td>
                      <td className="px-5 py-3">
                        <StatusBadge status={order.status as OrderStatus} />
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            title="Görkez"
                            className="rounded-lg border border-gray-200 p-1.5 text-gray-500 transition hover:bg-gray-100"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            title="Düzelt"
                            className="rounded-lg border border-indigo-100 bg-indigo-50 p-1.5 text-indigo-600 transition hover:bg-indigo-100"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            title="Poz"
                            className="rounded-lg border border-red-100 bg-red-50 p-1.5 text-red-500 transition hover:bg-red-100"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

              {!loading && orders.length === 0 && !error && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-gray-400"
                  >
                    Sargyt tapylmady.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
          <p className="text-xs text-gray-400">
            {total} sargytyň {Math.min((page - 1) * PAGE_SIZE + 1, total)}–
            {Math.min(page * PAGE_SIZE, total)}-si görkezilýär
          </p>
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-medium transition ${
                    page === p
                      ? "border-indigo-500 bg-indigo-500 text-white"
                      : "border-gray-200 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
