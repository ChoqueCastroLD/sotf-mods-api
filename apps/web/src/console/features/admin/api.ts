/**
 * Data of the admin screens (`/moderation/admin/*`, WP-83 on the WP-50/WP-51/WP-52/WP-60 backend).
 * Every admin read and write needs 👑 admin and a session younger than 12 h (the API answers
 * `REAUTH_REQUIRED` otherwise; see `shared.tsx`).
 *
 * Query keys live under `['admin', …]`:
 *
 *   ['admin', 'game-builds']            game builds, newest first
 *   ['admin', 'loader-releases']        RedLoader / RedManager releases
 *   ['admin', 'ecosystem']              loader × build status (public compat read)
 *   ['admin', 'categories']             every category (retired included)
 *   ['admin', 'active-categories']      the public list (active only: tells retired ones apart)
 *   ['admin', 'tags']                   every tag
 *   ['admin', 'recategorize']           keyword-rule suggestions
 *   ['admin', 'announcements']          announcements
 *   ['admin', 'setting', key]           one `SiteSetting`
 *   ['admin', 'rum', range]             RUM p75 per template × country
 *   ['admin', 'operations']             job queues, dead letters, downloads, CDN purges
 */
import { type QueryClient, queryOptions } from '@tanstack/react-query';
import { api } from '../../lib/api.ts';
import type { SiteSettingKey } from './constants.ts';

type Out<F extends (...args: never[]) => Promise<unknown>> = Awaited<ReturnType<F>>;
type In<F extends (...args: never[]) => Promise<unknown>> = NonNullable<Parameters<F>[0]>;

export type GameBuild = Out<typeof api.admin.listGameBuilds>['items'][number];
export type LoaderRelease = Out<typeof api.admin.listLoaderReleases>['items'][number];
export type Ecosystem = Out<typeof api.compat.ecosystem>;
export type EcosystemEntry = Ecosystem['entries'][number];
export type Category = Out<typeof api.admin.listCategories>['items'][number];
export type Tag = Out<typeof api.admin.listTags>['items'][number];
export type Suggestion = Out<typeof api.admin.recategorize>['suggestions'][number];
export type Announcement = Out<typeof api.admin.listAnnouncements>['items'][number];
export type SiteSetting = Out<typeof api.admin.getSetting>;
export type Rum = Out<typeof api.admin.rum>;
export type RumRow = Rum['rows'][number];
export type Operations = Out<typeof api.admin.operations>;

export type CreateGameBuildInput = In<typeof api.admin.createGameBuild>['body'];
export type UpdateGameBuildInput = In<typeof api.admin.updateGameBuild>['body'];
export type CreateLoaderInput = In<typeof api.admin.createLoaderRelease>['body'];
export type EcosystemInput = In<typeof api.admin.putEcosystem>['body'];
export type CategoryInput = In<typeof api.admin.createCategory>['body'];
export type TagInput = In<typeof api.admin.createTag>['body'];
export type RecategorizeChange = NonNullable<NonNullable<In<typeof api.admin.recategorize>['body']>['changes']>[number];
export type AnnouncementInput = In<typeof api.admin.createAnnouncement>['body'];
export type RumRange = NonNullable<NonNullable<In<typeof api.admin.rum>['query']>['range']>;

export const adminKeys = {
  all: ['admin'] as const,
  gameBuilds: ['admin', 'game-builds'] as const,
  loaders: ['admin', 'loader-releases'] as const,
  ecosystem: ['admin', 'ecosystem'] as const,
  categories: ['admin', 'categories'] as const,
  tags: ['admin', 'tags'] as const,
  recategorize: ['admin', 'recategorize'] as const,
  announcements: ['admin', 'announcements'] as const,
  setting: (key: SiteSettingKey) => ['admin', 'setting', key] as const,
  rum: (range: RumRange) => ['admin', 'rum', range] as const,
  operations: ['admin', 'operations'] as const,
} as const;

export const gameBuildsQuery = queryOptions({
  queryKey: adminKeys.gameBuilds,
  queryFn: async ({ signal }) => (await api.admin.listGameBuilds({}, { signal })).items,
});

export const loaderReleasesQuery = queryOptions({
  queryKey: adminKeys.loaders,
  queryFn: async ({ signal }) => (await api.admin.listLoaderReleases({}, { signal })).items,
});

