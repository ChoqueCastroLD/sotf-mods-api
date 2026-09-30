/**
 * `/ranger/jams` — every Mod Jam and «New jam». Screen: `features/jams/JamsAdminScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { adminJamsQuery } from '../../../features/jams/api.ts';
import { JamsAdminScreen } from '../../../features/jams/JamsAdminScreen.tsx';

export const Route = createFileRoute('/ranger/jams/')({
  staticData: { title: () => m.jams_admin_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(adminJamsQuery),
  errorComponent: AdminRouteError,
  component: JamsAdminScreen,
});
