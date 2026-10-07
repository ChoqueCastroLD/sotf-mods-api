/**
 * Game builds from Steam against PostgreSQL 16 with recorded fixtures (no network): a new build is
 * registered and made current, a known one is left alone, announcements name or rename builds,
 * failures are stored and back off, a seeded row is adopted, and the B21 seed is idempotent.
 */
import { readFileSync } from 'node:fs';
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import {
  parseSteamInfo,
  parseSteamNews,
  readSteamState,
  type SteamClient,
  SteamError,
  syncGameBuilds,
} from '@sotf/core/steam/index';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { runB21 } from '../backfill/b21.ts';

const fixture = (name: string): unknown =>
  JSON.parse(readFileSync(new URL(`../../../../../packages/core/src/steam/fixtures/${name}`, import.meta.url), 'utf8'));

const INFO = fixture('steamcmd-info.json');
const MIXED = parseSteamNews(fixture('news-mixed.json'));
const OFFICIAL = parseSteamNews(fixture('news-official.json'));

let db: TestDb;
const sent: Array<{ queue: string; data: unknown }> = [];
let clock: ManualClock;

function ctx() {
  const boss = {
    send: async (queue: string, data: unknown) => {
      sent.push({ queue, data });
      return `job-${sent.length}`;
    },
    sendDebounced: async (queue: string, data: unknown) => {
      sent.push({ queue, data });
      return `job-${sent.length}`;
    },
  };
  return systemCtx(
    { db: db.db, jobs: new Jobs(boss as never, { clock }), clock, log: silentLogger(), appSecret: 'x'.repeat(40) },
    'steam-test',
  );
}

interface FakeOptions {
  info?: unknown;
  news?: ReturnType<typeof parseSteamNews>;
  failBranch?: string;
  failNews?: boolean;
}

function fakeSteam(options: FakeOptions = {}): SteamClient & { branchCalls: number } {
  const state = { branchCalls: 0 };
  return {
    get branchCalls() {
      return state.branchCalls;
    },
    async getBranch() {
      state.branchCalls += 1;
      if (options.failBranch) throw new SteamError(options.failBranch, { retryable: true });
      return parseSteamInfo(options.info ?? INFO);
    },
    async getNews({ officialOnly } = {}) {
      if (options.failNews) throw new SteamError('news down', { retryable: true });
      const items = options.news ?? MIXED;
      return officialOnly ? items.filter((i) => i.official) : items;
    },
  };
}

function infoWith(buildId: string, timeUpdated: number) {
  return {
    status: 'success',
    data: { '1326470': { depots: { branches: { public: { buildid: buildId, timeupdated: String(timeUpdated) } } } } },
  };
}

type Row = {
  id: number;
  label: string;
  steamBuildId: string | null;
  releasedAt: string;
  isCurrent: boolean;
  isBreaking: boolean;
};

async function builds(): Promise<Row[]> {
  const { rows } = await db.db.execute<Row>(sql`
    SELECT "id", "label", "steamBuildId", "releasedAt"::text AS "releasedAt", "isCurrent", "isBreaking"
      FROM "GameBuild" ORDER BY "id"`);
  return rows;
}

async function count(statement: ReturnType<typeof sql>): Promise<number> {
  const { rows } = await db.db.execute<{ n: number }>(statement);
  return Number(rows[0]?.n ?? 0);
}

beforeAll(async () => {
  db = await startTestDb();
});

afterAll(async () => {
  await db?.stop();
});

beforeEach(async () => {
  clock = new ManualClock('2026-10-06T12:00:00.000Z');
  sent.length = 0;
  await db.db.execute(sql`DELETE FROM "GameBuild"`);
  await db.db.execute(sql`DELETE FROM "SiteSetting" WHERE "key" = 'steamSync'`);
});

