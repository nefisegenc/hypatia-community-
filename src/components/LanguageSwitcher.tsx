
'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const handleLocaleChange = (newLocale: string) => {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-hypatia-charcoal hover:text-hypatia-magenta">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Dil Değiştir</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLocaleChange('tr')} className={locale === 'tr' ? 'bg-hypatia-blue/10 font-bold' : ''}>
                    Türkçe
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLocaleChange('en')} className={locale === 'en' ? 'bg-hypatia-blue/10 font-bold' : ''}>
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
