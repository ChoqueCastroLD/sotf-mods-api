/**
 * pg-boss queues and job payloads (PLAN §2.9). The worker registers one handler per queue
 * (`defineJob`, WP-20); producers call `enqueue(queue, payload)` with these types.
 *
 * Queue names match pg-boss 12 rules (`[\w.\-/]`). Schedules run in UTC.
 */
import { z } from 'zod';
import { DISCORD_EVENTS } from './admin.ts';
import { EntityId, IsoDate, IsoDateTime, SitePath, Uuid } from './common.ts';
import { DomainEventSchema } from './domain-events.ts';
import { CacheTagSchema } from './internal.ts';
import { TRANSLATION_LOCALES } from './translations.ts';
import { UploadPurpose } from './uploads.ts';

export const OG_ENTITY_TYPES = [
  'mod',
  'build',
  'user',
  'kit',
  'category',
  'patch-radar',
  'guide',
  'milestone',
  'jam',
] as const;

/** Payload schema of every queue. */
export const JOB_PAYLOADS = {
  /** Fan-out of a domain event emitted inside a transaction. */
  'domain.event': DomainEventSchema,
  // Media and publishing
  'media.process': z.object({ mediaId: Uuid }),
  'og.render': z.object({ entityType: z.enum(OG_ENTITY_TYPES), entityId: z.union([EntityId, z.string().max(80)]) }),
  'inspection.run': z.object({ uploadId: Uuid, purpose: UploadPurpose, modVersionId: EntityId.nullable() }),
  'security.scan': z.object({ modVersionId: EntityId, sha256: z.string().regex(/^[0-9a-f]{64}$/) }),
  'build.extract': z.object({ uploadId: Uuid, modVersionId: EntityId.nullable() }),
  'build.geometry': z.object({ modVersionId: EntityId }),
  'bundle.build': z.object({
    bundleId: EntityId,
    removeKey: z
      .string()
      .regex(/^bundles\/[a-z0-9._/-]+$/)
      .optional()
      .describe('Deletes this zip instead (the bundle was detached)'),
  }),
  'bundle.sweep': z.object({}),
  'security.rescan': z.object({}),
  'markdown.rerender': z.object({
    batchSize: z.number().int().min(1).max(1000).default(200).describe('Mods re-rendered per run'),
  }),
  // Translations (T1-25)
  'translation.mod': z.object({
    modId: EntityId,
    locales: z
      .array(z.enum(TRANSLATION_LOCALES))
      .min(1)
      .optional()
      .describe('Omit to translate every missing or stale locale'),
  }),
  'translation.sweep': z.object({
    batchSize: z.number().int().min(1).max(200).default(100).describe('Mods queued per run'),
  }),
  // Cache and indexing
  'cdn.purge': z.object({ tags: z.array(CacheTagSchema).min(1), reason: z.string().max(120) }),
  'indexnow.ping': z.object({ paths: z.array(SitePath).min(1).max(10_000) }),
  // Communication
  'email.send': z.object({ outboxId: EntityId }),
  'notifications.digest': z.object({ frequency: z.enum(['10m', 'daily', 'weekly']) }),
  'creator.weekly': z.object({ userId: EntityId.optional().describe('Omit to fan out to every creator') }),
  'discord.announce': z.object({
    event: z.enum(DISCORD_EVENTS),
    modId: EntityId,
    versionId: EntityId.optional(),
    awardId: EntityId.optional(),
    threshold: z.number().int().positive().optional(),
  }),
  'legacy.mentions': z.object({}),
  // Statistics
  'stats.rollup': z.object({ hour: IsoDateTime.optional().describe('Hour to roll up; default the previous one') }),
  'stats.trending': z.object({}),
  'legacy.counters': z.object({}),
  'compat.aggregate': z.object({ modVersionId: EntityId, gameBuildId: EntityId.optional() }),
  'compat.reconcile': z.object({}),
  'compat.uptime-probe': z.object({}),
  // Gamification
  'gamification.evaluate': z.object({
    userId: EntityId.optional(),
    eventId: Uuid.optional(),
    nightly: z.boolean().default(false),
  }),
  'awards.mod-of-week': z.object({ weekStart: IsoDate.optional() }),
  'milestones.check': z.object({ modId: EntityId.optional() }),
  // Accounts
  'account.export': z.object({ exportId: Uuid }),
  'account.delete': z.object({ userId: EntityId.optional().describe('Omit for the daily sweep of due deletions') }),
  'accounts.trust-level': z.object({}),
  // Cleanup (retention of PLAN §9.3)
  'cleanup.sessions': z.object({}),
  'cleanup.uploads': z.object({}),
  'cleanup.download-unique': z.object({}),
  'cleanup.analytics': z.object({}),
  'cleanup.kelvinseek': z.object({}),
  'cleanup.coauthor-invites': z.object({}),
  'cleanup.scout': z.object({}),
  // Mod jams: advances the phase of every jam by its schedule and computes the results
  'jam.advance': z.object({}),
  // Discovery (T1-15): co-download and tag based recommendations of every mod
  'recommendations.compute': z.object({}),
  // Operations (PLAN §10.3 «Alertas»)
  'ops.alerts': z.object({}),
  // Migration (one-off, idempotent)
  'backfill.run': z.object({
    name: z.string().regex(/^B\d{1,2}$/),
    dryRun: z.boolean().default(true),
    batchSize: z.number().int().min(100).max(5000).default(2000),
  }),
} as const;

