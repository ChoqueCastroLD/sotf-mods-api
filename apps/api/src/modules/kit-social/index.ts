/**
 * Kit social module (Kits T1-24, PLAN §7.8): follow/unfollow a kit, "kits I follow", the follow
 * lookup of cached pages and the kit comment thread. The live follower/comment stream
 * (`GET /kits/:id/live/stream`) is registered by `setupKitLiveStream` (plugins/sse.ts). The
 * business rules live in `@sotf/core/kit-social`.
 *
 * Caching: the comment list is edge-cacheable (`kit:{id}`, purged by every comment write); the
 * follow endpoints are private or no-store.
 */
import { kitSocialEndpoints } from '@sotf/contracts/kit-social';
import {
  createKitComment,
  deleteKitComment,
  followKit,
  getKitCommentSource,
  type KitSocialDeps,
  listKitComments,
  listMyKitFollows,
  lookupKitFollows,
  unfollowKit,
  updateKitComment,
} from '@sotf/core/kit-social/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

const DAY_MS = 24 * 3600 * 1000;
/** Kit comments per user per day (the mod comment limit of PLAN §5.1). */
const KIT_COMMENTS_PER_DAY = 50;

const ids = (values: readonly string[] | undefined): number[] =>
  (values ?? []).map(Number).filter(Number.isSafeInteger);

export default defineModule({
  name: 'kit-social',
  register(m) {
    const deps: KitSocialDeps = {
      config: catalogConfigOf(m.platform.env),
      consumeDaily: (userId) =>
        m.platform.rateLimiter.consume('kit-comments-day', `u:${userId}`, {
          max: KIT_COMMENTS_PER_DAY,
          window: DAY_MS,
        }),
    };

    m.implement(kitSocialEndpoints.follow, async ({ params, body, ctx }) => followKit(ctx, params.id, body.notify));
    m.implement(kitSocialEndpoints.unfollow, async ({ params, ctx }) => unfollowKit(ctx, params.id));
    m.implement(kitSocialEndpoints.myFollows, async ({ ctx }) => listMyKitFollows(ctx, deps));
    m.implement(kitSocialEndpoints.lookup, async ({ query, ctx }) => lookupKitFollows(ctx, ids(query.kit)));

    m.implement(kitSocialEndpoints.listComments, async ({ params, query, ctx, cache }) => {
      cache({ id: params.id });
      return listKitComments(ctx, deps, params.id, { cursor: query.cursor, limit: query.limit });
    });

    m.implement(kitSocialEndpoints.createComment, async ({ params, body, ctx }) =>
      createKitComment(ctx, deps, params.id, body),
    );

    m.implement(kitSocialEndpoints.updateComment, async ({ params, body, ctx }) =>
      updateKitComment(ctx, deps, params.id, { bodyMd: body.bodyMd }),
    );

    m.implement(kitSocialEndpoints.deleteComment, async ({ params, ctx }) => {
      await deleteKitComment(ctx, params.id);
    });

    m.implement(kitSocialEndpoints.commentSource, async ({ params, ctx }) => getKitCommentSource(ctx, params.id));
  },
});
