/**
 * What each OG card shows: built from the same reads as the public pages (catalog snapshot,
 * profiles, categories, jams, guides), in English. Returns `null` when the entity has no public OG
 * image: missing, not public, NSFW, or a removed feature (kits, patch radar, milestones).
 */
import type { OG_ENTITY_TYPES } from '@sotf/contracts/jobs';
import { jam, jamEntry, mod, user } from '@sotf/db';
import { and, count, eq } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { getUserProfile } from '../catalog/users.ts';
import type { Ctx } from '../kernel/context.ts';
import { isDomainError } from '../kernel/errors.ts';
import type { OgCard, OgStat } from './template.ts';

export type OgEntityType = (typeof OG_ENTITY_TYPES)[number];

/** Statuses whose page is public (pending/rejected/removed pages carry no OG). */
const PUBLIC_MOD_STATUSES = new Set(['published', 'archived', 'unlisted']);

const compactFormat = new Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 3 });
const ratingFormat = new Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function compact(value: number): string {
  return compactFormat.format(Math.max(0, Math.round(value)));
}

function plural(count: number, one: string, other: string): string {
  return `${compact(count)} ${count === 1 ? one : other}`;
}

/** Known guide titles (the MDX guides of the web); unknown slugs are humanized. */
const GUIDE_TITLES: Readonly<Record<string, string>> = {
  install: 'How to install Sons of the Forest mods',
  developers: 'Build on the SOTF Mods API',
  about: 'About SOTF Mods',
};

