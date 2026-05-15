import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import CompareBar from "@/components/CompareBar";
import Footer from "@/components/Footer";
import ComplaintModal from "@/components/ComplaintModal";

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
      <body className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <div className="w-full flex-grow">
          <Header />
          <CompareBar />
          <ComplaintModal />
          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
