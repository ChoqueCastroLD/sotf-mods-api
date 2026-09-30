/**
 * Text helpers of the palette: folding (case + diacritics), the MiniSearch tokenizer and the
 * match highlighter. Pure functions, no DOM.
 *
 * The tokenizer splits on anything that is not a letter or a digit **and** on camelCase / digit
 * boundaries, and also keeps the whole word: `StackMod` → `stackmod`, `stack`, `mod`;
 * `AxelModMenu` → `axelmodmenu`, `axel`, `mod`, `menu`. That is what makes «stak mod» find
 * StackMod (fuzzy `stak` → `stack`, prefix `mod`) while `stackmod` still matches in one piece.
 */

const MARKS = /\p{M}+/gu;
const SEPARATORS = /[^\p{L}\p{N}]+/u;
const CAMEL_PARTS = /\p{Lu}+(?=\p{Lu}\p{Ll})|\p{Lu}?\p{Ll}+|\p{Lu}+|\p{N}+|\p{L}+/gu;

/** Lower case without diacritics (`Über` → `uber`). */
export function fold(value: string): string {
  return value.normalize('NFD').replace(MARKS, '').toLowerCase();
}

/** MiniSearch `tokenize`: words, their camelCase parts and the whole word, unfolded. */
export function tokenize(text: string): string[] {
  const out: string[] = [];
  for (const word of text.split(SEPARATORS)) {
    if (!word) continue;
    out.push(word);
    const parts = word.match(CAMEL_PARTS);
    if (parts && parts.length > 1) out.push(...parts);
  }
  return out;
}

/** MiniSearch `tokenize` for queries: plain words (camelCase in a query is not meaningful). */
export function tokenizeQuery(text: string): string[] {
  return text.split(SEPARATORS).filter(Boolean);
}

/** MiniSearch `processTerm`: folded, single letters dropped (they only add noise). */
export function processTerm(term: string): string | null {
  const folded = fold(term);
  return folded.length > 1 || /\p{N}/u.test(folded) ? folded : null;
}

/** Normalised query for exact comparisons (manifest id, name, handle). */
export function exactKey(value: string): string {
  return fold(value).replace(/\s+/g, ' ').trim();
}

export interface TextSegment {
  text: string;
  match: boolean;
}

/**
 * Splits `text` into segments, marking every occurrence of the (folded) `terms`. Folding is done
 * character by character so the segments map back onto the original string (accents kept).
 */
export function highlight(text: string, terms: readonly string[]): TextSegment[] {
  const wanted = [...new Set(terms.filter((term) => term.length > 1))].sort((a, b) => b.length - a.length);
  if (wanted.length === 0 || text === '') return [{ text, match: false }];

  // Folded string + for each folded code unit, the index of the original character it came from.
  let folded = '';
  const origin: number[] = [];
  let index = 0;
  for (const char of text) {
    const piece = fold(char);
    for (let i = 0; i < piece.length; i += 1) origin.push(index);
    folded += piece;
    index += char.length;
  }
  origin.push(text.length);

  const marked = new Uint8Array(text.length);
  for (const term of wanted) {
    let from = folded.indexOf(term);
    while (from !== -1) {
      const start = origin[from] ?? text.length;
      const end = origin[from + term.length] ?? text.length;
      for (let i = start; i < end; i += 1) marked[i] = 1;
      from = folded.indexOf(term, from + term.length);
    }
  }

  const segments: TextSegment[] = [];
  let start = 0;
  for (let i = 1; i <= text.length; i += 1) {
    if (i === text.length || marked[i] !== marked[start]) {
      segments.push({ text: text.slice(start, i), match: marked[start] === 1 });
      start = i;
    }
  }
  return segments;
}

/** Segments of a server highlight (`«Stack»Mod: bigger stacks`). */
export function serverHighlight(value: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const pattern = /«([^»]*)»/g;
  let last = 0;
  for (let found = pattern.exec(value); found; found = pattern.exec(value)) {
    if (found.index > last) segments.push({ text: value.slice(last, found.index), match: false });
    if (found[1]) segments.push({ text: found[1], match: true });
    last = found.index + found[0].length;
  }
  if (last < value.length) segments.push({ text: value.slice(last), match: false });
  return segments;
}
