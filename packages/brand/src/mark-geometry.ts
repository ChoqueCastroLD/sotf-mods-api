/**
 * Construction of the «Contour Pin» isotype (PLAN §3.2) as pure geometry.
 *
 * The knock-out contours are converted from strokes into filled outlines so the mark is a
 * single `fill-rule="evenodd"` path: it has real transparent holes, needs no masks or ids,
 * and renders identically in browsers, librsvg/sharp, satori, e-mail clients and editors.
 *
 * This module runs at build time (`scripts/build-assets.ts`); the resulting path data is
 * committed in `src/generated/brand-data.gen.ts`, so runtime code never recomputes it.
 */

import { PathWriter, type Point, smoothCurve } from './svg.ts';

/** Pin silhouette, verbatim from PLAN §3.2 (viewBox 0 0 64 64). */
export const PIN_PATH = 'M32 61C26.5 53.5 9 41 9 26.5A23 23 0 1 1 55 26.5C55 41 37.5 53.5 32 61Z';

/** The circular head of the pin, used by geometry checks. */
export const PIN_HEAD = { x: 32, y: 26.5, r: 23 } as const;

export interface ContourSpec {
  readonly cx: number;
  readonly cy: number;
  /** Radii at 8 equally spaced angles, starting at `rotation` and going clockwise (y down). */
  readonly radii: readonly number[];
  /** Rotation of the first radius, in degrees. */
  readonly rotation: number;
  /** Knock-out stroke width. */
  readonly stroke: number;
}

export interface MarkSpec {
  readonly outer: ContourSpec & {
    /** Dash pattern of the outer contour: `[dash, gap]` = the "label gap" of index contours. */
    readonly dash: readonly [number, number];
    /** Angle (degrees, clockwise from +x, y down) where the gap is centred. */
    readonly gapAngle: number;
  };
  readonly inner: ContourSpec;
  readonly summit: { readonly x: number; readonly y: number; readonly r: number };
}

/**
 * Full mark: outer contour of 8 radii (15–16.5 u) around (32,27) with a 3 u knock-out and
 * the `80 6` label gap bottom-left; inner contour of radius 8–10 u around (34,25); summit
 * r 3.2 at (35,24). The inner rings sit up-right of centre: an eye watching from the woods.
 */
export const FULL_MARK: MarkSpec = {
  outer: {
    cx: 32,
    cy: 27,
    radii: [15.9, 15.4, 15.7, 15.7, 16.3, 15.6, 15.1, 16.3],
    rotation: 150,
    stroke: 3,
    dash: [80, 6],
    gapAngle: 128,
  },
  inner: {
    cx: 34,
    cy: 25,
    radii: [9.1, 8.1, 9.5, 9.7, 8.2, 8.9, 9.2, 9.3],
    rotation: 105,
    stroke: 3,
  },
  summit: { x: 35, y: 24, r: 3.2 },
};

/**
 * Simplified mark for 16–24 px: pin + inner contour + summit, optically corrected (thicker
 * knock-out, larger summit) so the holes survive rasterisation at favicon sizes.
 */
export const SIMPLE_MARK: Omit<MarkSpec, 'outer'> = {
  inner: {
    cx: 33,
    cy: 25.5,
    radii: [12.4, 11.4, 13, 13.2, 11.5, 12.3, 12.6, 12.8],
    rotation: 105,
    stroke: 5,
  },
  summit: { x: 34, y: 24.5, r: 4.6 },
};

interface Sample {
  readonly x: number;
  readonly y: number;
  /** Unit tangent. */
  readonly tx: number;
  readonly ty: number;
  /** Cumulative arc length from the start of the curve. */
  readonly s: number;
}

/** Keep every n-th dense sample as a Catmull-Rom control point (48 per ring). */
const DECIMATE = 8;

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

/** Control points of the closed contour through its 8 radii. */
export function contourPoints(spec: ContourSpec): Point[] {
  const count = spec.radii.length;
  return spec.radii.map((radius, index) => {
    const angle = toRadians(spec.rotation + (360 * index) / count);
    return { x: spec.cx + radius * Math.cos(angle), y: spec.cy + radius * Math.sin(angle) };
  });
}

