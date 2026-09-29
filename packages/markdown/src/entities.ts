/**
 * Legacy text columns and HTML entities (PLAN §6.8 and backfill B9).
 *
 * The legacy site stored comments and changelogs after DOMPurify/sanitize-html, so they contain
 * one level of entity encoding (`&amp;`, `&lt;`, `&#39;`…). v2 keeps the Markdown source in the
 * new `*Md` columns ({@link decodeEntities}) and, while both sites share the database, writes an
 * HTML-escaped copy into the legacy column ({@link escapeForLegacy}) because the legacy frontend
 * renders it with `innerHTML`.
 */

const NAMED: Readonly<Record<string, string>> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: '\u00a0',
};

const ENTITY = /&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|([a-zA-Z]+));/g;

function fromCodePoint(codePoint: number, original: string): string {
  // NUL, surrogates, non-characters above U+10FFFF and C0/C1 controls (except tab/newline) stay
  // encoded: decoding them would only introduce invisible or invalid characters.
  if (
    codePoint === 0 ||
    codePoint > 0x10ffff ||
    (codePoint >= 0xd800 && codePoint <= 0xdfff) ||
    (codePoint < 0x20 && codePoint !== 0x09 && codePoint !== 0x0a) ||
    (codePoint >= 0x7f && codePoint <= 0x9f)
  ) {
    return original;
  }
  return String.fromCodePoint(codePoint);
}

/**
 * Decodes one level of HTML character references: `&amp; &lt; &gt; &quot; &apos; &nbsp;` and
 * numeric references (`&#39;`, `&#x27;`). Single pass, so `&amp;lt;` becomes `&lt;` (the
 * author's literal text) and never `<`. Unknown named references are left untouched.
 */
export function decodeEntities(value: string): string {
  if (!value.includes('&')) return value;
  return value.replace(ENTITY, (match, decimal?: string, hex?: string, name?: string) => {
    if (decimal !== undefined) return fromCodePoint(Number.parseInt(decimal, 10), match);
    if (hex !== undefined) return fromCodePoint(Number.parseInt(hex, 16), match);
    return name !== undefined && Object.hasOwn(NAMED, name) ? (NAMED[name] as string) : match;
  });
}

/**
 * HTML-escapes text for a legacy column (`&`, `<`, `>`, `"`, `'`). The inverse of
 * {@link decodeEntities} for any input: `decodeEntities(escapeForLegacy(x)) === x`.
 */
export function escapeForLegacy(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
