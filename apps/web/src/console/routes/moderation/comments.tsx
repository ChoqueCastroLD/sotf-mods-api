/**
 * `/moderation/comments` — comments held for review (WP-82): publish or hide with a reason, with the
 * same list + item layout and shortcuts as the queue (`?item=` is the open comment).
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { QueueScreen } from '../../features/ranger/QueueScreen.tsx';
import { isItemId } from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

const LANES = ['comments'] as const;

export const Route = createFileRoute('/moderation/comments')({
  staticData: { title: () => m.ranger_lane_comments() },
  validateSearch: (search: Record<string, unknown>): { item?: string } =>
    isItemId(search.item) ? { item: search.item } : {},
  errorComponent: RangerRouteError,
  component: CommentsRoute,
});

function CommentsRoute() {
  const search = Route.useSearch();
  return <QueueScreen basePath="/moderation/comments" lanes={LANES} lane="comments" itemId={search.item ?? null} />;
}
