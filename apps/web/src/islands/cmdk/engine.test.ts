import type { SearchIndexDTO } from '@sotf/contracts/search';
import { describe, expect, it } from 'vitest';
import { PaletteIndex } from './engine.ts';

/** A Spanish index: `name` is the translation, the last tuple element the English original. */
const index = {
  version: 1,
  categories: [['other', 'Otros']],
  mods: [
    [
      1,
      'mod',
      'Menú de mods de Axel',
      'imaxel',
      'other',
      '',
      'AxelsModMenu',
      100,
      'untested',
      null,
      "/mods/imaxel/axel's-mod-menu",
      20000,
      19000,
      null,
      0,
      "Axel's Mod Menu",
    ],
  ],
  kits: [],
  users: [],
  pages: [],
  trending: [],
  builds: [],
} as unknown as SearchIndexDTO;

describe('PaletteIndex', () => {
  it('finds a translated mod by its original name too', () => {
    const palette = new PaletteIndex(index);
    for (const text of ['menú de mods', "Axel's Mod Menu", 'axels mod menu']) {
      const hits = palette.query(text, 'all');
      expect(
        hits.map((hit) => hit.item.key),
        text,
      ).toContain('mod:1');
    }
  });
});
