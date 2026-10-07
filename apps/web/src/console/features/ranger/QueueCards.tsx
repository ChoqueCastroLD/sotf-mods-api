/**
 * Phone queue (`QueueScreen`): cards with the mod's thumbnail and a stripe in the SLA colour.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Binoculars, ChevronRight, ShieldAlert, Siren, UserCheck, UserMinus } from 'lucide-react';
import { useRef, useState } from 'react';
import { SwipeRow } from '../../components/SwipeRow.tsx';
import { useMe } from '../../hooks/use-me.ts';
import { problemCode } from '../../lib/errors.ts';
import { notify } from '../../lib/notify.ts';
import { type Lane, type QueueItem, rangerApi, refreshModeration, storeQueueItem } from './api.ts';
import { EscalateDialog } from './EscalateDialog.tsx';
import { RiskBadge, reportFailure, slaState, UserChip, WaitingBadge } from './shared.tsx';

/**
 * Phone queue: cards with the mod's thumbnail and a stripe in the SLA colour. Swipe toward the end
 * to take the item (or release it), toward the start to escalate; the same actions live in the
 * item view as buttons (and the card opens it on tap).
 */
export function QueueCards({
  basePath,
  items,
  lane,
}: {
  basePath: '/moderation' | '/moderation/comments';
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
