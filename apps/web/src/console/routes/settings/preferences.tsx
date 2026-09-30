/**
 * `/settings/preferences` (WP-81). The screen lives in `features/settings/PreferencesScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { PreferencesScreen } from '../../features/settings/PreferencesScreen.tsx';

export const Route = createFileRoute('/settings/preferences')({
  staticData: { title: () => m.settings_preferences_title() },
  component: PreferencesScreen,
});
