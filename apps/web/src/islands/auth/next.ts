/**
 * `?next=` allowlist (PLAN §9.1 «Redirecciones abiertas»: only internal relative routes of an
 * allowlist). Every place that navigates after an auth step (sign-in, sign-up, verification,
 * sign-out) resolves the destination through {@link safeNext}; anything that is not a relative
 * path into a known section of the site falls back to the home page of the current locale.
 *
 * Runtime-agnostic (SSR, islands, the header script): no Node or DOM APIs.
 */
import { isLocalizedPath, type Locale, localizePath, stripLocale } from '@sotf/i18n';

/** Query parameter that carries the destination. */
export const NEXT_PARAM = 'next';

/** Longest destination accepted (longer values are ignored, not truncated). */
export const MAX_NEXT_LENGTH = 1024;

/** First path segments (locale-less) of the public site a user may be sent back to. */
const PUBLIC_SECTIONS: ReadonlySet<string> = new Set([
  '',
  'mods',
  'builds',
  'kits',
  'categories',
  'tags',
  'best',
  'creators',
  'profile',
  'patch-radar',
  'install',
  'achievements',
  'news',
  'search',
  'about',
  'brand',
  'developers',
  'privacy',
  'terms',
  'content-policy',
  'dmca',
  'cookies',
]);

/** Console sections (PLAN §4.3): allowed, but they need a session. */
const CONSOLE_SECTIONS: ReadonlySet<string> = new Set(['basecamp', 'me', 'ranger', 'settings', 'signals']);

/** Backslashes (browsers read them as `/`) and encoded leading slashes (`/%2F%2Fevil.test`). */
const SUSPICIOUS = /\\|^\/(?:%2f|%5c)/i;

/** C0 control characters and DEL (header splitting, URL-parser quirks). */
function hasControlCharacters(value: string): boolean {
  for (let index = 0; index < value.length; index++) {
    const code = value.charCodeAt(index);
    if (code < 0x20 || code === 0x7f) return true;
  }
  return false;
}

const PARSE_BASE = 'https://next.invalid';

export interface SafeNextOptions {
  /** Only public pages (after sign-out a console page would bounce straight back to sign-in). */
  publicOnly?: boolean;
}

/** The home page of a locale (`/`, `/es`…). */
export function homeOf(locale: Locale): string {
  return localizePath('/', locale);
}

/**
 * Normalizes a candidate destination, or returns `null` when it is not allowed: absolute and
 * protocol-relative URLs, backslashes, control characters, encoded leading slashes, API and
 * internal routes, the auth pages themselves and unknown sections.
 */
export function allowedNext(raw: unknown, locale: Locale, options: SafeNextOptions = {}): string | null {
  if (typeof raw !== 'string') return null;
  // No trim: surrounding whitespace is not a path a page would ever produce.
  const value = raw;
  if (value === '' || value.length > MAX_NEXT_LENGTH) return null;
  if (!value.startsWith('/') || value.startsWith('//') || SUSPICIOUS.test(value) || hasControlCharacters(value)) {
    return null;
  }
  let url: URL;
  try {
    url = new URL(value, PARSE_BASE);
  } catch {
    return null;
  }
  if (url.origin !== PARSE_BASE) return null;
  const { locale: pathLocale, path, prefixed } = stripLocale(url.pathname);
  const section = (path.split('/', 2)[1] ?? '').toLowerCase();
  const isConsole = CONSOLE_SECTIONS.has(section);
  if (!PUBLIC_SECTIONS.has(section) && !isConsole) return null;
  if (isConsole && (options.publicOnly || prefixed)) return null;
  const rest = `${url.search}${url.hash}`;
  if (isConsole || !isLocalizedPath(path)) return `${path}${rest}`;
  // Keep an explicit locale prefix; otherwise follow the page the user is on.
  return `${localizePath(path, prefixed ? pathLocale : locale)}${rest}`;
}

/** {@link allowedNext} or the home page of `locale`. */
export function safeNext(raw: unknown, locale: Locale, options: SafeNextOptions = {}): string {
  return allowedNext(raw, locale, options) ?? homeOf(locale);
}

/**
 * Appends `?next=` to an internal link when there is an allowed destination worth keeping
 * (the home page is the default, so it is omitted).
 */
export function withNext(path: string, next: string | null | undefined, locale: Locale): string {
  const allowed = next ? allowedNext(next, locale) : null;
  if (!allowed || allowed === homeOf(locale)) return path;
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}${NEXT_PARAM}=${encodeURIComponent(allowed)}`;
}
