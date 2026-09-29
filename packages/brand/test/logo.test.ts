import { describe, expect, it } from 'vitest';
import { WORDMARK } from '../src/generated/brand-data.gen.ts';
import { lockupGeometry, lockupSvg } from '../src/logo.ts';
import { rasterise, sha256 } from './helpers.ts';

describe('lockups (PLAN §3.2)', () => {
  it('are deterministic (snapshot)', () => {
    for (const layout of ['horizontal', 'stacked', 'wordmark'] as const) {
      for (const theme of ['night', 'day', 'adaptive'] as const) {
        expect(sha256(lockupSvg({ layout, theme }))).toMatchSnapshot(`${layout}-${theme}`);
      }
    }
  });

  it('draw the wordmark from outlines, never from a font', () => {
    const svg = lockupSvg();
    expect(svg).not.toMatch(/<text|font-family/);
    expect(svg).toContain(WORDMARK.sotf.d);
    expect(svg).toContain(WORDMARK.mods.d);
  });

  it('colour «SOTF» with the foreground and «MODS» with Flare', () => {
    const night = lockupSvg({ theme: 'night' });
    expect(night).toContain(`fill="#F5F4EC" d="${WORDMARK.sotf.d}"`);
    expect(night).toContain(`fill="#FF7335" d="${WORDMARK.mods.d}"`);
    const day = lockupSvg({ theme: 'day' });
    expect(day).toContain(`fill="#0F1612" d="${WORDMARK.sotf.d}"`);
    expect(day).toContain(`fill="#E75803" d="${WORDMARK.mods.d}"`);
  });

  it('offer an adaptive variant driven by currentColor and a class hook', () => {
    const svg = lockupSvg({ theme: 'adaptive' });
    expect(svg).toContain('fill="currentColor"');
    expect(svg.match(/class="brand-flare"/g)).toHaveLength(2);
  });

  it('apply +1 u tracking and align caps with the pin head in the horizontal lockup', () => {
    expect(WORDMARK.tracking).toBeCloseTo(100 / 46, 2);
    const geometry = lockupGeometry('horizontal');
    expect(geometry.sotf.scale).toBeCloseTo(0.46, 5);
    // Baseline at the bottom of the pin head (49.5 in mark units, 3.5 cropped away).
    expect(geometry.sotf.y).toBeCloseTo(46, 5);
    expect(geometry.bounds.height).toBeCloseTo(57.5, 5);
    expect(geometry.mods.x).toBeGreaterThan(geometry.sotf.x);
  });

  it('stack SOTF over MODS under the mark', () => {
    const geometry = lockupGeometry('stacked');
    expect(geometry.mark).not.toBeNull();
    expect(geometry.mods.y).toBeGreaterThan(geometry.sotf.y);
    expect(geometry.bounds.height).toBeGreaterThan(geometry.bounds.width);
  });

  it('are titled «SOTF Mods» by default and can be decorative', () => {
    expect(lockupSvg()).toContain('<title>SOTF Mods</title>');
    expect(lockupSvg({ title: '' })).toContain('aria-hidden="true"');
  });

  it('render at the requested height with padding and background', async () => {
    const svg = lockupSvg({ background: true, padding: 16, height: 80 });
    expect(svg).toContain('height="80"');
    expect(svg).toContain('fill="#090F0C"');
    const { height } = await rasterise(svg, 400);
    expect(height).toBeGreaterThan(0);
  });
});
