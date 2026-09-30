/**
 * `/me/kits` — my kits (WP-71). `?new=1` opens «New kit»; `?add=<modId>` shows «Add to a kit»
 * (the «+ Kit» button of a mod page). The screen lives in `features/kits`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { myKitsQuery } from '../../../features/kits/api.ts';
import { KitsScreen } from '../../../features/kits/KitsScreen.tsx';

interface KitsSearch {
  new?: true;
  add?: number;
}

function positiveInt(value: unknown): number | undefined {
  const number = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : Number.NaN;
  return Number.isSafeInteger(number) && number > 0 ? number : undefined;
}

export const Route = createFileRoute('/me/kits/')({
  staticData: { title: () => m.kits_console_title() },
  validateSearch: (search: Record<string, unknown>): KitsSearch => {
    const add = positiveInt(search.add);
    const open = search.new === 1 || search.new === '1' || search.new === true;
    return { ...(open ? { new: true as const } : {}), ...(add ? { add } : {}) };
  },
  loader: ({ context }) => context.queryClient.ensureQueryData(myKitsQuery),
  component: KitsRoute,
});

function KitsRoute() {
  const search = Route.useSearch();
  return <KitsScreen openCreate={search.new === true} addModId={search.add ?? null} />;
}
