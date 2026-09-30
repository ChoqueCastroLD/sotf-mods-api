/**
 * `/settings/creator` (WP-81). The screen lives in `features/settings/CreatorScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { CreatorScreen } from '../../features/settings/CreatorScreen.tsx';

export const Route = createFileRoute('/settings/creator')({
  staticData: { title: () => m.settings_creator_title() },
  component: CreatorScreen,
});
