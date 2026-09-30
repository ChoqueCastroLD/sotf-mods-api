/**
 * App-wide i18n of the `@sotf/ui/domain` components rendered on the server (PLAN §4.1, §7.11;
 * docs/backlog/WP-25.md, WP-53.md, WP-62.md, WP-94.md).
 *
 * The `ui-domain` namespace is compiled into Paraglide (`m.ui_domain_*`, 13 locales). This module
 * is the one translator every page uses:
 *
 * - {@link configureDomainMessages} sets the process-wide `configureDomainI18n()` once (the
 *   middleware calls it at start-up). Astro renders every React component separately, so a
 *   context provider cannot span a page; the configuration is request-aware instead: the locale
 *   getter and the messages read the request locale from AsyncLocalStorage (`withLocale()`).
 * - {@link domainTranslate} / {@link domainI18nFor} serve the pages that wrap their components in
 *   a `DomainI18nProvider` (landing, profile, builds…), so they share the same texts.
 *
 * Server-only (it touches every Paraglide message by key): islands load the per-locale JSON
 * catalogue instead (`islands/comments/lib/messages.ts`).
 */
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { getLocale } from '@sotf/i18n/runtime';
import {
  configureDomainI18n,
  createDomainTranslate,
  type DomainI18n,
  type DomainMessageKey,
  type DomainMessageParams,
  type DomainTranslate,
} from '@sotf/ui/domain';

type MessageFn = (inputs?: Record<string, unknown>, options?: { locale?: Locale }) => string;

function messages(): Readonly<Record<string, MessageFn | undefined>> {
  return m as unknown as Readonly<Record<string, MessageFn | undefined>>;
}

let english: DomainTranslate | undefined;

/** A `ui_domain_*` text in the request locale (or `locale`), English source when missing. */
export function domainTranslate(key: DomainMessageKey, params?: DomainMessageParams, locale?: Locale): string {
  const message = messages()[key];
  if (message) {
    const inputs = (params ?? {}) as Record<string, unknown>;
    return locale ? message(inputs, { locale }) : message(inputs);
  }
  english ??= createDomainTranslate({}, 'en');
  return english(key, params);
}

/** Localised taxonomy name by `nameKey` (namespace `taxonomy`), or `fallback`. */
export function taxonomyTranslate(nameKey: string, fallback: string): string {
  const message = messages()[nameKey];
  return message ? message({}) : fallback;
}

/**
 * `DomainI18n` value for a `DomainI18nProvider`: BCP-47 `lang`, UTC dates (the HTML is shared and
 * edge-cached), Paraglide texts and taxonomy names (overridable).
 */
export function domainI18nFor(
  lang: string,
  taxonomy: (nameKey: string, fallback: string) => string = taxonomyTranslate,
): DomainI18n {
  return { locale: lang, timeZone: 'UTC', t: (key, params) => domainTranslate(key, params), taxonomy };
}

let configured = false;

/** Process-wide, request-aware translator of the domain components. Idempotent. */
export function configureDomainMessages(): void {
  if (configured) return;
  configured = true;
  configureDomainI18n({
    get locale() {
      return toHtmlLang(getLocale() as Locale);
    },
    timeZone: 'UTC',
    t: (key, params) => domainTranslate(key, params),
    taxonomy: taxonomyTranslate,
  });
}
