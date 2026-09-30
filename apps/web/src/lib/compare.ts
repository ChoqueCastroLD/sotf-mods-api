/**
 * `/compare` input parsing (PLAN §7.14 T2 «comparador de mods»): slots arrive as `?mods=` values
 * (repeated and/or comma separated) written as `creator/name`, `/mods/creator/name` or a full page
 * link. Everything else is ignored; at most four distinct mods are compared.
 */
export const MAX_COMPARE = 4;

export interface CompareRef {
  user: string;
  slug: string;
  /** What the visitor typed (shown back in the form and in errors). */
  raw: string;
}

function decode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function parseCompareRef(raw: string): CompareRef | null {
  const text = raw.trim();
  if (!text) return null;
  let path = text;
  try {
    if (/^https?:\/\//i.test(text)) path = new URL(text).pathname;
  } catch {
    return null;
  }
  const parts = path
    .split(/[?#]/)[0]!
    .split('/')
    .filter(Boolean)
    .map(decode);
  const start = parts[0] === 'mods' || parts[0] === 'builds' ? 1 : 0;
  const localeSkipped = parts.length - start > 2 && /^[a-z]{2}$/.test(parts[0] ?? '') ? 1 : 0;
  const [user, slug] = parts.slice(start + localeSkipped);
  if (!user || !slug) return null;
  return { user, slug, raw: text };
}

export function parseCompareRefs(values: readonly string[]): CompareRef[] {
  const out: CompareRef[] = [];
  const seen = new Set<string>();
  for (const value of values) {
    for (const piece of value.split(',')) {
      const ref = parseCompareRef(piece);
      if (!ref) continue;
      const key = `${ref.user}/${ref.slug}`.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(ref);
      if (out.length >= MAX_COMPARE) return out;
    }
  }
  return out;
}
