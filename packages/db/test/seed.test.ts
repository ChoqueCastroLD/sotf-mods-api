import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { renderTaxonomyDown, renderTaxonomyUp, sqlString, TAXONOMY_MIGRATION } from '../src/seed/sql.ts';
import {
  RETIRED_CATEGORY_SLUGS,
  SEED_CATEGORIES,
  SEED_LOADER_RELEASES,
  SEED_LOCALES,
  SEED_TAG_GROUPS,
  SEED_TAGS,
} from '../src/seed/taxonomy.ts';

const migration = (suffix: string) =>
  readFileSync(new URL(`../migrations/${TAXONOMY_MIGRATION}${suffix}`, import.meta.url), 'utf8');

describe('taxonomy seed (PLAN T0-06)', () => {
  it('has the 12 categories of the plan, in order', () => {
    expect(SEED_CATEGORIES.map((c) => c.slug)).toEqual([
      'quality-of-life',
      'gameplay',
      'building',
      'companions',
      'weapons-gear',
      'vehicles-movement',
      'model-swap',
      'ui-hud',
      'menus-sandbox',
      'multiplayer-servers',
      'library',
      'misc',
    ]);
    expect(SEED_CATEGORIES.map((c) => c.sortOrder)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('maps the legacy slug qol to quality-of-life and retires it', () => {
    expect(SEED_CATEGORIES.find((c) => c.slug === 'quality-of-life')?.legacySlugs).toEqual(['qol']);
    expect(RETIRED_CATEGORY_SLUGS).toEqual(['qol']);
  });

  it('keeps the names the legacy site already shows for the legacy slugs', () => {
    const legacyName = (slug: string) => SEED_CATEGORIES.find((c) => c.slug === slug)?.legacyName;
    expect(legacyName('library')).toBe('Library');
    expect(legacyName('misc')).toBe('Misc');
    expect(legacyName('model-swap')).toBe('Model Swap');
  });

  it('translates every category into the 13 locales', () => {
    expect(SEED_LOCALES).toHaveLength(13);
    for (const c of SEED_CATEGORIES) {
      for (const lc of SEED_LOCALES) {
        expect(c.i18n[lc].name.trim(), `${c.slug}/${lc}`).not.toBe('');
        expect(c.i18n[lc].description.trim(), `${c.slug}/${lc}`).not.toBe('');
      }
      expect(c.icon).toMatch(/^(lucide|fk):[a-z0-9-]+$/);
    }
  });

  it('has about 40 unique curated tags, named in the 13 locales', () => {
    expect(SEED_TAGS.length).toBeGreaterThanOrEqual(35);
    expect(SEED_TAGS.length).toBeLessThanOrEqual(45);
    expect(new Set(SEED_TAGS.map((t) => t.slug)).size).toBe(SEED_TAGS.length);
    for (const t of SEED_TAGS) {
      expect(t.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(SEED_TAG_GROUPS).toContain(t.group);
      expect(t.description.trim()).not.toBe('');
      for (const lc of SEED_LOCALES) expect(t.names[lc].trim(), `${t.slug}/${lc}`).not.toBe('');
    }
    expect(SEED_TAGS.map((t) => t.sortOrder)).toEqual(SEED_TAGS.map((_, i) => i + 1));
  });

  it('seeds RedLoader 0.8.6', () => {
    expect(SEED_LOADER_RELEASES).toEqual([expect.objectContaining({ name: 'RedLoader', version: '0.8.6' })]);
  });
});

describe('0025 is generated from the seed data', () => {
  it('is in sync (run `pnpm --filter @sotf/db gen` after editing src/seed/taxonomy.ts)', () => {
    expect(migration('.sql')).toBe(renderTaxonomyUp());
    expect(migration('.down.sql')).toBe(renderTaxonomyDown());
  });

  it('escapes SQL string literals', () => {
    expect(sqlString("l'île")).toBe("'l''île'");
    expect(renderTaxonomyUp()).toContain("t''accompagnent sur l''île");
  });
});
