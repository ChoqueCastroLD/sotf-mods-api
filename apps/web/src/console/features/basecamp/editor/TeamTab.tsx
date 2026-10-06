/**
 * «Team» tab of the mod editor (T1-12): the owner invites co-authors by handle and removes them; a
 * co-author sees the team and can leave. Co-authors edit the known issues and FAQ and release
 * versions; the listing, the media, the status and the team stay with the owner.
 */
import { Avatar } from '@sotf/ui/avatar';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { LogOut, UserMinus, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { useMe } from '../../../hooks/use-me.ts';
import { notify } from '../../../lib/notify.ts';
import { basecampKeys, KNOWLEDGE_LIMITS, knowledgeApi, refreshLists, type TeamMember, teamQuery } from '../api.ts';
import { date } from '../format.ts';
import { kt } from '../knowledge-i18n.ts';
import { reportFailure } from '../shared.tsx';

function MemberRow({
  member,
  canRemove,
  isSelf,
  busy,
  onRemove,
}: {
  member: TeamMember;
  canRemove: boolean;
  isSelf: boolean;
  busy: boolean;
  onRemove: () => void;
}) {
  const name = member.user.displayName || member.user.handle;
  return (
    <li className="flex flex-wrap items-center justify-between gap-3 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar name={name} id={member.user.id} src={member.user.avatarUrl} size={40} />
        <div className="grid min-w-0">
          <span className="truncate font-semibold text-fg">{name}</span>
          <span className="truncate text-sm text-fg-muted">
            @{member.user.handle} · {kt('mod_knowledge_team_since', { date: date(member.invitedAt) })}
          </span>
        </div>
        {member.status === 'pending' ? (
          <Badge variant="warning" size="sm">
            {kt('mod_knowledge_team_pending')}
          </Badge>
        ) : (
          <Badge variant="signal" size="sm">
            {kt('mod_knowledge_team_role_coauthor')}
          </Badge>
        )}
      </div>
      {canRemove || isSelf ? (
        <Button type="button" variant="ghost" size="sm" loading={busy} onClick={onRemove}>
          <Icon icon={isSelf ? LogOut : UserMinus} size={16} />
          {isSelf
            ? kt('mod_knowledge_team_leave')
            : member.status === 'pending'
              ? kt('mod_knowledge_team_cancel_invite')
              : kt('mod_knowledge_team_remove')}
        </Button>
      ) : null}
    </li>
  );
}

export function TeamTab({ modId }: { modId: number }) {
  const viewerId = useMe().user.id;
  const { data: team } = useSuspenseQuery(teamQuery(modId));
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [handle, setHandle] = useState('');
  const [inviting, setInviting] = useState(false);
  const [removing, setRemoving] = useState<number | null>(null);
  const manages = team.viewerRole !== 'coauthor';
  const slotsUsed = team.members.length;
  const full = slotsUsed >= KNOWLEDGE_LIMITS.coAuthorsMax;

  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: basecampKeys.team(modId) }),
      queryClient.invalidateQueries({ queryKey: basecampKeys.coAuthored }),
      refreshLists(queryClient),
    ]);

  const invite = async () => {
    const value = handle.trim().replace(/^@/, '');
    if (!value || inviting) return;
    setInviting(true);
    try {
      await knowledgeApi.invite(modId, value);
      setHandle('');
      notify.success(kt('mod_knowledge_team_invited', { handle: value }));
      await refresh();
    } catch (error) {
      reportFailure(error, kt('mod_knowledge_team_invite_failed'));
    } finally {
      setInviting(false);
    }
  };

  const remove = async (member: TeamMember) => {
    const self = member.user.id === viewerId;
    setRemoving(member.user.id);
    try {
      await knowledgeApi.removeMember(modId, member.user.id);
      notify.success(self ? kt('mod_knowledge_team_left') : kt('mod_knowledge_team_removed'));
      await refresh();
      if (self && team.viewerRole === 'coauthor') void navigate({ to: '/dashboard/mods' });
    } catch (error) {
      reportFailure(error, kt('mod_knowledge_team_remove_failed'));
    } finally {
      setRemoving(null);
    }
  };

  const ownerName = team.owner.displayName || team.owner.handle;
  return (
    <div className="grid gap-6">
      <section aria-labelledby="bc-team-title" className="grid gap-3 rounded-lg border border-border bg-surface p-4">
        <div className="grid gap-1">
          <h2 id="bc-team-title" className="readout text-fg">
            {kt('mod_knowledge_team_title')}
          </h2>
          <p className="text-sm text-fg-muted">{kt('mod_knowledge_team_hint')}</p>
        </div>
        <ul className="divide-y divide-border">
          <li className="flex items-center gap-3 py-3">
            <Avatar name={ownerName} id={team.owner.id} src={team.owner.avatarUrl} size={40} />
            <div className="grid min-w-0">
              <span className="truncate font-semibold text-fg">{ownerName}</span>
              <span className="truncate text-sm text-fg-muted">@{team.owner.handle}</span>
            </div>
            <Badge variant="neutral" size="sm">
              {kt('mod_knowledge_team_role_owner')}
            </Badge>
          </li>
          {team.members.map((member) => (
            <MemberRow
              key={member.user.id}
              member={member}
              canRemove={manages}
              isSelf={team.viewerRole === 'coauthor' && member.user.id === viewerId}
              busy={removing === member.user.id}
              onRemove={() => void remove(member)}
            />
          ))}
        </ul>
        {team.members.length === 0 ? <p className="text-sm text-fg-muted">{kt('mod_knowledge_team_empty')}</p> : null}
      </section>

      {manages ? (
        <form
          aria-labelledby="bc-team-invite-title"
          className="grid gap-3 rounded-lg border border-border bg-surface p-4"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            void invite();
          }}
        >
          <h2 id="bc-team-invite-title" className="readout text-fg">
            {kt('mod_knowledge_team_invite_title')}
          </h2>
          <Field label={kt('mod_knowledge_team_handle')} description={kt('mod_knowledge_team_handle_hint')}>
            <Input
              value={handle}
              maxLength={64}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              disabled={full}
              placeholder={kt('mod_knowledge_team_handle_placeholder')}
              onChange={(event) => setHandle(event.currentTarget.value)}
            />
          </Field>
          {full ? (
            <p className="text-sm text-fg-muted">
              {kt('mod_knowledge_team_full', { max: KNOWLEDGE_LIMITS.coAuthorsMax })}
            </p>
          ) : null}
          <div>
            <Button type="submit" loading={inviting} disabled={full || handle.trim().length === 0}>
              <Icon icon={UserPlus} size={16} />
              {kt('mod_knowledge_team_invite')}
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
