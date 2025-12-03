import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { LANGUAGE_EN, LANGUAGE_VI } from '@/config/constants';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LANGUAGE_VI, LANGUAGE_EN],

  // Used when no locale matches
  defaultLocale: LANGUAGE_VI,

  localeDetection: false,

  localePrefix: 'as-needed',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
