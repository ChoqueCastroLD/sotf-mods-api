import { LegacyModListResponse } from '@sotf/contracts/legacy';
import { describe, expect, it } from 'vitest';
import {
  type CompareContext,
  compareResponse,
  diffById,
  diffValues,
  metaDiffs,
  updatesCheckerDiffs,
} from '../src/compare.ts';
import type { DeviationId } from '../src/deviations.ts';
import { policyOf } from '../src/expectations.ts';
import { fixtureBody, fixtureByName } from '../src/fixtures.ts';
import { breakTies, compilePathPattern, normalize, volatileToken } from '../src/normalize.ts';

const ctx = (...deviations: DeviationId[]): CompareContext => ({ deviations: new Set(deviations), used: new Set() });
const json = (value: unknown) => Buffer.from(JSON.stringify(value));

function observe(name: string, body: unknown, status?: number, contentType = 'application/json') {
  const f = fixtureByName(name);
  return compareResponse(
    f.route,
    f.schema,
    policyOf(name),
    { status: f.status, body: f.body },
    { status: status ?? f.status, contentType, body: json(body) },
  );
}

type List = { data: Array<Record<string, unknown>>; meta: Record<string, unknown> };

describe('normalize', () => {
  it('replaces volatile counters by a token that keeps the JSON type', () => {
    const out = normalize({
      downloads: 5,
      updatedAt: '2026-01-01T00:00:00.000Z',
      name: 'x',
      _count: { favorites: 2 },
      averageRating: 0,
    }) as Record<string, unknown>;
    expect(out).toEqual({
      downloads: volatileToken(1),
      updatedAt: volatileToken('s'),
      name: 'x',
      _count: { favorites: volatileToken(1) },
      averageRating: volatileToken(1),
    });
    expect(normalize({ downloads: null })).not.toEqual(normalize({ downloads: 3 }));
  });

  it('applies volatile paths and keeps key order', () => {
    const out = normalize({ status: true, data: { users: 1, mods: 2 } }, { volatilePaths: ['$.data.*'] });
    expect(Object.keys(out as object)).toEqual(['status', 'data']);
    expect((out as { data: unknown }).data).toEqual({ users: volatileToken(1), mods: volatileToken(1) });
    expect(compilePathPattern('$.data[*].count').test('$.data.3.count')).toBe(true);
  });

  it('re-orders ties by id only inside runs of equal sort keys', () => {
    const items = [
      { id: 3, k: 'b' },
      { id: 2, k: 'a' },
      { id: 1, k: 'a' },
      { id: 0, k: 'c' },
    ];
    expect(breakTies(items, 'k').map((i) => (i as { id: number }).id)).toEqual([3, 1, 2, 0]);
  });

  it('drops hidden comments and replies', () => {
    const out = normalize(
      {
        data: [
          { id: 1, isHidden: true },
          { id: 2, isHidden: false, replies: [{ id: 3, isHidden: true }] },
        ],
      },
      { dropHidden: true },
    );
    expect(out).toEqual({ data: [{ id: 2, isHidden: false, replies: [] }] });
  });
});

describe('diffValues', () => {
  it('reports key order, missing, extra, type and value differences', () => {
    const diffs = diffValues({ a: 1, b: 2, c: 3 }, { b: 2, a: '1', d: 4 }, ctx());
    expect(diffs.map((d) => `${d.kind}@${d.path}`).sort()).toEqual(
      ['extra@$.d', 'missing@$.c', 'order@$', 'type@$.a'].sort(),
    );
  });

  it('accepts type null → Mod/Library only with the type-null deviation', () => {
    expect(diffValues({ type: null }, { type: 'Mod' }, ctx())).toHaveLength(1);
    const c = ctx('type-null');
    expect(diffValues({ type: null }, { type: 'Library' }, c)).toEqual([]);
    expect(c.used.has('type-null')).toBe(true);
    expect(diffValues({ type: null }, { type: 'Build' }, ctx('type-null'))).toHaveLength(1);
  });

  it('matches items by id', () => {
    const e = [
      { id: 1, v: 1 },
      { id: 2, v: 2 },
    ];
    expect(
      diffById(
        e,
        [
          { id: 2, v: 2 },
          { id: 3, v: 3 },
        ],
        {},
        ctx(),
      )
        .map((d) => d.kind)
        .sort(),
    ).toEqual(['extra', 'missing']);
    expect(
      diffById(
        e,
        [
          { id: 2, v: 2 },
          { id: 3, v: 3 },
        ],
        { allowExtra: true, allowMissing: true },
        ctx(),
      ),
    ).toEqual([]);
    expect(diffById(e, [{ id: 2, v: 9 }], { allowMissing: true }, ctx())[0]?.kind).toBe('value');
    expect(
      diffById(
        e,
        [
          { id: 1, v: 1 },
          { id: 1, v: 1 },
        ],
        { allowMissing: true },
        ctx(),
      )[0]?.message,
    ).toMatch(/duplicate/);
  });
});

