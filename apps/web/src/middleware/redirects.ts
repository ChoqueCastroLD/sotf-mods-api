/**
 * Generic URL rules of the public site (PLAN §4.1, §4.6), as pure functions so the whole table is
 * unit-tested:
 *
 * - trailing slash → 301 without it (never on `/`);
 * - a locale prefix on an unlocalized path (`/es/api/…`, `/es/dashboard`) or the explicit `/en/…`
 *   prefix → 301 to the canonical path;
 * - legacy static assets, the 2023-era routes, `/loader`, `/upload*`, `/@handle`, the removed
 *   features (`/kits`, `/news`, `/best`…, see `REMOVED_FEATURES`) and the renamed console sections
 *   (`/basecamp` → `/dashboard`…, see `RENAMED_CONSOLE`) → 301 (308 for non-GET);
 * - `/images/:file` and `/images/:file/preview` (2023 uploads) → 410.
 *
 * Out of scope here: `/mods/:u/:s.json` → oEmbed (WP-61), the `/mods?…` legacy query mapping
 * (WP-54), mod slug resolution (WP-62/WP-63) and `/logout` itself (WP-44).
 *
 * Every function takes the locale-less path (`stripLocale` has already run) plus the locale of
 * the request, and returns targets already localized.
 */
import { DEFAULT_LOCALE, isLocale, isLocalizedPath, type Locale, localizePath, stripLocale } from '@sotf/i18n';

export type RuleResult =
  | { kind: 'redirect'; status: 301 | 308; location: string }
  | { kind: 'gone' }
  | { kind: 'pass' };

const PASS: RuleResult = { kind: 'pass' };

function redirect(location: string, method = 'GET'): RuleResult {
  // 308 keeps the method and body of non-GET requests (PLAN §4.1 «301» applies to navigations).
  return { kind: 'redirect', status: method === 'GET' || method === 'HEAD' ? 301 : 308, location };
}

/** Removes trailing slashes (and collapses duplicated ones); `null` when the path is canonical. */
export function trailingSlashTarget(pathname: string): string | null {
  if (pathname === '/') return null;
  const collapsed = pathname.replace(/\/{2,}/g, '/');
  const trimmed = collapsed.length > 1 ? collapsed.replace(/\/+$/, '') : collapsed;
  const canonical = trimmed === '' ? '/' : trimmed;
  return canonical === pathname ? null : canonical;
}

/** Exact legacy paths (without locale) → v2 path. Targets are localized when they are pages. */
export const LEGACY_EXACT: Readonly<Record<string, string>> = {
  '/loader': '/install',
  '/upload': '/dashboard/new/mod',
  '/upload-build': '/dashboard/new/build',
  // 2023 era (research/01 §4.4)
  '/user/login': '/login',
  '/user/register': '/register',
  '/user/logout': '/logout',
  '/user/upload': '/dashboard/new/mod',
  '/mods/upload': '/dashboard/new/mod',
  '/artifacts': '/',
  // Retired one-click installer: the guide explains the switch to RedManager.
  '/static/downloads/sotfmodsoneclick-setup1.0.0.exe': '/install#oneclick',
  '/static/images/hd_thumbnail.png': '/brand/og-default.png',
};

/**
 * Features removed by CLASSIC.md: first path segment → where it lands. Every path below the segment
 * redirects too (`/kits/a/b`, `/k/abc123`, `/news/feed.xml`). The query string is dropped because the
 * old parameters mean nothing on the target. `/badges/mods/:u/:s/:kind.svg` (README badges for mod
 * embeds) is not a removed page and keeps working.
 */
export const REMOVED_FEATURES: Readonly<Record<string, string>> = {
  kits: '/mods',
  k: '/mods',
  'patch-radar': '/mods',
  best: '/mods',
  compare: '/mods',
  creators: '/mods',
  news: '/',
  achievements: '/',
  badges: '/',
  brand: '/',
};

