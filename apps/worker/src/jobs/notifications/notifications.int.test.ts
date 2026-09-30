/**
 * WP-43 acceptance (`pnpm --filter @sotf/worker test:int -- notifications`): the real worker
 * runtime (pg-boss 12 + PostgreSQL 16), the real API app (SSE hub and the notification and
 * unsubscribe modules) and a real Mailpit. Producers that do not exist yet are simulated by
 * emitting their domain events (`Jobs.emitNew` inside a transaction, as core services will).
 *
 * - a mention produces its email within the instant window;
 * - a preference turned off sends nothing;
 * - the daily digest aggregates (and groups) signals into one email;
 * - the RFC 8058 one-click POST unsubscribes;
 * - SSE delivers a signal in < 1 s;
 * - Discord payload snapshot (and the delivery registry);
 * - the PendingMention drain respects LEGACY_COEXIST;
 * - the weekly creator report.
 */
import { randomBytes } from 'node:crypto';
import type { AddressInfo } from 'node:net';
import { buildTestApp, type TestApp } from '@sotf/api/testing';
import type { DomainEventPayload, DomainEventType } from '@sotf/contracts/domain-events';
import { silentLogger, systemClock } from '@sotf/core';
import { createSmtpTransport } from '@sotf/core/email/index';
import { createNotifications, INSTANT_FLUSH_SECONDS, previousWeekStart } from '@sotf/core/notifications/index';
import {
  auditLog,
  emailOutbox,
  modFavorite,
  modImage,
  modVersionDownloadDaily,
  notification,
  pendingMention,
  siteSetting,
  withTx,
} from '@sotf/db';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { and, eq } from 'drizzle-orm';
import { GenericContainer, type StartedTestContainer, Wait } from 'testcontainers';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from '../../app.ts';
import { parseWorkerEnv } from '../../env.ts';
import { createDigestJobs } from '../digests/index.ts';
import { createDiscordJobs } from '../discord/index.ts';
import { createLegacyMentionJobs } from '../legacy-mentions/index.ts';
import { createNotificationJobs } from './index.ts';
import type { NotificationJobOptions } from './options.ts';

const SITE = 'https://sotf-mods.test';
const APP_SECRET = randomBytes(32).toString('base64url');

let db: TestDb;
let f: Factories;
let worker: Worker;
let api: TestApp;
let apiBase: string;
let mailpit: StartedTestContainer;
let mailpitApi: string;
let options: NotificationJobOptions;
const discordCalls: Array<{ url: string; body: unknown }> = [];

async function waitFor<T>(
  probe: () => Promise<T | undefined | null | false>,
  timeoutMs = 30_000,
  stepMs = 100,
): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await probe();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, stepMs));
  }
}

function workerEnv(url: string, legacyCoexist: boolean) {
  return parseWorkerEnv({
    NODE_ENV: 'test',
    LOG_LEVEL: 'silent',
    PUBLIC_SITE_URL: SITE,
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET,
    DATABASE_URL: url,
    WORKER_CONCURRENCY: '2',
    LEGACY_COEXIST: legacyCoexist ? 'true' : 'false',
  });
}

async function emit<T extends DomainEventType>(type: T, payload: DomainEventPayload<T>, actorId: number | null = null) {
  return withTx(db.db, (tx) => worker.jobs.emitNew(tx, type, payload, { actorId }));
}

/** Waits until the worker has processed a domain event (the event id is the job id). */
async function processed(eventId: string): Promise<void> {
  await waitFor(async () => (await worker.boss.getJobById('domain.event', eventId))?.state === 'completed');
}

async function runJob(
  queue: 'notifications.digest' | 'creator.weekly' | 'legacy.mentions',
  data: object,
): Promise<void> {
  const id = await worker.boss.send(queue, data);
  if (!id) throw new Error('job not sent');
  await waitFor(async () => {
    const job = await worker.boss.getJobById(queue, id);
    if (job?.state === 'failed') throw new Error(`${queue} failed: ${JSON.stringify(job.output)}`);
    return job?.state === 'completed';
  });
}

interface MailpitSummary {
  ID: string;
  Subject: string;
}

async function mailsTo(address: string): Promise<MailpitSummary[]> {
  const res = await fetch(`${mailpitApi}/api/v1/search?query=${encodeURIComponent(`to:"${address}"`)}`);
  return ((await res.json()) as { messages: MailpitSummary[] }).messages;
}

