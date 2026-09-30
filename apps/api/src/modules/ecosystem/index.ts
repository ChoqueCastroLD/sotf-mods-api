/**
 * Ecosystem module (WP-50, PLAN §5.2, §7.10): the game-build registry and the Patch Radar.
 *
 * - Public, edge-cacheable reads (tag `compat`): `GET /game-builds`, `GET /ecosystem`,
 *   `GET /patch-radar?build=`.
 * - Admin registry (👑 + session < 12 h, checked by core; `AuditLog` per write):
 *   `GET|POST /admin/game-builds`, `PATCH|DELETE /admin/game-builds/:id`,
 *   `GET|POST /admin/loader-releases` and `PUT /admin/ecosystem`. The contracts live in
 *   `admin.ts` (the Ranger Station UI is WP-83) but the rules belong to the compat domain.
 */
import { adminEndpoints } from '@sotf/contracts/admin';
import { compatEndpoints } from '@sotf/contracts/compat';
import {
  assertRegistryAdmin,
  type CompatDeps,
  createGameBuild,
  createLoaderRelease,
  deleteGameBuild,
  getEcosystem,
  getPatchRadar,
  getUptime,
  listGameBuilds,
  listLoaderReleases,
  putEcosystem,
  updateGameBuild,
} from '@sotf/core/compat/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'ecosystem',
  register(m) {
    const deps: CompatDeps = { config: catalogConfigOf(m.platform.env) };

    // Public reads.
    m.implement(compatEndpoints.gameBuilds, async ({ ctx }) => listGameBuilds(ctx));

    m.implement(compatEndpoints.ecosystem, async ({ ctx }) => getEcosystem(ctx));

    m.implement(compatEndpoints.patchRadar, async ({ query, ctx }) => getPatchRadar(ctx, deps, query.build));

    m.implement(compatEndpoints.uptime, async ({ query, ctx }) => getUptime(ctx, query.days));

    // Admin registry.
    m.implement(adminEndpoints.listGameBuilds, async ({ ctx }) => {
      await assertRegistryAdmin(ctx);
      return listGameBuilds(ctx);
    });

    m.implement(adminEndpoints.createGameBuild, async ({ body, ctx }) => createGameBuild(ctx, body));

    m.implement(adminEndpoints.updateGameBuild, async ({ params, body, ctx }) => updateGameBuild(ctx, params.id, body));

    m.implement(adminEndpoints.deleteGameBuild, async ({ params, ctx }) => {
      await deleteGameBuild(ctx, params.id);
    });

    m.implement(adminEndpoints.listLoaderReleases, async ({ ctx }) => listLoaderReleases(ctx));

    m.implement(adminEndpoints.createLoaderRelease, async ({ body, ctx }) => createLoaderRelease(ctx, body));

    m.implement(adminEndpoints.putEcosystem, async ({ body, ctx }) => putEcosystem(ctx, body));
  },
});
