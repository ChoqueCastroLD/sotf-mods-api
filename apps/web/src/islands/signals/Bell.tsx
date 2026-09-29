/**
 * Signals bell — STUB created by WP-22, owned and completed by WP-81 (notifications).
 *
 * Contract with the header (`components/account/HeaderAccount.astro`): the bell is only for
 * signed-in users, so it must not ship React to guests. WP-81 mounts it from the
 * `sotf:account` event (`scripts/account-hint.ts`), which carries `unreadNotifications`, and keeps
 * the count fresh through SSE. Until then this renders an accessible link to `/signals` with the
 * unread count from the summary.
 */
import { m } from '@sotf/i18n/messages';
import { Icon } from '@sotf/ui/icons';
import { Bell as BellIcon } from 'lucide-react';

export interface BellProps {
  unread: number;
  href?: string;
}

export default function Bell({ unread, href = '/signals' }: BellProps) {
  const label = m.common_term_notifications();
  return (
    <a
      href={href}
      className="relative inline-flex size-10 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg"
      aria-label={unread > 0 ? `${label} (${unread})` : label}
    >
      <Icon icon={BellIcon} size={20} />
      {unread > 0 ? (
        <span
          aria-hidden="true"
          className="absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-2xs font-semibold text-primary-fg tabular-nums"
        >
          {unread > 99 ? '99+' : unread}
        </span>
      ) : null}
    </a>
  );
}