async function mail(id: string): Promise<{ Text: string; HTML: string; Subject: string }> {
  return (await fetch(`${mailpitApi}/api/v1/message/${id}`)).json() as Promise<{
    Text: string;
    HTML: string;
    Subject: string;
  }>;
}

async function mailHeaders(id: string): Promise<Record<string, string[]>> {
  return (await fetch(`${mailpitApi}/api/v1/message/${id}/headers`)).json() as Promise<Record<string, string[]>>;
}

async function verifiedUser(email: string, locale = 'en', extra: Parameters<Factories['user']>[0] = {}) {
  return f.user({ email, emailVerifiedAt: new Date(), settings: { locale }, ...extra });
}

beforeAll(async () => {
  mailpit = await new GenericContainer('axllent/mailpit:v1.31.3')
    .withExposedPorts(1025, 8025)
    .withEnvironment({ MP_SMTP_AUTH_ACCEPT_ANY: '1', MP_SMTP_AUTH_ALLOW_INSECURE: '1' })
    .withWaitStrategy(Wait.forHttp('/readyz', 8025))
    .start();
  mailpitApi = `http://${mailpit.getHost()}:${mailpit.getMappedPort(8025)}`;
  db = await startTestDb({ pgBoss: true });
  f = createFactories(db.db);
  options = {
    transport: createSmtpTransport({ url: `smtp://${mailpit.getHost()}:${mailpit.getMappedPort(1025)}` }),
    from: 'SOTF Mods <noreply@sotf-mods.com>',
    siteUrl: SITE,
    mediaBaseUrl: 'https://r2.sotf-mods.com',
    legacyCoexist: false,
    fetch: (async (input: string | URL | Request, init?: RequestInit) => {
      discordCalls.push({ url: String(input), body: JSON.parse(String(init?.body)) });
      return new Response(JSON.stringify({ id: `msg-${discordCalls.length}` }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }) as typeof fetch,
  };
  worker = createWorker({
    env: workerEnv(db.url, false),
    db,
    logger: silentLogger(),
    schedules: false,
    pollingIntervalSeconds: 0.5,
    groups: [
      createNotificationJobs(),
      createDigestJobs(options),
      createDiscordJobs(options),
      createLegacyMentionJobs(options),
    ],
  });
  await worker.start();
  // The real app with every registered module (notifications and unsubscribe included).
  api = await buildTestApp({ db, env: { APP_SECRET, PUBLIC_SITE_URL: SITE } });
  await api.app.listen({ port: 0, host: '127.0.0.1' });
  apiBase = `http://127.0.0.1:${(api.app.server.address() as AddressInfo).port}`;
  // On a loaded host @fastify/under-pressure answers 503 while start-up work settles.
  const deadline = Date.now() + 60_000;
  while ((await api.app.inject({ method: 'GET', url: '/api/v2/notifications' })).statusCode === 503) {
    if (Date.now() > deadline) throw new Error('the test app stayed under pressure for 60 s');
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}, 240_000);

afterAll(async () => {
  await api?.close();
  await worker?.stop(5000);
  await db?.stop();
  await mailpit?.stop();
});

let mentionUnsubscribeUrl = '';

describe('instant emails', () => {
  it('a mention produces its email within the instant window', async () => {
    const author = await verifiedUser('author1@example.test');
    const commenter = await verifiedUser('commenter1@example.test', 'en', { name: 'Kelvin', slug: 'kelvin' });
    const mentioned = await verifiedUser('mentioned1@example.test', 'es');
    const m = await f.mod({ userId: author.id, name: 'AmmoUi', slug: 'ammoui' });
    const c = await f.comment({
      modId: m.id,
      userId: commenter.id,
      message: 'Hola @mentioned, &iexcl;mira esto!',
      bodyMd: 'Hola **@mentioned**, mira esto: funciona en la 1.0.4',
    });
    const started = Date.now();
    const event = await emit(
      'comment.created',
      {
        commentId: c.id,
        modId: m.id,
        modAuthorId: author.id,
        authorId: commenter.id,
        parentId: null,
        parentAuthorId: null,
        mentionedUserIds: [mentioned.id],
        isBugReport: false,
      },
      commenter.id,
    );
    const [message] = await waitFor(
      async () => {
        const found = await mailsTo('mentioned1@example.test');
        return found.length > 0 ? found : null;
      },
      90_000,
      250,
    );
    const elapsed = Date.now() - started;
    expect(elapsed).toBeLessThan((INSTANT_FLUSH_SECONDS + 15) * 1000);
    const body = await mail(message?.ID as string);
    expect(body.Subject).toBe('Nueva señal en SOTF Mods');
    expect(body.Text).toContain('Kelvin te mencionó en un comentario en AmmoUi');
    expect(body.Text).toContain('Hola @mentioned, mira esto: funciona en la 1.0.4');
    expect(body.HTML).toContain(`${SITE}/es/mods/${author.slug}/ammoui#c-${c.id}`);
    const headers = await mailHeaders(message?.ID as string);
    expect(headers['List-Unsubscribe-Post']).toEqual(['List-Unsubscribe=One-Click']);
    const listUnsubscribe = headers['List-Unsubscribe']?.[0] ?? '';
    expect(listUnsubscribe).toMatch(/^<https:\/\/sotf-mods\.test\/api\/v2\/unsubscribe\?token=[\w.-]+>$/);
    mentionUnsubscribeUrl = listUnsubscribe.slice(1, -1);

    // One signal per person: the mod author got "comment on your mod", the commenter nothing.
    const rows = await db.db.select().from(notification).where(eq(notification.targetId, c.id));
    expect(rows.map((r) => [r.userId, r.type]).sort()).toEqual(
      [
        [author.id, 'comment.on_my_mod'],
        [mentioned.id, 'comment.mention'],
      ].sort(),
    );
    expect(rows.every((r) => r.emailedAt !== null)).toBe(true);
    // A retried event does not duplicate signals.
    await worker.boss.send('domain.event', (await worker.boss.getJobById('domain.event', event.id))?.data as object);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    expect(await db.db.select().from(notification).where(eq(notification.targetId, c.id))).toHaveLength(2);
  }, 120_000);
});

describe('preferences', () => {
  it('a preference turned off sends nothing', async () => {
    const author = await verifiedUser('author2@example.test');
    const quiet = await verifiedUser('quiet2@example.test');
    const silent = await verifiedUser('silent2@example.test');
    const put = (userId: number, items: unknown) =>
      api.app.inject({
        method: 'PUT',
        url: '/api/v2/notification-preferences',
        headers: { ...api.sameOrigin(), ...api.as({ userId }) },
        payload: JSON.stringify({ items }),
      });
    const r1 = await put(quiet.id, [{ type: 'comment.mention', inApp: true, email: 'off' }]);
    expect(r1.statusCode).toBe(200);
    expect(r1.json().items.find((i: { type: string }) => i.type === 'comment.mention')).toMatchObject({
      inApp: true,
      email: 'off',
      isDefault: false,
    });
    expect((await put(silent.id, [{ type: 'comment.mention', inApp: false, email: 'off' }])).statusCode).toBe(200);

    const m = await f.mod({ userId: author.id });
    const c = await f.comment({ modId: m.id, userId: author.id, message: 'ping @quiet @silent' });
    const event = await emit(
      'comment.created',
      {
        commentId: c.id,
        modId: m.id,
        modAuthorId: author.id,
        authorId: author.id,
        parentId: null,
        parentAuthorId: null,
        mentionedUserIds: [quiet.id, silent.id],
        isBugReport: false,
      },
      author.id,
    );
    await processed(event.id);
    const rows = await db.db.select().from(notification).where(eq(notification.targetId, c.id));
    // In-app only for "quiet" (already marked as handled for email); nothing at all for "silent".
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ userId: quiet.id, type: 'comment.mention' });
    expect(rows[0]?.emailedAt).not.toBeNull();
    await runJob('notifications.digest', { frequency: '10m' });
    await runJob('notifications.digest', { frequency: 'daily' });
    expect(await mailsTo('quiet2@example.test')).toHaveLength(0);
    expect(await mailsTo('silent2@example.test')).toHaveLength(0);
    expect(await db.db.select().from(emailOutbox).where(eq(emailOutbox.userId, quiet.id))).toHaveLength(0);

    // The in-app signal is listed and counted.
    const list = await api.app.inject({
      method: 'GET',
      url: '/api/v2/notifications',
      headers: api.as({ userId: quiet.id }),
    });
    expect(list.statusCode).toBe(200);
    expect(list.json().items).toHaveLength(1);
    expect(list.json().items[0]).toMatchObject({ type: 'comment.mention', groupCount: 1, readAt: null });
    expect(list.json().items[0].data).not.toHaveProperty('keys');
    const count = await api.app.inject({
      method: 'GET',
      url: '/api/v2/notifications/unread-count',
      headers: api.as({ userId: quiet.id }),
    });
    expect(count.json()).toEqual({ count: 1 });
    const read = await api.app.inject({
      method: 'POST',
      url: '/api/v2/notifications/read',
      headers: { ...api.sameOrigin(), ...api.as({ userId: quiet.id }) },
      payload: JSON.stringify({ all: true }),
    });
    expect(read.json()).toEqual({ count: 0 });
  }, 60_000);
});

describe('daily digest', () => {
  it('aggregates the signals of the day into one email (grouped by mod)', async () => {
    const creator = await verifiedUser('creator3@example.test', 'en', { slug: 'digest-maker' });
    const fan = await verifiedUser('fan3@example.test');
    const x = await f.mod({ userId: creator.id, name: 'Better Nets', slug: 'better-nets' });
    const y = await f.mod({ userId: creator.id, name: 'Cave Lights', slug: 'cave-lights' });
    await f.favorite({ userId: fan.id, modId: x.id });
    await f.favorite({ userId: fan.id, modId: y.id });
    const versions = [
      [x.id, '1.1.0'],
      [x.id, '1.2.0'],
      [y.id, '2.0.0'],
    ] as const;
    for (const [modId, version] of versions) {
      const v = await f.modVersion({ modId, version, isLatest: version !== '1.1.0' });
      const event = await emit(
        'version.published',
        {
          modId,
          authorId: creator.id,
          kind: 'mod',
          categorySlug: null,
          versionId: v.id,
          version,
          channel: 'release',
          notifyFollowers: true,
          nsfw: false,
        },
        creator.id,
      );
      await processed(event.id);
    }
    const rows = await db.db.select().from(notification).where(eq(notification.userId, fan.id));
    expect(rows).toHaveLength(2);
    expect(rows.find((r) => r.groupKey === `mod.version_published:${x.id}`)?.data).toMatchObject({
      count: 2,
      version: '1.2.0',
    });

    // Daily signals wait for the daily run.
    await runJob('notifications.digest', { frequency: '10m' });
    expect(await mailsTo('fan3@example.test')).toHaveLength(0);
    await runJob('notifications.digest', { frequency: 'daily' });
    const messages = await mailsTo('fan3@example.test');
    expect(messages).toHaveLength(1);
    const body = await mail(messages[0]?.ID as string);
    expect(body.Subject).toBe('Your daily SOTF Mods digest: 3 signals');
    expect(body.Text).toContain('Better Nets has 2 new versions, the latest is 1.2.0');
    expect(body.Text).toContain('Cave Lights was updated to 2.0.0');
    expect(body.HTML).toContain(`${SITE}/mods/digest-maker/cave-lights/versions/2.0.0`);
    const after = await db.db.select().from(notification).where(eq(notification.userId, fan.id));
    expect(after.every((r) => r.emailedAt !== null)).toBe(true);
    // Running the digest again sends nothing new.
    await runJob('notifications.digest', { frequency: 'daily' });
    expect(await mailsTo('fan3@example.test')).toHaveLength(1);
  }, 60_000);
});

describe('one-click unsubscribe (RFC 8058)', () => {
  it('the POST of List-Unsubscribe turns the email off', async () => {
    expect(mentionUnsubscribeUrl).not.toBe('');
    const target = new URL(mentionUnsubscribeUrl);
    const url = `${apiBase}${target.pathname}${target.search}`;
    const post = (to: string) =>
      fetch(to, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://mail.google.com',
          'sec-fetch-site': 'cross-site',
        },
        body: 'List-Unsubscribe=One-Click',
      });
    const res = await post(url);
    expect(res.status).toBe(204);
    const [mentioned] = await db.db
      .select()
      .from(notification)
      .where(eq(notification.type, 'comment.mention'))
      .limit(1);
    const prefs = await api.app.inject({
      method: 'GET',
      url: '/api/v2/notification-preferences',
      headers: api.as({ userId: mentioned?.userId as number }),
    });
    expect(prefs.json().items.find((i: { type: string }) => i.type === 'comment.mention')).toMatchObject({
      email: 'off',
      inApp: true,
    });
    expect((await post(url)).status).toBe(204);
    const token = target.searchParams.get('token') as string;
    const tampered = `${apiBase}/api/v2/unsubscribe?token=${encodeURIComponent(`${token.slice(0, -2)}xx`)}`;
    expect((await post(tampered)).status).toBe(404);
  });
});

