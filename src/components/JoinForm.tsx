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
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_REASON_LENGTH = 1500;
const HONEYPOT_FIELD = "website";
const SUBMISSION_COOLDOWN_MS = 2 * 60 * 1000; // two minutes

export function JoinForm() {
    const [status, setStatus] = useState<SubmitState>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (status === "loading") {
            return;
        }

        setStatus("loading");
        setErrorMessage(null);

        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const reason = String(formData.get("reason") ?? "").trim();

        const now = Date.now();
        if (typeof window !== "undefined") {
            const lastSubmission = window.localStorage.getItem("hypatia_join_last_submission");
            if (lastSubmission) {
                const elapsed = now - Number(lastSubmission);
                if (!Number.isNaN(elapsed) && elapsed < SUBMISSION_COOLDOWN_MS) {
                    const remaining = Math.ceil((SUBMISSION_COOLDOWN_MS - elapsed) / 1000);
                    setErrorMessage(`Biraz yavaş :) ${remaining} saniye sonra tekrar deneyebilirsin.`);
                    setStatus("error");
                    return;
                }
            }
        }

        if (String(formData.get(HONEYPOT_FIELD) ?? "").trim().length > 0) {
            // Bot submission attempt.
            form.reset();
            setStatus("idle");
            return;
        }

        if (name.length === 0 || email.length === 0) {
            setErrorMessage("Adını ve e-posta adresini doldurmalısın.");
            setStatus("error");
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setErrorMessage("Geçerli bir e-posta adresi gir.");
            setStatus("error");
            return;
        }

        try {
            const sanitizedReason =
                reason.length > 0 ? reason.slice(0, MAX_REASON_LENGTH) : null;

            await addDoc(collection(db, "joinRequests"), {
                name: name.slice(0, MAX_NAME_LENGTH),
                email: email.toLowerCase(),
                ...(sanitizedReason ? { reason: sanitizedReason } : {}),
                createdAt: serverTimestamp(),
            });

            if (typeof window !== "undefined") {
                window.localStorage.setItem("hypatia_join_last_submission", String(now));
            }

            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 6000);
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
                            placeholder="İstersen kendinden, hedeflerinden ve topluluğa katabileceğin değerlerden bahset..."
                            rows={4}
                        />
                    </div>
                    <div className="sr-only" aria-hidden="true">
                        <Label htmlFor={HONEYPOT_FIELD}>Web siten</Label>
                        <Input
                            id={HONEYPOT_FIELD}
                            name={HONEYPOT_FIELD}
                            type="text"
                            autoComplete="off"
                            tabIndex={-1}
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
