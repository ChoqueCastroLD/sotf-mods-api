/**
 * Generative topography («la isla inventada»): deterministic contour maps from a seed.
 *
 * The terrain is a smooth height field (rational-falloff peaks + value noise) whose
 * iso-lines are traced with marching squares, simplified and emitted as Bézier curves.
 * The field only uses +, −, ×, ÷ and √ (all correctly rounded in IEEE-754), so a seed
 * renders the same map in every engine.
 */

import { isoLines, polylineLength, sampleGrid, simplifyClosed, simplifyOpen } from './contour.ts';
import { createRng, hashSeed, latticeHash, type Seed } from './random.ts';
import { attrs, escapeXml, fmt, PathWriter, type Point, smoothCurve, svgRoot } from './svg.ts';

export interface TopoOptions {
  /** Artboard width in user units. Default 1440. */
  readonly width?: number;
  /** Artboard height in user units. Default 720. */
  readonly height?: number;
  /** Number of contour levels between the lowest and highest point. Default 12. */
  readonly levels?: number;
  /** Number of hills. Default 3. */
  readonly peaks?: number;
  /** Amount of ridge/valley noise (0 = perfectly round hills). Default 0.4. */
  readonly roughness?: number;
  /** Sampling step in user units. Smaller = more detail and bytes. Default `min(w,h) / 36`. */
  readonly step?: number;
  /** Simplification tolerance in user units. Default `step * 0.4`. */
  readonly tolerance?: number;
  /** Every n-th level is an index contour (drawn heavier). 0 disables. Default 5. */
  readonly indexEvery?: number;
  /** Contours shorter than this (user units) are dropped. Default `step * 5`. */
  readonly minLength?: number;
  /** Decimals kept in the path data. Default 0. */
  readonly precision?: number;
  /**
   * 0 = contour levels evenly spaced in height (true topography, lines bunch on peaks);
   * 1 = levels at equal-area quantiles (lines spread evenly). Default 0.5.
   */
  readonly equalArea?: number;
  /**
   * Area searched for the summit, as fractions of the artboard `[x1, y1, x2, y2]`.
   * Default `[0.1, 0.15, 0.9, 0.85]`.
   */
  readonly summitRegion?: readonly [number, number, number, number];
}

export interface TopoLines {
  readonly width: number;
  readonly height: number;
  /** Path data of the regular contours (may be empty). */
  readonly regular: string;
  /** Path data of the index contours (may be empty). */
  readonly index: string;
  /** Number of emitted contour lines. */
  readonly count: number;
  /** Highest sampled point away from the edges (a natural spot for a waypoint). */
  readonly summit: Point;
}

