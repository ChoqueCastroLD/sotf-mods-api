/**
 * Data of the modpack screens (2026-11): `/dashboard/modpacks` (the member's modpacks, the editor
 * and the `.sotfprofile` import) and `/moderation/modpacks` (moderators: pending modpacks).
 * Modpacks are kits on the API (`/api/v2/kits`, `/api/v2/me/kits`).
 *
 * Query keys:
 *
 *   ['modpacks', 'mine']        the member's modpacks (any status)
 *   ['modpacks', 'own', id]     one of them, as its owner edits it
 *   ['modpacks', 'review', page] pending modpacks (moderators)
 */
import { queryOptions } from '@tanstack/react-query';
import { api } from '../../lib/api.ts';

type Out<F extends (...args: never[]) => Promise<unknown>> = Awaited<ReturnType<F>>;

export type Modpack = Out<typeof api.kits.getOwn>;
export type ModpackCard = Out<typeof api.kits.myKits>['items'][number];
export type ReviewPage = Out<typeof api.kits.review>;
export type ResolvedProfile = Out<typeof api.kits.resolveProfile>;

export const modpackKeys = {
  all: ['modpacks'] as const,
  mine: ['modpacks', 'mine'] as const,
  own: (id: number) => ['modpacks', 'own', id] as const,
  review: (page: number) => ['modpacks', 'review', page] as const,
};

export const myModpacksQuery = queryOptions({
  queryKey: modpackKeys.mine,
  queryFn: async ({ signal }) => (await api.kits.myKits({}, { signal })).items,
});

export const ownModpackQuery = (id: number) =>
  queryOptions({
    queryKey: modpackKeys.own(id),
    queryFn: ({ signal }) => api.kits.getOwn({ params: { id } }, { signal }),
  });

export const reviewQuery = (page: number) =>
  queryOptions({
    queryKey: modpackKeys.review(page),
    queryFn: ({ signal }) => api.kits.review({ query: { page, pageSize: 24 } }, { signal }),
  });

/** Largest `.sotfprofile` the import reads (the API refuses more). */
export const PROFILE_MAX_BYTES = 256 * 1024;
/** Mods per modpack, dependencies included (the API refuses more). */
export const MODPACK_MAX_MODS = 200;
