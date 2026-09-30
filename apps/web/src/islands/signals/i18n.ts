/**
 * Text of Signals (the header bell island and the `/signals` console screen): the `signals`
 * namespace (`packages/i18n/messages/signals/<locale>.json`, English source, 13 locales) is loaded
 * **for one locale only**, as a small JSON chunk. Compiled Paraglide messages carry all 13
 * translations per message, which would triple the bell's weight on public pages (PLAN §8.2).
 *
 * Both surfaces format a signal with the same code (`describe.ts`), so the words of a signal are
 * identical in the header panel and on `/signals`. ICU is interpreted by `formatIcu` of
 * `@sotf/ui/domain` (the subset documented in `messages/README.md`).
 */
import type { Locale } from '@sotf/i18n';
import { toIntlLocale } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import type EN from '../../../../../packages/i18n/messages/signals/en.json';

export type SignalsMessageKey = Exclude<keyof typeof EN, '$schema'>;

type Catalog = Readonly<Partial<Record<string, string>>>;

const CATALOGS = import.meta.glob<Catalog>('../../../../../packages/i18n/messages/signals/*.json', {
  import: 'default',
});

let messages: Catalog = {};
let lang = 'en';
let loadedLocale: Locale | null = null;
let loading: { locale: Locale; promise: Promise<void> } | null = null;

function loaderFor(locale: Locale): () => Promise<Catalog> {
  const find = (code: string) => Object.entries(CATALOGS).find(([path]) => path.endsWith(`/signals/${code}.json`))?.[1];
  return find(locale) ?? find('en') ?? (() => Promise.resolve({}));
}

/** Loads the catalogue of `locale` (idempotent per locale; a failed load can be retried). */
export function loadSignalsMessages(locale: Locale): Promise<void> {
  if (loadedLocale === locale) return Promise.resolve();
  if (loading?.locale === locale) return loading.promise;
  const promise = loaderFor(locale)()
    .then((catalog) => {
      messages = catalog;
      lang = toIntlLocale(locale);
      loadedLocale = locale;
    })
    .finally(() => {
      if (loading?.promise === promise) loading = null;
    });
  loading = { locale, promise };
  return promise;
}

/** BCP-47 tag of the loaded catalogue (for `Intl` formatters). */
export function signalsLang(): string {
  return lang;
}

/** A message of the `signals` namespace in the loaded locale (the key itself as a last resort). */
export function st(key: SignalsMessageKey, params?: IcuParams): string {
  const template = messages[key];
  if (template === undefined) return key;
  return formatIcu(template, params, lang);
}

// ── Badge names ─────────────────────────────────────────────────────────────────────────────────
// The `signals` catalogue carries the names of the badges a signal can announce
// (`signals_badge_name_<snake_key>`), so the usual case needs nothing else. A badge added later
// without its signals copy falls back to the `profile` namespace (`profile_badge_<snake_key>_name`,
// WP-64), fetched only when a list shows such a badge (docs/backlog/WP-A2.md).

const PROFILE_CATALOGS = import.meta.glob<Catalog>('../../../../../packages/i18n/messages/profile/*.json', {
  import: 'default',
});

let badgeNames: { locale: Locale; names: Catalog } | null = null;
let badgeLoading: Promise<boolean> | null = null;

/** Loads the profile badge names of the loaded locale (English fallback). Resolves false when unavailable. */
export function ensureBadgeNames(): Promise<boolean> {
  const locale = loadedLocale ?? 'en';
  if (badgeNames?.locale === locale) return Promise.resolve(true);
  badgeLoading ??= (async () => {
    const find = (code: string) =>
      Object.entries(PROFILE_CATALOGS).find(([path]) => path.endsWith(`/profile/${code}.json`))?.[1];
    const load = find(locale) ?? find('en');
    try {
      const catalog = load ? await load() : {};
      const names: Record<string, string> = {};
      for (const [key, value] of Object.entries(catalog)) {
        if (key.startsWith('profile_badge_') && key.endsWith('_name') && typeof value === 'string') names[key] = value;
      }
      badgeNames = { locale, names };
      return true;
    } catch {
      return false;
    } finally {
      badgeLoading = null;
    }
  })();
  return badgeLoading;
}

/** `first-blueprint` → `first_blueprint`; `original-survivor-2024` → `original_survivor` + year. */
function badgeParts(key: string): { snake: string; year: string | null } {
  const survivor = /^original-survivor-(\d{4})$/.exec(key);
  if (survivor) return { snake: 'original_survivor', year: survivor[1] ?? '' };
  return { snake: key.replace(/-/g, '_'), year: null };
}

/** Localised name of a badge key (`first-blueprint`, `original-survivor-2024`), or null when unknown. */
export function badgeName(key: string): string | null {
  const { snake, year } = badgeParts(key);
  const params: IcuParams = year === null ? {} : { year };
  const own = messages[`signals_badge_name_${snake}`];
  if (own !== undefined) return formatIcu(own, params, lang);
  const template = badgeNames?.names[`profile_badge_${snake}_name`];
  return template ? formatIcu(template, params, lang) : null;
}

/**
 * Whether a list shows «You earned …» signals whose badge the `signals` catalogue cannot name
 * (worth loading the profile badge names).
 */
export function needsBadgeNames(signals: ReadonlyArray<{ type: string; data: Record<string, unknown> }>): boolean {
  return signals.some((signal) => {
    if (signal.type !== 'badge.awarded' || signal.data.welcome === true) return false;
    const key = typeof signal.data.badgeKey === 'string' ? signal.data.badgeKey : '';
    return messages[`signals_badge_name_${badgeParts(key).snake}`] === undefined;
  });
}

/** A message of the loaded catalogue by a dynamic key, or null when the catalogue has no such key. */
export function stOptional(key: string, params?: IcuParams): string | null {
  const template = messages[key];
  return template === undefined ? null : formatIcu(template, params, lang);
}