function humanize(slug: string): string {
  const words = slug.replace(/[-_]+/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

async function orNull<T>(load: () => Promise<T>): Promise<T | null> {
  try {
    return await load();
  } catch (error) {
    if (isDomainError(error) && error.isClientError) return null;
    throw error;
  }
}

async function modCard(ctx: Ctx, config: CatalogConfig, id: number): Promise<OgCard | null> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = snapshot.byId.get(id);
  if (!entry || entry.nsfw || !PUBLIC_MOD_STATUSES.has(entry.status)) return null;
  const accentRows = await ctx.db.select({ logColor: mod.logColor }).from(mod).where(eq(mod.id, id)).limit(1);
  const accent = accentRows[0]?.logColor ?? null;
  const card = entry.card;
  const kindLabel = card.kind === 'build' ? 'Build' : card.kind === 'library' ? 'Library' : 'Mod';
  const category = card.category
    ? (snapshot.categoriesBySlug.get(card.category.slug)?.name ?? card.category.name)
    : null;

  const stats: OgStat[] = [{ icon: 'download', text: compact(card.downloads) }];
  if (card.ratingAvg !== null && card.ratingCount >= 3) {
    stats.push({ icon: 'star', text: ratingFormat.format(card.ratingAvg) });
  }
  if (card.latestVersion && stats.length < 3) stats.push({ text: `v${card.latestVersion}` });

  return {
    type: card.kind === 'build' ? 'build' : 'mod',
    seed: `mod:${card.id}`,
    kicker: [kindLabel, category].filter(Boolean).join(' · '),
    title: card.name,
    fallbackTitle: card.slug,
    byline: `by ${card.userDisplayName}`,
    stats,
    accent,
  };
}

async function userCard(ctx: Ctx, config: CatalogConfig, id: number): Promise<OgCard | null> {
  const [row] = await ctx.db.select({ handle: user.slug }).from(user).where(eq(user.id, id)).limit(1);
  if (!row) return null;
  const profile = await orNull(() => getUserProfile(ctx, config, row.handle));
  if (!profile) return null;
  const { stats } = profile;
  const readouts: OgStat[] = [];
  if (stats.modsCount + stats.buildsCount > 0) {
    readouts.push({ icon: 'box', text: plural(stats.modsCount + stats.buildsCount, 'release', 'releases') });
    readouts.push({ icon: 'download', text: compact(stats.downloadsTotal) });
  }
  readouts.push({ icon: 'users', text: plural(stats.followersCount, 'follower', 'followers') });
  return {
    type: 'user',
    seed: `user:${profile.id}`,
    kicker: profile.verifiedCreator ? 'Profile · Trusted' : 'Profile',
    title: profile.displayName,
    fallbackTitle: profile.handle,
    byline: `@${profile.handle}`,
    stats: readouts,
    accent: null,
  };
}

async function categoryCard(ctx: Ctx, config: CatalogConfig, slug: string): Promise<OgCard | null> {
  const snapshot = await getSnapshot(ctx, config);
  const category = snapshot.categoriesBySlug.get(slug);
  if (!category || category.retired) return null;
  const count = snapshot.entries.filter(
    (entry) => entry.categoryId === category.id && entry.status === 'published' && !entry.nsfw,
  ).length;
  const noun = category.kind === 'build' ? ['build', 'builds'] : ['mod', 'mods'];
  return {
    type: 'category',
    seed: `category:${category.slug}`,
    kicker: category.kind === 'build' ? 'Builds category' : 'Mods category',
    title: `${category.name} ${category.kind === 'build' ? 'builds' : 'mods'}`,
    fallbackTitle: category.slug,
    byline: 'Sons of the Forest',
    stats: [{ icon: 'box', text: plural(count, noun[0] as string, noun[1] as string) }],
    accent: null,
  };
}

function guideCard(slug: string): OgCard {
  const title = GUIDE_TITLES[slug] ?? humanize(slug);
  return {
    type: 'guide',
    seed: `guide:${slug}`,
    kicker: 'Guide',
    title,
    fallbackTitle: 'SOTF Mods guide',
    byline: 'RedLoader and Red Manager',
    stats: [],
    accent: null,
  };
}

/** `{modId}-{threshold}` of a milestone card, or null when malformed. */
export function parseMilestoneId(value: string): { modId: number; threshold: number } | null {
  const match = /^(\d{1,9})-(\d{1,9})$/.exec(value);
  if (!match) return null;
  const modId = Number(match[1]);
  const threshold = Number(match[2]);
  return modId > 0 && threshold > 0 ? { modId, threshold } : null;
}

const JAM_ACCENT_HEX: Readonly<Record<string, string>> = {
  signal: '#F2A93B',
  forest: '#4FA36B',
  ember: '#E8643C',
  ocean: '#3B9AD9',
  violet: '#8E6BD8',
};

async function jamCard(ctx: Ctx, id: number): Promise<OgCard | null> {
  const [row] = await ctx.db.select().from(jam).where(eq(jam.id, id)).limit(1);
  if (!row || row.phase === 'draft') return null;
  const [entries] = await ctx.db
    .select({ n: count() })
    .from(jamEntry)
    .where(and(eq(jamEntry.jamId, id), eq(jamEntry.status, 'active')));
  const stats: OgStat[] = [{ icon: 'box', text: plural(entries?.n ?? 0, 'entry', 'entries') }];
  return {
    type: 'jam',
    seed: `jam:${row.id}`,
    kicker: row.phase === 'results' || row.phase === 'archived' ? 'Jam · Results' : 'Jam',
    title: row.title,
    fallbackTitle: row.slug,
    byline:
      row.themeHidden && ['announced', 'draft'].includes(row.phase)
        ? 'Theme: secret'
        : row.theme
          ? `Theme: ${row.theme}`
          : null,
    stats,
    accent: JAM_ACCENT_HEX[row.accent] ?? null,
  };
}

/** The card of an entity, or null when it must not have a public OG image. */
export async function loadOgCard(
  ctx: Ctx,
  config: CatalogConfig,
  entityType: OgEntityType,
  entityId: number | string,
): Promise<OgCard | null> {
  const numericId = typeof entityId === 'number' ? entityId : /^\d+$/.test(entityId) ? Number(entityId) : null;
  switch (entityType) {
    case 'mod':
    case 'build':
      return numericId === null ? null : modCard(ctx, config, numericId);
    case 'user':
      return numericId === null ? null : userCard(ctx, config, numericId);
    case 'kit':
    case 'patch-radar':
    case 'milestone':
      return null;
    case 'category':
      return categoryCard(ctx, config, String(entityId).toLowerCase());
    case 'jam':
      return numericId === null ? null : jamCard(ctx, numericId);
    case 'guide':
      return guideCard(String(entityId).toLowerCase());
  }
}
