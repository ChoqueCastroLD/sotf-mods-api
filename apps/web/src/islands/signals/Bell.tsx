/**
 * Signals bell of the public header (PLAN §7.3, research/03 §6.12; WP-81). Signed-in users only:
 * `mount.ts` renders it from the `sotf:account` summary, so guests never download React for it.
 *
 * - The unread badge stays live over SSE (`GET /api/v2/stream`, the console's `StreamClient`),
 *   with the 60 s unread-count polling fallback when the stream is refused for good.
 * - ≥ md: the bell opens a panel with the 8 most recent signals, «Mark all as read» and «See all».
 *   On phones it is a plain link to the full `/signals` page.
 * - Following a signal marks it read (keep-alive request) and records `notification_open`.
 * - The stream closes on `pagehide` (bfcache) and reopens on `pageshow`.
 */
import type { NotificationDTO } from '@sotf/contracts/notifications';
import type { Locale } from '@sotf/i18n';
import { localizePath } from '@sotf/i18n';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Popover } from '@sotf/ui/popover';
import { Skeleton } from '@sotf/ui/skeleton';
import { Bell as BellIcon, BellRing, CheckCheck } from 'lucide-react';
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { StreamClient, type StreamStatus } from '../../console/lib/stream.ts';
import { track } from '../../scripts/beacon.ts';
import { fetchRecentSignals, fetchUnreadCount, markSignalsRead } from './client.ts';
import { ensureBadgeNames, needsBadgeNames, st } from './i18n.ts';
import { SignalRow } from './SignalRow.tsx';

export const PANEL_LIMIT = 8;
const STREAM_URL = '/api/v2/stream';
const FALLBACK_POLL_MS = 60_000;
/** Same breakpoint as `BELOW_MD_QUERY` of `@sotf/ui`. */
const PHONE_QUERY = '(max-width: 47.99rem)';

