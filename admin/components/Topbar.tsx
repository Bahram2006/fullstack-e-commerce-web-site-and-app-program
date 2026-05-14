"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Moon,
  Bell,
  Settings,
  Clock,
  Search,
  User,
  MessageSquare,
  CreditCard,
  HelpCircle,
  Lock,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

interface Notification {
  id: number;
  avatar?: string;
  initials?: string;
  initialsColor?: string;
  name: string;
  message: string;
  time?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    avatar: "/assets/images/avatar-1.jpg",
    name: "Josephine Thompson",
    message: 'commented on admin panel "Wow! this admin looks good and awesome design"',
  },
  {
    id: 2,
    initials: "D",
    initialsColor: "bg-cyan-100 text-cyan-600",
    name: "Donoghue Susan",
    message: "Hi, How are you? What about our next meeting",
  },
  {
    id: 3,
    avatar: "/assets/images/avatar-3.jpg",
    name: "Jacob Gines",
    message: "Answered to your comment on the cash flow forecast's graph.",
  },
  {
    id: 4,
    initials: "💬",
    initialsColor: "bg-amber-100 text-amber-600",
    name: "New Messages",
    message: "You have received 20 new messages in the conversation",
  },
];

function NotificationAvatar({ notif }: { notif: Notification }) {
  if (notif.avatar) {
    return (
      <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={notif.avatar}
          alt={notif.name}
          width={36}
          height={36}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${notif.initialsColor ?? "bg-slate-100 text-slate-600"}`}
    >
      {notif.initials}
    </div>
  );
}

export default function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 ml-64 flex h-16 items-center border-b border-slate-200 bg-white px-4">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile menu toggle */}
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
          <Menu size={20} />
        </button>
        <span className="text-sm font-bold uppercase tracking-widest text-slate-700">
          Welcome!
        </span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-1">
        {/* Dark mode toggle */}
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors">
          <Moon size={20} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setNotifOpen(!notifOpen);
              setProfileOpen(false);
            }}
            className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <Bell size={20} />
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              3
            </span>
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-200 bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <h6 className="font-semibold text-slate-800">Notifications</h6>
                <button className="text-xs text-slate-500 underline hover:text-slate-700">
                  Clear All
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <NotificationAvatar notif={notif} />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800">
                        {notif.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">
                        {notif.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 px-4 py-3 text-center">
                <Link
                  href="#"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                >
                  View All Notifications →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <button className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors md:flex">
          <Settings size={20} />
        </button>

        {/* Activity */}
        <button className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors md:flex">
          <Clock size={20} />
        </button>

        {/* User dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
            }}
            className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100 transition-colors"
          >
            <div className="h-8 w-8 overflow-hidden rounded-full bg-indigo-100">
              <Image
                src="/assets/images/avatar-1.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
              <div className="border-b border-slate-100 px-4 py-2">
                <p className="text-xs font-semibold text-slate-800">
                  StarCode Kh
                </p>
                <p className="text-[11px] text-slate-500">Admin</p>
              </div>
              {[
                { icon: <User size={14} />, label: "Profile", href: "/profile" },
                { icon: <MessageSquare size={14} />, label: "Messages", href: "/chat" },
                { icon: <CreditCard size={14} />, label: "Pricing", href: "/pricing" },
                { icon: <HelpCircle size={14} />, label: "Help", href: "/faqs" },
                { icon: <Lock size={14} />, label: "Lock Screen", href: "/auth/lock-screen" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <span className="text-slate-400">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-slate-100 mt-1">
                <Link
                  href="/auth/signin"
                  className="flex items-center gap-2.5 px-4 py-2 text-xs text-red-500 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={14} />
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-700 placeholder-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}