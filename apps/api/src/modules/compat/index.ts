/**
 * Compat module (WP-50, PLAN §5.2 "Comunidad", §7.10): a mod's compatibility per version × game
 * build, field reports (create-or-update, edit, delete, author acknowledgement) and the
 * "Did it work?" prompts of the signed-in user. Business rules live in `@sotf/core/compat`; the
 * registry and the Patch Radar are served by the `ecosystem` module.
 */
import { compatEndpoints } from '@sotf/contracts/compat';
import {
  acknowledgeCompatReport,
  type CompatDeps,
  createCompatReport,
  deleteCompatReport,
  getCompatPrompts,
  getModCompat,
  updateCompatReport,
} from '@sotf/core/compat/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'compat',
  register(m) {
    const deps: CompatDeps = { config: catalogConfigOf(m.platform.env) };

    m.implement(compatEndpoints.modCompat, async ({ params, ctx, cache }) => {
      const compat = await getModCompat(ctx, deps, params.id);
      cache({ id: compat.modId });
      return compat;
    });

    m.implement(compatEndpoints.createReport, async ({ body, ctx }) => createCompatReport(ctx, deps, body));

    m.implement(compatEndpoints.updateReport, async ({ params, body, ctx }) =>
      updateCompatReport(ctx, deps, params.id, body),
    );

    m.implement(compatEndpoints.deleteReport, async ({ params, ctx }) => {
      await deleteCompatReport(ctx, params.id);
    });

    m.implement(compatEndpoints.acknowledgeReport, async ({ params, body, ctx }) =>
      acknowledgeCompatReport(ctx, deps, params.id, body.fixedInVersionId),
    );

    m.implement(compatEndpoints.myPrompts, async ({ ctx }) => getCompatPrompts(ctx, deps));
  },
});
