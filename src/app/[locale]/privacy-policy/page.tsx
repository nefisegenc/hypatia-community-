
"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("PrivacyPolicy");

    return (
        <div className="bg-white">
            <section className="py-16 md:py-20 lg:py-24">
                <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-hypatia-charcoal sm:text-4xl">
                        {t("title")}
                    </h1>

                    <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                        <p>
                            {t("intro")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.dataCollection.title")}</h2>
                        <p>
                            {t("sections.dataCollection.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.usage.title")}</h2>
                        <p>
                            {t("sections.usage.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.sharing.title")}</h2>
                        <p>
                            {t("sections.sharing.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.retention.title")}</h2>
                        <p>
                            {t("sections.retention.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.rights.title")}</h2>
                        <p>
                            {t("sections.rights.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.contact.title")}</h2>
                        <p>
                            {t("sections.contact.content")}{" "}
                            <a
                                href="mailto:hypatiaateam@gmail.com"
                                className="font-semibold text-hypatia-magenta transition hover:underline"
                            >
                                hypatiaateam@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
