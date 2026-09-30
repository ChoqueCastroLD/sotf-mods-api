/**
 * `/ranger/admin/announcements` — global announcement banners (WP-83). The screen lives in `features/admin/AnnouncementsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AnnouncementsScreen } from '../../../features/admin/AnnouncementsScreen.tsx';
import { announcementsQuery } from '../../../features/admin/api.ts';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/ranger/admin/announcements')({
  staticData: { title: () => m.admin_ann_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(announcementsQuery),
  errorComponent: AdminRouteError,
  component: AnnouncementsScreen,
});
