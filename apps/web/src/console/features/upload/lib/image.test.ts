import { describe, expect, it } from 'vitest';
import { COVER_ASPECT, centeredCrop, clampCrop, generatedName } from './image.ts';

describe('centeredCrop', () => {
  it('crops the sides of a wide image', () => {
    expect(centeredCrop(4000, 1000)).toEqual({ x: 1111, y: 0, width: 1778, height: 1000 });
  });

  it('crops top and bottom of a tall image', () => {
    expect(centeredCrop(1000, 2000)).toEqual({ x: 0, y: 719, width: 1000, height: 563 });
  });

  it('keeps an exact 16:9 image whole', () => {
    expect(centeredCrop(1920, 1080)).toEqual({ x: 0, y: 0, width: 1920, height: 1080 });
  });
});

describe('clampCrop', () => {
  it('keeps the rectangle inside the image with the cover aspect', () => {
    const rect = clampCrop({ x: 1500, y: 900, width: 800, height: 450 }, 1920, 1080);
    expect(rect.x + rect.width).toBeLessThanOrEqual(1920);
    expect(rect.y + rect.height).toBeLessThanOrEqual(1080);
    expect(rect.width / rect.height).toBeCloseTo(COVER_ASPECT);
  });

  it('enforces the minimum and maximum size', () => {
    expect(clampCrop({ x: 0, y: 0, width: 10, height: 10 }, 1920, 1080).width).toBe(160);
    expect(clampCrop({ x: -50, y: -50, width: 5000, height: 5000 }, 1920, 1080)).toEqual({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
    });
  });

  it('never exceeds a tiny image', () => {
    const rect = clampCrop({ x: 0, y: 0, width: 400, height: 225 }, 100, 50);
    expect(rect.width).toBeLessThanOrEqual(100);
    expect(rect.height).toBeLessThanOrEqual(50);
  });
});

describe('generatedName', () => {
  it('follows the encoded type', () => {
    expect(generatedName('cover', new Blob([], { type: 'image/webp' }))).toBe('cover.webp');
    expect(generatedName('cover', new Blob([], { type: 'image/jpeg' }))).toBe('cover.jpg');
  });
});
