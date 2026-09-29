/**
 * KelvinSeek (PLAN §5.5, WP-32) against a real PostgreSQL 16 and a simulated OpenAI server: the
 * `"{command}|{answer}"` text protocol, the literal prompt with the conversation, the fallback on
 * timeout, errors, spent budget, per-chat daily limit and admin kill-switch, the hashed chat id,
 * the 32-most-recent trim, `"KelvinUsageDaily"`, clear and the 30-day retention.
 */
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import { KELVINSEEK_CLEAR_REPLY } from '@sotf/contracts/legacy';
import { ManualClock } from '@sotf/core';
import { cleanupKelvinSeek, kelvinChatHash } from '@sotf/core/kelvinseek/index';
import { sql } from 'drizzle-orm';
import type { FastifyInstance, InjectOptions, LightMyRequestResponse } from 'fastify';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createLegacyModule } from '../../src/legacy/index.ts';
import type { KelvinSeekRouteOptions } from '../../src/legacy/kelvinseek.ts';
import { buildTestApp, type TestApp } from '../../src/testing.ts';

const clock = new ManualClock('2026-10-10T12:00:00.000Z');
const DAY = '2026-10-10';
const CHAT = 'steamId_76561190000000001_steamName_Tester_kelvinId_0';

interface OpenAiCall {
  model: string;
  system: string;
  user: string;
}

let server: http.Server;
let openAiUrl: string;
const calls: OpenAiCall[] = [];
let answer = 'get.log.follow|I will get the logs & follow you';

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
  const row = (await t.db.db.execute(sql`SELECT * FROM "KelvinUsageDaily" WHERE "day" = ${DAY}::date`)).rows[0] as
    | Record<string, string | number>
    | undefined;
  return row
    ? {
        requests: Number(row.requests),
        fallbacks: Number(row.fallbacks),
        tokensIn: Number(row.tokensIn),
        tokensOut: Number(row.tokensOut),
        costMicroUsd: Number(row.costMicroUsd),
      }
    : null;
}

function kelvinApp(options: KelvinSeekRouteOptions = {}, env: Record<string, string> = {}) {
  return buildTestApp({
    db: t?.db,
    env: { OPENAI_API_KEY: 'sk-test-not-a-real-key', ...env },
    rateLimits: { kelvinseek: { max: 1_000, window: '1 minute' } },
    modules: [
      createLegacyModule({
        clock,
        cacheTtlMs: 0,
        usage: { flushMs: 0 },
        kelvinseek: { openAiBaseUrl: openAiUrl, timeoutMs: 400, ...options },
      }),
    ],
  });
}

