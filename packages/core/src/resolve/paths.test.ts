import { describe, expect, it } from 'vitest';
import { parseSitePath } from './paths.ts';

describe('parseSitePath', () => {
  it('splits locale, section and decoded segments', () => {
    expect(parseSitePath("/es/mods/imaxel/axel's-mod-menu/versions?x=1")).toEqual({
      locale: 'es',
      section: 'mods',
      segments: ['imaxel', "axel's-mod-menu", 'versions'],
    });
    expect(parseSitePath('/mods/regitoxic/virginia-wardrobe-18%2B')).toEqual({
      locale: null,
      section: 'mods',
      segments: ['regitoxic', 'virginia-wardrobe-18+'],
    });
    expect(parseSitePath('/en/profile/x%zz')).toEqual({ locale: null, section: 'en', segments: ['profile', 'x%zz'] });
    expect(parseSitePath('/')).toEqual({ locale: null, section: '', segments: [] });
  });
});
