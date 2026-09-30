/**
 * `/ranger` and `/ranger/comments` — the moderation queue (research/03 §6.10, PLAN §7.4 «Colas»).
 *
 * - Lane bar with live counts (`moderation.queue` stream events refetch every `['moderation']`
 *   query) and the SLA at a glance: waiting in the lane, over 72 h, oldest and average wait.
 * - List (oldest and riskiest first) + item view side by side from `lg`; on phones the list and
 *   the item are two steps (triage only).
 * - `j`/`k` move through the lane; the item view adds `a`, `c` and `r`.
 *
 * The selected lane and item live in the URL (`?lane=versions&item=versions:version:640`), so a
 * ranger can share an item and Back works.
 */
import { m } from '@sotf/i18n/messages';
import { useMediaQuery } from '@sotf/ui';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { LiveDot } from '@sotf/ui/live-dot';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Binoculars, ShieldAlert } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useShortcut } from '../../hooks/use-shortcuts.tsx';
import { useStreamStatus } from '../../hooks/use-stream.ts';
import { type Lane, laneQuery, type QueueItem, SLA_HOURS } from './api.ts';
import { ItemView } from './ItemView.tsx';
import { flagLabel, laneEmpty, laneHint, laneLabel } from './labels.ts';
import { PanelError, RiskBadge, ScreenHeader, UserChip, WaitingBadge, waitingText } from './shared.tsx';

/** `lg` and up: list and item side by side. Below `md`: triage (phones). */
const SPLIT_QUERY = '(min-width: 64rem)';
const PHONE_QUERY = '(max-width: 47.99rem)';

export interface QueueScreenProps {
  /** Route of the screen (`/ranger` or `/ranger/comments`). */
  basePath: '/ranger' | '/ranger/comments';
  lanes: readonly Lane[];
  lane: Lane;
  itemId: string | null;
}

