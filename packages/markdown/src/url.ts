/**
 * URL policy for user content (PLAN §9.1: `javascript:` and `data:` out).
 *
 * Mirrors how browsers read an attribute URL (WHATWG URL parser): leading and trailing C0 controls
 * and spaces are ignored and tab/newline characters are removed anywhere. Only then is the scheme
 * compared with the allowlist, so `java\nscript:` or `\u0001javascript:` cannot sneak through.
 * Hosts are resolved with the platform's WHATWG `URL`, never with a regular expression.
 */

/** Schemes allowed in `href`. */
export const LINK_PROTOCOLS = ['http', 'https', 'mailto'] as const;
/** Schemes allowed in `src` (images). */
export const MEDIA_PROTOCOLS = ['http', 'https'] as const;

export const DEFAULT_INTERNAL_HOSTS: readonly string[] = ['sotf-mods.com', 'www.sotf-mods.com'];

// biome-ignore lint/suspicious/noControlCharactersInRegex: the WHATWG URL parser strips exactly these.
const EDGE_CONTROL = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
const TAB_OR_NEWLINE = /[\t\n\r]/g;
const SCHEME = /^([a-zA-Z][a-zA-Z0-9+.-]*):/;

/** The fields of a WHATWG `URL` used here. */
interface WhatwgUrl {
  readonly href: string;
  readonly host: string;
  readonly hostname: string;
  readonly protocol: string;
}

/**
 * The platform's WHATWG URL parser (Node, browsers, Deno and workers all provide it). Reached
 * through `globalThis` so the package needs neither DOM nor Node type definitions.
 */
const WhatwgURL = (globalThis as unknown as { URL: new (url: string, base?: string) => WhatwgUrl }).URL;

// Two unrelated bases: a URL that resolves to the same host against both names its own host.
const PROBE_A = 'https://a.invalid/';
const PROBE_B = 'https://b.invalid/';

function parse(value: string, base?: string): WhatwgUrl | null {
  try {
    return new WhatwgURL(value, base);
  } catch {
    return null;
  }
}

/**
 * Returns the URL normalised the way a browser would read it, or `null` when its scheme is not
 * allowed or a browser could not parse it.
 *
 * - `http:`/`https:` URLs, and every scheme-less URL that names a host (`//host`, `\\host`,
 *   `/\host`…), are parsed with the WHATWG URL parser and serialised back (`url.href`; scheme-less
 *   ones become `https:`, the only scheme the site is served on). Backslashes, missing slashes
 *   (`http:evil.com`), credentials tricks (`https://evil.com\@sotf-mods.com`) and IDN hosts are
 *   thereby resolved exactly as a browser resolves them, and never reach the output as written.
 * - Relative references that stay on the page's host (`/x`, `x`, `#x`, `?x`) are kept as written.
 * - Other allowed schemes (`mailto:`) are kept with a lower-cased scheme.
 */
export function safeUrl(raw: unknown, protocols: readonly string[]): string | null {
  if (typeof raw !== 'string') return null;
  const value = raw.replace(EDGE_CONTROL, '').replace(TAB_OR_NEWLINE, '');
  const match = SCHEME.exec(value);
  if (!match) {
    // A colon before any `/`, `?` or `#` that did not form a valid scheme (e.g. `1:x`, `:x`) is
    // ambiguous: drop it instead of guessing.
    const colon = value.indexOf(':');
    if (colon >= 0) {
      const firstDelimiter = value.search(/[/?#\\]/);
      if (firstDelimiter === -1 || colon < firstDelimiter) return null;
    }
    const a = parse(value, PROBE_A);
    const b = parse(value, PROBE_B);
    if (a === null || b === null) return null;
    if (a.host !== b.host) return value; // Relative to the page's own host.
    return protocols.includes('https') ? a.href : null;
  }
  const scheme = (match[1] as string).toLowerCase();
  if (!protocols.includes(scheme)) return null;
  if (scheme === 'http' || scheme === 'https') {
    const url = parse(value);
    return url !== null && url.hostname !== '' ? url.href : null;
  }
  return scheme + value.slice(scheme.length);
}

/** Lower-cased host name without a trailing dot (`Sotf-Mods.com.` → `sotf-mods.com`). */
export function normaliseHost(host: string): string {
  return host.toLowerCase().replace(/\.$/, '');
}

/**
 * Host name a link navigates to, resolved with the WHATWG URL parser exactly as a browser does;
 * `null` for links that stay on the page's host (relative references), non-http(s) schemes and
 * unparseable values.
 */
export function urlHost(href: string): string | null {
  const a = parse(href, PROBE_A);
  const b = parse(href, PROBE_B);
  if (a === null || b === null || a.host !== b.host) return null;
  if (a.protocol !== 'http:' && a.protocol !== 'https:') return null;
  return a.hostname === '' ? null : normaliseHost(a.hostname);
}

/**
 * True when the link leaves the site: `mailto:`, or an http(s) URL (absolute or scheme-relative)
 * whose host, as a browser resolves it, is not one of `internalHosts`.
 */
export function isExternal(href: string, internalHosts: readonly string[]): boolean {
  const value = href.replace(EDGE_CONTROL, '').replace(TAB_OR_NEWLINE, '');
  if (/^mailto:/i.test(value)) return true;
  const host = urlHost(value);
  if (host === null) return false;
  return !internalHosts.some((internal) => normaliseHost(internal) === host);
}

/** A site-relative path (`/x`, not `//x`) or an absolute `https:` URL: the only targets we mint. */
export function isTrustedTarget(value: unknown): value is string {
  if (typeof value !== 'string' || value.length === 0 || value.length > 2048) return false;
  // biome-ignore lint/suspicious/noControlCharactersInRegex: reject any control character outright.
  if (/[\u0000-\u0020\u007f"'<>\\`]/.test(value)) return false;
  if (value.startsWith('/')) return !value.startsWith('//');
  return /^https:\/\/[^/?#]+/i.test(value);
}
