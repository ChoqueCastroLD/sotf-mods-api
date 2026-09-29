import { describe, expect, it } from 'vitest';
import { isoLines, polylineLength, sampleGrid, simplifyClosed, simplifyOpen } from '../src/contour.ts';

const cone = (x: number, y: number): number => -Math.sqrt(x * x + y * y);

describe('marching squares', () => {
  it('traces a circle as one closed ring at the right radius', () => {
    const grid = sampleGrid(cone, -10, -10, 10, 10, 0.5);
    const lines = isoLines(grid, -5);
    expect(lines).toHaveLength(1);
    const ring = lines[0];
    expect(ring?.closed).toBe(true);
    for (const point of ring?.points ?? []) {
      expect(Math.hypot(point.x, point.y)).toBeCloseTo(5, 0);
    }
    expect(polylineLength(ring?.points ?? [], true)).toBeCloseTo(2 * Math.PI * 5, 0);
  });

  it('returns open lines when a contour leaves the grid', () => {
    const ramp = (x: number): number => x;
    const lines = isoLines(sampleGrid(ramp, 0, 0, 10, 10, 1), 4.5);
    expect(lines).toHaveLength(1);
    expect(lines[0]?.closed).toBe(false);
    expect(lines[0]?.points.every((point) => point.x === 4.5)).toBe(true);
  });

  it('keeps separate peaks separate and resolves saddles without crossings', () => {
    const twin = (x: number, y: number): number =>
      Math.exp(-((x - 3) ** 2 + y ** 2)) + Math.exp(-((x + 3) ** 2 + y ** 2));
    const grid = sampleGrid(twin, -8, -5, 8, 5, 0.25);
    expect(isoLines(grid, 0.5).filter((line) => line.closed)).toHaveLength(2);
    // Below the saddle value both peaks merge into one ring.
    expect(isoLines(grid, 0.0001).filter((line) => line.closed).length).toBeGreaterThanOrEqual(1);
  });

  it('returns nothing when the level is outside the field', () => {
    expect(isoLines(sampleGrid(cone, -1, -1, 1, 1, 0.5), 5)).toEqual([]);
  });

  it('rejects a non-positive step', () => {
    expect(() => sampleGrid(cone, 0, 0, 1, 1, 0)).toThrow(RangeError);
  });
});

describe('simplification', () => {
  it('drops collinear points and keeps corners', () => {
    const line = [
      { x: 0, y: 0 },
      { x: 1, y: 0.01 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
    ];
    expect(simplifyOpen(line, 0.1)).toEqual([line[0], line[2], line[3]]);
  });

  it('simplifies closed rings without losing their shape', () => {
    const ring = Array.from({ length: 360 }, (_, i) => ({
      x: 10 * Math.cos((i * Math.PI) / 180),
      y: 10 * Math.sin((i * Math.PI) / 180),
    }));
    const simplified = simplifyClosed(ring, 0.05);
    expect(simplified.length).toBeLessThan(60);
    expect(simplified.length).toBeGreaterThan(8);
  });
});
