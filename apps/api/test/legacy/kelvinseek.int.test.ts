/**
 * KelvinSeek legacy endpoints (deprecated) against a real PostgreSQL 16: the `"{command}|{answer}"`
 * text protocol answered with the deterministic fallback (no model is called), the 422 envelope,
 * clear and the 30-day retention of the old hashed rows.
 */
import { KELVINSEEK_CLEAR_REPLY } from '@sotf/contracts/legacy';
import { ManualClock } from '@sotf/core';
import { cleanupKelvinSeek, kelvinChatHash } from '@sotf/core/kelvinseek/index';
import { sql } from 'drizzle-orm';
import type { FastifyInstance, InjectOptions, LightMyRequestResponse } from 'fastify';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createLegacyModule } from '../../src/legacy/index.ts';
import { buildTestApp, type TestApp } from '../../src/testing.ts';

const clock = new ManualClock('2026-10-10T12:00:00.000Z');
const DAY = '2026-10-10';
const CHAT = 'steamId_76561190000000001_steamName_Tester_kelvinId_0';

/** Model calls recorded by the test (there must be none: the model was removed). */
const calls: unknown[] = [];

let t: TestApp;

async function inject(app: FastifyInstance, options: InjectOptions): Promise<LightMyRequestResponse> {
  // Waits out @fastify/under-pressure 503s on a loaded host (load shedding, not under test).
  for (let attempt = 0; ; attempt += 1) {
    const res = await app.inject(options);
    if (res.statusCode !== 503 || !res.body.includes('under pressure') || attempt >= 40) return res;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

function prompt(app: FastifyInstance, params: Record<string, string>) {
  const qs = new URLSearchParams(params).toString();
  return inject(app, { method: 'GET', url: `/api/kelvinseek/prompt?${qs}` });
}

const base = { chat_id: CHAT, text: 'please get logs and follow me', context: 'Kelvin is near the player: day 3' };

async function messages(chatId: string) {
  return (
    await t.db.db.execute(
      sql`SELECT "chatId", "prompt", "message", "messageId", "isHashed" FROM "KelvinGPTMessages" WHERE "chatId" = ${chatId} ORDER BY "id"`,
    )
  ).rows as Array<{ chatId: string; prompt: string; message: string; messageId: string; isHashed: boolean }>;
}

async function usage() {
  const row = (await t.db.db.execute(sql`SELECT * FROM "KelvinUsageDaily" WHERE "day" = ${DAY}::date`)).rows[0];
  return row ?? null;
}

beforeAll(async () => {
  t = await buildTestApp({
    env: { OPENAI_API_KEY: 'sk-test-not-a-real-key' },
    rateLimits: { kelvinseek: { max: 1_000, window: '1 minute' } },
    modules: [createLegacyModule({ clock, cacheTtlMs: 0, usage: { flushMs: 0 } })],
  });
});

afterAll(async () => {
  await t?.close();
});

beforeEach(async () => {
  await t.db.db.execute(sql`DELETE FROM "KelvinGPTMessages"`);
  await t.db.db.execute(sql`DELETE FROM "KelvinUsageDaily"`);
});

describe('GET /api/kelvinseek/prompt (deprecated: deterministic fallback, no model)', () => {
  it('answers text/plain "{command}|{answer}" with the legacy fallback, never cached', async () => {
    const res = await prompt(t.app, base);
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('text/plain;charset=utf-8');
    expect(res.headers['cache-control']).toBe('no-store');
    expect(res.headers['access-control-allow-origin']).toBe('*');
    expect(res.body).toBe(
      'get.logs.follow_me|I will get logs and follow you right away (Chat GPT API Error. Try a different chat gpt api key)',
    );
  });

  it('never calls a model and never stores the conversation', async () => {
    const before = calls.length;
    await prompt(t.app, { ...base, text: 'build a fire' });
    expect(calls.length).toBe(before);
    expect(await messages(kelvinChatHash(t.env.APP_SECRET, CHAT))).toEqual([]);
    expect(await usage()).toBeNull();
  });

  it('answers 422 with the legacy JSON envelope when a parameter is missing', async () => {
    for (const missing of ['chat_id', 'text', 'context'] as const) {
      const params: Record<string, string> = { ...base };
      delete params[missing];
      const res = await prompt(t.app, params);
      expect(res.statusCode, missing).toBe(422);
      expect(res.headers['content-type']).toBe('application/json');
      expect(JSON.parse(res.body)).toMatchObject({ status: false, error: 'VALIDATION' });
    }
  });
});

describe('GET /api/kelvinseek/clear and retention', () => {
  it('forgets the hashed chat and the legacy rows of the same chat', async () => {
    await t.db.db.execute(sql`INSERT INTO "KelvinGPTMessages" ("chatId", "prompt", "message", "role", "who", "updatedAt")
      VALUES (${CHAT}, 'legacy prompt', 'build.fire|legacy answer', '', '', now()),
             (${kelvinChatHash(t.env.APP_SECRET, CHAT)}, 'hashed prompt', '|x', '', '', now())`);
    await t.db.db.execute(sql`UPDATE "KelvinGPTMessages" SET "isHashed" = true WHERE "prompt" = 'hashed prompt'`);
    const res = await inject(t.app, {
      method: 'GET',
      url: `/api/kelvinseek/clear?chat_id=${encodeURIComponent(CHAT)}`,
    });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('text/plain;charset=utf-8');
    expect(res.headers['cache-control']).toBe('no-store');
    expect(res.body).toBe(KELVINSEEK_CLEAR_REPLY);
    expect(await messages(CHAT)).toEqual([]);
    expect(await messages(kelvinChatHash(t.env.APP_SECRET, CHAT))).toEqual([]);
    const missing = await inject(t.app, { method: 'GET', url: '/api/kelvinseek/clear' });
    expect(missing.statusCode).toBe(422);
  });

  it('deletes hashed messages older than 30 days and keeps unhashed legacy rows', async () => {
    await t.db.db.execute(sql`INSERT INTO "KelvinGPTMessages" ("chatId", "prompt", "message", "role", "who", "isHashed", "updatedAt") VALUES
      ('hash-old', 'a', '|a', '', '', true, '2026-09-01T00:00:00'),
      ('hash-new', 'b', '|b', '', '', true, '2026-09-20T00:00:00'),
      ('raw-old', 'c', '|c', '', '', false, '2025-01-01T00:00:00')`);
    const deleted = await cleanupKelvinSeek(t.db.db, clock.now());
    expect(deleted).toBe(1);
    const left = (await t.db.db.execute(sql`SELECT "chatId" FROM "KelvinGPTMessages" ORDER BY "chatId"`)).rows;
    expect(left).toEqual([{ chatId: 'hash-new' }, { chatId: 'raw-old' }]);
  });
});
