import { describe, expect, it } from 'vitest';
import { MARK_BOUNDS, markPathData, markSvg, markVariantForSize } from '../src/mark.ts';
import {
  closedLength,
  contourPoints,
  FULL_MARK,
  minimumDistance,
  PIN_HEAD,
  SIMPLE_MARK,
  sampleClosedCurve,
} from '../src/mark-geometry.ts';
import { rasterise } from './helpers.ts';

function distanceToCentre(points: ReadonlyArray<{ x: number; y: number }>, x: number, y: number): number[] {
  return points.map((point) => Math.hypot(point.x - x, point.y - y));
}

describe('isotype geometry (PLAN §3.2)', () => {
  const outer = sampleClosedCurve(contourPoints(FULL_MARK.outer));
  const inner = sampleClosedCurve(contourPoints(FULL_MARK.inner));

  it('uses the specified radii ranges and centres', () => {
    expect(Math.min(...FULL_MARK.outer.radii)).toBeGreaterThanOrEqual(15);
    expect(Math.max(...FULL_MARK.outer.radii)).toBeLessThanOrEqual(16.5);
    expect(FULL_MARK.outer.radii).toHaveLength(8);
    expect([FULL_MARK.outer.cx, FULL_MARK.outer.cy]).toEqual([32, 27]);
    expect(Math.min(...FULL_MARK.inner.radii)).toBeGreaterThanOrEqual(8);
    expect(Math.max(...FULL_MARK.inner.radii)).toBeLessThanOrEqual(10);
    expect([FULL_MARK.inner.cx, FULL_MARK.inner.cy]).toEqual([34, 25]);
    expect(FULL_MARK.outer.stroke).toBe(3);
    expect(FULL_MARK.inner.stroke).toBe(3);
    expect(FULL_MARK.outer.dash).toEqual([80, 6]);
    expect(FULL_MARK.summit).toEqual({ x: 35, y: 24, r: 3.2 });
  });

  it('shows exactly one label gap on the outer contour', () => {
    const [dash, gap] = FULL_MARK.outer.dash;
    const length = closedLength(outer);
    expect(length).toBeGreaterThan(dash);
    expect(length).toBeLessThan(2 * dash + gap);
  });

  it('keeps the knock-out bands apart and inside the pin head', () => {
    const gapBetweenBands = minimumDistance(outer, inner) - (FULL_MARK.outer.stroke + FULL_MARK.inner.stroke) / 2;
    expect(gapBetweenBands).toBeGreaterThan(1.2);
    const outerReach = Math.max(...distanceToCentre(outer, PIN_HEAD.x, PIN_HEAD.y)) + FULL_MARK.outer.stroke / 2;
    expect(PIN_HEAD.r - outerReach).toBeGreaterThan(3);
    const summitReach =
      Math.hypot(FULL_MARK.summit.x - FULL_MARK.inner.cx, FULL_MARK.summit.y - FULL_MARK.inner.cy) + FULL_MARK.summit.r;
    const innerHole =
      Math.min(...distanceToCentre(inner, FULL_MARK.inner.cx, FULL_MARK.inner.cy)) - FULL_MARK.inner.stroke / 2;
    expect(innerHole - summitReach).toBeGreaterThan(1);
  });

  it('keeps the simplified variant inside the pin head', () => {
    const ring = sampleClosedCurve(contourPoints(SIMPLE_MARK.inner));
    const reach = Math.max(...distanceToCentre(ring, PIN_HEAD.x, PIN_HEAD.y)) + SIMPLE_MARK.inner.stroke / 2;
    expect(PIN_HEAD.r - reach).toBeGreaterThan(3);
  });
});

describe('markSvg', () => {
  it('is a single evenodd path per variant', () => {
    for (const variant of ['full', 'simple'] as const) {
      const svg = markSvg({ variant });
      expect(svg.match(/<path/g)).toHaveLength(1);
      expect(svg).toContain('fill-rule="evenodd"');
      expect(svg).toContain('viewBox="0 0 64 64"');
      expect(markPathData(variant).startsWith('M32 61C26.5 53.5 9 41 9 26.5A23 23 0 1 1 55 26.5')).toBe(true);
    }
    expect(markPathData('full').length).toBeGreaterThan(markPathData('simple').length);
  });

  it('has real transparent holes (knock-outs are not painted)', async () => {
    const sharp = (await import('sharp')).default;
    const { data, info } = await sharp(Buffer.from(markSvg({ size: 64 })))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const alphaAt = (x: number, y: number): number => data[(y * info.width + x) * info.channels + 3] ?? -1;
    expect(alphaAt(35, 24)).toBe(0); // summit hole
    expect(alphaAt(32, 55)).toBe(255); // solid pin body
    expect(alphaAt(2, 2)).toBe(0); // outside the pin
  });

  it('supports a tile background, radius and accessible title', async () => {
    const svg = markSvg({ background: '#090F0C', radius: 0.22, title: 'SOTF Mods', size: 32 });
    expect(svg).toContain('rx="14.08"');
    expect(svg).toContain('<title>SOTF Mods</title>');
    expect(await rasterise(svg, 32)).toEqual({ width: 32, height: 32 });
  });

  it('picks the simplified variant below 24 px and exposes the ink bounds', () => {
    expect(markVariantForSize(16)).toBe('simple');
    expect(markVariantForSize(23)).toBe('simple');
    expect(markVariantForSize(24)).toBe('full');
    expect(MARK_BOUNDS).toEqual({ x1: 9, y1: 3.5, x2: 55, y2: 61 });
  });
});
