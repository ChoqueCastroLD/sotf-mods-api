/**
 * Key figures of the dashboard, one strip instead of six cards: downloads today, 7 and 30 days
 * (with the change against the previous period and a sparkline), followers, what is waiting for an
 * answer and what is waiting for review. The last two link to where the work is done.
 */
import { cn } from '@sotf/ui/cn';
import { Sparkline } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Kpi, Overview } from './api.ts';
import { changeOf, compact, number, percent } from './format.ts';
import { bt } from './i18n.ts';

const LINK =
  'transition-colors hover:bg-fg/4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus';

function Change({ kpi }: { kpi: Kpi }) {
  const change = changeOf(kpi.value, kpi.previous);
  if (change === null) return <p className="h-4" />;
  const shown = percent(Math.min(Math.abs(change), 9.99)) + (Math.abs(change) > 9.99 ? '+' : '');
  const direction = change > 0.0005 ? 'up' : change < -0.0005 ? 'down' : 'flat';
  return (
    <p
      data-delta={direction}
      className={cn(
        'flex h-4 items-center gap-1 text-xs font-medium',
        direction === 'up' ? 'text-success' : direction === 'down' ? 'text-danger' : 'text-fg-muted',
      )}
    >
      <Icon icon={direction === 'up' ? ArrowUpRight : direction === 'down' ? ArrowDownRight : Minus} size={14} />
      {direction === 'up'
        ? bt('basecamp_kpi_delta_up', { percent: shown })
        : direction === 'down'
          ? bt('basecamp_kpi_delta_down', { percent: shown })
          : bt('basecamp_kpi_delta_flat')}
    </p>
  );
}

function Tile({
  label,
  value,
  exact,
  footer,
  spark,
  href,
  search,
}: {
  label: string;
  value: number;
  /** Full figure when the shown one is compacted. */
  exact?: boolean;
  footer?: ReactNode;
  spark?: readonly number[];
  href?: '/dashboard/inbox' | '/dashboard/mods';
  search?: { status: 'pending' };
}) {
  const body = (
    <div className="flex h-full min-w-0 flex-col gap-1.5 p-4 md:p-5">
      <p className="text-xs text-fg-muted">{label}</p>
      <p
        className="font-display-caps text-display-xs leading-none tabular-nums text-fg"
        title={exact ? number(value) : undefined}
      >
        {exact ? compact(value) : number(value)}
      </p>
      <div className="min-h-4 text-xs text-fg-muted">{footer}</div>
      {spark && spark.length > 1 ? <Sparkline values={spark} height={28} className="mt-auto pt-1" /> : null}
    </div>
  );
  return (
    <li className="min-w-0 snap-start bg-surface max-md:w-44 max-md:shrink-0">
      {href ? (
        <Link to={href} {...(search ? { search } : {})} className={cn('block h-full', LINK)}>
          {body}
        </Link>
      ) : (
        body
      )}
    </li>
  );
}

export function KpiStrip({ overview }: { overview: Overview }) {
  const { kpis } = overview;
  const queues = overview.queues ?? { versionsPending: 0, modsPending: 0, commentsToAnswer: 0, reviewsToAnswer: 0 };
  const today = kpis.downloads1d;

  return (
    <ul
      // Phones: a swipeable strip; wider: a grid whose 1 px gaps draw the dividers.
      className="relative -mx-4 flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-border bg-border [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-hidden md:rounded-lg md:border xl:grid-cols-6 [&::-webkit-scrollbar]:hidden"
    >
      <Tile
        label={bt('basecamp_kpi_downloads_today')}
        value={today?.value ?? 0}
        footer={today ? bt('basecamp_kpi_yesterday', { count: number(today.previous ?? 0) }) : null}
        {...(today ? { spark: today.sparkline } : {})}
      />
      <Tile
        label={bt('basecamp_kpi_downloads_7d')}
        value={kpis.downloads7d.value}
        exact
        footer={<Change kpi={kpis.downloads7d} />}
        spark={kpis.downloads7d.sparkline}
      />
      <Tile
        label={bt('basecamp_kpi_downloads_30d')}
        value={kpis.downloads30d.value}
        exact
        footer={<Change kpi={kpis.downloads30d} />}
        spark={kpis.downloads30d.sparkline}
      />
      <Tile
        label={bt('basecamp_kpi_followers')}
        value={kpis.followers.value}
        footer={<Change kpi={kpis.followers} />}
        spark={kpis.followers.sparkline}
      />
      <Tile
        label={bt('basecamp_kpi_to_answer')}
        value={queues.commentsToAnswer + queues.reviewsToAnswer}
        footer={bt('basecamp_kpi_to_answer_detail', {
          comments: queues.commentsToAnswer,
          reviews: queues.reviewsToAnswer,
        })}
        href="/dashboard/inbox"
      />
      <Tile
        label={bt('basecamp_kpi_pending')}
        value={queues.versionsPending + queues.modsPending}
        footer={bt('basecamp_kpi_pending_detail', { versions: queues.versionsPending, mods: queues.modsPending })}
        href="/dashboard/mods"
        {...(queues.modsPending > 0 ? { search: { status: 'pending' as const } } : {})}
      />
    </ul>
  );
}
