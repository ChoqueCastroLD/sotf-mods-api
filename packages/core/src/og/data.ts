/**
 * What each OG card shows (PLAN §4.5 «OG» column, §8.6): built from the same reads as the public
 * pages (catalog snapshot, profiles, kits, Patch Radar), in English. Returns `null` when the
 * entity has no public OG image: missing, not public, or NSFW («sin OG explícita», PLAN §4.5).
 */
import type { OG_ENTITY_TYPES } from '@sotf/contracts/jobs';
import { mod, modMilestone, user } from '@sotf/db';
import { and, eq } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { getUserProfile } from '../catalog/users.ts';
import { getPatchRadar } from '../compat/read.ts';
import { currentGameBuild } from '../compat/registry.ts';
import type { Ctx } from '../kernel/context.ts';
import { isDomainError } from '../kernel/errors.ts';
import { getKit } from '../kits/service.ts';
import { OG_COLLAGE_MAX, type OgCard, type OgStat } from './template.ts';

export type OgEntityType = (typeof OG_ENTITY_TYPES)[number];

/** Statuses whose page is public (pending/rejected/removed pages carry no OG). */
const PUBLIC_MOD_STATUSES = new Set(['published', 'archived', 'unlisted']);

const compactFormat = new Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 3 });
const ratingFormat = new Intl.NumberFormat('en', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function compact(value: number): string {
  return compactFormat.format(Math.max(0, Math.round(value)));
}

/** `1.0.4` → `1.0.x` (the readout of PLAN §8.6); other labels unchanged. */
export function buildFamily(label: string): string {
  const match = /^(\d+)\.(\d+)\.\d+/.exec(label.trim());
  return match ? `${match[1]}.${match[2]}.x` : label.trim();
}

function plural(count: number, one: string, other: string): string {
  return `${compact(count)} ${count === 1 ? one : other}`;
}

/** Known guide titles (the MDX guides of the web); unknown slugs are humanized. */
const GUIDE_TITLES: Readonly<Record<string, string>> = {
  install: 'How to install Sons of the Forest mods',
  developers: 'Build on the SOTF Mods API',
  about: 'About SOTF Mods',
  brand: 'SOTF Mods brand',
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
  const [accentRows, build] = await Promise.all([
    ctx.db.select({ logColor: mod.logColor }).from(mod).where(eq(mod.id, id)).limit(1),
    currentGameBuild(ctx.db),
  ]);
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
  if (build && card.kind !== 'build') {
    if (card.compatStatus === 'works')
      stats.push({ icon: 'check', text: `Works on ${buildFamily(build.label)}`, tone: 'good' });
    else if (card.compatStatus === 'broken') {
      stats.push({ icon: 'cross', text: `Broken on ${buildFamily(build.label)}`, tone: 'bad' });
    }
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
    kicker: profile.verifiedCreator
      ? 'Verified creator'
      : stats.modsCount + stats.buildsCount > 0
        ? 'Creator'
        : 'Survivor',
    title: profile.displayName,
    fallbackTitle: profile.handle,
    byline: `@${profile.handle}`,
    stats: readouts,
    accent: null,
  };
}

async function kitCard(ctx: Ctx, config: CatalogConfig, id: number): Promise<OgCard | null> {
  const result = await orNull(() => getKit(ctx, { config }, id));
  const kit = result?.kit;
  if (kit?.visibility !== 'public') return null;
  const readouts: OgStat[] = [{ icon: 'box', text: plural(kit.itemsCount, 'mod', 'mods') }];
  if (kit.compat.works > 0)
    readouts.push({ icon: 'check', text: `${compact(kit.compat.works)} working`, tone: 'good' });
  if (kit.followersCount > 0)
    readouts.push({ icon: 'users', text: plural(kit.followersCount, 'follower', 'followers') });
  // Knolling collage (PLAN §7.8): the custom cover alone, or the items' thumbnails.
  const images = kit.cover ? [kit.cover.url] : kit.previewThumbnails.slice(0, OG_COLLAGE_MAX);
  return {
    ...(images.length > 0 ? { images } : {}),
    type: 'kit',
    seed: `kit:${kit.id}`,
    kicker: kit.isStaffPick ? 'Mod kit · Staff pick' : 'Mod kit',
    title: kit.name,
    fallbackTitle: kit.slug,
    byline: `by ${kit.owner.displayName}`,
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

async function patchRadarCard(ctx: Ctx, config: CatalogConfig, key: string): Promise<OgCard | null> {
  const buildId = /^\d+$/.test(key) ? Number(key) : undefined;
  const radar = await orNull(() => getPatchRadar(ctx, { config }, buildId));
  if (!radar) return null;
  const label = radar.build.label;
  return {
    type: 'patch-radar',
    seed: `patch-radar:${radar.build.id}`,
    kicker: 'Patch Radar',
    title: `Do SOTF mods work on patch ${label}?`,
    fallbackTitle: `Patch ${label}`,
    byline: `Top ${radar.works.length + radar.broken.length + radar.pending.length} mods, field-tested`,
    stats: [
      { icon: 'check', text: `${radar.works.length} work`, tone: 'good' },
      { icon: 'cross', text: `${radar.broken.length} broken`, tone: 'bad' },
      { text: `${radar.pending.length} pending` },
    ],
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
    byline: 'RedLoader & RedManager',
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

async function milestoneCard(ctx: Ctx, config: CatalogConfig, id: string): Promise<OgCard | null> {
  const parsed = parseMilestoneId(id);
  if (!parsed) return null;
  const [reached] = await ctx.db
    .select({ threshold: modMilestone.threshold })
    .from(modMilestone)
    .where(and(eq(modMilestone.modId, parsed.modId), eq(modMilestone.threshold, parsed.threshold)))
    .limit(1);
  if (!reached) return null;
  const snapshot = await getSnapshot(ctx, config);
  const entry = snapshot.byId.get(parsed.modId);
  if (!entry || entry.nsfw || !PUBLIC_MOD_STATUSES.has(entry.status)) return null;
  const card = entry.card;
  const accentRows = await ctx.db.select({ logColor: mod.logColor }).from(mod).where(eq(mod.id, parsed.modId)).limit(1);
  return {
    type: 'milestone',
    seed: `milestone:${parsed.modId}-${parsed.threshold}`,
    kicker: `Milestone · ${compact(parsed.threshold)} downloads`,
    title: card.name,
    fallbackTitle: card.slug,
    byline: `by ${card.userDisplayName}`,
    stats: [{ icon: 'download', text: `${compact(parsed.threshold)} downloads` }],
    accent: accentRows[0]?.logColor ?? null,
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
      return numericId === null ? null : kitCard(ctx, config, numericId);
    case 'category':
      return categoryCard(ctx, config, String(entityId).toLowerCase());
    case 'patch-radar':
      return patchRadarCard(ctx, config, String(entityId));
    case 'milestone':
      return milestoneCard(ctx, config, String(entityId));
    case 'guide':
      return guideCard(String(entityId).toLowerCase());
  }
}
