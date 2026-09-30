import { describe, expect, it } from 'vitest';
import { taxonomyResolver } from './taxonomy.ts';

const DATA = {
  categories: [
    { nameKey: 'taxonomy_category_quality_of_life', name: 'Quality of life', names: { es: 'Calidad de vida' } },
  ],
  tags: [{ nameKey: 'taxonomy_tag_inventory', name: 'Inventory', names: { de: 'Inventar' } }],
};

describe('taxonomyResolver', () => {
  it('is undefined until the catalogue is loaded (components keep the English names)', () => {
    expect(taxonomyResolver(undefined, 'es')).toBeUndefined();
  });

  it('resolves categories and tags in the locale, then the English name, then the fallback', () => {
    const es = taxonomyResolver(DATA as never, 'es');
    expect(es?.('taxonomy_category_quality_of_life', 'x')).toBe('Calidad de vida');
    expect(es?.('taxonomy_tag_inventory', 'x')).toBe('Inventory');
    expect(es?.('taxonomy_tag_unknown', 'Unknown')).toBe('Unknown');
    expect(taxonomyResolver(DATA as never, 'de')?.('taxonomy_tag_inventory', 'x')).toBe('Inventar');
  });
});