describe('SSE', () => {
  it('delivers a signal to the open stream in less than 1 s', async () => {
    const viewer = await verifiedUser('viewer5@example.test');
    const replier = await verifiedUser('replier5@example.test');
    const controller = new AbortController();
    const res = await fetch(`${apiBase}/api/v2/stream`, {
      headers: { accept: 'text/event-stream', ...api.as({ userId: viewer.id }) },
      signal: controller.signal,
    });
    expect(res.status).toBe(200);
    const reader = (res.body as ReadableStream<Uint8Array>).getReader();
    const decoder = new TextDecoder();
    let text = '';
    const readUntil = async (needle: string, timeoutMs = 5000): Promise<number> => {
      const deadline = Date.now() + timeoutMs;
      while (!text.includes(needle)) {
        if (Date.now() > deadline) throw new Error(`timed out waiting for ${needle}; got ${JSON.stringify(text)}`);
        const { value, done } = await reader.read();
        if (done) throw new Error('stream ended');
        text += decoder.decode(value, { stream: true });
      }
      return Date.now();
    };
    await readUntil('retry: 5000');

    // Service → NOTIFY → hub → stream.
    const m = await f.mod({ userId: replier.id, name: 'Sky Rope' });
    const started = Date.now();
    await createNotifications(
      { db: db.db, jobs: worker.jobs, clock: systemClock },
      [
        {
          userId: viewer.id,
          type: 'review.reply',
          actorId: replier.id,
          target: { type: 'mod', id: m.id, title: m.name, path: null },
          groupKey: null,
          data: { modId: m.id, modName: m.name, excerpt: null },
        },
      ],
      'sse-direct',
    );
    const [row] = await db.db
      .select()
      .from(notification)
      .where(and(eq(notification.userId, viewer.id), eq(notification.type, 'review.reply')));
    const arrived = await readUntil(`"id":${row?.id},"type":"review.reply","unreadCount":1`);
    expect(arrived - started).toBeLessThan(1000);
    expect(text).toContain(`id: ${row?.id}.1\nevent: notification\n`);

    // Domain event → worker → signal → stream, measured from the commit of the signal.
    const c = await f.comment({ modId: m.id, userId: replier.id });
    const reply = await f.comment({ modId: m.id, userId: replier.id, replyId: c.id });
    await emit(
      'comment.created',
      {
        commentId: reply.id,
        modId: m.id,
        modAuthorId: replier.id,
        authorId: replier.id,
        parentId: c.id,
        parentAuthorId: viewer.id,
        mentionedUserIds: [],
        isBugReport: false,
      },
      replier.id,
    );
    const received = await readUntil('"type":"comment.reply","unreadCount":2', 15_000);
    const [signal] = await db.db
      .select()
      .from(notification)
      .where(and(eq(notification.userId, viewer.id), eq(notification.type, 'comment.reply')));
    expect(received - (signal?.createdAt.getTime() ?? 0)).toBeLessThan(1000);
    controller.abort();
    await reader.cancel().catch(() => undefined);
  }, 60_000);
});

