/**
 * Compatibility jobs (WP-50, PLAN §7.10, §2.9):
 *
 * - `compat.aggregate` (debounced 30 s per payload): recomputes `ModVersionCompat` of a version on
 *   one build (or every build it has data for) with the weights of PLAN §7.10, emits
 *   `compat.aggregate_changed` when a status moves and syncs `Mod.compatStatus` /
 *   `Mod.possiblyOutdated`. Idempotent.
 * - `compat.reconcile` (nightly, 03:20, after `accounts.trust-level`): finds the aggregates that no
 *   longer match the reporters' current flags, schedules `compat.aggregate` for them and refreshes
 *   the time-dependent mod flags (`reconcileCompat` of core).
 * - `compat.mod-status` (domain events): a new, yanked, restored or re-moderated version changes
 *   which version is "latest", so the mod-level status and the "possibly outdated" flag are
 *   recomputed (idempotent; purges the mod's pages only when something changed).
 */
import { aggregateCompat, reconcileCompat, refreshModCompat } from '@sotf/core/compat/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'compat',
  jobs: [
    defineJob({
      queue: 'compat.aggregate',
      handler: async (data, { ctx }) => {
        const result = await aggregateCompat(ctx, { modVersionId: data.modVersionId, gameBuildId: data.gameBuildId });
        ctx.log.info(
          {
            modVersionId: result.modVersionId,
            builds: result.builds,
            changed: result.changed.length,
            modChanged: result.modChanged,
          },
          'compat aggregated',
        );
        return result;
      },
    }),
    defineJob({
      queue: 'compat.reconcile',
      handler: async (_data, { ctx }) => reconcileCompat(ctx),
    }),
  ],
  subscribers: [
    onEvent({
      name: 'compat.mod-status',
      types: ['version.published', 'version.status_changed', 'mod.status_changed'],
      handler: async (event, { ctx }) => {
        await refreshModCompat(ctx, event.payload.modId);
      },
    }),
  ],
});
