/**
 * Mod knowledge module (T1-14, T1-17, T1-12): known issues and FAQ, the version diff and
 * co-authors. Public reads are edge-cacheable (`mod:{id}`, `user:{id}`); the studio routes and
 * `/me/coauthor-*` are private. Business rules live in `@sotf/core/mod-knowledge`.
 */
import { modKnowledgeEndpoints } from '@sotf/contracts/mod-knowledge';
import {
  acceptInvite,
  declineInvite,
  getModKnowledge,
  getStudioKnowledge,
  getTeam,
  getVersionDiff,
  inviteCoAuthor,
  type KnowledgeDeps,
  listMyCoAuthored,
  listMyInvites,
  listUserCoAuthored,
  putFaq,
  putKnownIssues,
  removeTeamMember,
} from '@sotf/core/mod-knowledge/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'mod-knowledge',
  register(m) {
    const deps: KnowledgeDeps = { config: catalogConfigOf(m.platform.env) };
    const e = modKnowledgeEndpoints;

    m.implement(e.knowledge, async ({ params, ctx, cache }) => {
      const knowledge = await getModKnowledge(ctx, deps, params.id);
      cache({ id: params.id });
      return knowledge;
    });

    m.implement(e.diff, async ({ params, query, ctx, cache }) => {
      const diff = await getVersionDiff(ctx, params.id, query.from, query.to);
      cache({ id: params.id });
      return diff;
    });

    m.implement(e.studioKnowledge, async ({ params, ctx }) => getStudioKnowledge(ctx, deps, params.id));

    m.implement(e.putKnownIssues, async ({ params, body, ctx }) => ({
      items: await putKnownIssues(ctx, params.id, body.items),
    }));

    m.implement(e.putFaq, async ({ params, body, ctx }) => ({ items: await putFaq(ctx, params.id, body.items) }));

    m.implement(e.team, async ({ params, ctx }) => getTeam(ctx, deps, params.id));

    m.implement(e.invite, async ({ params, body, ctx }) => inviteCoAuthor(ctx, deps, params.id, body.handle));

    m.implement(e.removeMember, async ({ params, ctx }) => {
      await removeTeamMember(ctx, params.id, params.userId);
    });

    m.implement(e.myInvites, async ({ ctx }) => ({ items: await listMyInvites(ctx, deps) }));

    m.implement(e.acceptInvite, async ({ params, ctx }) => acceptInvite(ctx, deps, params.id));

    m.implement(e.declineInvite, async ({ params, ctx }) => {
      await declineInvite(ctx, params.id);
    });

    m.implement(e.myCoAuthored, async ({ ctx }) => ({ items: await listMyCoAuthored(ctx, deps) }));

    m.implement(e.userCoAuthored, async ({ params, ctx, cache }) => {
      const { userId, items } = await listUserCoAuthored(ctx, deps, params.handle);
      cache({ id: userId });
      return { items };
    });
  },
});
