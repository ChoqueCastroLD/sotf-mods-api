/**
 * Acceptance (PLAN §12.3 WP-11): the 38 golden fixtures validate with their legacy schema, key
 * order included; the generated schemas are fresh; UpdatesChecker value fields reject `null`.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { FIXTURES_DIR, generateLegacyModule, loadFixtures, OUTPUT_FILE, PACKAGE_DIR } from '../scripts/gen-legacy.ts';
import {
  assertKeyOrder,
  KeyOrderError,
  keyOrderIssues,
  LEGACY_CHECK_MESSAGES,
  LEGACY_FIXTURES,
  LEGACY_GONE_BODY,
  LEGACY_NOT_FOUND_BODY,
  LEGACY_SCHEMAS,
  LegacyCheckResponse,
  LegacyErrorResponse,
  LegacyModDetailResponse,
  LegacyModListItem,
  LegacyModListResponse,
  legacyError,
  legacyListMeta,
  orderKeys,
  parseLegacyModsQuery,
  UPDATES_CHECKER_VALUE_FIELDS,
  validateLegacy,
} from '../src/legacy.ts';

const fixtures = loadFixtures();
const byName = new Map(fixtures.map((fixture) => [fixture.name, fixture]));

function fixtureBody(name: string): unknown {
  const fixture = byName.get(name);
  if (!fixture) throw new Error(`missing fixture ${name}`);
  return structuredClone(fixture.body);
}

describe('golden fixtures', () => {
  it('has the 38 JSON fixtures listed in INDEX.tsv', () => {
    const files = readdirSync(FIXTURES_DIR).filter((file) => file.endsWith('.json'));
    expect(files).toHaveLength(38);
    expect(fixtures).toHaveLength(38);
    expect(new Set(fixtures.map((f) => `${f.name}.json`))).toEqual(new Set(files));
    expect(LEGACY_FIXTURES.map((f) => f.name)).toEqual(fixtures.map((f) => f.name));
  });

  it('keeps the copy byte-identical to docs/plan/research/fixtures/01-compat', () => {
    const research = join(PACKAGE_DIR, '..', '..', 'docs', 'plan', 'research', 'fixtures', '01-compat');
    if (!existsSync(research)) return;
    for (const file of readdirSync(research)) {
      expect(readFileSync(join(FIXTURES_DIR, file)).equals(readFileSync(join(research, file))), file).toBe(true);
    }
  });

  it.each(LEGACY_FIXTURES.map((f) => [f.name, f] as const))(
    '%s validates with its schema and key order',
    (name, meta) => {
      const schema = LEGACY_SCHEMAS[meta.schema];
      const result = validateLegacy(schema, fixtureBody(name));
      if (!result.success) {
        throw new Error(
          `${name}: ${JSON.stringify({ zod: result.zodIssues.slice(0, 3), keyOrder: result.keyOrder.slice(0, 3) })}`,
        );
      }
      expect(result.success).toBe(true);
    },
  );

  it('binds error fixtures to the legacy error envelope and statuses to INDEX.tsv', () => {
    for (const meta of LEGACY_FIXTURES) {
      expect(meta.contentType).toBe('application/json');
      if (meta.status >= 400) expect(meta.schema).toBe('LegacyErrorResponse');
    }
  });

  it('keeps src/legacy.gen.ts in sync with the fixtures and the spec', () => {
    expect(generateLegacyModule(fixtures)).toBe(readFileSync(OUTPUT_FILE, 'utf8'));
  });
});

describe('key order', () => {
  const listBody = fixtureBody('mods-default') as { data: Array<Record<string, unknown>> };

  it('detects a swapped pair of keys in a nested object', () => {
    const item = listBody.data[0] as Record<string, unknown>;
    const { id, name, ...rest } = item;
    const swapped = { ...listBody, data: [{ name, id, ...rest }, ...listBody.data.slice(1)] };
    const issues = keyOrderIssues(LegacyModListResponse, swapped);
    expect(issues).toHaveLength(1);
    expect(issues[0]?.path).toBe('$.data[0]');
    expect(() => assertKeyOrder(LegacyModListResponse, swapped)).toThrow(KeyOrderError);
    // The schema alone cannot see the difference: key order is an extra check.
    expect(LegacyModListResponse.safeParse(swapped).success).toBe(true);
  });

  it('detects wrong order deep inside arrays of objects', () => {
    const detail = fixtureBody('mod-by-id') as { data: { versions: Array<Record<string, unknown>> } };
    const version = detail.data.versions[0] as Record<string, unknown>;
    const { _count, ...rest } = version;
    detail.data.versions[0] = { _count, ...rest };
    const issues = keyOrderIssues(LegacyModDetailResponse, detail);
    expect(issues.map((issue) => issue.path)).toEqual(['$.data.versions[0]']);
  });

  it('orderKeys restores the declared order byte for byte', () => {
    const original = JSON.stringify(listBody);
    const shuffled = JSON.parse(original, (_key, value: unknown) => {
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        return Object.fromEntries(Object.entries(value).reverse());
      }
      return value;
    }) as unknown;
    expect(JSON.stringify(shuffled)).not.toBe(original);
    expect(JSON.stringify(orderKeys(LegacyModListResponse, shuffled))).toBe(original);
  });

  it('rejects unknown keys (strict objects)', () => {
    const item = { ...(listBody.data[0] as object), extra: 1 };
    expect(LegacyModListItem.safeParse(item).success).toBe(false);
  });
});

describe('UpdatesChecker value types (research/01 §1.2)', () => {
  const list = fixtureBody('mods-updateschecker-page') as {
    data: Array<
      Record<string, unknown> & { images: Array<Record<string, unknown>>; versions: Array<Record<string, unknown>> }
    >;
    meta: Record<string, unknown>;
  };

  it.each(UPDATES_CHECKER_VALUE_FIELDS.mod.map((field) => [field]))('mod.%s never accepts null', (field) => {
    const item = { ...(list.data[0] as object), [field]: null };
    expect(LegacyModListItem.safeParse(item).success).toBe(false);
  });

  it('meta fields are integers (pages may only be null in the legacy limit=0 bug)', () => {
    for (const field of UPDATES_CHECKER_VALUE_FIELDS.meta) {
      const mutated = { ...list, meta: { ...list.meta, [field]: 'x' } };
      expect(LegacyModListResponse.safeParse(mutated).success, field).toBe(false);
    }
  });

  it('rejects downloads: null (the mutation the .NET checker must also reject)', () => {
    const mutated = { ...list, data: [{ ...(list.data[0] as object), downloads: null }] };
    expect(LegacyModListResponse.safeParse(mutated).success).toBe(false);
  });

  it('keeps averageRating a number and accepts real averages', () => {
    const item = { ...(list.data[0] as object), averageRating: 4.5 };
    expect(LegacyModListItem.safeParse(item).success).toBe(true);
  });
});

describe('legacy conventions', () => {
  it('404 and 410 bodies match the contract', () => {
    expect(LEGACY_NOT_FOUND_BODY).toEqual(fixtureBody('mod-404'));
    expect(JSON.stringify(LEGACY_NOT_FOUND_BODY)).toBe(JSON.stringify(fixtureBody('route-404')));
    expect(LegacyErrorResponse.parse(LEGACY_GONE_BODY)).toEqual(LEGACY_GONE_BODY);
    expect(JSON.stringify(LEGACY_GONE_BODY)).toBe(
      '{"status":false,"error":"GONE","message":"This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers"}',
    );
    expect(JSON.stringify(legacyError('VALIDATION'))).toBe(JSON.stringify(fixtureBody('mod-find-missing-param')));
  });

  it('check messages are the three exact strings', () => {
    for (const name of ['check-outdated', 'check-current', 'check-noversion']) {
      const body = LegacyCheckResponse.parse(fixtureBody(name));
      expect(Object.values(LEGACY_CHECK_MESSAGES)).toContain(body.message);
    }
  });

  it('meta formula reproduces every paginated fixture', () => {
    for (const name of [
      'mods-default',
      'mods-redmanager-p1',
      'mods-updateschecker-page',
      'mods-frontend-list',
      'mods-user',
    ]) {
      const { meta } = LegacyModListResponse.parse(fixtureBody(name));
      expect(legacyListMeta(meta.total, meta.page, meta.limit), name).toEqual(meta);
    }
    expect(legacyListMeta(0, 1, 10)).toEqual({ total: 0, page: 1, limit: 10, pages: 0, next_page: 0, prev_page: 1 });
  });

  it('parses the query strings of RedManager and UpdatesChecker', () => {
    const redmanager = parseLegacyModsQuery({
      '': '',
      approved: 'true',
      orderby: 'newest',
      page: '1',
      nsfw: 'false',
      search: 'kelvin',
    });
    expect(redmanager).toEqual({
      ok: true,
      value: {
        type: 'Mod',
        page: 1,
        limit: 10,
        search: 'kelvin',
        userSlug: null,
        userSlugFavorites: null,
        modIds: null,
        approved: true,
        nsfw: false,
        orderby: 'newest',
        category: null,
      },
    });
    const updates = parseLegacyModsQuery({ limit: '5', modIds: 'AxelModMenu, SonsAxLib,,UpdatesChecker' });
    expect(updates.ok && updates.value.modIds).toEqual(['AxelModMenu', 'SonsAxLib', 'UpdatesChecker']);
    expect(updates.ok && updates.value.type).toBeNull();
    expect(parseLegacyModsQuery({ approved: 'nope' })).toMatchObject({ ok: true, value: { approved: false } });
    expect(parseLegacyModsQuery({ type: 'Both' })).toMatchObject({ ok: true, value: { type: null } });
    expect(parseLegacyModsQuery({ orderby: 'unknown', _t: '123' })).toMatchObject({
      ok: true,
      value: { orderby: 'newest' },
    });
  });

  it('answers VALIDATION (422) for the legacy 500 cases', () => {
    for (const query of [{ limit: 'abc' }, { limit: '0' }, { limit: '1001' }, { page: '0' }, { page: 'x' }]) {
      expect(parseLegacyModsQuery(query)).toEqual({
        ok: false,
        error: { status: false, error: 'VALIDATION', message: ': undefined' },
      });
    }
  });
});
