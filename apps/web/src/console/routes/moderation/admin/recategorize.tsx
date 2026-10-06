/**
 * `/moderation/admin/recategorize` — bulk recategorisation (keyword suggestions, batch edit, CSV import
 * from WP-84; WP-83). `?from=<category slug>` pre-filters by current category. The screen lives in
 * `features/admin/RecategorizeScreen.tsx`; the suggestions load inside it (they are computed over
 * every mod, so the screen shows its own skeleton instead of holding the navigation).
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { categoriesQuery, tagsQuery } from '../../../features/admin/api.ts';
import { RecategorizeScreen } from '../../../features/admin/RecategorizeScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

export const Route = createFileRoute('/moderation/admin/recategorize')({
  staticData: { title: () => m.admin_recat_title() },
  validateSearch: (search: Record<string, unknown>): { from?: string } =>
    typeof search.from === 'string' && /^[a-z0-9-]{1,80}$/.test(search.from) ? { from: search.from } : {},
  loader: ({ context }) =>
    Promise.all([context.queryClient.ensureQueryData(categoriesQuery), context.queryClient.ensureQueryData(tagsQuery)]),
  errorComponent: AdminRouteError,
  component: RecategorizeRoute,
});

function RecategorizeRoute() {
  const search = Route.useSearch();
  return <RecategorizeScreen key={search.from ?? ''} {...(search.from ? { from: search.from } : {})} />;
}
