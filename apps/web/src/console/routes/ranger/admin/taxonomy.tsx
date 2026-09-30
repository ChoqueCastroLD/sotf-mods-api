/**
 * `/ranger/admin/taxonomy` — categories and tags (WP-83). The screen lives in `features/admin/TaxonomyScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { categoriesQuery, tagsQuery } from '../../../features/admin/api.ts';
import { AdminRouteError } from '../../../features/admin/shared.tsx';
import { TaxonomyScreen } from '../../../features/admin/TaxonomyScreen.tsx';

export const Route = createFileRoute('/ranger/admin/taxonomy')({
  staticData: { title: () => m.admin_taxonomy_title() },
  loader: ({ context }) =>
    Promise.all([context.queryClient.ensureQueryData(categoriesQuery), context.queryClient.ensureQueryData(tagsQuery)]),
  errorComponent: AdminRouteError,
  component: TaxonomyScreen,
});
