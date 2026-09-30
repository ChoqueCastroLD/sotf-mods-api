/**
 * Generic URL rules of the public site (PLAN §4.1, §4.6), as pure functions so the whole table is
 * unit-tested:
 *
 * - trailing slash → 301 without it (never on `/`);
 * - a locale prefix on an unlocalized path (`/es/api/…`, `/es/basecamp`) or the explicit `/en/…`
 *   prefix → 301 to the canonical path;
 * - legacy static assets, the 2023-era routes, `/loader`, `/upload*` and `/@handle` → 301;
 * - `/images/:file` and `/images/:file/preview` (2023 uploads) → 410.
 *
 * Out of scope here: `/mods/:u/:s.json` → oEmbed (WP-61), the `/mods?…` legacy query mapping
 * (WP-54), mod slug resolution (WP-62/WP-63) and `/logout` itself (WP-44).
 *
 * Every function takes the locale-less path (`stripLocale` has already run) plus the locale of
 * the request, and returns targets already localized.
 */
import { DEFAULT_LOCALE, isLocalizedPath, type Locale, localizePath, stripLocale } from '@sotf/i18n';

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
  '/upload': '/basecamp/new/mod',
  '/upload-build': '/basecamp/new/build',
  // 2023 era (research/01 §4.4)
  '/user/login': '/login',
  '/user/register': '/register',
  '/user/logout': '/logout',
  '/user/upload': '/basecamp/new/mod',
  '/mods/upload': '/basecamp/new/mod',
  '/artifacts': '/',
  // Retired one-click installer: the guide explains the switch to RedManager.
  '/static/downloads/sotfmodsoneclick-setup1.0.0.exe': '/install#oneclick',
  '/static/images/hd_thumbnail.png': '/brand/og-default.png',
};

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
  if (LEGACY_LOGO.test(pathname)) return redirect('/brand/logo-horizontal-night.png', method);
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

export interface EntryDecision {
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
  const slash = trailingSlashTarget(url.pathname);
  if (slash !== null) {
    return { redirect: redirectOf(redirect(slash + url.search, method)), locale: DEFAULT_LOCALE, path: slash };
  }
  // `/en` and `/en/…` are not canonical: English has no prefix (PLAN §4.1).
  if (url.pathname === `/${DEFAULT_LOCALE}` || url.pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const target = url.pathname.slice(DEFAULT_LOCALE.length + 1) || '/';
    return { redirect: redirectOf(redirect(target + url.search, method)), locale: DEFAULT_LOCALE, path: target };
  }
  const split = stripLocale(url.pathname);
  if (split.prefixed && !isLocalizedPath(split.path)) {
    // `/es/basecamp`, `/es/api/…`, `/es/sitemap.xml`: these never carry a locale.
    return {
      redirect: redirectOf(redirect(split.path + url.search, method)),
      locale: DEFAULT_LOCALE,
      path: split.path,
    };
  }
  return { locale: split.locale, path: split.path + url.search };
}

function redirectOf(rule: RuleResult): { status: 301 | 308; location: string } {
  if (rule.kind !== 'redirect') throw new Error('expected a redirect rule');
  return { status: rule.status, location: rule.location };
}
