/**
 * `GET /me/social-state?modId=` (PLAN §7.6/§7.7/§7.10, WP-70 islands): the comment, review and
 * field-report lists of a mod page are edge-cached and read as a guest, so they cannot say what the
 * viewer did. This session lookup returns it in one round trip: my reactions per comment, my
 * helpful votes per review, my own review (with its Markdown source), my comments on the mod
 * (hidden and held ones included, with their Markdown source for «Edit») and my field reports.
 *
 * Private (`cache.private`); nothing here is visible to anyone but the viewer.
 */
import type { ReactionKind, SocialStateDTO } from '@sotf/contracts/comments';
import { decodeEntities } from '@sotf/markdown';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { userCompatReports } from '../compat/reports.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { myReviewOf } from '../reviews/queries.ts';
import { type CommunityConfig, rows } from './shared.ts';

type SocialState = z.infer<typeof SocialStateDTO>;

export interface SocialStateDeps {
  community: CommunityConfig;
  catalog: CatalogConfig;
}

const REACTIONS = new Set<string>(['thumbs_up', 'heart', 'laugh', 'party', 'pray', 'fire']);
const COMMENT_STATUSES = new Set<string>(['visible', 'hidden', 'pending']);

export async function getSocialState(ctx: Ctx, deps: SocialStateDeps, modId: number): Promise<SocialState> {
  if (!ctx.actor) throw errors.unauthenticated();
  const userId = ctx.actor.userId;
  const [reactions, comments, votes, review, compatReports, lock] = await Promise.all([
    rows<{ commentId: number; kinds: string[] }>(
      ctx.db,
      sql`SELECT r."commentId", array_agg(r."kind" ORDER BY r."kind") AS "kinds"
            FROM "CommentReaction" r JOIN "Comment" c ON c."id" = r."commentId"
           WHERE c."modId" = ${modId} AND r."userId" = ${userId}
           GROUP BY r."commentId" ORDER BY r."commentId"`,
    ),
    rows<{
      id: number;
      replyId: number | null;
      status: string;
      hiddenReason: string | null;
      bodyMd: string | null;
      message: string;
    }>(
      ctx.db,
      sql`SELECT c."id", c."replyId", c."status", c."hiddenReason", c."bodyMd", c."message"
            FROM "Comment" c
           WHERE c."modId" = ${modId} AND c."userId" = ${userId} AND c."status" <> 'deleted'
           ORDER BY c."id" DESC LIMIT 200`,
    ),
    rows<{ reviewId: number; value: number }>(
      ctx.db,
      sql`SELECT v."reviewId", v."value" FROM "ReviewVote" v JOIN "ModReview" r ON r."id" = v."reviewId"
           WHERE r."modId" = ${modId} AND v."userId" = ${userId} ORDER BY v."reviewId"`,
    ),
    myReviewOf(ctx.db, deps.community, modId, userId),
    userCompatReports(ctx.db, { config: deps.catalog }, modId, userId),
    rows<{ locked: boolean }>(
      ctx.db,
      sql`SELECT ("commentsLockedAt" IS NOT NULL) AS "locked" FROM "Mod" WHERE "id" = ${modId}`,
    ),
  ]);
  return {
    modId,
    reactions: reactions.map((r) => ({
      commentId: Number(r.commentId),
      kinds: (r.kinds ?? []).filter((k): k is ReactionKind => REACTIONS.has(k)),
    })),
    comments: comments
      .filter((c) => COMMENT_STATUSES.has(c.status))
      .map((c) => ({
        id: Number(c.id),
        parentId: c.replyId === null ? null : Number(c.replyId),
        status: c.status as SocialState['comments'][number]['status'],
        hiddenReason: c.hiddenReason,
        bodyMd: c.bodyMd ?? decodeEntities(c.message),
      })),
    votes: votes
      .filter((v) => v.value === 1 || v.value === -1)
      .map((v) => ({ reviewId: Number(v.reviewId), value: v.value as 1 | -1 })),
    review,
    compatReports,
    commentsLocked: lock[0]?.locked === true,
  };
}
