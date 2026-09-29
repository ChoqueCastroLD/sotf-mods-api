import { describe, expect, it } from 'vitest';
import {
  chartSlots,
  contrastRatio,
  hexToRgb,
  logoColors,
  mixHex,
  normalizeHex,
  palette,
  rgbToHex,
  themeSurfaces,
} from '../src/colors.ts';

describe('WCAG contrast helpers', () => {
  it('match the reference values', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 5);
    expect(contrastRatio('#FFFFFF', '#FFFFFF')).toBe(1);
    // research/03 §4.1 verified pairs
    expect(contrastRatio(palette.flare[400], palette.night[975])).toBeCloseTo(7.15, 2);
    expect(contrastRatio(palette.flare[600], '#FFFFFF')).toBeCloseTo(5.2, 2);
  });
});

describe('logo colours (PLAN §3.2)', () => {
  it('match the plan', () => {
    expect(logoColors.night).toEqual({ background: '#090F0C', foreground: '#F5F4EC', flare: '#FF7335' });
    expect(logoColors.day.flare).toBe('#E75803');
    expect(logoColors.day.background).toBe('#F5F4EC');
  });

  for (const theme of ['night', 'day'] as const) {
    it(`keep the pin ≥ 3:1 on every ${theme} surface`, () => {
      for (const surface of themeSurfaces[theme]) {
        expect(contrastRatio(logoColors[theme].flare, surface)).toBeGreaterThanOrEqual(3);
      }
    });

    it(`keep «SOTF» ≥ 4.5:1 and «MODS» ≥ 3:1 on every ${theme} surface`, () => {
      for (const surface of themeSurfaces[theme]) {
        expect(contrastRatio(logoColors[theme].foreground, surface)).toBeGreaterThanOrEqual(4.5);
        expect(contrastRatio(logoColors[theme].flare, surface)).toBeGreaterThanOrEqual(3);
      }
    });
  }
});

describe('colour utilities', () => {
  it('normalises hex input and rejects anything else', () => {
    expect(normalizeHex('#abc')).toBe('#AABBCC');
    expect(normalizeHex('ff7335')).toBe('#FF7335');
    expect(normalizeHex(' #FF7335 ')).toBe('#FF7335');
    expect(normalizeHex('red')).toBeNull();
    expect(normalizeHex('#FF7335"/><script>')).toBeNull();
    expect(normalizeHex(undefined)).toBeNull();
    expect(() => hexToRgb('nope')).toThrow(TypeError);
  });

  it('round-trips and mixes colours', () => {
    expect(rgbToHex(hexToRgb('#123456'))).toBe('#123456');
    expect(mixHex('#000000', '#FFFFFF', 0.5)).toBe('#808080');
    expect(mixHex('#FF7335', '#090F0C', 0)).toBe('#FF7335');
    expect(mixHex('#FF7335', '#090F0C', 1)).toBe('#090F0C');
  });

  it('exposes the 8 validated chart slots in fixed order', () => {
    expect(chartSlots.night).toHaveLength(8);
    expect(chartSlots.day).toHaveLength(8);
    expect(chartSlots.night[0]).toBe('#E75803');
    expect(chartSlots.day[0]).toBe('#E75803');
  });
});
