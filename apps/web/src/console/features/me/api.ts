/**
 * Data of the «You» area (`/me/backpack`, `/me/downloads`; WP-81 on WP-42, WP-31, WP-50, WP-60).
 *
 *   ['me', 'backpack']          followed mods with update state
 *   ['me', 'downloads']         download history (one row per mod)
 *   ['me', 'follow-lookup', ids] which history rows I follow
 *
 * Every key sits under `['me']`, so a stream reconnection refetches them with the user.
 */
import { type QueryClient, queryOptions } from '@tanstack/react-query';
import type { Me } from '../../hooks/use-me.ts';
import { api } from '../../lib/api.ts';
import { queryKeys } from '../../lib/query-keys.ts';

export type Backpack = Awaited<ReturnType<typeof api.follows.backpack>>;
export type BackpackItem = Backpack['items'][number];
export type DownloadHistory = Awaited<ReturnType<typeof api.downloads.myDownloads>>;
export type DownloadItem = DownloadHistory['items'][number];

export const meKeys = {
  backpack: ['me', 'backpack'] as const,
  downloads: ['me', 'downloads'] as const,
  followLookup: (ids: readonly number[]) => ['me', 'follow-lookup', ids.join(',')] as const,
} as const;

export const backpackQuery = queryOptions({
  queryKey: meKeys.backpack,
  queryFn: ({ signal }) => api.follows.backpack({}, { signal }),
  staleTime: 30_000,
});

export const downloadsQuery = queryOptions({
  queryKey: meKeys.downloads,
  queryFn: ({ signal }) => api.downloads.myDownloads({}, { signal }),
  staleTime: 30_000,
});

export const followLookupQuery = (ids: readonly number[]) =>
  queryOptions({
    queryKey: meKeys.followLookup(ids),
    queryFn: async ({ signal }) => {
      if (ids.length === 0) return new Set<number>();
      const chunks: string[][] = [];
      for (let index = 0; index < ids.length; index += 100) {
        chunks.push(ids.slice(index, index + 100).map(String));
      }
      const results = await Promise.all(
        chunks.map((mod) => api.follows.lookup({ query: { mod, user: [] } }, { signal })),
      );
      return new Set(results.flatMap((result) => result.mods));
    },
    staleTime: 60_000,
  });

export const meApi = {
  follow: (modId: number, notify: boolean) => api.follows.followMod({ params: { id: modId }, body: { notify } }),
  unfollow: (modId: number) => api.follows.unfollowMod({ params: { id: modId } }),
  clearDownloads: () => api.downloads.clearMyDownloads({}),
  /** Detaches my downloads of one mod (`DELETE /me/downloads/:modId`, idempotent). */
  removeDownload: (modId: number) => api.downloads.removeMyDownload({ params: { modId } }),
  setDownloadHistory: (enabled: boolean) => api.me.updateSettings({ body: { downloadHistory: enabled } }),
};

/** Writes new settings into the cached `/me` (what `PATCH /me/settings` answered). */
export function storeSettings(queryClient: QueryClient, settings: Me['settings']): void {
  queryClient.setQueryData<Me>(queryKeys.me, (me) => (me ? { ...me, settings } : me));
}
