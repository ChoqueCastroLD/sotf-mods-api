/**
 * `/dashboard/modpacks` — the member's modpacks (any status), with «New modpack» and «Import
 * .sotfprofile» (both open the editor). Pending modpacks say they wait for a moderator.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { buttonClasses } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, FileUp, Layers, Plus } from 'lucide-react';
import { formatInstant, Panel } from '../admin/shared.tsx';
import { myModpacksQuery } from './api.ts';
import { ModpackStatusBadge } from './shared.tsx';

export function MyModpacksScreen() {
  const { data: modpacks } = useSuspenseQuery(myModpacksQuery);

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold text-fg">{m.modpacks_mine_title()}</h1>
          <p className="max-w-prose text-sm text-fg-muted">{m.modpacks_mine_description()}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/dashboard/modpacks/new"
            search={{ import: true }}
            className={buttonClasses({ variant: 'secondary' })}
          >
            <Icon icon={FileUp} size={16} />
            {m.modpacks_import_button()}
          </Link>
          <Link to="/dashboard/modpacks/new" className={buttonClasses({ variant: 'primary' })}>
            <Icon icon={Plus} size={16} />
            {m.modpacks_new_button()}
          </Link>
        </div>
      </header>

      <Panel title={m.modpacks_mine_list_title()}>
        {modpacks.length === 0 ? (
          <div className="grid justify-items-start gap-2 rounded-lg border border-dashed border-border p-6">
            <Icon icon={Layers} size={24} className="text-fg-subtle" />
            <p className="font-semibold text-fg">{m.modpacks_mine_empty_title()}</p>
            <p className="max-w-prose text-sm text-fg-muted">{m.modpacks_mine_empty_text()}</p>
          </div>
        ) : (
          <ul className="grid gap-3">
            {modpacks.map((pack) => (
              <li
                key={pack.id}
                className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-surface p-3"
              >
                <div className="grid min-w-0 flex-1 gap-1">
                  <Link
                    to="/dashboard/modpacks/$kitId"
                    params={{ kitId: String(pack.id) }}
                    className="truncate text-lg font-semibold text-fg hover:text-link"
                  >
                    {pack.name}
                  </Link>
                  <span className="text-xs text-fg-muted">
                    {m.modpacks_mods_count({ count: pack.itemsCount })} ·{' '}
                    {m.modpacks_downloads_count({ count: pack.downloads })} ·{' '}
                    {m.modpacks_updated({ date: formatInstant(pack.updatedAt) })}
                  </span>
                </div>
                <span className="flex flex-wrap items-center gap-2">
                  <ModpackStatusBadge status={pack.approvalStatus} />
                  {pack.visibility !== 'public' ? (
                    <Badge variant="neutral" size="sm">
                      {m.modpacks_visibility_hidden()}
                    </Badge>
                  ) : null}
                  {pack.approvalStatus === 'published' && pack.visibility === 'public' ? (
                    <a
                      href={pack.canonicalPath}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-fg hover:text-link"
                    >
                      {m.modpacks_view_public()}
                      <Icon icon={ArrowUpRight} size={14} />
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