export type JobQueue = keyof typeof JOB_PAYLOADS;
export const JOB_QUEUES = Object.keys(JOB_PAYLOADS) as [JobQueue, ...JobQueue[]];
export type JobPayload<Q extends JobQueue> = z.input<(typeof JOB_PAYLOADS)[Q]>;
export type JobData<Q extends JobQueue> = z.output<(typeof JOB_PAYLOADS)[Q]>;

/** Validates a payload for a queue (use when reading jobs). */
export function parseJobPayload<Q extends JobQueue>(queue: Q, data: unknown): JobData<Q> {
  return JOB_PAYLOADS[queue].parse(data) as JobData<Q>;
}

/** Recurring schedules (cron, UTC). `key` distinguishes several schedules of one queue. */
export const JOB_SCHEDULES: ReadonlyArray<{
  queue: JobQueue;
  cron: string;
  key: string;
  data: Record<string, unknown>;
}> = [
  { queue: 'stats.rollup', cron: '5 * * * *', key: 'hourly', data: {} },
  { queue: 'stats.trending', cron: '15 * * * *', key: 'hourly', data: {} },
  { queue: 'legacy.counters', cron: '*/30 * * * *', key: 'every-30m', data: {} },
  { queue: 'notifications.digest', cron: '*/10 * * * *', key: '10m', data: { frequency: '10m' } },
  { queue: 'notifications.digest', cron: '0 7 * * *', key: 'daily', data: { frequency: 'daily' } },
  { queue: 'notifications.digest', cron: '0 8 * * 1', key: 'weekly', data: { frequency: 'weekly' } },
  { queue: 'creator.weekly', cron: '0 9 * * 1', key: 'weekly', data: {} },
  { queue: 'awards.mod-of-week', cron: '5 0 * * 1', key: 'weekly', data: {} },
  { queue: 'gamification.evaluate', cron: '30 3 * * *', key: 'nightly', data: { nightly: true } },
  { queue: 'milestones.check', cron: '45 * * * *', key: 'hourly', data: {} },
  { queue: 'accounts.trust-level', cron: '15 3 * * *', key: 'nightly', data: {} },
  { queue: 'account.delete', cron: '0 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.sessions', cron: '10 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.uploads', cron: '20 * * * *', key: 'hourly', data: {} },
  { queue: 'cleanup.download-unique', cron: '30 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.analytics', cron: '40 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.kelvinseek', cron: '50 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.coauthor-invites', cron: '55 4 * * *', key: 'daily', data: {} },
  { queue: 'cleanup.scout', cron: '55 4 * * *', key: 'daily', data: {} },
  // After the hourly trending rollup of 02:15, before the morning traffic.
  { queue: 'recommendations.compute', cron: '30 2 * * *', key: 'nightly', data: {} },
  // Catches mods without (or with stale) translations: older mods, failed or over-budget runs.
  { queue: 'translation.sweep', cron: '*/30 * * * *', key: 'every-30m', data: {} },
  // Only after the cut-over (`POST_CUTOVER_QUEUES`): drains legacy mentions every 10 minutes.
  { queue: 'legacy.mentions', cron: '*/10 * * * *', key: 'every-10m', data: {} },
  // After `accounts.trust-level` (03:15): weights follow the reporters' new flags.
  { queue: 'compat.reconcile', cron: '20 3 * * *', key: 'nightly', data: {} },
  // Re-enqueues scans left `pending` for 6 h (a lost or dropped job).
  { queue: 'security.rescan', cron: '35 * * * *', key: 'hourly', data: {} },
  // Regenerates the official bundles whose items published a new version.
  { queue: 'bundle.sweep', cron: '*/15 * * * *', key: 'every-15m', data: {} },
  // Descriptions rendered with an older `RENDER_VERSION` (a pipeline bump) are re-rendered.
  { queue: 'markdown.rerender', cron: '0 5 * * *', key: 'nightly', data: {} },
  { queue: 'ops.alerts', cron: '*/5 * * * *', key: 'every-5m', data: {} },
  { queue: 'jam.advance', cron: '* * * * *', key: 'every-minute', data: {} },
  // Patch Radar uptime (T1-20): one sample per platform component every 5 minutes.
  { queue: 'compat.uptime-probe', cron: '*/5 * * * *', key: 'every-5m', data: {} },
];

