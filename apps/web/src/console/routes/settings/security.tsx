/**
 * `/settings/security` (WP-81). The screen lives in `features/settings/SecurityScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { sessionsQuery } from '../../features/settings/api.ts';
import { SecurityScreen } from '../../features/settings/SecurityScreen.tsx';

export const Route = createFileRoute('/settings/security')({
  staticData: { title: () => m.settings_security_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(sessionsQuery),
  component: SecurityScreen,
});
