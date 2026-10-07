/**
 * `/moderation` and `/moderation/comments` — the moderation queue (research/03 §6.10, PLAN §7.4 «Colas»).
 *
 * - Lane bar with live counts (`moderation.queue` stream events refetch every `['moderation']`
 *   query) and the SLA at a glance: waiting in the lane, over 72 h, oldest and average wait, plus
 *   the review time of the last 30 days (`GET /ranger/metrics`).
 * - Filter bar (risk, minimum wait, assignee, escalated, author, title) and sort (oldest first by
 *   default, newest, riskiest), paged on the server. Page, sort and filters live in the URL.
 * - List + item view side by side from `lg`; on phones the list and the item are two steps
 *   (triage only). Rows have a checkbox for the bulk actions that are safe: take, release, mark a
 *   post-review version as reviewed, publish held comments.
 * - `j`/`k` move through the page (and across pages), `x` selects the open item; the item view
 *   adds `a`, `c` and `r`.
 *
 * The selected lane and item live in the URL (`?lane=versions&item=versions:version:640`), so a
 * moderator can share an item and Back works.
 */
import { formatPercent } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { useMediaQuery } from '@sotf/ui';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Checkbox } from '@sotf/ui/checkbox';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { toast } from '@sotf/ui/toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { CheckCheck, SearchX, ShieldAlert, Siren, UserCheck, UserMinus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { useShortcut } from '../../hooks/use-shortcuts.tsx';
import { useStreamStatus } from '../../hooks/use-stream.ts';
import { activeLocale } from '../../lib/messages.ts';
import {
  type Lane,
  laneQuery,
  metricsQuery,
  QUEUE_PAGE_SIZE,
  type QueueItem,
  type QueuePage,
  type ReviewMetrics,
  rangerApi,
  refreshModeration,
  SLA_HOURS,
} from './api.ts';
import { FilterBar, FilterSelect, PageNav, SearchField, SortSelect, useListSearch } from './controls.tsx';
import { ItemView } from './ItemView.tsx';
import { flagLabel, laneEmpty, laneHint, laneLabel } from './labels.ts';
import { QueueCards } from './QueueCards.tsx';
import { QUEUE_AGES, QUEUE_ASSIGNEES, QUEUE_RISKS, QUEUE_SORTS, type QueueView, queueFilterCount } from './search.ts';
import {
  number,
  PanelError,
  RiskBadge,
  reportFailure,
  ScreenHeader,
  UserChip,
  WaitingBadge,
  waitingText,
} from './shared.tsx';

/** `lg` and up: list and item side by side. Below `md`: triage (phones). */
const SPLIT_QUERY = '(min-width: 64rem)';
const PHONE_QUERY = '(max-width: 47.99rem)';

export interface QueueScreenProps {
  /** Route of the screen (`/moderation` or `/moderation/comments`). */
  basePath: '/moderation' | '/moderation/comments';
  lanes: readonly Lane[];
  lane: Lane;
  itemId: string | null;
  view: QueueView;
}

