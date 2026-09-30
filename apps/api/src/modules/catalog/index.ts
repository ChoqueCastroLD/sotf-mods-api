/**
 * Catalog module (WP-33): public reads of PLAN §5.2 "Catálogo y búsqueda" (Explore, detail,
 * versions, dependencies, dependents, related, taxonomy, creators and public profiles).
 *
 * Every endpoint is public and edge-cacheable (§2.7): the handlers pass the entity ids that
 * resolve the contract's cache tags (`mod:{id}`, `user:{id}`) and add `category:{slug}` /
 * `tag:{slug}` for filtered listings. Business rules live in `@sotf/core/catalog`.
 */
import { type CacheTag, cacheTag, catalogEndpoints, isCacheTag, versionsEndpoints } from '@sotf/contracts';
import {
  type CatalogConfig,
  getDependencies,
  getDependents,
  getModDetail,
  getRelated,
  getUserActivity,
  getUserItems,
  getUserProfile,
  getUserReviews,
  getVersion,
  getVersionList,
  listCategories,
  listCreators,
  listMods,
  listTags,
} from '@sotf/core/catalog/index';
import { defineModule } from '../../lib/define-module.ts';
import { encodedJson } from './respond.ts';

/** Catalog configuration from the API environment. */
export function catalogConfigOf(env: { R2_PUBLIC_BASE_URL: string; R2_BUCKET: string }): CatalogConfig {
  return { mediaBaseUrl: env.R2_PUBLIC_BASE_URL, publicBucket: env.R2_BUCKET };
}

/** `category:{slug}` / `tag:{slug}` tags of a filtered listing (invalid slugs are dropped). */
function filterTags(categories: readonly string[] = [], tags: readonly string[] = []): CacheTag[] {
  return [
    ...categories.map((slug) => cacheTag.category(slug.toLowerCase())),
    ...tags.map((slug) => cacheTag.tag(slug.toLowerCase())),
  ].filter((tag) => isCacheTag(tag));
}

export default defineModule({
  name: 'catalog',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(catalogEndpoints.listMods, async ({ query, ctx, cache, request, reply }) => {
      cache({}, filterTags(query.category, query.tag));
      return encodedJson(catalogEndpoints.listMods, request, reply, await listMods(ctx, config, query));
    });

    m.implement(catalogEndpoints.getMod, async ({ params, ctx, cache, request, reply }) => {
      const mod = await getModDetail(ctx, config, { id: params.id });
      cache({ id: mod.id }, [cacheTag.user(mod.userId)]);
      return encodedJson(catalogEndpoints.getMod, request, reply, mod);
    });

    m.implement(catalogEndpoints.getModBySlug, async ({ params, ctx, cache, request, reply }) => {
      const mod = await getModDetail(ctx, config, { handle: params.user, slug: params.slug });
      cache({ id: mod.id }, [cacheTag.user(mod.userId)]);
      return encodedJson(catalogEndpoints.getModBySlug, request, reply, mod);
    });

    m.implement(catalogEndpoints.getModByManifest, async ({ params, ctx, cache, request, reply }) => {
      const mod = await getModDetail(ctx, config, { manifestId: params.manifestId });
      cache({ id: mod.id }, [cacheTag.user(mod.userId)]);
      return encodedJson(catalogEndpoints.getModByManifest, request, reply, mod);
    });

    m.implement(catalogEndpoints.dependencies, async ({ params, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      const items = await getDependencies(ctx, config, params.id);
      return encodedJson(catalogEndpoints.dependencies, request, reply, { items }, items);
    });

    m.implement(catalogEndpoints.dependents, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return { items: await getDependents(ctx, config, params.id) };
    });

    m.implement(catalogEndpoints.related, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return { items: await getRelated(ctx, config, params.id) };
    });

    m.implement(versionsEndpoints.list, async ({ params, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      const items = await getVersionList(ctx, config, params.id);
      return encodedJson(versionsEndpoints.list, request, reply, { items }, items);
    });

    m.implement(versionsEndpoints.get, async ({ params, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      return encodedJson(
        versionsEndpoints.get,
        request,
        reply,
        await getVersion(ctx, config, params.id, params.version),
      );
    });

    m.implement(catalogEndpoints.categories, async ({ query, ctx }) => ({
      items: await listCategories(ctx, config, query.kind),
    }));

    m.implement(catalogEndpoints.tags, async ({ ctx }) => ({ items: await listTags(ctx, config) }));

    m.implement(catalogEndpoints.creators, async ({ query, ctx }) => listCreators(ctx, config, query));

    m.implement(catalogEndpoints.getUser, async ({ params, ctx, cache, request, reply }) => {
      const user = await getUserProfile(ctx, config, params.handle);
      cache({ id: user.id });
      return encodedJson(catalogEndpoints.getUser, request, reply, user);
    });

    m.implement(catalogEndpoints.userMods, async ({ params, query, ctx, cache }) => {
      const { userId, page } = await getUserItems(ctx, config, params.handle, ['mod', 'library'], query);
      cache({ id: userId });
      return page;
    });

    m.implement(catalogEndpoints.userBuilds, async ({ params, query, ctx, cache }) => {
      const { userId, page } = await getUserItems(ctx, config, params.handle, ['build'], query);
      cache({ id: userId });
      return page;
    });

    m.implement(catalogEndpoints.userReviews, async ({ params, query, ctx, cache }) => {
      const { userId, items, nextCursor } = await getUserReviews(ctx, config, params.handle, query);
      cache({ id: userId });
      return { items, nextCursor };
    });

    m.implement(catalogEndpoints.userActivity, async ({ params, ctx, cache }) => {
      const { userId, from, to, days } = await getUserActivity(ctx, params.handle);
      cache({ id: userId });
      return { from, to, days };
    });
  },
});
