/**
 * `/dashboard/invites` — co-author invitations (T1-12). The «invited you to co-author» notification
 * leads here.
 */
import { createFileRoute } from '@tanstack/react-router';
import { invitesQuery } from '../../features/basecamp/api.ts';
import { InvitesScreen } from '../../features/basecamp/InvitesScreen.tsx';
import { loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { kt, loadKnowledgeMessages } from '../../features/basecamp/knowledge-i18n.ts';

export const Route = createFileRoute('/dashboard/invites')({
  loader: async ({ context }) => {
    await Promise.all([
      loadBasecampMessages(),
      loadKnowledgeMessages(),
      context.queryClient.ensureQueryData(invitesQuery),
    ]);
  },
  staticData: { title: () => kt('mod_knowledge_invites_title') },
  component: InvitesScreen,
});
