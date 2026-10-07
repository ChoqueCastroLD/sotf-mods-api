/**
 * Steam job group:
 *
 * - `steam.sync` (every 30 minutes, `JOB_SCHEDULES`; also the admin "Sync from Steam now" button with
 *   `force`): reads the public branch of Sons of the Forest (app 1326470) from the public SteamCMD
 *   mirror and, when its build id is new, registers a `GameBuild` (label from the Steam
 *   announcements, current build, previous one no longer current; never deletes). Steam failures
 *   are stored (admin screen) and back off, they do not fail the job. See `@sotf/core/steam`.
 *
 * The one-time import of past patches is the backfill `B21` (`backfill.run`).
 */
import { createSteamClient, syncGameBuilds } from '@sotf/core/steam/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export interface SteamJobOptions {
  /** Tests inject a client that reads recorded fixtures instead of the network. */
  client?: Parameters<typeof syncGameBuilds>[1]['steam'];
}

export function createSteamJobs(options: SteamJobOptions = {}) {
  return defineJobGroup({
    name: 'steam',
    jobs: [
      defineJob({
        queue: 'steam.sync',
        options: { localConcurrency: 1 },
        handler: async ({ force }, { ctx }) => {
          const outcome = await syncGameBuilds(ctx, { steam: options.client ?? createSteamClient() }, { force });
          ctx.log.info({ force, ...outcome }, 'steam.sync');
          return outcome;
        },
      }),
    ],
  });
}

export default createSteamJobs();
