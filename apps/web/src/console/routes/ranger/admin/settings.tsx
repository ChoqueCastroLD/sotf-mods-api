/**
 * `/ranger/admin/settings` — feature flags, limits, ads and moderation templates (WP-83). The screen lives in `features/admin/SettingsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { settingQuery } from '../../../features/admin/api.ts';
import { SettingsScreen } from '../../../features/admin/SettingsScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/ranger/admin/settings')({
  staticData: { title: () => m.admin_settings_title() },
  loader: ({ context }) =>
    Promise.all(
      (['featureFlags', 'limits', 'ads', 'moderationTemplates'] as const).map((key) =>
        context.queryClient.ensureQueryData(settingQuery(key)),
      ),
    ),
  errorComponent: AdminRouteError,
  component: SettingsScreen,
});
