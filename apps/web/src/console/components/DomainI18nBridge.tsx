/**
 * Locale and time zone for `@sotf/ui/domain` components inside the console. Feature routes that
 * render domain components wrap their screen with it:
 *
 *   <DomainI18nBridge><ModCard … /></DomainI18nBridge>
 *
 * It lives outside the shell so the domain catalogue only loads with the routes that need it.
 * The copy stays English until the `ui-domain` namespace is compiled into `@sotf/i18n`
 * (docs/backlog/WP-34.md); numbers and dates already follow the user's locale.
 */
import { toHtmlLang } from '@sotf/i18n';
import { type DomainI18n, DomainI18nProvider, englishDomainI18n } from '@sotf/ui/domain';
import { type ReactNode, useMemo } from 'react';
import { useConsoleLocale } from '../hooks/use-console-locale.ts';
import { browserTimeZone } from '../lib/i18n.ts';

export function DomainI18nBridge({ children }: { children?: ReactNode }) {
  const { locale } = useConsoleLocale();
  const value = useMemo<DomainI18n>(
    () => ({ locale: toHtmlLang(locale), t: englishDomainI18n.t, timeZone: browserTimeZone() }),
    [locale],
  );
  return <DomainI18nProvider value={value}>{children}</DomainI18nProvider>;
}
