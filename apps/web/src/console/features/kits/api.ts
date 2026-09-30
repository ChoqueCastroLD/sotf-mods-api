/**
 * Data of the kit screens (`/me/kits`, `/me/kits/$kitId`; WP-71 on the WP-42 backend).
 *
 * Query keys live under `['kits', …]`:
 *
 *   ['kits', 'mine']           my kits, any visibility (`GET /me/kits`)
 *   ['kits', 'own', id]        one of my kits, owner view (`KitDTO` with `descriptionMd`)
 *   ['kits', 'versions', modId] active versions of a mod (pin picker)
 *   ['kits', 'search', q]      mod/build search of the picker
 *
 * Owner read: the public `GET /kits/:id` is edge-cacheable and answers as for an anonymous
 * visitor (private kits are 404, no `descriptionMd`), so the editor reads its kit with the
 * owner-only `GET /me/kits/:id` (any visibility, `descriptionMd` included); every write response
 * refreshes the same cache entry.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import type { KitCardDTO, KitDTO, KitVisibility } from '@sotf/contracts/kits';
import type { SearchHitDTO } from '@sotf/contracts/search';
import type { VersionDTO } from '@sotf/contracts/versions';
import { type QueryClient, queryOptions } from '@tanstack/react-query';
import { api } from '../../lib/api.ts';

export type { KitCardDTO, KitDTO, KitVisibility, ModCardDTO, SearchHitDTO, VersionDTO };
export type KitItemDTO = KitDTO['items'][number];

export const kitKeys = {
  all: ['kits'] as const,
  mine: ['kits', 'mine'] as const,
  own: (id: number) => ['kits', 'own', id] as const,
  versions: (modId: number) => ['kits', 'versions', modId] as const,
  search: (q: string) => ['kits', 'search', q] as const,
  mod: (modId: number) => ['kits', 'mod', modId] as const,
  followed: ['kits', 'followed'] as const,
} as const;

/** `GET /me/kits` (owner view of the cards). */
export const myKitsQuery = queryOptions({
  queryKey: kitKeys.mine,
  queryFn: async ({ signal }) => (await api.kits.myKits({}, { signal })).items,
});

/** `GET /me/kit-follows`: the kits I follow, most recent first. */
export const followedKitsQuery = queryOptions({
  queryKey: kitKeys.followed,
  queryFn: async ({ signal }) => (await api.kitSocial.myFollows({}, { signal })).items,
});

/** Reads one of my kits in the owner view (`GET /me/kits/:id`). */
export function fetchOwnKit(id: number, signal?: AbortSignal): Promise<KitDTO> {
  return api.kits.getOwn({ params: { id } }, { signal });
}

export const ownKitQuery = (id: number) =>
  queryOptions({
    queryKey: kitKeys.own(id),
    queryFn: ({ signal }) => fetchOwnKit(id, signal),
    staleTime: 60_000,
  });

/** Puts a write response (owner view) in the cache and refreshes the list of my kits. */
export function storeKit(queryClient: QueryClient, kit: KitDTO): void {
  queryClient.setQueryData(kitKeys.own(kit.id), kit);
  queryClient.setQueryData<KitCardDTO[]>(kitKeys.mine, (list) => {
    if (!list) return list;
    const card = toCard(kit);
    const index = list.findIndex((entry) => entry.id === kit.id);
    if (index < 0) return [card, ...list];
    const next = [...list];
    next[index] = card;
    return next;
  });
}

/** The card fields of a kit detail. */
export function toCard(kit: KitDTO): KitCardDTO {
  return {
    id: kit.id,
    slug: kit.slug,
    name: kit.name,
    canonicalPath: kit.canonicalPath,
    owner: kit.owner,
    visibility: kit.visibility,
    code: kit.code,
    cover: kit.cover,
    previewThumbnails: kit.previewThumbnails,
    isStaffPick: kit.isStaffPick,
    itemsCount: kit.itemsCount,
    followersCount: kit.followersCount,
    revision: kit.revision,
    updatedAt: kit.updatedAt,
  };
}

export interface ItemInput {
  modId: number;
  note?: string;
  pinnedVersionId?: number;
}

/** The explicit items of a kit as the `PUT /kits/:id/items` body expects them. */
export function explicitItemsOf(kit: KitDTO): ItemInput[] {
  return kit.items
    .filter((item) => !item.isAutoDependency)
    .map((item) => ({
      modId: item.mod.id,
      ...(item.note ? { note: item.note } : {}),
      ...(item.pinnedVersion ? { pinnedVersionId: item.pinnedVersion.id } : {}),
    }));
}

export const kitsApi = {
  create: (body: { name: string; visibility: KitVisibility; descriptionMd?: string }) => api.kits.create({ body }),
  update: (
    id: number,
    body: {
      name?: string;
      slug?: string;
      descriptionMd?: string | null;
      visibility?: KitVisibility;
      coverUploadId?: string | null;
    },
  ) => api.kits.update({ params: { id }, body }),
  putItems: (id: number, items: ItemInput[], revisionSummary?: string) =>
    api.kits.putItems({
      params: { id },
      body: { items, ...(revisionSummary?.trim() ? { revisionSummary: revisionSummary.trim() } : {}) },
    }),
  remove: (id: number) => api.kits.delete({ params: { id } }),
  fork: (id: number, visibility: KitVisibility = 'private') => api.kits.fork({ params: { id }, body: { visibility } }),
};

/** Active versions of a mod, newest first (the pin picker). */
export const versionsQuery = (modId: number) =>
  queryOptions({
    queryKey: kitKeys.versions(modId),
    queryFn: async ({ signal }) =>
      (await api.versions.list({ params: { id: modId } }, { signal })).items.filter(
        (version) => version.status === 'active',
      ),
    staleTime: 5 * 60_000,
  });

/** Mods and builds matching `q` (the item picker). */
export const modSearchQuery = (q: string) =>
  queryOptions({
    queryKey: kitKeys.search(q),
    queryFn: async ({ signal }) =>
      (await api.search.search({ query: { q, types: ['mod', 'build'], limit: 8 } }, { signal })).hits.filter(
        (hit) => (hit.type === 'mod' || hit.type === 'build') && typeof hit.id === 'number',
      ),
    staleTime: 60_000,
  });

/** One mod card (the «Add to a kit» flow from a mod page). */
export const modQuery = (modId: number) =>
  queryOptions({
    queryKey: kitKeys.mod(modId),
    queryFn: ({ signal }) => api.catalog.getMod({ params: { id: modId } }, { signal }),
    staleTime: 5 * 60_000,
  });
