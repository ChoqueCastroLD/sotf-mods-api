/**
 * Signals bell of the console top bar on ≥ md (docs/backlog/WP-81.md): a panel with the 8 latest
 * signals, «Mark all as read» and «See all», like the public header bell (`islands/signals/Bell.tsx`)
 * but on the console's own data layer: the list lives under `['notifications', …]`, so the shell's
 * SSE `notification` event refetches it, and the unread count is the shell's (`/me`).
 *
 * Lazy chunk (the `signals` catalogue, `describe.ts`, the rows): `TopBar` shows the plain link to
 * `/signals` until it arrives and always on phones.
 */
import type { NotificationDTO } from '@sotf/contracts/notifications';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Popover } from '@sotf/ui/popover';
import { Skeleton } from '@sotf/ui/skeleton';
import { queryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Bell, BellRing, CheckCheck } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { st } from '../../islands/signals/i18n.ts';
import { SignalRow } from '../../islands/signals/SignalRow.tsx';
import { track } from '../../scripts/beacon.ts';
import { markRead, markReadInCache, signalsMessagesQuery } from '../features/signals/api.ts';
import { api } from '../lib/api.ts';
import { activeLocale } from '../lib/messages.ts';
import { setUnreadCount } from '../lib/stream.ts';

export const PANEL_LIMIT = 8;

/** Under `['notifications']` (refetched by the stream), outside `['notifications', 'list']`. */
export const recentSignalsKey = ['notifications', 'recent'] as const;

export const recentSignalsQuery = queryOptions({
  queryKey: recentSignalsKey,
  queryFn: async ({ signal }) =>
    (await api.notifications.list({ query: { filter: 'all', limit: PANEL_LIMIT } }, { signal })).items,
  staleTime: 30_000,
});

/** Stamps `readAt` on the panel's copy (`ids = 'all'` for every unread signal). */
export function markRecentRead(items: readonly NotificationDTO[], ids: readonly number[] | 'all', stamp: string) {
  const wanted = ids === 'all' ? null : new Set(ids);
  return items.map((item) =>
    item.readAt === null && (wanted === null || wanted.has(item.id)) ? { ...item, readAt: stamp } : item,
  );
}

const BUTTON =
  'relative flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

export interface SignalsBellProps {
  unread: number;
  label: string;
  /** Shown until the `signals` catalogue is ready (the plain link to `/signals`). */
  fallback: ReactNode;
}

export default function SignalsBell({ unread, label, fallback }: SignalsBellProps) {
  const locale = activeLocale();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const messages = useQuery(signalsMessagesQuery(locale));
  const recent = useQuery({ ...recentSignalsQuery, enabled: open && messages.isSuccess });
  const [now, setNow] = useState(() => Date.now());

  const patchRecent = (ids: readonly number[] | 'all') => {
    const stamp = new Date().toISOString();
    queryClient.setQueryData<NotificationDTO[]>(recentSignalsKey, (items) =>
      items ? markRecentRead(items, ids, stamp) : items,
    );
    markReadInCache(queryClient, ids);
  };

  const openSignal = (signal: NotificationDTO) => {
    track('notification_open', { props: { type: signal.type, source: 'bell' } });
    setOpen(false);
    if (signal.readAt !== null) return;
    patchRecent([signal.id]);
    setUnreadCount(queryClient, Math.max(0, unread - 1));
    markRead(queryClient, { ids: [signal.id] }).catch(() => {
      void queryClient.invalidateQueries({ queryKey: ['notifications'] });
    });
  };

  const markAll = async () => {
    const previous = unread;
    patchRecent('all');
    setUnreadCount(queryClient, 0);
    try {
      await markRead(queryClient, { all: true });
    } catch {
      setUnreadCount(queryClient, previous);
      void queryClient.invalidateQueries({ queryKey: ['notifications'] });
    }
  };

  if (!messages.isSuccess) return fallback;

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setNow(Date.now());
      }}
      align="end"
      className="w-[min(26rem,calc(100vw-1rem))] max-w-none gap-0 p-0"
      trigger={
        <button type="button" className={BUTTON} aria-label={label} title={label}>
          <Icon icon={unread > 0 ? BellRing : Bell} size={20} />
          {unread > 0 ? (
            <span
              data-unread-count={unread}
              aria-hidden="true"
              className="absolute end-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-fg tabular-nums"
            >
              {unread > 99 ? '99+' : unread}
            </span>
          ) : null}
        </button>
      }
    >
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold text-fg">{st('signals_panel_title')}</h2>
        <button
          type="button"
          onClick={() => void markAll()}
          disabled={unread === 0}
          className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs font-semibold text-link hover:bg-fg/8 disabled:cursor-not-allowed disabled:text-fg-subtle disabled:hover:bg-transparent"
        >
          <Icon icon={CheckCheck} size={14} />
          {st('signals_mark_all_read')}
        </button>
      </div>
      <div className="max-h-[min(28rem,70vh)] overflow-y-auto p-2" aria-busy={recent.isPending}>
        {recent.isError ? (
          <div role="alert" className="grid justify-items-center gap-2 px-4 py-6 text-center">
            <p className="text-sm text-fg">{st('signals_error_title')}</p>
            <button
              type="button"
              onClick={() => void recent.refetch()}
              className="inline-flex h-9 items-center rounded-md border border-border-strong px-3 text-sm font-semibold text-fg hover:bg-fg/8"
            >
              {st('signals_retry')}
            </button>
          </div>
        ) : recent.isPending ? (
          <div role="status" className="grid gap-2 p-1">
            <span className="sr-only">{st('signals_loading')}</span>
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="flex gap-3 p-1">
                <Skeleton className="size-8 rounded-full" />
                <div className="grid flex-1 gap-1.5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : recent.data.length === 0 ? (
          <div className="grid justify-items-center gap-1 px-4 py-8 text-center">
            <p className="font-display-caps text-lg text-fg">{st('signals_empty_title')}</p>
            <p className="text-sm text-fg-muted">{st('signals_empty_text')}</p>
          </div>
        ) : (
          <ul className="grid gap-0.5">
            {recent.data.map((signal) => (
              <li key={signal.id}>
                <SignalRow signal={signal} locale={locale} compact now={now} onOpen={openSignal} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t border-border p-2">
        <Link
          to={'/signals' as '/'}
          onClick={() => setOpen(false)}
          className={cn(
            'flex h-10 items-center justify-center rounded-md text-sm font-semibold text-link hover:bg-fg/8',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
          )}
        >
          {st('signals_see_all')}
        </Link>
      </div>
    </Popover>
  );
}
