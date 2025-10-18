// src/components/layout/Header.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { JoinForm } from "@/components/JoinForm";
import { Menu } from "lucide-react";
import { mainNavLinks } from "@/config/navigation"; // Merkezi dosyadan import et

export const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const menuItems = mainNavLinks;

    const renderDesktopLink = (href: string, label: string) => (
        <Link
            key={href}
            href={href}
            className="group relative px-2 py-1 text-sm font-semibold tracking-wide text-hypatia-charcoal transition-colors duration-200 hover:text-hypatia-magenta"
        >
            {label}
            <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-hypatia-magenta to-hypatia-blue transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
    );

    return (
        <header
            className={`sticky top-0 z-50 border-b border-hypatia-blue/15 bg-white/80 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "shadow-md shadow-hypatia-blue/10" : ""}`}
        >
            <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:px-6">
                <Link href="/" className="inline-flex">
                    <Image
                        src="/images/hypatia 1 (1).svg"
                        alt="Hypatia Community logosu"
                        width={48}
                        height={48}
                        priority
                        className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item) => renderDesktopLink(item.href, item.label))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-[#661a91] text-[#661a91] hover:bg-[#661a91] hover:text-white transition-colors duration-300"
                            >
                                Katıl
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="sr-only">Topluluğumuza Katıl</DialogTitle>
                            </DialogHeader>
                            <JoinForm />
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="flex lg:hidden">
                    <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full border border-hypatia-magenta/25 bg-white/70 shadow-sm shadow-hypatia-magenta/15">
                                <Menu className="h-6 w-6 text-hypatia-magenta" />
                                <span className="sr-only">Menüyü Aç</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-xs border-l border-hypatia-blue/10 bg-white/95 backdrop-blur-xl">
                            <SheetHeader>
                                <SheetTitle className="text-left text-2xl font-bold text-hypatia-charcoal">Hypatia</SheetTitle>
                            </SheetHeader>
                            <nav className="mt-8 flex flex-col gap-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-xl border border-transparent bg-hypatia-blue/5 px-4 py-3 text-base font-semibold text-hypatia-charcoal transition hover:border-hypatia-blue/30 hover:bg-white"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-8 space-y-3 rounded-2xl border border-hypatia-magenta/15 bg-gradient-to-br from-white via-white to-hypatia-blue/10 p-5 shadow-inner shadow-hypatia-magenta/10">
                                <p className="text-sm font-semibold text-hypatia-charcoal">Hypatia Network</p>
                                <p className="text-sm text-muted-foreground">
                                    Türkiye genelindeki genç liderlerle tanış, projelerimizde yer al ve sosyal etki yarat.
                                </p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-hypatia-blue via-hypatia-magenta to-hypatia-blue px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-hypatia-magenta/25 transition-all duration-300 hover:scale-105">
                                            <span className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                                            Katılım Formu
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="sr-only">Topluluğumuza Katıl</DialogTitle>
                                        </DialogHeader>
                                        <JoinForm />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};
