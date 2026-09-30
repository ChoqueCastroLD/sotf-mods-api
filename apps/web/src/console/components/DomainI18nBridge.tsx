/**
 * Locale, texts and time zone for `@sotf/ui/domain` components inside the console. Feature routes
 * that render domain components wrap their screen with it:
 *
 *   <DomainI18nBridge><ModCard … /></DomainI18nBridge>
 *
 * The texts come from the `ui-domain` catalogue of the console locale (`lib/domain-messages.ts`,
 * one lazy chunk per locale, preloaded by the shell); while it loads the route shows its pending
 * state, and if it cannot load the components keep their English source. Numbers and dates follow
 * the user's locale and the browser's time zone. Category and tag names come from the public
 * catalogue (`lib/taxonomy.ts`), English until it arrives. Site paths the components build point at
 * the public pages of the console locale (`/es/profile/…`).
 */
import { localizePath, toHtmlLang } from '@sotf/i18n';
import {
  createDomainTranslate,
  type DomainI18n,
  DomainI18nProvider,
  type DomainMessageKey,
  englishDomainI18n,
} from '@sotf/ui/domain';
import { useQuery } from '@tanstack/react-query';
import { type ReactNode, use, useMemo } from 'react';
import { useConsoleLocale } from '../hooks/use-console-locale.ts';
import { loadDomainCatalog } from '../lib/domain-messages.ts';
import { browserTimeZone } from '../lib/i18n.ts';
import { taxonomyNamesQuery, taxonomyResolver } from '../lib/taxonomy.ts';

export function DomainI18nBridge({ children }: { children?: ReactNode }) {
  const { locale } = useConsoleLocale();
  const catalog = use(loadDomainCatalog(locale));
  // English names are already on the DTOs: only other locales need the catalogue.
  const { data: taxonomyNames } = useQuery({ ...taxonomyNamesQuery, enabled: locale !== 'en' });
  const value = useMemo<DomainI18n>(() => {
    const lang = toHtmlLang(locale);
    const t = catalog
      ? createDomainTranslate(catalog as Readonly<Partial<Record<DomainMessageKey, string>>>, lang)
      : englishDomainI18n.t;
    const taxonomy = locale === 'en' ? undefined : taxonomyResolver(taxonomyNames, locale);
    // Public pages the cards link to (`/profile/…`, `/mods/…`) in the console's language.
    const href = (path: string) => localizePath(path, locale);
    return { locale: lang, t, timeZone: browserTimeZone(), href, ...(taxonomy ? { taxonomy } : {}) };
  }, [locale, catalog, taxonomyNames]);
  return <DomainI18nProvider value={value}>{children}</DomainI18nProvider>;
}
