"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function JoinForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("Yeni Başvuru Alındı!", {
            name: formData.get("name"),
            email: formData.get("email"),
            reason: formData.get("reason"),
        });
        alert("Başvurun alındı! 🎉");
        e.currentTarget.reset();
    };

    return (
        <Card className="w-full max-w-lg shadow-xl">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold">Topluluğumuza Katıl</CardTitle>
                <CardDescription className="pt-2">
                    Aşağıdaki formu doldurarak Hypatia&apos;nın bir parçası olmak için ilk adımı at.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Adın Soyadın</Label>
                        <Input id="name" name="name" placeholder="Örn: Ada Lovelace" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">E-posta Adresin</Label>
                        <Input id="email" name="email" type="email" placeholder="ada@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reason">Neden katılmak istiyorsun?</Label>
                        <Textarea
                            id="reason"
                            name="reason"
                            placeholder="Kendinden, hedeflerinden ve topluluğa katabileceğin değerlerden bahset..."
                            required
                            rows={4}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-hypatia-pink hover:bg-pink-600 text-white font-bold text-lg py-6"
                    >
                        Başvurumu Gönder
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