beforeAll(async () => {
  server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      const body = JSON.parse(raw) as { model: string; messages: Array<{ role: string; content: string }> };
      const call = {
        model: body.model,
        system: body.messages.find((m) => m.role === 'system')?.content ?? '',
        user: body.messages.find((m) => m.role === 'user')?.content ?? '',
      };
      calls.push(call);
      if (call.user.includes('slow')) {
        setTimeout(() => res.writeHead(200).end('{}'), 3_000).unref();
        return;
      }
      if (call.user.includes('explode')) {
        res.writeHead(500, { 'content-type': 'application/json' }).end('{"error":{"message":"boom"}}');
        return;
      }
      res.writeHead(200, { 'content-type': 'application/json' }).end(
        JSON.stringify({
          id: `chatcmpl-${calls.length}`,
          choices: [{ message: { role: 'assistant', content: answer } }],
          usage: { prompt_tokens: 1000, completion_tokens: 10 },
        }),
      );
    });
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  openAiUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}/v1`;
  t = await kelvinApp();
});

afterAll(async () => {
  await t?.close();
  server?.closeAllConnections();
  await new Promise((resolve) => server?.close(resolve));
});

beforeEach(async () => {
  answer = 'get.log.follow|I will get the logs & follow you';
  await t.db.db.execute(sql`DELETE FROM "KelvinGPTMessages"`);
  await t.db.db.execute(sql`DELETE FROM "KelvinUsageDaily"`);
  await t.db.db.execute(sql`DELETE FROM "SiteSetting" WHERE "key" = 'kelvinseek'`);
});

describe('GET /api/kelvinseek/prompt', () => {
  it('answers text/plain "{command}|{answer}" from the model, never cached', async () => {
    const res = await prompt(t.app, base);
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('text/plain;charset=utf-8');
    expect(res.headers['cache-control']).toBe('no-store');
    expect(res.headers['access-control-allow-origin']).toBe('*');
    expect(res.body).toBe('get.logs.follow_me|I will get the logs &amp; follow you');
    const call = calls.at(-1) as OpenAiCall;
    expect(call.model).toBe('gpt-4o-mini');
    expect(call.user).toBe('please get logs and follow me');
    expect(call.system.startsWith('You are Kelvin.')).toBe(true);
    expect(call.system).toContain('Current Context: Kelvin is near the player: day 3');
    expect(call.system.endsWith('previousConversations:')).toBe(true);
  });

  it('stores the conversation under HMAC(chat_id) and sends it back as context', async () => {
    await prompt(t.app, base);
    answer = '|I am fine, thank you';
    const second = await prompt(t.app, { ...base, text: 'how are you, friend?' });
    expect(second.body).toBe('|I am fine, thank you');
    expect(calls.at(-1)?.system).toContain(
      'previousConversations: please get logs and follow me > get.logs.follow_me|I will get the logs &amp; follow you',
    );
    expect(await messages(CHAT)).toEqual([]);
    const hash = kelvinChatHash(t.env.APP_SECRET, CHAT);
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
    const stored = await messages(hash);
    expect(stored.map((m) => [m.prompt, m.message, m.isHashed])).toEqual([
      ['please get logs and follow me', 'get.logs.follow_me|I will get the logs &amp; follow you', true],
      ['how are you, friend?', '|I am fine, thank you', true],
    ]);
    expect(stored[0]?.messageId).toMatch(/^chatcmpl-/);
    const day = await usage();
    expect(day).toEqual({ requests: 2, fallbacks: 0, tokensIn: 2000, tokensOut: 20, costMicroUsd: 2 * 156 });
  });

  it('keeps only the 32 most recent messages of a chat (the legacy deleted the newest)', async () => {
    for (let i = 0; i < 35; i += 1) {
      clock.advance(1_000);
      answer = `|answer ${i}`;
      const res = await prompt(t.app, { ...base, text: `message ${i}` });
      expect(res.statusCode).toBe(200);
    }
    const stored = await messages(kelvinChatHash(t.env.APP_SECRET, CHAT));
    expect(stored).toHaveLength(32);
    expect(stored[0]?.prompt).toBe('message 3');
    expect(stored.at(-1)?.prompt).toBe('message 34');
    // The context sent with the last call was the 32 most recent previous messages.
    const last = calls.at(-1)?.system ?? '';
    expect(last).toContain('message 2 > |answer 2,message 3 > |answer 3');
    expect(last).not.toContain('message 1 > ');
  });

  it('falls back to the legacy deterministic answer when the model times out', async () => {
    const before = calls.length;
    const started = Date.now();
    const res = await prompt(t.app, { ...base, text: 'slow: build a fire' });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('text/plain;charset=utf-8');
    expect(res.body).toBe(
      'build.fire|I will build fire right away (Chat GPT API Error. Try a different chat gpt api key)',
    );
    expect(Date.now() - started).toBeLessThan(2_500);
    expect(calls.length).toBe(before + 1);
    expect(await messages(kelvinChatHash(t.env.APP_SECRET, CHAT))).toEqual([]);
    expect(await usage()).toMatchObject({ requests: 1, fallbacks: 1, costMicroUsd: 0 });
  });

  it('falls back when the model fails or answers nothing', async () => {
    const error = await prompt(t.app, { ...base, text: 'explode and stay hidden' });
    expect(error.body).toMatch(/^stay\.hidden\|I will stay hidden right away \(/);
    answer = 'build.fire|   ';
    const empty = await prompt(t.app, { ...base, text: 'reset traps' });
    expect(empty.body).toMatch(/^reset_traps\|I will reset traps right away \(/);
    expect(await usage()).toMatchObject({ requests: 2, fallbacks: 2, tokensIn: 1000, tokensOut: 10 });
  });

  it('answers without the model once the daily budget is spent', async () => {
    await t.db.db.execute(
      sql`INSERT INTO "KelvinUsageDaily" ("day", "requests", "costMicroUsd") VALUES (${DAY}::date, 10, 3000000)`,
    );
    const before = calls.length;
    const res = await prompt(t.app, base);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(
      'get.logs.follow_me|I will get logs and follow you right away (Chat GPT API Error. You have exceeded your current quota.)',
    );
    expect(calls.length).toBe(before);
    expect(await usage()).toMatchObject({ requests: 11, fallbacks: 1, costMicroUsd: 3_000_000 });
  });

  it('honours the admin setting (kill-switch and budget) and the per-chat daily limit', async () => {
    await t.db.db.execute(
      sql`INSERT INTO "SiteSetting" ("key", "value") VALUES ('kelvinseek', ${JSON.stringify({ enabled: false, model: 'gpt-4o-mini', dailyBudgetUsd: 3, timeoutMs: 8000 })}::jsonb)`,
    );
    const disabled = await kelvinApp();
    try {
      const before = calls.length;
      const res = await prompt(disabled.app, base);
      expect(res.body).toMatch(/^get\.logs\.follow_me\|I will get logs and follow you right away \(/);
      expect(calls.length).toBe(before);
    } finally {
      await disabled.app.close();
    }
    await t.db.db.execute(sql`DELETE FROM "SiteSetting" WHERE "key" = 'kelvinseek'`);

    const limited = await kelvinApp({ dailyChatLimit: 2 });
    try {
      const before = calls.length;
      await prompt(limited.app, base);
      await prompt(limited.app, base);
      const third = await prompt(limited.app, base);
      expect(calls.length).toBe(before + 2);
      expect(third.body).toContain('(Chat GPT API Error. You have exceeded your current quota.)');
      // Another chat still reaches the model.
      await prompt(limited.app, { ...base, chat_id: `${CHAT}_other` });
      expect(calls.length).toBe(before + 3);
    } finally {
      await limited.app.close();
    }
  });

  it('answers with the fallback when no OpenAI key is configured', async () => {
    const keyless = await buildTestApp({
      db: t.db,
      modules: [createLegacyModule({ clock, cacheTtlMs: 0, usage: { flushMs: 0 } })],
    });
    try {
      const res = await prompt(keyless.app, { ...base, text: 'give me items' });
      expect(res.statusCode).toBe(200);
      expect(res.body).toBe(
        'give_items|I will give items right away (Chat GPT API Error. Try a different chat gpt api key)',
      );
    } finally {
      await keyless.app.close();
    }
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
    await prompt(t.app, base);
    await t.db.db.execute(sql`INSERT INTO "KelvinGPTMessages" ("chatId", "prompt", "message", "role", "who", "updatedAt")
      VALUES (${CHAT}, 'legacy prompt', 'build.fire|legacy answer', '', '', now())`);
    // Legacy rows of the same chat are part of the context during the coexistence.
    await prompt(t.app, { ...base, text: 'again' });
    expect(calls.at(-1)?.system).toContain('legacy prompt > build.fire|legacy answer');
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
