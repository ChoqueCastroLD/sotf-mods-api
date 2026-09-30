/**
 * `/signals` — the full list of signals (WP-81). `?filter=mentions|updates|my_mods|ranger`
 * narrows it (PLAN §4.3); the screen lives in `features/signals`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { isSignalFilter, type SignalFilter, signalsMessagesQuery, signalsQuery } from '../../features/signals/api.ts';
import { SignalsScreen } from '../../features/signals/SignalsScreen.tsx';
import { activeLocale } from '../../lib/messages.ts';

interface SignalsSearch {
  filter?: Exclude<SignalFilter, 'all'>;
}

export const Route = createFileRoute('/signals/')({
  staticData: { title: () => m.common_term_signals() },
  validateSearch: (search: Record<string, unknown>): SignalsSearch =>
    isSignalFilter(search.filter) && search.filter !== 'all' ? { filter: search.filter } : {},
  loaderDeps: ({ search }): { filter: SignalFilter } => ({ filter: search.filter ?? 'all' }),
  loader: ({ context, deps }) =>
    Promise.all([
      context.queryClient.ensureQueryData(signalsMessagesQuery(activeLocale())),
      context.queryClient.ensureInfiniteQueryData(signalsQuery(deps.filter)),
    ]),
  component: SignalsRoute,
});

function SignalsRoute() {
  const search = Route.useSearch();
  return <SignalsScreen filter={search.filter ?? 'all'} />;
}
