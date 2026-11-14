import { describe, expect, it } from 'vitest';
import { axisOf, DEFAULT_DIAMETER, DEFAULT_LENGTH, inferProfileShapes, STRIDE, woodColor } from './build-pieces.ts';

/** Packs pieces `[profile, x, y, z, qx, qy, qz, qw, scale]`. */
function pack(pieces: number[][]): Float32Array {
  const data = new Float32Array(pieces.length * STRIDE);
  pieces.forEach((piece, i) => {
    data.set(piece, i * STRIDE);
  });
  return data;
}

// Identity: the long axis is Z. A quarter turn about X points it up (posts).
const ALONG_Z = [0, 0, 0, 1];
const UP = [-Math.SQRT1_2, 0, 0, Math.SQRT1_2];

describe('piece shapes inferred from the geometry', () => {
  it('reads the local Z axis of a piece', () => {
    expect(axisOf(0, 0, 0, 1)).toEqual([0, 0, 1]);
    const up = axisOf(UP[0] ?? 0, UP[1] ?? 0, UP[2] ?? 0, UP[3] ?? 1);
    expect(up[1]).toBeCloseTo(1);
  });

  it('measures logs laid side by side and end to end (a floor of 5 logs × 4 cells)', () => {
    const pieces: number[][] = [];
    for (let cell = 0; cell < 4; cell++) {
      for (let row = 0; row < 5; row++) pieces.push([7, row * 0.45, 0, cell * 2.25, ...ALONG_Z, 1]);
    }
    const shape = inferProfileShapes(pack(pieces), pieces.length).get(7);
    expect(shape?.diameter).toBeCloseTo(0.45);
    expect(shape?.length).toBeCloseTo(2.25);
  });

  it('measures thin pieces (sticks) and longer posts', () => {
    const pieces: number[][] = [];
    for (let i = 0; i < 8; i++) pieces.push([3, i * 0.1, 0, 0, ...ALONG_Z, 1], [3, i * 0.1, 0, 1.5, ...ALONG_Z, 1]);
    for (let i = 0; i < 6; i++)
      pieces.push([9, 10 + i * 0.45, 1.35, 10, ...UP, 1], [9, 10 + i * 0.45, 4.05, 10, ...UP, 1]);
    const shapes = inferProfileShapes(pack(pieces), pieces.length);
    expect(shapes.get(3)?.diameter).toBeCloseTo(0.1);
    expect(shapes.get(3)?.length).toBeCloseTo(1.5);
    expect(shapes.get(9)?.length).toBeCloseTo(2.7);
    expect(woodColor(3, shapes.get(3) ?? { diameter: 0.1, length: 1 }).l).toBeGreaterThan(
      woodColor(9, shapes.get(9) ?? { diameter: 0.45, length: 2.7 }).l,
    );
  });

  it('falls back to a standard log without neighbours, and never doubles the thickness', () => {
    const lone = inferProfileShapes(pack([[1, 0, 0, 0, ...ALONG_Z, 1]]), 1).get(1);
    expect(lone).toEqual({ diameter: DEFAULT_DIAMETER, length: DEFAULT_LENGTH });
    // Every other log missing (a sampled build): neighbours 0.9 m apart are still one log thick.
    const sampled: number[][] = [];
    for (let row = 0; row < 10; row++) sampled.push([2, row * 0.9, 0, 0, ...ALONG_Z, 1]);
    expect(inferProfileShapes(pack(sampled), sampled.length).get(2)?.diameter).toBe(DEFAULT_DIAMETER);
  });
});