function subscribePhone(onChange: () => void): () => void {
  const query = window.matchMedia(PHONE_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function usePhone(): boolean {
  return useSyncExternalStore(
    subscribePhone,
    () => window.matchMedia(PHONE_QUERY).matches,
    () => false,
  );
}

export interface BellProps {
  unread: number;
  locale: Locale;
  href?: string;
}

type PanelState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'ready'; items: NotificationDTO[] }
  | { kind: 'error' };

/** Mirrors the count into the account menu of the header (`HeaderAccount.astro`). */
function paintMenuCount(count: number): void {
  const badge = document.querySelector<HTMLElement>('[data-menu-unread]');
  const value = document.querySelector<HTMLElement>('[data-menu-unread-count]');
  if (!badge || !value) return;
  value.textContent = count > 99 ? '99+' : String(count);
  badge.hidden = count === 0;
}

export default function Bell({ unread: initialUnread, locale, href = '/signals' }: BellProps) {
  const [unread, setUnread] = useState(initialUnread);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<PanelState>({ kind: 'idle' });
  const [status, setStatus] = useState<StreamStatus>('idle');
  const [now, setNow] = useState(() => Date.now());
  const stale = useRef(true);
  const phone = usePhone();
  const openRef = useRef(open);
  openRef.current = open;

  const load = useCallback(async () => {
    setPanel((current) => (current.kind === 'ready' ? current : { kind: 'loading' }));
    try {
      const items = await fetchRecentSignals(PANEL_LIMIT);
      // «You earned {badge}»: fetch the localised badge names first (never blocks on failure).
      if (needsBadgeNames(items)) await ensureBadgeNames();
      stale.current = false;
      setNow(Date.now());
      setPanel({ kind: 'ready', items });
    } catch {
      setPanel({ kind: 'error' });
    }
  }, []);

  useEffect(() => paintMenuCount(unread), [unread]);

  // Realtime unread count.
  useEffect(() => {
    const client = new StreamClient({
      url: STREAM_URL,
      onEvent: (event) => {
        if (event.event !== 'notification') return;
        setUnread(event.data.unreadCount);
        stale.current = true;
        if (openRef.current) void load();
      },
      onStatus: setStatus,
      onReconnect: () => {
        stale.current = true;
        void fetchUnreadCount().then(setUnread, () => {});
      },
    });
    client.start();
    const onPageHide = () => client.stop();
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      client.start();
      stale.current = true;
      void fetchUnreadCount().then(setUnread, () => {});
    };
    const onOnline = () => client.retryNow();
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('online', onOnline);
    return () => {
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('online', onOnline);
      client.stop();
    };
  }, [load]);

  // Polling fallback while the stream is down for good.
  useEffect(() => {
    if (status !== 'polling') return;
    let cancelled = false;
    const poll = () =>
      fetchUnreadCount().then(
        (count) => {
          if (!cancelled) setUnread(count);
        },
        () => {},
      );
    void poll();
    const timer = window.setInterval(poll, FALLBACK_POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [status]);

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (next && (stale.current || panel.kind !== 'ready')) void load();
    if (next) setNow(Date.now());
  };

  const openSignal = (signal: NotificationDTO) => {
    track('notification_open', { props: { type: signal.type, source: 'bell' } });
    if (signal.readAt !== null) return;
    setUnread((count) => Math.max(0, count - 1));
    setPanel((current) =>
      current.kind === 'ready'
        ? {
            kind: 'ready',
            items: current.items.map((item) =>
              item.id === signal.id ? { ...item, readAt: new Date().toISOString() } : item,
            ),
          }
        : current,
    );
    void markSignalsRead({ ids: [signal.id] }).then(setUnread, () => {});
  };

  const markAll = async () => {
    const previous = panel;
    const previousCount = unread;
    const stamp = new Date().toISOString();
    setUnread(0);
    if (panel.kind === 'ready') {
      setPanel({ kind: 'ready', items: panel.items.map((item) => (item.readAt ? item : { ...item, readAt: stamp })) });
    }
    try {
      setUnread(await markSignalsRead({ all: true }));
    } catch {
      setUnread(previousCount);
      setPanel(previous);
    }
  };

  const allHref = localizePath(href, locale);
  const label = unread > 0 ? st('signals_bell_unread', { count: unread }) : st('signals_bell_label');
  const badge =
    unread > 0 ? (
      <span
        aria-hidden="true"
        data-unread-count={unread}
        className="absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-fg tabular-nums"
      >
        {unread > 99 ? '99+' : unread}
      </span>
    ) : null;
  const buttonClasses =
    'relative inline-flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

  // Live region: announce new signals without moving focus.
  const live = (
    <span className="sr-only" aria-live="polite" aria-atomic="true">
      {unread > 0 ? st('signals_bell_unread', { count: unread }) : ''}
    </span>
  );

  if (phone) {
    return (
      <>
        <a href={allHref} className={buttonClasses} aria-label={label} title={label}>
          <Icon icon={unread > 0 ? BellRing : BellIcon} size={20} />
          {badge}
        </a>
        {live}
      </>
    );
  }

  return (
    <>
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        align="end"
        className="w-[min(26rem,calc(100vw-1rem))] max-w-none gap-0 p-0"
        trigger={
          <button type="button" className={buttonClasses} aria-label={label} title={label}>
            <Icon icon={unread > 0 ? BellRing : BellIcon} size={20} />
            {badge}
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
        <div className="max-h-[min(28rem,70vh)] overflow-y-auto p-2" aria-busy={panel.kind === 'loading'}>
          {panel.kind === 'loading' || panel.kind === 'idle' ? (
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
          ) : panel.kind === 'error' ? (
            <div role="alert" className="grid justify-items-center gap-2 px-4 py-6 text-center">
              <p className="text-sm text-fg">{st('signals_error_title')}</p>
              <button
                type="button"
                onClick={() => void load()}
                className="inline-flex h-9 items-center rounded-md border border-border-strong px-3 text-sm font-semibold text-fg hover:bg-fg/8"
              >
                {st('signals_retry')}
              </button>
            </div>
          ) : panel.items.length === 0 ? (
            <div className="grid justify-items-center gap-1 px-4 py-8 text-center">
              <p className="font-display-caps text-lg text-fg">{st('signals_empty_title')}</p>
              <p className="text-sm text-fg-muted">{st('signals_empty_text')}</p>
            </div>
          ) : (
            <ul className="grid gap-0.5">
              {panel.items.map((signal) => (
                <li key={signal.id}>
                  <SignalRow signal={signal} locale={locale} compact now={now} onOpen={openSignal} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-border p-2">
          <a
            href={allHref}
            className={cn(
              'flex h-10 items-center justify-center rounded-md text-sm font-semibold text-link hover:bg-fg/8',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
            )}
          >
            {st('signals_see_all')}
          </a>
        </div>
      </Popover>
      {live}
    </>
  );
}
