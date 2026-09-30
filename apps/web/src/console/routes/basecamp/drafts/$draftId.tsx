/**
 * `/basecamp/drafts/:draftId` (WP-74): a stable link to a draft (notifications, Basecamp) that
 * opens the right wizard — new mod, new build or new version of its mod.
 */
import { createFileRoute, redirect } from '@tanstack/react-router';
import { draftQuery } from '../../../features/upload/lib/queries.ts';

export const Route = createFileRoute('/basecamp/drafts/$draftId')({
  loader: async ({ context, params }) => {
    const draft = await context.queryClient.ensureQueryData(draftQuery(params.draftId));
    if (draft.kind === 'version' && draft.modId !== null) {
      throw redirect({
        to: '/basecamp/mods/$modId/new-version',
        params: { modId: String(draft.modId) },
        search: { draft: draft.id },
        replace: true,
      });
    }
    throw redirect({
      to: draft.kind === 'build' ? '/basecamp/new/build' : '/basecamp/new/mod',
      search: { draft: draft.id },
      replace: true,
    });
  },
});
