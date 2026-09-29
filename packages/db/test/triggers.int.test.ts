import { eq, sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { comment, mod, modReview, modVersion, user } from '../src/schema/_index.gen.ts';
import { createFactories, type Factories, startTestDb, stopTestServer, type TestDb } from '../src/testing.ts';

let t: TestDb;
let f: Factories;

beforeAll(async () => {
  t = await startTestDb();
  f = createFactories(t.db);
});
afterAll(async () => {
  await t.stop();
  await stopTestServer();
});

/** Runs raw SQL the way the legacy Prisma client does: only legacy columns, explicit values. */
async function legacyInsertMod(values: { slug: string; isApproved: boolean; userId: number }) {
  const { rows } = await t.pool.query<{
    id: number;
    status: string;
    isApproved: boolean;
    publishedAt: Date | null;
    statusChangedAt: Date | null;
  }>(
    `INSERT INTO "Mod" ("name", "slug", "mod_id", "shortDescription", "description", "dependencies", "type", "isNSFW",
                        "isApproved", "isFeatured", "lastReleasedAt", "createdAt", "updatedAt", "userId")
     VALUES ($1, $2, $3, '', 'legacy insert', '', 'Mod', false, $4, false, now(), now(), now(), $5)
     RETURNING "id", "status", "isApproved", "publishedAt", "statusChangedAt"`,
    [values.slug, values.slug, `Legacy.${values.slug}`, values.isApproved, values.userId],
  );
  return rows[0] as NonNullable<(typeof rows)[0]>;
}

describe('trg_mod_status_sync', () => {
  it('a legacy INSERT without status lands in pending, or published when approved', async () => {
    const author = await f.user();
    const pending = await legacyInsertMod({ slug: 'legacy-pending', isApproved: false, userId: author.id });
    expect(pending).toMatchObject({ status: 'pending', isApproved: false, publishedAt: null });
    expect(pending.statusChangedAt).toBeInstanceOf(Date);

    const approved = await legacyInsertMod({ slug: 'legacy-build', isApproved: true, userId: author.id });
    expect(approved).toMatchObject({ status: 'published', isApproved: true });
    expect(approved.publishedAt).toBeInstanceOf(Date);
  });

  it('syncs legacy approve/unapprove into status', async () => {
    const m = await f.mod({ status: 'pending' });
    expect(m.isApproved).toBe(false);
    await t.pool.query(`UPDATE "Mod" SET "isApproved" = true, "updatedAt" = now() WHERE "id" = $1`, [m.id]);
    let [row] = await t.db.select().from(mod).where(eq(mod.id, m.id));
    expect(row).toMatchObject({ status: 'published', isApproved: true });
    expect(row?.publishedAt).toBeInstanceOf(Date);
    const firstPublishedAt = row?.publishedAt;

    await t.pool.query(`UPDATE "Mod" SET "isApproved" = false WHERE "id" = $1`, [m.id]);
    [row] = await t.db.select().from(mod).where(eq(mod.id, m.id));
    expect(row).toMatchObject({ status: 'pending', isApproved: false });
    expect(row?.publishedAt).toEqual(firstPublishedAt);
  });

  it('syncs v2 status changes into isApproved and stamps statusChangedAt', async () => {
    const m = await f.mod({ status: 'published' });
    expect(m.isApproved).toBe(true);
    for (const [status, approved] of [
      ['unlisted', false],
      ['archived', false],
      ['published', true],
      ['removed', false],
      ['rejected', false],
    ] as const) {
      const before = (await t.db.select().from(mod).where(eq(mod.id, m.id)))[0]?.statusChangedAt;
      await new Promise((resolve) => setTimeout(resolve, 5));
      const [row] = await t.db.update(mod).set({ status }).where(eq(mod.id, m.id)).returning();
      expect(row, status).toMatchObject({ status, isApproved: approved });
      expect(row?.statusChangedAt?.getTime()).toBeGreaterThan(before?.getTime() ?? 0);
    }
  });

  it('lets status win when a writer changes both columns, and keeps an explicit statusChangedAt', async () => {
    const m = await f.mod({ status: 'pending' });
    const when = new Date('2025-01-02T03:04:05.678Z');
    const [row] = await t.db
      .update(mod)
      .set({ status: 'unlisted', isApproved: true, statusChangedAt: when })
      .where(eq(mod.id, m.id))
      .returning();
    expect(row).toMatchObject({ status: 'unlisted', isApproved: false });
    expect(row?.statusChangedAt?.toISOString()).toBe(when.toISOString());
  });

  it('leaves unrelated updates alone (the legacy counters cron)', async () => {
    const m = await f.mod({ status: 'published' });
    const [before] = await t.db.select().from(mod).where(eq(mod.id, m.id));
    await t.pool.query(`UPDATE "Mod" SET "downloads" = "downloads" + 1 WHERE "id" = $1`, [m.id]);
    const [after] = await t.db.select().from(mod).where(eq(mod.id, m.id));
    expect(after?.statusChangedAt).toEqual(before?.statusChangedAt);
    expect(after?.status).toBe('published');
  });
});

describe('trg_comment_status_sync and trg_review_status_sync', () => {
  it('maps the legacy isHidden flag of comments both ways', async () => {
    const m = await f.mod();
    const author = await f.user();
    const { rows } = await t.pool.query<{ id: number; status: string; isHidden: boolean }>(
      `INSERT INTO "Comment" ("message", "isHidden", "ip", "userId", "modId", "updatedAt")
       VALUES ('visible', false, 'undefined', $1, $2, now()), ('hidden', true, 'undefined', $1, $2, now())
       RETURNING "id", "status", "isHidden"`,
      [author.id, m.id],
    );
    expect(rows.map((r) => [r.status, r.isHidden])).toEqual([
      ['visible', false],
      ['hidden', true],
    ]);
    const id = rows[0]?.id as number;
    for (const [status, hidden] of [
      ['deleted', true],
      ['pending', true],
      ['visible', false],
      ['hidden', true],
    ] as const) {
      const [row] = await t.db.update(comment).set({ status }).where(eq(comment.id, id)).returning();
      expect(row, status).toMatchObject({ status, isHidden: hidden });
    }
    await t.pool.query(`UPDATE "Comment" SET "isHidden" = false WHERE "id" = $1`, [id]);
    expect((await t.db.select().from(comment).where(eq(comment.id, id)))[0]?.status).toBe('visible');
  });

  it('maps reviews: legacy default isHidden=true means hidden, v2 writes stay consistent', async () => {
    const m = await f.mod();
    const author = await f.user();
    const { rows } = await t.pool.query<{ status: string; isHidden: boolean }>(
      `INSERT INTO "ModReview" ("title", "message", "rating", "userId", "modId", "updatedAt")
       VALUES ('t', 'm', 4, $1, $2, now()) RETURNING "status", "isHidden"`,
      [author.id, m.id],
    );
    expect(rows[0]).toEqual({ status: 'hidden', isHidden: true });

    const review = await f.review({ modId: m.id });
    expect(review).toMatchObject({ status: 'visible', isHidden: false });
    const [deleted] = await t.db
      .update(modReview)
      .set({ status: 'deleted' })
      .where(eq(modReview.id, review.id))
      .returning();
    expect(deleted).toMatchObject({ status: 'deleted', isHidden: true });
  });
});

describe('trg_modversion_semver', () => {
  it.each([
    ['1.2.3', [1, 2, 3, null]],
    ['v2.0.0-beta.1', [2, 0, 0, 'beta.1']],
    ['1.0.10', [1, 0, 10, null]],
    ['1.0.0+build.5', [1, 0, 0, null]],
    ['0192f3a4-1b2c-7d3e-8f40-5a6b7c8d9e0f', [null, null, null, null]],
    ['1.0', [null, null, null, null]],
    ['99999999999.0.0', [null, null, null, null]],
  ] as const)('%s', async (version, expected) => {
    const m = await f.mod();
    const v = await f.modVersion({ modId: m.id, version });
    expect([v.semverMajor, v.semverMinor, v.semverPatch, v.semverPre]).toEqual(expected);
  });

  it('recomputes when the version changes', async () => {
    const m = await f.mod();
    const v = await f.modVersion({ modId: m.id, version: '1.0.0' });
    const [row] = await t.db
      .update(modVersion)
      .set({ version: '3.4.5-rc.2' })
      .where(eq(modVersion.id, v.id))
      .returning();
    expect([row?.semverMajor, row?.semverMinor, row?.semverPatch, row?.semverPre]).toEqual([3, 4, 5, 'rc.2']);
  });
});

describe('trg_user_email_normalized', () => {
  it('fills emailNormalized on insert and on email change', async () => {
    const u = await f.user({ email: '  Mixed.Case@Example.TEST ' });
    expect(u.emailNormalized).toBe('mixed.case@example.test');
    const [row] = await t.db.update(user).set({ email: 'Other@Example.test' }).where(eq(user.id, u.id)).returning();
    expect(row?.emailNormalized).toBe('other@example.test');
  });

  it('enforces case-insensitive uniqueness once the index exists', async () => {
    await f.user({ email: 'dup@example.test' });
    await expect(f.user({ email: 'DUP@example.test' })).rejects.toThrow();
  });
});

describe('other schema behavior', () => {
  it('lets raw INSERTs omit "updatedAt" (default added by 0002)', async () => {
    const { rows } = await t.pool.query<{ updatedAt: Date }>(
      `INSERT INTO "Tag" ("name", "slug", "description") VALUES ('x', 'raw-insert-tag', '') RETURNING "updatedAt"`,
    );
    expect(rows[0]?.updatedAt).toBeInstanceOf(Date);
  });

  it('indexes names without accents for full-text search', async () => {
    await f.mod({ name: 'Café Crème Überarbeitet', shortDescription: 'Cooking helpers' });
    const rows = await t.db
      .select({ name: mod.name })
      .from(mod)
      .where(sql`${mod.searchVector} @@ websearch_to_tsquery('simple', public.sotf_unaccent('cafe creme'))`);
    expect(rows.map((r) => r.name)).toContain('Café Crème Überarbeitet');
    const fuzzy = await t.db
      .select({ name: mod.name })
      .from(mod)
      .where(sql`lower(public.sotf_unaccent(${mod.name})) % 'cafe creme uberarbeitet'`);
    expect(fuzzy.length).toBeGreaterThan(0);
  });

  it('allows at most one current game build and one latest version per mod', async () => {
    await f.gameBuild({ label: 'Build A', isCurrent: true });
    await expect(f.gameBuild({ label: 'Build B', isCurrent: true })).rejects.toThrow();
    const m = await f.mod();
    await f.modVersion({ modId: m.id, version: '1.0.0', isLatest: true });
    await expect(f.modVersion({ modId: m.id, version: '1.0.1', isLatest: true })).rejects.toThrow();
  });

  it('never blocks a legacy delete of a mod with v2 data attached', async () => {
    const { mod: m, version } = await f.modWithVersion();
    await f
      .kit()
      .then((k) =>
        t.pool.query(`INSERT INTO "KitItem" ("kitId", "modId", "position") VALUES ($1, $2, 1)`, [k.id, m.id]),
      );
    await t.pool.query(
      `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "depModId") VALUES ($1, 'X', $2)`,
      [version.id, m.id],
    );
    await t.pool.query(`INSERT INTO "ModStats" ("modId") VALUES ($1)`, [m.id]);
    // The legacy delete-unapproved-mods script deletes versions first, then the mod.
    await t.pool.query(`DELETE FROM "ModVersion" WHERE "modId" = $1`, [m.id]);
    await t.pool.query(`DELETE FROM "Mod" WHERE "id" = $1`, [m.id]);
    const left = await t.pool.query(`SELECT count(*)::int AS n FROM "KitItem" WHERE "modId" = $1`, [m.id]);
    expect(left.rows[0]).toEqual({ n: 0 });
  });
});