describe('metaDiffs and UpdatesChecker value fields', () => {
  it('checks the pagination arithmetic', () => {
    const body = fixtureBody<List>('mods-redmanager-p1');
    expect(metaDiffs(body, { page: 1, limit: 10 })).toEqual([]);
    body.meta.pages = 18;
    body.meta.next_page = 3;
    expect(metaDiffs(body, { page: 1, limit: 10 }).map((d) => d.path)).toEqual(['$.meta.pages', '$.meta.next_page']);
  });

  it('accepts the list fixtures UpdatesChecker reads and rejects null value fields', () => {
    for (const name of ['mods-default', 'mods-updateschecker-modids', 'mods-updateschecker-page']) {
      expect(updatesCheckerDiffs(fixtureBody(name)), name).toEqual([]);
    }
    expect(updatesCheckerDiffs(fixtureBody('mods-limit0')).map((d) => d.path)).toEqual(['$.meta.pages']);
    const body = fixtureBody<List>('mods-default');
    const mod = body.data[0] as Record<string, unknown>;
    mod.downloads = null;
    mod.averageRating = '4.5';
    mod.lastReleasedAt = null;
    (mod._count as Record<string, unknown>).favorites = null;
    expect(updatesCheckerDiffs(body).map((d) => d.path)).toEqual([
      '$.data[0].downloads',
      '$.data[0].averageRating',
      '$.data[0].lastReleasedAt',
      '$.data[0]._count.favorites',
    ]);
  });
});

describe('compareResponse', () => {
  it('passes every fixture against itself', () => {
    for (const name of [
      'mods-redmanager-p1',
      'mod-by-id',
      'check-current',
      'comments',
      'stats',
      'auth-check-noauth',
      'mod-404',
    ]) {
      const result = observe(name, fixtureBody(name));
      expect(result.diffs, name).toEqual([]);
      expect(result.outcome).toBe('legacy');
    }
  });

  it('ignores volatile counters but not their type', () => {
    const body = fixtureBody<List>('mods-redmanager-p1');
    (body.data[0] as Record<string, unknown>).downloads = 999_999;
    (body.data[1] as Record<string, unknown>).updatedAt = '2030-01-01T00:00:00.000Z';
    expect(observe('mods-redmanager-p1', body).ok).toBe(true);
    (body.data[2] as Record<string, unknown>).downloads = null;
    expect(observe('mods-redmanager-p1', body).ok).toBe(false);
  });

  it('fails on a renamed field, a changed value, a key order change or a charset', () => {
    const renamed = fixtureBody<List>('mods-redmanager-p1');
    const first = renamed.data[0] as Record<string, unknown>;
    first.mod_Id = first.mod_id;
    delete first.mod_id;
    expect(observe('mods-redmanager-p1', renamed).ok).toBe(false);

    const changed = fixtureBody<List>('mod-by-id');
    (changed.data as unknown as Record<string, unknown>).dependencies = ['SonsAxLib'];
    expect(observe('mod-by-id', changed).diffs.some((d) => d.path === '$.data.dependencies')).toBe(true);

    const reordered = fixtureBody<Record<string, unknown>>('check-current');
    const { status, ...rest } = reordered;
    expect(observe('check-current', { ...rest, status }).diffs.some((d) => d.kind === 'order')).toBe(true);

    expect(observe('stats', fixtureBody('stats'), 200, 'application/json; charset=utf-8').diffs[0]?.kind).toBe(
      'content-type',
    );
  });

  it('accepts the v2 alternatives with their deviation and nothing else', () => {
    const v2 = observe(
      'check-invalid',
      { status: false, error: 'VALIDATION', message: 'Invalid Version: notsemver' },
      422,
    );
    expect(v2).toMatchObject({ ok: true, outcome: 'v2', deviations: ['validation-422'] });
    expect(observe('check-invalid', { status: false, error: 'UNKNOWN', message: 'x' }, 422).ok).toBe(false);
    expect(observe('check-invalid', { status: false, error: 'VALIDATION', message: 'x' }, 400).diffs[0]?.kind).toBe(
      'status',
    );
    const gone = observe(
      'auth-check-noauth',
      {
        status: false,
        error: 'GONE',
        message: 'This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers',
      },
      410,
    );
    expect(gone).toMatchObject({ ok: true, deviations: ['tier3-gone'] });
    expect(observe('auth-check-noauth', { status: false, error: 'GONE', message: 'bye' }, 410).ok).toBe(false);
    expect(observe('mods-limit0', { status: false, error: 'VALIDATION', message: ': undefined' }, 422).ok).toBe(true);
  });

  it('keeps the Spanish 404 literal', () => {
    expect(observe('mod-404', { status: false, error: 'NOT_FOUND', message: 'Not found' }).ok).toBe(false);
  });

  it('lets data-dependent lists differ in membership only where a deviation allows it', () => {
    const unapproved = fixtureBody<List>('mods-redmanager-unapproved');
    unapproved.data = unapproved.data.slice(2);
    unapproved.meta = { ...unapproved.meta, total: 8, pages: 1, next_page: 1 };
    const r = observe('mods-redmanager-unapproved', unapproved);
    expect(r.diffs).toEqual([]);
    expect(r.deviations).toContain('approved-false');

    const p1 = fixtureBody<List>('mods-redmanager-p1');
    p1.data = p1.data.slice(1);
    expect(observe('mods-redmanager-p1', p1).ok).toBe(false);
  });

  it('accepts a type backfilled from null in the UpdatesChecker modIds list', () => {
    const body = fixtureBody<List>('mods-default');
    const mod = body.data[0] as Record<string, unknown>;
    const f = fixtureByName('mods-default');
    const ref = structuredClone(f.body) as List;
    (ref.data[0] as Record<string, unknown>).type = null;
    mod.type = 'Mod';
    const r = compareResponse(
      f.route,
      LegacyModListResponse,
      policyOf('mods-default'),
      { status: 200, body: ref },
      { status: 200, contentType: 'application/json', body: json(body) },
    );
    expect(r).toMatchObject({ ok: true, deviations: ['type-null'] });
  });
});
