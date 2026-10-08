/**
 * `/moderation/admin/operations` (PLAN §10.3 «Métricas operativas»): pg-boss queue depth and failures,
 * jobs in the dead letter queue, downloads in the last hour and day, and the state of CDN purges
 * (`GET /api/v2/admin/ops`). Refreshes every minute while open. Rates of 404/410/5xx answers are
 * not stored; the screen points at the logs (docs/operations/monitoring.md).
 */
import { formatRelativeTime } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { StatTile } from '@sotf/ui/domain';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { useSuspenseQuery } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { PageNav, SortSelect } from '../ranger/controls.tsx';
import { OPERATIONS_REFRESH_MS, operationsQuery } from './api.ts';
import { DEAD_LETTERS_ANCHOR, DeadLettersPanel } from './DeadLettersPanel.tsx';
import { type OpsQueue, type QueueState, queueState, queueTotals, waitingMinutes } from './operations.ts';
import {
  AdminHeader,
  formatCount,
  formatInstant,
  locale,
  Panel,
  StatusDot,
  TableScroller,
  tdClasses,
  thClasses,
} from './shared.tsx';

const STATE_TONE: Record<QueueState, 'success' | 'warning' | 'danger'> = {
  ok: 'success',
  slow: 'warning',
  failing: 'danger',
};

function stateLabel(state: QueueState): string {
  return state === 'ok'
    ? m.admin_ops_state_ok()
    : state === 'slow'
      ? m.admin_ops_state_slow()
      : m.admin_ops_state_failing();
}

function ago(iso: string, now: number): string {
  try {
    return formatRelativeTime(locale(), iso, { now });
  } catch {
    return formatInstant(iso);
  }
}

