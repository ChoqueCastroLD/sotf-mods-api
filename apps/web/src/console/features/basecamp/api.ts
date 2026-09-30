/**
 * Data of Basecamp (WP-80 on the WP-40/WP-52 backend, PLAN §7.5, §5.2 «Publicación y Basecamp»).
 *
 * Every creator key lives under `['studio', 'mods', …]`, the prefix the console stream invalidates
 * on a `mod.updated` event (`lib/stream.ts`), so the summary, the table, the editor and the charts
 * refresh by themselves when the listing or its status changes (moderation, another tab):
 *
 *   ['studio', 'mods', 'overview']                       the summary (KPIs, attention, table, milestone)
 *   ['studio', 'mods', 'list']                           «My mods»
 *   ['studio', 'mods', modId]                            owner view of one mod (shared with the wizard)
 *   ['studio', 'mods', modId, 'compat']                  compatibility by version and build
 *   ['studio', 'mods', 'analytics', mod|'all', range]    analytics
 *   ['studio', 'mods', 'inbox', types, state]            inbox (cursor pages)
 *
 * Badges (`['gamification', …]`) and the live counters (`['studio', 'live', modId]`, polled) sit
 * outside that prefix. Only `import type` from `@sotf/contracts/*`: the schema modules pull Zod,
 * which these route chunks do not ship; constants mirrored here are checked against the types.
 */
import type { CompatStatus, ModStatus, VersionStatus } from '@sotf/contracts/common';
import type { ModCompatDTO } from '@sotf/contracts/compat';
import type { BadgeCatalogDTO, UserBadgesDTO } from '@sotf/contracts/gamification';
import type {
  CoAuthoredModDTO,
  CoAuthorInviteDTO,
  FaqInput,
  KnownIssueDTO,
  KnownIssueInput,
  ModKnowledgeDTO,
  ModTeamDTO,
} from '@sotf/contracts/mod-knowledge';
import type { ModLiveDTO } from '@sotf/contracts/stats';
import type {
  AnalyticsDTO,
  DOWNLOAD_CHANNELS,
  InboxItemDTO,
  InboxPageDTO,
  StudioModDTO,
  StudioModListDTO,
  StudioModRowDTO,
  StudioModStateDTO,
  StudioOverviewDTO,
  StudioTransition,
  UpdateStudioModBody,
} from '@sotf/contracts/studio';
import { infiniteQueryOptions, type QueryClient, queryOptions } from '@tanstack/react-query';
import type { z } from 'zod';
import { api } from '../../lib/api.ts';
import { queryKeys } from '../../lib/query-keys.ts';
import { type AnalyticsRange, INBOX_KINDS, type InboxType } from './search.ts';

export {
  type AnalyticsRange,
  INBOX_KINDS,
  type InboxType,
  isInboxType,
  isRange,
  MOD_STATUS_VALUES,
  RANGES,
} from './search.ts';

export type Overview = z.output<typeof StudioOverviewDTO>;
export type Kpi = Overview['kpis']['downloads7d'];
export type KpiKey = keyof Overview['kpis'];
export type Attention = Overview['needsAttention'][number];
export type AttentionKind = Attention['kind'];
export type ModRow = z.output<typeof StudioModRowDTO>;
export type ModList = z.output<typeof StudioModListDTO>;
export type StudioMod = z.output<typeof StudioModDTO>;
export type ModState = z.output<typeof StudioModStateDTO>;
/** A version as its author sees it (`OwnerVersionDTO`: with the changelog source). */
export type Version = StudioMod['versions'][number];
export type Analytics = z.output<typeof AnalyticsDTO>;
export type DownloadChannel = (typeof DOWNLOAD_CHANNELS)[number];
export type InboxItem = z.output<typeof InboxItemDTO>;
export type InboxPage = z.output<typeof InboxPageDTO>;
export type InboxState = 'open' | 'all';
export type ModCompat = z.output<typeof ModCompatDTO>;
export type BadgeCatalog = z.output<typeof BadgeCatalogDTO>;
export type UserBadges = z.output<typeof UserBadgesDTO>;
export type ModLive = z.output<typeof ModLiveDTO>;
export type ListingPatch = z.input<typeof UpdateStudioModBody>;
export type Transition = StudioTransition;
export type { CompatStatus, ModStatus, VersionStatus };

export type Knowledge = ModKnowledgeDTO;
export type KnownIssue = KnownIssueDTO;
export type KnownIssueDraft = KnownIssueInput;
export type FaqDraft = FaqInput;
export type Team = ModTeamDTO;
export type TeamMember = Team['members'][number];
export type CoAuthorInvite = CoAuthorInviteDTO;
export type CoAuthoredMod = CoAuthoredModDTO;

