/**
 * `/basecamp/jams` — creator panel: jams open for submissions and the member's own entries.
 * Submitting itself happens on the public jam page (island), so every row links there.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { formatInstant, Panel } from '../admin/shared.tsx';
import { myJamsQuery } from './api.ts';
import { jamPhaseLabel, jamPhaseVariant } from './phase.ts';

const link = 'inline-flex items-center gap-1 font-semibold text-fg hover:text-link';

export function MyJamsScreen() {
  const { data } = useSuspenseQuery(myJamsQuery);

  return (
    <div className="grid gap-6">
      <header className="grid gap-1">
        <p className="readout text-signal">{m.jams_mine_readout()}</p>
        <h1 className="font-display-caps text-display-xs text-fg">{m.jams_mine_title()}</h1>
        <p className="max-w-prose text-sm text-fg-muted">{m.jams_mine_description()}</p>
      </header>

      <Panel
        title={m.jams_mine_open()}
        actions={
          <a href="/jams" className={link}>
            {m.jams_mine_all()}
            <Icon icon={ArrowUpRight} size={16} />
          </a>
        }
      >
        {data.open.length === 0 ? (
          <EmptyState
            icon={<Icon icon={Trophy} size={32} />}
            title={m.jams_mine_open_empty_title()}
            description={m.jams_mine_open_empty_text()}
          />
        ) : (
          <ul className="grid gap-3">
            {data.open.map((jam) => (
              <li
                key={jam.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border p-3"
              >
                <div className="grid gap-0.5">
                  <a href={`/jams/${jam.slug}`} className={link}>
                    {jam.title}
                    <Icon icon={ArrowUpRight} size={16} />
                  </a>
                  <span className="text-xs text-fg-muted">
                    {jam.submissionsCloseAt
                      ? m.jams_mine_closes({ date: formatInstant(jam.submissionsCloseAt) })
                      : m.jams_mine_no_deadline()}
                  </span>
                </div>
                <Badge variant={jamPhaseVariant(jam.phase)} size="sm">
                  {jamPhaseLabel(jam.phase)}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </Panel>

      <Panel title={m.jams_mine_history()}>
        {data.participations.length === 0 ? (
          <p className="text-sm text-fg-muted">{m.jams_mine_history_empty()}</p>
        ) : (
          <ul className="grid gap-3">
            {data.participations.map((entry) => (
              <li
                key={entry.entryId}
                className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border p-3"
              >
                <div className="grid gap-0.5">
                  <a href={`/jams/${entry.jam.slug}`} className={link}>
                    {entry.jam.title}
                    <Icon icon={ArrowUpRight} size={16} />
                  </a>
                  <a href={entry.mod.canonicalPath} className="text-xs text-fg-muted hover:text-link">
                    {entry.mod.name}
                  </a>
                </div>
                <span className="flex flex-wrap items-center gap-2">
                  {entry.overallRank ? (
                    <Badge variant="featured" size="sm">
                      {m.jams_rank({ rank: entry.overallRank })}
                    </Badge>
                  ) : null}
                  {entry.status !== 'active' ? (
                    <Badge variant="warning" size="sm">
                      {entryStatusLabel(entry.status)}
                    </Badge>
                  ) : null}
                  <Badge variant={jamPhaseVariant(entry.jam.phase)} size="sm">
                    {jamPhaseLabel(entry.jam.phase)}
                  </Badge>
                </span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}

function entryStatusLabel(status: string): string {
  switch (status) {
    case 'withdrawn':
      return m.jams_entry_status_withdrawn();
    case 'hidden':
      return m.jams_entry_status_hidden();
    case 'disqualified':
      return m.jams_entry_status_disqualified();
    default:
      return m.jams_entry_status_active();
  }
}