/** Queues that only run after the cut-over (`LEGACY_COEXIST=false`, PLAN §2.9). */
export const POST_CUTOVER_QUEUES: readonly JobQueue[] = ['legacy.counters', 'legacy.mentions'];

/** Debounce windows of coalescing queues (seconds). */
export const JOB_DEBOUNCE_SECONDS: Partial<Record<JobQueue, number>> = {
  'cdn.purge': 20,
  'indexnow.ping': 60,
  'compat.aggregate': 30,
};

/** One valid payload per queue (typed: a new queue without an example fails to compile). */
export const JOB_PAYLOAD_EXAMPLES: { readonly [Q in Exclude<JobQueue, 'domain.event'>]: JobPayload<Q> } = {
  'media.process': { mediaId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d' },
  'og.render': { entityType: 'mod', entityId: 20 },
  'translation.mod': { modId: 20 },
  'translation.sweep': { batchSize: 40 },
  'inspection.run': { uploadId: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f', purpose: 'mod_file', modVersionId: null },
  'security.scan': { modVersionId: 415, sha256: '9f2c0a4f1f0d6b1e2c3a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90' },
  'build.extract': { uploadId: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f', modVersionId: 589 },
  'build.geometry': { modVersionId: 589 },
  'bundle.build': { bundleId: 3 },
  'bundle.sweep': {},
  'security.rescan': {},
  'markdown.rerender': { batchSize: 200 },
  'cdn.purge': { tags: ['mod:20', 'home'], reason: 'event:mod.updated' },
  'indexnow.ping': { paths: ["/mods/imaxel/axel's-mod-menu", "/es/mods/imaxel/axel's-mod-menu"] },
  'email.send': { outboxId: 1201 },
  'notifications.digest': { frequency: 'daily' },
  'creator.weekly': {},
  'discord.announce': { event: 'version.published', modId: 20, versionId: 415 },
  'legacy.mentions': {},
  'stats.rollup': { hour: '2026-09-29T09:00:00.000Z' },
  'stats.trending': {},
  'legacy.counters': {},
  'compat.aggregate': { modVersionId: 412, gameBuildId: 7 },
  'compat.reconcile': {},
  'compat.uptime-probe': {},
  'gamification.evaluate': { userId: 301 },
  'awards.mod-of-week': { weekStart: '2026-09-28' },
  'milestones.check': { modId: 20 },
  'account.export': { exportId: '0192f3a6-2c3d-7e4f-9a51-6b7c8d9e0f1a' },
  'account.delete': {},
  'accounts.trust-level': {},
  'cleanup.sessions': {},
  'cleanup.uploads': {},
  'cleanup.download-unique': {},
  'cleanup.analytics': {},
  'cleanup.kelvinseek': {},
  'cleanup.coauthor-invites': {},
  'cleanup.scout': {},
  'jam.advance': {},
  'recommendations.compute': {},
  'ops.alerts': {},
  'backfill.run': { name: 'B1', dryRun: true, batchSize: 2000 },
};
