/**
 * Text helpers of search: query normalisation (the `SearchQueryDaily.qNorm` key), accent folding
 * and the «» highlight of SearchHitDTO.
 */

/** Lowercase, accent-free, single-spaced, ≤ 100 characters. */
export function normalizeQuery(q: string): string {
  return q
    .normalize('NFKD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/[\s ]+/g, ' ')
    .trim()
    .slice(0, 100);
}

/** Accent-folded lowercase copy that keeps the length of `text` when possible (for highlights). */
function fold(text: string): string {
  let out = '';
  for (const ch of text) {
    const folded = ch
      .normalize('NFKD')
      .replace(/\p{M}+/gu, '')
      .toLowerCase();
    // Keep the alignment with the original: fall back to the lowercase char when folding changes the length.
    out += folded.length === ch.length ? folded : ch.toLowerCase().length === ch.length ? ch.toLowerCase() : ch;
  }
  return out;
}

/** Words of a query worth highlighting (≥ 2 characters, longest first). */
export function queryTerms(q: string): string[] {
  const terms = normalizeQuery(q)
    .split(/[^\p{L}\p{N}]+/u)
    .filter((t) => t.length >= 2);
  return [...new Set(terms)].sort((a, b) => b.length - a.length);
}

/**
 * Wraps the first occurrence of each query term in «», or returns null when no term occurs.
 * The result is plain text (the client escapes it).
 */
export function highlight(text: string, q: string, maxLength = 160): string | null {
  const clipped = text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
  const folded = fold(clipped);
  const ranges: Array<[number, number]> = [];
  for (const term of queryTerms(q)) {
    const at = folded.indexOf(term);
    if (at < 0) continue;
    const end = at + term.length;
    if (ranges.some(([s, e]) => at < e && end > s)) continue;
    ranges.push([at, end]);
  }
  if (ranges.length === 0) return null;
  ranges.sort((a, b) => a[0] - b[0]);
  let out = '';
  let cursor = 0;
  for (const [s, e] of ranges) {
    out += `${clipped.slice(cursor, s)}«${clipped.slice(s, e)}»`;
    cursor = e;
  }
  return out + clipped.slice(cursor);
}
