/**
 * Data of the publishing wizard (TanStack Query). Keys live under the console prefixes
 * (`lib/query-keys.ts`): drafts and the creator's own mods under `['studio', …]`, so the SSE
 * invalidation of Basecamp reaches them.
 */
import type { DraftDTO } from '@sotf/contracts/studio';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { api } from '../../../lib/api.ts';
import { queryKeys } from '../../../lib/query-keys.ts';

export const uploadKeys = {
  drafts: ['studio', 'drafts'] as const,
  draft: (id: string) => ['studio', 'drafts', id] as const,
  upload: (id: string) => ['studio', 'uploads', id] as const,
  categories: (kind: 'mod' | 'build') => ['catalog', 'categories', kind] as const,
  tags: ['catalog', 'tags'] as const,
  gameBuilds: ['catalog', 'game-builds'] as const,
  modSearch: (q: string) => ['catalog', 'mod-search', q] as const,
  manifest: (manifestId: string) => ['catalog', 'by-manifest', manifestId] as const,
};

export const draftsQuery = queryOptions({
  queryKey: uploadKeys.drafts,
  queryFn: ({ signal }) => api.studio.listDrafts({}, { signal }),
});

export function draftQuery(id: string) {
  return queryOptions({
    queryKey: uploadKeys.draft(id),
    queryFn: ({ signal }): Promise<DraftDTO> => api.studio.getDraft({ params: { id } }, { signal }),
  });
}

export function uploadQuery(id: string) {
  return queryOptions({
    queryKey: uploadKeys.upload(id),
    queryFn: ({ signal }) => api.uploads.get({ params: { id } }, { signal }),
    staleTime: 10_000,
  });
}

export function studioModQuery(modId: number) {
  return queryOptions({
    queryKey: queryKeys.studioMod(modId),
    queryFn: ({ signal }) => api.studio.getMod({ params: { id: modId } }, { signal }),
  });
}

/** Taxonomy changes rarely: an hour fresh. */
const TAXONOMY_STALE_MS = 60 * 60_000;

export function categoriesQuery(kind: 'mod' | 'build') {
  return queryOptions({
    queryKey: uploadKeys.categories(kind),
    queryFn: ({ signal }) => api.catalog.categories({ query: { kind } }, { signal }),
    staleTime: TAXONOMY_STALE_MS,
  });
}

export const tagsQuery = queryOptions({
  queryKey: uploadKeys.tags,
  queryFn: ({ signal }) => api.catalog.tags({}, { signal }),
  staleTime: TAXONOMY_STALE_MS,
});

export const gameBuildsQuery = queryOptions({
  queryKey: uploadKeys.gameBuilds,
  queryFn: ({ signal }) => api.compat.gameBuilds({}, { signal }),
  staleTime: TAXONOMY_STALE_MS,
});

/** Mods and libraries matching `q` (dependency picker). */
export function modSearchQuery(q: string) {
  return queryOptions({
    queryKey: uploadKeys.modSearch(q),
    queryFn: ({ signal }) => api.catalog.listMods({ query: { q, sort: 'relevance', pageSize: 8 } }, { signal }),
    enabled: q.trim().length >= 2,
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });
}

/** A published mod by manifest id (resolving the manifest's dependencies); null when unknown. */
export function manifestQuery(manifestId: string) {
  return queryOptions({
    queryKey: uploadKeys.manifest(manifestId),
    queryFn: async ({ signal }) => {
      try {
        return await api.catalog.getModByManifest({ params: { manifestId } }, { signal });
      } catch (error) {
        if (error instanceof Error && 'status' in error && (error.status === 404 || error.status === 410)) return null;
        throw error;
      }
    },
    staleTime: 5 * 60_000,
  });
}