describe('steam.sync', () => {
  it('registers the first build as current, named after the announcement', async () => {
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(outcome).toMatchObject({ status: 'ok', result: 'created', label: 'Update 2025-10-03', buildId: '20228174' });
    expect(await builds()).toEqual([
      expect.objectContaining({
        label: 'Update 2025-10-03',
        steamBuildId: '20228174',
        releasedAt: '2025-10-03',
        isCurrent: true,
        isBreaking: false,
      }),
    ]);
    const state = await readSteamState(db.db);
    expect(state).toMatchObject({
      status: 'ok',
      buildId: '20228174',
      lastResult: 'created',
      consecutiveFailures: 0,
      nextAttemptAt: null,
    });
    expect(
      await count(sql`SELECT count(*) AS n FROM "AuditLog" WHERE "action" = 'game_build.create' AND "actorId" IS NULL`),
    ).toBe(1);
    expect(sent.some((job) => job.queue === 'cdn.purge')).toBe(true);
    expect(sent.some((job) => job.queue === 'domain.event')).toBe(false);
  });

  it('leaves a known build alone, including a current one an admin chose', async () => {
    await syncGameBuilds(ctx(), { steam: fakeSteam() });
    const [first] = await builds();
    const other = await db.db.execute<{ id: number }>(sql`
      INSERT INTO "GameBuild" ("label", "releasedAt", "isCurrent") VALUES ('Admin choice', '2025-12-01', false) RETURNING "id"`);
    await db.db.execute(sql`UPDATE "GameBuild" SET "isCurrent" = false WHERE "id" = ${first?.id}`);
    await db.db.execute(sql`UPDATE "GameBuild" SET "isCurrent" = true WHERE "id" = ${other.rows[0]?.id}`);
    clock.advance(30 * 60_000);
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(outcome).toMatchObject({ status: 'ok', result: 'unchanged' });
    expect((await builds()).filter((b) => b.isCurrent).map((b) => b.label)).toEqual(['Admin choice']);
  });

  it('registers a newer build, makes it current and keeps the old one', async () => {
    await syncGameBuilds(ctx(), { steam: fakeSteam() });
    clock.advance(30 * 60_000);
    const later = Math.floor(new Date('2026-02-03T10:00:00Z').getTime() / 1000);
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam({ info: infoWith('21000001', later) }) });
    expect(outcome).toMatchObject({ status: 'ok', result: 'created', label: 'Build 21000001' });
    const rows = await builds();
    expect(rows).toHaveLength(2);
    expect(rows.filter((r) => r.isCurrent).map((r) => r.steamBuildId)).toEqual(['21000001']);
    expect(rows[0]).toMatchObject({ label: 'Update 2025-10-03', isCurrent: false });
  });

  it('names a build after the announcement posted a day later and renames its fallback label', async () => {
    const releasedAt = Math.floor(new Date('2026-03-10T09:00:00Z').getTime() / 1000);
    const steam = (news: ReturnType<typeof parseSteamNews>) =>
      fakeSteam({ info: infoWith('22000002', releasedAt), news });
    await syncGameBuilds(ctx(), { steam: steam([]) });
    expect((await builds())[0]).toMatchObject({ label: 'Build 22000002', isCurrent: true });

    const post = [
      {
        gid: '1',
        title: 'Patch 58.30 - Fixes',
        date: new Date('2026-03-10T11:00:00Z'),
        feedName: 'steam_community_announcements',
        official: true,
        contents: '',
      },
    ];
    clock.advance(30 * 60_000);
    const outcome = await syncGameBuilds(ctx(), { steam: steam(post) });
    expect(outcome).toMatchObject({ status: 'ok', result: 'relabelled', label: 'Patch 58.30' });
    expect((await builds())[0]).toMatchObject({ label: 'Patch 58.30', steamBuildId: '22000002' });
  });

  it('falls back to the build id when Steam news is down', async () => {
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam({ failNews: true }) });
    expect(outcome).toMatchObject({ status: 'ok', result: 'created', label: 'Build 20228174' });
  });

  it('adopts a seeded row whose label is the announcement of the new build', async () => {
    await db.db.execute(
      sql`INSERT INTO "GameBuild" ("label", "releasedAt") VALUES ('Update 2025-10-03', '2025-10-03')`,
    );
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(outcome).toMatchObject({ status: 'ok', result: 'adopted' });
    const rows = await builds();
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ steamBuildId: '20228174', isCurrent: true });
  });

  it('does not reuse a label that belongs to another Steam build', async () => {
    await db.db.execute(sql`
      INSERT INTO "GameBuild" ("label", "releasedAt", "steamBuildId") VALUES ('Update 2025-10-03', '2025-10-03', '1')`);
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(outcome).toMatchObject({ status: 'ok', result: 'created', label: 'Build 20228174' });
  });

  it('goes back to a known build when the branch rolls back', async () => {
    await syncGameBuilds(ctx(), { steam: fakeSteam() });
    const newer = Math.floor(new Date('2026-04-01T10:00:00Z').getTime() / 1000);
    clock.advance(30 * 60_000);
    await syncGameBuilds(ctx(), { steam: fakeSteam({ info: infoWith('23000003', newer) }) });
    clock.advance(30 * 60_000);
    const outcome = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(outcome).toMatchObject({ status: 'ok', result: 'switched', buildId: '20228174' });
    expect((await builds()).filter((r) => r.isCurrent).map((r) => r.steamBuildId)).toEqual(['20228174']);
  });

  it('stores a failure, backs off and lets "sync now" through', async () => {
    const down = fakeSteam({ failBranch: 'HTTP 503' });
    const first = await syncGameBuilds(ctx(), { steam: down });
    expect(first).toMatchObject({ status: 'failed', consecutiveFailures: 1, error: 'HTTP 503' });
    expect(await readSteamState(db.db)).toMatchObject({
      status: 'failed',
      lastError: 'HTTP 503',
      consecutiveFailures: 1,
    });
    expect(await builds()).toEqual([]);

    clock.advance(10 * 60_000);
    const skipped = await syncGameBuilds(ctx(), { steam: down });
    expect(skipped).toMatchObject({ status: 'skipped', reason: 'backoff' });
    expect(down.branchCalls).toBe(1);

    const forced = await syncGameBuilds(ctx(), { steam: down }, { force: true });
    expect(forced).toMatchObject({ status: 'failed', consecutiveFailures: 2 });
    expect(down.branchCalls).toBe(2);

    clock.advance(3 * 3_600_000);
    const recovered = await syncGameBuilds(ctx(), { steam: fakeSteam() });
    expect(recovered).toMatchObject({ status: 'ok', result: 'created' });
    expect(await readSteamState(db.db)).toMatchObject({ status: 'ok', consecutiveFailures: 0, lastError: null });
  });
});

