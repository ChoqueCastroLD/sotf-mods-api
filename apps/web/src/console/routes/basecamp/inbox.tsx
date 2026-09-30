/**
 * `/basecamp/inbox` — comments, bug reports, reviews and field reports on my mods with inline
 * answers (WP-80, PLAN §7.5 «Bandeja»). `?type=` filters one kind, `?state=all` includes the
 * answered and resolved ones.
 */
import { createFileRoute } from '@tanstack/react-router';
import { type InboxType, isInboxType } from '../../features/basecamp/api.ts';
import { InboxScreen } from '../../features/basecamp/InboxScreen.tsx';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';

interface InboxSearch {
  type?: InboxType;
  state?: 'all';
}

export const Route = createFileRoute('/basecamp/inbox')({
  validateSearch: (search: Record<string, unknown>): InboxSearch => ({
    ...(isInboxType(search.type) ? { type: search.type } : {}),
    ...(search.state === 'all' ? { state: 'all' as const } : {}),
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
      onFilters={(next) =>
        void navigate({
          search: (current) => {
            const type = next.type === undefined ? current.type : (next.type ?? undefined);
            const state = next.state ?? current.state ?? 'open';
            return { ...(type ? { type } : {}), ...(state === 'all' ? { state: 'all' as const } : {}) };
          },
          replace: true,
          resetScroll: false,
        })
      }
    />
  );
}
