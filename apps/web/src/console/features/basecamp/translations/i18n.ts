/**
 * Messages of the translations section of the listing editor
 * (`packages/i18n/messages/translations/<locale>.json`), loaded for the active locale only, like
 * the Basecamp catalogue (`../i18n.ts`).
 *
 *   tt('translations_saved')
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import { use } from 'react';
import type english from '../../../../../../../packages/i18n/messages/translations/en.json';
import { useConsoleLocale } from '../../../hooks/use-console-locale.ts';
import { activeLocale } from '../../../lib/messages.ts';

export type TranslationsMessageKey = Exclude<keyof typeof english, '$schema'>;
type Catalog = Readonly<Record<string, string>>;

const LOADERS = import.meta.glob<{ default: Catalog }>(
  '../../../../../../../packages/i18n/messages/translations/*.json',
);

const catalogs = new Map<Locale, Catalog>();
const pending = new Map<Locale, Promise<void>>();

function loaderFor(locale: Locale): (() => Promise<{ default: Catalog }>) | undefined {
  const suffix = `/messages/translations/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the catalogue of `locale` (English if that locale fails). Idempotent. */
export function loadTranslationsMessages(locale: Locale = activeLocale()): Promise<void> {
  if (catalogs.has(locale)) return Promise.resolve();
  const existing = pending.get(locale);
  if (existing) return existing;
  const run = (async () => {
    const load = loaderFor(locale);
    try {
      if (!load) throw new Error(`missing translations messages for ${locale}`);
      catalogs.set(locale, Object.freeze({ ...(await load()).default }));
    } catch (error) {
      if (locale === 'en') throw error;
      await loadTranslationsMessages('en');
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
export function useTranslationsMessages(): void {
  const { locale } = useConsoleLocale();
  if (!catalogs.has(locale)) use(loadTranslationsMessages(locale));
}

/** The message `key` in the active console locale, formatted with `params` (ICU). */
export function tt(key: TranslationsMessageKey, params?: IcuParams): string {
  const locale = activeLocale();
  const catalog = catalogs.get(locale) ?? catalogs.get('en');
  const template = catalog?.[key];
  if (template === undefined) return key;
  return formatIcu(template, params, toHtmlLang(locale));
}
