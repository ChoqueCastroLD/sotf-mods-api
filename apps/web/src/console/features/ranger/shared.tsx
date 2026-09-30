/**
 * Pieces shared by the Ranger Station screens: formatting (waiting time, dates, sizes), the
 * user chip, risk and SLA badges, failure toasts (with «Sign in again» for the 12 h
 * re-authentication rule) and the route error of the area.
 */
import { isApiError } from '@sotf/contracts/client';
import { formatBytes, formatDateTime, formatNumber, formatRelativeTime, localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Avatar } from '@sotf/ui/avatar';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { type ErrorComponentProps, Link } from '@tanstack/react-router';
import { AlertOctagon, AlertTriangle, BadgeCheck, Clock, KeyRound, ShieldAlert } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { RouteError } from '../../components/RouteError.tsx';
import { currentPath, redirectToLogin } from '../../lib/auth.ts';
import { shellApi } from '../../lib/http.ts';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale, problemText } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { type Risk, SLA_HOURS, SLA_WARNING_RATIO } from './api.ts';

// -----------------------------------------------------------------------------------------------
// Formatting
// -----------------------------------------------------------------------------------------------

/** «14 h», «3 d» — how long an item has waited (rounded down, never negative). */
export function waitingText(hours: number): string {
  const locale = activeLocale();
  if (hours < 1) return m.ranger_waiting_minutes({ count: Math.max(0, Math.floor(hours * 60)) });
  if (hours < 48) return m.ranger_waiting_hours({ count: Math.floor(hours) });
  return m.ranger_waiting_days({
    count: Math.floor(hours / 24),
    display: formatNumber(locale, Math.floor(hours / 24)),
  });
}

/** Date and time in the ranger's own time zone (per-user UI). */
export function dateTime(iso: string): string {
  return formatDateTime(activeLocale(), iso, 'medium', 'short', { timeZone: browserTimeZone() });
}

export function relative(iso: string): string {
  return formatRelativeTime(activeLocale(), iso);
}

export function bytes(size: number): string {
  return formatBytes(activeLocale(), size);
}

export function number(value: number): string {
  return formatNumber(activeLocale(), value);
}

/** Public URL of a site path in the ranger's locale (opens the real page). */
export function publicHref(path: string): string {
  return localizePath(path, activeLocale());
}

export function profileHref(handle: string): string {
  return publicHref(`/profile/${encodeURIComponent(handle)}`);
}

export type SlaState = 'ok' | 'due' | 'overdue';

export function slaState(waitingHours: number): SlaState {
  if (waitingHours >= SLA_HOURS) return 'overdue';
  if (waitingHours >= SLA_HOURS * SLA_WARNING_RATIO) return 'due';
  return 'ok';
}

// -----------------------------------------------------------------------------------------------
// Badges and chips
// -----------------------------------------------------------------------------------------------

export function RiskBadge({ risk }: { risk: Risk }) {
  if (risk === 'high') {
    return (
      <Badge variant="danger" size="sm" icon={<Icon icon={AlertOctagon} size={12} />}>
        {m.ranger_risk_high()}
      </Badge>
    );
  }
  if (risk === 'medium') {
    return (
      <Badge variant="warning" size="sm" icon={<Icon icon={AlertTriangle} size={12} />}>
        {m.ranger_risk_medium()}
      </Badge>
    );
  }
  return (
    <Badge variant="neutral" size="sm">
      {m.ranger_risk_low()}
    </Badge>
  );
}

/** Waiting time with the SLA state (colour + text, never colour alone). */
export function WaitingBadge({ hours, className }: { hours: number; className?: string }) {
  const state = slaState(hours);
  const label =
    state === 'overdue'
      ? m.ranger_sla_overdue({ time: waitingText(hours) })
      : state === 'due'
        ? m.ranger_sla_due({ time: waitingText(hours) })
        : m.ranger_waiting({ time: waitingText(hours) });
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-mono text-2xs tabular-nums',
        state === 'overdue' ? 'text-danger' : state === 'due' ? 'text-warning' : 'text-fg-muted',
        className,
      )}
    >
      <Icon icon={Clock} size={12} />
      {label}
    </span>
  );
}

export interface UserLike {
  id: number;
  handle: string;
  displayName: string;
  avatarUrl: string | null;
  verifiedCreator: boolean;
  role: 'user' | 'moderator' | 'admin';
}

