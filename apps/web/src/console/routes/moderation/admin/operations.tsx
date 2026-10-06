/**
 * `/moderation/admin/operations` — job queues, dead letters, downloads per hour and CDN purges
 * (PLAN §10.3, WP-A4 backlog). The screen lives in `features/admin/OperationsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { operationsQuery } from '../../../features/admin/api.ts';
import { OperationsScreen } from '../../../features/admin/OperationsScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/moderation/admin/operations')({
  staticData: { title: () => m.admin_ops_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(operationsQuery),
  errorComponent: AdminRouteError,
  component: OperationsScreen,
});
