/**
 * `/moderation/audit` — the audit log (WP-82); `?actor=<handle>&action=<name>&target=<type>:<id>`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AuditScreen } from '../../features/ranger/AuditScreen.tsx';
import { AUDIT_TARGET, type AuditFilters } from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

function text(value: unknown, max: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed && trimmed.length <= max ? trimmed : undefined;
}

export const Route = createFileRoute('/moderation/audit')({
  staticData: { title: () => m.ranger_audit_title() },
  validateSearch: (search: Record<string, unknown>): AuditFilters => {
    const actor = text(search.actor, 64);
    const action = text(search.action, 80);
    const target = text(search.target, 40);
    return {
      ...(actor ? { actor } : {}),
      ...(action ? { action } : {}),
      ...(target && AUDIT_TARGET.test(target) ? { target } : {}),
    };
  },
  errorComponent: RangerRouteError,
  component: AuditRoute,
});

function AuditRoute() {
  const search = Route.useSearch();
  return <AuditScreen filters={search} />;
}
