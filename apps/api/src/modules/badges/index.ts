/**
 * Badges module (WP-60, PLAN §5.2, §7.2): `GET /badges` (the `/achievements` catalog with unlock
 * shares, ranks and tiers) and `GET /users/:handle/badges` (a user's field notebook). Both are
 * public and edge-cached (`stats` / `user:{id}` tags, purged by `badge.awarded`); the rules live in
 * `@sotf/core/gamification`.
 */
import { gamificationEndpoints } from '@sotf/contracts/gamification';
import { getBadgeCatalog, getUserBadges } from '@sotf/core/gamification/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'badges',
  register(m) {
    m.implement(gamificationEndpoints.badges, async ({ ctx }) => getBadgeCatalog(ctx));

    m.implement(gamificationEndpoints.userBadges, async ({ params, ctx }) => getUserBadges(ctx, params.handle));
  },
});
