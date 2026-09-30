/**
 * `/ranger/admin/kelvinseek` — KelvinSeek usage, budget and configuration (WP-83). `?days=7|30|90`
 * picks the window of the usage chart. The screen lives in `features/admin/KelvinSeekScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { type KelvinDays, kelvinUsageQuery, settingQuery } from '../../../features/admin/api.ts';
import { KelvinSeekScreen } from '../../../features/admin/KelvinSeekScreen.tsx';
import { AdminRouteError } from '../../../features/admin/shared.tsx';

const DAYS: readonly KelvinDays[] = ['7', '30', '90'];

export const Route = createFileRoute('/ranger/admin/kelvinseek')({
  staticData: { title: () => m.admin_kelvin_title() },
  validateSearch: (search: Record<string, unknown>): { days?: KelvinDays } => {
    const days = String(search.days ?? '');
    return (DAYS as readonly string[]).includes(days) && days !== '30' ? { days: days as KelvinDays } : {};
  },
  loaderDeps: ({ search }) => ({ days: search.days ?? '30' }),
  loader: ({ context, deps }) =>
    Promise.all([
      context.queryClient.ensureQueryData(kelvinUsageQuery(deps.days)),
      context.queryClient.ensureQueryData(settingQuery('kelvinseek')),
    ]),
  errorComponent: AdminRouteError,
  component: KelvinSeekRoute,
});

function KelvinSeekRoute() {
  const search = Route.useSearch();
  return <KelvinSeekScreen days={search.days ?? '30'} />;
}
