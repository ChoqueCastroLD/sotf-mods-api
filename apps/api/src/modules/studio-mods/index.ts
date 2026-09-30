/**
 * Studio mods module (WP-40, PLAN §5.2 "Publicación y Basecamp", §7.4, §7.5): `/api/v2/studio/mods*`
 * — the author's mods (any status), listing edits, cover and gallery, new versions, changelog
 * edits, yank/unyank and the author's status transitions. Someone else's mod is 403 when it is
 * public and 404 otherwise (core decides). Business rules live in `@sotf/core/publishing`.
 *
 * Without R2 credentials, `POST …/versions` answers 503; everything else keeps working.
 */
import { studioEndpoints } from '@sotf/contracts/studio';
import {
  createStudioVersion,
  getStudioMod,
  listStudioMods,
  type PublishingDeps,
  putStudioModMedia,
  requestStudioModRemoval,
  transitionStudioMod,
  updateStudioMod,
  updateStudioVersion,
} from '@sotf/core/publishing/index';
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'studio-mods',
  register(m) {
    const config = storageConfigFromEnv(m.platform.env);
    const storage: ObjectStorage | null = config ? createStorage(config) : null;
    m.app.addHook('onClose', async () => storage?.destroy());
    const deps: PublishingDeps = {
      storage,
      config: { mediaBaseUrl: m.platform.env.R2_PUBLIC_BASE_URL, publicBucket: m.platform.env.R2_BUCKET },
    };

    m.implement(studioEndpoints.listMods, async ({ ctx }) => listStudioMods(ctx, deps));

    m.implement(studioEndpoints.getMod, async ({ params, ctx }) => getStudioMod(ctx, deps, params.id));

    m.implement(studioEndpoints.updateMod, async ({ params, body, ctx }) =>
      updateStudioMod(ctx, deps, params.id, body),
    );

    m.implement(studioEndpoints.putMedia, async ({ params, body, ctx }) =>
      putStudioModMedia(ctx, deps, params.id, body),
    );

    m.implement(studioEndpoints.createVersion, async ({ params, body, ctx, reply }) => {
      const version = await createStudioVersion(ctx, deps, params.id, body);
      reply.header('location', `/api/v2/mods/${params.id}/versions/${version.id}`);
      return version;
    });

    m.implement(studioEndpoints.updateVersion, async ({ params, body, ctx }) =>
      updateStudioVersion(ctx, deps, params.id, params.vid, body),
    );

    m.implement(studioEndpoints.archive, async ({ params, body, ctx }) =>
      transitionStudioMod(ctx, params.id, 'archive', { successorModId: body.successorModId }),
    );

    m.implement(studioEndpoints.unlist, async ({ params, ctx }) => transitionStudioMod(ctx, params.id, 'unlist'));

    m.implement(studioEndpoints.publish, async ({ params, ctx }) => transitionStudioMod(ctx, params.id, 'publish'));

    m.implement(studioEndpoints.requestRemoval, async ({ params, body, ctx }) =>
      requestStudioModRemoval(ctx, params.id, body.reason),
    );
  },
});
