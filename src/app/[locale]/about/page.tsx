import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Users, GraduationCap } from "lucide-react";

// Değerlerimizi bir dizi olarak tanımlıyoruz
const values = [
    {
        icon: <Lightbulb className="w-10 h-10 text-hypatia-blue" />,
        title: "İnovasyon ve Yaratıcılık",
        description: "Sınırları zorlayan, yeni ve özgün fikirlerin peşinden giden bir merakı teşvik ediyoruz.",
    },
    {
        icon: <Users className="w-10 h-10 text-hypatia-blue" />,
        title: "İşbirliği ve Topluluk",
        description: "Başarının, farklı yeteneklerin bir araya geldiği, destekleyici bir ortamda yeşerdiğine inanıyoruz.",
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-hypatia-blue" />,
        title: "Sürekli Öğrenme",
        description: "Teknolojinin hızına ayak uyduruyor, her projeyi kendimizi geliştirmek için bir fırsat olarak görüyoruz.",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* 1. BÖLÜM: Sayfa Başlığı */}
            <section className="py-20 md:py-28 text-center bg-[radial-gradient(ellipse_at_bottom,_rgba(77,136,183,0.2),_transparent_70%)]">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-hypatia-charcoal">Biz Kimiz?</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Teknolojiye yön veren, birlikte üreten ve geleceği şekillendiren genç ve dinamik bir topluluğuz.
                    </p>
                </div>
            </section>

            {/* 2. BÖLÜM: Misyonumuz (Görsel ve Metin) */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-hypatia-charcoal">Misyonumuz</h2>
                        <p className="mt-4 text-muted-foreground">
                            Hypatia olarak misyonumuz, teknolojiye ve tasarıma ilgi duyan her genci bir araya getirerek potansiyellerini en üst seviyeye çıkarmaktır. Proje bazlı öğrenme metodolojisiyle, üyelerimize gerçek dünya problemlerini çözme ve portfolyolarını zenginleştirme imkanı sunuyoruz.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Farklı disiplinlerden gelen üyelerimizin işbirliği içinde çalışmasını teşvik ederek, hem teknik becerilerini hem de takım çalışması yetkinliklerini geliştirmelerine olanak tanıyoruz.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
                            alt="Birlikte çalışan ekip"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* 3. BÖLÜM: Değerlerimiz (Kartlar) */}
            <section className="py-20 md:py-24 bg-hypatia-blue/10">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-hypatia-charcoal">Değerlerimiz</h2>
                        <p className="text-lg text-muted-foreground mt-2">Bizi biz yapan temel ilkeler.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <Card key={value.title} className="text-center p-6 shadow-lg">
                                <CardHeader className="items-center">
                                    {value.icon}
                                    <CardTitle className="mt-4">{value.title}</CardTitle>
                                </CardHeader>
                                <CardDescription>{value.description}</CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BÖLÜM: Harekete Geçirici Mesaj (CTA) */}
            <section className="py-20 md:py-28 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-hypatia-charcoal">Aramıza Katılmaya Hazır Mısın?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Senin gibi tutkulu insanlarla birlikte harika projeler geliştirmek için sabırsızlanıyoruz.
                    </p>
                    <div className="mt-8">
                        <Link href="/join">
                            <Button size="lg" className="bg-hypatia-magenta hover:bg-hypatia-blue text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
                                Hemen Başvur
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
