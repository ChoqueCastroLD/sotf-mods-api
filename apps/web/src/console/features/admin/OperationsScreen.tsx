/**
 * `/ranger/admin/operations` (PLAN §10.3 «Métricas operativas»): pg-boss queue depth and failures,
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
import { Icon } from '@sotf/ui/icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { OPERATIONS_REFRESH_MS, operationsQuery } from './api.ts';
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
                  {data.queues.map((queue) => (
                    <QueueRow key={queue.name} queue={queue} now={now} />
                  ))}
                </tbody>
              </table>
            </TableScroller>
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
        {queue.oldestQueuedAt ? ago(queue.oldestQueuedAt, now) : '—'}
      </td>
    </tr>
  );
}
