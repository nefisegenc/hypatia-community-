// src/app/[locale]/layout.tsx

import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const onest = Onest({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Hypatia Community",
    description: "Genç, dinamik ve ilham veren bir topluluk.",
    icons: {
        icon: "/images/favicon.png",
        shortcut: "/images/favicon.png",
    },
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as "tr" | "en")) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Providing all messages to the client side
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={onest.className}>
                <NextIntlClientProvider messages={messages}>
                    {/* HAREKETLİ ARKA PLAN İÇİN EKLENEN SATIR */}
                    <div className="background-gradient" />

                    {/* Orijinal sayfa yapınız korunuyor */}
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
