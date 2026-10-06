/**
 * `/moderation/admin/ecosystem` — loader releases and their status on every game build (WP-83). The screen lives in `features/admin/EcosystemScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ecosystemQuery, gameBuildsQuery, loaderReleasesQuery } from '../../../features/admin/api.ts';
import { EcosystemScreen } from '../../../features/admin/EcosystemScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/moderation/admin/ecosystem')({
  staticData: { title: () => m.admin_ecosystem_title() },
  loader: ({ context }) =>
    Promise.all([
      context.queryClient.ensureQueryData(gameBuildsQuery),
      context.queryClient.ensureQueryData(loaderReleasesQuery),
      context.queryClient.ensureQueryData(ecosystemQuery),
    ]),
  errorComponent: AdminRouteError,
  component: EcosystemScreen,
});
