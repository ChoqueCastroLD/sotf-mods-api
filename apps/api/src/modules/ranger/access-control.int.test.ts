// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Access-control regressions found by the authorization audit (`pnpm --filter @sotf/api test:int -- access-control`):
 *
 * - a personal access token never carries staff powers, even when its owner is a moderator: the
 *   account row may only lower the role of the actor (comments and reviews re-read the row);
 * - a moderator cannot approve a mod (or release one of its versions, or clear one of its scans)
 *   that they own or co-author; another ranger or an admin does;
 * - a suspended moderator loses the jam administration along with the rest of Ranger Station;
 * - the signed-in SSE stream is recycled, so a revoked session stops receiving signals.
 *
 * Runs on the small development seed (PostgreSQL 16).
 */
import type { AddressInfo } from 'node:net';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let admin: TestUser;
let ranger: TestUser;
let otherRanger: TestUser;
let author: TestUser;
let publishedModId: number;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

/** The actor of a personal access token: the owner's account, without the owner's role. */
const asToken = (who: TestUser): TestUser => ({ ...who, role: 'user' });

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'ac-admin', 'admin');
  ranger = await createTestUser(db, 'ac-ranger', 'moderator');
  otherRanger = await createTestUser(db, 'ac-ranger-two', 'moderator');
  author = await createTestUser(db, 'ac-author', 'user');
  await exec(db, `UPDATE "User" SET "createdAt" = now() - interval '10 days' WHERE "id" = ANY($1::int[])`, [
    [admin.userId, ranger.userId, otherRanger.userId, author.userId],
  ]);
  const published = await exec(
    db,
    `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND "userId" IS NOT NULL AND coalesce("type", 'Mod') <> 'Build'
     ORDER BY "id" LIMIT 1`,
  );
  publishedModId = Number(published.rows[0].id);
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
      comments: { max: 100_000, window: '1 minute' },
      reviews: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('personal access tokens', () => {
  it("never give a moderator's staff powers over other people's comments", async () => {
    const created = await call('POST', `/api/v2/mods/${publishedModId}/comments`, author, {
      bodyMd: 'a plain comment',
    });
    expect(created.status).toBe(201);
    const id = created.body?.id;

    const viaToken = await call('DELETE', `/api/v2/comments/${id}`, asToken(ranger));
    expect(viaToken.status).toBe(403);
    const stored = await exec(db, `SELECT "status" FROM "Comment" WHERE "id" = $1`, [id]);
    expect(stored.rows[0].status).toBe('visible');

    // The same account in the browser (a session) still moderates.
    expect((await call('DELETE', `/api/v2/comments/${id}`, ranger)).status).toBe(204);
  });

  it("never give a moderator's staff powers over other people's reviews", async () => {
    const inserted = await exec(
      db,
      `INSERT INTO "ModReview" ("title", "message", "rating", "isHidden", "userId", "modId", "status")
       VALUES ('t', 'm', 4, false, $1, $2, 'visible') RETURNING "id"`,
      [author.userId, publishedModId],
    );
    const id = inserted.rows[0].id;

    expect((await call('DELETE', `/api/v2/reviews/${id}`, asToken(ranger))).status).toBe(403);
    const stored = await exec(db, `SELECT "status" FROM "ModReview" WHERE "id" = $1`, [id]);
    expect(stored.rows[0].status).toBe('visible');
    expect((await call('DELETE', `/api/v2/reviews/${id}`, ranger)).status).toBe(204);
  });
});

