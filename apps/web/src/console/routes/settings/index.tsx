/**
 * `/settings` — the list of sections (the iOS pattern on phones: list → detail; on larger screens
 * the sidebar lists them too). WP-81.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { SettingsIndex } from '../../features/settings/layout.tsx';

export const Route = createFileRoute('/settings/')({
  staticData: { title: () => m.settings_index_title() },
  component: SettingsIndex,
});
