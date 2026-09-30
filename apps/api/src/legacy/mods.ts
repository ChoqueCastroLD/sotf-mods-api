/**
 * Mod routes of the legacy layer (PLAN §5.5): Tier 1 `GET /api/mods`, `GET /api/mods/:mod_id`,
 * `GET /api/mods/:mod_id/check`; Tier 2 `/api/mods/slug/:u/:s`, `/api/mods/find`,
 * `/api/mods/featured` and `/api/builds/featured`.
 */
import { LEGACY_RESERVED_MOD_IDS, legacyEndpoints, legacyListMeta, parseLegacyModsQuery } from '@sotf/contracts/legacy';
import { errors } from '@sotf/core';
import {
  checkLegacyMod,
  findLegacyModId,
  getLegacyModById,
  getLegacyModBySlug,
  listLegacyFeatured,
  listLegacyMods,
} from '@sotf/core/legacy/index';
import type { LegacyContext } from './context.ts';
import { serializeDetail, serializeFeaturedBuild, serializeFeaturedMod, serializeListItem } from './serializers.ts';

const RESERVED: ReadonlySet<string> = new Set(LEGACY_RESERVED_MOD_IDS);

function str(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export function registerModRoutes(ctx: LegacyContext): void {
  const { db } = ctx.platform;

  ctx.route(legacyEndpoints.listMods, async ({ query }) => {
    const parsed = parseLegacyModsQuery(query);
    if (!parsed.ok) throw errors.validation('Invalid page or limit');
    const filter = parsed.value;
    const { items, total } = await listLegacyMods(db, filter);
    return {
      json: {
        status: true,
        data: items.map((item) => serializeListItem(item, ctx.serialize)),
        meta: legacyListMeta(total, filter.page, filter.limit),
      },
    };
  });

  ctx.route(legacyEndpoints.featuredMods, async () => {
    const rows = await listLegacyFeatured(db, 'Mod', 12);
    return { json: { status: true, data: rows.map(serializeFeaturedMod) } };
  });

  ctx.route(legacyEndpoints.featuredBuilds, async () => {
    const rows = await listLegacyFeatured(db, 'Build', 4);
    return { json: { status: true, data: rows.map(serializeFeaturedBuild) } };
  });

  ctx.route(legacyEndpoints.findMod, async ({ query }) => {
    const userSlug = str(query.userSlug);
    const modSlug = str(query.mod_slug);
    if (userSlug === undefined || modSlug === undefined) throw errors.validation('userSlug and mod_slug are required');
    const found = await findLegacyModId(db, userSlug, modSlug);
    if (!found) throw errors.notFound('Mod');
    return { json: { status: true, data: { mod_id: found.mod_id } }, cacheValues: { id: found.id } };
  });

  ctx.route(legacyEndpoints.getModBySlug, async ({ params }) => {
    const detail = await getLegacyModBySlug(db, params.userSlug ?? '', params.mod_slug ?? '');
    if (!detail) throw errors.notFound('Mod');
    return { json: { status: true, data: serializeDetail(detail, ctx.serialize) }, cacheValues: { id: detail.mod.id } };
  });

  ctx.route(legacyEndpoints.getMod, async ({ params }) => {
    const manifestId = params.mod_id ?? '';
    if (RESERVED.has(manifestId)) throw errors.notFound('Mod');
    const detail = await getLegacyModById(db, manifestId);
    if (!detail) throw errors.notFound('Mod');
    return { json: { status: true, data: serializeDetail(detail, ctx.serialize) }, cacheValues: { id: detail.mod.id } };
  });

  ctx.route(legacyEndpoints.check, async ({ params, query }) => {
    const manifestId = params.mod_id ?? '';
    if (RESERVED.has(manifestId)) throw errors.notFound('Mod');
    const result = await checkLegacyMod(db, manifestId, str(query.version));
    if (result.kind === 'not_found') throw errors.notFound('Mod');
    if (result.kind === 'invalid') throw errors.validation(result.message);
    return {
      json: {
        status: true,
        newVersionAvailable: result.newVersionAvailable,
        message: result.message,
        version: result.version,
        changelog: result.changelog,
      },
      cacheValues: { id: result.modId },
    };
  });
}
