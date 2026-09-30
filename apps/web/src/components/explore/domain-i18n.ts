/**
 * `@sotf/ui/domain` i18n for the server-rendered Explore pages: numbers and dates in the request
 * locale, localized category/tag names on the cards, and every `ui_domain_*` text (filters, sort,
 * views, cards) from the compiled `ui-domain` namespace of `@sotf/i18n` (13 locales). A key missing
 * from the catalogue falls back to the English source of `@sotf/ui/domain`.
 */
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { type DomainI18n, englishDomainI18n } from '@sotf/ui/domain';

type MessageFn = (inputs?: Record<string, unknown>, options?: { locale?: Locale }) => string;
const messages = m as unknown as Readonly<Record<string, MessageFn | undefined>>;

export function exploreDomainI18n(locale: Locale, taxonomy: (nameKey: string, fallback: string) => string): DomainI18n {
  return {
    locale: toHtmlLang(locale),
    t: (key, params) => {
      const message = messages[key];
      return message
        ? message((params ?? {}) as Record<string, unknown>, { locale })
        : englishDomainI18n.t(key, params);
    },
    taxonomy,
    timeZone: 'UTC',
  };
}
