/**
 * B15, part 2 — image variants and Open Graph cards (PLAN §6.9 B15, §8.3, §8.6).
 *
 * - **Media**: every `Media` of `purpose = 'legacy'` still `pending` (thumbnails, gallery images and
 *   avatars registered by B2) gets its WebP variants, ThumbHash and dominant colour through
 *   `processMedia`, which **never touches the legacy original** for that purpose (it only adds
 *   `media/{id}/{w}.webp` objects). A source object that no longer exists marks the media
 *   `failed` (`source_missing`) so the next run does not retry it forever; the pages keep using the
 *   legacy URL. One image at a time: sharp already uses every core.
 * - **OG**: one `og.render` job per entity that has no card yet — mods and builds that are live,
 *   every user, kits, the active categories and the Patch Radar — with the same singleton keys as
 *   the `og-on-event` subscriber, so a card is never queued twice. The `og` job group renders them
 *   (content-addressed, idempotent; entities that must not have a card are skipped there).
 */
import type { Ctx } from '@sotf/core';
import { processMedia } from '@sotf/core/media/index';
import type { ObjectStorage } from '@sotf/core/storage/index';
import { sql } from 'drizzle-orm';
import { pushSample } from './run-record.ts';

export interface MediaPassReport {
  candidates: number;
  ready: number;
  failed: number;
  missing: number;
  errors: Array<{ mediaId: string; error: string }>;
}

export async function runMediaPass(
  ctx: Ctx,
  storage: ObjectStorage,
  options: { dryRun: boolean; batchSize: number; signal: AbortSignal },
): Promise<MediaPassReport> {
  const report: MediaPassReport = { candidates: 0, ready: 0, failed: 0, missing: 0, errors: [] };
  let cursor = '00000000-0000-0000-0000-000000000000';
  for (;;) {
    if (options.signal.aborted) throw new Error('B15 aborted (job cancelled or expired); run it again to resume');
    const batch = (
      await ctx.db.execute<{ id: string; sourceBucket: string; sourceKey: string }>(sql`
        SELECT "id", "sourceBucket", "sourceKey" FROM "Media"
         WHERE "purpose" = 'legacy' AND "status" = 'pending' AND "id" > ${cursor}::uuid
         ORDER BY "id" LIMIT ${options.batchSize}`)
    ).rows;
    if (batch.length === 0) break;
    cursor = (batch[batch.length - 1] as { id: string }).id;
    report.candidates += batch.length;
    if (!options.dryRun) {
      for (const row of batch) {
        if (options.signal.aborted) break;
        try {
          const head = await storage.head(row.sourceBucket, row.sourceKey);
          if (!head) {
            await ctx.db.execute(sql`
              UPDATE "Media" SET "status" = 'failed', "error" = 'source_missing', "processedAt" = now()
               WHERE "id" = ${row.id}::uuid AND "status" = 'pending'`);
            report.missing += 1;
            continue;
          }
          const outcome = await processMedia(ctx, storage, row.id);
          if (outcome.status === 'ready') report.ready += 1;
          else if (outcome.status === 'failed') report.failed += 1;
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          ctx.log.warn({ mediaId: row.id, err: error }, 'B15: media not processed');
          pushSample(report.errors, { mediaId: row.id, error: message.slice(0, 300) });
        }
      }
    }
    if (batch.length < options.batchSize) break;
  }
  return report;
}

export interface OgPassReport {
  mods: number;
  builds: number;
  users: number;
  kits: number;
  categories: number;
  patchRadar: number;
  enqueued: number;
}

type OgTarget = {
  entityType: 'mod' | 'build' | 'user' | 'kit' | 'category' | 'patch-radar';
  entityId: number | string;
};

async function ogTargets(ctx: Ctx): Promise<OgTarget[]> {
  const [mods, users, kits, categories] = await Promise.all([
    ctx.db.execute<{ id: number; type: string | null }>(sql`
      SELECT "id", "type" FROM "Mod"
       WHERE "ogImageKey" IS NULL AND "status" IN ('published', 'unlisted', 'archived') ORDER BY "id"`),
    ctx.db.execute<{ id: number }>(sql`
      SELECT "id" FROM "User" WHERE "ogImageKey" IS NULL AND "deletedAt" IS NULL ORDER BY "id"`),
    ctx.db.execute<{ id: number }>(sql`
      SELECT "id" FROM "Kit" WHERE "ogImageKey" IS NULL AND "deletedAt" IS NULL AND "visibility" = 'public' ORDER BY "id"`),
    ctx.db.execute<{ slug: string }>(sql`SELECT "slug" FROM "Category" WHERE "retiredAt" IS NULL ORDER BY "id"`),
  ]);
  return [
    ...mods.rows.map((m): OgTarget => ({ entityType: m.type === 'Build' ? 'build' : 'mod', entityId: m.id })),
    ...users.rows.map((u): OgTarget => ({ entityType: 'user', entityId: u.id })),
    ...kits.rows.map((k): OgTarget => ({ entityType: 'kit', entityId: k.id })),
    ...categories.rows.map((c): OgTarget => ({ entityType: 'category', entityId: c.slug })),
    { entityType: 'patch-radar', entityId: 'current' },
  ];
}

export async function runOgPass(ctx: Ctx, options: { dryRun: boolean; signal: AbortSignal }): Promise<OgPassReport> {
  const targets = await ogTargets(ctx);
  const report: OgPassReport = { mods: 0, builds: 0, users: 0, kits: 0, categories: 0, patchRadar: 0, enqueued: 0 };
  const field: Record<OgTarget['entityType'], keyof Omit<OgPassReport, 'enqueued'>> = {
    mod: 'mods',
    build: 'builds',
    user: 'users',
    kit: 'kits',
    category: 'categories',
    'patch-radar': 'patchRadar',
  };
  for (const target of targets) {
    report[field[target.entityType]] += 1;
    if (options.dryRun) continue;
    if (options.signal.aborted) throw new Error('B15 aborted (job cancelled or expired); run it again to resume');
    const id = await ctx.jobs.enqueue('og.render', target, {
      // Same key as the og-on-event subscriber: one pending render per entity.
      singletonKey: `og:${target.entityType}:${String(target.entityId).toLowerCase()}`,
    });
    if (id) report.enqueued += 1;
  }
  return report;
}
