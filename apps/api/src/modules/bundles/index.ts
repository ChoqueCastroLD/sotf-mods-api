/**
 * Official bundles module (T1-04): public list of the ready bundles of a mod, the download (302 to
 * the zip in R2, counted), and the creator's management (attach a kit, rebuild, detach). The zip is
 * built by the worker (`bundle.build`, `bundle.sweep`); see `@sotf/core/bundles`.
 */
import { DOWNLOAD_REDIRECT_HEADERS } from '@sotf/contracts/downloads';
import { bundlesEndpoints } from '@sotf/contracts/bundles';
import {
  createBundle,
  listOwnBundles,
  listReadyBundles,
  rebuildBundle,
  removeBundle,
  resolveBundleDownload,
} from '@sotf/core/bundles/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'bundles',
  register(m) {
    const publicBaseUrl = m.platform.env.R2_PUBLIC_BASE_URL;

    m.implement(bundlesEndpoints.forMod, async ({ params, ctx, cache }) => {
      const items = await listReadyBundles(ctx, params.id);
      cache({ id: params.id });
      return { items };
    });

    m.implement(bundlesEndpoints.manage, async ({ params, ctx }) => ({ items: await listOwnBundles(ctx, params.id) }));

    m.implement(bundlesEndpoints.create, async ({ params, body, ctx }) => createBundle(ctx, params.id, body.kitId));

    m.implement(bundlesEndpoints.rebuild, async ({ params, ctx }) => rebuildBundle(ctx, params.id, params.bundleId));

    m.implement(bundlesEndpoints.remove, async ({ params, ctx }) => {
      await removeBundle(ctx, params.id, params.bundleId);
    });

    m.implement(bundlesEndpoints.download, async ({ params, ctx, request }) => {
      const { location } = await resolveBundleDownload(ctx, publicBaseUrl, params.id, request.method === 'GET');
      return { location, status: 302 as const, headers: { ...DOWNLOAD_REDIRECT_HEADERS } };
    });
  },
});
