/**
 * Full-screen states of the console outlet: not found, no permission, empty area, errors
 * (PLAN §1.2 «estados completos»). Brand microcopy from research/03 §3.8.
 */

import { buttonClasses } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { ErrorState } from '@sotf/ui/error-state';
import { Icon } from '@sotf/ui/icons';
import { type AnyRouter, useRouter } from '@tanstack/react-router';
import { Binoculars, Compass, RefreshCw } from 'lucide-react';
import type { MouseEvent } from 'react';
import { t } from '../lib/messages.ts';

/**
 * «Back to Basecamp». A client-side navigation inside the router; a plain link when rendered by
 * the last-resort boundary outside it.
 */
function BasecampLink({ label }: { label: string }) {
  // Undefined outside `<RouterProvider>` (the type says otherwise).
  const router = useRouter({ warn: false }) as AnyRouter | undefined;
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!router || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void router.navigate({ to: '/basecamp' });
  };
  return (
    <a href="/basecamp" onClick={onClick} className={buttonClasses({ variant: 'secondary' })}>
      {label}
    </a>
  );
}

export function NotFound() {
  return (
    <EmptyState
      icon={<Icon icon={Compass} size={32} />}
      title={t('errors_not_found_title')}
      description={t('console_not_found_detail')}
      action={<BasecampLink label={t('console_not_found_action')} />}
    />
  );
}

export function Forbidden() {
  return (
    <EmptyState
      icon={<Icon icon={Binoculars} size={32} />}
      title={t('errors_permission_title')}
      description={t('errors_permission_detail')}
      action={<BasecampLink label={t('console_forbidden_action')} />}
    />
  );
}

export interface ErrorScreenProps {
  onRetry?: () => void;
  reference?: string;
}

/**
 * «This screen didn't load» with retry and the request reference. `ErrorState` tops out at h2
 * (docs/backlog/WP-34.md): the console outlet has no other heading, so screen readers still
 * land on it first.
 */
export function ErrorScreen({ onRetry, reference }: ErrorScreenProps) {
  return (
    <ErrorState
      title={t('console_error_title')}
      description={t('console_error_detail')}
      {...(onRetry ? { onRetry } : {})}
      {...(reference ? { reference } : {})}
    />
  );
}

/** A newer deploy replaced the code this tab was running (stale chunk). */
export function UpdateAvailable() {
  return (
    <EmptyState
      icon={<Icon icon={RefreshCw} size={32} />}
      title={t('console_update_title')}
      description={t('console_update_detail')}
      action={
        <button
          type="button"
          className={buttonClasses({ variant: 'primary' })}
          onClick={() => window.location.reload()}
        >
          {t('console_update_reload')}
        </button>
      }
    />
  );
}
