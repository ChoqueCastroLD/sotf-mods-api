/**
 * Generates `src/generated/brand-data.gen.ts`: every piece of geometry that is derived from
 * fonts or heavy math at build time, so runtime code only concatenates strings.
 *
 * - Knock-out holes of the full and simplified isotype (src/mark-geometry.ts).
 * - The «SOTF» / «MODS» wordmark in Big Shoulders Stencil 800, converted to outlines.
 * - Big Shoulders 800 outlines of A–Z and 0–9 for font-independent initials (avatars, covers).
 * - Martian Mono outlines for the readouts of the default OG image.
 *
 * Fonts are pinned devDependencies (OFL-1.1). The OFL allows embedding glyph outlines in
 * artwork such as logos; no font software is redistributed.
 */

import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import opentype, { type Font, type Glyph, type Path } from 'opentype.js';
import { FULL_MARK, fullMarkHoles, SIMPLE_MARK, simpleMarkHoles } from '../../src/mark-geometry.ts';
import { PathWriter } from '../../src/svg.ts';

const require = createRequire(import.meta.url);

export const FONT_FILES = {
  stencil: '@fontsource/big-shoulders-stencil/files/big-shoulders-stencil-latin-800-normal.woff',
  display: '@fontsource/big-shoulders/files/big-shoulders-latin-800-normal.woff',
  mono: '@fontsource/martian-mono/files/martian-mono-latin-500-normal.woff',
} as const;

/** All outlines are normalised so that the font's cap height equals this many units. */
export const CAP_UNITS = 100;

/** Wordmark tracking: +1 u at the 46 u cap height of the horizontal lockup (PLAN §3.2). */
export const WORDMARK_TRACKING = (1 / 46) * CAP_UNITS;

function loadFont(specifier: string): Font {
  const file = readFileSync(require.resolve(specifier));
  return opentype.parse(file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength));
}

interface SetText {
  readonly d: string;
  /** Pen advance including tracking after every glyph but the last. */
  readonly advance: number;
  /** Tight ink bounds (baseline at y = 0, caps reach y ≈ −100). */
  readonly x1: number;
  readonly x2: number;
  readonly y1: number;
  readonly y2: number;
}

function writePath(writer: PathWriter, path: Path): void {
  for (const command of path.commands) {
    switch (command.type) {
      case 'M':
        writer.moveTo(command.x as number, command.y as number);
        break;
      case 'L':
        writer.lineTo(command.x as number, command.y as number);
        break;
      case 'Q':
        writer.quadTo(command.x1 as number, command.y1 as number, command.x as number, command.y as number);
        break;
      case 'C':
        writer.cubicTo(
          command.x1 as number,
          command.y1 as number,
          command.x2 as number,
          command.y2 as number,
          command.x as number,
          command.y as number,
        );
        break;
      case 'Z':
        writer.close();
        break;
      default:
        throw new Error(`Unsupported path command ${(command as { type: string }).type}`);
    }
  }
}

function setText(font: Font, text: string, tracking = 0, precision = 1): SetText {
  const fontSize = (CAP_UNITS * font.unitsPerEm) / font.tables.os2.sCapHeight;
  const scale = fontSize / font.unitsPerEm;
  const writer = new PathWriter(precision);
  let x = 0;
  let x1 = Number.POSITIVE_INFINITY;
  let x2 = Number.NEGATIVE_INFINITY;
  let y1 = Number.POSITIVE_INFINITY;
  let y2 = Number.NEGATIVE_INFINITY;
  let previous: Glyph | null = null;
  const chars = [...text];
  chars.forEach((char, index) => {
    if (!font.hasChar(char)) {
      throw new Error(`Font has no glyph for "${char}"`);
    }
    const glyph = font.charToGlyph(char);
    if (previous) {
      x += font.getKerningValue(previous, glyph) * scale;
    }
    const path = glyph.getPath(x, 0, fontSize);
    if (path.commands.length > 0) {
      writePath(writer, path);
      const box = path.getBoundingBox();
      x1 = Math.min(x1, box.x1);
      x2 = Math.max(x2, box.x2);
      y1 = Math.min(y1, box.y1);
      y2 = Math.max(y2, box.y2);
    }
    x += (glyph.advanceWidth ?? 0) * scale + (index < chars.length - 1 ? tracking : 0);
    previous = glyph;
  });
  const round = (value: number): number => Math.round(value * 100) / 100;
  return { d: writer.toString(), advance: round(x), x1: round(x1), x2: round(x2), y1: round(y1), y2: round(y2) };
}

const INITIAL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function literal(value: unknown): string {
  return JSON.stringify(value, null, 2).replace(/"([A-Za-z_][A-Za-z0-9_]*)":/g, '$1:');
}

/** Returns the TypeScript source of `src/generated/brand-data.gen.ts`. */
export function generateBrandDataSource(): string {
  const stencil = loadFont(FONT_FILES.stencil);
  const display = loadFont(FONT_FILES.display);
  const mono = loadFont(FONT_FILES.mono);

  const wordmark = {
    sotf: setText(stencil, 'SOTF', WORDMARK_TRACKING),
    mods: setText(stencil, 'MODS', WORDMARK_TRACKING),
    tracking: Math.round(WORDMARK_TRACKING * 100) / 100,
    space:
      Math.round(((stencil.charToGlyph(' ').advanceWidth ?? 0) * CAP_UNITS * 100) / stencil.tables.os2.sCapHeight) /
      100,
  };

  const glyphs: Record<string, SetText> = {};
  for (const char of INITIAL_CHARS) {
    glyphs[char] = setText(display, char);
  }

  const readouts = {
    domain: setText(mono, 'SOTF-MODS.COM', 0, 1),
  };

  const header = [
    '// Generated by scripts/build-assets.ts (scripts/lib/sources.ts). Do not edit by hand.',
    '// Regenerate with `pnpm --filter @sotf/brand build:assets`.',
    '// Glyph outlines: Big Shoulders Stencil 800, Big Shoulders 800 and Martian Mono 500 (SIL OFL 1.1).',
    '',
    'export interface OutlinedText {',
    '  readonly d: string;',
    '  readonly advance: number;',
    '  readonly x1: number;',
    '  readonly x2: number;',
    '  readonly y1: number;',
    '  readonly y2: number;',
    '}',
    '',
  ].join('\n');

  return `${header}
/** Units of cap height every outline below is normalised to. */
export const CAP_UNITS = ${CAP_UNITS};

/** Knock-out holes of the full isotype (evenodd with the pin path). */
export const MARK_HOLES_FULL = ${JSON.stringify(fullMarkHoles(FULL_MARK))};

/** Knock-out holes of the simplified isotype for 16–24 px. */
export const MARK_HOLES_SIMPLE = ${JSON.stringify(simpleMarkHoles(SIMPLE_MARK))};

/** «SOTF» and «MODS» in Big Shoulders Stencil 800 with +1 u tracking, baseline at y = 0. */
export const WORDMARK: {
  readonly sotf: OutlinedText;
  readonly mods: OutlinedText;
  /** Letter spacing applied between glyphs, in cap units. */
  readonly tracking: number;
  /** Advance of the word space, in cap units. */
  readonly space: number;
} = ${literal(wordmark)};

/** Big Shoulders 800 capitals and digits for initials, baseline at y = 0. */
export const INITIAL_GLYPHS: Readonly<Record<string, OutlinedText>> = ${literal(glyphs)};

/** Martian Mono readouts used by the default OG image. */
export const READOUTS: { readonly domain: OutlinedText } = ${literal(readouts)};
`;
}
