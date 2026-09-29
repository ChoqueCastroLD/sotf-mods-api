/**
 * GFM "extended autolinks" (`www.example.com`, `https://example.com/x`, `ana@example.com`) found in
 * plain text, following the GitHub Flavored Markdown spec (§6.9): the link must start at the
 * beginning of the text or after whitespace, `*`, `_`, `~` or `(`; the domain needs at least one
 * period and no underscore in its last two labels; trailing `?!.,:*_~'"`, unbalanced `)` and
 * entity-like `&x;` suffixes are left out of the link.
 *
 * Done here rather than with linkify-it: one linear scan per text node, GitHub semantics (no
 * guessing that `readme.md` is a Moldovan website), and a fifth of the parsing time saved.
 */

export interface AutolinkMatch {
  /** Offset of the link text within the scanned string. */
  index: number;
  /** Link text as written. */
  text: string;
  /** Destination (`www.` links get `https://`, e-mail addresses `mailto:`). */
  href: string;
}

const CANDIDATE = /(^|[\s*_~(])((?:https?:\/\/|www\.)[^\s<]+|[A-Za-z0-9.+_-]+@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+)/gi;
const PRETEST = /https?:\/\/|www\.|@/i;
const DOMAIN_LABEL = /^[\p{L}\p{N}_-]+$/u;
const TRAILING = new Set(['?', '!', '.', ',', ':', '*', '_', '~', "'", '"']);

function validDomain(domain: string): boolean {
  const labels = domain.split('.');
  if (labels.length < 2 || labels.some((label) => !DOMAIN_LABEL.test(label))) return false;
  return !labels.slice(-2).some((label) => label.includes('_'));
}

function trimTrailing(url: string): string {
  let out = url;
  for (;;) {
    const last = out[out.length - 1];
    if (last === undefined) return out;
    if (TRAILING.has(last)) {
      out = out.slice(0, -1);
      continue;
    }
    if (last === ')') {
      const opens = out.split('(').length - 1;
      const closes = out.split(')').length - 1;
      if (closes > opens) {
        out = out.slice(0, -1);
        continue;
      }
      return out;
    }
    if (last === ';') {
      const entity = /&[A-Za-z0-9]+;$/.exec(out);
      if (entity) {
        out = out.slice(0, entity.index);
        continue;
      }
    }
    return out;
  }
}

function toMatch(index: number, raw: string): AutolinkMatch | null {
  if (raw.includes('@') && !/^(?:https?:\/\/|www\.)/i.test(raw)) {
    // E-mail: the address may not end with `-` or `_`; a trailing `.` is punctuation.
    const text = raw.replace(/\.+$/, '');
    if (/[-_]$/.test(text) || !text.includes('.', text.indexOf('@'))) return null;
    return { index, text, href: `mailto:${text}` };
  }
  const text = trimTrailing(raw);
  const www = /^www\./i.test(text);
  const rest = www ? text : text.replace(/^https?:\/\//i, '');
  const domain = (/^[^/?#]*/.exec(rest) as RegExpExecArray)[0];
  if (!validDomain(domain)) return null;
  return { index, text, href: www ? `https://${text}` : text };
}

/** Finds the autolinks of a text (non-overlapping, in order). */
export function findAutolinks(value: string): AutolinkMatch[] {
  if (!PRETEST.test(value)) return [];
  const out: AutolinkMatch[] = [];
  for (const match of value.matchAll(CANDIDATE)) {
    const lead = match[1] as string;
    const found = toMatch(match.index + lead.length, match[2] as string);
    if (found) out.push(found);
  }
  return out;
}
