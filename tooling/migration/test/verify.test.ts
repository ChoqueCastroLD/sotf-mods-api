import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { collisionsCsv } from '../src/backfills/b06-email-normalized.ts';
import { parseDependencyCsv } from '../src/backfills/b10-dependencies.ts';
import { BACKFILLS, DELTA_BACKFILLS, selectBackfills } from '../src/backfills/index.ts';
import { SQL_DIR } from '../src/constants.ts';
import { internalLinks } from '../src/invariants.ts';
import { compareSnapshots, type Snapshot, sqlSections } from '../src/verify-snapshot.ts';

const base = (): Snapshot => ({
  format: 1,
  tables: {
    Mod: { count: 2, md5: 'mod-before' },
    User: { count: 3, md5: 'user' },
    ModFavorite: { count: 4, md5: 'fav-before' },
    ModDownload: { count: 10, md5: 'dl' },
  },
  sums: { downloads: 10, favoritesCount: 4, commentsCount: 0, lastWeekDownloads: 1 },
  modDownloadBlocks: [{ block: 0, count: 10, md5: 'b0' }],
});

describe('compareSnapshots', () => {
  it('accepts differences explained by audited fixes and the B5 archive', () => {
    const before = base();
    const after = base();
    after.tables.Mod = { count: 2, md5: 'mod-after' };
    after.tables.ModFavorite = { count: 3, md5: 'fav-after' };
    after.fixes = {
      Mod: { count: 2, md5: 'mod-before' },
      User: { count: 3, md5: 'user' },
      ModFavorite: { count: 4, md5: 'fav-before' },
      audit: { 'B4:Mod.type': 1 },
      archive: { dedupe: 1 },
    };
    const diff = compareSnapshots(before, after);
    expect(diff.ok).toBe(true);
    expect(diff.differences.map((d) => [d.where, d.kind])).toEqual([
      ['Mod', 'expected'],
      ['ModFavorite', 'expected'],
    ]);
  });

  it('rejects unexplained changes, counter drift and download blocks', () => {
    const before = base();
    const after = base();
    after.tables.User = { count: 3, md5: 'changed' };
    after.sums.downloads = 11;
    after.modDownloadBlocks = [{ block: 0, count: 10, md5: 'other' }];
    after.fixes = {
      Mod: { count: 2, md5: 'mod-before' },
      User: { count: 3, md5: 'changed' },
      ModFavorite: { count: 4, md5: 'fav-before' },
      audit: {},
      archive: {},
    };
    const diff = compareSnapshots(before, after);
    expect(diff.ok).toBe(false);
    expect(diff.differences.filter((d) => d.kind === 'unexpected').map((d) => d.where)).toEqual([
      'User',
      'sum(downloads)',
      'ModDownload block 0',
    ]);
  });

  it('strict mode also compares the v2 section', () => {
    const a = { ...base(), v2: { Mod: 'x' } };
    const b = { ...base(), v2: { Mod: 'y' } };
    expect(compareSnapshots(a, b).ok).toBe(true);
    expect(compareSnapshots(a, b, { strict: true }).ok).toBe(false);
    expect(compareSnapshots(a, { ...a }, { strict: true }).ok).toBe(true);
  });
});

