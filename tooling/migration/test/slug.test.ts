import { describe, expect, it } from 'vitest';
import { assignCanonicalSlugs, canonicalSlug } from '../src/slug.ts';

describe('canonicalSlug', () => {
  it.each([
    ["regi's-modding-library", 'regis-modding-library'],
    ["axel's-mod-menu", 'axels-mod-menu'],
    ['immersivecompanioninjuries(beta)', 'immersivecompanioninjuries-beta'],
    ['customradio-(beta)', 'customradio-beta'],
    ['dynamic_survival_matrix', 'dynamic-survival-matrix'],
    ['virginia-wardrobe-18+', 'virginia-wardrobe-18'],
    ['gerald-r.-ford-class-aircraft-carriers', 'gerald-r-ford-class-aircraft-carriers'],
    ['instant-base-def.-sol-wall-gate-with-3-story-h', 'instant-base-def-sol-wall-gate-with-3-story-h'],
    ['radio-alarm-trap-_but-is-us-military-base-alarm', 'radio-alarm-trap-but-is-us-military-base-alarm'],
    ['Zostań wodzem', 'zostan-wodzem'],
    ['Straße Größe', 'strasse-grosse'],
    ['Łódź', 'lodz'],
    ['---', ''],
    ['already-canonical-1', 'already-canonical-1'],
  ])('%s → %s', (input, expected) => {
    expect(canonicalSlug(input)).toBe(expected);
    expect(canonicalSlug(input)).toMatch(/^([a-z0-9]+(-[a-z0-9]+)*)?$/);
  });

  it('is idempotent', () => {
    for (const s of ["regi's-modding-library", 'a__b', 'x(y)z'])
      expect(canonicalSlug(canonicalSlug(s))).toBe(canonicalSlug(s));
  });
});

describe('assignCanonicalSlugs', () => {
  it('keeps canonical legacy slugs and suffixes collisions deterministically', () => {
    const result = assignCanonicalSlugs([
      { id: 3, slug: 'my_mod', name: 'My Mod' },
      { id: 1, slug: 'my-mod', name: 'My Mod' },
      { id: 2, slug: 'My-Mod', name: 'My Mod' },
      { id: 4, slug: '+++', name: 'Plus Mod' },
      { id: 5, slug: '+++', name: '***' },
    ]);
    expect(Object.fromEntries(result)).toEqual({
      1: 'my-mod',
      2: 'my-mod-2',
      3: 'my-mod-3',
      4: 'plus-mod',
      5: 'mod-5',
    });
  });

  it('avoids slugs already taken by the owner', () => {
    expect(assignCanonicalSlugs([{ id: 9, slug: 'a.b', name: 'x' }], ['a-b']).get(9)).toBe('a-b-2');
  });
});
