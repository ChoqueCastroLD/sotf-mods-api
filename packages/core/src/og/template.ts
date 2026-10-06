/**
 * The OG card layout: 1200 x 630, the page background (dark neutral), the red SOTF-MODS logo, a
 * kicker, the title, the author and a line of stats. No artwork.
 *
 * Two layers, composited by `render.ts`:
 * - `backgroundSvg(card)`: a flat background;
 * - `foregroundTree(card)`: a satori element tree (text is converted to paths by satori, so the
 *   rasterizer needs no fonts).
 *
 * Deterministic: the same card input always yields the same image (the hash of the input names
 * the stored object).
 */
import { LOGO_WORDMARK_DATA_URI, LOGO_WORDMARK_SIZE, OG_HEIGHT, OG_WIDTH, palette } from '@sotf/brand';
import { drawableText, SANS_FAMILY } from './fonts.ts';

export { OG_HEIGHT, OG_WIDTH };

/** Bump when the layout changes: every card gets a new hash (and a new object) on its next render. */
export const OG_TEMPLATE_VERSION = 2;

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
  /** Stable per entity (kept for the card hash). */
  seed: string;
  /** Short label above the title: «Mod · Quality of life». Shown as written. */
  kicker: string;
  title: string;
  /** Fallback title when nothing of `title` is drawable (e.g. a CJK name → the slug). */
  fallbackTitle: string;
  /** «by ImAxel» / «@imaxel». */
  byline: string | null;
  stats: OgStat[];
  /** Former edge colour (`logColor` of the mod), `#RRGGBB`. No longer drawn; kept for the card hash. */
  accent: string | null;
  /**
   * Public media URLs laid out as a knolling collage on the right (kits, PLAN §7.8: the custom
   * cover alone, or up to {@link OG_COLLAGE_MAX} item thumbnails). Absent on other cards.
   */
  images?: string[];
}

/** Most tiles of a collage (the kit card's `previewThumbnails`). */
export const OG_COLLAGE_MAX = 6;

export interface OgRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** Area of the collage: the right column, clear of the header and the footer readouts. */
const COLLAGE_BOX: OgRect = { left: 652, top: 104, width: 460, height: 408 };
const COLLAGE_GAP = 16;
/** Tile frame (drawn over each image by the foreground). */
export const OG_TILE_BORDER = 2;

/**
 * Knolling grid of `count` tiles (16:9, right angles, even gaps): one tile fills the box width;
 * more go in two columns and up to three rows, vertically centred, an odd last tile centred.
 */
export function collageSlots(count: number): OgRect[] {
  const n = Math.max(0, Math.min(OG_COLLAGE_MAX, Math.floor(count)));
  if (n === 0) return [];
  const cols = n === 1 ? 1 : 2;
  const rows = Math.ceil(n / cols);
  const width = Math.floor((COLLAGE_BOX.width - COLLAGE_GAP * (cols - 1)) / cols);
  const height = Math.round((width * 9) / 16);
  const gridHeight = rows * height + (rows - 1) * COLLAGE_GAP;
  const top0 = COLLAGE_BOX.top + Math.max(0, Math.round((COLLAGE_BOX.height - gridHeight) / 2));
  const slots: OgRect[] = [];
  for (let index = 0; index < n; index++) {
    const row = Math.floor(index / cols);
    const inRow = Math.min(cols, n - row * cols);
    const rowWidth = inRow * width + (inRow - 1) * COLLAGE_GAP;
    const left0 = COLLAGE_BOX.left + Math.round((COLLAGE_BOX.width - rowWidth) / 2);
    slots.push({
      left: left0 + (index % cols) * (width + COLLAGE_GAP),
      top: top0 + row * (height + COLLAGE_GAP),
      width,
      height,
    });
  }
  return slots;
}

const BACKGROUND = palette.night[950];
const INK = palette.night[100];
const MUTED = palette.night[400];
const FAINT = palette.night[500];
const RED = palette.flare[500];
const TONE_COLOR: Readonly<Record<OgStatTone, string>> = {
  plain: palette.night[100],
  good: palette.lichen[300],
  bad: palette.blood[400],
};