export function QueueScreen({ basePath, lanes, lane, itemId }: QueueScreenProps) {
  const navigate = useNavigate();
  const split = useMediaQuery(SPLIT_QUERY);
  const phone = useMediaQuery(PHONE_QUERY);
  const stream = useStreamStatus();
  const query = useInfiniteQuery(laneQuery(lane));
  const items = useMemo(() => query.data?.pages.flatMap((page) => page.items) ?? [], [query.data]);
  const counts = query.data?.pages[0]?.counts ?? null;
  const selectedIndex = itemId ? items.findIndex((item) => item.id === itemId) : -1;
  const selected = selectedIndex >= 0 ? (items[selectedIndex] ?? null) : null;
  const single = lanes.length === 1;
  const title = single ? laneLabel(lane) : m.ranger_queue_title();
  useDocumentTitle(selected ? m.ranger_item_document_title({ title: selected.title }) : title);

  const select = (next: string | null, replace = false) =>
    void navigate({
      to: basePath,
      search: (previous: Record<string, unknown>) => ({ ...previous, item: next ?? undefined }),
      replace,
    });

  // Desktop: open the first item of the lane when nothing is selected.
  useEffect(() => {
    if (!split || itemId || items.length === 0) return;
    const first = items[0];
    if (first) select(first.id, true);
  }, [split, itemId, items]);

  const move = (step: 1 | -1) => {
    if (items.length === 0) return;
    const base = selectedIndex < 0 ? (step === 1 ? -1 : items.length) : selectedIndex;
    const next = items[Math.min(items.length - 1, Math.max(0, base + step))];
    if (next) select(next.id, true);
    if (step === 1 && base + step >= items.length - 3 && query.hasNextPage && !query.isFetchingNextPage) {
      void query.fetchNextPage();
    }
  };
  useShortcut('j', () => move(1), { description: () => m.ranger_shortcut_next() });
  useShortcut('k', () => move(-1), { description: () => m.ranger_shortcut_previous() });

  /** After a decision: the item after the decided one (or before, at the end of the lane). */
  const onDone = (doneId: string) => {
    const index = items.findIndex((item) => item.id === doneId);
    const rest = items.filter((item) => item.id !== doneId);
    const next = index < 0 ? null : (rest[index] ?? rest[index - 1] ?? null);
    select(split || !phone ? (next?.id ?? null) : null, true);
  };

  const showList = split || !itemId;
  const showItem = Boolean(itemId);

  return (
    <div className="grid gap-5">
      {!itemId || split ? (
        <ScreenHeader
          readout={m.ranger_readout()}
          title={title}
          description={single ? laneHint(lane) : m.ranger_queue_description()}
          actions={
            <span className="inline-flex items-center gap-2 text-xs text-fg-muted">
              {stream === 'open' ? <LiveDot label={m.ranger_live()} /> : <span>{m.ranger_live_off()}</span>}
            </span>
          }
        />
      ) : null}

      {!single && (!itemId || split) ? <LaneBar basePath={basePath} lanes={lanes} lane={lane} counts={counts} /> : null}

      {!itemId || split ? <SlaSummary items={items} total={counts?.[lane] ?? null} loading={query.isPending} /> : null}

      <div
        className={cn(split ? 'grid grid-cols-[minmax(18rem,24rem)_minmax(0,1fr)] items-start gap-6' : 'grid gap-4')}
      >
        {showList ? (
          <section
            aria-labelledby="ranger-lane-list"
            className={cn(split && 'sticky top-4 max-h-[calc(100dvh-6rem)] overflow-y-auto')}
          >
            <h2 id="ranger-lane-list" className="sr-only">
              {laneLabel(lane)}
            </h2>
            {query.isPending ? (
              <ListSkeleton />
            ) : query.isError ? (
              <PanelError error={query.error} onRetry={() => void query.refetch()} />
            ) : items.length === 0 ? (
              <EmptyState
                icon={<Icon icon={Binoculars} size={32} />}
                title={m.ranger_lane_empty_title()}
                description={laneEmpty(lane)}
              />
            ) : (
              <>
                <QueueList basePath={basePath} items={items} selectedId={itemId} />
                {query.hasNextPage ? (
                  <div className="mt-3 flex justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      loading={query.isFetchingNextPage}
                      onClick={() => void query.fetchNextPage()}
                    >
                      {m.ranger_load_more()}
                    </Button>
                  </div>
                ) : null}
              </>
            )}
          </section>
        ) : null}

        {showItem && itemId ? (
          <section aria-label={m.ranger_item_region()} className="min-w-0">
            <ItemView
              key={itemId}
              itemId={itemId}
              preview={selected}
              triage={phone}
              onDone={onDone}
              {...(split ? {} : { onBack: () => select(null) })}
            />
          </section>
        ) : split && items.length > 0 ? (
          <p className="text-sm text-fg-muted">{m.ranger_select_item()}</p>
        ) : null}
      </div>
    </div>
  );
}