/** `KNOWLEDGE_LIMITS` of the contracts (kept Zod-free). */
export const KNOWLEDGE_LIMITS = {
  issuesMax: 30,
  issueTitleMax: 140,
  issueBodyMax: 1500,
  issueVersionsMax: 80,
  faqMax: 20,
  questionMax: 160,
  answerMax: 1500,
  coAuthorsMax: 5,
} as const;

/** `DOWNLOAD_CHANNELS` of the contracts. */
export const CHANNELS = ['web', 'redmanager', 'client', 'api', 'unknown'] as const satisfies readonly DownloadChannel[];

/** `STUDIO_LIMITS` of the contracts (kept Zod-free). */
export const LIMITS = {
  nameMax: 80,
  shortDescriptionMax: 200,
  descriptionMax: 20_000,
  changelogMax: 10_000,
  tagsMax: 5,
  galleryMax: 10,
  supportLinksMax: 5,
  altMax: 300,
  yankReasonMax: 300,
  yankReasonMin: 3,
  removalReasonMin: 10,
  removalReasonMax: 1000,
  /** `REVIEW_RULES.replyMax` and `COMMENT_RULES.bodyMax`. */
  replyMax: 2000,
} as const;

/** Buckets of a range: days up to 90 days, weeks for the whole history. */
export function granularityOf(range: AnalyticsRange): 'day' | 'week' {
  return range === 'all' ? 'week' : 'day';
}

const studio = queryKeys.studioMods;

export const basecampKeys = {
  all: studio,
  overview: [...studio, 'overview'] as const,
  list: [...studio, 'list'] as const,
  mod: (modId: number) => queryKeys.studioMod(modId),
  compat: (modId: number) => [...queryKeys.studioMod(modId), 'compat'] as const,
  analytics: (modId: number | null, range: AnalyticsRange) => [...studio, 'analytics', modId ?? 'all', range] as const,
  inbox: (types: readonly InboxType[], state: InboxState, modId: number | null = null) =>
    [...studio, 'inbox', types.join(','), state, modId ?? 'all'] as const,
  inboxAll: [...studio, 'inbox'] as const,
  live: (modId: number) => ['studio', 'live', modId] as const,
  badgeCatalog: ['gamification', 'badges'] as const,
  userBadges: (handle: string) => ['gamification', 'user-badges', handle] as const,
  knowledge: (modId: number) => [...queryKeys.studioMod(modId), 'knowledge'] as const,
  team: (modId: number) => [...queryKeys.studioMod(modId), 'team'] as const,
  invites: [...studio, 'invites'] as const,
  coAuthored: [...studio, 'coauthored'] as const,
} as const;

// -----------------------------------------------------------------------------------------------
// Queries
// -----------------------------------------------------------------------------------------------

export const overviewQuery = queryOptions({
  queryKey: basecampKeys.overview,
  queryFn: ({ signal }): Promise<Overview> => api.studio.overview({}, { signal }),
  staleTime: 60_000,
});

export const modsQuery = queryOptions({
  queryKey: basecampKeys.list,
  queryFn: ({ signal }): Promise<ModList> => api.studio.listMods({}, { signal }),
  staleTime: 60_000,
});

export function studioModQuery(modId: number) {
  return queryOptions({
    queryKey: basecampKeys.mod(modId),
    queryFn: ({ signal }): Promise<StudioMod> => api.studio.getMod({ params: { id: modId } }, { signal }),
    staleTime: 30_000,
  });
}

export function modCompatQuery(modId: number) {
  return queryOptions({
    queryKey: basecampKeys.compat(modId),
    queryFn: ({ signal }): Promise<ModCompat> => api.compat.modCompat({ params: { id: modId } }, { signal }),
    staleTime: 60_000,
  });
}

export function analyticsQuery(modId: number | null, range: AnalyticsRange) {
  return queryOptions({
    queryKey: basecampKeys.analytics(modId, range),
    queryFn: ({ signal }): Promise<Analytics> =>
      api.studio.analytics(
        { query: { range, granularity: granularityOf(range), ...(modId ? { modId } : {}) } },
        { signal },
      ),
    staleTime: 5 * 60_000,
    placeholderData: (previous) => previous,
  });
}

export const INBOX_PAGE_SIZE = 25;

