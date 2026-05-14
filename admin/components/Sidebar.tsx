"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  List,
  Box,
  ShoppingCart,
  CreditCard,
  Sparkles,
  FileText,
  Settings,
  User,
  Users,
  Shield,
  Store,
  Tag,
  Star,
  MessageCircle,
  Mail,
  Calendar,
  CheckSquare,
  HelpCircle,
  FileQuestion,
  ScrollText,
  Gift,
  Lock,
  Layers,
  BarChart2,
  BookOpen,
  Table,
  Smile,
  Map,
  ChevronDown,
  ChevronRight,
  Zap,
} from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  badge?: { text: string; color: string };
  children?: { label: string; href: string }[];
  disabled?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "General",
    items: [
      { label: "Dashboard", href: "/", icon: <LayoutDashboard size={18} /> },
      {
        label: "Products",
        icon: <ShoppingBag size={18} />,
        children: [
          { label: "List", href: "/products/list" },
          { label: "Grid", href: "/products/grid" },
          { label: "Details", href: "/products/details" },
          { label: "Edit", href: "/products/edit" },
          { label: "Create", href: "/products/add" },
        ],
      },
      {
        label: "Category",
        icon: <List size={18} />,
        children: [
          { label: "List", href: "/categories/list" },
          { label: "Edit", href: "/categories/edit" },
          { label: "Create", href: "/categories/add" },
        ],
      },
      {
        label: "Inventory",
        icon: <Box size={18} />,
        children: [
          { label: "Warehouse", href: "/inventory/warehouse" },
          { label: "Received Orders", href: "/inventory/received-orders" },
        ],
      },
      {
        label: "Orders",
        icon: <ShoppingCart size={18} />,
        children: [
          { label: "List", href: "/orders/list" },
          { label: "Details", href: "/orders/detail" },
          { label: "Cart", href: "/orders/cart" },
          { label: "Check Out", href: "/orders/checkout" },
        ],
      },
      {
        label: "Purchases",
        icon: <CreditCard size={18} />,
        children: [
          { label: "List", href: "/purchases/list" },
          { label: "Order", href: "/purchases/order" },
          { label: "Return", href: "/purchases/returns" },
        ],
      },
      {
        label: "Attributes",
        icon: <Sparkles size={18} />,
        children: [
          { label: "List", href: "/attributes/list" },
          { label: "Edit", href: "/attributes/edit" },
          { label: "Create", href: "/attributes/add" },
        ],
      },
      {
        label: "Invoices",
        icon: <FileText size={18} />,
        children: [
          { label: "List", href: "/invoices/list" },
          { label: "Details", href: "/invoices/details" },
          { label: "Create", href: "/invoices/add" },
        ],
      },
      { label: "Settings", href: "/settings", icon: <Settings size={18} /> },
    ],
  },
  {
    title: "Users",
    items: [
      { label: "Profile", href: "/profile", icon: <User size={18} /> },
      {
        label: "Roles",
        icon: <Shield size={18} />,
        children: [
          { label: "List", href: "/roles/list" },
          { label: "Edit", href: "/roles/edit" },
          { label: "Create", href: "/roles/add" },
        ],
      },
      {
        label: "Permissions",
        href: "/permissions",
        icon: <CheckSquare size={18} />,
      },
      {
        label: "Customers",
        icon: <Users size={18} />,
        children: [
          { label: "List", href: "/customers/list" },
          { label: "Details", href: "/customers/detail" },
        ],
      },
      {
        label: "Sellers",
        icon: <Store size={18} />,
        children: [
          { label: "List", href: "/sellers/list" },
          { label: "Details", href: "/sellers/details" },
          { label: "Edit", href: "/sellers/edit" },
          { label: "Create", href: "/sellers/add" },
        ],
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        label: "Coupons",
        icon: <Tag size={18} />,
        children: [
          { label: "List", href: "/coupons/list" },
          { label: "Add", href: "/coupons/add" },
        ],
      },
      { label: "Reviews", href: "/reviews", icon: <Star size={18} /> },
    ],
  },
  {
    title: "Other Apps",
    items: [
      { label: "Chat", href: "/chat", icon: <MessageCircle size={18} /> },
      { label: "Email", href: "/email", icon: <Mail size={18} /> },
      { label: "Calendar", href: "/calendar", icon: <Calendar size={18} /> },
      { label: "Todo", href: "/todo", icon: <CheckSquare size={18} /> },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "Help Center",
        href: "/help-center",
        icon: <HelpCircle size={18} />,
      },
      { label: "FAQs", href: "/faqs", icon: <FileQuestion size={18} /> },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        icon: <ScrollText size={18} />,
      },
    ],
  },
  {
    title: "Custom",
    items: [
      {
        label: "Pages",
        icon: <Gift size={18} />,
        children: [
          { label: "Welcome", href: "/pages/starter" },
          { label: "Coming Soon", href: "/pages/comingsoon" },
          { label: "Timeline", href: "/pages/timeline" },
          { label: "Pricing", href: "/pages/pricing" },
          { label: "Maintenance", href: "/pages/maintenance" },
          { label: "404 Error", href: "/pages/404" },
        ],
      },
      {
        label: "Authentication",
        icon: <Lock size={18} />,
        children: [
          { label: "Sign In", href: "/auth/signin" },
          { label: "Sign Up", href: "/auth/signup" },
          { label: "Reset Password", href: "/auth/password" },
          { label: "Lock Screen", href: "/auth/lock-screen" },
        ],
      },
      {
        label: "Widgets",
        href: "/widgets",
        icon: <Layers size={18} />,
        badge: { text: "9+", color: "bg-cyan-500" },
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        label: "Base UI",
        icon: <BookOpen size={18} />,
        children: [
          { label: "Accordion", href: "/ui/accordion" },
          { label: "Alerts", href: "/ui/alerts" },
          { label: "Avatar", href: "/ui/avatar" },
          { label: "Badge", href: "/ui/badge" },
          { label: "Buttons", href: "/ui/buttons" },
          { label: "Card", href: "/ui/card" },
          { label: "Modal", href: "/ui/modal" },
          { label: "Tabs", href: "/ui/tabs" },
          { label: "Pagination", href: "/ui/pagination" },
          { label: "Progress", href: "/ui/progress" },
        ],
      },
      {
        label: "Charts",
        icon: <BarChart2 size={18} />,
        children: [
          { label: "Area", href: "/charts/area" },
          { label: "Bar", href: "/charts/bar" },
          { label: "Line", href: "/charts/line" },
          { label: "Pie", href: "/charts/pie" },
          { label: "Radar", href: "/charts/radar" },
        ],
      },
      {
        label: "Forms",
        icon: <BookOpen size={18} />,
        children: [
          { label: "Basic Elements", href: "/forms/basic" },
          { label: "Validation", href: "/forms/validation" },
          { label: "File Upload", href: "/forms/fileuploads" },
          { label: "Editors", href: "/forms/editors" },
        ],
      },
      {
        label: "Tables",
        icon: <Table size={18} />,
        children: [
          { label: "Basic Tables", href: "/tables/basic" },
          { label: "Grid Js", href: "/tables/gridjs" },
        ],
      },
      {
        label: "Maps",
        icon: <Map size={18} />,
        children: [
          { label: "Google Maps", href: "/maps/google" },
          { label: "Vector Maps", href: "/maps/vector" },
        ],
      },
    ],
  },
];

function CollapseItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
        >
          <span className="text-slate-400">{item.icon}</span>
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold text-white ${item.badge.color}`}
            >
              {item.badge.text}
            </span>
          )}
          {open ? (
            <ChevronDown size={14} className="text-slate-400" />
          ) : (
            <ChevronRight size={14} className="text-slate-400" />
          )}
        </button>
        {open && (
          <ul className="ml-8 mt-1 space-y-0.5 border-l border-slate-200 pl-3">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded px-2 py-1.5 text-xs text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.disabled) {
    return (
      <li>
        <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 cursor-not-allowed">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </span>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href ?? "#"}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
      >
        <span className="text-slate-400">{item.icon}</span>
        <span className="flex-1">{item.label}</span>
        {item.badge && (
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold text-white ${item.badge.color}`}
          >
            {item.badge.text}
          </span>
        )}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
          <Zap size={16} className="text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight text-slate-900">
          Larkon
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navSections.map((section) => (
          <div key={section.title} className="mb-5">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <CollapseItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}