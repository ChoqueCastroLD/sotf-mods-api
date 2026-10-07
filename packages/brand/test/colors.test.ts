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
    expect(contrastRatio(palette.flare[400], palette.night[950])).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.flare[500], '#FFFFFF')).toBeGreaterThanOrEqual(4.5);
  });
});

describe('logo colours', () => {
  it('use the red of the old logo on both themes', () => {
    expect(logoColors.night.flare).toBe('#FE0E0F');
    expect(logoColors.day.flare).toBe('#FE0E0F');
    expect(logoColors.night.background).toBe('#0E1114');
  });

  for (const theme of ['night', 'day'] as const) {
    it(`keep the logo red at least 3:1 on every ${theme} surface`, () => {
      for (const surface of themeSurfaces[theme]) {
        expect(contrastRatio(logoColors[theme].flare, surface), surface).toBeGreaterThanOrEqual(3);
      }
    });
  }

  it('keeps the dark neutrals of the visual direction', () => {
    expect(palette.night[950]).toBe('#0E1114');
    expect(palette.night[900]).toBe('#151A1F');
    expect(palette.night[800]).toBe('#2B343E');
    expect(palette.flare[500]).toBe('#E11D1D');
    expect(palette.flare[600]).toBe('#C81414');
  });
});

describe('colour utilities', () => {
  it('normalises hex input and rejects anything else', () => {
    expect(normalizeHex('#abc')).toBe('#AABBCC');
    expect(normalizeHex('e11d1d')).toBe('#E11D1D');
    expect(normalizeHex(' #E11D1D ')).toBe('#E11D1D');
    expect(normalizeHex('red')).toBeNull();
    expect(normalizeHex('#E11D1D"/><script>')).toBeNull();
    expect(normalizeHex(undefined)).toBeNull();
    expect(() => hexToRgb('nope')).toThrow(TypeError);
  });

  it('round-trips and mixes colours', () => {
    expect(rgbToHex(hexToRgb('#123456'))).toBe('#123456');
    expect(mixHex('#000000', '#FFFFFF', 0.5)).toBe('#808080');
    expect(mixHex('#E11D1D', '#15191E', 0)).toBe('#E11D1D');
    expect(mixHex('#E11D1D', '#15191E', 1)).toBe('#15191E');
  });

  it('exposes the 8 chart slots in fixed order', () => {
    expect(chartSlots.night).toHaveLength(8);
    expect(chartSlots.day).toHaveLength(8);
    expect(chartSlots.night[0]).toBe('#E11D1D');
    expect(chartSlots.day[0]).toBe('#C81414');
  });
});
