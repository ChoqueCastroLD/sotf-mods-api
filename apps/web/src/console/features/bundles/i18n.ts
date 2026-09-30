/**
 * Messages of the official bundle screens (`packages/i18n/messages/bundles/<locale>.json`), loaded for
 * the **active locale only**.
 *
 * Same pattern as Basecamp (`features/basecamp/i18n.ts`): the console reads the validated
 * catalogue of the active locale only (a small lazy chunk) and formats it with the ICU formatter.
 *
 * Route loaders call `loadBundlesMessages()` (the pending screen covers the fetch) and screens
 * call `useBundlesMessages()` so a locale switch suspends until the new catalogue arrives.
 *
 *   bdt('bundles_attach')
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import { use } from 'react';
import type english from '../../../../../../packages/i18n/messages/bundles/en.json';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { activeLocale } from '../../lib/messages.ts';

export type BundlesMessageKey = Exclude<keyof typeof english, '$schema'>;
type Catalog = Readonly<Record<string, string>>;

// One lazy chunk per locale; only the active one is fetched.
const LOADERS = import.meta.glob<{ default: Catalog }>('../../../../../../packages/i18n/messages/bundles/*.json');

const catalogs = new Map<Locale, Catalog>();
const pending = new Map<Locale, Promise<void>>();

function loaderFor(locale: Locale): (() => Promise<{ default: Catalog }>) | undefined {
  const suffix = `/messages/bundles/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the catalogue of `locale` (English if that locale fails). Idempotent. */
export function loadBundlesMessages(locale: Locale = activeLocale()): Promise<void> {
  if (catalogs.has(locale)) return Promise.resolve();
  const existing = pending.get(locale);
  if (existing) return existing;
  const run = (async () => {
    const load = loaderFor(locale);
    try {
      if (!load) throw new Error(`missing bundles messages for ${locale}`);
      catalogs.set(locale, Object.freeze({ ...(await load()).default }));
    } catch (error) {
      if (locale === 'en') throw error;
      await loadBundlesMessages('en');
      const en = catalogs.get('en');
      if (en) catalogs.set(locale, en);
    } finally {
      pending.delete(locale);
    }
  })();
  pending.set(locale, run);
  return run;
}

/** Suspends until the messages of the console's current locale are loaded. */
export function useBundlesMessages(): void {
  const { locale } = useConsoleLocale();
  if (!catalogs.has(locale)) use(loadBundlesMessages(locale));
}

/** The message `key` in the active console locale, formatted with `params` (ICU). */
export function bdt(key: BundlesMessageKey, params?: IcuParams): string {
  const locale = activeLocale();
  const catalog = catalogs.get(locale) ?? catalogs.get('en');
  const template = catalog?.[key];
  if (template === undefined) return key;
  return formatIcu(template, params, toHtmlLang(locale));
}
