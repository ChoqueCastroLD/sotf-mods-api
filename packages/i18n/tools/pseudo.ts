/**
 * Pseudo-localization (PLAN §7.11: `pnpm i18n:pseudo`).
 *
 * Rewrites the messages of one locale (English by default) so that, rendered in the real UI:
 * - every translated string is visibly bracketed `⟦…⟧`: text *without* brackets is hard-coded;
 * - Latin letters get diacritics (`Ŝéàŕçĥ`), exposing encoding and font-fallback problems;
 * - each message grows by ~35 % (the DE/RU expansion budget of §7.11), exposing truncation and
 *   overflow.
 * Arguments, plurals and selects are preserved, so pages keep working.
 */
import { type IcuNode, mapText, textContent } from './icu.ts';

const ACCENTED: Readonly<Record<string, string>> = {
  a: 'à',
  b: 'ƀ',
  c: 'ç',
  d: 'ð',
  e: 'é',
  f: 'ƒ',
  g: 'ĝ',
  h: 'ĥ',
  i: 'î',
  j: 'ĵ',
  k: 'ķ',
  l: 'ļ',
  m: 'ṁ',
  n: 'ñ',
  o: 'ö',
  p: 'þ',
  q: 'ǫ',
  r: 'ŕ',
  s: 'š',
  t: 'ţ',
  u: 'û',
  v: 'ṽ',
  w: 'ŵ',
  x: 'ẋ',
  y: 'ý',
  z: 'ž',
  A: 'Å',
  B: 'Ɓ',
  C: 'Ç',
  D: 'Ð',
  E: 'É',
  F: 'Ƒ',
  G: 'Ĝ',
  H: 'Ĥ',
  I: 'Î',
  J: 'Ĵ',
  K: 'Ķ',
  L: 'Ļ',
  M: 'Ṁ',
  N: 'Ñ',
  O: 'Ö',
  P: 'Þ',
  Q: 'Ǫ',
  R: 'Ŕ',
  S: 'Š',
  T: 'Ţ',
  U: 'Û',
  V: 'Ṽ',
  W: 'Ŵ',
  X: 'Ẋ',
  Y: 'Ý',
  Z: 'Ž',
};

export const PSEUDO_OPEN = '⟦';
export const PSEUDO_CLOSE = '⟧';
export const DEFAULT_EXPANSION = 0.35;

export function accent(text: string): string {
  return text.replace(/[A-Za-z]/g, (char) => ACCENTED[char] ?? char);
}

/** Pseudo-localizes one message; `expansion` is the fraction of extra length (0.35 = +35 %). */
export function pseudoLocalize(nodes: readonly IcuNode[], expansion = DEFAULT_EXPANSION): IcuNode[] {
  const length = [...textContent(nodes)].length;
  const padding = Math.max(1, Math.round(length * expansion));
  // Words of filler keep the extra length breakable, like real long translations.
  const filler = Array.from({ length: padding }, (_, index) => ((index + 1) % 6 === 0 ? ' ' : '·'))
    .join('')
    .trimEnd();
  return [
    { type: 'text', value: PSEUDO_OPEN },
    ...mapText(nodes, accent),
    { type: 'text', value: ` ${filler}${PSEUDO_CLOSE}` },
  ];
}
