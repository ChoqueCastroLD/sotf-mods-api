/**
 * Which public pages a purge touches (PLAN §2.7 step 4, §8.6 IndexNow): maps cache tags to the
 * canonical, locale-less paths of the entities, so `cdn.purge` can enqueue `indexnow.ping` with the
 * URLs of every locale.
 *
 * Only purges that come from publishing, editing or retiring content announce URLs (a comment or a
 * review changes the HTML but is not worth a recrawl request):
 *
 * - listing events of mods/builds carry `sitemap` → the mod page, its versions page, the author's
 *   profile and the category hub;
 * - `kit.*` events carry `list:kits` → the kit page (public kits only);
 * - `user.profile_updated` (`reason = event:user.profile_updated`) → the profile.
 *
 * Deploy purges (`html`) and everything else announce nothing. NSFW mods, pending drafts and kits
 * that are not public are never announced.
 */
import type { CacheTag } from '@sotf/contracts/cache';
import { categoryPath, kitPath, modPath, profilePath, versionsPath } from '@sotf/contracts/seo';
import { type Database, kit, mod, user } from '@sotf/db';
import { eq, inArray } from 'drizzle-orm';
import { kindOf } from '../catalog/snapshot.ts';

/** Mod statuses whose URL answers something worth recrawling (200, 301 to a successor, 410…). */
const ANNOUNCED_MOD_STATUSES = new Set(['published', 'archived', 'unlisted', 'removed', 'rejected']);

export interface PurgeSubjects {
  modIds: number[];
  userIds: number[];
  kitIds: number[];
  categorySlugs: string[];
}

function idsOf(tags: readonly string[], prefix: string): number[] {
  const out = new Set<number>();
  for (const tag of tags) {
    if (!tag.startsWith(prefix)) continue;
    const id = Number(tag.slice(prefix.length));
    if (Number.isSafeInteger(id) && id > 0) out.add(id);
  }
  return [...out];
}

/** Entities of a purge that deserve an IndexNow ping (see the module comment). */
export function indexNowSubjects(tags: readonly CacheTag[], reason: string): PurgeSubjects {
  const contentChange = tags.includes('sitemap');
  const kitChange = tags.includes('list:kits') || reason.startsWith('event:kit.');
  const profileChange = reason === 'event:user.profile_updated';
  return {
    modIds: contentChange ? idsOf(tags, 'mod:') : [],
    userIds: contentChange || profileChange ? idsOf(tags, 'user:') : [],
    kitIds: kitChange ? idsOf(tags, 'kit:') : [],
    categorySlugs: contentChange
      ? tags.filter((tag) => tag.startsWith('category:')).map((tag) => tag.slice('category:'.length))
      : [],
  };
}

/** Canonical, locale-less paths of the subjects (deduplicated, stable order). */
export async function pathsForSubjects(db: Database, subjects: PurgeSubjects): Promise<string[]> {
  const paths = new Set<string>();
  const userIds = new Set(subjects.userIds);

  if (subjects.modIds.length > 0) {
    const rows = await db
      .select({
        id: mod.id,
        slug: mod.slug,
        type: mod.type,
        status: mod.status,
        isNSFW: mod.isNSFW,
        userId: mod.userId,
        handle: user.slug,
      })
      .from(mod)
      .innerJoin(user, eq(user.id, mod.userId))
      .where(inArray(mod.id, subjects.modIds));
    for (const row of rows) {
      if (row.isNSFW || !ANNOUNCED_MOD_STATUSES.has(row.status ?? 'published')) continue;
      const kind = kindOf(row.type);
      paths.add(modPath(kind, row.handle, row.slug));
      if (row.status === 'published') paths.add(versionsPath(kind, row.handle, row.slug));
      if (row.userId !== null) userIds.add(row.userId);
    }
  }

  if (subjects.kitIds.length > 0) {
    const rows = await db
      .select({ slug: kit.slug, visibility: kit.visibility, handle: user.slug })
      .from(kit)
      .innerJoin(user, eq(user.id, kit.ownerId))
      .where(inArray(kit.id, subjects.kitIds));
    for (const row of rows) {
      // Deleted public kits are announced too: their URL now answers 404/410.
      if (row.visibility !== 'public') continue;
      paths.add(kitPath(row.handle, row.slug));
    }
  }

  if (userIds.size > 0) {
    const rows = await db
      .select({ handle: user.slug })
      .from(user)
      .where(inArray(user.id, [...userIds]));
    for (const row of rows) paths.add(profilePath(row.handle));
  }

  for (const slug of subjects.categorySlugs) paths.add(categoryPath(slug));
  return [...paths];
}
