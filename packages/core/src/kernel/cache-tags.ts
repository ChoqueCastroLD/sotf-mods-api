/**
 * Cache tags and purges (PLAN §2.7). A write in core emits a domain event; the worker maps it to
 * cache tags (`tagsForEvent`) and enqueues `cdn.purge` (debounced 20 s per tag set), whose handler
 * (WP-61) empties the web LRU, purges Cloudflare and NOTIFYs `cache` to empty the API LRU.
 * `purge()` is also used directly (e.g. after deploys, `POST /internal/cdn/purge`).
 */
import { type CacheTag, cacheTag, isCacheTag, MAX_TAGS_PER_PURGE } from '@sotf/contracts/cache';
import type { DomainEvent } from '@sotf/contracts/domain-events';
import type { EnqueueOptions, Jobs } from './jobs.ts';

export { type CacheTag, cacheTag, isCacheTag, MAX_TAGS_PER_PURGE } from '@sotf/contracts/cache';

type Kind = 'mod' | 'library' | 'build';

function listingTags(p: { modId: number; authorId: number; kind: Kind; categorySlug: string | null }): CacheTag[] {
  const tags: CacheTag[] = [
    cacheTag.mod(p.modId),
    cacheTag.user(p.authorId),
    p.kind === 'build' ? 'list:builds' : 'list:mods',
    'home',
  ];
  if (p.categorySlug) tags.push(cacheTag.category(p.categorySlug));
  tags.push('feed', 'sitemap', 'search-index', 'legacy');
  return tags;
}

/**
 * Tags to purge when an event happens (the event → tags map of PLAN §2.7, plus milestones and
 * badges, which are shown on the mod page and the profile). Events that change no cached page
 * return `[]` (download counters in the HTML may lag ≤ 15 min, follow counters likewise).
 */
export function tagsForEvent(event: DomainEvent): CacheTag[] {
  switch (event.type) {
    case 'mod.published':
    case 'mod.updated':
    case 'mod.status_changed':
    case 'version.published':
    case 'version.status_changed':
      return listingTags(event.payload);
    case 'scan.completed':
    case 'comment.created':
    case 'comment.updated':
    case 'comment.deleted':
    case 'comment.visibility_changed':
    case 'comment.pinned':
    case 'comment.solution_marked':
    case 'comment.bug_resolved':
    case 'review.created':
    case 'review.updated':
    case 'review.deleted':
    case 'review.visibility_changed':
    case 'review.voted':
    case 'review.replied':
    case 'milestone.reached':
      return [cacheTag.mod(event.payload.modId)];
    case 'compat.aggregate_changed':
      return [cacheTag.mod(event.payload.modId), 'compat', 'home'];
    case 'game_build.created':
      return ['compat', 'home'];
    case 'kit.created':
    case 'kit.updated':
    case 'kit.deleted':
      return [cacheTag.kit(event.payload.kitId), 'list:kits', cacheTag.user(event.payload.ownerId)];
    case 'kit.followed':
    case 'kit.unfollowed':
    case 'kit.comment_created':
    case 'kit.comment_deleted':
      return [cacheTag.kit(event.payload.kitId)];
    case 'user.profile_updated':
      return [cacheTag.user(event.payload.userId)];
    case 'badge.awarded':
      return [cacheTag.user(event.payload.userId)];
    case 'award.created':
      return ['home', cacheTag.mod(event.payload.modId)];
    case 'jam.phase_changed':
    case 'jam.changed':
      return ['list:jams'];
    case 'request.created':
      return ['list:requests'];
    case 'request.commented':
    case 'request.adopted':
    case 'request.fulfilled':
    case 'request.changed':
      return ['list:requests', cacheTag.request(event.payload.requestId)];
    default:
      return [];
  }
}

/** Unique valid tags, in order. */
export function normalizeTags(tags: Iterable<string>): CacheTag[] {
  const out: CacheTag[] = [];
  for (const tag of tags) if (isCacheTag(tag) && !out.includes(tag)) out.push(tag);
  return out;
}

/** Splits tags into batches of at most `size` (Cloudflare accepts ≤ 30 per call). */
export function chunkTags<T>(tags: readonly T[], size: number = MAX_TAGS_PER_PURGE): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < tags.length; i += size) out.push(tags.slice(i, i + size));
  return out;
}

export interface PurgeResult {
  tags: CacheTag[];
  batches: number;
  /** Job ids (null when coalesced into an already queued purge of the same tags). */
  jobIds: Array<string | null>;
}

/**
 * Enqueues `cdn.purge` for the tags (debounced per tag set). Pass `tx` to make the purge part of a
 * transaction. Invalid tags are dropped; nothing is sent when none remain.
 */
export async function purge(
  jobs: Jobs,
  tags: Iterable<string>,
  reason: string,
  options: Pick<EnqueueOptions, 'tx' | 'singletonKey'> = {},
): Promise<PurgeResult> {
  const valid = normalizeTags(tags);
  const batches = chunkTags(valid);
  const jobIds: Array<string | null> = [];
  for (const [index, batch] of batches.entries()) {
    const singletonKey = options.singletonKey ? `${options.singletonKey}:${index}` : undefined;
    jobIds.push(
      await jobs.enqueue(
        'cdn.purge',
        { tags: batch, reason: reason.slice(0, 120) },
        { tx: options.tx, ...(singletonKey ? { singletonKey } : {}) },
      ),
    );
  }
  return { tags: valid, batches: batches.length, jobIds };
}
