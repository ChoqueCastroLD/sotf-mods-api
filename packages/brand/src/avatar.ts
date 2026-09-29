/**
 * Default avatars (PLAN §3.6): a GPS waypoint reticle with two initials, ringed in a colour
 * derived from the user id. < 1 KB, deterministic, no font needed for Latin initials.
 */

import { type BrandTheme, chartSlots, palette } from './colors.ts';
import { graphemes, hasOutlines, initialsElement, initialsFrom } from './initials.ts';
import { hashSeed, type Seed } from './random.ts';
import { svgRoot } from './svg.ts';

/** Scripts whose characters are roughly square (CJK): one initial fits the reticle. */
const WIDE_SCRIPT = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;

export interface AvatarOptions {
  /** Rendered size in px. Omit for a fluid SVG (size it with CSS). */
  readonly size?: number;
  /** Surface the avatar is designed for. Default `night`. */
  readonly theme?: BrandTheme;
  /** Accessible name (e.g. the display name). Omit when a visible name sits next to it. */
  readonly title?: string;
  readonly className?: string;
}

/** Ring colour for an id: one of the eight validated chart slots. */
export function avatarColor(id: Seed, theme: BrandTheme = 'night'): string {
  const slots = chartSlots[theme];
  return slots[hashSeed(`avatar:${typeof id === 'number' ? String(id) : id}`) % slots.length] as string;
}

/** Default avatar for a user: `name` gives the initials, `id` the colour. */
export function avatarSvg(name: string, id: Seed, options: AvatarOptions = {}): string {
  const theme = options.theme ?? 'night';
  const ring = avatarColor(id, theme);
  const background = theme === 'night' ? palette.night[900] : palette.night[25];
  const ink = theme === 'night' ? palette.night[50] : palette.night[950];
  let initials = initialsFrom(name, 2);
  let capHeight = 19;
  if (!hasOutlines(initials)) {
    // System-font fallback: wide scripts get one character, others a slightly smaller size.
    capHeight = 16;
    if (WIDE_SCRIPT.test(initials)) {
      initials = graphemes(initials)[0] ?? initials;
      capHeight = 20;
    }
  }
  const body =
    `<circle cx="32" cy="32" r="32" fill="${background}"/>` +
    `<circle cx="32" cy="32" r="27.5" fill="none" stroke="${ring}" stroke-width="3"/>` +
    // Waypoint reticle: four ticks on the ring.
    `<path d="M32 1.5v7M32 55.5v7M1.5 32h7M55.5 32h7" stroke="${ring}" stroke-width="3" stroke-linecap="round"/>` +
    initialsElement(initials, { x: 32, y: 32 + capHeight / 2, capHeight, fill: ink, anchor: 'middle' });
  return svgRoot(
    {
      viewBox: [0, 0, 64, 64],
      width: options.size,
      height: options.size,
      title: options.title,
      className: options.className,
    },
    body,
  );
}
