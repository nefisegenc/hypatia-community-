// src/components/layout/Footer.tsx

"use client";

import Image from "next/image";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Footer = () => {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navigation");

    const footerNavLinks = [
        { href: "/", label: tNav("home") },
        { href: "/#about", label: tNav("about") },
        { href: "/#projects", label: tNav("projects") },
        { href: "/#team", label: tNav("team") },
        { href: "/join", label: tNav("join") },
    ];

    return (
        <footer className="border-t border-hypatia-blue/15 bg-white text-hypatia-charcoal">
            <div className="container mx-auto px-6 py-14 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex">
                            <Image
                                src="/images/hypatia 1 (1).svg"
                                alt="Hypatia Community logosu"
                                width={48}
                                height={48}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                            {t("description")}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="border-2 border-hypatia-magenta bg-hypatia-magenta text-white hover:bg-hypatia-magenta/90 hover:border-hypatia-magenta/90 transition-colors duration-300"
                        >
                            <Link href="/join">{t("joinCommunity")}</Link>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-hypatia-magenta">{t("pages")}</h3>
                        <nav className="grid gap-2 text-sm">
                            {footerNavLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-hypatia-charcoal transition hover:text-hypatia-magenta"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-hypatia-magenta">{t("contact")}</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="mailto:hypatiaateam@gmail.com"
                                    className="flex items-center gap-2 text-hypatia-charcoal transition hover:text-hypatia-magenta"
                                >
                                    <Mail className="h-4 w-4 text-hypatia-magenta" />
                                    {t("mail")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/company/hypatiaa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-hypatia-charcoal transition hover:text-hypatia-magenta"
                                >
                                    <Linkedin className="h-4 w-4 text-hypatia-magenta" />
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.instagram.com/hypatiaateam/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-hypatia-charcoal transition hover:text-hypatia-magenta"
                                >
                                    <Instagram className="h-4 w-4 text-hypatia-magenta" />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.youtube.com/@hypatiaateam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-hypatia-charcoal transition hover:text-hypatia-magenta"
                                >
                                    <Youtube className="h-4 w-4 text-hypatia-magenta" />
                                    YouTube
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-hypatia-blue/15 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>{t("copyright")}</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/privacy-policy" className="transition hover:text-hypatia-magenta">{t("privacyPolicy")}</Link>
                        <Link href="/terms" className="transition hover:text-hypatia-magenta">{t("terms")}</Link>
                        <Link href="mailto:hypatiaateam@gmail.com" className="transition hover:text-hypatia-magenta">{t("contactUs")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