export function inboxQuery(types: readonly InboxType[], state: InboxState, modId: number | null = null) {
  return infiniteQueryOptions({
    queryKey: basecampKeys.inbox(types, state, modId),
    queryFn: ({ pageParam, signal }): Promise<InboxPage> =>
      api.studio.inbox(
        {
          query: {
            state,
            limit: INBOX_PAGE_SIZE,
            ...(types.length > 0 && types.length < INBOX_KINDS.length ? { type: [...types] } : {}),
            ...(modId !== null ? { modId } : {}),
            ...(pageParam ? { cursor: pageParam } : {}),
          },
        },
        { signal },
      ),
    initialPageParam: null as string | null,
    getNextPageParam: (page: InboxPage) => page.nextCursor,
    staleTime: 30_000,
  });
}

/** Live counters of one mod (public endpoint, edge-cached 30 s). */
export function modLiveQuery(modId: number) {
  return queryOptions({
    queryKey: basecampKeys.live(modId),
    queryFn: ({ signal }): Promise<ModLive> => api.stats.modLive({ params: { id: modId } }, { signal }),
    staleTime: 30_000,
  });
}

export const badgeCatalogQuery = queryOptions({
  queryKey: basecampKeys.badgeCatalog,
  queryFn: ({ signal }): Promise<BadgeCatalog> => api.gamification.badges({}, { signal }),
  staleTime: 60 * 60_000,
});

export function userBadgesQuery(handle: string) {
  return queryOptions({
    queryKey: basecampKeys.userBadges(handle),
    queryFn: ({ signal }): Promise<UserBadges> => api.gamification.userBadges({ params: { handle } }, { signal }),
    staleTime: 5 * 60_000,
  });
}

export function knowledgeQuery(modId: number) {
  return queryOptions({
    queryKey: basecampKeys.knowledge(modId),
    queryFn: ({ signal }): Promise<Knowledge> =>
      api.modKnowledge.studioKnowledge({ params: { id: modId } }, { signal }),
    staleTime: 30_000,
  });
}

export function teamQuery(modId: number) {
  return queryOptions({
    queryKey: basecampKeys.team(modId),
    queryFn: ({ signal }): Promise<Team> => api.modKnowledge.team({ params: { id: modId } }, { signal }),
    staleTime: 30_000,
  });
}

export const invitesQuery = queryOptions({
  queryKey: basecampKeys.invites,
  queryFn: ({ signal }) => api.modKnowledge.myInvites({}, { signal }),
  staleTime: 30_000,
});

export const coAuthoredQuery = queryOptions({
  queryKey: basecampKeys.coAuthored,
  queryFn: ({ signal }) => api.modKnowledge.myCoAuthored({}, { signal }),
  staleTime: 60_000,
});

// -----------------------------------------------------------------------------------------------
// Mutations
// -----------------------------------------------------------------------------------------------

export interface GalleryItemInput {
  mediaId: string;
  alt: string | null;
  position: number;
}

export const basecampApi = {
  updateMod: (modId: number, body: ListingPatch) => api.studio.updateMod({ params: { id: modId }, body }),
  putMedia: (modId: number, thumbnailMediaId: string | null, gallery: readonly GalleryItemInput[]) =>
    api.studio.putMedia({ params: { id: modId }, body: { thumbnailMediaId, gallery: [...gallery] } }),
  editChangelog: (modId: number, versionId: number, changelogMd: string) =>
    api.studio.updateVersion({ params: { id: modId, vid: versionId }, body: { changelogMd } }),
  setTestedBuilds: (modId: number, versionId: number, testedGameBuildIds: readonly number[]) =>
    api.studio.updateVersion({
      params: { id: modId, vid: versionId },
      body: { testedGameBuildIds: [...testedGameBuildIds] },
    }),
  yank: (modId: number, versionId: number, reason: string) =>
    api.studio.updateVersion({ params: { id: modId, vid: versionId }, body: { yank: { reason: reason.trim() } } }),
  unyank: (modId: number, versionId: number) =>
    api.studio.updateVersion({ params: { id: modId, vid: versionId }, body: { unyank: true } }),
  archive: (modId: number, successorModId?: number) =>
    api.studio.archive({ params: { id: modId }, body: successorModId ? { successorModId } : {} }),
  unlist: (modId: number) => api.studio.unlist({ params: { id: modId } }),
  /** Publishes an unlisted or archived mod again; resubmits a rejected one. */
  publish: (modId: number) => api.studio.publish({ params: { id: modId } }),
  requestRemoval: (modId: number, reason: string) =>
    api.studio.requestRemoval({ params: { id: modId }, body: { reason: reason.trim() } }),
  replyToReview: (reviewId: number, bodyMd: string) =>
    api.reviews.reply({ params: { id: reviewId }, body: { bodyMd: bodyMd.trim() } }),
  replyToComment: (modId: number, parentId: number, bodyMd: string, turnstileToken?: string) =>
    api.comments.create({
      params: { id: modId },
      body: { bodyMd: bodyMd.trim(), parentId, isBugReport: false, ...(turnstileToken ? { turnstileToken } : {}) },
    }),
  resolveBug: (commentId: number, versionId: number) =>
    api.comments.resolveBug({ params: { id: commentId }, body: { versionId } }),
  acknowledgeCompat: (reportId: number, fixedInVersionId?: number) =>
    api.compat.acknowledgeReport({ params: { id: reportId }, body: fixedInVersionId ? { fixedInVersionId } : {} }),
};

