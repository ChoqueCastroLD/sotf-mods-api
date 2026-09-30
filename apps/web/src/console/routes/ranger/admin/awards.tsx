/**
 * `/ranger/admin/awards` — Mod of the Week overrides, staff picks and monthly awards (WP-83). The screen lives in `features/admin/AwardsScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { AwardsScreen } from '../../../features/admin/AwardsScreen.tsx';
import { awardsQuery } from '../../../features/admin/api.ts';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/ranger/admin/awards')({
  staticData: { title: () => m.admin_awards_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(awardsQuery),
  errorComponent: AdminRouteError,
  component: AwardsScreen,
});
