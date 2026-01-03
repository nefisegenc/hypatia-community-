
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css"; // Adjusted path
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as "tr" | "en")) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
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
