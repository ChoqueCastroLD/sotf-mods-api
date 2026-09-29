import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { LEGACY_FIXTURES, validateLegacy } from '@sotf/contracts/legacy';
import { describe, expect, it } from 'vitest';
import { FIXTURE_POLICIES } from '../src/expectations.ts';
import { FIXTURES_DIR, loadFixtures, PACKAGE_DIR, parseIndex } from '../src/fixtures.ts';
import { fetchModsRoute } from '../src/redmanager.ts';

const fixtures = loadFixtures();

describe('golden fixtures', () => {
  it('has the 38 JSON bodies of INDEX.tsv plus the two header captures', () => {
    const files = readdirSync(FIXTURES_DIR);
    expect(files.filter((f) => f.endsWith('.json'))).toHaveLength(38);
    expect(fixtures).toHaveLength(38);
    expect(new Set(fixtures.map((f) => `${f.name}.json`))).toEqual(new Set(files.filter((f) => f.endsWith('.json'))));
    expect(files).toContain('headers-api-stats.txt');
    expect(files).toContain('headers-preflight.txt');
  });

  it('is a byte-identical copy of docs/plan/research/fixtures/01-compat', () => {
    const research = join(PACKAGE_DIR, '..', '..', 'docs', 'plan', 'research', 'fixtures', '01-compat');
    expect(existsSync(research)).toBe(true);
    expect(readdirSync(FIXTURES_DIR).sort()).toEqual(readdirSync(research).sort());
    for (const file of readdirSync(research)) {
      expect(readFileSync(join(FIXTURES_DIR, file)).equals(readFileSync(join(research, file))), file).toBe(true);
    }
  });

  it('agrees with the schema bindings of @sotf/contracts', () => {
    expect(fixtures.map((f) => [f.name, f.route, f.status])).toEqual(
      LEGACY_FIXTURES.map((f) => [f.name, f.route, f.status]),
    );
    for (const f of fixtures) expect(validateLegacy(f.schema, f.body).success, f.name).toBe(true);
  });

  it('re-serialises byte for byte (the simulated server may re-encode bodies)', () => {
    for (const f of fixtures) expect(JSON.stringify(f.body), f.name).toBe(f.raw.toString('utf8'));
  });

  it('has exactly one policy per fixture', () => {
    expect(Object.keys(FIXTURE_POLICIES).sort()).toEqual(fixtures.map((f) => f.name).sort());
  });

  it('marks as UpdatesChecker routes exactly the list routes it calls', () => {
    const uc = Object.entries(FIXTURE_POLICIES)
      .filter(([, p]) => p.updatesChecker)
      .map(([name]) => name)
      .sort();
    expect(uc).toEqual(['mods-default', 'mods-updateschecker-modids', 'mods-updateschecker-page']);
  });

  it('keeps Tier 3 and the 404 probe out of shadow mode', () => {
    expect(FIXTURE_POLICIES['auth-check-noauth']?.shadow).toBe(false);
    expect(FIXTURE_POLICIES['route-404']?.shadow).toBe(false);
  });

  it('builds the exact RedManager URLs that were captured', () => {
    const route = (name: string) => fixtures.find((f) => f.name === name)?.route;
    expect(fetchModsRoute(1)).toBe(route('mods-redmanager-p1'));
    expect(fetchModsRoute(1, false)).toBe(route('mods-redmanager-unapproved'));
    expect(fetchModsRoute(1, true, false, '  kelvin ')).toBe(route('mods-redmanager-search'));
  });

  it('rejects a malformed INDEX.tsv', () => {
    expect(() => parseIndex('a\t/api\t200\n')).toThrow(/4 tab-separated/);
    expect(() => parseIndex('a\t/api\tabc\tapplication/json\n')).toThrow(/bad status/);
  });
});