function LaneBar({
  basePath,
  lanes,
  lane,
  counts,
}: {
  basePath: QueueScreenProps['basePath'];
  lanes: readonly Lane[];
  lane: Lane;
  counts: Partial<Record<Lane, number>> | null;
}) {
  return (
    <nav aria-label={m.ranger_lanes_label()}>
      <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
        {lanes.map((entry) => {
          const count = counts?.[entry];
          const current = entry === lane;
          return (
            <li key={entry} className="shrink-0">
              <Link
                to={basePath}
                search={{ lane: entry }}
                aria-current={current ? 'page' : undefined}
                title={laneHint(entry)}
                className={cn(
                  'inline-flex h-10 items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors',
                  current
                    ? 'border-primary bg-primary-soft text-fg'
                    : 'border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg',
                )}
              >
                {laneLabel(entry)}
                {count !== undefined ? (
                  <span
                    className={cn(
                      'rounded-full px-1.5 font-mono text-2xs tabular-nums',
                      count > 0 ? 'bg-signal-soft text-fg' : 'bg-fg/8 text-fg-muted',
                    )}
                  >
                    <span className="sr-only">{m.ranger_lane_count({ count })}</span>
                    <span aria-hidden="true">{count}</span>
                  </span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** SLA at a glance for the loaded part of the lane (PLAN §7.4 «Métricas visibles»). */
function SlaSummary({
  items,
  total,
  loading,
}: {
  items: readonly QueueItem[];
  total: number | null;
  loading: boolean;
}) {
  if (loading) return null;
  const overdue = items.filter((item) => item.waitingHours >= SLA_HOURS).length;
  const oldest = items.reduce((max, item) => Math.max(max, item.waitingHours), 0);
  const average = items.length > 0 ? items.reduce((sum, item) => sum + item.waitingHours, 0) / items.length : 0;
  const tiles = [
    { label: m.ranger_sla_waiting(), value: String(total ?? items.length), tone: '' },
    {
      label: m.ranger_sla_over({ hours: SLA_HOURS }),
      value: String(overdue),
      tone: overdue > 0 ? 'text-danger' : '',
    },
    { label: m.ranger_sla_oldest(), value: items.length > 0 ? waitingText(oldest) : '—', tone: '' },
    { label: m.ranger_sla_average(), value: items.length > 0 ? waitingText(average) : '—', tone: '' },
  ];
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {tiles.map((tile) => (
        <div key={tile.label} className="rounded-md border border-border bg-surface px-3 py-2">
          <dt className="text-xs text-fg-muted">{tile.label}</dt>
          <dd className={cn('font-display text-lg tabular-nums text-fg', tile.tone)}>{tile.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function QueueList({
  basePath,
  items,
  selectedId,
}: {
  basePath: QueueScreenProps['basePath'];
  items: readonly QueueItem[];
  selectedId: string | null;
}) {
  const selectedRef = useRef<HTMLAnchorElement | null>(null);
  // Keep the keyboard-selected row in view.
  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: 'nearest' });
  }, [selectedId]);
  return (
    <ul className="grid gap-2">
      {items.map((item) => {
        const current = item.id === selectedId;
        const flagged = item.flags.filter((flag) => flag.severity === 'error').length;
        return (
          <li key={item.id}>
            <Link
              ref={current ? selectedRef : undefined}
              to={basePath}
              search={(previous: Record<string, unknown>) => ({ ...previous, item: item.id })}
              aria-current={current ? 'true' : undefined}
              className={cn(
                'grid min-h-11 gap-1 rounded-md border p-3 transition-colors',
                current ? 'border-primary bg-primary-soft' : 'border-border bg-surface hover:border-border-strong',
              )}
            >
              <span className="flex items-start justify-between gap-2">
                <span className="min-w-0 font-medium break-words text-fg">{item.title}</span>
                <WaitingBadge hours={item.waitingHours} className="shrink-0" />
              </span>
              <span className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
                {item.author ? <UserChip user={item.author} size={20} link={false} /> : null}
                {item.risk !== 'low' ? <RiskBadge risk={item.risk} /> : null}
                {flagged > 0 ? (
                  <span className="inline-flex items-center gap-1 text-danger">
                    <Icon icon={ShieldAlert} size={12} />
                    {m.ranger_flags_count({ count: flagged })}
                  </span>
                ) : item.flags[0] ? (
                  <span className="truncate">{flagLabel(item.flags[0].code)}</span>
                ) : null}
                {item.assignee ? <span>{m.ranger_assigned_short({ name: item.assignee.displayName })}</span> : null}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ListSkeleton() {
  return (
    <SkeletonGroup label={m.ranger_loading()} className="grid gap-2">
      {Array.from({ length: 6 }, (_, index) => (
        <Skeleton key={index} className="h-16 w-full" />
      ))}
    </SkeletonGroup>
  );
}
