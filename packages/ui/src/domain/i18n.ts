/**
 * Text and formatting for the domain components. Same contract as the primitives' `ui`
 * namespace (`../labels.ts`): components never hard-code copy, they ask for keys of the
 * `ui-domain` namespace (`ui_domain_*`, English source in `./messages/en.json`).
 *
 * Resolution order inside a component:
 *   1. `<DomainI18nProvider value={…}>` (React context: the console, islands);
 *   2. `configureDomainI18n(…)` (once at start-up; `t` must read the request locale, e.g.
 *      Paraglide messages during SSR, and `locale` may be a getter);
 *   3. English (`./messages/en.json`, interpreted by `./icu.ts`).
 *
 * Wiring with Paraglide (apps/web, WP-22/WP-34):
 *   configureDomainI18n({
 *     get locale() { return toHtmlLang(getLocale()); },
 *     t: (key, params) => m[key](params ?? {}),
 *     taxonomy: (nameKey, fallback) => (nameKey in m ? m[nameKey]() : fallback),
 *   });
 *
 * Formatting helpers take the BCP-47 locale explicitly and default to UTC, because public HTML
 * is shared and cached at the edge (same rules as `@sotf/i18n`).
 */
import { createContext, createElement, type ReactNode, useContext } from 'react';
import { formatIcu, type IcuParams } from './icu.ts';
import en from './messages/en.json' with { type: 'json' };

type Catalog = typeof en;

/** Message keys of the `ui-domain` namespace. */
export type DomainMessageKey = Exclude<keyof Catalog, '$schema'>;

export type DomainMessageParams = IcuParams;

export type DomainTranslate = (key: DomainMessageKey, params?: DomainMessageParams) => string;

export interface DomainI18n {
  /** BCP-47 tag of the page (`en`, `es`, `pt-BR`, `zh-Hans`…), used by every `Intl` formatter. */
  readonly locale: string;
  readonly t: DomainTranslate;
  /** Localised taxonomy names (categories, tags: namespace `taxonomy`). Default: the English name. */
  readonly taxonomy?: (nameKey: string, fallback: string) => string;
  /** Time zone of dates. Default `UTC` (cached public HTML); per-user client UI may pass its own. */
  readonly timeZone?: string;
}

/** Every key of the namespace (source order). */
export const DOMAIN_MESSAGE_KEYS = Object.keys(en).filter((key) => key !== '$schema') as DomainMessageKey[];

/** Builds a translator from a flat ICU catalogue (any locale's `ui-domain/<locale>.json`). */
export function createDomainTranslate(
  messages: Readonly<Partial<Record<DomainMessageKey, string>>>,
  locale = 'en',
): DomainTranslate {
  return (key, params) => formatIcu(messages[key] ?? en[key], params, messages[key] ? locale : 'en');
}

/** English source (the last-resort fallback). */
export const englishDomainI18n: DomainI18n = { locale: 'en', t: createDomainTranslate(en, 'en') };

let configured: DomainI18n | null = null;

/** Sets the application-wide i18n of the domain components (see the module comment). */
export function configureDomainI18n(value: DomainI18n | null): void {
  configured = value;
}

const DomainI18nContext = createContext<DomainI18n | null>(null);

export interface DomainI18nProviderProps {
  value: DomainI18n;
  children?: ReactNode;
}

export function DomainI18nProvider({ value, children }: DomainI18nProviderProps) {
  return createElement(DomainI18nContext.Provider, { value }, children);
}

/** The i18n in scope (context → configured → English). */
export function useDomainI18n(): DomainI18n {
  return useContext(DomainI18nContext) ?? configured ?? englishDomainI18n;
}

// -------------------------------------------------------------------------------------------
// Formatting (pure, locale explicit)
// -------------------------------------------------------------------------------------------

const formatters = new Map<string, Intl.NumberFormat | Intl.DateTimeFormat>();

function numberFormat(locale: string, options: Intl.NumberFormatOptions): Intl.NumberFormat {
  const key = `n|${locale}|${JSON.stringify(options)}`;
  let format = formatters.get(key) as Intl.NumberFormat | undefined;
  if (!format) {
    format = new Intl.NumberFormat(locale, options);
    formatters.set(key, format);
  }
  return format;
}

function dateFormat(locale: string, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  const key = `d|${locale}|${JSON.stringify(options)}`;
  let format = formatters.get(key) as Intl.DateTimeFormat | undefined;
  if (!format) {
    format = new Intl.DateTimeFormat(locale, options);
    formatters.set(key, format);
  }
  return format;
}

/** `1,982,114` · `1.982.114`. */
export function formatCount(locale: string, value: number): string {
  return numberFormat(locale, {}).format(value);
}

/** Three significant digits: `1.98M`, `1,98 M`, `198万`; exact below 1 000. */
export function formatCompact(locale: string, value: number): string {
  return numberFormat(locale, { notation: 'compact', maximumSignificantDigits: 3 }).format(value);
}

/** One decimal: `4.6` · `4,6`. */
export function formatRating(locale: string, value: number): string {
  return numberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
}

/** `12 %` style percentage of a 0–1 share. */
export function formatShare(locale: string, share: number): string {
  return numberFormat(locale, { style: 'percent', maximumFractionDigits: 0 }).format(share);
}

const BYTE_UNITS = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'] as const;

/** Binary multiples with the labels players see in Windows (1 KB = 1024 B), like `@sotf/i18n`. */
export function formatBytes(locale: string, bytes: number): string {
  let value = Math.max(0, bytes);
  let unit = 0;
  const digitsFor = (u: number, v: number) => (u === 0 || v >= 100 ? 0 : 1);
  const round = (v: number, d: number) => Math.round(v * 10 ** d) / 10 ** d;
  let digits = digitsFor(unit, value);
  while (round(value, digits) >= 1024 && unit < BYTE_UNITS.length - 1) {
    value /= 1024;
    unit += 1;
    digits = digitsFor(unit, value);
  }
  return numberFormat(locale, {
    style: 'unit',
    unit: BYTE_UNITS[unit],
    unitDisplay: unit === 0 ? 'long' : 'short',
    maximumFractionDigits: digits,
  }).format(round(value, digits));
}

/** `Sep 26, 2026` · `26 sept 2026` (UTC unless a time zone is given). */
export function formatDate(locale: string, iso: string, timeZone = 'UTC'): string {
  return dateFormat(locale, { dateStyle: 'medium', timeZone }).format(new Date(iso));
}

/** `Sep 26, 2026, 21:33` for tooltips/`title`. */
export function formatDateTime(locale: string, iso: string, timeZone = 'UTC'): string {
  return dateFormat(locale, { dateStyle: 'medium', timeStyle: 'short', timeZone }).format(new Date(iso));
}

/** Placeholder passed for arguments that are React nodes (a private-use character). */
export const SLOT = '\uE000';

/**
 * Renders a translated sentence whose `{arg}` is a React node (a link inside «by {author}»),
 * keeping each language's word order: translate with `SLOT` as the argument, then split.
 */
export function withSlot(text: string, node: ReactNode): ReactNode[] {
  const [before = '', ...rest] = text.split(SLOT);
  return rest.length === 0 ? [text] : [before, node, rest.join('')];
}
