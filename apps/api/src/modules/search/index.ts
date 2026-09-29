/**
 * Search module (WP-33): `GET /api/v2/search` (FTS + trigram across mods, builds, kits, users and
 * pages, PLAN §7.9) and `GET /api/v2/search/index` (the Cmd+K index per locale, tag
 * `search-index`). Business rules live in `@sotf/core/search`.
 */
import { searchEndpoints } from '@sotf/contracts';
import { getSearchIndex, search } from '@sotf/core/search/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'search',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(searchEndpoints.search, async ({ query, ctx }) =>
      search(ctx, config, { q: query.q, types: query.types, limit: query.limit }),
    );

    m.implement(searchEndpoints.index, async ({ query, ctx, cache }) => {
      cache({}, [`locale:${query.locale}`]);
      return getSearchIndex(ctx, config, query.locale);
    });
  },
});
