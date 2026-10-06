/**
 * Locale-aware URL paths (PLAN §4.1): English segments everywhere, a `/{locale}` prefix for every
 * locale except `en`, never a trailing slash.
 *
 *   localizePath('/mods/imaxel/axels-mod-menu', 'es')  → '/es/mods/imaxel/axels-mod-menu'
 *   localizePath('/es/install', 'de')                  → '/de/install'
 *   localizePath('/', 'ja')                            → '/ja'
 *   stripLocale('/pt/mods?page=2')                     → { locale: 'pt', path: '/mods?page=2', prefixed: true }
 *
 * The console (`/dashboard`, `/moderation`, `/settings`, `/notifications`, `/me`) and machine endpoints are
 * never prefixed (PLAN §4.3, §4.4); {@link isLocalizedPath} encodes that rule and callers can pass
 * their own predicate.
 *
 * Runtime-agnostic: no Node or DOM APIs.
 */
import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale, toHreflang } from './locales.ts';

/** First path segments that are never localized: the console SPA, APIs, internals and static assets. */
export const UNLOCALIZED_SEGMENTS: ReadonlySet<string> = new Set([
  // Console SPA: its language comes from the user's settings (PLAN §4.1, §4.3).
  'dashboard',
  'moderation',
  'settings',
  'notifications',
  'me',
  // Former names of the console sections (they redirect to the new ones, never prefixed).
  'basecamp',
  'ranger',
  'signals',
  // APIs, internals and assets.
  'api',
  '_internal',
  '_astro',
  '_image',
  '_server-islands',
  '.well-known',
  'fonts',
  'static',
  'sitemaps',
  // Endpoints without a page (PLAN §4.2, §4.4) and the web health check (PLAN §10.3).
  'logout',
  'oembed',
  'healthz',
]);

/** File extensions of machine endpoints (`/sitemap.xml`, `/feed.xml`, `/llms.txt`, `/mods/u/s.md`…). */
const UNLOCALIZED_EXTENSION =
  /\.(?:xml|txt|json|md|webmanifest|ico|svg|png|jpe?g|webp|avif|gif|js|mjs|css|map|woff2?)$/i;

/** `/mods/:user/:slug/download/:version` and the same shape for builds (redirect endpoints, `no-store`). */
const DOWNLOAD_ROUTE = /^\/(?:mods|builds)\/[^/]+\/[^/]+\/download(?:\/|$)/;

export type LocalizedPathPredicate = (pathname: string) => boolean;

/**
 * Whether a *locale-less* pathname (no query or hash) is a localized page. False for the console,
 * APIs, internals, assets, download redirects and machine endpoints with a file extension.
 */
export function isLocalizedPath(pathname: string): boolean {
  const first = pathname.split('/', 2)[1] ?? '';
  if (UNLOCALIZED_SEGMENTS.has(first.toLowerCase())) return false;
  if (DOWNLOAD_ROUTE.test(pathname)) return false;
  const last = pathname.slice(pathname.lastIndexOf('/') + 1);
  return !UNLOCALIZED_EXTENSION.test(last);
}

export interface SplitPath {
  /** Locale implied by the URL: the prefix, or the default locale when there is none. */
  locale: Locale;
  /** Path without the locale prefix, always starting with `/`; query and hash are preserved. */
  path: string;
  /** Whether the input carried a (non-default) locale prefix. */
  prefixed: boolean;
}

interface PathParts {
  pathname: string;
  suffix: string;
}

function splitSuffix(path: string): PathParts {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//') || path.startsWith('/\\')) {
    throw new TypeError(`Expected an absolute, same-origin path starting with a single "/": ${JSON.stringify(path)}`);
  }
  const cut = path.search(/[?#]/);
  return cut === -1 ? { pathname: path, suffix: '' } : { pathname: path.slice(0, cut), suffix: path.slice(cut) };
}

/**
 * Splits the locale prefix off a path. Only lowercase prefixes of non-default locales count:
 * `/es/mods` → `es`; `/en/mods`, `/ES/mods` and `/esx` are unprefixed (locale `en`) and are
 * returned unchanged, so the router treats them as ordinary (usually missing) pages.
 */
export function stripLocale(path: string): SplitPath {
  const { pathname, suffix } = splitSuffix(path);
  const first = pathname.split('/', 2)[1] ?? '';
  if (first !== DEFAULT_LOCALE && isLocale(first)) {
    const rest = pathname.slice(first.length + 1);
    return { locale: first, path: (rest === '' ? '/' : rest) + suffix, prefixed: true };
  }
  return { locale: DEFAULT_LOCALE, path, prefixed: false };
}

export interface LocalizePathOptions {
  /** Decides whether a locale-less pathname gets a prefix. Defaults to {@link isLocalizedPath}. */
  isLocalized?: LocalizedPathPredicate;
}

/**
 * Returns `path` in `locale`: removes any existing locale prefix, then adds `/{locale}` unless the
 * locale is the default one or the path is not localized. Trailing slashes are removed (PLAN §4.1);
 * query string and hash are kept as-is.
 */
export function localizePath(path: string, locale: Locale, options: LocalizePathOptions = {}): string {
  const bare = stripLocale(path).path;
  const { pathname, suffix } = splitSuffix(bare);
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') || '/' : pathname;
  const isLocalized = options.isLocalized ?? isLocalizedPath;
  if (locale === DEFAULT_LOCALE || !isLocalized(clean)) return clean + suffix;
  return (clean === '/' ? `/${locale}` : `/${locale}${clean}`) + suffix;
}

export interface HreflangAlternate {
  /** BCP-47 tag or `x-default`. */
  hreflang: string;
  /** Absolute URL when `origin` is given, otherwise a root-relative path. */
  href: string;
  /** Locale the alternate points to (`en` for `x-default`). */
  locale: Locale;
}

/**
 * The hreflang cluster of a page: one alternate per locale (in {@link LOCALES} order) plus
 * `x-default` → English (PLAN §4.5, §8.6). `path` may be in any locale. Query strings are kept
 * (paginated pages are self-canonical); hashes are dropped.
 *
 * @param origin e.g. `https://sotf-mods.com` (no trailing slash needed).
 */
export function hreflangAlternates(
  path: string,
  origin = '',
  locales: readonly Locale[] = LOCALES,
): HreflangAlternate[] {
  const base = origin.replace(/\/+$/, '');
  const withoutHash = path.split('#', 1)[0] ?? path;
  const alternates = locales.map((locale) => ({
    hreflang: toHreflang(locale),
    href: base + localizePath(withoutHash, locale),
    locale,
  }));
  alternates.push({
    hreflang: 'x-default',
    href: base + localizePath(withoutHash, DEFAULT_LOCALE),
    locale: DEFAULT_LOCALE,
  });
  return alternates;
}
