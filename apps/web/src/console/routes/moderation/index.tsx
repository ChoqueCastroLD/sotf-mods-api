/**
 * `/moderation` — the moderation queue (WP-82): lanes new mods, versions, post-review, builds and
 * reports; `?lane=` picks the lane and `?item=` the open item. The screen lives in
 * `features/ranger`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import type { Lane } from '../../features/ranger/api.ts';
import { QueueScreen } from '../../features/ranger/QueueScreen.tsx';
import { isItemId, QUEUE_LANES } from '../../features/ranger/search.ts';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

interface QueueSearch {
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
    return { ...(lane ? { lane } : {}), ...(item ? { item } : {}) };
  },
  errorComponent: RangerRouteError,
  component: QueueRoute,
});

function QueueRoute() {
  const search = Route.useSearch();
  return (
    <QueueScreen
      basePath="/moderation"
      lanes={QUEUE_LANES}
      lane={search.lane ?? 'new_mods'}
      itemId={search.item ?? null}
    />
  );
}