/** Target of a removed feature path, or `null` when the path is not one (or must keep working). */
export function removedFeatureTarget(pathname: string): string | null {
  const first = pathname.split('/', 2)[1]?.toLowerCase() ?? '';
  const target = REMOVED_FEATURES[first];
  if (target === undefined) return null;
  if (first === 'badges' && /^\/badges\/mods\/.+\.svg$/i.test(pathname)) return null;
  // `/brand/logo.png` and the other static brand files are assets, not the retired page.
  if (first === 'brand' && /\.[a-z0-9]+$/i.test(pathname)) return null;
  return target;
}

/**
 * Console sections renamed by CLASSIC.md (jargon → plain words): old first segment → new one. The
 * sub-path and the query are kept (`/ranger/admin/ecosystem?x=1` → `/moderation/admin/ecosystem?x=1`).
 * The console never carries a locale prefix, so the targets are not localized.
 */
export const RENAMED_CONSOLE: Readonly<Record<string, string>> = {
  basecamp: 'dashboard',
  ranger: 'moderation',
  signals: 'notifications',
};

/** `/me/backpack` became `/me/following` (the sub-path and the query are kept). */
const RENAMED_ME_PAGES: Readonly<Record<string, string>> = { backpack: 'following' };

/**
 * New path (without query) for a console path that was renamed, or `null` when the path is not one.
 * Matches whole segments only (`/signalsx` is not `/signals`), case-insensitively.
 */
export function renamedConsoleTarget(pathname: string): string | null {
  const segments = pathname.split('/');
  const first = segments[1]?.toLowerCase() ?? '';
  const renamed = Object.hasOwn(RENAMED_CONSOLE, first) ? RENAMED_CONSOLE[first] : undefined;
  if (renamed !== undefined) return ['', renamed, ...segments.slice(2)].join('/');
  if (first === 'me') {
    const page = segments[2]?.toLowerCase() ?? '';
    const target = Object.hasOwn(RENAMED_ME_PAGES, page) ? RENAMED_ME_PAGES[page] : undefined;
    if (target !== undefined) return ['', segments[1], target, ...segments.slice(3)].join('/');
  }
  return null;
}

const LEGACY_LOGO = /^\/static\/images\/logo[^/]*\.png$/i;
const LEGACY_FAVICON = /^\/static\/images\/favicon[^/]*$/i;
const LEGACY_IMAGE = /^\/images\/[^/]+(?:\/preview)?$/;
const AT_HANDLE = /^\/@([^/]+)$/;

function localizeTarget(target: string, locale: Locale): string {
  return localizePath(target, locale);
}

/**
 * Legacy and vanity rules for a locale-less path. `search` is kept on redirects (e.g. UTM
 * parameters survive `/loader?utm_source=x`), except for asset redirects.
 */
