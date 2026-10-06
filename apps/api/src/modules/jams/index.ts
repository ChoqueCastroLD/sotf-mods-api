/**
 * `jams` module: Mod Jams. Public reads (edge-cached, tag `list:jams`), own state and member
 * writes (follow, submit, withdraw, vote) and the staff console (`/moderation/jams`). Rules live in
 * `@sotf/core/jams`.
 */
import { jamsEndpoints } from '@sotf/contracts/jams';
import {
  castVotes,
  createJam,
  deleteJam,
  eligibleMods,
  forcePhase,
  getAdminJam,
  getJam,
  getResults,
  listAdminEntries,
  listAdminJams,
  listEntries,
  listJams,
  moderateEntry,
  myJamState,
  myJams,
  publishResults,
  resumeSchedule,
  setFollow,
  submitEntry,
  updateJam,
  withdrawEntry,
} from '@sotf/core/jams/index';
import { defineModule } from '../../lib/define-module.ts';
import { communityConfigOf } from '../comments/module.ts';

export default defineModule({
  name: 'jams',
  register(m) {
    const config = communityConfigOf(m.platform.env);
    const session = (ctx: { actor: { userId: number } | null }) => {
      if (!ctx.actor) throw new Error('unreachable: session endpoint without actor');
      return ctx.actor.userId;
    };

    m.implement(jamsEndpoints.list, async ({ ctx }) => listJams(ctx.db, config));
    m.implement(jamsEndpoints.get, async ({ params, ctx }) => getJam(ctx.db, config, params.slug));
    m.implement(jamsEndpoints.entries, async ({ params, query, ctx }) =>
      listEntries(ctx.db, config, params.slug, query.seed),
    );
    m.implement(jamsEndpoints.results, async ({ params, ctx }) => getResults(ctx.db, config, params.slug));

    m.implement(jamsEndpoints.myState, async ({ params, ctx }) => myJamState(ctx, params.slug));
    m.implement(jamsEndpoints.myJams, async ({ ctx }) => myJams(ctx.db, config, session(ctx)));
    m.implement(jamsEndpoints.eligibleMods, async ({ params, ctx }) => eligibleMods(ctx, config, params.slug));
    m.implement(jamsEndpoints.follow, async ({ params, ctx }) => {
      await setFollow(ctx, params.slug, true);
    });
    m.implement(jamsEndpoints.unfollow, async ({ params, ctx }) => {
      await setFollow(ctx, params.slug, false);
    });
    m.implement(jamsEndpoints.submit, async ({ params, body, ctx }) => submitEntry(ctx, config, params.slug, body));
    m.implement(jamsEndpoints.withdraw, async ({ params, ctx }) => {
      await withdrawEntry(ctx, params.slug, params.entryId);
    });
    m.implement(jamsEndpoints.vote, async ({ params, body, ctx }) => castVotes(ctx, params.slug, params.entryId, body));

    m.implement(jamsEndpoints.adminList, async ({ ctx }) => {
      await getAdminGuard(ctx);
      return listAdminJams(ctx.db, config);
    });
    m.implement(jamsEndpoints.adminGet, async ({ params, ctx }) => getAdminJam(ctx, config, params.id));
    m.implement(jamsEndpoints.adminCreate, async ({ body, ctx }) => createJam(ctx, config, body));
    m.implement(jamsEndpoints.adminUpdate, async ({ params, body, ctx }) => updateJam(ctx, config, params.id, body));
    m.implement(jamsEndpoints.adminDelete, async ({ params, ctx }) => {
      await deleteJam(ctx, params.id);
    });
    m.implement(jamsEndpoints.adminSetPhase, async ({ params, body, ctx }) => forcePhase(ctx, config, params.id, body));
    m.implement(jamsEndpoints.adminResume, async ({ params, ctx }) => resumeSchedule(ctx, config, params.id));
    m.implement(jamsEndpoints.adminEntries, async ({ params, ctx }) => listAdminEntries(ctx, config, params.id));
    m.implement(jamsEndpoints.adminModerateEntry, async ({ params, body, ctx }) =>
      moderateEntry(ctx, config, params.id, params.entryId, body),
    );
    m.implement(jamsEndpoints.adminPublishResults, async ({ params, ctx }) => publishResults(ctx, config, params.id));
  },
});

async function getAdminGuard(ctx: { actor: { role: string } | null }): Promise<void> {
  // `auth: 'moderator'` already guards the route; this keeps the handler safe if it is reused.
  if (!ctx.actor || (ctx.actor.role !== 'moderator' && ctx.actor.role !== 'admin')) {
    throw new Error('unreachable: moderator endpoint without staff actor');
  }
}
