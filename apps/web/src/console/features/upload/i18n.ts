/**
 * Messages of the publishing screens (`packages/i18n/messages/upload/<locale>.json`), loaded for
 * the **active locale only**.
 *
 * The wizard has ~470 messages; compiled by Paraglide (every message × 13 locales) they alone would
 * weigh ~180 KB in the route chunk, three times the per-route budget (PLAN §8.2). Like the shell
 * (`lib/messages.ts`), these screens read the same validated catalogue of one locale (a lazy chunk
 * of ~8 KB br) and format it with the ICU formatter of `@sotf/ui`.
 *
 * Routes call `loadUploadMessages()` in their loader (the pending screen covers the fetch), and
 * `useUploadMessages()` suspends while a newly chosen locale loads.
 *
 *   ut('upload_step_of', { current: 2, total: 6 })
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import { use } from 'react';
import type english from '../../../../../../packages/i18n/messages/upload/en.json';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { activeLocale } from '../../lib/messages.ts';

export type UploadMessageKey = keyof typeof english;
type Catalog = Readonly<Record<string, string>>;

// One lazy chunk per locale; only the active one is fetched.
const LOADERS = import.meta.glob<{ default: Catalog }>('../../../../../../packages/i18n/messages/upload/*.json');

const catalogs = new Map<Locale, Catalog>();
/** One promise per locale, kept after it settles: `use()` needs the same object on every render. */
const pending = new Map<Locale, Promise<void>>();

function loaderFor(locale: Locale): (() => Promise<{ default: Catalog }>) | undefined {
  const suffix = `/messages/upload/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the catalogue of `locale` (English if that locale fails). Idempotent. */
export function loadUploadMessages(locale: Locale = activeLocale()): Promise<void> {
  const existing = pending.get(locale);
  if (existing) return existing;
  const run = (async () => {
    const load = loaderFor(locale);
    try {
      if (!load) throw new Error(`missing upload messages for ${locale}`);
      catalogs.set(locale, Object.freeze({ ...(await load()).default }));
    } catch (error) {
      if (locale === 'en') throw error;
      await loadUploadMessages('en');
      const en = catalogs.get('en');
      if (en) catalogs.set(locale, en);
    }
  })();
  pending.set(locale, run);
  // A failed load can be tried again by the next visit.
  run.catch(() => pending.delete(locale));
  return run;
}

/** Suspends until the messages of the console's current locale are loaded. */
export function useUploadMessages(): void {
  const { locale } = useConsoleLocale();
  use(loadUploadMessages(locale));
}

/** The message `key` in the active console locale, formatted with `params` (ICU). */
export function ut(key: UploadMessageKey, params?: IcuParams): string {
  const locale = activeLocale();
  const catalog = catalogs.get(locale) ?? catalogs.get('en');
  const template = catalog?.[key];
  if (template === undefined) return key;
  return formatIcu(template, params, toHtmlLang(locale));
}