/** Densely samples the closed Catmull-Rom curve through `points` with unit tangents. */
export function sampleClosedCurve(points: readonly Point[], perSegment = 48): Sample[] {
  const count = points.length;
  const at = (index: number): Point => points[((index % count) + count) % count] as Point;
  const samples: Sample[] = [];
  let s = 0;
  let previous: Point | null = null;
  for (let i = 0; i < count; i += 1) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const b0 = p1;
    const b1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const b2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    const b3 = p2;
    for (let j = 0; j < perSegment; j += 1) {
      const t = j / perSegment;
      const u = 1 - t;
      const x = u * u * u * b0.x + 3 * u * u * t * b1.x + 3 * u * t * t * b2.x + t * t * t * b3.x;
      const y = u * u * u * b0.y + 3 * u * u * t * b1.y + 3 * u * t * t * b2.y + t * t * t * b3.y;
      const dx = 3 * u * u * (b1.x - b0.x) + 6 * u * t * (b2.x - b1.x) + 3 * t * t * (b3.x - b2.x);
      const dy = 3 * u * u * (b1.y - b0.y) + 6 * u * t * (b2.y - b1.y) + 3 * t * t * (b3.y - b2.y);
      const length = Math.hypot(dx, dy);
      if (previous) {
        s += Math.hypot(x - previous.x, y - previous.y);
      }
      previous = { x, y };
      samples.push({ x, y, tx: dx / length, ty: dy / length, s });
    }
  }
  return samples;
}

/** Total length of a closed sampled curve. */
export function closedLength(samples: readonly Sample[]): number {
  const first = samples[0] as Sample;
  const last = samples[samples.length - 1] as Sample;
  return last.s + Math.hypot(first.x - last.x, first.y - last.y);
}

/** Offsets a sample along its left normal (y-down: left of travel direction). */
function offset(sample: Sample, distance: number): Point {
  // Normal = tangent rotated by −90° in screen space.
  return { x: sample.x + sample.ty * distance, y: sample.y - sample.tx * distance };
}

function writeRing(writer: PathWriter, points: readonly Point[]): void {
  smoothCurve(writer, points, true);
}

/** Outline of a closed knock-out band: two concentric rings (evenodd makes it a hole). */
function closedBand(writer: PathWriter, samples: readonly Sample[], half: number): void {
  writeRing(
    writer,
    samples.filter((_, i) => i % DECIMATE === 0).map((sample) => offset(sample, half)),
  );
  writeRing(
    writer,
    samples.filter((_, i) => i % DECIMATE === 0).map((sample) => offset(sample, -half)),
  );
}

/**
 * Outline of the dashed outer band: the visible dash as a single closed shape with round
 * caps (`stroke-linecap="round"` equivalent).
 */
function dashedBand(
  writer: PathWriter,
  samples: readonly Sample[],
  half: number,
  gapCentre: number,
  gapLength: number,
): void {
  const total = closedLength(samples);
  const start = gapCentre + gapLength / 2;
  const visible = total - gapLength;
  // Re-order samples so the dash runs from the end of the gap around to its start.
  const ordered: Sample[] = [];
  const stepLength = total / samples.length;
  for (let k = 0; k * stepLength <= visible + 1e-9; k += 1) {
    const target = (start + k * stepLength) % total;
    ordered.push(interpolate(samples, target, total));
  }
  const last = interpolate(samples, (start + visible) % total, total);
  if (
    Math.hypot(last.x - (ordered[ordered.length - 1] as Sample).x, last.y - (ordered[ordered.length - 1] as Sample).y) >
    1e-6
  ) {
    ordered.push(last);
  }
  const lastIndex = ordered.length - 1;
  const thinned = ordered.filter((_, i) => (i % DECIMATE === 0 && lastIndex - i >= DECIMATE / 2) || i === lastIndex);
  const left = thinned.map((sample) => offset(sample, half));
  const right = thinned.map((sample) => offset(sample, -half)).reverse();
  const endSample = thinned[thinned.length - 1] as Sample;
  const startSample = thinned[0] as Sample;
  const cap = (sample: Sample, forward: boolean): Point[] => {
    // Semicircle from the left offset to the right offset around the end of the dash.
    const direction = forward ? 1 : -1;
    const points: Point[] = [];
    const steps = 6;
    for (let i = 1; i < steps; i += 1) {
      const phi = (Math.PI * i) / steps;
      const normal = Math.cos(phi) * half * direction;
      const along = Math.sin(phi) * half * direction;
      points.push({
        x: sample.x + sample.ty * normal + sample.tx * along,
        y: sample.y - sample.tx * normal + sample.ty * along,
      });
    }
    return points;
  };
  const outline = [...left, ...cap(endSample, true), ...right, ...cap(startSample, false)];
  writeRing(writer, outline);
}

