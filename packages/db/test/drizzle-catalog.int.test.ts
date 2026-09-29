import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { introspectCatalog } from '../src/guard/catalog.ts';
import { compareSchemaToCatalog, tablesOf } from '../src/guard/drizzle.ts';
import * as schema from '../src/schema/_index.gen.ts';
import { startTestDb, stopTestServer, type TestDb } from '../src/testing.ts';

let t: TestDb;
beforeAll(async () => {
  t = await startTestDb();
});
afterAll(async () => {
  await t.stop();
  await stopTestServer();
});

describe('Drizzle matches the real catalog after migrating (PLAN §6.2)', () => {
  it('declares every table and column with the same type, nullability, default, identity and generation', async () => {
    const live = await introspectCatalog(t.pool);
    const mismatches = compareSchemaToCatalog(tablesOf(schema), live, { bidirectional: true, defaults: true });
    expect(mismatches).toEqual([]);
    expect(Object.keys(live.tables).length).toBe(tablesOf(schema).length);
  });

  it('can query every table through Drizzle', async () => {
    for (const table of tablesOf(schema)) {
      await expect(t.db.select().from(table).limit(1)).resolves.toBeDefined();
    }
  });

  it('reads legacy timestamp(3) columns as UTC through Drizzle and raw pg alike', async () => {
    await t.pool.query(
      `INSERT INTO "User" ("email", "password", "name", "slug", "createdAt", "updatedAt")
       VALUES ('tz@example.test', 'x', 'tz', 'tz', '2024-06-01 12:00:00.123', '2024-06-01 12:00:00.123')`,
    );
    const raw = await t.pool.query<{ createdAt: Date }>(`SELECT "createdAt" FROM "User" WHERE "slug" = 'tz'`);
    expect(raw.rows[0]?.createdAt.toISOString()).toBe('2024-06-01T12:00:00.123Z');
    const rows = await t.db.query.user.findFirst({ where: (u, { eq }) => eq(u.slug, 'tz') });
    expect(rows?.createdAt.toISOString()).toBe('2024-06-01T12:00:00.123Z');
  });

  it('loads relations', async () => {
    const author = await t.db
      .insert(schema.user)
      .values({ email: 'rel@example.test', password: 'x', name: 'rel', slug: 'rel' })
      .returning();
    const [m] = await t.db
      .insert(schema.mod)
      .values({
        name: 'Rel',
        slug: 'rel',
        manifestId: 'Rel',
        description: '',
        isNSFW: false,
        isApproved: true,
        isFeatured: false,
        status: 'published',
        userId: author[0]?.id,
      })
      .returning();
    await t.db
      .insert(schema.modVersion)
      .values({ version: '1.0.0', isLatest: true, changelog: '', downloadUrl: 'x', modId: m?.id });
    const found = await t.db.query.mod.findFirst({
      where: (x, { eq }) => eq(x.slug, 'rel'),
      with: { user: true, versions: true, category: true },
    });
    expect(found?.user?.slug).toBe('rel');
    expect(found?.versions).toHaveLength(1);
  });
});
