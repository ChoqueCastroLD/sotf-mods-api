/** Motif: deterministic, cheap and well-formed. */
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { describe, expect, it } from 'vitest';
import { Motif } from '../src/motif.tsx';
import { motifLayers, motifStyle, motifVars } from '../src/motif-svg.ts';

describe('motif', () => {
  it('is deterministic per seed and differs between seeds', () => {
    expect(motifLayers({ seed: 'a' })).toEqual(motifLayers({ seed: 'a' }));
    expect(motifLayers({ seed: 'a' }).neutral).not.toBe(motifLayers({ seed: 'b' }).neutral);
    expect(motifStyle({ seed: 'a' })).toBe(motifStyle({ seed: 'a' }));
  });

  it('always has a few red accent trees and stays small', () => {
    for (const density of ['sparse', 'normal', 'dense'] as const) {
      for (const seed of ['x', 'console', 'empty-mods', 42]) {
        const layers = motifLayers({ seed, density });
        expect(layers.accent, `${density} ${seed}`).toContain('<path');
        expect(layers.neutral).toContain('<path');
        expect(layers.neutral.length).toBeLessThan(7500);
        expect(layers.accent.length).toBeLessThan(2000);
      }
    }
  });

  it('keeps every shape inside the tile (so it tiles without clipping)', () => {
    const { neutral, size } = motifLayers({ seed: 'bounds', density: 'dense' });
    const numbers = [...(/d="([^"]+)"/.exec(neutral)?.[1] ?? '').matchAll(/-?\d+(?:\.\d+)?/g)].map((m) => Number(m[0]));
    expect(numbers.length).toBeGreaterThan(20);
    // Absolute coordinates only appear in the M/L commands of the trees; relative h/v lengths are small.
    for (const n of numbers) expect(n).toBeLessThanOrEqual(size + 1);
  });

  it('renders a decorative, layout-neutral layer', () => {
    const html = renderToStaticMarkup(createElement(Motif, { seed: 'html', tone: 'quiet', fade: 'bottom' }));
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('class="motif"');
    expect(html).toContain('data-fade="bottom"');
    expect(Object.keys(motifVars({ seed: 'html' }))).toEqual(['--motif-neutral', '--motif-accent', '--motif-size']);
  });
});
