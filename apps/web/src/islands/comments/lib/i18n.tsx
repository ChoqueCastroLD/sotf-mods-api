/**
 * i18n glue of the social islands. Messages come from `./messages.ts` (the page locale's
 * `social` and `errors` catalogues, loaded before the island mounts).
 *
 * The `@sotf/ui/domain` components (CommentItem, ReviewCard, StarRating) get the page's BCP-47
 * locale for `Intl` and the same texts as the server-rendered HTML (the `ui-domain` namespace is
 * served from its English source both on the server and here, see components/mod/i18n.ts).
 * Stored Markdown HTML carries label placeholders (`localizeHtml`), filled with the page locale.
 */
import { DEFAULT_LABELS, localizeHtml } from '@sotf/markdown/labels';
import { type DomainI18n, DomainI18nProvider, englishDomainI18n } from '@sotf/ui/domain';
import type { ReactNode } from 'react';
import { t } from './messages.ts';

/** BCP-47 language of the page (`en`, `pt-BR`, `zh-Hans`…). */
export function pageLang(): string {
  return (typeof document !== 'undefined' && document.documentElement.lang) || 'en';
}

let domain: DomainI18n | null = null;

function domainI18n(): DomainI18n {
  domain ??= { locale: pageLang(), t: englishDomainI18n.t };
  return domain;
}

export function SocialI18n({ children }: { children?: ReactNode }) {
  return <DomainI18nProvider value={domainI18n()}>{children}</DomainI18nProvider>;
}

/** Fills the localised labels of stored lite HTML (spoiler accessible name). */
export function localized(html: string): string {
  if (!html) return html;
  return localizeHtml(html, { ...DEFAULT_LABELS, spoiler: t('social_md_spoiler') });
}

const numberFormats = new Map<string, Intl.NumberFormat>();

export function formatNumber(value: number): string {
  const lang = pageLang();
  let format = numberFormats.get(lang);
  if (!format) {
    format = new Intl.NumberFormat(lang);
    numberFormats.set(lang, format);
  }
  return format.format(value);
}
