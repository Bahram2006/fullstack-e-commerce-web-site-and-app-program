import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Larkon Admin Dashboard",
  description: "A fully responsive premium admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        {/* Sidebar — fixed, left, full height */}
        <Sidebar />

        {/* Topbar — fixed, top, offset by sidebar width */}
        <Topbar />

        {/* Main content — offset by sidebar (left) and topbar (top) */}
        <main className="ml-64 pt-16 min-h-screen">
          <div className="container mx-auto px-6 py-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}