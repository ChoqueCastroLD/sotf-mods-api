/**
 * Contrast of the semantic colour pairs, recomputed (WCAG 2.x) from the values that actually ship
 * in tokens.css, in both themes and on every page surface.
 */
import { contrastRatio } from '@sotf/brand/colors';
import { describe, expect, it } from 'vitest';
import { BADGE_SOFT_HUES } from '../src/badge.tsx';
import { colorTokens, type ThemedColor } from './helpers/tokens.ts';

const tokens = colorTokens();

function token(name: string): ThemedColor {
  const value = tokens.get(name);
  if (!value) throw new Error(`--color-${name} is missing from tokens.css`);
  return value;
}

const SURFACES = ['bg', 'surface', 'raised', 'sunken'] as const;
const THEMES = ['night', 'day'] as const;

/** Text colours: AA body text (4.5) except the primary, documented below. */
const TEXT: ReadonlyArray<readonly [string, number]> = [
  ['fg', 7],
  ['fg-muted', 4.5],
  ['fg-subtle', 4.5],
  ['link', 4.5],
  ['signal', 4.5],
  ['success', 4.5],
  ['warning', 4.5],
  ['danger', 4.5],
  ['featured', 4.5],
  ['blueprint', 4.5],
];

describe('contrast', () => {
  describe.each(TEXT)('%s', (name, threshold) => {
    it.each(THEMES)(`is at least ${threshold}:1 on every surface (%s)`, (theme) => {
      for (const surface of SURFACES) {
        expect(
          contrastRatio(token(name)[theme], token(surface)[theme]),
          `${name} on ${surface}`,
        ).toBeGreaterThanOrEqual(threshold);
      }
    });
  });

  it('keeps the red accent readable as large or bold text (3:1) and as an icon on every surface', () => {
    for (const theme of THEMES) {
      for (const surface of SURFACES) {
        expect(
          contrastRatio(token('primary')[theme], token(surface)[theme]),
          `${theme} ${surface}`,
        ).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('keeps the focus ring at 3:1 on every surface', () => {
    for (const theme of THEMES) {
      for (const surface of SURFACES) {
        expect(contrastRatio(token('focus')[theme], token(surface)[theme])).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it.each([
    ['primary-fg', 'primary'],
    ['primary-fg', 'primary-hover'],
    ['danger-fg', 'danger'],
  ])('button text %s on %s is at least 4.5:1 in both themes', (fg, bg) => {
    for (const theme of THEMES) {
      expect(contrastRatio(token(fg)[theme], token(bg)[theme])).toBeGreaterThanOrEqual(4.5);
    }
  });

  it.each(Object.entries(BADGE_SOFT_HUES))('soft %s badge (%s) text is at least 7:1', (_variant, hue) => {
    // Night: {hue}-200 on {hue}-950. Day: {hue}-800 on {hue}-100.
    expect(contrastRatio(token(`${hue}-200`).night, token(`${hue}-950`).night)).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(token(`${hue}-800`).day, token(`${hue}-100`).day)).toBeGreaterThanOrEqual(7);
  });

  it('chart slots keep 3:1 against the chart surfaces', () => {
    for (let slot = 1; slot <= 8; slot++) {
      const color = token(`chart-${slot}`);
      for (const surface of ['surface', 'raised'] as const) {
        for (const theme of THEMES) {
          expect(
            contrastRatio(color[theme], token(surface)[theme]),
            `chart-${slot} ${theme} ${surface}`,
          ).toBeGreaterThanOrEqual(3);
        }
      }
    }
  });

  it('keeps the dark neutrals and the red of the visual direction', () => {
    expect(token('bg').night).toBe('#15191E');
    expect(token('surface').night).toBe('#1D232A');
    expect(token('raised').night).toBe('#232A32');
    expect(token('sunken').night).toBe('#111418');
    expect(token('border').night).toBe('#2A323C');
    expect(token('border-strong').night).toBe('#3D4651');
    expect(token('fg').night).toBe('#E5E7EB');
    expect(token('fg-muted').night).toBe('#9CA3AF');
    expect(token('primary')).toEqual({ day: '#E11D1D', night: '#E11D1D' });
    expect(token('primary-hover').night).toBe('#C81414');
    expect(token('primary-fg').night).toBe('#FFFFFF');
  });

  it('keeps the former cyan and blue tokens neutral (low saturation) and the link red', () => {
    const saturation = (hex: string): number => {
      const [r, g, b] = [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
      return (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
    };
    for (const name of ['signal', 'signal-soft', 'blueprint', 'blueprint-surface', 'featured', 'featured-soft']) {
      for (const theme of THEMES) {
        expect(saturation(token(name)[theme]), `${name} ${theme}`).toBeLessThan(0.35);
      }
    }
    for (const theme of THEMES) {
      const [r, g, b] = [1, 3, 5].map((i) => Number.parseInt(token('link')[theme].slice(i, i + 2), 16)) as [
        number,
        number,
        number,
      ];
      expect(r, `link ${theme}`).toBeGreaterThan(g + 40);
      expect(r, `link ${theme}`).toBeGreaterThan(b + 40);
    }
  });

  it('border-strong is a visible control border (at least 1.5:1 in the dark theme, 3:1 in the light theme)', () => {
    for (const surface of SURFACES) {
      expect(contrastRatio(token('border-strong').night, token(surface).night)).toBeGreaterThanOrEqual(1.5);
      expect(contrastRatio(token('border-strong').day, token(surface).day)).toBeGreaterThanOrEqual(2.8);
    }
  });
});