describe('SQL files', () => {
  it('invariants.sql has the ten invariants of PLAN §6.11', () => {
    const sections = [...sqlSections(readFileSync(join(SQL_DIR, 'invariants.sql'), 'utf8')).keys()];
    expect(sections.map((s) => Number(s.split('-')[0]))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('verify-snapshot.sql has a legacy and a v2 section, and profile.sql Q-P0…Q-P10', () => {
    expect([...sqlSections(readFileSync(join(SQL_DIR, 'verify-snapshot.sql'), 'utf8')).keys()]).toEqual([
      'legacy',
      'v2',
    ]);
    const profile = [...sqlSections(readFileSync(join(SQL_DIR, 'profile.sql'), 'utf8')).keys()];
    for (let i = 0; i <= 10; i += 1) expect(profile.some((s) => s.startsWith(`Q-P${i}`))).toBe(true);
  });

  it('never modifies legacy data outside the audited fixes', () => {
    for (const file of ['verify-snapshot.sql', 'invariants.sql', 'profile.sql']) {
      const text = readFileSync(join(SQL_DIR, file), 'utf8').replace(/--.*$/gm, '');
      expect(text).not.toMatch(/\b(UPDATE|DELETE|INSERT|TRUNCATE|ALTER|DROP)\b/i);
    }
  });
});

describe('helpers', () => {
  it('extracts internal links with decoded segments', () => {
    const links = internalLinks(
      1,
      'See [x](https://sotf-mods.com/mods/imaxel/axel) and https://www.sotf-mods.com/mods/regi/regi%27s-lib), ' +
        '<a href="https://sotf-mods.com/profile/smokyace">me</a> and sotf-mods.com/mods/only-user',
    );
    expect(links.map((l) => [l.kind, l.user, l.slug])).toEqual([
      ['mods', 'imaxel', 'axel'],
      ['mods', 'regi', "regi's-lib"],
      ['profile', 'smokyace', null],
    ]);
  });

  it('parses the legacy dependency CSV', () => {
    expect(parseDependencyCsv('SimpleNetworkEvents,Banking')).toEqual(['SimpleNetworkEvents', 'Banking']);
    expect(parseDependencyCsv(' A , ,A,B ')).toEqual(['A', 'B']);
    expect(parseDependencyCsv('')).toEqual([]);
    expect(parseDependencyCsv(null)).toEqual([]);
  });

  it('writes RFC 4180 CSV for the email collisions', () => {
    const csv = collisionsCsv([
      { emailNormalized: 'a@b.c', id: 1, email: 'A@b.c', createdAt: new Date(0), mods: 0, comments: 2 },
      { emailNormalized: 'a@b.c', id: 2, email: '"weird",@b.c', createdAt: new Date(0), mods: 1, comments: 0 },
    ]);
    expect(csv.split('\n')[2]).toBe('a@b.c,2,"""weird"",@b.c",1970-01-01T00:00:00.000Z,1,0');
  });
});

describe('backfill registry', () => {
  it('covers B1–B7 and B9–B14 in dependency order', () => {
    const ids = BACKFILLS.map((b) => b.id);
    expect([...ids].sort()).toEqual([
      'B1',
      'B10',
      'B11',
      'B12',
      'B13',
      'B14',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B9',
    ]);
    expect(ids.indexOf('B12')).toBeLessThan(ids.indexOf('B11'));
    expect(ids.indexOf('B1')).toBeLessThan(ids.indexOf('B11'));
    expect(ids.indexOf('B5')).toBeLessThan(ids.indexOf('B11'));
    expect(DELTA_BACKFILLS.map((b) => b.id)).toEqual(['B12', 'B14', 'B1', 'B11']);
    expect(BACKFILLS.filter((b) => b.touchesLegacy).map((b) => b.id)).toEqual(['B4', 'B5']);
  });

  it('selects by id and names the command of the backfills run elsewhere', () => {
    expect(selectBackfills(['b11,B1']).map((b) => b.id)).toEqual(['B1', 'B11']);
    expect(() => selectBackfills(['B8'])).toThrow(/WP-84.*r2:manifest-fixes/);
    expect(() => selectBackfills(['b4m'])).toThrow(/r2:manifest-fixes/);
    expect(() => selectBackfills(['B16'])).toThrow(/node dist\/backfill\.js B16/);
    expect(() => selectBackfills(['B15', 'B17'])).toThrow(/B15 is the R2 pass.*r2:b17/);
    expect(() => selectBackfills(['B99'])).toThrow(/unknown backfill/);
  });
});