interface Hill {
  readonly x: number;
  readonly y: number;
  readonly amplitude: number;
  /** Inverse squared radii along the hill's two axes. */
  readonly inverseMajor: number;
  readonly inverseMinor: number;
  /** Unit vector of the major axis. */
  readonly ux: number;
  readonly uy: number;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

/** Bilinear value noise on an integer lattice in [-0.5, 0.5]. */
function valueNoise(seed: number, x: number, y: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothstep(x - x0);
  const ty = smoothstep(y - y0);
  const a = latticeHash(seed, x0, y0);
  const b = latticeHash(seed, x0 + 1, y0);
  const c = latticeHash(seed, x0, y0 + 1);
  const d = latticeHash(seed, x0 + 1, y0 + 1);
  const top = a + (b - a) * tx;
  const bottom = c + (d - c) * tx;
  return top + (bottom - top) * ty - 0.5;
}

function resolve(options: TopoOptions) {
  const width = options.width ?? 1440;
  const height = options.height ?? 720;
  if (!(width > 0 && height > 0)) {
    throw new RangeError('Topography width and height must be positive');
  }
  const size = Math.min(width, height);
  const step = options.step ?? size / 36;
  const levels = Math.max(1, Math.round(options.levels ?? 12));
  const peaks = Math.max(1, Math.round(options.peaks ?? 3));
  return {
    width,
    height,
    size,
    step,
    levels,
    peaks,
    roughness: Math.max(0, options.roughness ?? 0.4),
    tolerance: options.tolerance ?? step * 0.4,
    indexEvery: Math.max(0, Math.round(options.indexEvery ?? 5)),
    minLength: options.minLength ?? step * 5,
    precision: Math.max(0, Math.min(3, Math.round(options.precision ?? 0))),
    equalArea: Math.max(0, Math.min(1, options.equalArea ?? 0.5)),
  };
}

/** Builds the height field for a seed. Exposed for tests and custom renderers. */
export function topoField(seed: Seed, options: TopoOptions = {}): (x: number, y: number) => number {
  const { width, height, size, peaks, roughness } = resolve(options);
  const rng = createRng(seed, 'topo');
  const noiseSeed = hashSeed(`${typeof seed === 'number' ? String(seed) : seed}:noise`);
  const hills: Hill[] = [];
  for (let i = 0; i < peaks; i += 1) {
    // Keep hills mostly on the artboard; allow a little bleed so edges feel continuous.
    const radius = size * rng.range(0.3, 0.62);
    const aspect = rng.range(0.55, 1);
    let vx = rng.range(-1, 1);
    let vy = rng.range(-1, 1);
    const length = Math.sqrt(vx * vx + vy * vy) || 1;
    vx /= length;
    vy /= length;
    const major = radius;
    const minor = radius * aspect;
    hills.push({
      x: width * rng.range(-0.05, 1.05),
      y: height * rng.range(-0.1, 1.1),
      amplitude: rng.range(0.6, 1),
      inverseMajor: 1 / (major * major),
      inverseMinor: 1 / (minor * minor),
      ux: vx,
      uy: vy,
    });
  }
  const coarse = size * 0.42;
  const fine = size * 0.19;
  return (x: number, y: number): number => {
    let value = 0;
    for (const hill of hills) {
      const dx = x - hill.x;
      const dy = y - hill.y;
      const along = dx * hill.ux + dy * hill.uy;
      const across = dy * hill.ux - dx * hill.uy;
      const q = along * along * hill.inverseMajor + across * across * hill.inverseMinor;
      const falloff = 1 + 2 * q;
      value += hill.amplitude / (falloff * falloff);
    }
    value += roughness * (0.3 * valueNoise(noiseSeed, x / coarse, y / coarse));
    value += roughness * (0.12 * valueNoise(noiseSeed ^ 0x5bd1e995, x / fine, y / fine));
    return value;
  };
}

/** Computes the contour path data for a seed. */
export function topoLines(seed: Seed, options: TopoOptions = {}): TopoLines {
  const resolved = resolve(options);
  const { width, height, step, levels, tolerance, indexEvery, minLength, precision, equalArea } = resolved;
  const field = topoField(seed, options);
  const margin = step * 2;
  const grid = sampleGrid(field, -margin, -margin, width + margin, height + margin, step);

  // Levels blend an even height spacing with an equal-area spacing (quantiles of the
  // visible heights), so lines neither bunch up on steep peaks nor vanish on plains.
  const heights = new Float64Array(grid.values.length);
  let visibleCount = 0;
  // The summit is searched away from the edges so a marker placed on it stays visible.
  let summit = { x: width / 2, y: height / 2 };
  let summitValue = Number.NEGATIVE_INFINITY;
  const [rx1, ry1, rx2, ry2] = options.summitRegion ?? [0.1, 0.15, 0.9, 0.85];
  for (let row = 0; row < grid.rows; row += 1) {
    const y = grid.originY + row * step;
    if (y < 0 || y > height) {
      continue;
    }
    for (let column = 0; column < grid.columns; column += 1) {
      const x = grid.originX + column * step;
      if (x >= 0 && x <= width) {
        const value = grid.values[row * grid.columns + column] as number;
        heights[visibleCount] = value;
        visibleCount += 1;
        const inset = x >= width * rx1 && x <= width * rx2 && y >= height * ry1 && y <= height * ry2;
        if (inset && value > summitValue) {
          summitValue = value;
          summit = { x, y };
        }
      }
    }
  }
  // Typed-array sort is numeric and allocation-free.
  const visible = heights.subarray(0, visibleCount).sort();
  const min = visible[0] as number;
  const max = visible[visible.length - 1] as number;
  const quantile = (q: number): number =>
    visible[Math.min(visible.length - 1, Math.floor(q * visible.length))] as number;

  const regular = new PathWriter(precision);
  const index = new PathWriter(precision);
  let count = 0;
  for (let level = 1; level <= levels; level += 1) {
    const fraction = level / (levels + 1);
    const threshold = (1 - equalArea) * (min + (max - min) * fraction) + equalArea * quantile(fraction);
    const writer = indexEvery > 0 && level % indexEvery === 0 ? index : regular;
    for (const line of isoLines(grid, threshold)) {
      if (polylineLength(line.points, line.closed) < minLength) {
        continue;
      }
      const simplified = line.closed ? simplifyClosed(line.points, tolerance) : simplifyOpen(line.points, tolerance);
      if (simplified.length < (line.closed ? 3 : 2)) {
        continue;
      }
      smoothCurve(writer, simplified, line.closed);
      count += 1;
    }
  }
  return { width, height, regular: regular.toString(), index: index.toString(), count, summit };
}

export interface TopoSvgOptions extends TopoOptions {
  /** Stroke colour. Default `currentColor` (tint it with CSS or use it as a mask). */
  readonly color?: string;
  /** Stroke width of regular contours. Default 1. */
  readonly strokeWidth?: number;
  /** Stroke width of index contours. Default 1.75. */
  readonly indexStrokeWidth?: number;
  /** Optional background fill drawn behind the lines. */
  readonly background?: string;
  /** Accessible title; omit for decorative use (default). */
  readonly title?: string;
  /** Default `xMidYMid slice` so the texture always covers its box. */
  readonly preserveAspectRatio?: string;
  /** Emit intrinsic `width`/`height` attributes. Default true. */
  readonly intrinsicSize?: boolean;
}

/** Group of contour paths, ready to embed in a larger SVG. */
export function topoGroup(
  lines: TopoLines,
  options: Pick<TopoSvgOptions, 'color' | 'strokeWidth' | 'indexStrokeWidth'> & { readonly opacity?: number } = {},
): string {
  const color = options.color ?? 'currentColor';
  const strokeWidth = options.strokeWidth ?? 1;
  const indexStrokeWidth = options.indexStrokeWidth ?? 1.75;
  let body = '';
  if (lines.regular.length > 0) {
    body += `<path d="${lines.regular}"/>`;
  }
  if (lines.index.length > 0) {
    body += `<path stroke-width="${fmt(indexStrokeWidth)}" d="${lines.index}"/>`;
  }
  return `<g${attrs({
    fill: 'none',
    stroke: color,
    'stroke-width': fmt(strokeWidth),
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    opacity: options.opacity === undefined ? undefined : fmt(options.opacity, 3),
  })}>${body}</g>`;
}

/** Standalone topographic SVG for a seed. */
export function topoSvg(seed: Seed, options: TopoSvgOptions = {}): string {
  const lines = topoLines(seed, options);
  const background =
    options.background === undefined
      ? ''
      : `<rect width="${fmt(lines.width)}" height="${fmt(lines.height)}" fill="${escapeXml(options.background)}"/>`;
  const intrinsic = options.intrinsicSize ?? true;
  return svgRoot(
    {
      viewBox: [0, 0, lines.width, lines.height],
      width: intrinsic ? lines.width : undefined,
      height: intrinsic ? lines.height : undefined,
      preserveAspectRatio: options.preserveAspectRatio ?? 'xMidYMid slice',
      title: options.title,
    },
    background + topoGroup(lines, options),
  );
}

/** Seed and options of the shared `/brand/topo.svg` texture (PLAN §3.6). Do not change casually. */
export const TOPO_TEXTURE_SEED = 'sotf-mods:locator-3';
export const TOPO_TEXTURE_OPTIONS: TopoSvgOptions = {
  width: 1440,
  height: 720,
  levels: 14,
  peaks: 3,
  roughness: 0.45,
};
