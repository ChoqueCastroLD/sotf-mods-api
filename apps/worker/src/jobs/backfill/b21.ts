/**
 * B21 · Sons of the Forest game builds from the Steam news feed (one-time seed).
 *
 * Imports the past patches, hotfixes, versions and updates announced by the developer on Steam
 * (`ISteamNews/GetNewsForApp`, official feed only) as `GameBuild` rows, so the list the upload
 * wizard and the admin screen show is not empty before the `steam.sync` job (every 30 minutes) has
 * anything to compare. Labels: `Patch 15`, `Version 1.0`, `Hotfix 2`, `Hotfix 2024-05-14`,
 * `Patch 2024-03-13`, `Update 2025-10-03`.
 *
 * - De-duplicated by label and by the day of a build the sync already registered (those carry the
 *   Steam build id). Existing rows are never touched, nothing is marked current or breaking and
 *   nothing is deleted: a second run creates nothing.
 * - The sync adopts a seeded row when the announcement of a new build has the same label.
 * - Dry run (the default of `backfill.run`): fetches the feed and reports what would be created.
 */
import type { Ctx } from '@sotf/core';
import { type SteamClient, type SteamSeedReport, seedGameBuilds } from '@sotf/core/steam/index';
import { startRun } from './run-record.ts';

export interface B21Result {
  report: SteamSeedReport;
  ms: number;
}

export async function runB21(ctx: Ctx, steam: SteamClient, options: { dryRun: boolean }): Promise<B21Result> {
  const started = Date.now();
  const run = await startRun(ctx, 'B21', options.dryRun);
  try {
    const report = await seedGameBuilds(ctx, { steam }, { dryRun: options.dryRun });
    const result = { report, ms: Date.now() - started };
    await run.finish(report.created, { ...report, ms: result.ms });
    return result;
  } catch (error) {
    await run.fail(error, {}).catch(() => undefined);
    throw error;
  }
}
