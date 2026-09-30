/**
 * Locale, texts and time zone for `@sotf/ui/domain` components inside the console. Feature routes
 * that render domain components wrap their screen with it:
 *
 *   <DomainI18nBridge><ModCard … /></DomainI18nBridge>
 *
 * The texts come from the `ui-domain` catalogue of the console locale (`lib/domain-messages.ts`,
 * one lazy chunk per locale, preloaded by the shell); while it loads the route shows its pending
 * state, and if it cannot load the components keep their English source. Numbers and dates follow
 * the user's locale and the browser's time zone.
 */
import { toHtmlLang } from '@sotf/i18n';
import {
  createDomainTranslate,
  type DomainI18n,
  DomainI18nProvider,
  type DomainMessageKey,
  englishDomainI18n,
} from '@sotf/ui/domain';
import { type ReactNode, use, useMemo } from 'react';
import { useConsoleLocale } from '../hooks/use-console-locale.ts';
import { loadDomainCatalog } from '../lib/domain-messages.ts';
import { browserTimeZone } from '../lib/i18n.ts';

export function DomainI18nBridge({ children }: { children?: ReactNode }) {
  const { locale } = useConsoleLocale();
  const catalog = use(loadDomainCatalog(locale));
  const value = useMemo<DomainI18n>(() => {
    const lang = toHtmlLang(locale);
    const t = catalog
      ? createDomainTranslate(catalog as Readonly<Partial<Record<DomainMessageKey, string>>>, lang)
      : englishDomainI18n.t;
    return { locale: lang, t, timeZone: browserTimeZone() };
  }, [locale, catalog]);
  return <DomainI18nProvider value={value}>{children}</DomainI18nProvider>;
}
