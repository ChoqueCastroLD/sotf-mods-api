/**
 * `/moderation/reports` — user reports (WP-82); `?status=resolved|dismissed|all` (open by default).
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ReportsScreen } from '../../features/ranger/ReportsScreen.tsx';
import { REPORT_STATUSES, type ReportFilter } from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

interface ReportsSearch {
  status?: Exclude<ReportFilter, 'open'>;
}

export const Route = createFileRoute('/moderation/reports')({
  staticData: { title: () => m.ranger_reports_title() },
  validateSearch: (search: Record<string, unknown>): ReportsSearch => {
    const status = search.status;
    return typeof status === 'string' && status !== 'open' && (REPORT_STATUSES as readonly string[]).includes(status)
      ? { status: status as Exclude<ReportFilter, 'open'> }
      : {};
  },
  errorComponent: RangerRouteError,
  component: ReportsRoute,
});

function ReportsRoute() {
  const search = Route.useSearch();
  return <ReportsScreen status={search.status ?? 'open'} />;
}
