/**
 * `/settings/account` (WP-81). The screen lives in `features/settings/AccountScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AccountScreen } from '../../features/settings/AccountScreen.tsx';

export const Route = createFileRoute('/settings/account')({
  staticData: { title: () => m.settings_account_title() },
  component: AccountScreen,
});