function interpolate(samples: readonly Sample[], target: number, total: number): Sample {
  let low = 0;
  let high = samples.length - 1;
  while (low < high) {
    const mid = (low + high + 1) >> 1;
    if ((samples[mid] as Sample).s <= target) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  const a = samples[low] as Sample;
  const b = samples[(low + 1) % samples.length] as Sample;
  const span = low + 1 < samples.length ? b.s - a.s : total - a.s;
  const t = span > 0 ? (target - a.s) / span : 0;
  const tx = a.tx + (b.tx - a.tx) * t;
  const ty = a.ty + (b.ty - a.ty) * t;
  const length = Math.hypot(tx, ty) || 1;
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, tx: tx / length, ty: ty / length, s: target };
}

/** Arc-length position (from the curve start) of the point closest to a polar angle. */
function arcPositionAtAngle(samples: readonly Sample[], cx: number, cy: number, degrees: number): number {
  const angle = toRadians(degrees);
  const ux = Math.cos(angle);
  const uy = Math.sin(angle);
  let best = samples[0] as Sample;
  let bestScore = Number.NEGATIVE_INFINITY;
  for (const sample of samples) {
    const dx = sample.x - cx;
    const dy = sample.y - cy;
    const score = (dx * ux + dy * uy) / (Math.hypot(dx, dy) || 1);
    if (score > bestScore) {
      bestScore = score;
      best = sample;
    }
  }
  return best.s;
}

function circle(writer: PathWriter, x: number, y: number, r: number): void {
  const points: Point[] = [];
  const steps = 12;
  for (let i = 0; i < steps; i += 1) {
    const angle = (2 * Math.PI * i) / steps;
    points.push({ x: x + r * Math.cos(angle), y: y + r * Math.sin(angle) });
  }
  writeRing(writer, points);
}

/** Path data (without the pin) of the knock-out holes of the full mark. */
export function fullMarkHoles(spec: MarkSpec = FULL_MARK, precision = 2): string {
  const writer = new PathWriter(precision);
  const outer = sampleClosedCurve(contourPoints(spec.outer));
  const total = closedLength(outer);
  const [dash, gap] = spec.outer.dash;
  if (total > 2 * dash + gap) {
    throw new RangeError(`Outer contour (${total.toFixed(1)} u) would show more than one label gap`);
  }
  const gapCentre = arcPositionAtAngle(outer, spec.outer.cx, spec.outer.cy, spec.outer.gapAngle);
  dashedBand(writer, outer, spec.outer.stroke / 2, gapCentre, gap);
  closedBand(writer, sampleClosedCurve(contourPoints(spec.inner)), spec.inner.stroke / 2);
  circle(writer, spec.summit.x, spec.summit.y, spec.summit.r);
  return writer.toString();
}

/** Path data (without the pin) of the knock-out holes of the simplified mark. */
export function simpleMarkHoles(spec: Omit<MarkSpec, 'outer'> = SIMPLE_MARK, precision = 2): string {
  const writer = new PathWriter(precision);
  closedBand(writer, sampleClosedCurve(contourPoints(spec.inner)), spec.inner.stroke / 2);
  circle(writer, spec.summit.x, spec.summit.y, spec.summit.r);
  return writer.toString();
}

/** Minimum distance between two sampled closed curves (geometry checks). */
export function minimumDistance(a: readonly Point[], b: readonly Point[]): number {
  let best = Number.POSITIVE_INFINITY;
  for (const p of a) {
    for (const q of b) {
      const distance = Math.hypot(p.x - q.x, p.y - q.y);
      if (distance < best) {
        best = distance;
      }
    }
  }
  return best;
}
