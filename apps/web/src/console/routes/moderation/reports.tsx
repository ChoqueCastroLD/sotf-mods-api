/**
 * `/moderation/reports` — user reports (WP-82); `?status=resolved|dismissed|all` (open by default),
 * `reason`, `targetType`, `q`, `sort` (`oldest` or `newest`) and `page`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import type { ReportsView } from '../../features/ranger/api.ts';
import { ReportsScreen } from '../../features/ranger/ReportsScreen.tsx';
import {
  choiceParam,
  pageParam,
  REPORT_REASONS,
  REPORT_SORTS,
  REPORT_STATUSES,
  REPORT_TARGETS,
  textParam,
} from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

type ReportsSearch = Omit<ReportsView, 'status'> & { status?: Exclude<ReportsView['status'], 'open'> };

export const Route = createFileRoute('/moderation/reports')({
  staticData: { title: () => m.ranger_reports_title() },
  validateSearch: (search: Record<string, unknown>): ReportsSearch => {
    const status = choiceParam(search.status, REPORT_STATUSES, 'open') as ReportsSearch['status'];
    // Each status has its own default order (open: oldest first, closed: newest first).
    const defaultSort = status === undefined ? 'oldest' : 'newest';
    const sort = choiceParam(search.sort, REPORT_SORTS, defaultSort);
    const reason = choiceParam(search.reason, REPORT_REASONS);
    const targetType = choiceParam(search.targetType, REPORT_TARGETS);
    const q = textParam(search.q, 100);
    const page = pageParam(search.page);
    return {
      ...(status ? { status } : {}),
      ...(sort ? { sort } : {}),
      ...(reason ? { reason } : {}),
      ...(targetType ? { targetType } : {}),
      ...(q ? { q } : {}),
      ...(page ? { page } : {}),
    };
  },
  errorComponent: RangerRouteError,
  component: ReportsRoute,
});

function ReportsRoute() {
  const { status, ...rest } = Route.useSearch();
  return <ReportsScreen view={{ status: status ?? 'open', ...rest }} />;
}
