/**
 * Messages of the console shell, loaded **per locale** (PLAN §7.11, §8.2 shell budget).
 *
 * Paraglide compiles every message with its 13 translations, which is right for pages and route
 * chunks but costs the always-loaded shell ~30 KB br. The shell therefore reads the same source
 * catalogues (`packages/i18n/messages/<namespace>/<locale>.json`, validated by `pnpm i18n:check`)
 * for the one locale in use, loaded as a lazy chunk while `/me` is fetched, and formats them with
 * the ICU formatter of `@sotf/ui`. Route screens (other work packages) keep using `m.…()` from
 * `@sotf/i18n/messages`: the console also switches Paraglide to the same locale.
 *
 *   t('console_nav_overview')
 *   t('console_signals_unread', { count: 3 })
 */
import type { Locale } from '@sotf/i18n';
import { toHtmlLang } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import type common from '../../../../../packages/i18n/messages/common/en.json';
import consoleMessages from '../../../../../packages/i18n/messages/console/en.json' with { type: 'json' };
import type errors from '../../../../../packages/i18n/messages/errors/en.json';
import type meta from '../../../../../packages/i18n/messages/meta/en.json';
import type ui from '../../../../../packages/i18n/messages/ui/en.json';

/** Namespaces the shell reads (console + the shared chrome, errors, metadata and `@sotf/ui` labels). */
export const SHELL_NAMESPACES = ['console', 'common', 'errors', 'meta', 'ui'] as const;

type Keys<T> = Exclude<keyof T, '$schema'>;
export type MessageKey =
  | Keys<typeof consoleMessages>
  | Keys<typeof common>
  | Keys<typeof errors>
  | Keys<typeof meta>
  | Keys<typeof ui>;

export type Catalog = Readonly<Record<string, string>>;
type CatalogModule = { default: Catalog };

// Vite turns every file into its own lazy chunk; only the active locale's five are fetched.
const LOADERS = import.meta.glob<CatalogModule>(
  '../../../../../packages/i18n/messages/{console,common,errors,meta,ui}/*.json',
);

function loaderFor(namespace: string, locale: Locale): (() => Promise<CatalogModule>) | undefined {
  const suffix = `/messages/${namespace}/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

/** Loads the shell catalogue of `locale` (all namespaces merged). */
export async function loadCatalog(locale: Locale): Promise<Catalog> {
  const parts = await Promise.all(
    SHELL_NAMESPACES.map(async (namespace) => {
      const load = loaderFor(namespace, locale);
      if (!load) throw new Error(`missing ${namespace} messages for ${locale}`);
      return (await load()).default;
    }),
  );
  return Object.freeze(Object.assign({}, ...parts) as Record<string, string>);
}

/**
 * Until a catalogue is active (boot, or a boot failure shown by the error boundary) the console's
 * own English messages answer; the `ui_*` labels have their own English copy in `@sotf/ui`.
 */
const FALLBACK: Catalog = consoleMessages;

let active: { locale: Locale; lang: string; catalog: Catalog } = { locale: 'en', lang: 'en', catalog: FALLBACK };

/** Makes `catalog` the one `t()` reads. */
export function setActiveCatalog(locale: Locale, catalog: Catalog): void {
  active = { locale, lang: toHtmlLang(locale), catalog };
}

export function activeLocale(): Locale {
  return active.locale;
}

/** Whether `key` exists in the active catalogue. */
export function hasMessage(key: string): boolean {
  return Object.hasOwn(active.catalog, key);
}

/** The message `key` in the active locale, formatted with `params` (ICU). */
export function t(key: MessageKey, params?: IcuParams): string {
  const template = active.catalog[key];
  if (template === undefined) return key;
  return formatIcu(template, params, active.lang);
}

/** Same as {@link t} for keys computed at run time (problem codes); unknown keys return null. */
export function tDynamic(key: string, params?: IcuParams): string | null {
  const template = active.catalog[key];
  return template === undefined ? null : formatIcu(template, params, active.lang);
}

/** Localized title/detail of an API problem code (same texts as `describeProblem`). */
export function problemText(code: string | null): { title: string; detail: string } {
  const base = code ? `errors_code_${code.toLowerCase()}` : '';
  const title = base ? tDynamic(`${base}_title`) : null;
  const detail = base ? tDynamic(`${base}_detail`) : null;
  if (title && detail) return { title, detail };
  return { title: t('errors_code_unknown_title'), detail: t('errors_code_unknown_detail') };
}
