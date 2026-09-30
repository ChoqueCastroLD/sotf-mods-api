/**
 * The OG card layout (PLAN §8.6 «OG por entidad»): 1200 × 630, Night background with a seeded
 * topography, the isotype, a kicker, the display title, the author and a readout line
 * («↓ 48.2K · ★ 4.8 · Works on 1.0.x»), plus the `logColor` edge on the left.
 *
 * Two layers, composited by `render.ts`:
 * - `backgroundSvg(card)`: pure SVG from `@sotf/brand` (terrain, edge, waypoint);
 * - `foregroundTree(card)`: a satori element tree (text is converted to paths by satori, so the
 *   rasterizer needs no fonts).
 *
 * Deterministic: the same card input always yields the same image (the hash of the input names
 * the stored object).
 */
import { markPathData, normalizeHex, OG_HEIGHT, OG_WIDTH, palette, topoGroup, topoLines } from '@sotf/brand';
import { DISPLAY_FAMILY, drawableText, MONO_FAMILY } from './fonts.ts';

export { OG_HEIGHT, OG_WIDTH };

/** Bump when the layout changes: every card gets a new hash (and a new object) on its next render. */
export const OG_TEMPLATE_VERSION = 1;

export type OgStatTone = 'plain' | 'good' | 'bad';

export interface OgStat {
  icon?: 'download' | 'star' | 'check' | 'cross' | 'box' | 'users';
  text: string;
  tone?: OgStatTone;
}

/** Everything a card shows (English: one image per entity, shared by every locale). */
export interface OgCard {
  /** `mod`, `build`, … (also seeds the terrain with `seed`). */
  type: string;
  /** Terrain seed (stable per entity). */
  seed: string;
  /** Upper-case kicker: «MOD · QUALITY OF LIFE». */
  kicker: string;
  title: string;
  /** Fallback title when nothing of `title` is drawable (e.g. a CJK name → the slug). */
  fallbackTitle: string;
  /** «by ImAxel» / «@imaxel». */
  byline: string | null;
  stats: OgStat[];
  /** Edge colour (`logColor` of the mod), `#RRGGBB`. */
  accent: string | null;
}

const NIGHT_BG = palette.night[975];
const INK = palette.night[25];
const MUTED = palette.night[300];
const FAINT = palette.night[500];
const FLARE = palette.flare[400];
const TONE_COLOR: Readonly<Record<OgStatTone, string>> = {
  plain: palette.night[100],
  good: palette.lichen[300],
  bad: palette.blood[400],
};

const EDGE_WIDTH = 14;
const CYRILLIC = /[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/u;
const PAD_X = 88;

export function accentOf(card: OgCard): string {
  return normalizeHex(card.accent) ?? FLARE;
}

/** Background layer: Night, seeded terrain, waypoint on the summit and the accent edge. */
export function backgroundSvg(card: OgCard): string {
  const lines = topoLines(`og:${card.seed}`, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    levels: 14,
    peaks: 3,
    roughness: 0.45,
    step: OG_HEIGHT / 40,
    precision: 1,
    summitRegion: [0.62, 0.2, 0.9, 0.62],
  });
  const accent = accentOf(card);
  const { x, y } = lines.summit;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">` +
    `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${NIGHT_BG}"/>` +
    topoGroup(lines, { color: palette.night[800], strokeWidth: 1.5, indexStrokeWidth: 2.5 }) +
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="40" fill="none" stroke="${accent}" stroke-width="2" opacity=".2"/>` +
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="22" fill="none" stroke="${accent}" stroke-width="2.5" opacity=".45"/>` +
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8" fill="${accent}"/>` +
    // Left-to-right shade so the text column stays readable over the terrain.
    `<defs><linearGradient id="shade" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="${NIGHT_BG}" stop-opacity=".92"/><stop offset=".62" stop-color="${NIGHT_BG}" stop-opacity=".55"/><stop offset="1" stop-color="${NIGHT_BG}" stop-opacity="0"/></linearGradient></defs>` +
    `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#shade)"/>` +
    `<rect width="${EDGE_WIDTH}" height="${OG_HEIGHT}" fill="${accent}"/>` +
    '</svg>'
  );
}

// -----------------------------------------------------------------------------------------------
// Foreground (satori)
// -----------------------------------------------------------------------------------------------

/** Minimal satori node (the object form of JSX: `{ type, props }`). */
export interface OgNode {
  type: string;
  props: Record<string, unknown> & { children?: OgNode | string | Array<OgNode | string> };
}

function el(type: string, style: Record<string, unknown>, children?: OgNode['props']['children'], extra = {}): OgNode {
  return { type, props: { style, ...extra, ...(children === undefined ? {} : { children }) } };
}

function svgIcon(body: OgNode[], color: string, size = 30): OgNode {
  return {
    type: 'svg',
    props: {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      'stroke-width': 2.25,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      style: { marginRight: 10, flexShrink: 0 },
      children: body,
    },
  };
}

