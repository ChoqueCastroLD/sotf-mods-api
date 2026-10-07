/**
 * Motif: a deterministic, programmatic background pattern (no raster art). A seed picks the layout
 * of a tileable square of low-poly pine silhouettes and small tick marks; the same seed gives the
 * same bytes on the server and in the browser.
 *
 * The pattern is split in two single-colour layers (`neutral` and `accent`, a few trees in red) and
 * each is meant to be used as a CSS `mask-image`: the page paints the shapes with its own theme
 * colours (`.motif` utility in tokens.css), so the motif follows dark/light/system with no extra
 * work and stays at 4 to 12 % opacity. Each layer is one `<path>` of 1 to 4 KB.
 *
 * Pure module (no React, no DOM): usable from Astro frontmatter, React and tests.
 */
import { createRng, type Seed } from '@sotf/brand/random';

export type MotifTone = 'quiet' | 'neutral' | 'strong';
export type MotifDensity = 'sparse' | 'normal' | 'dense';
/** Where the pattern fades out (it stays visible on the opposite side). */
export type MotifFade = 'none' | 'bottom' | 'top' | 'edges';

export interface MotifOptions {
  /** Any string or number; the same seed always gives the same pattern. Default `sotf`. */
  seed?: Seed;
  /** Trees per tile: sparse 16, normal 36, dense 64 cells. Default `normal`. */
  density?: MotifDensity;
  /** Tile edge in CSS px. Default 360. */
  size?: number;
}

export interface MotifLayers {
  /** Edge of the square tile, in px. */
  size: number;
  /** SVG document of the neutral shapes (black on transparent, for use as a mask). */
  neutral: string;
  /** SVG document of the red accent shapes. */
  accent: string;
}

const TILE = 360;
const CELLS: Record<MotifDensity, number> = { sparse: 4, normal: 6, dense: 8 };
const TREE_CHANCE: Record<MotifDensity, number> = { sparse: 0.62, normal: 0.6, dense: 0.58 };

const round = (value: number): number => Math.round(value * 10) / 10;

/** Right half of the pine outline: x as a fraction of the half width, y of the height. */
const PINE: readonly (readonly [number, number])[] = [
  [0.62, 0.38],
  [0.34, 0.38],
  [0.82, 0.68],
  [0.5, 0.68],
  [1, 0.92],
  [0.14, 0.92],
  [0.14, 1],
];

/** A three-tier pine as one closed polygon, `w` wide and `h` tall, tip at (cx, top). */
function pine(cx: number, top: number, w: number, h: number): string {
  const half = w / 2;
  const right = PINE.map(([x, y]): [number, number] => [x * half, y * h]);
  const left = PINE.map(([x, y]): [number, number] => [-x * half, y * h]).reverse();
  const outline: [number, number][] = [[0, 0], ...right, ...left];
  // One M, then implicit line-tos: the shortest valid form.
  return `M${outline.map(([x, y]) => `${round(cx + x)} ${round(top + y)}`).join(' ')}Z`;
}

/** A plus-shaped tick, 1.2 px thick. */
function tick(cx: number, cy: number, arm: number): string {
  const t = 0.6;
  return (
    `M${round(cx - arm)} ${round(cy - t)}h${round(arm * 2)}v${t * 2}h${round(-arm * 2)}z` +
    `M${round(cx - t)} ${round(cy - arm)}h${t * 2}v${round(arm * 2)}h${-t * 2}z`
  );
}

const svg = (path: string, size: number): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">` +
  (path ? `<path fill="#000" d="${path}"/>` : '') +
  '</svg>';

const cache = new Map<string, MotifLayers>();

/** The two mask layers of a seed. Memoised (a page uses a handful of seeds). */
export function motifLayers({ seed = 'sotf', density = 'normal', size = TILE }: MotifOptions = {}): MotifLayers {
  const key = `${String(seed)}|${density}|${size}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const rng = createRng(seed, `motif:${density}`);
  const cells = CELLS[density];
  const cell = size / cells;
  const neutral: string[] = [];
  const accent: string[] = [];
  const trees: { x: number; y: number; w: number; h: number }[] = [];

  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const roll = rng.next();
      const x0 = col * cell;
      const y0 = row * cell;
      if (roll < TREE_CHANCE[density]) {
        const h = cell * rng.range(0.52, 0.86);
        const w = h * rng.range(0.52, 0.66);
        const cx = x0 + w / 2 + 1 + rng.next() * Math.max(0, cell - w - 2);
        const top = y0 + 1 + rng.next() * Math.max(0, cell - h - 2);
        trees.push({ x: cx, y: top, w, h });
      } else if (roll < TREE_CHANCE[density] + 0.22) {
        const arm = rng.range(2.5, 4);
        const cx = x0 + arm + 1 + rng.next() * Math.max(0, cell - arm * 2 - 2);
        const cy = y0 + arm + 1 + rng.next() * Math.max(0, cell - arm * 2 - 2);
        neutral.push(tick(cx, cy, arm));
      }
    }
  }
  // A few red trees: about one in nine, never fewer than one.
  const accentCount = Math.max(1, Math.round(trees.length / 9));
  const accentIdx = new Set<number>();
  while (accentIdx.size < Math.min(accentCount, trees.length)) accentIdx.add(rng.int(0, trees.length - 1));
  trees.forEach((tree, index) => {
    (accentIdx.has(index) ? accent : neutral).push(pine(tree.x, tree.y, tree.w, tree.h));
  });

  const layers: MotifLayers = { size, neutral: svg(neutral.join(''), size), accent: svg(accent.join(''), size) };
  if (cache.size > 64) cache.clear();
  cache.set(key, layers);
  return layers;
}

/** `url("data:image/svg+xml,...")` of one layer, ready for a CSS value. */
export function motifUrl(svgDocument: string): string {
  // Spaces stay literal (valid inside a quoted url() and 3 bytes shorter than %20).
  return `url("data:image/svg+xml,${encodeURIComponent(svgDocument).replaceAll('%20', ' ')}")`;
}

/**
 * CSS custom properties that feed the `.motif` utility. Spread them in a `style` attribute:
 * `--motif-neutral`, `--motif-accent` (mask images) and `--motif-size`.
 */
export function motifVars(options: MotifOptions = {}): Record<string, string> {
  const layers = motifLayers(options);
  return {
    '--motif-neutral': motifUrl(layers.neutral),
    '--motif-accent': motifUrl(layers.accent),
    '--motif-size': `${layers.size}px`,
  };
}

/** The same variables as an inline `style` string (Astro and plain HTML). */
export function motifStyle(options: MotifOptions = {}): string {
  return Object.entries(motifVars(options))
    .map(([name, value]) => `${name}:${value}`)
    .join(';');
}
