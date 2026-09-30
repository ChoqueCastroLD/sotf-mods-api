/**
 * Lookups shared by the notification rules, the email digests and the Discord announcer: compact
 * references to mods (name, canonical path, author) and users (display name, handle), plus the
 * plain-text excerpt of a comment.
 */
import type { ModKind } from '@sotf/contracts/common';
import { modPath } from '@sotf/contracts/seo';
import { type Executor, mod, user } from '@sotf/db';
import { eq, inArray } from 'drizzle-orm';
import { displayNameOf } from '../auth/users.ts';

export interface ModRef {
  id: number;
  name: string;
  slug: string;
  kind: ModKind;
  status: string;
  nsfw: boolean;
  authorId: number | null;
  authorHandle: string | null;
  authorName: string | null;
  /** Canonical site path (`/mods/:user/:slug`), null when the mod has no author. */
  path: string | null;
}

export interface UserRef {
  id: number;
  handle: string;
  name: string;
}

export function modKindOf(type: string | null): ModKind {
  if (type === 'Build') return 'build';
  if (type === 'Library') return 'library';
  return 'mod';
}

export async function loadModRefs(db: Executor, ids: readonly number[]): Promise<Map<number, ModRef>> {
  const unique = [...new Set(ids)];
  const out = new Map<number, ModRef>();
  if (unique.length === 0) return out;
  const rows = await db
    .select({
      id: mod.id,
      name: mod.name,
      slug: mod.slug,
      type: mod.type,
      status: mod.status,
      nsfw: mod.isNSFW,
      authorId: mod.userId,
      authorHandle: user.slug,
      authorName: user.name,
      authorDisplayName: user.displayName,
    })
    .from(mod)
    .leftJoin(user, eq(user.id, mod.userId))
    .where(inArray(mod.id, unique));
  for (const r of rows) {
    const kind = modKindOf(r.type);
    out.set(r.id, {
      id: r.id,
      name: r.name,
      slug: r.slug,
      kind,
      status: r.status,
      nsfw: r.nsfw,
      authorId: r.authorId,
      authorHandle: r.authorHandle,
      authorName: r.authorHandle
        ? displayNameOf({ displayName: r.authorDisplayName, name: r.authorName ?? '', slug: r.authorHandle })
        : null,
      path: r.authorHandle ? modPath(kind, r.authorHandle, r.slug) : null,
    });
  }
  return out;
}

export async function loadModRef(db: Executor, id: number): Promise<ModRef | null> {
  return (await loadModRefs(db, [id])).get(id) ?? null;
}

export async function loadUserRefs(db: Executor, ids: readonly number[]): Promise<Map<number, UserRef>> {
  const unique = [...new Set(ids)];
  const out = new Map<number, UserRef>();
  if (unique.length === 0) return out;
  const rows = await db
    .select({ id: user.id, slug: user.slug, name: user.name, displayName: user.displayName })
    .from(user)
    .where(inArray(user.id, unique));
  for (const r of rows) out.set(r.id, { id: r.id, handle: r.slug, name: displayNameOf(r) });
  return out;
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
  '&nbsp;': ' ',
};

/**
 * Plain-text excerpt (≤ `max` characters) of a comment or review: Markdown source when present,
 * otherwise the legacy HTML-escaped text; tags, Markdown punctuation and extra whitespace removed.
 */
export function plainExcerpt(source: string | null | undefined, max = 200): string {
  let text = (source ?? '').replace(/&(?:amp|lt|gt|quot|#39|#x27|nbsp);/g, (e) => ENTITIES[e] ?? e);
  text = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~>#]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}