function path(d: string, extra: Record<string, unknown> = {}): OgNode {
  return { type: 'path', props: { d, ...extra } };
}

function iconOf(name: NonNullable<OgStat['icon']>, color: string): OgNode {
  switch (name) {
    case 'download':
      return svgIcon([path('M12 4v12'), path('M6 11l6 6 6-6'), path('M5 20h14')], color);
    case 'star':
      return svgIcon(
        [path('M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z', { fill: color })],
        color,
      );
    case 'check':
      return svgIcon([path('M4.5 12.5l4.5 4.5 10.5-10.5')], color);
    case 'cross':
      return svgIcon([path('M6 6l12 12'), path('M18 6L6 18')], color);
    case 'box':
      return svgIcon(
        [path('M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z'), path('M3.5 7.5L12 12l8.5-4.5'), path('M12 12v9')],
        color,
      );
    case 'users':
      return svgIcon(
        [
          path('M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19'),
          path('M10 10.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z'),
          path('M20 19v-1.5a3.5 3.5 0 0 0-2.5-3.35'),
          path('M15.5 4.2a3.25 3.25 0 0 1 0 6.1'),
        ],
        color,
      );
  }
}

/** Title size by length: long names step down so two lines always fit. */
export function titleSize(title: string): number {
  const length = [...title].length;
  if (length <= 16) return 112;
  if (length <= 26) return 96;
  if (length <= 40) return 80;
  if (length <= 60) return 66;
  return 56;
}

/** Shortens to `max` graphemes on a word boundary, with an ellipsis. */
export function clip(text: string, max: number): string {
  const chars = [...text];
  if (chars.length <= max) return text;
  const cut = chars.slice(0, max - 1).join('');
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

export function foregroundTree(card: OgCard): OgNode {
  const drawn = drawableText(card.title);
  const title = clip(drawn.length >= 2 ? drawn : drawableText(card.fallbackTitle) || 'SOTF Mods', 80);
  const kicker = clip(drawableText(card.kicker).toUpperCase(), 48);
  const byline = card.byline ? clip(drawableText(card.byline), 48) : '';
  const accent = accentOf(card);
  // Big Shoulders has no Cyrillic: such titles use Martian Mono (smaller, it is wider).
  const titleFont = CYRILLIC.test(title) ? MONO_FAMILY : DISPLAY_FAMILY;

  const stats: OgNode[] = [];
  card.stats.forEach((stat, index) => {
    if (index > 0) stats.push(el('div', { color: FAINT, margin: '0 22px', display: 'flex' }, '·'));
    const color = TONE_COLOR[stat.tone ?? 'plain'];
    const children: OgNode[] = [];
    if (stat.icon) children.push(iconOf(stat.icon, color));
    children.push(el('div', { display: 'flex' }, clip(drawableText(stat.text), 36)));
    stats.push(el('div', { display: 'flex', alignItems: 'center', color }, children));
  });

  return el(
    'div',
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `64px ${PAD_X}px 60px ${PAD_X + EDGE_WIDTH}px`,
      fontFamily: MONO_FAMILY,
      color: INK,
    },
    [
      // Header: isotype + wordmark readout.
      el('div', { display: 'flex', alignItems: 'center' }, [
        {
          type: 'svg',
          props: {
            width: 46,
            height: 46,
            viewBox: '0 0 64 64',
            style: { marginRight: 16 },
            children: [markSvgNode(accent)],
          },
        },
        el('div', { display: 'flex', fontSize: 22, fontWeight: 700, letterSpacing: 4, color: MUTED }, 'SOTF MODS'),
      ]),
      // Body: kicker, title, byline.
      el('div', { display: 'flex', flexDirection: 'column', maxWidth: 940 }, [
        el(
          'div',
          { display: 'flex', fontSize: 24, fontWeight: 700, letterSpacing: 3, color: accent, marginBottom: 14 },
          kicker,
        ),
        el(
          'div',
          {
            display: 'block',
            fontFamily: titleFont,
            fontWeight: titleFont === DISPLAY_FAMILY ? 800 : 700,
            fontSize: titleFont === DISPLAY_FAMILY ? titleSize(title) : Math.round(titleSize(title) * 0.62),
            lineHeight: titleFont === DISPLAY_FAMILY ? 0.95 : 1.15,
            color: INK,
            lineClamp: 2,
          },
          title,
        ),
        ...(byline ? [el('div', { display: 'flex', fontSize: 28, color: MUTED, marginTop: 22 }, byline)] : []),
      ]),
      // Footer: readouts + domain.
      el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
        el('div', { display: 'flex', alignItems: 'center', fontSize: 28, fontWeight: 700 }, stats),
        el('div', { display: 'flex', fontSize: 18, letterSpacing: 3, color: FAINT }, 'SOTF-MODS.COM'),
      ]),
    ],
  );
}

/** The isotype as a satori `<path>` node (geometry of `@sotf/brand`). */
function markSvgNode(color: string): OgNode {
  return { type: 'path', props: { d: markPathData('full'), fill: color, 'fill-rule': 'evenodd' } };
}
