/**
 * Fonts of the OG cards (PLAN §3.3, §8.6): Big Shoulders 800 for the display title and Martian Mono
 * for readouts, loaded from the self-hosted `@fontsource/*` packages as WOFF (satori reads TTF, OTF
 * and WOFF, not WOFF2). Every subset is its own family and the templates use family stacks, so
 * glyphs a subset lacks (Latin Extended, Vietnamese, Cyrillic) come from the next one.
 *
 * Loaded once per process (≈ 400 KB in memory).
 */
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import type { Font } from 'satori';

const require = createRequire(import.meta.url);

const DISPLAY_NAME = 'Big Shoulders';
const MONO_NAME = 'Martian Mono';
const DISPLAY_SUBSETS = ['latin', 'latin-ext', 'vietnamese'] as const;
const MONO_SUBSETS = ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'] as const;

/** Each subset is registered as its own family (`Big Shoulders latin-ext`): satori walks a font-family list glyph by glyph, not the subsets of one family. */
function familyName(name: string, subset: string): string {
  return subset === 'latin' ? name : `${name} ${subset}`;
}

/** CSS font-family stacks for the templates: display first, then the mono subsets as fallback. */
export const MONO_FAMILY = MONO_SUBSETS.map((subset) => familyName(MONO_NAME, subset)).join(', ');
export const DISPLAY_FAMILY = [...DISPLAY_SUBSETS.map((subset) => familyName(DISPLAY_NAME, subset)), MONO_FAMILY].join(
  ', ',
);

interface FontFile {
  family: string;
  weight: 400 | 500 | 700 | 800;
  specifier: string;
}

const FONT_FILES: readonly FontFile[] = [
  ...DISPLAY_SUBSETS.map((subset) => ({
    family: familyName(DISPLAY_NAME, subset),
    weight: 800 as const,
    specifier: `@fontsource/big-shoulders/files/big-shoulders-${subset}-800-normal.woff`,
  })),
  ...MONO_SUBSETS.flatMap((subset) =>
    ([400, 700] as const).map((weight) => ({
      family: familyName(MONO_NAME, subset),
      weight,
      specifier: `@fontsource/martian-mono/files/martian-mono-${subset}-${weight}-normal.woff`,
    })),
  ),
];

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
  loading ??= Promise.all(
    FONT_FILES.map(async (file) => ({
      name: file.family,
      weight: file.weight,
      style: 'normal' as const,
      data: await readFile(require.resolve(file.specifier)),
    })),
  ).catch((error: unknown) => {
    loading = undefined;
    throw error;
  });
  return loading;
}
