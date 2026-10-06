/**
 * `/dashboard/inbox` — comments, bug reports, reviews and field reports on my mods with inline
 * answers (WP-80, PLAN §7.5 «Bandeja»). `?type=` filters one kind, `?mod=` one of my mods and
 * `?state=all` includes the answered and resolved ones.
 */
import { createFileRoute } from '@tanstack/react-router';
import { InboxScreen } from '../../features/basecamp/InboxScreen.tsx';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';
import { type InboxType, isInboxType } from '../../features/basecamp/search.ts';

interface InboxSearch {
  type?: InboxType;
  state?: 'all';
  mod?: number;
}

function modIdOf(value: unknown): number | undefined {
  const id = typeof value === 'number' ? value : Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : undefined;
}

export const Route = createFileRoute('/dashboard/inbox')({
  validateSearch: (search: Record<string, unknown>): InboxSearch => ({
    ...(isInboxType(search.type) ? { type: search.type } : {}),
    ...(search.state === 'all' ? { state: 'all' as const } : {}),
    ...(modIdOf(search.mod) ? { mod: modIdOf(search.mod) } : {}),
  }),
  loader: () => loadBasecampMessages(),
  staticData: { title: () => bt('basecamp_inbox_title') },
  component: InboxRoute,
});

function InboxRoute() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <InboxScreen
      type={search.type ?? null}
      state={search.state ?? 'open'}
      modId={search.mod ?? null}
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const type = next.type === undefined ? current.type : (next.type ?? undefined);
            const state = next.state ?? current.state ?? 'open';
            const mod = next.modId === undefined ? current.mod : (next.modId ?? undefined);
            return {
              ...(type ? { type } : {}),
              ...(state === 'all' ? { state: 'all' as const } : {}),
              ...(mod ? { mod } : {}),
            };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
