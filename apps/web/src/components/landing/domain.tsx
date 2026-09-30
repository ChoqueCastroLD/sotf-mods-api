/**
 * Locale scope of the `@sotf/ui/domain` cards rendered by the landing (server-only React, no
 * hydration). Numbers and dates follow the page language; category names come from the API's
 * localised taxonomy. The card copy itself stays in the `ui-domain` English catalogue until that
 * namespace is compiled into `@sotf/i18n` (docs/backlog/WP-53.md).
 */
import { type DomainI18n, DomainI18nProvider, englishDomainI18n } from '@sotf/ui/domain';
import type { ReactNode } from 'react';

export interface DomainScopeProps {
  /** BCP-47 page language (`toHtmlLang(locale)`). */
  lang: string;
  /** Localised category names by `nameKey`. */
  taxonomy: Readonly<Record<string, string>>;
}

export function domainI18nOf({ lang, taxonomy }: DomainScopeProps): DomainI18n {
  return {
    locale: lang,
    t: englishDomainI18n.t,
    taxonomy: (nameKey, fallback) => taxonomy[nameKey] ?? fallback,
    timeZone: 'UTC',
  };
}

export function DomainScope({ scope, children }: { scope: DomainScopeProps; children?: ReactNode }) {
  return <DomainI18nProvider value={domainI18nOf(scope)}>{children}</DomainI18nProvider>;
}
