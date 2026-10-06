/**
 * Initials in the UI face (Onest Bold), as outlines when possible so avatars and covers render the
 * same everywhere (inline, `<img>`, OG rasterisation, e-mail) without loading a font.
 */

import { CAP_UNITS, INITIAL_GLYPHS, type OutlinedText } from './generated/brand-data.gen.ts';
import { attrs, escapeXml, fmt } from './svg.ts';

/** Font stack used when a character has no outline (non-Latin scripts). */
export const DISPLAY_FONT_STACK = "'Onest Variable',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";

/** Onest cap height / em (708 / 1000). */
const CAP_RATIO = 0.71;

/** A grapheme that starts with a letter or a number (combining marks may follow). */
const LETTER_OR_NUMBER = /^[\p{L}\p{N}]/u;
const WORD_SEPARATOR = /[\s._\-/|:+]+/u;
const GRAPHEMES = new Intl.Segmenter('und', { granularity: 'grapheme' });

/**
 * User-perceived characters of `text` after NFC normalisation, so a decomposed «É» (E + U+0301)
 * counts as one character and is never split from its accent.
 */
export function graphemes(text: string): string[] {
  return Array.from(GRAPHEMES.segment(text.normalize('NFC')), (part) => part.segment);
}

/**
 * Upper-cases one initial without changing how many characters it takes: when the upper case
 * expands (German «ß» → «SS», ligatures such as «ﬁ» → «FI») the original character is kept.
 */
export function upperInitial(grapheme: string): string {
  const upper = grapheme.toUpperCase();
  return graphemes(upper).length === 1 ? upper : grapheme;
}

/**
 * Up to `max` initials from a display name or handle: first letters of the first words
 * («Toni M.» → «TM», «shoko_cc» → «SC»), camel-case humps («RedLoader» → «RL») or the
 * first letters of a single word («kelvin» → «KE»). Returns `?` when nothing usable.
 * The result never has more than `max` user-perceived characters.
 */
export function initialsFrom(name: string, max = 2): string {
  const limit = Math.max(1, Math.floor(max));
  const words = name
    .normalize('NFC')
    .split(WORD_SEPARATOR)
    .map((word) => graphemes(word).filter((char) => LETTER_OR_NUMBER.test(char)))
    .filter((chars) => chars.length > 0);
  if (words.length === 0) {
    return '?';
  }
  let picked: string[];
  if (words.length > 1) {
    picked = words.map((chars) => chars[0] as string);
  } else {
    const chars = words[0] as string[];
    const humps = chars.filter(
      (char, index) => index > 0 && char !== char.toLowerCase() && char === char.toUpperCase(),
    );
    picked = humps.length > 0 ? [chars[0] as string, ...humps] : chars;
  }
  return picked.slice(0, limit).map(upperInitial).join('');
}

export interface InitialsOptions {
  /** Anchor x (centre of the ink for `middle`, left edge of the ink for `start`). */
  readonly x: number;
  /** Baseline y. */
  readonly y: number;
  /** Cap height in user units. */
  readonly capHeight: number;
  readonly anchor?: 'start' | 'middle';
  readonly fill: string;
  /** Extra space between glyphs, as a fraction of the cap height. Default 0.04. */
  readonly tracking?: number;
  readonly opacity?: number;
}

/** True when every character of `text` has a built-in outline. */
export function hasOutlines(text: string): boolean {
  return Array.from(text).every((char) => Object.hasOwn(INITIAL_GLYPHS, char));
}

/**
 * SVG element(s) drawing `text` in the UI face: outlines for A–Z / 0–9, otherwise a
 * `<text>` element with the UI font stack.
 */
export function initialsElement(text: string, options: InitialsOptions): string {
  const anchor = options.anchor ?? 'middle';
  const opacity = options.opacity === undefined ? undefined : fmt(options.opacity, 3);
  if (text.length > 0 && hasOutlines(text)) {
    const scale = options.capHeight / CAP_UNITS;
    const tracking = (options.tracking ?? 0.04) * CAP_UNITS;
    const glyphs = Array.from(text).map((char) => INITIAL_GLYPHS[char] as OutlinedText);
    let pen = 0;
    const placed: Array<{ glyph: OutlinedText; x: number }> = [];
    glyphs.forEach((glyph, index) => {
      placed.push({ glyph, x: pen });
      pen += glyph.advance + (index < glyphs.length - 1 ? tracking : 0);
    });
    const first = placed[0] as { glyph: OutlinedText; x: number };
    const last = placed[placed.length - 1] as { glyph: OutlinedText; x: number };
    const inkLeft = first.x + first.glyph.x1;
    const inkRight = last.x + last.glyph.x2;
    const offset = anchor === 'middle' ? -(inkLeft + inkRight) / 2 : -inkLeft;
    const paths = placed
      .map(({ glyph, x }) => {
        const dx = x + offset;
        return `<path${attrs({ transform: dx === 0 ? undefined : `translate(${fmt(dx, 2)} 0)`, d: glyph.d })}/>`;
      })
      .join('');
    return `<g${attrs({
      transform: `translate(${fmt(options.x, 2)} ${fmt(options.y, 2)}) scale(${fmt(scale, 4)})`,
      fill: options.fill,
      opacity,
    })}>${paths}</g>`;
  }
  const fontSize = options.capHeight / CAP_RATIO;
  return `<text${attrs({
    x: fmt(options.x, 2),
    y: fmt(options.y, 2),
    fill: options.fill,
    opacity,
    'font-family': DISPLAY_FONT_STACK,
    'font-weight': 700,
    'font-size': fmt(fontSize, 2),
    'text-anchor': anchor,
  })}>${escapeXml(text)}</text>`;
}
