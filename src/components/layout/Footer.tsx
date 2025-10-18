// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { footerNavLinks } from "@/config/navigation"; // socialLinks import'u artık gerekli değil

export const Footer = () => {
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
                            Gençlerin ve kadınların sosyal fayda üretmek için bir araya geldiği Hypatia topluluğu,
                            teknoloji ve tasarım odaklı projelerle sürdürülebilir etki yaratmayı hedefler.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="border-2 border-hypatia-magenta bg-hypatia-magenta text-white hover:bg-hypatia-magenta/90 hover:border-hypatia-magenta/90 transition-colors duration-300"
                        >
                            <Link href="/join">Topluluğa Katıl</Link>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-hypatia-magenta">Sayfalar</h3>
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
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-hypatia-magenta">İletişim</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-hypatia-magenta" />
                                hello@hypatia.community
                            </li>
                        </ul>
                        {/* --- KALDIRILAN BÖLÜM --- */}
                        {/* Sosyal medya ikonlarını oluşturan div bloğu buradan silindi. */}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-hypatia-blue/15 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} Hypatia Community. Tüm hakları saklıdır.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="#" className="transition hover:text-hypatia-magenta">Gizlilik Politikası</Link>
                        <Link href="#" className="transition hover:text-hypatia-magenta">Kullanım Şartları</Link>
                        <Link href="mailto:hello@hypatia.community" className="transition hover:text-hypatia-magenta">Bize Yazın</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
