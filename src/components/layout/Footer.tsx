import Link from "next/link";
import { Youtube, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-hypatia-purple text-purple-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="text-3xl font-bold text-white mb-2">
                            Hypatia
                        </Link>
                        <p className="text-sm">
                            Fikirlere hayat veren topluluk.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Hızlı Linkler</h3>
                        <div className="flex flex-col space-y-2">
                            <Link href="/about" className="hover:text-white transition-colors">Hakkımızda</Link>
                            <Link href="/projects" className="hover:text-white transition-colors">Projeler</Link>
                            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                            <Link href="/join" className="hover:text-white transition-colors">Katıl</Link>
                        </div>
                    </div>

                    {/* İKONLARIMIZIN BULUNDUĞU BÖLÜM BURASI */}
                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Bizi Takip Edin</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Link href="#" aria-label="Youtube" className="hover:text-white transition-colors">
                                <Youtube size={24} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                                <Instagram size={24} />
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Hypatia Community. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};