
import { Link } from "@/i18n/routing";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Sayfa Bulunamadı</h2>
            <p className="mb-6 text-muted-foreground">Aradığınız sayfaya ulaşamıyoruz.</p>
            <Link href="/" className="text-hypatia-magenta hover:underline">
                Anasayfaya Dön
            </Link>
        </div>
    );
}