export const knowledgeApi = {
  putKnownIssues: (modId: number, items: readonly KnownIssueDraft[]) =>
    api.modKnowledge.putKnownIssues({ params: { id: modId }, body: { items: [...items] } }),
  putFaq: (modId: number, items: readonly FaqDraft[]) =>
    api.modKnowledge.putFaq({ params: { id: modId }, body: { items: [...items] } }),
  invite: (modId: number, handle: string) =>
    api.modKnowledge.invite({ params: { id: modId }, body: { handle: handle.trim().replace(/^@/, '') } }),
  removeMember: (modId: number, userId: number) => api.modKnowledge.removeMember({ params: { id: modId, userId } }),
  accept: (inviteId: number) => api.modKnowledge.acceptInvite({ params: { id: inviteId } }),
  decline: (inviteId: number) => api.modKnowledge.declineInvite({ params: { id: inviteId } }),
};

/** Stores a fresh owner view and refreshes every list and chart it appears in. */
export function storeStudioMod(queryClient: QueryClient, mod: StudioMod): void {
  queryClient.setQueryData(basecampKeys.mod(mod.mod.id), mod);
  void refreshLists(queryClient);
}

/** Summary, table and inbox (not the open editor, which the caller already updated). */
export function refreshLists(queryClient: QueryClient): Promise<void> {
  return Promise.all([
    queryClient.invalidateQueries({ queryKey: basecampKeys.overview }),
    queryClient.invalidateQueries({ queryKey: basecampKeys.list }),
    queryClient.invalidateQueries({ queryKey: basecampKeys.inboxAll }),
  ]).then(() => undefined);
}

/** Applies a status transition to the cached owner view at once (the refetch confirms it). */
export function applyState(queryClient: QueryClient, state: ModState): void {
  queryClient.setQueryData<StudioMod>(basecampKeys.mod(state.modId), (current) =>
    current
      ? {
          ...current,
          mod: { ...current.mod, status: state.status },
          statusReason: state.statusReason,
          allowedTransitions: state.allowedTransitions,
        }
      : current,
  );
  void queryClient.invalidateQueries({ queryKey: basecampKeys.mod(state.modId) });
  void refreshLists(queryClient);
}

/** Replaces one version in the cached owner view. */
export function storeVersion(queryClient: QueryClient, modId: number, version: Version): void {
  queryClient.setQueryData<StudioMod>(basecampKeys.mod(modId), (current) =>
    current
      ? { ...current, versions: current.versions.map((entry) => (entry.id === version.id ? version : entry)) }
      : current,
  );
  void queryClient.invalidateQueries({ queryKey: basecampKeys.mod(modId) });
}

// -----------------------------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------------------------

/**
 * Media id of a processed image URL (`…/media/{uuid}/{w}.webp`, `storage/keys.ts`); null for
 * legacy images not adopted yet (they cannot be referenced by `PUT /media`).
 */
const MEDIA_URL = /\/media\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\//i;

/** Cover media id of the owner view (`media.thumbnailMediaId`; parsed from the URL as a fallback). */
export function coverMediaIdOf(studio: Pick<StudioMod, 'mod' | 'media'>): string | null {
  return studio.media?.thumbnailMediaId ?? mediaIdOf(studio.mod.thumbnail?.url);
}

/** Media id of each gallery image (`media.gallery[i].mediaId`, null for legacy images not processed yet). */
export function galleryMediaIds(studio: Pick<StudioMod, 'mod' | 'media'>): Array<string | null> {
  return studio.mod.gallery.map((image, index) => {
    const entry = studio.media?.gallery[index];
    if (entry && entry.url === image.url) return entry.mediaId;
    return mediaIdOf(image.url);
  });
}

export function mediaIdOf(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = MEDIA_URL.exec(url);
  return match?.[1] ? match[1].toLowerCase() : null;
}

/** CSV export URL (same origin; the session cookie authorizes it). */
export function analyticsCsvHref(modId: number | null, range: AnalyticsRange): string {
  const params = new URLSearchParams({ range, granularity: granularityOf(range) });
  if (modId) params.set('modId', String(modId));
  return `/api/v2/studio/analytics.csv?${params.toString()}`;
}
