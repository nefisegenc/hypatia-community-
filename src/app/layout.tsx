// src/app/layout.tsx (Güncellenmiş Hali)

import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hypatia Community",
  description: "Genç, dinamik ve ilham veren bir topluluk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={onest.className}>
        {/* HAREKETLİ ARKA PLAN İÇİN EKLENEN SATIR */}
        <div className="background-gradient" />

        {/* Orijinal sayfa yapınız korunuyor */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}