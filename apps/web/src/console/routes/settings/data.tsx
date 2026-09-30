/**
 * `/settings/data` (WP-81). The screen lives in `features/settings/DataScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { DataScreen } from '../../features/settings/DataScreen.tsx';

export const Route = createFileRoute('/settings/data')({
  staticData: { title: () => m.settings_data_title() },
  component: DataScreen,
});