describe('B21 seed', () => {
  const options = (dryRun: boolean) => ({ dryRun });

  it('reports a dry run without writing, then imports and does nothing the second time', async () => {
    const steam = fakeSteam({ news: OFFICIAL });
    const dry = await runB21(ctx(), steam, options(true));
    expect(dry.report.created).toBeGreaterThan(40);
    expect(await builds()).toEqual([]);
    expect(await count(sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B21'`)).toBe(0);

    const applied = await runB21(ctx(), steam, options(false));
    expect(applied.report.created).toBe(dry.report.created);
    const rows = await builds();
    expect(rows).toHaveLength(applied.report.created);
    expect(rows.some((r) => r.isCurrent || r.isBreaking)).toBe(false);
    expect(rows.map((r) => r.label)).toEqual(expect.arrayContaining(['Patch 15', 'Version 1.0', 'Hotfix 3']));
    expect(new Set(rows.map((r) => r.label)).size).toBe(rows.length);
    expect(
      await count(
        sql`SELECT count(*) AS n FROM "MigrationRun" WHERE "name" = 'backfill:B21' AND "finishedAt" IS NOT NULL`,
      ),
    ).toBe(1);
    expect(await count(sql`SELECT count(*) AS n FROM "AuditLog" WHERE "action" = 'game_build.seed'`)).toBe(1);

    const again = await runB21(ctx(), steam, options(false));
    expect(again.report.created).toBe(0);
    expect(again.report.skippedExisting).toBe(rows.length);
    expect(await builds()).toHaveLength(rows.length);
  });

  it('skips the day of a build the sync already registered', async () => {
    await syncGameBuilds(ctx(), { steam: fakeSteam() });
    const seeded = await runB21(ctx(), fakeSteam({ news: OFFICIAL }), options(false));
    expect(seeded.report.skippedExisting + seeded.report.skippedSteamBuild).toBeGreaterThanOrEqual(1);
    const rows = await builds();
    expect(rows.filter((r) => r.releasedAt === '2025-10-03')).toHaveLength(1);
    expect(rows.filter((r) => r.isCurrent)).toHaveLength(1);
  });
});
