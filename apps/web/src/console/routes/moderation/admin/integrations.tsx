/**
 * `/moderation/admin/integrations` — Discord webhooks (WP-83). The screen lives in `features/admin/IntegrationsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { settingQuery } from '../../../features/admin/api.ts';
import { IntegrationsScreen } from '../../../features/admin/IntegrationsScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/moderation/admin/integrations')({
  staticData: { title: () => m.admin_integrations_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(settingQuery('discordWebhooks')),
  errorComponent: AdminRouteError,
  component: IntegrationsScreen,
});
