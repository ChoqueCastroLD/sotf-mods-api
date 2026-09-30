/**
 * Follows module (WP-42, PLAN §5.2 "Comunidad"): follow/unfollow mods (the backpack, legacy
 * `ModFavorite`) and creators, `GET /me/follows` (backpack with `hasUpdate` and compatibility) and
 * `GET /me/follows/lookup` (♥ state of the cached pages). Every response is private or no-store;
 * the business rules live in `@sotf/core/follows`.
 */
import { followsEndpoints } from '@sotf/contracts/follows';
import { followMod, followUser, getBackpack, lookupFollows, unfollowMod, unfollowUser } from '@sotf/core/follows/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

const ids = (values: readonly string[] | undefined): number[] =>
  (values ?? []).map(Number).filter(Number.isSafeInteger);

export default defineModule({
  name: 'follows',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(followsEndpoints.followMod, async ({ params, body, ctx }) => followMod(ctx, params.id, body.notify));

    m.implement(followsEndpoints.unfollowMod, async ({ params, ctx }) => unfollowMod(ctx, params.id));

    m.implement(followsEndpoints.followUser, async ({ params, body, ctx }) =>
      followUser(ctx, params.handle, body.notify),
    );

    m.implement(followsEndpoints.unfollowUser, async ({ params, ctx }) => unfollowUser(ctx, params.handle));

    m.implement(followsEndpoints.backpack, async ({ ctx }) => getBackpack(ctx, config));

    m.implement(followsEndpoints.lookup, async ({ query, ctx }) => lookupFollows(ctx, ids(query.mod), ids(query.user)));
  },
});
