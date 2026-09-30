/**
 * Awards module (WP-60, PLAN §5.2, §7.2): `GET /awards/current` (Mod of the Week, current staff
 * picks and Build of the Month for the landing, the mod page and profiles; tag `home`). The weekly
 * pick is the `awards.mod-of-week` job; admin overrides live in the admin module (WP-51).
 */
import { gamificationEndpoints } from '@sotf/contracts/gamification';
import { getCurrentAwards } from '@sotf/core/gamification/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'awards',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(gamificationEndpoints.currentAwards, async ({ ctx }) => getCurrentAwards(ctx, config));
  },
});
