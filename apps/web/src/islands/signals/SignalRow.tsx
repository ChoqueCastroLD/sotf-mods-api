/**
 * One signal as a row (research/03 §6.12): kind glyph, sentence, quoted excerpt, relative time
 * and the unread dot; the whole row is the link (stretched), extra actions («Download», «Mark as
 * read») sit above it. Used by the header bell (compact) and by `/signals`.
 */
import type { NotificationDTO } from '@sotf/contracts/notifications';
import { formatDateTime, formatRelativeTime, type Locale } from '@sotf/i18n';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import type { ReactNode } from 'react';
import { describeSignal, TONE_CLASSES } from './describe.ts';
import { st } from './i18n.ts';

export interface SignalRowProps {
  signal: NotificationDTO;
  locale: Locale;
  /** Header panel density (no excerpt clamp beyond one line, smaller glyph). */
  compact?: boolean;
  /** Reference instant of the relative time (re-rendered by the caller). */
  now?: number;
  /** The row link was followed (mark as read, analytics). */
  onOpen?: (signal: NotificationDTO) => void;
  /** Extra controls at the end of the row. */
  actions?: ReactNode;
  className?: string;
}

/** The browser's time zone (signals are personal UI, never cached HTML). */
export function localTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

export function SignalRow({ signal, locale, compact = false, now, onOpen, actions, className }: SignalRowProps) {
  const view = describeSignal(signal, locale);
  const unread = signal.readAt === null;
  const when = formatRelativeTime(locale, signal.createdAt, now === undefined ? {} : { now });
  const exact = formatDateTime(locale, signal.createdAt, 'medium', 'short', { timeZone: localTimeZone() });
  const text = (
    <>
      <span className={cn('block text-sm', unread ? 'font-semibold text-fg' : 'text-fg-muted')}>{view.text}</span>
      {view.excerpt ? (
        <span className={cn('mt-0.5 block text-sm text-fg-muted', compact ? 'line-clamp-1' : 'line-clamp-2')}>
          {st('signals_excerpt', { text: view.excerpt })}
        </span>
      ) : null}
    </>
  );
  return (
    <div
      className={cn(
        'relative flex items-start gap-3 rounded-md transition-colors hover:bg-fg/5 focus-within:bg-fg/5',
        compact ? 'px-2 py-2' : 'px-3 py-3',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full',
          compact ? 'size-8' : 'size-9',
          TONE_CLASSES[view.tone],
        )}
      >
        <Icon icon={view.icon} size={compact ? 16 : 18} />
      </span>
      <div className="min-w-0 flex-1">
        {view.href ? (
          <a
            href={view.href}
            onClick={() => onOpen?.(signal)}
            className="block rounded-xs after:absolute after:inset-0 after:rounded-md after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            {unread ? <span className="sr-only">{st('signals_unread_prefix')} </span> : null}
            {text}
          </a>
        ) : (
          <div>
            {unread ? <span className="sr-only">{st('signals_unread_prefix')} </span> : null}
            {text}
          </div>
        )}
        <time dateTime={signal.createdAt} title={exact} className="mt-1 block text-xs text-fg-subtle tabular-nums">
          {when}
        </time>
      </div>
      {actions || view.downloadHref ? (
        <div className="relative z-10 flex shrink-0 items-center gap-1 self-center">
          {view.downloadHref && !compact ? (
            <a
              href={view.downloadHref}
              rel="nofollow"
              className="inline-flex h-8 items-center rounded-md border border-border-strong px-3 text-xs font-semibold text-fg hover:bg-fg/8"
            >
              {st('signals_action_download')}
            </a>
          ) : null}
          {actions}
        </div>
      ) : null}
      {unread ? <span aria-hidden="true" className="absolute end-2 top-2 size-2 rounded-full bg-primary" /> : null}
    </div>
  );
}
