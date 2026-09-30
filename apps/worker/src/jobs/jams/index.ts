/**
 * Mod Jams job group:
 *
 * - `jam.advance` (every minute): every jam follows its schedule (forward only, unless staff
 *   locked the phase); entering `results` computes the standings and, with `autoPublishResults`,
 *   publishes them. Emits `jam.phase_changed` (cache purge, OG card, signals). Idempotent.
 */
import { advanceJams } from '@sotf/core/jams/index';
import { defineJob, defineJobGroup } from '../../define-job.ts';

export default defineJobGroup({
  name: 'jams',
  jobs: [
    defineJob({
      queue: 'jam.advance',
      handler: async (_data, { ctx }) => {
        const moved = await advanceJams(ctx);
        if (moved.length > 0) ctx.log.info({ moved }, 'jams advanced');
        return { moved: moved.length };
      },
    }),
  ],
});
