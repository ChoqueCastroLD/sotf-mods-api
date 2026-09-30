/**
 * Compact Cmd+K index (PLAN §7.9, `GET /api/v2/search/index?locale=`): one document per locale
 * with every listable mod and build, public kits, creators, categories, pages and the trending ids.
 * Tuples keep it small (≈ 15 KB br): the client (WP-72) feeds them to MiniSearch. Only processed
 * 64 px variants are shipped as thumbnails (never a legacy original). Paths are unprefixed; the
 * client adds the locale prefix.
 */
import type { Locale } from '@sotf/contracts/common';
import { SEARCH_INDEX_VERSION, type SearchIndexDTO } from '@sotf/contracts/search';
import { categoryPath, kitPath, profilePath } from '@sotf/contracts/seo';
import { runListQuery } from '../catalog/listing.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { compareCategories, getSnapshot, isListable } from '../catalog/snapshot.ts';
import { cached, rows } from '../catalog/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { SITE_PAGES } from './pages.ts';

export const SEARCH_INDEX_TTL_MS = 60_000;
const TRENDING = 10;

interface KitRow {
  id: number;
  name: string;
  slug: string;
  ownerHandle: string;
  itemsCount: number;
}

/** Builds the index of a locale (cached 60 s per locale, tag `search-index`). */
export function getSearchIndex(ctx: Ctx, config: CatalogConfig, locale: Locale): Promise<SearchIndexDTO> {
  return cached<SearchIndexDTO>(
    ctx,
    { name: 'search:index', max: 20, ttlMs: SEARCH_INDEX_TTL_MS },
    locale,
    async () => {
      const [snapshot, kits] = await Promise.all([
        getSnapshot(ctx, config),
        rows<KitRow>(
          ctx.db,
          `SELECT k."id", k."name", k."slug", u."slug" AS "ownerHandle", k."itemsCount"
           FROM "Kit" k JOIN "User" u ON u."id" = k."ownerId"
          WHERE k."visibility" = 'public' AND k."deletedAt" IS NULL AND k."itemsCount" > 0
            AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
          ORDER BY k."followersCount" DESC, k."id"`,
        ),
      ]);
      const listed = snapshot.entries
        .filter((e) => isListable(snapshot, e))
        .sort((a, b) => b.downloads - a.downloads || a.id - b.id);

      const mods: SearchIndexDTO['mods'] = listed.map((e) => [
        e.id,
        e.kind,
        e.name,
        e.userHandle,
        e.categoryId === null ? null : (snapshot.categories.get(e.categoryId)?.slug ?? null),
        e.tagSlugs.join(','),
        e.manifestId,
        e.downloads,
        e.compatStatus,
        e.thumb64Url,
        e.canonicalPath,
      ]);

      const creators = new Map<number, number>();
      for (const e of listed) creators.set(e.userId, (creators.get(e.userId) ?? 0) + 1);
      const users: SearchIndexDTO['users'] = [...creators.entries()]
        .map(([userId, count]) => ({ author: snapshot.authors.get(userId), count }))
        .filter((x): x is { author: NonNullable<typeof x.author>; count: number } => x.author !== undefined)
        .sort((a, b) => b.count - a.count || a.author.ref.id - b.author.ref.id)
        .map(({ author, count }) => [
          author.ref.id,
          author.ref.handle,
          author.ref.displayName,
          count,
          profilePath(author.ref.handle),
        ]);

      const categoryCounts = new Map<number, number>();
      for (const e of listed)
        if (e.categoryId !== null) categoryCounts.set(e.categoryId, (categoryCounts.get(e.categoryId) ?? 0) + 1);
      const categories: SearchIndexDTO['categories'] = [...snapshot.categories.values()]
        .filter((c) => !c.retired && (categoryCounts.get(c.id) ?? 0) > 0)
        .sort(compareCategories)
        .map((c) => [c.slug, c.names[locale] ?? c.name, categoryPath(c.slug)]);

      const trending = runListQuery(
        snapshot,
        {
          type: 'all',
          compat: 'any',
          sort: 'trending',
          order: 'desc',
          page: 1,
          pageSize: TRENDING,
        } as Parameters<typeof runListQuery>[1],
        ctx.clock.now(),
      ).items.map((e) => e.id);

      return {
        value: {
          v: SEARCH_INDEX_VERSION,
          locale,
          generatedAt: ctx.clock.now().toISOString(),
          mods,
          kits: kits.map((k) => [k.id, k.name, k.ownerHandle, k.itemsCount, kitPath(k.ownerHandle, k.slug)]),
          users,
          categories,
          pages: SITE_PAGES.map((p) => [p.key, p.titles[locale], p.path]),
          trending,
        },
        tags: ['search-index', 'list:mods', 'list:builds', 'list:kits'],
      };
    },
  );
}