describe('Discord', () => {
  it('announces a new version to the subscribed webhooks (payload snapshot) and records it', async () => {
    const author = await verifiedUser('discord6@example.test', 'en', { name: 'ImAxel', slug: 'imaxel' });
    const cat = await f.category({ name: 'Quality of Life', slug: 'qol-discord' });
    const m = await f.mod({
      userId: author.id,
      name: "Axel's Mod Menu",
      slug: "axel's-mod-menu",
      shortDescription: 'In-game menu with 40+ cheats and tools.',
      logColor: '#39FF14',
      categoryId: cat.id,
    });
    await db.db.insert(modImage).values({
      modId: m.id,
      url: 'https://r2.sotf-mods.com/mods/20/cover.png',
      isPrimary: true,
      isThumbnail: false,
    });
    await f.modVersion({ modId: m.id, version: '1.3.8', isLatest: false });
    const v = await f.modVersion({
      modId: m.id,
      version: '1.3.9',
      changelogMd: '- Fixed the teleport menu on **1.0.4**\n- @everyone: safer search',
    });
    await db.db.insert(siteSetting).values({
      key: 'discordWebhooks',
      value: [
        {
          name: 'releases',
          url: 'https://discord.com/api/webhooks/1/release-token',
          events: ['version.published'],
          excludeBeta: true,
        },
        {
          name: 'new-mods',
          url: 'https://discord.com/api/webhooks/2/mods-token',
          events: ['mod.published'],
          excludeBeta: true,
        },
      ],
    });
    const payload = {
      modId: m.id,
      authorId: author.id,
      kind: 'mod' as const,
      categorySlug: null,
      versionId: v.id,
      version: '1.3.9',
      channel: 'release' as const,
      notifyFollowers: false,
      nsfw: false,
    };
    await emit('version.published', payload, author.id);
    const call = await waitFor(async () => discordCalls.find((c) => c.url.includes('/webhooks/1/')));
    expect(call.url).toBe('https://discord.com/api/webhooks/1/release-token?wait=true');
    const body = call.body as { embeds: Array<{ timestamp: string }> };
    for (const embed of body.embeds) embed.timestamp = '<timestamp>';
    expect(body).toMatchSnapshot();
    const logged = await waitFor(async () => {
      const rows = await db.db.select().from(auditLog).where(eq(auditLog.action, 'discord.announce'));
      return rows.length > 0 ? rows : null;
    });
    expect(logged[0]).toMatchObject({ targetType: 'mod', targetId: m.id });
    expect(logged[0]?.after).toMatchObject({
      event: 'version.published',
      webhookName: 'releases',
      status: 'sent',
      httpStatus: 200,
    });
    expect(JSON.stringify(logged[0]?.after)).not.toContain('release-token');
    // Another event for the same version does not post twice; the other webhook is not subscribed.
    await emit('version.published', payload, author.id);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(discordCalls).toHaveLength(1);
  }, 60_000);
});

