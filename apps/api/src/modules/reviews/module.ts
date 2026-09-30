/**
 * `reviews` module (WP-41, PLAN §5.2 "Comunidad", §7.7): the public list (helpful/new/critical)
 * and summary (edge-cached, tag `mod:{id}`), and the member writes: review (verified email,
 * account ≥ 24 h, one per user and mod), edit, soft delete, "Helpful?" votes and the mod author's
 * public reply. Business rules and the rating counters of "Mod" live in `@sotf/core/reviews`.
 */
import { reviewsEndpoints } from '@sotf/contracts/reviews';
import {
  createReview,
  deleteReview,
  listReviews,
  replyToReview,
  reviewsSummary,
  updateReview,
  voteReview,
} from '@sotf/core/reviews/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import { communityConfigOf } from '../comments/module.ts';

export function createReviewsModule(): ApiModule {
  return defineModule({
    name: 'reviews',
    register(m) {
      const config = communityConfigOf(m.platform.env);

      m.implement(reviewsEndpoints.list, async ({ params, query, ctx, cache }) => {
        cache({ id: params.id });
        return listReviews(ctx, config, params.id, { sort: query.sort, cursor: query.cursor, limit: query.limit });
      });

      m.implement(reviewsEndpoints.summary, async ({ params, ctx, cache }) => {
        cache({ id: params.id });
        return reviewsSummary(ctx, params.id);
      });

      m.implement(reviewsEndpoints.create, async ({ params, body, ctx, reply }) => {
        const created = await createReview(ctx, config, params.id, body);
        reply.header('location', `/api/v2/mods/${params.id}/reviews`);
        return created;
      });

      m.implement(reviewsEndpoints.update, async ({ params, body, ctx }) => updateReview(ctx, config, params.id, body));

      m.implement(reviewsEndpoints.delete, async ({ params, ctx }) => {
        await deleteReview(ctx, params.id);
      });

      m.implement(reviewsEndpoints.vote, async ({ params, body, ctx }) =>
        voteReview(ctx, config, params.id, body.value),
      );
      m.implement(reviewsEndpoints.unvote, async ({ params, ctx }) => voteReview(ctx, config, params.id, 0));

      m.implement(reviewsEndpoints.reply, async ({ params, body, ctx }) =>
        replyToReview(ctx, config, params.id, body.bodyMd),
      );
      m.implement(reviewsEndpoints.deleteReply, async ({ params, ctx }) => replyToReview(ctx, config, params.id, null));
    },
  });
}
