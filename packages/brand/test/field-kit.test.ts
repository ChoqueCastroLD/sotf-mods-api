import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  CREATOR_TIER_ICONS,
  FIELD_KIT_NAMES,
  fieldKitIcon,
  fieldKitSprite,
  fieldKitUse,
  isFieldKitIcon,
} from '../src/field-kit.ts';
import { gzipSize, rasterise, sha256 } from './helpers.ts';

/** PLAN §3.6: the Field kit inventory. */
const EXPECTED = [
  'contour-pin',
  'topo-rings',
  'blueprint-sheet',
  'campfire',
  'lean-to',
  'cabin',
  'treehouse',
  'fortress',
  'landmark',
  'cave-mouth',
  'printer-3d-resin',
  'flare-gun',
  'gps-handheld',
  'zipline',
  ...Array.from({ length: 8 }, (_, i) => `moon-phase-${i}`),
  'stamp-frame',
  'eyes-dark',
  'works-check',
  'works-broken',
];

describe('Field kit icons', () => {
  it('contain exactly the icons listed in the plan', () => {
    expect([...FIELD_KIT_NAMES].sort()).toEqual([...EXPECTED].sort());
  });

  it('map every creator tier to an icon', () => {
    expect(Object.keys(CREATOR_TIER_ICONS)).toEqual([
      'campfire',
      'lean-to',
      'cabin',
      'treehouse',
      'fortress',
      'landmark',
    ]);
    for (const icon of Object.values(CREATOR_TIER_ICONS)) {
      expect(isFieldKitIcon(icon)).toBe(true);
    }
  });

  it('render every icon on the 24 px grid with the Lucide stroke', async () => {
    for (const name of FIELD_KIT_NAMES) {
      const svg = fieldKitIcon(name);
      expect(svg).toContain('viewBox="0 0 24 24"');
      expect(svg).toContain('stroke="currentColor"');
      expect(svg).toContain('stroke-width="1.75"');
      expect(await rasterise(svg, 24)).toEqual({ width: 24, height: 24 });
    }
  });

  it('are deterministic (snapshot)', () => {
    expect(sha256(fieldKitSprite())).toMatchSnapshot();
  });

  it('support accessible names, custom size and stroke', () => {
    const svg = fieldKitIcon('campfire', { size: 16, strokeWidth: 2, title: 'Campfire tier' });
    expect(svg).toContain('width="16" height="16"');
    expect(svg).toContain('stroke-width="2"');
    expect(svg).toContain('role="img"');
    expect(svg).toContain('><title>Campfire tier</title>');
    expect(() => fieldKitIcon('nope' as never)).toThrow(RangeError);
  });

  it('reference the sprite with <use>', () => {
    expect(fieldKitUse('cabin')).toBe(
      '<svg width="24" height="24" aria-hidden="true"><use href="/brand/field-kit.svg#fk-cabin"/></svg>',
    );
    expect(fieldKitUse('cabin', { href: '/x.svg', title: 'Cabin' })).toContain(
      '<title>Cabin</title><use href="/x.svg#fk-cabin"/>',
    );
  });
});

describe('/brand/field-kit.svg sprite', () => {
  const asset = readFileSync(new URL('../assets/public/brand/field-kit.svg', import.meta.url), 'utf8');

  it('is the committed output of fieldKitSprite()', () => {
    expect(asset).toBe(`${fieldKitSprite()}\n`);
  });

  it('stays under 6 KB gzip (PLAN §3.6)', () => {
    expect(gzipSize(asset)).toBeLessThanOrEqual(6 * 1024);
  });

  it('has one prefixed symbol per icon', () => {
    const ids = [...asset.matchAll(/<symbol id="([^"]+)"/g)].map((match) => match[1]);
    expect(ids).toEqual(FIELD_KIT_NAMES.map((name) => `fk-${name}`));
  });
});