/** Avatar + name; links to the ranger user card. */
export function UserChip({
  user,
  size = 24,
  link = true,
  className,
}: {
  user: UserLike;
  size?: 20 | 24 | 32 | 40;
  link?: boolean;
  className?: string;
}) {
  const content = (
    <>
      <Avatar name={user.displayName || user.handle} id={user.id} src={user.avatarUrl} size={size} />
      <span className="min-w-0 truncate">{user.displayName || user.handle}</span>
      {user.verifiedCreator ? (
        <Icon icon={BadgeCheck} size={14} className="shrink-0 text-signal" aria-label={m.ranger_verified_creator()} />
      ) : null}
      {user.role !== 'user' ? (
        <Icon icon={ShieldAlert} size={14} className="shrink-0 text-blueprint" aria-label={m.ranger_staff()} />
      ) : null}
    </>
  );
  if (!link) return <span className={cn('inline-flex min-w-0 items-center gap-1.5', className)}>{content}</span>;
  return (
    <Link
      to="/ranger/users/$userId"
      params={{ userId: String(user.id) }}
      className={cn('inline-flex min-w-0 items-center gap-1.5 text-fg hover:text-link', className)}
    >
      {content}
    </Link>
  );
}

// -----------------------------------------------------------------------------------------------
// Failures
// -----------------------------------------------------------------------------------------------

export function isReauthRequired(error: unknown): boolean {
  return isApiError(error) && error.code === 'REAUTH_REQUIRED';
}

/** Ends the (too old) session and returns to this screen after signing in again. */
export async function signInAgain(): Promise<void> {
  const next = currentPath();
  try {
    await shellApi.logout();
  } catch {
    // Signing out failing (already gone, offline) must not block the way back in.
  }
  redirectToLogin(next);
}

/** Toast for a failed ranger action; the 12 h rule offers «Sign in again». */
export function reportFailure(error: unknown, title: string): void {
  if (isReauthRequired(error)) {
    notify.warning(m.ranger_reauth_title(), {
      id: 'ranger-reauth',
      description: m.ranger_reauth_text(),
      duration: Number.POSITIVE_INFINITY,
      action: { label: m.ranger_reauth_action(), onClick: () => void signInAgain() },
    });
    return;
  }
  const text = problemText(isApiError(error) ? error.code : null);
  const detail = isApiError(error) && error.status === 409 ? m.ranger_conflict_detail() : text.detail;
  notify.error(title, { description: detail });
}

/** «Confirm it's you» panel (a ranger session older than 12 h). */
export function ReauthPanel() {
  const [busy, setBusy] = useState(false);
  return (
    <EmptyState
      icon={<Icon icon={KeyRound} size={32} />}
      title={m.ranger_reauth_title()}
      description={m.ranger_reauth_text()}
      action={
        <Button
          loading={busy}
          onClick={() => {
            setBusy(true);
            void signInAgain();
          }}
        >
          {m.ranger_reauth_action()}
        </Button>
      }
    />
  );
}

/** Error component of every ranger route: the re-authentication panel, else the console's. */
export function RangerRouteError(props: ErrorComponentProps) {
  if (isReauthRequired(props.error)) return <ReauthPanel />;
  return <RouteError {...props} />;
}

/** Inline error of a panel (not the whole screen) with retry. */
export function PanelError({ error, onRetry }: { error: unknown; onRetry: () => void }) {
  if (isReauthRequired(error)) return <ReauthPanel />;
  const reference = isApiError(error) ? error.problem.requestId : '';
  return (
    <div role="alert" className="grid justify-items-start gap-2 rounded-lg border border-danger/40 bg-surface p-4">
      <p className="font-medium text-fg">{m.ranger_panel_error_title()}</p>
      <p className="text-sm text-fg-muted">{m.ranger_panel_error_text()}</p>
      {reference ? <p className="font-mono text-2xs text-fg-subtle">{m.ranger_reference({ reference })}</p> : null}
      <Button variant="secondary" size="sm" onClick={onRetry}>
        {m.ranger_retry()}
      </Button>
    </div>
  );
}

/** Screen heading of the area (readout + h1 + description). */
export function ScreenHeader({
  readout,
  title,
  description,
  actions,
}: {
  readout: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div className="grid gap-1">
        <p className="readout text-signal">{readout}</p>
        <h1 className="font-display-caps text-display-xs text-fg">{title}</h1>
        {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}
