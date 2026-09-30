/**
 * `comments` module (WP-41, PLAN §5.2 "Comunidad", §7.6): the public Top/New list and permalink
 * thread (edge-cached, tag `mod:{id}`), and the member writes: comment or reply, edit, soft delete,
 * reactions, pin, solution and "bug resolved in vX".
 *
 * Limits: the contract's `comments` bucket (5/min per user) plus 50 comments per user and day
 * (`comments-day`, PLAN §5.1); accounts younger than 24 h pass Turnstile (T0-22). Business rules
 * (visibility, link retention by trust, counters, events) live in `@sotf/core/comments`.
 */
import { commentsEndpoints } from '@sotf/contracts/comments';
import { createTurnstileVerifier, type TurnstileVerifier } from '@sotf/core/auth/index';
import {
  COMMENTS_PER_DAY,
  type CommentWriteDeps,
  type CommunityConfig,
  createComment,
  deleteComment,
  getCommentThread,
  listComments,
  resolveBug,
  setPinned,
  setReaction,
  setSolution,
  updateComment,
} from '@sotf/core/comments/index';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';
import type { Platform } from '../../lib/types.ts';

const DAY_MS = 24 * 3600 * 1000;

export interface CommentsModuleOptions {
  /** Tests inject a fake; default: Cloudflare Turnstile with `TURNSTILE_SECRET_KEY`. */
  turnstile?: TurnstileVerifier;
}

/** Media origin of the DTOs (avatars, comment images). */
export function communityConfigOf(env: { R2_PUBLIC_BASE_URL: string; R2_BUCKET: string }): CommunityConfig {
  return { mediaBaseUrl: env.R2_PUBLIC_BASE_URL, publicBucket: env.R2_BUCKET };
}

function writeDeps(platform: Platform, config: CommunityConfig, turnstile: TurnstileVerifier): CommentWriteDeps {
  return {
    config,
    verifyTurnstile: (token, ip) => turnstile.verify(token, ip),
    consumeDaily: (userId) =>
      platform.rateLimiter.consume('comments-day', `u:${userId}`, { max: COMMENTS_PER_DAY, window: DAY_MS }),
  };
}

export function createCommentsModule(options: CommentsModuleOptions = {}): ApiModule {
  return defineModule({
    name: 'comments',
    register(m) {
      const env = m.platform.env;
      const config = communityConfigOf(env);
      const turnstile =
        options.turnstile ??
        createTurnstileVerifier({
          secret: env.TURNSTILE_SECRET_KEY,
          production: env.SITE_ENV === 'production',
          log: m.platform.log,
        });
      const deps = writeDeps(m.platform, config, turnstile);

      m.implement(commentsEndpoints.list, async ({ params, query, ctx, cache }) => {
        cache({ id: params.id });
        return listComments(ctx, config, params.id, { sort: query.sort, cursor: query.cursor, limit: query.limit });
      });

      m.implement(commentsEndpoints.get, async ({ params, ctx, cache }) => {
        const thread = await getCommentThread(ctx, config, params.id);
        // `mod:{id}` is the mod of the thread (every comment write purges it).
        cache({ id: thread.modId });
        return { comment: thread.comment, focusId: thread.focusId };
      });

      m.implement(commentsEndpoints.create, async ({ params, body, ctx, reply }) => {
        const created = await createComment(ctx, deps, params.id, body);
        reply.header('location', `/api/v2/comments/${created.id}`);
        return created;
      });

      m.implement(commentsEndpoints.update, async ({ params, body, ctx }) =>
        updateComment(ctx, deps, params.id, { bodyMd: body.bodyMd }),
      );

      m.implement(commentsEndpoints.delete, async ({ params, ctx }) => {
        await deleteComment(ctx, params.id);
      });

      m.implement(commentsEndpoints.react, async ({ params, ctx }) => setReaction(ctx, params.id, params.kind, true));
      m.implement(commentsEndpoints.unreact, async ({ params, ctx }) =>
        setReaction(ctx, params.id, params.kind, false),
      );

      m.implement(commentsEndpoints.pin, async ({ params, ctx }) => setPinned(ctx, deps, params.id, true));
      m.implement(commentsEndpoints.unpin, async ({ params, ctx }) => setPinned(ctx, deps, params.id, false));

      m.implement(commentsEndpoints.markSolution, async ({ params, ctx }) => setSolution(ctx, deps, params.id, true));
      m.implement(commentsEndpoints.unmarkSolution, async ({ params, ctx }) =>
        setSolution(ctx, deps, params.id, false),
      );

      m.implement(commentsEndpoints.resolveBug, async ({ params, body, ctx }) =>
        resolveBug(ctx, deps, params.id, body.versionId),
      );
    },
  });
}
