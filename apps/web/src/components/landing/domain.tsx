/**
 * Locale scope of the `@sotf/ui/domain` cards rendered by the landing (server-only React, no
 * hydration). Numbers and dates follow the page language; category names come from the API's
 * localised taxonomy and the card copy from the compiled `ui-domain` namespace (`lib/domain-i18n.ts`).
 */
import { type DomainI18n, DomainI18nProvider } from '@sotf/ui/domain';
import type { ReactNode } from 'react';
import { domainI18nFor } from '../../lib/domain-i18n.ts';

export interface DomainScopeProps {
  /** BCP-47 page language (`toHtmlLang(locale)`). */
  lang: string;
  /** Localised category names by `nameKey`. */
  taxonomy: Readonly<Record<string, string>>;
}

export function domainI18nOf({ lang, taxonomy }: DomainScopeProps): DomainI18n {
  return domainI18nFor(lang, (nameKey, fallback) => taxonomy[nameKey] ?? fallback);
}

export function DomainScope({ scope, children }: { scope: DomainScopeProps; children?: ReactNode }) {
  return <DomainI18nProvider value={domainI18nOf(scope)}>{children}</DomainI18nProvider>;
}
