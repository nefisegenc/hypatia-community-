import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Server Action fonksiyonu aynı kalıyor
async function submitApplication(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const github = formData.get("github");
    const reason = formData.get("reason");
    console.log("Yeni Başvuru Alındı!", { name, email, github, reason });
}

export default function JoinPage() {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto flex justify-center">
                <Card className="w-full max-w-2xl shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl md:text-4xl font-bold">Topluluğumuza Katıl</CardTitle>
                        {/* HATA BURADAYDI: "Hypatia'nın" kelimesindeki kesme işaretini &apos; ile değiştirdik. */}
                        <CardDescription className="pt-2">
                            Aşağıdaki formu doldurarak Hypatia&apos;nın bir parçası olmak için ilk adımı at.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={submitApplication} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Adın Soyadın</Label>
                                <Input id="name" name="name" placeholder="Örn: Ada Lovelace" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-posta Adresin</Label>
                                <Input id="email" name="email" type="email" placeholder="ada@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="github">GitHub Profilin (Opsiyonel)</Label>
                                <Input id="github" name="github" placeholder="https://github.com/kullaniciadi" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reason">Neden Hypatia&apos;ya katılmak istiyorsun?</Label>
                                <Textarea
                                    id="reason"
                                    name="reason"
                                    placeholder="Bize kendinden, hedeflerinden ve topluluğumuza katabileceğin değerlerden bahset..."
                                    required
                                    rows={5}
                                />
                            </div>
                            <Button type="submit" className="w-full bg-hypatia-pink hover:bg-pink-600 text-white font-bold text-lg py-6">
                                Başvurumu Gönder
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}