export const ecosystemQuery = queryOptions({
  queryKey: adminKeys.ecosystem,
  queryFn: ({ signal }) => api.compat.ecosystem({}, { signal }),
});

export const categoriesQuery = queryOptions({
  queryKey: adminKeys.categories,
  queryFn: async ({ signal }): Promise<Category[]> => (await api.admin.listCategories({}, { signal })).items,
});

export const tagsQuery = queryOptions({
  queryKey: adminKeys.tags,
  queryFn: async ({ signal }): Promise<Tag[]> => (await api.admin.listTags({}, { signal })).items,
});

export const suggestionsQuery = queryOptions({
  queryKey: adminKeys.recategorize,
  queryFn: async ({ signal }) => (await api.admin.recategorize({ body: { dryRun: true } }, { signal })).suggestions,
  staleTime: 5 * 60_000,
});

export const announcementsQuery = queryOptions({
  queryKey: adminKeys.announcements,
  queryFn: async ({ signal }) => (await api.admin.listAnnouncements({}, { signal })).items,
});

export const settingQuery = (key: SiteSettingKey) =>
  queryOptions({
    queryKey: adminKeys.setting(key),
    queryFn: ({ signal }) => api.admin.getSetting({ params: { key } }, { signal }),
  });

export const rumQuery = (range: RumRange) =>
  queryOptions({
    queryKey: adminKeys.rum(range),
    queryFn: ({ signal }) => api.admin.rum({ query: { range } }, { signal }),
    staleTime: 5 * 60_000,
  });

/** Operational readout; the screen refreshes it every minute while it is open. */
export const OPERATIONS_REFRESH_MS = 60_000;

export const operationsQuery = queryOptions({
  queryKey: adminKeys.operations,
  queryFn: ({ signal }) => api.admin.operations({}, { signal }),
  staleTime: 30_000,
});

/** Current tags of a mod (the recategorize table merges them with the chosen ones). */
export async function currentTagsOf(modId: number): Promise<string[] | null> {
  try {
    return (await api.catalog.getMod({ params: { id: modId } })).tags.map((tag) => tag.slug);
  } catch {
    // Not public (pending, unlisted…) or gone: the caller leaves its tags untouched.
    return null;
  }
}

export const adminApi = {
  createGameBuild: (body: CreateGameBuildInput) => api.admin.createGameBuild({ body }),
  updateGameBuild: (id: number, body: UpdateGameBuildInput) => api.admin.updateGameBuild({ params: { id }, body }),
  deleteGameBuild: (id: number) => api.admin.deleteGameBuild({ params: { id } }),
  createLoaderRelease: (body: CreateLoaderInput) => api.admin.createLoaderRelease({ body }),
  putEcosystem: (body: EcosystemInput) => api.admin.putEcosystem({ body }),
  createCategory: (body: CategoryInput) => api.admin.createCategory({ body }),
  updateCategory: (id: number, body: CategoryInput) => api.admin.updateCategory({ params: { id }, body }),
  retireCategory: (id: number) => api.admin.retireCategory({ params: { id } }),
  createTag: (body: TagInput) => api.admin.createTag({ body }),
  updateTag: (id: number, body: TagInput) => api.admin.updateTag({ params: { id }, body }),
  deleteTag: (id: number) => api.admin.deleteTag({ params: { id } }),
  applyRecategorize: (changes: RecategorizeChange[]) => api.admin.recategorize({ body: { dryRun: false, changes } }),
  createAnnouncement: (body: AnnouncementInput) => api.admin.createAnnouncement({ body }),
  updateAnnouncement: (id: number, body: AnnouncementInput) => api.admin.updateAnnouncement({ params: { id }, body }),
  deleteAnnouncement: (id: number) => api.admin.deleteAnnouncement({ params: { id } }),
  putSetting: (key: SiteSettingKey, value: unknown) => api.admin.putSetting({ params: { key }, body: { value } }),
};

/** Stores a setting write response and returns it. */
export function storeSetting(queryClient: QueryClient, setting: SiteSetting): SiteSetting {
  queryClient.setQueryData(adminKeys.setting(setting.key), setting);
  return setting;
}
