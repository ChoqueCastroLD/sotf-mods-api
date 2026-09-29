/**
 * URL policy for user content (PLAN §9.1: `javascript:` and `data:` out).
 *
 * Mirrors how browsers read an attribute URL (WHATWG URL parser): leading and trailing C0 controls
 * and spaces are ignored and tab/newline characters are removed anywhere. Only then is the scheme
 * compared with the allowlist, so `java\nscript:` or `\u0001javascript:` cannot sneak through.
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

/**
 * Returns the URL normalised the way a browser would read it (with a lower-cased scheme), or
 * `null` when its scheme is not allowed. Relative URLs (`/x`, `x`, `#x`, `?x`, `//host/x`) pass.
 */
export function safeUrl(raw: unknown, protocols: readonly string[]): string | null {
  if (typeof raw !== 'string') return null;
  const value = raw.replace(EDGE_CONTROL, '').replace(TAB_OR_NEWLINE, '');
  // Backslashes are path separators for special schemes: `\\evil` would be protocol-relative.
  const normalised = value.replace(/^[\\/]{2,}/, '//');
  const match = SCHEME.exec(normalised);
  if (!match) {
    // A colon before any `/`, `?` or `#` that did not form a valid scheme (e.g. `1:x`, `:x`) is
    // ambiguous: drop it instead of guessing.
    const colon = normalised.indexOf(':');
    if (colon >= 0) {
      const firstDelimiter = normalised.search(/[/?#]/);
      if (firstDelimiter === -1 || colon < firstDelimiter) return null;
    }
    return normalised;
  }
  const scheme = (match[1] as string).toLowerCase();
  if (!protocols.includes(scheme)) return null;
  return scheme + normalised.slice(scheme.length);
}

/** Host of an absolute or protocol-relative http(s) URL, lower-cased; `null` otherwise. */
export function urlHost(href: string): string | null {
  const match = /^(?:https?:)?\/\/([^/?#]*)/i.exec(href);
  if (!match) return null;
  // Strip credentials and port.
  const authority = (match[1] as string).replace(/^.*@/, '');
  const host = authority.replace(/:\d*$/, '').toLowerCase();
  return host.length > 0 ? host : null;
}

/** True when the link leaves the site (absolute http(s) or protocol-relative to a foreign host). */
export function isExternal(href: string, internalHosts: readonly string[]): boolean {
  if (/^mailto:/i.test(href)) return true;
  const host = urlHost(href);
  if (host === null) return false;
  return !internalHosts.includes(host);
}

/** A site-relative path (`/x`, not `//x`) or an absolute `https:` URL: the only targets we mint. */
export function isTrustedTarget(value: unknown): value is string {
  if (typeof value !== 'string' || value.length === 0 || value.length > 2048) return false;
  // biome-ignore lint/suspicious/noControlCharactersInRegex: reject any control character outright.
  if (/[\u0000-\u0020\u007f"'<>\\`]/.test(value)) return false;
  if (value.startsWith('/')) return !value.startsWith('//');
  return /^https:\/\/[^/?#]+/i.test(value);
}
