/**
 * Realtime indicator of the top bar: «Live» with the pulsing dot while the stream is open,
 * «Reconnecting…» while it retries, «updates paused» while polling.
 */

import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { LiveDot } from '@sotf/ui/live-dot';
import { RadarSpinner } from '@sotf/ui/spinner';
import { CloudOff } from 'lucide-react';
import { t } from '../lib/messages.ts';
import type { StreamStatus } from '../lib/stream.ts';

export function liveStatusText(status: StreamStatus): string {
  switch (status) {
    case 'open':
      return t('console_live_connected');
    case 'polling':
      return t('console_live_polling');
    case 'reconnecting':
      return t('console_live_reconnecting');
    default:
      return t('console_live_connecting');
  }
}

export function LiveStatus({ status, className }: { status: StreamStatus; className?: string }) {
  const text = liveStatusText(status);
  const label = t('console_live_status', { status: text });
  return (
    <span
      data-stream-status={status}
      title={text}
      className={cn('inline-flex items-center gap-2 text-xs text-fg-muted', className)}
    >
      {status === 'open' ? (
        <LiveDot srLabel={label} />
      ) : status === 'polling' ? (
        <>
          <Icon icon={CloudOff} size={16} className="text-warning" />
          <span className="sr-only">{label}</span>
        </>
      ) : (
        <>
          <RadarSpinner size={14} className="text-fg-subtle" />
          <span className="sr-only">{label}</span>
        </>
      )}
      <span aria-hidden="true" className="hidden max-w-48 truncate xl:inline">
        {status === 'polling' ? t('console_live_reconnecting') : text}
      </span>
    </span>
  );
}
