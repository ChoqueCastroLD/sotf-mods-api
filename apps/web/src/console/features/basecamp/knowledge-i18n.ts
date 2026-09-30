/**
 * Messages of the mod knowledge screens (known issues, FAQ, co-authors: `packages/i18n/messages/mod-knowledge/<locale>.json`),
 * loaded for the active locale only, like `i18n.ts` (Basecamp). `kt(key, params)` formats one message.
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import { use } from 'react';
import type english from '../../../../../../packages/i18n/messages/mod-knowledge/en.json';
import { useConsoleLocale } from '../../hooks/use-console-locale.ts';
import { activeLocale } from '../../lib/messages.ts';

export type KnowledgeMessageKey = Exclude<keyof typeof english, '$schema'>;
type Catalog = Readonly<Record<string, string>>;

// One lazy chunk per locale; only the active one is fetched.
const LOADERS = import.meta.glob<{ default: Catalog }>('../../../../../../packages/i18n/messages/mod-knowledge/*.json');

const catalogs = new Map<Locale, Catalog>();
const pending = new Map<Locale, Promise<void>>();

function loaderFor(locale: Locale): (() => Promise<{ default: Catalog }>) | undefined {
  const suffix = `/messages/mod-knowledge/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the catalogue of `locale` (English if that locale fails). Idempotent. */
export function loadKnowledgeMessages(locale: Locale = activeLocale()): Promise<void> {
  if (catalogs.has(locale)) return Promise.resolve();
  const existing = pending.get(locale);
  if (existing) return existing;
  const run = (async () => {
    const load = loaderFor(locale);
    try {
      if (!load) throw new Error(`missing mod-knowledge messages for ${locale}`);
      catalogs.set(locale, Object.freeze({ ...(await load()).default }));
    } catch (error) {
      if (locale === 'en') throw error;
      await loadKnowledgeMessages('en');
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
export function useKnowledgeMessages(): void {
  const { locale } = useConsoleLocale();
  if (!catalogs.has(locale)) use(loadKnowledgeMessages(locale));
}

/** The message `key` in the active console locale, formatted with `params` (ICU). */
export function kt(key: KnowledgeMessageKey, params?: IcuParams): string {
  const locale = activeLocale();
  const catalog = catalogs.get(locale) ?? catalogs.get('en');
  const template = catalog?.[key];
  if (template === undefined) return key;
  return formatIcu(template, params, toHtmlLang(locale));
}
