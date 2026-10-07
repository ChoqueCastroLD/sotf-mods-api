/**
 * Messages of the social islands, loaded **per locale** (PLAN §7.11, §8.2 island budgets).
 *
 * Paraglide compiles every message with its 13 translations: right for server-rendered pages,
 * but it would multiply the size of the islands' copy by 13. The islands therefore read the same
 * source catalogues (`packages/i18n/messages/{social,errors}/<locale>.json`, validated by
 * `pnpm i18n:check`) for the page locale only, as small lazy chunks fetched together with the
 * island, and format them with the ICU formatter of `@sotf/ui` (same approach as the console
 * shell, `console/lib/messages.ts`). The handful of generic labels the islands share with other
 * namespaces (Cancel, Save, report reasons…) are copied into `social_*` keys with the same
 * translations, so no Paraglide message (13 locales each) ends up in the island chunks.
 *
 *   await loadSocialMessages();
 *   t('social_comment_posted');
 *   t('social_review_stars', { count: 4 });
 */
import { type Locale, matchLocale, toHtmlLang } from '@sotf/i18n';
import type errors from '../../../../../../packages/i18n/messages/errors/en.json';
import type jams from '../../../../../../packages/i18n/messages/jams/en.json';
import type requests from '../../../../../../packages/i18n/messages/requests/en.json';
import type social from '../../../../../../packages/i18n/messages/social/en.json';
// The ICU file itself: the `@sotf/ui/domain` barrel would pull React modules into this plain script.
import { formatIcu, type IcuParams } from '../../../../../../packages/ui/src/domain/icu.ts';

type Keys<T> = Exclude<keyof T, '$schema'>;
export type SocialMessageKey = Keys<typeof social> | Keys<typeof errors> | Keys<typeof requests> | Keys<typeof jams>;

type Catalog = Readonly<Record<string, string>>;
type CatalogModule = { default: Catalog };

// Vite turns every file into its own lazy chunk; only the page locale's are fetched. The
// `ui-domain` catalogue (texts of the `@sotf/ui/domain` components the islands render) is fetched
// for non-English pages only: its English source ships with `@sotf/ui/domain` already.
const LOADERS = import.meta.glob<CatalogModule>(
  '../../../../../../packages/i18n/messages/{social,errors,requests,jams,ui-domain}/*.json',
);

const NAMESPACES = ['social', 'errors'] as const;

function loaderFor(namespace: string, locale: Locale): (() => Promise<CatalogModule>) | undefined {
  const suffix = `/messages/${namespace}/${locale}.json`;
  for (const [path, load] of Object.entries(LOADERS)) if (path.endsWith(suffix)) return load;
  return undefined;
}

let active: { lang: string; catalog: Catalog; domain: Catalog } | null = null;
let pending: Promise<boolean> | null = null;

/** Locale of the page (`<html lang>`), English when unknown. */
export function pageLocale(): Locale {
  const lang = typeof document === 'undefined' ? '' : document.documentElement.lang;
  return (lang && matchLocale(lang)) || 'en';
}

async function load(locale: Locale): Promise<{ catalog: Catalog; domain: Catalog }> {
  const domainLoader = locale === 'en' ? undefined : loaderFor('ui-domain', locale);
  const [domain, ...parts] = await Promise.all([
    // Optional: without it the domain components keep their English source.
    domainLoader
      ? domainLoader().then(
          (module) => module.default,
          () => ({}),
        )
      : Promise.resolve({}),
    ...NAMESPACES.map(async (namespace) => {
      const loader = loaderFor(namespace, locale);
      if (!loader) throw new Error(`missing ${namespace} messages for ${locale}`);
      return (await loader()).default;
    }),
  ]);
  return {
    catalog: Object.freeze(Object.assign({}, ...parts) as Record<string, string>),
    domain: Object.freeze({ ...domain }),
  };
}

/** The `ui-domain` catalogue of the page locale (empty for English or before loading). */
export function domainCatalog(): Catalog {
  return active?.domain ?? {};
}

/** BCP-47 language of the loaded catalogue (`en` before loading). */
export function activeLang(): string {
  return active?.lang ?? 'en';
}

/**
 * Adds the catalogue of another namespace (the request board island) to the loaded one. Call it
 * after {@link loadSocialMessages}; resolves false when it could not be fetched.
 */
export async function loadExtraMessages(namespace: 'requests' | 'jams'): Promise<boolean> {
  if (!active) return false;
  const current = active;
  const locales = pageLocale() === 'en' ? (['en'] as const) : ([pageLocale(), 'en'] as const);
  for (const candidate of locales) {
    const loader = loaderFor(namespace, candidate);
    if (!loader) continue;
    try {
      const extra = (await loader()).default;
      // English fills in whatever the page locale misses (never the case with `pnpm i18n:check`).
      active = { ...current, catalog: Object.freeze({ ...current.catalog, ...extra }) };
      return true;
    } catch {
      // Try the next candidate.
    }
  }
  return false;
}

/**
 * Loads the catalogue of the page locale once (falls back to English). Resolves false when no
 * catalogue could be fetched (offline): the islands then stay unmounted and the server-rendered
 * content remains.
 */
export function loadSocialMessages(): Promise<boolean> {
  if (active) return Promise.resolve(true);
  pending ??= (async () => {
    const locale = pageLocale();
    for (const candidate of locale === 'en' ? (['en'] as const) : ([locale, 'en'] as const)) {
      try {
        active = { lang: toHtmlLang(candidate), ...(await load(candidate)) };
        return true;
      } catch {
        // Try the next candidate.
      }
    }
    pending = null;
    return false;
  })();
  return pending;
}

/** The message `key` in the page locale, formatted with `params` (ICU). */
export function t(key: SocialMessageKey, params?: IcuParams): string {
  const template = active?.catalog[key];
  if (template === undefined) return key;
  return formatIcu(template, params, active?.lang ?? 'en');
}

/** Localised detail of an API problem code (same texts as `describeProblem` of @sotf/i18n). */
export function problemDetail(code: string | null, retryAfterSeconds?: number): string {
  const catalog = active?.catalog ?? {};
  if (code === 'RATE_LIMITED' && retryAfterSeconds && retryAfterSeconds > 0 && catalog.errors_code_rate_limited_retry) {
    return formatIcu(catalog.errors_code_rate_limited_retry, { seconds: Math.ceil(retryAfterSeconds) }, active?.lang);
  }
  const detail = code ? catalog[`errors_code_${code.toLowerCase()}_detail`] : undefined;
  return detail ? formatIcu(detail, {}, active?.lang) : t('errors_code_unknown_detail');
}