export function OperationsScreen() {
  const { data, dataUpdatedAt, refetch, isFetching } = useSuspenseQuery({
    ...operationsQuery,
    refetchInterval: OPERATIONS_REFRESH_MS,
  });
  const now = dataUpdatedAt || Date.parse(data.generatedAt);
  const totals = queueTotals(data.queues);
  const [filter, setFilter] = useState('');
  const [stateFilter, setStateFilter] = useState<'all' | QueueState>('all');
  const [sort, setSort] = useState<'busiest' | 'name' | 'failed'>('busiest');
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const needle = filter.trim().toLowerCase();
  const matching = data.queues.filter(
    (queue) =>
      (!needle || queue.name.toLowerCase().includes(needle)) &&
      (stateFilter === 'all' || queueState(queue, now) === stateFilter),
  );
  const ordered =
    sort === 'busiest'
      ? matching
      : [...matching].sort((a, b) =>
          sort === 'name' ? a.name.localeCompare(b.name) : b.failed24h - a.failed24h || a.name.localeCompare(b.name),
        );
  const totalPages = Math.max(1, Math.ceil(ordered.length / size));
  const current = Math.min(page, totalPages);
  const visible = ordered.slice((current - 1) * size, current * size);

  // The alert email links to `#dead-letters`; the panel only exists once the data has loaded.
  useEffect(() => {
    if (window.location.hash === `#${DEAD_LETTERS_ANCHOR}`) {
      document.getElementById(DEAD_LETTERS_ANCHOR)?.scrollIntoView({ block: 'start' });
    }
  }, []);

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <AdminHeader
          title={m.admin_ops_title()}
          description={m.admin_ops_description()}
          actions={
            <>
              <span className="text-xs text-fg-muted" aria-live="polite">
                {m.admin_ops_updated({ time: formatInstant(data.generatedAt) })}
              </span>
              <Button
                variant="secondary"
                size="sm"
                loading={isFetching}
                icon={<Icon icon={RefreshCw} size={16} />}
                onClick={() => void refetch()}
              >
                {m.admin_ops_refresh()}
              </Button>
            </>
          }
        />

        {data.deadLetter > 0 ? (
          <Banner tone="danger" title={m.admin_ops_dead_letter_title()}>
            {m.admin_ops_dead_letter_text({ count: formatCount(data.deadLetter) })}
          </Banner>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatTile label={m.admin_ops_downloads_hour()} value={data.downloads.lastHour} format="count" />
          <StatTile label={m.admin_ops_downloads_day()} value={data.downloads.last24h} format="count" />
          <StatTile label={m.admin_ops_dead_letters()} value={data.deadLetter} format="count" />
          <StatTile
            label={m.admin_ops_purge()}
            value={data.purge.queued}
            display={data.purge.lastCompletedAt ? ago(data.purge.lastCompletedAt, now) : m.admin_ops_purge_never()}
          />
        </div>
        <p className="-mt-3 text-sm text-fg-muted">
          {m.admin_ops_purge_detail({
            queued: formatCount(data.purge.queued),
            failed: formatCount(data.purge.failed24h),
          })}
        </p>

        {data.deadLetters ? <DeadLettersPanel groups={data.deadLetters} ago={(iso) => ago(iso, now)} /> : null}

        <Panel
          title={m.admin_ops_queues_title()}
          description={m.admin_ops_queues_description({
            queued: formatCount(totals.queued),
            active: formatCount(totals.active),
            failed: formatCount(totals.failed24h),
          })}
        >
          {data.queues.length === 0 ? (
            <p className="text-sm text-fg-muted">{m.admin_ops_queues_empty()}</p>
          ) : (
            <>
              <div className="mb-3 flex flex-wrap items-end gap-2">
                <Field label={m.admin_ops_filter_queues()} className="w-full max-w-xs">
                  <Input
                    type="search"
                    value={filter}
                    onChange={(event) => {
                      setFilter(event.currentTarget.value);
                      setPage(1);
                    }}
                  />
                </Field>
                <Select<'all' | QueueState>
                  label={m.admin_ops_col_state()}
                  hideLabel
                  size="sm"
                  value={stateFilter}
                  onValueChange={(next) => {
                    if (!next) return;
                    setStateFilter(next);
                    setPage(1);
                  }}
                  options={[
                    { value: 'all', label: m.admin_ops_state_all() },
                    { value: 'failing', label: m.admin_ops_state_failing() },
                    { value: 'slow', label: m.admin_ops_state_slow() },
                    { value: 'ok', label: m.admin_ops_state_ok() },
                  ]}
                  className="w-full md:w-44"
                />
                <SortSelect
                  value={sort}
                  onChange={(value) => {
                    setSort(value);
                    setPage(1);
                  }}
                  options={[
                    { value: 'busiest', label: m.admin_ops_sort_busiest() },
                    { value: 'name', label: m.ranger_users_sort_name() },
                    { value: 'failed', label: m.admin_ops_sort_failed() },
                  ]}
                />
              </div>
              <TableScroller label={m.admin_ops_queues_title()}>
                <table className="w-full border-collapse text-sm tabular-nums">
                  <caption className="sr-only">{m.admin_ops_queues_title()}</caption>
                  <thead className="bg-sunken">
                    <tr>
                      <th scope="col" className={thClasses}>
                        {m.admin_ops_col_queue()}
                      </th>
                      <th scope="col" className={thClasses}>
                        {m.admin_ops_col_state()}
                      </th>
                      <th scope="col" className={cn(thClasses, 'text-end')}>
                        {m.admin_ops_col_queued()}
                      </th>
                      <th scope="col" className={cn(thClasses, 'text-end')}>
                        {m.admin_ops_col_active()}
                      </th>
                      <th scope="col" className={cn(thClasses, 'text-end')}>
                        {m.admin_ops_col_failed()}
                      </th>
                      <th scope="col" className={cn(thClasses, 'text-end')}>
                        {m.admin_ops_col_completed()}
                      </th>
                      <th scope="col" className={cn(thClasses, 'text-end')}>
                        {m.admin_ops_col_oldest()}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((queue) => (
                      <QueueRow key={queue.name} queue={queue} now={now} />
                    ))}
                  </tbody>
                </table>
              </TableScroller>
              {ordered.length === 0 ? (
                <p className="mt-3 text-sm text-fg-muted">{m.admin_no_matches()}</p>
              ) : (
                <PageNav
                  page={current}
                  totalPages={totalPages}
                  total={ordered.length}
                  pageSize={size}
                  onPage={setPage}
                  sizes={[10, 25, 50]}
                  onPageSize={(next) => {
                    setSize(next);
                    setPage(1);
                  }}
                />
              )}
            </>
          )}
        </Panel>

        <p className="text-sm text-fg-muted">{m.admin_ops_logs_note()}</p>
      </div>
    </DomainI18nBridge>
  );
}

function QueueRow({ queue, now }: { queue: OpsQueue; now: number }) {
  const state = queueState(queue, now);
  const waited = waitingMinutes(queue.oldestQueuedAt, now);
  return (
    <tr className="border-t border-border">
      <th scope="row" className={`${tdClasses} text-start font-mono text-xs font-medium`}>
        {queue.name}
      </th>
      <td className={cn(tdClasses, 'whitespace-nowrap')}>
        <StatusDot tone={STATE_TONE[state]}>{stateLabel(state)}</StatusDot>
      </td>
      <td className={`${tdClasses} text-end`}>{formatCount(queue.queued)}</td>
      <td className={`${tdClasses} text-end`}>{formatCount(queue.active)}</td>
      <td className={cn(tdClasses, 'text-end', queue.failed24h > 0 && 'font-semibold text-danger')}>
        {formatCount(queue.failed24h)}
      </td>
      <td className={`${tdClasses} text-end`}>{formatCount(queue.completed1h)}</td>
      <td
        className={cn(tdClasses, 'text-end whitespace-nowrap', state === 'slow' && waited !== null && 'text-warning')}
      >
        {queue.oldestQueuedAt ? ago(queue.oldestQueuedAt, now) : '-'}
      </td>
    </tr>
  );
}
