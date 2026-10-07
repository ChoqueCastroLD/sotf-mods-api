/**
 * `/moderation` — the moderation queue (WP-82): lanes new mods, versions, post-review, builds and
 * reports; `?lane=` picks the lane, `?item=` the open item, and `page`, `sort`, `risk`, `age`,
 * `assignee`, `escalated`, `author`, `q` the list. The screen lives in `features/ranger`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import type { Lane } from '../../features/ranger/api.ts';
import { QueueScreen } from '../../features/ranger/QueueScreen.tsx';
import { isItemId, parseQueueView, QUEUE_LANES, type QueueView } from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

interface QueueSearch extends QueueView {
  lane?: Lane;
  item?: string;
}

function queueLane(value: unknown): Lane | undefined {
  return typeof value === 'string' && (QUEUE_LANES as readonly string[]).includes(value) ? (value as Lane) : undefined;
}

export const Route = createFileRoute('/moderation/')({
  staticData: { title: () => m.ranger_queue_title() },
  validateSearch: (search: Record<string, unknown>): QueueSearch => {
    const lane = queueLane(search.lane);
    const item = isItemId(search.item) ? search.item : undefined;
    return { ...(lane ? { lane } : {}), ...(item ? { item } : {}), ...parseQueueView(search) };
  },
  errorComponent: RangerRouteError,
  component: QueueRoute,
});

function QueueRoute() {
  const { lane, item, ...view } = Route.useSearch();
  return (
    <QueueScreen
      basePath="/moderation"
      lanes={QUEUE_LANES}
      lane={lane ?? 'new_mods'}
      itemId={item ?? null}
      view={view}
    />
  );
}
