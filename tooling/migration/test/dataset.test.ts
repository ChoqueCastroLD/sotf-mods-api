import { describe, expect, it } from 'vitest';
import { EXPECTED, INJECTED, SMALL_DOWNLOADS } from '../src/constants.ts';
import { createRng } from '../src/prng.ts';
import { buildDataset, scaleCounts } from '../src/seed/dataset.ts';
import { copyLines, drawClient, planDownloads } from '../src/seed/downloads.ts';
import { loadSnapshot } from '../src/seed/snapshot.ts';

const snapshot = loadSnapshot();

describe('snapshot', () => {
  it('has the volumes of research/02 §3.1', () => {
    expect(snapshot.mods).toHaveLength(EXPECTED.mods);
    expect(snapshot.versions).toHaveLength(EXPECTED.versions);
    expect(snapshot.comments).toHaveLength(EXPECTED.comments);
    expect(snapshot.categories).toHaveLength(25);
    expect(snapshot.users).toHaveLength(192);
    expect(snapshot.users.filter((u) => u.role === 'author')).toHaveLength(59);
    expect(snapshot.users.filter((u) => u.id >= 100_000)).toHaveLength(133);
    expect(snapshot.versions.reduce((s, v) => s + v.downloads, 0)).toBe(EXPECTED.downloads - EXPECTED.orphanDownloads);
    expect(snapshot.mods.filter((m) => m.type === null)).toHaveLength(19);
    expect(snapshot.mods.filter((m) => !m.isApproved)).toHaveLength(28);
  });
});

describe('buildDataset (full)', () => {
  const data = buildDataset(snapshot);

  it('is deterministic', () => {
    const again = buildDataset(snapshot);
    expect(again.users).toEqual(data.users);
    expect(again.favorites).toEqual(data.favorites);
    expect(again.tokens).toEqual(data.tokens);
    expect(again.downloads).toEqual(data.downloads);
  });

  it('reproduces the private volumes', () => {
    expect(data.users).toHaveLength(EXPECTED.users);
    expect(data.favorites).toHaveLength(EXPECTED.favorites + INJECTED.duplicateFavorites);
    expect(data.totalDownloads).toBe(EXPECTED.downloads);
    expect(data.downloads.find((s) => s.modVersionId === null)?.count).toBe(EXPECTED.orphanDownloads);
  });

  it('keeps ids, slugs and emails unique (emails case-sensitively, like the legacy index)', () => {
    expect(new Set(data.users.map((u) => u.id)).size).toBe(data.users.length);
    expect(new Set(data.users.map((u) => u.slug)).size).toBe(data.users.length);
    expect(new Set(data.users.map((u) => u.email)).size).toBe(data.users.length);
    const normalized = data.users.map((u) => u.email.trim().toLowerCase());
    expect(normalized.length - new Set(normalized).size).toBe(1);
  });

  it('injects the rare cases', () => {
    expect(data.users.filter((u) => u.password.startsWith('$2b$10$'))).toHaveLength(1);
    const pairs = data.favorites.map((f) => `${f.userId}:${f.modId}`);
    expect(pairs.length - new Set(pairs).size).toBe(INJECTED.duplicateFavorites);
    expect(data.rareCases.fileMissingVersions).toEqual([414]);
    expect((data.rareCases.commentsWithEntities as number[]).length).toBeGreaterThan(0);
    expect(data.tokens.every((t) => t.expiresAt < '2026-09-29')).toBe(true);
  });

  it('never creates an account after its first activity or a follow before its account', () => {
    const created = new Map(data.users.map((u) => [u.id, u.createdAt]));
    for (const m of data.mods)
      if (m.userId !== null) expect((created.get(m.userId) ?? 'missing') <= m.createdAt).toBe(true);
    for (const c of data.comments) expect((created.get(c.userId) ?? 'missing') <= c.createdAt).toBe(true);
    for (const f of data.favorites) expect((created.get(f.userId) ?? 'missing') <= f.createdAt).toBe(true);
  });
});

describe('buildDataset (small)', () => {
  it('scales downloads to exactly 10 000 and keeps Mod.downloads consistent', () => {
    const data = buildDataset(snapshot, { small: true });
    expect(data.totalDownloads).toBe(SMALL_DOWNLOADS);
    const perVersion = new Map(data.downloads.map((s) => [s.modVersionId, s.count]));
    for (const m of data.mods) {
      const sum = data.versions.filter((v) => v.modId === m.id).reduce((s, v) => s + (perVersion.get(v.id) ?? 0), 0);
      expect(m.downloads).toBe(sum);
      expect(m.lastWeekDownloads).toBeLessThanOrEqual(m.downloads);
    }
  });

  it('scaleCounts uses largest remainders', () => {
    expect(scaleCounts([1, 1, 1], 2)).toEqual([1, 1, 0]);
    expect(scaleCounts([5, 3, 2], 20)).toEqual([10, 6, 4]);
    expect(scaleCounts([0, 0], 5)).toEqual([0, 0]);
    expect(scaleCounts([7, 11, 13], 10).reduce((a, b) => a + b, 0)).toBe(10);
  });
});

describe('downloads', () => {
  it('plans rows sorted by time with the requested counts', () => {
    const plan = planDownloads([
      { modVersionId: 7, count: 50, start: 1_000_000, end: 2_000_000, recent: 10, recentStart: 1_900_000 },
      { modVersionId: null, count: 5, start: 1_000_000, end: 2_000_000, recent: 0, recentStart: 2_000_000 },
    ]);
    expect(plan.times).toHaveLength(55);
    for (let i = 1; i < plan.times.length; i += 1) expect((plan.times[i] ?? 0) >= (plan.times[i - 1] ?? 0)).toBe(true);
    expect([...plan.versions].filter((v) => v === 0)).toHaveLength(5);
    const recent = [...plan.times].filter((t, i) => plan.versions[i] === 7 && t >= 1_900_000);
    expect(recent.length).toBeGreaterThanOrEqual(10);
  });

  it('draws the legacy ip shapes in the expected proportions', () => {
    const rng = createRng(1);
    const counts = { undefined: 0, null: 0, empty: 0, multi: 0, web: 0 };
    for (let i = 0; i < 20_000; i += 1) {
      const { ip } = drawClient(rng, ['1.2.3.4', '5.6.7.8']);
      if (ip === 'undefined') counts.undefined += 1;
      else if (ip === 'null') counts.null += 1;
      else if (ip === '') counts.empty += 1;
      else if (ip.includes(',')) counts.multi += 1;
      else counts.web += 1;
    }
    expect(counts.undefined / 20_000).toBeCloseTo(0.3, 1);
    expect(counts.null).toBeGreaterThan(0);
    expect(counts.empty).toBeGreaterThan(0);
    expect(counts.multi).toBeGreaterThan(0);
  });

  it('emits COPY text lines with NULL versions as \\N', () => {
    const plan = { times: new Float64Array([Date.UTC(2024, 0, 1)]), versions: new Int32Array([0]) };
    const [chunk] = [...copyLines(plan)];
    expect(chunk).toMatch(/\t2024-01-01T00:00:00\.000Z\t2024-01-01T00:00:00\.000Z\t\\N\n$/);
  });
});
