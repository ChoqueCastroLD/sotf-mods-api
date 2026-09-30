/**
 * `/settings/privacy` (WP-81). The screen lives in `features/settings/PrivacyScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { PrivacyScreen } from '../../features/settings/PrivacyScreen.tsx';

export const Route = createFileRoute('/settings/privacy')({
  staticData: { title: () => m.settings_privacy_title() },
  component: PrivacyScreen,
});