describe('PendingMention drain (B18)', () => {
  it('does nothing while LEGACY_COEXIST=true and drains after the cut-over', async () => {
    const target = await f.user({ email: 'legacy7@example.test' }); // unverified, like most legacy accounts
    const from = await f.user({ name: 'OldTimer', slug: 'oldtimer' });
    const m = await f.mod({ userId: target.id, name: 'Legacy Mod', slug: 'legacy-mod' });
    await db.db.insert(pendingMention).values([
      {
        targetUserId: target.id,
        fromUserId: from.id,
        modId: m.id,
        commentMessage: 'Nice mod &amp; thanks',
        type: 'comment',
      },
      {
        targetUserId: target.id,
        fromUserId: from.id,
        modId: m.id,
        commentMessage: 'Hey @legacy7 look',
        type: 'mention',
      },
    ]);

    // Coexistence: a worker with LEGACY_COEXIST=true (own database) neither consumes the queue nor
    // lets the handler run.
    const coexistDb = await startTestDb({ pgBoss: true });
    const coexist = createWorker({
      env: workerEnv(coexistDb.url, true),
      db: coexistDb,
      logger: silentLogger(),
      schedules: false,
      pollingIntervalSeconds: 0.5,
      groups: [
        createLegacyMentionJobs({ ...options, legacyCoexist: true }),
        createDigestJobs({ ...options, legacyCoexist: true }),
      ],
    });
    try {
      const state = await coexist.start();
      expect(state.skipped).toContain('legacy.mentions');
      const cf = createFactories(coexistDb.db);
      const t2 = await cf.user();
      const f2 = await cf.user();
      const m2 = await cf.mod({ userId: t2.id });
      await coexistDb.db
        .insert(pendingMention)
        .values({ targetUserId: t2.id, fromUserId: f2.id, modId: m2.id, commentMessage: 'x', type: 'comment' });
      const jobId = await coexist.jobs.enqueue('legacy.mentions', {});
      const digest = await coexist.boss.send('notifications.digest', { frequency: '10m' });
      await waitFor(
        async () => (await coexist.boss.getJobById('notifications.digest', digest as string))?.state === 'completed',
      );
      await new Promise((resolve) => setTimeout(resolve, 1500));
      expect((await coexist.boss.getJobById('legacy.mentions', jobId as string))?.state).toBe('created');
      // The 10-minute digest did not trigger a drain either (only the job enqueued above exists).
      expect(await coexist.boss.findJobs('legacy.mentions')).toHaveLength(1);
      expect(await coexistDb.db.select().from(pendingMention)).toHaveLength(1);
      const guarded = createLegacyMentionJobs({ ...options, legacyCoexist: true }).jobs[0];
      const out = await guarded?.handler({} as never, {
        ctx: { db: coexistDb.db, jobs: coexist.jobs, clock: { now: () => new Date() }, log: silentLogger() } as never,
        job: { id: 'manual', queue: 'legacy.mentions', retryCount: 0, signal: new AbortController().signal },
      });
      expect(out).toEqual({ skipped: 'legacy_coexist' });
      expect(await coexistDb.db.select().from(pendingMention)).toHaveLength(1);
    } finally {
      await coexist.stop(5000);
      await coexistDb.stop();
    }

    // After the cut-over (LEGACY_COEXIST=false): signals + one email, queue emptied.
    await runJob('legacy.mentions', {});
    expect(await db.db.select().from(pendingMention)).toHaveLength(0);
    const rows = await db.db.select().from(notification).where(eq(notification.userId, target.id));
    expect(rows.map((r) => r.type).sort()).toEqual(['comment.mention', 'comment.on_my_mod']);
    expect(rows.every((r) => r.data.legacy === true && r.actorId === from.id)).toBe(true);
    const messages = await waitFor(
      async () => {
        const found = await mailsTo('legacy7@example.test');
        return found.length > 0 ? found : null;
      },
      60_000,
      250,
    );
    expect(messages).toHaveLength(1);
    const body = await mail(messages[0]?.ID as string);
    expect(body.Subject).toBe('2 new signals on SOTF Mods');
    expect(body.Text).toContain('OldTimer mentioned you in a comment on Legacy Mod');
    expect(body.Text).toContain('Nice mod & thanks');
  }, 120_000);
});

