/**
 * @mentions of comments, reviews and author replies (PLAN §7.6, WP-15 backlog "Menciones").
 *
 * The Markdown renderer is synchronous by design, so mentions are resolved in three steps:
 * `extractMentions(body)` → one query for every handle (`lower("slug")`, index 0047) → a
 * map-backed `resolveMention` that links known users to `/profile/{handle}`. Unknown handles,
 * deleted and banned accounts stay plain text and are never notified. The ids returned here feed
 * `mentionedUserIds` of `comment.created` / `comment.updated` (the notification consumer does not
 * parse handles).
 */

import type { Executor } from '@sotf/db';
import { extractMentions, type MarkdownProfile, type MentionTarget, renderMarkdown } from '@sotf/markdown';
import { sql } from 'drizzle-orm';
import { rows } from '../legacy/db.ts';

/** More distinct handles than this in one text are not resolved (anti-spam, one bounded query). */
export const MAX_MENTIONS_PER_TEXT = 20;

export interface MentionedUser {
  id: number;
  /** Handle as stored ("User"."slug"), used in the profile URL. */
  handle: string;
}

/** Lower-cased handle → user, for the handles of a text that belong to live accounts. */
export type MentionMap = ReadonlyMap<string, MentionedUser>;

/** Loads the users behind the `@handles` of `md` in one query. */
export async function loadMentions(db: Executor, md: string, profile: MarkdownProfile = 'lite'): Promise<MentionMap> {
  const handles = extractMentions(md, profile).slice(0, MAX_MENTIONS_PER_TEXT);
  if (handles.length === 0) return new Map();
  const found = await rows<{ id: number; slug: string; lower: string }>(
    db,
    sql`SELECT u."id", u."slug", lower(u."slug") AS "lower"
          FROM "User" u
         WHERE lower(u."slug") IN (${sql.join(
           handles.map((h) => sql`${h}`),
           sql`, `,
         )})
           AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
         ORDER BY u."id"`,
  );
  const map = new Map<string, MentionedUser>();
  // "User_slug_key" is case-sensitive: on a case-only clash the oldest account wins.
  for (const row of found) if (!map.has(row.lower)) map.set(row.lower, { id: row.id, handle: row.slug });
  return map;
}

/** `resolveMention` of the renderer for a loaded map. */
export function mentionResolver(map: MentionMap): (handle: string) => MentionTarget | null {
  return (handle) => {
    const user = map.get(handle.toLowerCase());
    return user ? { href: `/profile/${encodeURIComponent(user.handle)}` } : null;
  };
}

/** Ids of the mentioned users, without `excludeUserId` (nobody is notified of their own mention). */
export function mentionedIds(map: MentionMap, mentions: readonly string[], excludeUserId: number | null): number[] {
  const ids = new Set<number>();
  for (const handle of mentions) {
    const user = map.get(handle.toLowerCase());
    if (user && user.id !== excludeUserId) ids.add(user.id);
  }
  return [...ids];
}

export interface RenderedLite {
  /** NFC Markdown source as stored in `*Md`. */
  md: string;
  html: string;
  text: string;
  /** Ids of the live users mentioned (without the author). */
  mentionedUserIds: number[];
  /** Links leaving the site, as the browser resolves them (WP-15 backlog: never re-derived). */
  externalLinks: string[];
}

/**
 * Renders user text with the `lite` profile (comments, reviews, replies) and resolves its
 * mentions. The input is normalised to NFC first so the stored source and the HTML agree.
 */
export async function renderUserText(db: Executor, md: string, authorId: number | null): Promise<RenderedLite> {
  const source = md.normalize('NFC');
  const map = await loadMentions(db, source);
  const result = renderMarkdown(source, { profile: 'lite', resolveMention: mentionResolver(map) });
  return {
    md: source,
    html: result.html,
    text: result.text,
    mentionedUserIds: mentionedIds(map, result.mentions, authorId),
    externalLinks: result.links.filter((link) => link.external && link.kind === 'link').map((link) => link.href),
  };
}
