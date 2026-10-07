/**
 * `/moderation/audit` — the audit log (WP-82); `?actor=<handle>&action=<name>&target=<type>:<id>`,
 * `q` (text in the reason), `from`/`to` (`YYYY-MM-DD`), `sort=oldest`, `page` and `size`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AuditScreen } from '../../features/ranger/AuditScreen.tsx';
import { AUDIT_PAGE_SIZE } from '../../features/ranger/api.ts';
import {
  AUDIT_TARGET,
  type AuditFilters,
  DATE_PARAM,
  pageParam,
  sizeParam,
  textParam,
} from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

function date(value: unknown): string | undefined {
  const text = textParam(value, 10);
  return text && DATE_PARAM.test(text) && !Number.isNaN(Date.parse(`${text}T00:00:00Z`)) ? text : undefined;
}

export const Route = createFileRoute('/moderation/audit')({
  staticData: { title: () => m.ranger_audit_title() },
  validateSearch: (search: Record<string, unknown>): AuditFilters => {
    const actor = textParam(search.actor, 64)?.replace(/^@/, '');
    const action = textParam(search.action, 80);
    const target = textParam(search.target, 40);
    const q = textParam(search.q, 100);
    const from = date(search.from);
    const to = date(search.to);
    const page = pageParam(search.page);
    const size = sizeParam(search.size, AUDIT_PAGE_SIZE as 50);
    return {
      ...(actor ? { actor } : {}),
      ...(action ? { action } : {}),
      ...(target && AUDIT_TARGET.test(target) ? { target } : {}),
      ...(q ? { q } : {}),
      ...(from ? { from } : {}),
      ...(to ? { to } : {}),
      ...(search.sort === 'oldest' ? { sort: 'oldest' as const } : {}),
      ...(page ? { page } : {}),
      ...(size ? { size } : {}),
    };
  },
  errorComponent: RangerRouteError,
  component: AuditRoute,
});

function AuditRoute() {
  return <AuditScreen filters={Route.useSearch()} />;
}
