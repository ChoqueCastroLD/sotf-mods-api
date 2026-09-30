/**
 * B15 · R2 pass (PLAN §6.9, §2.8; research/02 §3.2): files, inspections, manifests, build metadata
 * and thumbnails (`b15-versions.ts`), then image variants and OG cards (`b15-media.ts`).
 *
 * - **Idempotent and resumable**: each part selects only what is still missing (no
 *   `VersionInspection`, `Media` still `pending`, no `ogImageKey`), so a crashed or expired run
 *   continues where it stopped; a second complete run changes nothing.
 * - **Dry run** (default of `backfill.run`): only `HEAD` requests and counts — no object read in
 *   full, nothing written to the database or the buckets, no `"MigrationRun"` row.
 * - **Recorded** in `"MigrationRun"` (`backfill:B15`) with the report of every part as notes.
 * - **Legacy originals are never modified**: objects are read; the only writes to the buckets are
 *   new keys (`media/{id}/…` variants, `og/…` cards). Only v2 columns are written.
 */
import type { Ctx } from '@sotf/core';
import type { ObjectStorage } from '@sotf/core/storage/index';
import { type MediaPassReport, type OgPassReport, runMediaPass, runOgPass } from './b15-media.ts';
import { runVersionPass, type VersionPassReport } from './b15-versions.ts';
import { startRun } from './run-record.ts';

export interface B15Options {
  dryRun: boolean;
  batchSize: number;
  signal: AbortSignal;
}

export interface B15Result {
  dryRun: boolean;
  versions: VersionPassReport;
  media: MediaPassReport;
  og: OgPassReport;
  ms: number;
}

export async function runB15(ctx: Ctx, storage: ObjectStorage, options: B15Options): Promise<B15Result> {
  const started = Date.now();
  const run = await startRun(ctx, 'B15', options.dryRun);
  const notes: Record<string, unknown> = { dryRun: options.dryRun };
  try {
    const versions = await runVersionPass(ctx, storage, options);
    notes.versions = versions;
    await run.note({ versions });
    ctx.log.info(
      { ...versions, missingObjects: versions.missingObjects.length, errors: versions.errors.length },
      'B15 versions',
    );

    const media = await runMediaPass(ctx, storage, options);
    notes.media = media;
    await run.note({ media });
    ctx.log.info({ ...media, errors: media.errors.length }, 'B15 media');

    const og = await runOgPass(ctx, options);
    notes.og = og;
    ctx.log.info(og, 'B15 og');

    const result: B15Result = { dryRun: options.dryRun, versions, media, og, ms: Date.now() - started };
    await run.finish(versions.inspected + media.ready + media.failed + media.missing + og.enqueued, {
      ...notes,
      ms: result.ms,
    });
    return result;
  } catch (error) {
    await run.fail(error, notes).catch(() => undefined);
    throw error;
  }
}
