/**
 * Search module (WP-33): `GET /api/v2/search` (FTS + trigram across mods, builds, kits, users and
 * pages, PLAN §7.9) and `GET /api/v2/search/index` (the Cmd+K index per locale, tag
 * `search-index`). Business rules live in `@sotf/core/search`.
 */
import { searchEndpoints } from '@sotf/contracts';
import { getSearchIndex, search } from '@sotf/core/search/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';
import { encodedJson } from '../catalog/respond.ts';

export default defineModule({
  name: 'search',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(searchEndpoints.search, async ({ query, ctx, request, reply }) => {
      const results = await search(ctx, config, {
        q: query.q,
        types: query.types,
        limit: query.limit,
        locale: query.locale,
      });
      return encodedJson(searchEndpoints.search, request, reply, results);
    });

    m.implement(searchEndpoints.index, async ({ query, ctx, cache, request, reply }) => {
      cache({}, [`locale:${query.locale}`]);
      return encodedJson(searchEndpoints.index, request, reply, await getSearchIndex(ctx, config, query.locale));
    });
  },
});
