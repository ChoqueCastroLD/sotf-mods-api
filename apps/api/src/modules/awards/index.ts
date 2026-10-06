/**
 * Awards module (WP-60, PLAN §5.2, §7.2): `GET /awards/current` (Mod of the Week, current staff
 * picks and Build of the Month; tag `home`). Read only: awards are no longer produced (Classic
 * redesign), so this serves whatever rows are stored. "Mods of the week" is a ranking by weekly
 * downloads and does not use awards.
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
