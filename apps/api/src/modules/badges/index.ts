/**
 * Badges module, read only (PLAN §5.2): `GET /badges` and `GET /users/:handle/badges` keep serving
 * the stored badge data, but nothing awards badges any more (Classic redesign) and the UI no longer
 * shows them. `PATCH /me/badges/featured` answers 410.
 */
import { gamificationEndpoints } from '@sotf/contracts/gamification';
import { errors } from '@sotf/core';
import { getBadgeCatalog, getUserBadges } from '@sotf/core/gamification/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'badges',
  register(m) {
    m.implement(gamificationEndpoints.badges, async ({ ctx }) => getBadgeCatalog(ctx));

    m.implement(gamificationEndpoints.userBadges, async ({ params, ctx }) => getUserBadges(ctx, params.handle));

    m.implement(gamificationEndpoints.setFeaturedBadges, async () => {
      throw errors.gone('Badges were removed');
    });
  },
});
