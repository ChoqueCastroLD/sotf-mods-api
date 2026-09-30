/**
 * `/basecamp/invites` — co-author invitations I received (T1-12): accept to edit the mod's known
 * issues and FAQ and release versions, or decline. The notification «invited you to co-author»
 * leads here.
 */
import { Avatar } from '@sotf/ui/avatar';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Check, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { basecampKeys, type CoAuthorInvite, invitesQuery, knowledgeApi, refreshLists } from './api.ts';
import { date } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { kt, useKnowledgeMessages } from './knowledge-i18n.ts';
import { ModThumb, reportFailure, ScreenHeader } from './shared.tsx';

function InviteCard({ invite }: { invite: CoAuthorInvite }) {
  const queryClient = useQueryClient();
  const [busy, setBusy] = useState<'accept' | 'decline' | null>(null);
  const inviter = invite.invitedBy;

  const answer = async (choice: 'accept' | 'decline') => {
    setBusy(choice);
    try {
      if (choice === 'accept') await knowledgeApi.accept(invite.id);
      else await knowledgeApi.decline(invite.id);
      notify.success(
        choice === 'accept'
          ? kt('mod_knowledge_invites_accepted', { mod: invite.mod.name })
          : kt('mod_knowledge_invites_declined'),
      );
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: basecampKeys.invites }),
        queryClient.invalidateQueries({ queryKey: basecampKeys.coAuthored }),
        refreshLists(queryClient),
      ]);
    } catch (error) {
      reportFailure(error, kt('mod_knowledge_invites_failed'));
    } finally {
      setBusy(null);
    }
  };

  return (
    <li className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-surface p-4">
      <div className="flex min-w-0 items-center gap-4">
        <ModThumb url={invite.mod.thumbnailUrl} className="hidden w-24 sm:inline-flex" />
        <div className="grid min-w-0 gap-1">
          <p className="truncate font-semibold text-fg">{invite.mod.name}</p>
          <p className="flex flex-wrap items-center gap-2 text-sm text-fg-muted">
            {inviter ? (
              <>
                <Avatar
                  name={inviter.displayName || inviter.handle}
                  id={inviter.id}
                  src={inviter.avatarUrl}
                  size={20}
                />
                {kt('mod_knowledge_invites_from', { name: inviter.displayName || inviter.handle })}
              </>
            ) : null}
            <span>{date(invite.invitedAt)}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          loading={busy === 'decline'}
          disabled={busy !== null}
          onClick={() => void answer('decline')}
        >
          <Icon icon={X} size={16} />
          {kt('mod_knowledge_invites_decline')}
        </Button>
        <Button
          type="button"
          size="sm"
          loading={busy === 'accept'}
          disabled={busy !== null}
          onClick={() => void answer('accept')}
        >
          <Icon icon={Check} size={16} />
          {kt('mod_knowledge_invites_accept')}
        </Button>
      </div>
    </li>
  );
}

export function InvitesScreen() {
  useBasecampMessages();
  useKnowledgeMessages();
  const { data } = useSuspenseQuery(invitesQuery);
  return (
    <div className="grid gap-6">
      <ScreenHeader
        readout={bt('basecamp_readout')}
        title={kt('mod_knowledge_invites_title')}
        description={kt('mod_knowledge_invites_intro')}
        actions={
          <Link to="/basecamp/mods" className="text-sm text-fg-muted hover:text-fg">
            {kt('mod_knowledge_invites_back')}
          </Link>
        }
      />
      {data.items.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Mail} size={32} />}
          title={kt('mod_knowledge_invites_empty_title')}
          description={kt('mod_knowledge_invites_empty_text')}
        />
      ) : (
        <ul className="grid gap-3" aria-label={kt('mod_knowledge_invites_title')}>
          {data.items.map((invite) => (
            <InviteCard key={invite.id} invite={invite} />
          ))}
        </ul>
      )}
    </div>
  );
}