export function QueueScreen({ basePath, lanes, lane, itemId, view }: QueueScreenProps) {
  const navigate = useNavigate();
  const patch = useListSearch(basePath);
  const split = useMediaQuery(SPLIT_QUERY);
  const phone = useMediaQuery(PHONE_QUERY);
  const stream = useStreamStatus();
  const query = useQuery(laneQuery(lane, view));
  const page: QueuePage | undefined = query.data;
  const items = useMemo(() => page?.items ?? [], [page]);
  const counts = page?.counts ?? null;
  const selectedIndex = itemId ? items.findIndex((item) => item.id === itemId) : -1;
  const selected = selectedIndex >= 0 ? (items[selectedIndex] ?? null) : null;
  const single = lanes.length === 1;
  const title = single ? laneLabel(lane) : m.ranger_queue_title();
  const filters = queueFilterCount(view);
  const currentPage = view.page ?? 1;
  const totalPages = page?.totalPages ?? 0;
  useDocumentTitle(selected ? m.ranger_item_document_title({ title: selected.title }) : title);

  // Bulk selection (desktop rows). Ids that left the page drop out by themselves.
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());
  const selection = useMemo(() => items.filter((item) => checked.has(item.id)), [items, checked]);
  useEffect(
    () => setChecked(new Set()),
    [lane, view.page, view.sort, view.risk, view.age, view.assignee, view.escalated, view.author, view.q],
  );
  const toggleChecked = (id: string, on?: boolean) =>
    setChecked((previous) => {
      const next = new Set(previous);
      if (on ?? !next.has(id)) next.add(id);
      else next.delete(id);
      return next;
    });

  const select = (next: string | null, replace = false) =>
    void navigate({
      to: basePath,
      search: (previous: Record<string, unknown>) => ({ ...previous, item: next ?? undefined }),
      replace,
    });

  const goToPage = (next: number) => patch({ page: next > 1 ? next : undefined, item: undefined });
  const change = (next: Record<string, unknown>) => patch({ ...next, item: undefined });
  const clearFilters = () =>
    change({
      risk: undefined,
      age: undefined,
      assignee: undefined,
      escalated: undefined,
      author: undefined,
      q: undefined,
    });

  // Desktop: open the first item of the page when nothing is selected.
  useEffect(() => {
    if (!split || itemId || items.length === 0 || query.isPlaceholderData) return;
    const first = items[0];
    if (first) select(first.id, true);
  }, [split, itemId, items, query.isPlaceholderData]);

  const move = (step: 1 | -1) => {
    if (items.length === 0) return;
    const base = selectedIndex < 0 ? (step === 1 ? -1 : items.length) : selectedIndex;
    const target = base + step;
    if (target >= items.length && currentPage < totalPages) return goToPage(currentPage + 1);
    if (target < 0 && currentPage > 1) return goToPage(currentPage - 1);
    const next = items[Math.min(items.length - 1, Math.max(0, target))];
    if (next) select(next.id, true);
  };
  useShortcut('j', () => move(1), { description: () => m.ranger_shortcut_next() });
  useShortcut('k', () => move(-1), { description: () => m.ranger_shortcut_previous() });
  useShortcut('x', () => itemId && split && toggleChecked(itemId), {
    description: () => m.ranger_shortcut_select(),
    enabled: split && itemId !== null,
  });

  /** After a decision: the item after the decided one (or before, at the end of the page). */
  const onDone = (doneId: string) => {
    const index = items.findIndex((item) => item.id === doneId);
    const rest = items.filter((item) => item.id !== doneId);
    const next = index < 0 ? null : (rest[index] ?? rest[index - 1] ?? null);
    select(split || !phone ? (next?.id ?? null) : null, true);
  };

  const showList = split || !itemId;
  const showItem = Boolean(itemId);
  const fetching = query.isFetching && query.isPlaceholderData;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-5">
      {!itemId || split ? (
        <ScreenHeader
          title={title}
          description={single ? laneHint(lane) : m.ranger_queue_description()}
          actions={
            stream === 'open' ? undefined : (
              <span className="inline-flex items-center gap-2 text-xs text-fg-muted">{m.ranger_live_off()}</span>
            )
          }
        />
      ) : null}

      {!single && (!itemId || split) ? <LaneBar basePath={basePath} lanes={lanes} lane={lane} counts={counts} /> : null}

      {!itemId || split ? <SlaSummary page={page} loading={query.isPending} /> : null}

      {!itemId || split ? (
        <FilterBar
          search={
            <SearchField
              label={m.ranger_queue_search()}
              placeholder={m.ranger_queue_search()}
              value={view.q ?? ''}
              onCommit={(value) => change({ q: value || undefined })}
            />
          }
          sort={
            <SortSelect
              value={view.sort ?? 'oldest'}
              onChange={(value) => change({ sort: value === 'oldest' ? undefined : value })}
              options={QUEUE_SORTS.map((value) => ({ value, label: sortLabel(value) }))}
            />
          }
          activeCount={filters}
          onClear={clearFilters}
        >
          <FilterSelect
            label={m.ranger_filter_risk()}
            allLabel={m.ranger_filter_risk_all()}
            value={view.risk}
            onChange={(value) => change({ risk: value })}
            options={QUEUE_RISKS.map((value) => ({ value, label: riskLabel(value) }))}
          />
          <FilterSelect
            label={m.ranger_filter_age()}
            allLabel={m.ranger_filter_age_all()}
            value={view.age}
            onChange={(value) => change({ age: value })}
            options={QUEUE_AGES.map((value) => ({ value, label: ageLabel(value) }))}
          />
          {lane === 'comments' ? null : (
            <FilterSelect
              label={m.ranger_filter_assignee()}
              allLabel={m.ranger_filter_assignee_all()}
              value={view.assignee}
              onChange={(value) => change({ assignee: value })}
              options={QUEUE_ASSIGNEES.map((value) => ({ value, label: assigneeLabel(value) }))}
            />
          )}
          {lane === 'comments' ? null : (
            <FilterSelect
              label={m.ranger_filter_escalated()}
              allLabel={m.ranger_filter_escalated_all()}
              value={view.escalated ? 'only' : undefined}
              onChange={(value) => change({ escalated: value ? true : undefined })}
              options={[{ value: 'only', label: m.ranger_filter_escalated_only() }]}
            />
          )}
          <SearchField
            label={m.ranger_filter_author()}
            placeholder={m.ranger_filter_author()}
            value={view.author ?? ''}
            maxLength={64}
            onCommit={(value) => change({ author: value || undefined })}
            className="w-full md:w-40"
          />
        </FilterBar>
      ) : null}

      <div
        className={cn(split ? 'grid grid-cols-[minmax(18rem,26rem)_minmax(0,1fr)] items-start gap-6' : 'grid gap-4')}
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
              filters > 0 ? (
                <EmptyState
                  icon={<Icon icon={SearchX} size={32} />}
                  title={m.ranger_queue_filtered_empty_title()}
                  description={m.ranger_queue_filtered_empty_text()}
                  action={
                    <Button variant="secondary" onClick={clearFilters}>
                      {m.ranger_filters_clear()}
                    </Button>
                  }
                />
              ) : (
                <EmptyState
                  icon={<Icon icon={CheckCheck} size={32} />}
                  title={m.ranger_lane_empty_title()}
                  description={laneEmpty(lane)}
                />
              )
            ) : (
              <div className={cn('grid gap-3 transition-opacity duration-(--dur-fast)', fetching && 'opacity-60')}>
                {phone ? null : (
                  <BulkBar
                    lane={lane}
                    items={items}
                    selection={selection}
                    onSelectAll={(on) => setChecked(on ? new Set(items.map((item) => item.id)) : new Set())}
                    onClear={() => setChecked(new Set())}
                  />
                )}
                {phone ? (
                  <QueueCards basePath={basePath} items={items} lane={lane} />
                ) : (
                  <QueueList
                    basePath={basePath}
                    items={items}
                    selectedId={itemId}
                    checked={checked}
                    onCheck={toggleChecked}
                  />
                )}
                <PageNav
                  page={currentPage}
                  totalPages={totalPages}
                  total={page?.total ?? 0}
                  pageSize={QUEUE_PAGE_SIZE}
                  onPage={goToPage}
                  compact={split}
                />
              </div>
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

function sortLabel(sort: (typeof QUEUE_SORTS)[number]): string {
  return sort === 'oldest' ? m.ranger_sort_oldest() : sort === 'newest' ? m.ranger_sort_newest() : m.ranger_sort_risk();
}

function riskLabel(risk: (typeof QUEUE_RISKS)[number]): string {
  return risk === 'high' ? m.ranger_risk_high() : risk === 'medium' ? m.ranger_risk_medium() : m.ranger_risk_low();
}

function ageLabel(age: (typeof QUEUE_AGES)[number]): string {
  return age === '24h'
    ? m.ranger_filter_age_24h()
    : age === '72h'
      ? m.ranger_filter_age_72h()
      : m.ranger_filter_age_7d();
}

function assigneeLabel(assignee: (typeof QUEUE_ASSIGNEES)[number]): string {
  return assignee === 'me'
    ? m.ranger_filter_assignee_me()
    : assignee === 'none'
      ? m.ranger_filter_assignee_none()
      : m.ranger_filter_assignee_others();
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
      <ul className="relative flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
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
                      'rounded-full px-1.5 text-2xs tabular-nums',
                      count > 0 ? 'bg-primary/15 text-fg' : 'bg-fg/8 text-fg-muted',
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

/** SLA at a glance for the whole lane (waiting, over the SLA, oldest, average) and the review time. */
function SlaSummary({ page, loading }: { page: QueuePage | undefined; loading: boolean }) {
  const metrics = useQuery(metricsQuery());
  if (loading || !page) return null;
  const waiting = page.counts[page.lane] ?? page.total;
  const { overSla, oldestHours, averageHours } = page.stats;
  const tiles: Array<{ label: string; value: string; tone: string }> = [
    { label: m.ranger_sla_waiting(), value: number(waiting), tone: '' },
    {
      label: m.ranger_sla_over({ hours: SLA_HOURS }),
      value: number(overSla),
      tone: overSla > 0 ? 'text-danger' : '',
    },
    { label: m.ranger_sla_oldest(), value: waiting > 0 ? waitingText(oldestHours) : '-', tone: '' },
    { label: m.ranger_sla_average(), value: waiting > 0 ? waitingText(averageHours) : '-', tone: '' },
  ];
  const review = metrics.data ? metricTiles(metrics.data) : [];
  return (
    <div className="grid gap-2">
      <dl className="flex flex-wrap gap-x-8 gap-y-2 border-y border-border py-3">
        {[...tiles, ...review].map((tile, index) => (
          <div key={tile.label} className={cn('grid min-w-24 gap-0.5', index >= tiles.length && 'max-md:hidden')}>
            <dt className="text-xs text-fg-muted">{tile.label}</dt>
            <dd className={cn('text-lg font-semibold tabular-nums text-fg', tile.tone)}>{tile.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Review time from submission to decision over the metrics window (all review lanes). */
export function metricTiles(metrics: ReviewMetrics): Array<{ label: string; value: string; tone: string }> {
  const { overall } = metrics;
  const within = overall.reviewed > 0 ? overall.withinSla / overall.reviewed : null;
  return [
    {
      label: m.ranger_metrics_mean({ days: metrics.windowDays }),
      value: overall.meanHours === null ? '-' : waitingText(overall.meanHours),
      tone: '',
    },
    {
      label: m.ranger_metrics_median({ days: metrics.windowDays }),
      value: overall.medianHours === null ? '-' : waitingText(overall.medianHours),
      tone: '',
    },
    {
      label: m.ranger_metrics_within_sla({ hours: metrics.slaHours }),
      value: within === null ? '-' : formatPercent(activeLocale(), within),
      tone: within !== null && within < 0.9 ? 'text-warning' : '',
    },
    {
      label: m.ranger_metrics_open_over_sla({ hours: metrics.slaHours }),
      value: number(metrics.openOverSla),
      tone: metrics.openOverSla > 0 ? 'text-danger' : '',
    },
  ];
}

// -----------------------------------------------------------------------------------------------
// Bulk actions
// -----------------------------------------------------------------------------------------------

type BulkKind = 'take' | 'release' | 'review' | 'publish';

/** Runs `work` for every item, three at a time, with one progress toast that becomes the result. */
async function runBulk(
  items: readonly QueueItem[],
  title: (done: number) => string,
  work: (item: QueueItem) => Promise<unknown>,
): Promise<{ done: number; failed: number }> {
  const id = toast.loading(title(0));
  let done = 0;
  let failed = 0;
  let cursor = 0;
  const worker = async () => {
    while (cursor < items.length) {
      const item = items[cursor++];
      if (!item) return;
      try {
        await work(item);
        done += 1;
      } catch {
        failed += 1;
      }
      toast.loading(title(done + failed), { id });
    }
  };
  await Promise.all(Array.from({ length: Math.min(3, items.length) }, () => worker()));
  toast.dismiss(id);
  return { done, failed };
}

function BulkBar({
  lane,
  items,
  selection,
  onSelectAll,
  onClear,
}: {
  lane: Lane;
  items: readonly QueueItem[];
  selection: readonly QueueItem[];
  onSelectAll: (on: boolean) => void;
  onClear: () => void;
}) {
  const queryClient = useQueryClient();
  const me = useMe();
  const [busy, setBusy] = useState<BulkKind | null>(null);
  const [confirming, setConfirming] = useState<BulkKind | null>(null);
  const count = selection.length;
  const mine = selection.filter((item) => item.assignee?.id === me.user.id);
  const takeable = selection.filter((item) => item.assignee?.id !== me.user.id);
  const canReview = lane === 'post_review';
  const canPublish = lane === 'comments';

  const run = async (kind: BulkKind) => {
    const target = kind === 'release' ? mine : kind === 'take' ? takeable : selection;
    if (target.length === 0 || busy) return;
    setBusy(kind);
    try {
      const result = await runBulk(
        target,
        (progress) => m.ranger_bulk_progress({ done: progress, total: target.length }),
        (item) => {
          switch (kind) {
            case 'take':
              return rangerApi.assign(item.id, true);
            case 'release':
              return rangerApi.assign(item.id, false);
            case 'review':
              return rangerApi.decideVersion(item.targetId, { action: 'approve' });
            case 'publish':
              return rangerApi.unhideComment(item.targetId);
          }
        },
      );
      await refreshModeration(queryClient);
      const message =
        kind === 'take'
          ? m.ranger_bulk_taken({ count: result.done })
          : kind === 'release'
            ? m.ranger_bulk_released({ count: result.done })
            : kind === 'review'
              ? m.ranger_bulk_reviewed({ count: result.done })
              : m.ranger_bulk_published({ count: result.done });
      if (result.failed === 0) toast.success(message);
      else if (result.done === 0) reportFailure(null, m.ranger_bulk_failed());
      else toast.warning(message, { description: m.ranger_bulk_partial({ failed: result.failed }) });
      onClear();
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="flex min-h-9 flex-wrap items-center gap-x-3 gap-y-1">
      <Checkbox
        label={
          count > 0 ? (
            <span className="tabular-nums">{m.ranger_bulk_selected({ count })}</span>
          ) : (
            <span className="text-fg-muted">{m.ranger_bulk_select_all()}</span>
          )
        }
        checked={count > 0 && count === items.length}
        indeterminate={count > 0 && count < items.length}
        onCheckedChange={(on) => onSelectAll(on)}
      />
      {count > 0 ? (
        <div className="flex flex-wrap items-center gap-2">
          {takeable.length > 0 ? (
            <Button
              size="sm"
              variant="secondary"
              loading={busy === 'take'}
              disabled={busy !== null}
              icon={<Icon icon={UserCheck} size={16} />}
              onClick={() => void run('take')}
            >
              {m.ranger_bulk_take()}
            </Button>
          ) : null}
          {mine.length > 0 ? (
            <Button
              size="sm"
              variant="secondary"
              loading={busy === 'release'}
              disabled={busy !== null}
              icon={<Icon icon={UserMinus} size={16} />}
              onClick={() => void run('release')}
            >
              {m.ranger_bulk_release()}
            </Button>
          ) : null}
          {canReview ? (
            <Button
              size="sm"
              loading={busy === 'review'}
              disabled={busy !== null}
              onClick={() => setConfirming('review')}
            >
              {m.ranger_bulk_review()}
            </Button>
          ) : null}
          {canPublish ? (
            <Button
              size="sm"
              loading={busy === 'publish'}
              disabled={busy !== null}
              onClick={() => setConfirming('publish')}
            >
              {m.ranger_bulk_publish()}
            </Button>
          ) : null}
          <Button size="sm" variant="ghost" disabled={busy !== null} onClick={onClear}>
            {m.ranger_bulk_clear()}
          </Button>
        </div>
      ) : null}
      <ConfirmDialog
        open={confirming !== null}
        onOpenChange={(open) => {
          if (!open) setConfirming(null);
        }}
        title={
          confirming === 'publish' ? m.ranger_bulk_publish_title({ count }) : m.ranger_bulk_review_title({ count })
        }
        description={confirming === 'publish' ? m.ranger_bulk_publish_text() : m.ranger_bulk_review_text()}
        confirmLabel={confirming === 'publish' ? m.ranger_bulk_publish() : m.ranger_bulk_review()}
        onConfirm={async () => {
          const kind = confirming;
          setConfirming(null);
          if (kind) await run(kind);
        }}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------------------------
// List
// -----------------------------------------------------------------------------------------------

function QueueList({
  basePath,
  items,
  selectedId,
  checked,
  onCheck,
}: {
  basePath: QueueScreenProps['basePath'];
  items: readonly QueueItem[];
  selectedId: string | null;
  checked: ReadonlySet<string>;
  onCheck: (id: string, on: boolean) => void;
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
          <li key={item.id} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-2">
            <div className="pt-3 ps-1">
              <Checkbox
                label={<span className="sr-only">{m.ranger_bulk_select_row({ title: item.title })}</span>}
                checked={checked.has(item.id)}
                onCheckedChange={(on) => onCheck(item.id, on)}
              />
            </div>
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
