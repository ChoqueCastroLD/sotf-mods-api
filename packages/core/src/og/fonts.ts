/**
 * Fonts of the OG cards: Onest (400 and 700), the same family as the site. Static instances cut from
 * the Onest variable font (SIL OFL 1.1) are embedded as base64 WOFF in `./fonts/onest.gen.ts` (satori
 * reads TTF, OTF and WOFF, not WOFF2; embedding keeps the bundled worker free of font files). Every subset is its own family and the templates use a family stack, so glyphs a
 * subset lacks (Latin Extended, Vietnamese, Cyrillic) come from the next one.
 *
 * Loaded once per process (about 130 KB in memory).
 */
import type { Font } from 'satori';
import { ONEST_WOFF } from './fonts/onest.gen.ts';

const NAME = 'Onest';
const SUBSETS = ['latin', 'latin-ext', 'vietnamese', 'cyrillic', 'cyrillic-ext'] as const;

/** Each subset is registered as its own family (`Onest latin-ext`): satori walks a font-family list glyph by glyph, not the subsets of one family. */
function familyName(subset: string): string {
  return subset === 'latin' ? NAME : `${NAME} ${subset}`;
}

/** CSS font-family stack of the templates. */
export const SANS_FAMILY = SUBSETS.map(familyName).join(', ');

/**
 * Characters the registered subsets can draw: Basic Latin, Latin-1, Latin Extended A/B and
 * Additional, Vietnamese, Cyrillic (+ supplement/extended) and common punctuation.
 */
const SUPPORTED_RANGES: ReadonlyArray<readonly [number, number]> = [
  [0x0020, 0x024f],
  [0x0300, 0x036f],
  [0x0400, 0x052f],
  [0x1e00, 0x1eff],
  [0x2000, 0x206f],
  [0x20a0, 0x20bf],
  [0x2de0, 0x2dff],
  [0xa640, 0xa69f],
];

function isSupported(char: string): boolean {
  const code = char.codePointAt(0) ?? 0;
  return SUPPORTED_RANGES.some(([from, to]) => code >= from && code <= to);
}

/** Drops characters no registered font can draw (CJK, emoji…) and collapses the whitespace left. */
export function drawableText(text: string): string {
  let out = '';
  for (const char of text.normalize('NFC')) out += isSupported(char) ? char : ' ';
  return out.replace(/\s+/g, ' ').trim();
}

let loading: Promise<Font[]> | undefined;

/** The satori font list (cached). */
export function ogFonts(): Promise<Font[]> {
  loading ??= Promise.resolve(
    ONEST_WOFF.map((file) => ({
      name: familyName(file.subset),
      weight: file.weight,
      style: 'normal' as const,
      data: Buffer.from(file.base64, 'base64'),
    })),
  );
  return loading;
}
