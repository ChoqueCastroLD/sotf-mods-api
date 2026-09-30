/**
 * Test helper: accounts with a real `"Session"` row, so staff endpoints (which re-read the account
 * and require a session younger than 12 h) can be called through `t.as(...)`.
 */
import { randomUUID } from 'node:crypto';
import type { TestDb } from '@sotf/db/testing';
import type { TestApp } from '../../../testing.ts';
import { exec } from './seeded.ts';

export interface TestUser {
  userId: number;
  handle: string;
  role: 'user' | 'moderator' | 'admin';
  sessionId: string;
}

/** Inserts a verified user (trust level 1) with a fresh session. */
export async function createTestUser(db: TestDb, handle: string, role: TestUser['role'] = 'user'): Promise<TestUser> {
  const res = await exec(
    db,
    `INSERT INTO "User" ("email", "password", "name", "slug", "emailVerifiedAt", "role", "trustLevel")
     VALUES ($1, 'x', $2, $2, now(), $3, 1) RETURNING "id"`,
    [`${handle}@example.test`, handle, role],
  );
  const userId = Number(res.rows[0].id);
  const sessionId = randomUUID();
  await exec(
    db,
    `INSERT INTO "Session" ("id", "userId", "tokenHash", "pwdFingerprint", "expiresAt", "absoluteExpiresAt")
     VALUES ($1, $2, $3, 'fp', now() + interval '1 day', now() + interval '30 days')`,
    [sessionId, userId, `hash-${sessionId}`],
  );
  return { userId, handle, role, sessionId };
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** Same-origin JSON request as `who` (or anonymous). */
export async function callAs(
  t: TestApp,
  method: Method,
  url: string,
  who: TestUser | null,
  body?: unknown,
): Promise<{ status: number; headers: Record<string, unknown>; body: Record<string, unknown> | null }> {
  const headers = {
    ...t.sameOrigin(),
    ...(who ? t.as({ userId: who.userId, role: who.role, sessionId: who.sessionId, emailVerified: true }) : {}),
  };
  const res = await t.app.inject({
    method,
    url,
    headers,
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  return {
    status: res.statusCode,
    headers: res.headers,
    body: res.body ? (res.json() as Record<string, unknown>) : null,
  };
}
