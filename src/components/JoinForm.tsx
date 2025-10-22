/* eslint-disable no-console */
"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";

type SubmitState = "idle" | "loading" | "success" | "error";

export function JoinForm() {
    const [status, setStatus] = useState<SubmitState>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === "loading") {
            return;
        }

        setStatus("loading");
        setErrorMessage(null);

        const formData = new FormData(e.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const reason = String(formData.get("reason") ?? "").trim();

        try {
            await addDoc(collection(db, "joinRequests"), {
                name,
                email,
                reason,
                createdAt: serverTimestamp(),
            });

            setStatus("success");
            e.currentTarget.reset();
        } catch (error) {
            console.error("Join form submission failed", error);
            setErrorMessage("Başvurun gönderilirken bir hata oluştu. Lütfen tekrar dene.");
            setStatus("error");
        }
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
                    {status === "success" && (
                        <p
                            className="rounded-md bg-green-100 p-3 text-sm text-green-800"
                            aria-live="polite"
                        >
                            Başvurun alındı! En kısa sürede seninle iletişime geçeceğiz. 🎉
                        </p>
                    )}
                    {status === "error" && (
                        <p className="rounded-md bg-red-100 p-3 text-sm text-red-800" aria-live="polite">
                            {errorMessage}
                        </p>
                    )}
                    <Button
                        type="submit"
                        className="w-full bg-hypatia-pink hover:bg-pink-600 text-white font-bold text-lg py-6"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Gönderiliyor..." : "Başvurumu Gönder"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
