"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = () => {
        const newLocale = locale === 'tr' ? 'en' : 'tr';

        // Set cookie for locale preference
        document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale};path=/;max-age=31536000`;

        // Refresh the page to apply the new locale
        router.refresh();
        window.location.reload();
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="flex items-center gap-1.5 text-sm font-medium text-hypatia-charcoal hover:text-hypatia-magenta"
        >
            <Globe className="h-4 w-4" />
            <span>{locale === 'tr' ? 'EN' : 'TR'}</span>
        </Button>
    );
}
