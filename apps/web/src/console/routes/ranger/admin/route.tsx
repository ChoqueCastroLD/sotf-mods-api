/**
 * `/ranger/admin` layout (WP-83): admins only (moderators get «Rangers only»; the API re-checks
 * every call and also demands a session younger than 12 h). Screens live in `features/admin`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { requireRole } from '../../../lib/guard.ts';

export const Route = createFileRoute('/ranger/admin')({
  beforeLoad: ({ context }) => {
    requireRole(context.queryClient, 'admin');
  },
  staticData: { title: () => m.admin_title() },
  errorComponent: AdminRouteError,
  component: Outlet,
});
