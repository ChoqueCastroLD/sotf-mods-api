/**
 * `requests` module (T2): the mod request board. Public reads (edge-cached, tags `list:requests`
 * and `request:{id}`), the session-only list of the viewer's votes and the member writes: create,
 * edit, delete, vote, adopt/release (creators), fulfil with an own published mod, close/reopen and
 * comments. Rules and events live in `@sotf/core/requests`.
 */
import { requestsEndpoints } from '@sotf/contracts/requests';
import {
  adoptRequest,
  createRequest,
  createRequestComment,
  deleteRequest,
  deleteRequestComment,
  fulfillRequest,
  getRequest,
  listRequestComments,
  listRequests,
  myRequestVotes,
  releaseRequest,
  setRequestClosed,
  updateRequest,
  updateRequestComment,
  voteRequest,
} from '@sotf/core/requests/index';
import { defineModule } from '../../lib/define-module.ts';
import { communityConfigOf } from '../comments/module.ts';

export default defineModule({
  name: 'requests',
  register(m) {
    const config = communityConfigOf(m.platform.env);

    m.implement(requestsEndpoints.list, async ({ query, ctx }) => listRequests(ctx.db, config, query));

    m.implement(requestsEndpoints.get, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return getRequest(ctx.db, config, params.id);
    });

    m.implement(requestsEndpoints.comments, async ({ params, query, ctx, cache }) => {
      cache({ id: params.id });
      return listRequestComments(ctx.db, config, params.id, { cursor: query.cursor, limit: query.limit });
    });

    m.implement(requestsEndpoints.myVotes, async ({ ctx }) => {
      if (!ctx.actor) throw new Error('unreachable: session endpoint without actor');
      return myRequestVotes(ctx.db, ctx.actor.userId);
    });

    m.implement(requestsEndpoints.create, async ({ body, ctx, reply }) => {
      const created = await createRequest(ctx, config, body);
      reply.header('location', `/api/v2/requests/${created.id}`);
      return created;
    });
    m.implement(requestsEndpoints.update, async ({ params, body, ctx }) => updateRequest(ctx, config, params.id, body));
    m.implement(requestsEndpoints.delete, async ({ params, ctx }) => {
      await deleteRequest(ctx, params.id);
    });

    m.implement(requestsEndpoints.vote, async ({ params, ctx }) => voteRequest(ctx, params.id, true));
    m.implement(requestsEndpoints.unvote, async ({ params, ctx }) => voteRequest(ctx, params.id, false));

    m.implement(requestsEndpoints.adopt, async ({ params, ctx }) => adoptRequest(ctx, config, params.id));
    m.implement(requestsEndpoints.release, async ({ params, ctx }) => releaseRequest(ctx, config, params.id));
    m.implement(requestsEndpoints.fulfill, async ({ params, body, ctx }) =>
      fulfillRequest(ctx, config, params.id, body),
    );
    m.implement(requestsEndpoints.close, async ({ params, ctx }) => setRequestClosed(ctx, config, params.id, true));
    m.implement(requestsEndpoints.reopen, async ({ params, ctx }) => setRequestClosed(ctx, config, params.id, false));

    m.implement(requestsEndpoints.createComment, async ({ params, body, ctx }) =>
      createRequestComment(ctx, config, params.id, body.bodyMd),
    );
    m.implement(requestsEndpoints.updateComment, async ({ params, body, ctx }) =>
      updateRequestComment(ctx, config, params.id, body.bodyMd),
    );
    m.implement(requestsEndpoints.deleteComment, async ({ params, ctx }) => {
      await deleteRequestComment(ctx, params.id);
    });
  },
});