const PAD_X = 80;

/** Background layer: the flat page background (the collage tiles and the foreground go on top). */
export function backgroundSvg(_card: OgCard, _options: { collage?: boolean } = {}): string {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">` +
    `<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${BACKGROUND}"/>` +
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
  if (length <= 16) return 84;
  if (length <= 26) return 72;
  if (length <= 40) return 60;
  if (length <= 60) return 50;
  return 42;
}

/** Shortens to `max` graphemes on a word boundary, with an ellipsis. */
export function clip(text: string, max: number): string {
  const chars = [...text];
  if (chars.length <= max) return text;
  const cut = chars.slice(0, max - 1).join('');
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

/**
 * @param tiles slots actually filled with an image (the renderer drops thumbnails it could not
 *   load); each gets a frame so the collage reads as laid-out objects.
 */
export function foregroundTree(card: OgCard, tiles: readonly OgRect[] = []): OgNode {
  const collage = tiles.length > 0;
  const drawn = drawableText(card.title);
  const title = clip(drawn.length >= 2 ? drawn : drawableText(card.fallbackTitle) || 'SOTF Mods', 80);
  const kicker = clip(drawableText(card.kicker), 48);
  const byline = card.byline ? clip(drawableText(card.byline), 48) : '';

  const stats: OgNode[] = [];
  card.stats.forEach((stat, index) => {
    if (index > 0) stats.push(el('div', { color: FAINT, margin: '0 20px', display: 'flex' }, '·'));
    const color = TONE_COLOR[stat.tone ?? 'plain'];
    const children: OgNode[] = [];
    if (stat.icon) children.push(iconOf(stat.icon, color));
    children.push(el('div', { display: 'flex' }, clip(drawableText(stat.text), 36)));
    stats.push(el('div', { display: 'flex', alignItems: 'center', color }, children));
  });

  const titleFontSize = Math.round(titleSize(title) * (collage ? 0.72 : 1));
  const frames: OgNode[] = tiles.map((tile) =>
    el('div', {
      position: 'absolute',
      left: tile.left,
      top: tile.top,
      width: tile.width,
      height: tile.height,
      border: `${OG_TILE_BORDER}px solid ${palette.night[700]}`,
      borderRadius: 6,
      display: 'flex',
    }),
  );

  const logoHeight = 48;
  return el(
    'div',
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `60px ${PAD_X}px 60px ${PAD_X}px`,
      fontFamily: SANS_FAMILY,
      color: INK,
    },
    [
      // Header: the logo.
      el('div', { display: 'flex', alignItems: 'center' }, [
        {
          type: 'img',
          props: {
            src: LOGO_WORDMARK_DATA_URI,
            width: Math.round((LOGO_WORDMARK_SIZE.width / LOGO_WORDMARK_SIZE.height) * logoHeight),
            height: logoHeight,
          },
        },
      ]),
      // Body: red rule, kicker, title, byline.
      el('div', { display: 'flex', flexDirection: 'column', maxWidth: collage ? 520 : 960 }, [
        el('div', { display: 'flex', width: 56, height: 4, backgroundColor: RED, marginBottom: 24 }),
        ...(kicker
          ? [el('div', { display: 'flex', fontSize: 26, fontWeight: 400, color: MUTED, marginBottom: 14 }, kicker)]
          : []),
        el(
          'div',
          {
            display: 'block',
            fontWeight: 700,
            fontSize: titleFontSize,
            lineHeight: 1.12,
            letterSpacing: -1,
            color: INK,
            lineClamp: 2,
          },
          title,
        ),
        ...(byline ? [el('div', { display: 'flex', fontSize: 28, color: MUTED, marginTop: 22 }, byline)] : []),
      ]),
      // Footer: stats and domain.
      el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
        el('div', { display: 'flex', alignItems: 'center', fontSize: 28, fontWeight: 700 }, stats),
        el('div', { display: 'flex', fontSize: 22, color: FAINT }, 'sotf-mods.com'),
      ]),
      ...frames,
    ],
  );
}
