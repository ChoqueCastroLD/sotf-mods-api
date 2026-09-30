/**
 * «Shared with me» on `/basecamp/mods` (T1-12): mods I co-author (open the editor to maintain their
 * known issues and FAQ or release versions) and a link to the pending invitations.
 */
import { buttonClasses } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Mail } from 'lucide-react';
import { coAuthoredQuery, invitesQuery } from './api.ts';
import { kt } from './knowledge-i18n.ts';
import { ModThumb, Panel } from './shared.tsx';

export function CoAuthoredPanel() {
  const { data: shared } = useSuspenseQuery(coAuthoredQuery);
  const { data: invites } = useSuspenseQuery(invitesQuery);
  if (shared.items.length === 0 && invites.items.length === 0) return null;
  return (
    <Panel
      title={kt('mod_knowledge_shared_title')}
      actions={
        invites.items.length > 0 ? (
          <Link to="/basecamp/invites" className={buttonClasses({ variant: 'secondary', size: 'sm' })}>
            <Icon icon={Mail} size={16} />
            {kt('mod_knowledge_shared_invites', { count: invites.items.length })}
          </Link>
        ) : null
      }
    >
      {shared.items.length > 0 ? (
        <ul className="grid gap-2 sm:grid-cols-2">
          {shared.items.map((item) => (
            <li key={item.mod.id}>
              <Link
                to="/basecamp/mods/$modId"
                params={{ modId: String(item.mod.id) }}
                className="flex items-center gap-3 rounded-md border border-border p-2 hover:border-border-strong"
              >
                <ModThumb url={item.mod.thumbnailUrl} className="w-16 shrink-0" />
                <span className="grid min-w-0">
                  <span className="truncate font-semibold text-fg">{item.mod.name}</span>
                  <span className="truncate text-sm text-fg-muted">
                    {kt('mod_knowledge_shared_by', { handle: item.mod.userHandle })}
                    {item.latestVersion ? ` · v${item.latestVersion}` : ''}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-fg-muted">{kt('mod_knowledge_shared_none')}</p>
      )}
    </Panel>
  );
}
