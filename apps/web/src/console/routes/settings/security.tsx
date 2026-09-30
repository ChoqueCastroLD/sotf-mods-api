/**
 * `/settings/security` (WP-81). The screen lives in `features/settings/SecurityScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { securityQuery, sessionsQuery } from '../../features/settings/api.ts';
import { SecurityScreen } from '../../features/settings/SecurityScreen.tsx';

export const Route = createFileRoute('/settings/security')({
  staticData: { title: () => m.settings_security_title() },
  loader: ({ context }) =>
    Promise.all([
      context.queryClient.ensureQueryData(sessionsQuery),
      context.queryClient.ensureQueryData(securityQuery),
    ]),
  component: SecurityScreen,
});
