import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { fieldTarget, hasContent, listingPath, SLUG_PATTERN, slugify, stepFromNumber } from './wizard.ts';

/** Source text of a top-level `export function <name>` (for parity checks with @sotf/core). */
function functionSource(path: string, name: string): string {
  const text = readFileSync(path, 'utf8');
  const start = text.indexOf(`export function ${name}(`);
  if (start < 0) throw new Error(`${name} not found in ${path}`);
  const end = text.indexOf('\n}\n', start);
  return text.slice(start, end + 2);
}

describe('slugify', () => {
  it('matches the API implementation (packages/core publishing/listing.ts) character for character', () => {
    const core = fileURLToPath(
      new URL('../../../../../../../packages/core/src/publishing/listing.ts', import.meta.url),
    );
    const web = fileURLToPath(new URL('./wizard.ts', import.meta.url));
    expect(functionSource(web, 'slugify')).toBe(functionSource(core, 'slugify'));
  });

  it('builds URL-safe slugs', () => {
    expect(slugify("Axel's Mod Menu")).toBe('axels-mod-menu');
    expect(slugify('  Über   Größe!! ')).toBe('uber-gro-e');
    expect(slugify('Ñandú ✨ 2')).toBe('nandu-2');
    expect(slugify('x')).toBe('');
    expect(slugify('日本語')).toBe('');
    const long = slugify(`${'a'.repeat(79)} b`);
    expect(long.length).toBeLessThanOrEqual(80);
    expect(long.endsWith('-')).toBe(false);
    for (const value of ["Axel's Mod Menu", 'Stack Mod v3.1', 'a--b']) expect(slugify(value)).toMatch(SLUG_PATTERN);
  });
});

describe('stepFromNumber', () => {
  it('maps the stored global step number to a step of the mode', () => {
    expect(stepFromNumber('mod', 3)).toBe('compat');
    expect(stepFromNumber('version', 5)).toBe('release');
    expect(stepFromNumber('build', 4)).toBe('media');
  });

  it('falls back to the first step for unknown or skipped steps', () => {
    expect(stepFromNumber('mod', undefined)).toBe('file');
    expect(stepFromNumber('version', 2)).toBe('file');
    expect(stepFromNumber('build', 3)).toBe('file');
  });
});

describe('fieldTarget', () => {
  it('points preflight rows at the field of a visible step', () => {
    expect(fieldTarget('mod', 'tagSlugs')).toEqual({ step: 'details', anchor: 'upload-tags' });
    expect(fieldTarget('version', 'changelogMd')).toEqual({ step: 'release', anchor: 'upload-changelog' });
  });

  it('returns null for unknown fields and fields of steps the mode skips', () => {
    expect(fieldTarget('mod', 'nope')).toBeNull();
    expect(fieldTarget('version', 'name')).toBeNull();
    expect(fieldTarget('build', 'platform')).toBeNull();
  });
});

describe('hasContent', () => {
  it('ignores the step and empty values', () => {
    expect(hasContent({ step: 2 })).toBe(false);
    expect(hasContent({ name: '   ', tagSlugs: [] })).toBe(false);
    expect(hasContent({ name: 'Stack' })).toBe(true);
    expect(hasContent({ tagSlugs: ['inventory'] })).toBe(true);
  });
});

describe('listingPath', () => {
  it('uses the public URL of the kind', () => {
    expect(listingPath('mod', 'ana', 'stack')).toBe('/mods/ana/stack');
    expect(listingPath('build', 'ana', 'fort')).toBe('/builds/ana/fort');
  });
});
