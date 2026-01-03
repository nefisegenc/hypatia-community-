import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
    localePrefix: 'never',
    localeDetection: true
});

// Lightweight wrappers around Next.js' navigation APIs
// that automatically handle the locale
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