describe('independent review', () => {
  async function ownPendingMod(owner: TestUser): Promise<number> {
    const found = await exec(
      db,
      `SELECT m."id" FROM "Mod" m WHERE m."status" = 'pending' AND m."userId" IS NOT NULL
         AND coalesce(m."type", 'Mod') <> 'Build' AND NOT EXISTS (SELECT 1 FROM "ModVersion" v WHERE v."modId" = m."id" AND v."status" = 'pending')
         AND m."userId" NOT IN (SELECT "id" FROM "User" WHERE "role" <> 'user')
       ORDER BY m."id" LIMIT 1`,
    );
    const id = Number(found.rows[0].id);
    await exec(db, `UPDATE "Mod" SET "userId" = $1 WHERE "id" = $2`, [owner.userId, id]);
    return id;
  }

  it('a moderator cannot approve their own mod; another ranger and an admin can', async () => {
    const own = await ownPendingMod(ranger);
    const refused = await call('POST', `/api/v2/ranger/mods/${own}/decision`, ranger, { action: 'approve' });
    expect(refused.status).toBe(403);
    expect((await exec(db, `SELECT "status" FROM "Mod" WHERE "id" = $1`, [own])).rows[0].status).toBe('pending');

    expect((await call('POST', `/api/v2/ranger/mods/${own}/decision`, otherRanger, { action: 'approve' })).status).toBe(
      200,
    );
    expect((await exec(db, `SELECT "status" FROM "Mod" WHERE "id" = $1`, [own])).rows[0].status).toBe('published');

    const adminOwn = await ownPendingMod(admin);
    expect((await call('POST', `/api/v2/ranger/mods/${adminOwn}/decision`, admin, { action: 'approve' })).status).toBe(
      200,
    );
  });

  it('a moderator cannot approve a mod they co-author', async () => {
    const mod = await ownPendingMod(author);
    await exec(
      db,
      `INSERT INTO "ModCoAuthor" ("modId", "userId", "invitedById", "status") VALUES ($1, $2, $3, 'accepted')`,
      [mod, ranger.userId, author.userId],
    );
    expect((await call('POST', `/api/v2/ranger/mods/${mod}/decision`, ranger, { action: 'approve' })).status).toBe(403);
    expect((await call('POST', `/api/v2/ranger/mods/${mod}/decision`, otherRanger, { action: 'approve' })).status).toBe(
      200,
    );
  });

  it('a moderator cannot release a version of their own mod or clear its scan', async () => {
    const mod = await ownPendingMod(ranger);
    await exec(db, `UPDATE "Mod" SET "status" = 'published' WHERE "id" = $1`, [mod]);
    const version = await exec(
      db,
      `INSERT INTO "ModVersion" ("modId", "version", "status", "checksStatus", "downloadUrl", "changelog", "isLatest", "createdAt", "updatedAt")
       VALUES ($1, '9.9.9', 'pending', 'passed', 'https://r2.example.test/x.zip', '', false, now(), now()) RETURNING "id"`,
      [mod],
    );
    const versionId = Number(version.rows[0].id);
    const scan = await exec(
      db,
      `INSERT INTO "SecurityScan" ("modVersionId", "sha256", "verdict") VALUES ($1, 'abc', 'suspicious') RETURNING "id"`,
      [versionId],
    );
    const scanId = Number(scan.rows[0].id);

    expect(
      (await call('POST', `/api/v2/ranger/versions/${versionId}/decision`, ranger, { action: 'approve' })).status,
    ).toBe(403);
    expect(
      (
        await call('POST', `/api/v2/ranger/scans/${scanId}/override`, ranger, {
          verdict: 'false_positive',
          note: 'it is fine',
        })
      ).status,
    ).toBe(403);
    expect((await exec(db, `SELECT "verdict" FROM "SecurityScan" WHERE "id" = $1`, [scanId])).rows[0].verdict).toBe(
      'suspicious',
    );
    expect(
      (
        await call('POST', `/api/v2/ranger/scans/${scanId}/override`, otherRanger, {
          verdict: 'false_positive',
          note: 'it is fine',
        })
      ).status,
    ).toBe(200);
  });
});

describe('staff acting on staff', () => {
  it('only reaches accounts below their own role when granting the verified creator flag', async () => {
    const flag = (who: TestUser, target: TestUser, value = true) =>
      call('PATCH', `/api/v2/ranger/users/${target.userId}/verified-creator`, who, { value });
    expect((await flag(ranger, admin)).status).toBe(403);
    expect((await flag(ranger, otherRanger)).status).toBe(403);
    expect((await flag(ranger, ranger)).status).toBe(403);
    expect((await flag(admin, admin)).status).toBe(403);
    expect((await flag(admin, otherRanger)).status).toBe(200);
    expect((await flag(ranger, author)).status).toBe(200);
  });
});

describe('suspended staff', () => {
  it('a suspended moderator cannot administer jams, an active one can', async () => {
    const suspended = await createTestUser(db, 'ac-suspended', 'moderator');
    expect((await call('GET', '/api/v2/ranger/jams', suspended)).status).toBe(200);
    await exec(db, `UPDATE "User" SET "suspendedUntil" = now() + interval '3 days' WHERE "id" = $1`, [
      suspended.userId,
    ]);
    expect((await call('GET', '/api/v2/ranger/jams', suspended)).status).toBe(403);
    expect((await call('GET', '/api/v2/ranger/queue?lane=new_mods', suspended)).status).toBe(403);
  });
});

describe('signed-in stream', () => {
  it('is recycled after its maximum lifetime so the session is checked again', async () => {
    const short = await buildTestApp({ db, sse: { pingMs: 50, userMaxLifetimeMs: 300 } });
    try {
      await short.app.listen({ port: 0, host: '127.0.0.1' });
      const { port } = short.app.server.address() as AddressInfo;
      const res = await fetch(`http://127.0.0.1:${port}/api/v2/stream`, {
        headers: {
          accept: 'text/event-stream',
          ...short.as({ userId: author.userId, sessionId: author.sessionId }),
        },
      });
      expect(res.status).toBe(200);
      const reader = (res.body as ReadableStream<Uint8Array>).getReader();
      const deadline = Date.now() + 5000;
      let ended = false;
      while (Date.now() < deadline) {
        const { done } = await reader.read();
        if (done) {
          ended = true;
          break;
        }
      }
      expect(ended).toBe(true);
    } finally {
      await short.close();
    }
  });
});