export function legacyRule(pathname: string, search: string, locale: Locale, method = 'GET'): RuleResult {
  const exact = LEGACY_EXACT[pathname] ?? LEGACY_EXACT[pathname.toLowerCase()];
  if (exact !== undefined) {
    const isAsset = exact.startsWith('/brand/');
    const [targetPath, hash] = exact.split('#', 2) as [string, string | undefined];
    const location = localizeTarget(targetPath, locale) + (isAsset ? '' : search) + (hash ? `#${hash}` : '');
    return redirect(location, method);
  }
  const removed = removedFeatureTarget(pathname);
  if (removed !== null) return redirect(localizeTarget(removed, locale), method);
  const renamed = renamedConsoleTarget(pathname);
  if (renamed !== null) return redirect(renamed + search, method);
  if (LEGACY_LOGO.test(pathname)) return redirect('/brand/logo-sm.png', method);
  if (LEGACY_FAVICON.test(pathname)) return redirect('/favicon.svg', method);
  if (LEGACY_IMAGE.test(pathname)) return { kind: 'gone' };
  const handle = AT_HANDLE.exec(pathname)?.[1];
  if (handle) {
    let decoded: string;
    try {
      decoded = decodeURIComponent(handle);
    } catch {
      return PASS;
    }
    if (decoded.length === 0 || decoded.length > 64 || /[/\\?#\s]/.test(decoded)) return PASS;
    return redirect(localizeTarget(`/profile/${encodeURIComponent(decoded)}`, locale) + search, method);
  }
  return PASS;
}

/**
 * `/ES/mods`, `/es-ES/mods`, `/pt-BR/mods`, `/zh_CN/mods`: a supported language written in capitals
 * or with a region/script subtag. Returns the canonical prefix (`es`, `pt`, `zh`; `''` for English)
 * and the rest of the path, or `null` when the first segment is not such a variant.
 */
export function localeAliasOf(pathname: string): { prefix: string; rest: string } | null {
  const first = pathname.split('/', 2)[1] ?? '';
  const match = /^([A-Za-z]{2})(?:[-_](?:[A-Za-z]{2}|[A-Za-z]{4}|\d{3}))?$/.exec(first);
  const language = match?.[1]?.toLowerCase();
  if (!language || !isLocale(language) || first === language) return null;
  return { prefix: language === DEFAULT_LOCALE ? '' : `/${language}`, rest: pathname.slice(first.length + 1) };
}

/** Whether the request URL carries a NUL byte (raw or `%00`): never valid, databases reject it. */
export function hasNulByte(url: URL): boolean {
  return /%00/i.test(url.pathname + url.search) || url.href.includes('\u0000');
}

export interface EntryDecision {
  /** Answer 400 right away (malformed URL). */
  reject?: { status: 400 };
  /** Redirect the client before routing. */
  redirect?: { status: 301 | 308; location: string };
  /** Locale of the request (from the URL prefix). */
  locale: Locale;
  /** Locale-less path + query that Astro should route. */
  path: string;
}

/**
 * First decision of the server entry for a request URL: trailing slash, explicit `/en` prefix
 * and prefixed unlocalized paths redirect; otherwise the prefix is stripped for routing.
 */
export function entryDecision(url: URL, method = 'GET'): EntryDecision {
  if (hasNulByte(url)) return { reject: { status: 400 }, locale: DEFAULT_LOCALE, path: url.pathname };
  const slash = trailingSlashTarget(url.pathname);
  if (slash !== null) {
    return { redirect: redirectOf(redirect(slash + url.search, method)), locale: DEFAULT_LOCALE, path: slash };
  }
  // `/en` and `/en/…` are not canonical: English has no prefix (PLAN §4.1).
  if (url.pathname === `/${DEFAULT_LOCALE}` || url.pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const target = url.pathname.slice(DEFAULT_LOCALE.length + 1) || '/';
    return { redirect: redirectOf(redirect(target + url.search, method)), locale: DEFAULT_LOCALE, path: target };
  }
  const alias = localeAliasOf(url.pathname);
  if (alias) {
    const target = `${alias.prefix}${alias.rest}` || '/';
    return { redirect: redirectOf(redirect(target + url.search, method)), locale: DEFAULT_LOCALE, path: target };
  }
  const split = stripLocale(url.pathname);
  if (split.prefixed && !isLocalizedPath(split.path)) {
    // `/es/dashboard`, `/es/api/…`, `/es/sitemap.xml`: these never carry a locale. A renamed console
    // section (`/es/basecamp/mods`) goes straight to its new URL in a single hop.
    const target = renamedConsoleTarget(split.path) ?? split.path;
    return {
      redirect: redirectOf(redirect(target + url.search, method)),
      locale: DEFAULT_LOCALE,
      path: target,
    };
  }
  return { locale: split.locale, path: split.path + url.search };
}

function redirectOf(rule: RuleResult): { status: 301 | 308; location: string } {
  if (rule.kind !== 'redirect') throw new Error('expected a redirect rule');
  return { status: rule.status, location: rule.location };
}
