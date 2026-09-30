/**
 * Signals API (WP-43) against PostgreSQL 16: auth, the cursor feed with filters and grouping,
 * unread counter, mark-as-read, the preference matrix and the one-click unsubscribe edge cases.
 * The end-to-end flow (worker, Mailpit, SSE timing) lives in the worker's notifications test.
 */
import { systemClock } from '@sotf/core';
import { createNotifications, createUnsubscribeToken, type NotificationDraft } from '@sotf/core/notifications/index';
import { notificationPreference, user } from '@sotf/db';
import { createFactories, type Factories } from '@sotf/db/testing';
import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';

let t: TestApp;
let f: Factories;

beforeAll(async () => {
  t = await buildTestApp();
  f = createFactories(t.db.db);
  // On a loaded host @fastify/under-pressure answers 503 while start-up work settles.
  const deadline = Date.now() + 60_000;
  while ((await t.app.inject({ method: 'GET', url: '/api/v2/notifications' })).statusCode === 503) {
    if (Date.now() > deadline) throw new Error('the test app stayed under pressure for 60 s');
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}, 240_000);

afterAll(async () => {
  await t?.close();
});

function draft(userId: number, overrides: Partial<NotificationDraft> = {}): NotificationDraft {
  return {
    userId,
    type: 'comment.on_my_mod',
    actorId: null,
    target: { type: 'mod', id: 1, title: 'AmmoUi', path: '/mods/a/ammoui' },
    groupKey: null,
    data: { modName: 'AmmoUi' },
    ...overrides,
  };
}

async function notify(drafts: NotificationDraft[], key: string) {
  const jobs = t.app.platform.jobs;
  return createNotifications({ db: t.db.db, jobs, clock: systemClock }, drafts, key);
}

describe('signals feed', () => {
  it('requires a session', async () => {
    for (const url of [
      '/api/v2/notifications',
      '/api/v2/notifications/unread-count',
      '/api/v2/notification-preferences',
    ]) {
      expect((await t.app.inject({ method: 'GET', url })).statusCode).toBe(401);
    }
  });

  it('pages with a cursor, filters, groups and marks as read', async () => {
    const me = await f.user();
    const actor = await f.user({ displayName: 'Kelvin' });
    await notify([draft(me.id, { type: 'comment.mention', actorId: actor.id, dedupeKey: 'm1' })], 'k1');
    await notify([draft(me.id, { groupKey: 'comment.on_my_mod:1', actorId: actor.id })], 'k2');
    await notify([draft(me.id, { groupKey: 'comment.on_my_mod:1', actorId: actor.id })], 'k3');
    await notify([draft(me.id, { type: 'mod.version_published', data: { version: '1.2.0' } })], 'k4');
    // Idempotent: the same key twice is one signal.
    await notify([draft(me.id, { type: 'mod.version_published', data: { version: '1.2.0' } })], 'k4');
    const headers = t.as({ userId: me.id });

    const first = await t.app.inject({ method: 'GET', url: '/api/v2/notifications?limit=2', headers });
    expect(first.statusCode).toBe(200);
    expect(first.headers['cache-control']).toContain('private');
    const page1 = first.json();
    expect(page1.items.map((i: { type: string }) => i.type)).toEqual(['mod.version_published', 'comment.on_my_mod']);
    expect(page1.items[1]).toMatchObject({ groupCount: 2, groupKey: 'comment.on_my_mod:1', data: { count: 2 } });
    expect(page1.items[1].actor).toMatchObject({ id: actor.id, displayName: 'Kelvin' });
    expect(page1.items[1].target).toEqual({ type: 'mod', id: 1, title: 'AmmoUi', path: '/mods/a/ammoui' });
    expect(page1.nextCursor).toEqual(expect.any(String));
    const second = await t.app.inject({
      method: 'GET',
      url: `/api/v2/notifications?limit=2&cursor=${page1.nextCursor}`,
      headers,
    });
    expect(second.json().items.map((i: { type: string }) => i.type)).toEqual(['comment.mention']);
    expect(second.json().nextCursor).toBeNull();

    const mentions = await t.app.inject({ method: 'GET', url: '/api/v2/notifications?filter=mentions', headers });
    expect(mentions.json().items).toHaveLength(1);
    const bad = await t.app.inject({ method: 'GET', url: '/api/v2/notifications?cursor=AAAA', headers });
    expect(bad.statusCode).toBe(422);

    const unread = await t.app.inject({ method: 'GET', url: '/api/v2/notifications/unread-count', headers });
    expect(unread.json()).toEqual({ count: 3 });
    const one = page1.items[0].id as number;
    const marked = await t.app.inject({
      method: 'POST',
      url: '/api/v2/notifications/read',
      headers: { ...t.sameOrigin(), ...headers },
      payload: JSON.stringify({ ids: [one] }),
    });
    expect(marked.json()).toEqual({ count: 2 });
    // Other users' ids are ignored.
    const other = await f.user();
    const foreign = await t.app.inject({
      method: 'POST',
      url: '/api/v2/notifications/read',
      headers: { ...t.sameOrigin(), ...t.as({ userId: other.id }) },
      payload: JSON.stringify({ ids: [page1.items[1].id] }),
    });
    expect(foreign.json()).toEqual({ count: 0 });
    const all = await t.app.inject({
      method: 'POST',
      url: '/api/v2/notifications/read',
      headers: { ...t.sameOrigin(), ...headers },
      payload: JSON.stringify({ all: true }),
    });
    expect(all.json()).toEqual({ count: 0 });
  });
});

describe('preferences', () => {
  it('fills defaults, stores changes and removes rows equal to the defaults', async () => {
    const me = await f.user();
    const headers = { ...t.sameOrigin(), ...t.as({ userId: me.id }) };
    const initial = await t.app.inject({ method: 'GET', url: '/api/v2/notification-preferences', headers });
    const items = initial.json().items as Array<{ type: string; email: string; inApp: boolean; isDefault: boolean }>;
    expect(items).toHaveLength(17);
    expect(items.find((i) => i.type === 'mod.version_published')).toMatchObject({ email: 'daily', isDefault: true });
    expect(items.find((i) => i.type === 'creator.weekly_report')).toMatchObject({
      inApp: false,
      email: 'weekly',
      inAppAvailable: false,
    });

    const put = (body: unknown) =>
      t.app.inject({ method: 'PUT', url: '/api/v2/notification-preferences', headers, payload: JSON.stringify(body) });
    const changed = await put({
      items: [
        { type: 'mod.version_published', inApp: true, email: 'weekly' },
        { type: 'creator.weekly_report', inApp: true, email: 'off' },
      ],
    });
    expect(changed.statusCode).toBe(200);
    const after = changed.json().items as typeof items;
    expect(after.find((i) => i.type === 'mod.version_published')).toMatchObject({ email: 'weekly', isDefault: false });
    // No in-app channel for the weekly report: stored as false.
    expect(after.find((i) => i.type === 'creator.weekly_report')).toMatchObject({ inApp: false, email: 'off' });
    await put({ items: [{ type: 'mod.version_published', inApp: true, email: 'daily' }] });
    const rows = await t.db.db.select().from(notificationPreference).where(eq(notificationPreference.userId, me.id));
    expect(rows.map((r) => r.type)).toEqual(['creator.weekly_report']);
    expect((await put({ items: [{ type: 'nope', inApp: true, email: 'daily' }] })).statusCode).toBe(422);
  });
});

describe('one-click unsubscribe', () => {
  const post = (token: string, headers: Record<string, string> = {}) =>
    t.app.inject({
      method: 'POST',
      url: `/api/v2/unsubscribe?token=${encodeURIComponent(token)}`,
      headers: { 'content-type': 'application/x-www-form-urlencoded', ...headers },
      payload: 'List-Unsubscribe=One-Click',
    });

  it('turns a cadence off cross-site, and answers 404/410 for bad, expired or orphan tokens', async () => {
    const me = await f.user();
    const now = Math.floor(Date.now() / 1000);
    const token = createUnsubscribeToken(t.env.APP_SECRET, { userId: me.id, scope: 'cadence:daily', iat: now });
    const res = await post(token, { origin: 'https://outlook.live.com', 'sec-fetch-site': 'cross-site' });
    expect(res.statusCode).toBe(204);
    const rows = await t.db.db.select().from(notificationPreference).where(eq(notificationPreference.userId, me.id));
    expect(rows.map((r) => [r.type, r.email]).sort()).toEqual([
      ['mod.version_published', 'off'],
      ['review.on_my_mod', 'off'],
    ]);
    expect((await post(`${token}x`)).statusCode).toBe(404);
    const old = createUnsubscribeToken(t.env.APP_SECRET, {
      userId: me.id,
      scope: 'cadence:daily',
      iat: now - 400 * 86400,
    });
    expect((await post(old)).statusCode).toBe(410);
    const gone = await f.user();
    await t.db.db.update(user).set({ deletedAt: new Date() }).where(eq(user.id, gone.id));
    const orphan = createUnsubscribeToken(t.env.APP_SECRET, { userId: gone.id, scope: 'type:comment.reply', iat: now });
    expect((await post(orphan)).statusCode).toBe(410);
    const text = await t.app.inject({
      method: 'POST',
      url: `/api/v2/unsubscribe?token=${encodeURIComponent(token)}`,
      headers: { 'content-type': 'text/plain' },
      payload: 'x',
    });
    expect(text.statusCode).toBe(415);
  });
});
