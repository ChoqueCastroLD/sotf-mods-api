/**
 * "Failed jobs" panel of `/moderation/admin/operations`: the jobs that ran out of retries and sit
 * in the dead-letter queue, grouped by the queue they came from. Retry sends a group back to its
 * queue with the same data; Discard (after a confirmation) removes it from the list. "Discard all"
 * clears every group. The same list is in the alert email (`#dead-letters` links here).
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient } from '@tanstack/react-query';
import { RotateCcw, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, adminKeys, type DeadLetterGroup } from './api.ts';
import { deadLetterTotal, retryBlock, retryOutcome } from './operations.ts';
import { formatCount, formatInstant, Panel, reportFailure, TableScroller, tdClasses, thClasses } from './shared.tsx';

export const DEAD_LETTERS_ANCHOR = 'dead-letters';

type Confirm = { kind: 'group'; group: DeadLetterGroup } | { kind: 'all' };

const labelOf = (group: DeadLetterGroup) => group.queue ?? m.admin_ops_dl_unknown();
const keyOf = (group: DeadLetterGroup) => group.queue ?? '\u0000unknown';

export function DeadLettersPanel({
  groups,
  ago,
}: {
  groups: readonly DeadLetterGroup[];
  /** Relative time of an ISO instant ("3 hours ago"). */
  ago: (iso: string) => string;
}) {
  const queryClient = useQueryClient();
  const [retrying, setRetrying] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<Confirm | null>(null);
  const total = deadLetterTotal(groups);

  const refresh = () => queryClient.invalidateQueries({ queryKey: adminKeys.operations });

  const retry = async (group: DeadLetterGroup) => {
    if (!group.queue) return;
    setRetrying(keyOf(group));
    try {
      const result = await adminApi.retryDeadLetters(group.queue);
      await refresh();
      const outcome = retryOutcome(result);
      if (outcome === 'none') notify.info(m.admin_ops_dl_retry_none());
      else if (outcome === 'partial') {
        notify.warning(
          m.admin_ops_dl_retry_partial({
            queue: group.queue,
            count: formatCount(result.handled),
            failed: formatCount(result.failed),
          }),
        );
      } else notify.success(m.admin_ops_dl_retry_done({ queue: group.queue, count: formatCount(result.handled) }));
    } catch (error) {
      reportFailure(error, m.admin_ops_dl_retry_failed());
    } finally {
      setRetrying(null);
    }
  };

  const discard = async (target: Confirm) => {
    try {
      const result = await adminApi.discardDeadLetters(
        target.kind === 'all'
          ? { scope: 'all' }
          : target.group.queue
            ? { scope: 'queue', queue: target.group.queue }
            : { scope: 'unknown' },
      );
      await refresh();
      notify.success(m.admin_ops_dl_discarded({ count: formatCount(result.handled) }));
    } catch (error) {
      reportFailure(error, m.admin_ops_dl_discard_failed());
      throw error;
    }
  };

  return (
    <div id={DEAD_LETTERS_ANCHOR} className="scroll-mt-24">
      <Panel
        title={m.admin_ops_dl_title()}
        description={m.admin_ops_dl_description()}
        actions={
          groups.length > 0 ? (
            <Button
              variant="danger"
              size="sm"
              icon={<Icon icon={Trash2} size={16} />}
              onClick={() => setConfirm({ kind: 'all' })}
            >
              {m.admin_ops_dl_discard_all()}
            </Button>
          ) : null
        }
      >
        {groups.length === 0 ? (
          <p className="text-sm text-fg-muted">{m.admin_ops_dl_empty()}</p>
        ) : (
          <TableScroller label={m.admin_ops_dl_title()}>
            <table className="w-full border-collapse text-sm tabular-nums">
              <caption className="sr-only">{m.admin_ops_dl_title()}</caption>
              <thead className="bg-sunken">
                <tr>
                  <th scope="col" className={thClasses}>
                    {m.admin_ops_dl_col_queue()}
                  </th>
                  <th scope="col" className={cn(thClasses, 'text-end')}>
                    {m.admin_ops_dl_col_jobs()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_ops_dl_col_error()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_ops_dl_col_last()}
                  </th>
                  <th scope="col" className={cn(thClasses, 'text-end')}>
                    {m.admin_ops_dl_col_actions()}
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => {
                  const block = retryBlock(group);
                  const name = labelOf(group);
                  return (
                    <tr key={keyOf(group)} className="border-t border-border">
                      <th scope="row" className={`${tdClasses} text-start align-top`}>
                        <span className={cn('text-xs font-medium', group.queue && 'font-mono')}>{name}</span>
                        {block ? (
                          <span className="mt-1 block max-w-xs text-xs font-normal text-fg-muted">
                            {block === 'unknown' ? m.admin_ops_dl_unknown_hint() : m.admin_ops_dl_gone_hint()}
                          </span>
                        ) : null}
                      </th>
                      <td className={`${tdClasses} text-end align-top font-semibold`}>{formatCount(group.count)}</td>
                      <td className={`${tdClasses} min-w-56 max-w-md align-top text-xs wrap-anywhere`}>
                        {group.lastError ?? <span className="text-fg-muted">{m.admin_ops_dl_no_error()}</span>}
                      </td>
                      <td className={`${tdClasses} whitespace-nowrap align-top`}>
                        <time dateTime={group.lastFailedAt} title={formatInstant(group.lastFailedAt)}>
                          {ago(group.lastFailedAt)}
                        </time>
                      </td>
                      <td className={`${tdClasses} align-top`}>
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            icon={<Icon icon={RotateCcw} size={16} />}
                            loading={retrying === keyOf(group)}
                            disabled={block !== null || (retrying !== null && retrying !== keyOf(group))}
                            aria-label={m.admin_ops_dl_retry_label({ queue: name })}
                            onClick={() => void retry(group)}
                          >
                            {m.admin_ops_dl_retry()}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            icon={<Icon icon={Trash2} size={16} />}
                            aria-label={m.admin_ops_dl_discard_label({ queue: name })}
                            onClick={() => setConfirm({ kind: 'group', group })}
                          >
                            {m.admin_ops_dl_discard()}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableScroller>
        )}
      </Panel>

      <ConfirmDialog
        open={confirm !== null}
        onOpenChange={(open) => {
          if (!open) setConfirm(null);
        }}
        title={
          confirm?.kind === 'group'
            ? m.admin_ops_dl_discard_title({ queue: labelOf(confirm.group) })
            : m.admin_ops_dl_discard_all_title()
        }
        description={
          confirm?.kind === 'group'
            ? m.admin_ops_dl_discard_text({ count: formatCount(confirm.group.count) })
            : m.admin_ops_dl_discard_all_text({ count: formatCount(total) })
        }
        confirmLabel={confirm?.kind === 'group' ? m.admin_ops_dl_discard() : m.admin_ops_dl_discard_all()}
        tone="danger"
        onConfirm={() => (confirm ? discard(confirm) : undefined)}
      />
    </div>
  );
}
