/**
 * Build viewer module (T1-06): the top-down SVG preview of a build and its packed geometry for the
 * lazy 3D view. Both are cached at the edge under `mod:{id}`; a build without geometry is filled
 * by a background job (`build.geometry`) on its first read.
 */
import { buildViewerEndpoints } from '@sotf/contracts/build-viewer';
import { getBuildGeometry, getBuildPreview } from '@sotf/core/builds/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'build-viewer',
  register(m) {
    m.implement(buildViewerEndpoints.preview, async ({ params, ctx, cache }) => {
      const preview = await getBuildPreview(ctx, params.id);
      cache({ id: params.id });
      return preview;
    });
    m.implement(buildViewerEndpoints.geometry, async ({ params, ctx, cache }) => {
      const geometry = await getBuildGeometry(ctx, params.id);
      cache({ id: params.id });
      return geometry;
    });
  },
});
