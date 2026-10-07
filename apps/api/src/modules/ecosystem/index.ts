/**
 * Ecosystem module (WP-50, PLAN §5.2, §7.10): the game-build registry and the Patch Radar.
 *
 * - Public, edge-cacheable reads (tag `compat`): `GET /game-builds`, `GET /ecosystem`,
 *   `GET /patch-radar?build=`.
 * - Admin registry (admin only, checked by core; `AuditLog` per write):
 *   `GET|POST /admin/game-builds` (the list is paged, searchable, filterable and sortable),
 *   `PATCH|DELETE /admin/game-builds/:id`, `GET /admin/game-builds/steam` (state of the Steam sync)
 *   and `POST /admin/game-builds/steam/sync` (enqueues the `steam.sync` job),
 *   `GET|POST /admin/loader-releases` and `PUT /admin/ecosystem`. The contracts live in
 *   `admin.ts` (the Ranger Station UI is WP-83) but the rules belong to the compat domain.
 */
import { adminEndpoints } from '@sotf/contracts/admin';
import { compatEndpoints } from '@sotf/contracts/compat';
import {
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
import { getSteamSyncStatus, listGameBuildsAdmin, requestSteamSync } from '@sotf/core/steam/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'ecosystem',
  register(m) {
    const deps: CompatDeps = { config: catalogConfigOf(m.platform.env) };

    // Public reads.
    m.implement(compatEndpoints.gameBuilds, async ({ query, ctx }) =>
      listGameBuilds(ctx, {
        ...(query.limit !== undefined ? { limit: query.limit } : {}),
        ...(query.q ? { q: query.q } : {}),
      }),
    );

    m.implement(compatEndpoints.ecosystem, async ({ ctx }) => getEcosystem(ctx));

    m.implement(compatEndpoints.patchRadar, async ({ query, ctx }) => getPatchRadar(ctx, deps, query.build));

    m.implement(compatEndpoints.uptime, async ({ query, ctx }) => getUptime(ctx, query.days));

    // Admin registry.
    m.implement(adminEndpoints.listGameBuilds, async ({ query, ctx }) => listGameBuildsAdmin(ctx, query));

    m.implement(adminEndpoints.steamSyncStatus, async ({ ctx }) => getSteamSyncStatus(ctx));

    m.implement(adminEndpoints.steamSyncNow, async ({ ctx }) => requestSteamSync(ctx));

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
