/**
 * Public modpacks API (2026-11): `GET /api/modpacks`, `/api/modpacks/slug/:userSlug/:slug` and its
 * `/download` (`@sotf/contracts/modpacks`). The same shape as the legacy `/api/mods` (`status`,
 * `data`, `meta.pages`), written in key order; the business rules are the kits' (`@sotf/core/kits`).
 *
 * - Only approved public modpacks are listed or served (pending ones are 404 here).
 * - Mods that are no longer approved stay in the list with `available: false` and are left out of
 *   the `.sotfprofile`.
 * - The download answers the launcher's own profile format as an attachment
 *   (`{slug}.sotfprofile`), counts one download, and is limited per address.
 */

import type { KitCardDTO, KitDTO } from '@sotf/contracts/kits';
import { legacyListMeta } from '@sotf/contracts/legacy';
import { MODPACK_DOWNLOADS_PER_MINUTE, modpackEndpoints, parseModpacksQuery } from '@sotf/contracts/modpacks';
import { errors } from '@sotf/core';
import { getKitBySlug, type KitsDeps, kitProfile, listKits, recordKitDownload } from '@sotf/core/kits/index';
import { catalogConfigOf } from '../modules/catalog/index.ts';
import type { LegacyContext } from './context.ts';

function absolute(siteUrl: string, path: string): string {
  return `${siteUrl.replace(/\/+$/, '')}${path}`;
}

function listItem(siteUrl: string, card: KitCardDTO) {
  return {
    id: card.id,
    name: card.name,
    slug: card.slug,
    url: absolute(siteUrl, card.canonicalPath),
    imageUrl: card.cover?.url ?? card.previewThumbnails[0] ?? '',
    modsCount: card.itemsCount,
    downloads: card.downloads,
    isApproved: true as const,
    user: { name: card.owner.displayName, slug: card.owner.handle, imageUrl: card.owner.avatarUrl ?? '' },
    createdAt: card.createdAt,
    updatedAt: card.updatedAt,
  };
}

/** The mods of a modpack in pack order, unavailable ones in their place. */
function modsOf(siteUrl: string, kit: KitDTO) {
  const shown = kit.items.map((item) => ({
    position: item.position,
    mod: {
      mod_id: item.mod.manifestId,
      name: item.mod.name,
      user: { slug: item.mod.userHandle },
      slug: item.mod.slug,
      latestVersion: item.mod.latestVersion ?? '',
      imageUrl: item.mod.thumbnail?.url ?? '',
      url: absolute(siteUrl, item.mod.canonicalPath),
      available: item.available,
      isDependency: item.isAutoDependency,
    },
  }));
  const hidden = kit.unavailable.map((entry) => ({
    position: entry.position,
    mod: {
      mod_id: entry.manifestId,
      name: entry.name,
      user: { slug: '' },
      slug: '',
      latestVersion: '',
      imageUrl: '',
      url: '',
      available: false,
      isDependency: false,
    },
  }));
  return [...shown, ...hidden].sort((a, b) => a.position - b.position).map((entry) => entry.mod);
}

function detail(siteUrl: string, kit: KitDTO, userSlug: string, slug: string) {
  const base = listItem(siteUrl, kit);
  return {
    ...base,
    description: kit.descriptionMd ?? '',
    downloadUrl: absolute(
      siteUrl,
      `/api/modpacks/slug/${encodeURIComponent(userSlug)}/${encodeURIComponent(slug)}/download`,
    ),
    incompatible: kit.conflictPairs,
    mods: modsOf(siteUrl, kit),
  };
}

export function registerModpackRoutes(ctx: LegacyContext): void {
  const { env } = ctx.platform;
  const deps: KitsDeps = { config: catalogConfigOf(env) };
  const siteUrl = env.PUBLIC_SITE_URL;

  ctx.route(modpackEndpoints.list, async ({ query, request }) => {
    const filter = parseModpacksQuery(query);
    if (!filter) throw errors.validation('Invalid page or limit');
    const page = await listKits(request.ctx, deps, {
      page: filter.page,
      pageSize: filter.limit,
      sort: filter.sort,
      ...(filter.search ? { q: filter.search } : {}),
      compat: 'any',
    });
    return {
      json: {
        status: true,
        data: page.items.map((card) => listItem(siteUrl, card)),
        meta: legacyListMeta(page.total, filter.page, filter.limit),
      },
    };
  });

  ctx.route(modpackEndpoints.getBySlug, async ({ params, request }) => {
    const userSlug = params.userSlug ?? '';
    const slug = params.slug ?? '';
    const { kit } = await getKitBySlug(request.ctx, deps, userSlug, slug);
    return { json: { status: true, data: detail(siteUrl, kit, userSlug, slug) }, cacheValues: { id: kit.id } };
  });

  ctx.route(modpackEndpoints.download, async ({ params, request, reply }) => {
    await ctx.platform.rateLimiter.consume('modpack-download', request.clientIp, {
      max: MODPACK_DOWNLOADS_PER_MINUTE,
      window: '1 minute',
    });
    const { kit } = await getKitBySlug(request.ctx, deps, params.userSlug ?? '', params.slug ?? '');
    const profile = kitProfile(kit, siteUrl);
    await recordKitDownload(request.ctx, kit.id);
    // A plain ASCII file name (the slug is already [a-z0-9-]); no quotes can break the header.
    const fileName = `${kit.slug.replace(/[^a-z0-9-]/gi, '') || 'modpack'}.sotfprofile`;
    reply.header('content-disposition', `attachment; filename="${fileName}"`);
    reply.header('x-content-type-options', 'nosniff');
    return { text: JSON.stringify(profile, null, 2), contentType: 'application/json; charset=utf-8' };
  });
}
