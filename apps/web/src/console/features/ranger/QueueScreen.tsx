/**
 * `/ranger` and `/ranger/comments` — the moderation queue (research/03 §6.10, PLAN §7.4 «Colas»).
 *
 * - Lane bar with live counts (`moderation.queue` stream events refetch every `['moderation']`
 *   query) and the SLA at a glance: waiting in the lane, over 72 h, oldest and average wait, plus
 *   the review time of the last 30 days (`GET /ranger/metrics`: mean, median, share decided
 *   within the SLA, review lanes over the SLA).
 * - List (oldest and riskiest first) + item view side by side from `lg`; on phones the list and
 *   the item are two steps (triage only).
 * - `j`/`k` move through the lane; the item view adds `a`, `c` and `r`.
 *
 * The selected lane and item live in the URL (`?lane=versions&item=versions:version:640`), so a
 * ranger can share an item and Back works.
 */
import { formatPercent } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { useMediaQuery } from '@sotf/ui';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { LiveDot } from '@sotf/ui/live-dot';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Binoculars, ChevronRight, ShieldAlert, Siren, UserCheck, UserMinus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArtState } from '../../components/ArtState.tsx';
import { SwipeRow } from '../../components/SwipeRow.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { useShortcut } from '../../hooks/use-shortcuts.tsx';
import { useStreamStatus } from '../../hooks/use-stream.ts';
import { problemCode } from '../../lib/errors.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import {
  type Lane,
  laneQuery,
  metricsQuery,
  type QueueItem,
  type ReviewMetrics,
  rangerApi,
  refreshModeration,
  SLA_HOURS,
  storeQueueItem,
} from './api.ts';
import { EscalateDialog } from './EscalateDialog.tsx';
import { ItemView } from './ItemView.tsx';
import { flagLabel, laneEmpty, laneHint, laneLabel } from './labels.ts';
import {
  number,
  PanelError,
  RiskBadge,
  reportFailure,
  ScreenHeader,
  slaState,
  UserChip,
  WaitingBadge,
  waitingText,
} from './shared.tsx';

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
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
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
              <ArtState art="cabin" title={m.ranger_lane_empty_title()} description={laneEmpty(lane)} />
            ) : (
              <>
                {phone ? (
                  <QueueCards basePath={basePath} items={items} lane={lane} />
                ) : (
                  <QueueList basePath={basePath} items={items} selectedId={itemId} />
                )}
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
  const metrics = useQuery(metricsQuery());
  if (loading) return null;
  const overdue = items.filter((item) => item.waitingHours >= SLA_HOURS).length;
  const oldest = items.reduce((max, item) => Math.max(max, item.waitingHours), 0);
  const average = items.length > 0 ? items.reduce((sum, item) => sum + item.waitingHours, 0) / items.length : 0;
  const tiles: Array<{ label: string; value: string; tone: string }> = [
    { label: m.ranger_sla_waiting(), value: String(total ?? items.length), tone: '' },
    {
      label: m.ranger_sla_over({ hours: SLA_HOURS }),
      value: String(overdue),
      tone: overdue > 0 ? 'text-danger' : '',
    },
    { label: m.ranger_sla_oldest(), value: items.length > 0 ? waitingText(oldest) : '—', tone: '' },
    { label: m.ranger_sla_average(), value: items.length > 0 ? waitingText(average) : '—', tone: '' },
  ];
  if (metrics.data) tiles.push(...metricTiles(metrics.data));
  return (
    <dl className="-mx-4 flex snap-x scroll-px-4 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="min-w-32 shrink-0 snap-start rounded-lg border border-border bg-surface px-3 py-2 md:min-w-0 md:shrink md:rounded-md"
        >
          <dt className="text-xs text-fg-muted">{tile.label}</dt>
          <dd className={cn('font-display text-lg tabular-nums text-fg', tile.tone)}>{tile.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Review time from submission to decision over the metrics window (all review lanes). */
export function metricTiles(metrics: ReviewMetrics): Array<{ label: string; value: string; tone: string }> {
  const { overall } = metrics;
  const within = overall.reviewed > 0 ? overall.withinSla / overall.reviewed : null;
  return [
    {
      label: m.ranger_metrics_mean({ days: metrics.windowDays }),
      value: overall.meanHours === null ? '—' : waitingText(overall.meanHours),
      tone: '',
    },
    {
      label: m.ranger_metrics_median({ days: metrics.windowDays }),
      value: overall.medianHours === null ? '—' : waitingText(overall.medianHours),
      tone: '',
    },
    {
      label: m.ranger_metrics_within_sla({ hours: metrics.slaHours }),
      value: within === null ? '—' : formatPercent(activeLocale(), within),
      tone: within !== null && within < 0.9 ? 'text-warning' : '',
    },
    {
      label: m.ranger_metrics_open_over_sla({ hours: metrics.slaHours }),
      value: number(metrics.openOverSla),
      tone: metrics.openOverSla > 0 ? 'text-danger' : '',
    },
  ];
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
                {item.escalation ? (
                  <Badge variant="danger" size="sm" icon={<Icon icon={Siren} size={12} />}>
                    {m.ranger_escalated()}
                  </Badge>
                ) : null}
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

/**
 * Phone queue: cards with the mod's thumbnail and a stripe in the SLA colour. Swipe toward the end
 * to take the item (or release it), toward the start to escalate; the same actions live in the
 * item view as buttons (and the card opens it on tap).
 */
function QueueCards({
  basePath,
  items,
  lane,
}: {
  basePath: QueueScreenProps['basePath'];
  items: readonly QueueItem[];
  lane: Lane;
}) {
  const queryClient = useQueryClient();
  const me = useMe();
  const [escalating, setEscalating] = useState<QueueItem | null>(null);
  const busy = useRef(false);

  const toggleAssign = async (item: QueueItem) => {
    if (busy.current) return;
    busy.current = true;
    const mine = item.assignee?.id === me.user.id;
    try {
      storeQueueItem(queryClient, await rangerApi.assign(item.id, !mine));
      notify.success(mine ? m.ranger_assign_released() : m.ranger_assign_done());
    } catch (error) {
      if (problemCode(error) === 'CONFLICT') {
        notify.error(m.ranger_assign_conflict());
        void refreshModeration(queryClient);
      } else {
        reportFailure(error, m.ranger_assign_failed());
      }
    } finally {
      busy.current = false;
    }
  };

  const escalate = async (note: string) => {
    if (!escalating) return;
    try {
      storeQueueItem(queryClient, await rangerApi.escalate(escalating.id, true, note));
      notify.success(m.ranger_escalate_done());
    } catch (error) {
      reportFailure(error, m.ranger_escalate_failed());
      throw error;
    }
  };

  return (
    <>
      <ul className="grid gap-3">
        {items.map((item, index) => {
          const flagged = item.flags.filter((flag) => flag.severity === 'error').length;
          const mine = item.assignee?.id === me.user.id;
          const sla = slaState(item.waitingHours);
          return (
            <li key={item.id} className="overflow-hidden rounded-xl border border-border bg-surface">
              <SwipeRow
                peekKey={index === 0 ? `ranger-queue-${lane}` : undefined}
                start={{
                  label: mine ? m.ranger_assign_release() : m.ranger_assign_me(),
                  icon: <UserCheck size={20} aria-hidden="true" />,
                  tone: 'signal',
                  onTrigger: () => void toggleAssign(item),
                }}
                end={
                  item.escalation
                    ? undefined
                    : {
                        label: m.ranger_escalate(),
                        icon: <Siren size={20} aria-hidden="true" />,
                        tone: 'danger',
                        onTrigger: () => setEscalating(item),
                      }
                }
              >
                <Link
                  to={basePath}
                  search={(previous: Record<string, unknown>) => ({ ...previous, item: item.id })}
                  className="relative flex min-h-20 items-center gap-3 py-3 ps-4 pe-3 active:bg-fg/5"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-y-0 start-0 w-1',
                      sla === 'overdue'
                        ? 'bg-danger'
                        : sla === 'due'
                          ? 'bg-warning'
                          : item.escalation
                            ? 'bg-danger'
                            : 'bg-signal/50',
                    )}
                  />
                  {item.mod?.thumbnailUrl ? (
                    <img
                      src={item.mod.thumbnailUrl}
                      alt=""
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      className="size-14 shrink-0 rounded-lg bg-raised object-cover"
                    />
                  ) : (
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-raised text-fg-subtle">
                      <Icon icon={Binoculars} size={22} />
                    </span>
                  )}
                  <span className="grid min-w-0 flex-1 gap-1">
                    <span className="line-clamp-2 leading-snug font-semibold break-words text-fg">{item.title}</span>
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-fg-muted">
                      <WaitingBadge hours={item.waitingHours} />
                      {item.author ? <UserChip user={item.author} size={20} link={false} /> : null}
                    </span>
                    {item.escalation || item.risk !== 'low' || flagged > 0 || item.assignee ? (
                      <span className="flex flex-wrap items-center gap-1.5 text-xs">
                        {item.escalation ? (
                          <Badge variant="danger" size="sm" icon={<Icon icon={Siren} size={12} />}>
                            {m.ranger_escalated()}
                          </Badge>
                        ) : null}
                        {item.risk !== 'low' ? <RiskBadge risk={item.risk} /> : null}
                        {flagged > 0 ? (
                          <span className="inline-flex items-center gap-1 text-danger">
                            <Icon icon={ShieldAlert} size={12} />
                            {m.ranger_flags_count({ count: flagged })}
                          </span>
                        ) : null}
                        {item.assignee ? (
                          <Badge
                            variant={mine ? 'signal' : 'neutral'}
                            size="sm"
                            icon={<Icon icon={mine ? UserCheck : UserMinus} size={12} />}
                          >
                            {mine
                              ? m.ranger_assign_done()
                              : m.ranger_assigned_short({ name: item.assignee.displayName })}
                          </Badge>
                        ) : null}
                      </span>
                    ) : null}
                  </span>
                  <Icon icon={ChevronRight} size={18} className="shrink-0 text-fg-subtle rtl:rotate-180" />
                </Link>
              </SwipeRow>
            </li>
          );
        })}
      </ul>
      <EscalateDialog
        open={escalating !== null}
        onOpenChange={(open) => {
          if (!open) setEscalating(null);
        }}
        subject={escalating?.title ?? ''}
        onSubmit={escalate}
      />
    </>
  );
}
