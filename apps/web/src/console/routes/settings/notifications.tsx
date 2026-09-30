/**
 * `/settings/notifications` (WP-81). The screen lives in `features/settings/NotificationsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { preferencesQuery } from '../../features/settings/api.ts';
import { NotificationsScreen } from '../../features/settings/NotificationsScreen.tsx';

export const Route = createFileRoute('/settings/notifications')({
  staticData: { title: () => m.settings_notifications_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(preferencesQuery),
  component: NotificationsScreen,
});
