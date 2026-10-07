/**
 * Messages of the Basecamp screens (`packages/i18n/messages/basecamp/<locale>.json`), loaded for
 * the **active locale only**.
 *
 * Basecamp has a few hundred messages; compiled by Paraglide (every message × 13 locales) they
 * would weigh several times the per-route budget (PLAN §8.2). Like the shell (`lib/messages.ts`)
 * and the publishing wizard (`features/upload/i18n.ts`), these screens read the validated
 * catalogue of one locale (a small lazy chunk) and format it with the ICU formatter of `@sotf/ui`.
 *
 * Route loaders call `loadBasecampMessages()` (the pending screen covers the fetch) and screens
 * call `useBasecampMessages()` so a locale switch suspends until the new catalogue arrives.
 *
 *   bt('basecamp_greeting_morning', { name: 'Toni' })
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import { use } from 'react';
import type english from '../../../../../../packages/i18n/messages/basecamp/en.json';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { activeLocale } from '../../lib/messages.ts';

export type BasecampMessageKey = Exclude<keyof typeof english, '$schema'>;
type Catalog = Readonly<Record<string, string>>;

// One lazy chunk per locale; only the active one is fetched.
const LOADERS = import.meta.glob<{ default: Catalog }>('../../../../../../packages/i18n/messages/basecamp/*.json');

const catalogs = new Map<Locale, Catalog>();
/** One promise per locale, kept after it settles: `use()` needs the same object on every render. */
const loads = new Map<Locale, Promise<void>>();

function loaderFor(locale: Locale): (() => Promise<{ default: Catalog }>) | undefined {
  const suffix = `/messages/basecamp/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the catalogue of `locale` (English if that locale fails). Idempotent. */
export function loadBasecampMessages(locale: Locale = activeLocale()): Promise<void> {
  const existing = loads.get(locale);
  if (existing) return existing;
  const run = (async () => {
    const load = loaderFor(locale);
    try {
      if (!load) throw new Error(`missing basecamp messages for ${locale}`);
      catalogs.set(locale, Object.freeze({ ...(await load()).default }));
    } catch (error) {
      if (locale === 'en') throw error;
      await loadBasecampMessages('en');
      const en = catalogs.get('en');
      if (en) catalogs.set(locale, en);
    }
  })();
  loads.set(locale, run);
  // A failed load can be tried again by the next visit.
  run.catch(() => loads.delete(locale));
  return run;
}

/** Suspends until the messages of the console's current locale are loaded. */
export function useBasecampMessages(): void {
  const { locale } = useConsoleLocale();
  use(loadBasecampMessages(locale));
}

/** The message `key` in the active console locale, formatted with `params` (ICU). */
export function bt(key: BasecampMessageKey, params?: IcuParams): string {
  const locale = activeLocale();
  const catalog = catalogs.get(locale) ?? catalogs.get('en');
  const template = catalog?.[key];
  if (template === undefined) return key;
  return formatIcu(template, params, toHtmlLang(locale));
}
