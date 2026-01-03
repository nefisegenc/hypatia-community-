
"use client";

import { useTranslations } from "next-intl";

export default function TermsPage() {
    const t = useTranslations("Terms");

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

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.scope.title")}</h2>
                        <p>
                            {t("sections.scope.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.responsibility.title")}</h2>
                        <p>
                            {t("sections.responsibility.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.intellectualProperty.title")}</h2>
                        <p>
                            {t("sections.intellectualProperty.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.limitation.title")}</h2>
                        <p>
                            {t("sections.limitation.content")}
                        </p>

                        <h2 className="text-xl font-semibold text-hypatia-charcoal">{t("sections.changes.title")}</h2>
                        <p>
                            {t("sections.changes.content")}
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
