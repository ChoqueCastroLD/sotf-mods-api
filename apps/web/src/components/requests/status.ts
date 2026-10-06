import type { RequestStatus } from '@sotf/contracts/requests';
import { m } from '@sotf/i18n/messages';

export function statusLabel(status: RequestStatus | 'all'): string {
  switch (status) {
    case 'all':
      return m.requests_status_all();
    case 'open':
      return m.requests_status_open();
    case 'adopted':
      return m.requests_status_adopted();
    case 'fulfilled':
      return m.requests_status_fulfilled();
    case 'closed':
      return m.requests_status_closed();
  }
}

/** Badge colours per status (tokens of the design system). */
export const STATUS_CLASSES: Readonly<Record<RequestStatus, string>> = {
  open: 'bg-fg/10 text-fg',
  adopted: 'bg-warning-soft text-warning',
  fulfilled: 'bg-success/15 text-success',
  closed: 'bg-fg/8 text-fg-muted',
};
