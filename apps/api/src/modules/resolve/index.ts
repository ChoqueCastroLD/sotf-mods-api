/**
 * Resolver module (WP-31, PLAN §4.6): `GET /api/v2/resolve?path=` → `ResolveDTO`
 * (`{status: 200|301|404|410, kind, id, canonicalPath, rule}`), used by the web middleware before it
 * renders a mod, build, profile or kit page. Public and edge-cached with the entity's tag
 * (`mod:{id}`, `user:{id}` or `kit:{id}`), so renames and removals purge it; the API also keeps
 * the results for 30 s in an LRU invalidated by the same tags (`NOTIFY cache`).
 */
import { type ResolveDTO, seoEndpoints } from '@sotf/contracts/seo';
import { resolvePath } from '@sotf/core/resolve/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'resolve',
  register(m) {
    const lru = m.platform.caches.create<ResolveDTO>({ name: 'resolve.path', max: 5_000, ttlMs: 30_000 });
    m.implement(seoEndpoints.resolve, async ({ query, ctx, cache }) => {
      const resolved = await lru.getOrLoad(query.path, async () => {
        const value = await resolvePath(ctx.db, query.path);
        const tag =
          value.id === null
            ? null
            : value.kind === 'user'
              ? `user:${value.id}`
              : value.kind === 'kit'
                ? `kit:${value.id}`
                : `mod:${value.id}`;
        return { value, tags: tag ? [tag] : [] };
      });
      const id = resolved.id ?? undefined;
      cache({
        modId: resolved.kind === 'mod' || resolved.kind === 'build' ? id : undefined,
        userId: resolved.kind === 'user' ? id : undefined,
        kitId: resolved.kind === 'kit' ? id : undefined,
      });
      return resolved;
    });
  },
});
