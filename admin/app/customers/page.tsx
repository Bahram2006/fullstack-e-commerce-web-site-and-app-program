"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";

import {
  Eye,
  Pencil,
  Trash2,
  Users,
  ShoppingBag,
  Headphones,
  FileText,
  Search,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type CustomerStatus = "Active" | "Blocked";

interface Customer {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  orders: number;
  total_spent: number;
  status: CustomerStatus;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const PAGE_SIZE = 9;

const STATUS_CONFIG: Record<
  CustomerStatus,
  { label: string; bg: string; text: string }
> = {
  Active: {
    label: "Işjeň",
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Blocked: {
    label: "Blokly",
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(n);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-indigo-500",
  "bg-violet-500",
  "bg-blue-500",
  "bg-teal-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-cyan-500",
];

function avatarColor(name: string) {
  let hash = 0;
  for (const c of name)
    hash = (hash * 31 + c.charCodeAt(0)) % AVATAR_COLORS.length;
  return AVATAR_COLORS[hash];
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: CustomerStatus }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG["Active"];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.bg} ${cfg.text}`}
    >
      {cfg.label}
    </span>
  );
}

function StatCard({
  icon,
  label,
  value,
  trend,
  trendUp,
  iconBg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  iconBg: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} bg-opacity-10`}
        >
          {icon}
        </div>
        <p className="font-semibold text-gray-700">{label}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <span
          className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
            trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
          }`}
        >
          {trendUp ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {trend}
        </span>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      <td className="px-4 py-3">
        <div className="h-4 w-4 rounded bg-gray-100" />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-100" />
          <div className="space-y-1.5">
            <div className="h-3 w-28 rounded bg-gray-100" />
            <div className="h-3 w-36 rounded bg-gray-100" />
          </div>
        </div>
      </td>
      {Array.from({ length: 5 }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 w-20 rounded bg-gray-100" />
        </td>
      ))}
      <td className="px-4 py-3">
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-7 w-7 rounded-lg bg-gray-100" />
          ))}
        </div>
      </td>
    </tr>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [search]);

  const fetchCustomers = useCallback(async () => {
    setLoading(true);
    setError(null);

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("customers")
      .select("id, customer_name, email, phone, orders, total_spent, status", {
        count: "exact",
      })
      .order("customer_name", { ascending: true })
      .range(from, to);

    if (debouncedSearch.trim()) {
      const term = `%${debouncedSearch.trim()}%`;
      query = query.or(`customer_name.ilike.${term},email.ilike.${term}`);
    }

    const { data, count, error: err } = await query;

    if (err) {
      setError(err.message);
    } else {
      setCustomers((data as Customer[]) ?? []);
      setTotal(count ?? 0);
      setSelected(new Set());
    }
    setLoading(false);
  }, [page, debouncedSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const loadData = async () => {
      await fetchCustomers();
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // Bu ýerden searchTerm-i aýyrdyk
  // fetchCustomers-y dependency-den aýyryp, page we searchTerm goşduk

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Select-all for current page
  const allSelected =
    customers.length > 0 && customers.every((c) => selected.has(c.id));

  function toggleAll() {
    if (allSelected) {
      setSelected((prev) => {
        const next = new Set(prev);
        customers.forEach((c) => next.delete(c.id));
        return next;
      });
    } else {
      setSelected((prev) => {
        const next = new Set(prev);
        customers.forEach((c) => next.add(c.id));
        return next;
      });
    }
  }

  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* ── Header ── */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Müşderiler Sanawy
          </h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Jemi {total} müşderi tapyldy
          </p>
        </div>
        <button
          onClick={fetchCustomers}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
        >
          <RefreshCw className="h-4 w-4" />
          Täzele
        </button>
      </div>

      {/* ── Stat Cards ── */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={<Users className="h-6 w-6 text-indigo-500" />}
          label="Ähli Müşderiler"
          value="+22.6k"
          trend="34.4%"
          trendUp={true}
          iconBg="bg-indigo-500"
        />
        <StatCard
          icon={<ShoppingBag className="h-6 w-6 text-blue-500" />}
          label="Sargytlar"
          value="+4.5k"
          trend="8.1%"
          trendUp={false}
          iconBg="bg-blue-500"
        />
        <StatCard
          icon={<Headphones className="h-6 w-6 text-teal-500" />}
          label="Hyzmat Haýyşlary"
          value="+1.03k"
          trend="12.6%"
          trendUp={true}
          iconBg="bg-teal-500"
        />
        <StatCard
          icon={<FileText className="h-6 w-6 text-violet-500" />}
          label="Hasap-Faktura"
          value="$38.9k"
          trend="45.9%"
          trendUp={true}
          iconBg="bg-violet-500"
        />
      </div>

      {/* ── Table Card ── */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Card Header */}
        <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-gray-800">Ähli Müşderiler</h2>

          {/* Search */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="At ýa-da email bilen gözle..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-8 text-sm text-gray-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Selected bar */}
        {selected.size > 0 && (
          <div className="flex items-center gap-3 bg-indigo-50 px-5 py-2.5 text-sm text-indigo-700">
            <span className="font-medium">{selected.size} saýlandy</span>
            <button className="ml-auto flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-100">
              <Trash2 className="h-3.5 w-3.5" />
              Saýlananlary poz
            </button>
          </div>
        )}

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
                <th className="px-5 py-3">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="h-4 w-4 rounded border-gray-300 accent-indigo-500"
                  />
                </th>
                <th className="px-5 py-3">Müşderi</th>
                <th className="px-5 py-3">Telefon</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Sargytlar</th>
                <th className="px-5 py-3">Jemi Sarp Edilen</th>
                <th className="px-5 py-3 text-right">Hereket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonRow key={i} />
                  ))
                : customers.map((c) => (
                    <tr
                      key={c.id}
                      className={`transition-colors hover:bg-gray-50 ${
                        selected.has(c.id) ? "bg-indigo-50/50" : ""
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="px-5 py-3">
                        <input
                          type="checkbox"
                          checked={selected.has(c.id)}
                          onChange={() => toggleOne(c.id)}
                          className="h-4 w-4 rounded border-gray-300 accent-indigo-500"
                        />
                      </td>

                      {/* Customer Name + Email */}
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColor(
                              c.customer_name,
                            )}`}
                          >
                            {getInitials(c.customer_name)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              {c.customer_name}
                            </p>
                            <p className="text-xs text-gray-400">{c.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-5 py-3 text-gray-600">{c.phone}</td>

                      {/* Status */}
                      <td className="px-5 py-3">
                        <StatusBadge status={c.status as CustomerStatus} />
                      </td>

                      {/* Orders */}
                      <td className="px-5 py-3 font-medium text-gray-700">
                        {c.orders}
                      </td>

                      {/* Total Spent */}
                      <td className="px-5 py-3 font-semibold text-gray-800">
                        {formatCurrency(c.total_spent)}
                      </td>

                      {/* Actions */}
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

              {!loading && customers.length === 0 && !error && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-gray-400"
                  >
                    <Search className="mx-auto mb-2 h-8 w-8 opacity-30" />
                    <p>Müşderi tapylmady.</p>
                    {debouncedSearch && (
                      <button
                        onClick={() => setSearch("")}
                        className="mt-2 text-sm text-indigo-500 hover:underline"
                      >
                        Gözlegi arassala
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
          <p className="text-xs text-gray-400">
            {total} müşderiniň {Math.min((page - 1) * PAGE_SIZE + 1, total)}–
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