describe('weekly creator report', () => {
  it('mails last week’s numbers with a one-click unsubscribe', async () => {
    const creator = await verifiedUser('weekly8@example.test', 'en', { slug: 'weekly-maker' });
    const { mod: m, version } = await f.modWithVersion({ userId: creator.id, name: 'Rain Hut', slug: 'rain-hut' });
    const weekStart = previousWeekStart(new Date());
    const day = (offset: number) => {
      const d = new Date(`${weekStart}T00:00:00.000Z`);
      d.setUTCDate(d.getUTCDate() + offset);
      return d.toISOString().slice(0, 10);
    };
    await db.db.insert(modVersionDownloadDaily).values([
      { modVersionId: version.id, day: day(0), channel: 'web', downloads: 700 },
      { modVersionId: version.id, day: day(3), channel: 'redmanager', downloads: 534 },
      { modVersionId: version.id, day: day(-3), channel: 'web', downloads: 1000 },
    ]);
    const follower = await f.user();
    const followed = await f.favorite({ userId: follower.id, modId: m.id });
    expect(followed).toBeTruthy();
    await db.db
      .update(modFavorite)
      .set({ createdAt: new Date(`${day(2)}T12:00:00.000Z`) })
      .where(eq(modFavorite.id, followed.id));
    await runJob('creator.weekly', { userId: creator.id });
    const messages = await waitFor(async () => {
      const found = await mailsTo('weekly8@example.test');
      return found.length > 0 ? found : null;
    });
    const body = await mail(messages[0]?.ID as string);
    expect(body.Subject).toBe('Your mods last week: +1,234 downloads');
    expect(body.Text).toContain('Up 23% from the week before');
    expect(body.Text).toContain('1 new follower');
    expect(body.Text).toContain('Rain Hut');
    const headers = await mailHeaders(messages[0]?.ID as string);
    expect(headers['List-Unsubscribe-Post']).toEqual(['List-Unsubscribe=One-Click']);
    // A second run in the same week does not mail again (dedupe key per creator and week).
    await runJob('creator.weekly', { userId: creator.id });
    expect(await mailsTo('weekly8@example.test')).toHaveLength(1);
  }, 60_000);
});
