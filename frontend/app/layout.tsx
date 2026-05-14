// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header     from "@/components/Header";
import CompareBar from "@/components/CompareBar";

export const metadata: Metadata = {
  title: "Sumbar Computer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tk">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <CompareBar />
        <main>{children}</main>
      </body>
    </html>
  );
}