/**
 * Drafts module (WP-40, PLAN §5.2 "Publicación y Basecamp", §7.5): `/api/v2/drafts*`, the
 * autosaved state of the publishing wizard and its submission. Verified email required; someone
 * else's draft is a 404. Business rules live in `@sotf/core/publishing`.
 *
 * Without R2 credentials, `submit` answers 503 (the file cannot be published); drafts still work.
 */
import { studioEndpoints } from '@sotf/contracts/studio';
import {
  createDraft,
  deleteDraft,
  getDraft,
  listDrafts,
  type PublishingDeps,
  submitDraft,
  updateDraft,
} from '@sotf/core/publishing/index';
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'drafts',
  register(m) {
    const config = storageConfigFromEnv(m.platform.env);
    const storage: ObjectStorage | null = config ? createStorage(config) : null;
    m.app.addHook('onClose', async () => storage?.destroy());
    const deps: PublishingDeps = {
      storage,
      config: { mediaBaseUrl: m.platform.env.R2_PUBLIC_BASE_URL, publicBucket: m.platform.env.R2_BUCKET },
    };

    m.implement(studioEndpoints.createDraft, async ({ body, ctx, reply }) => {
      const draft = await createDraft(ctx, body);
      reply.header('location', `/api/v2/drafts/${draft.id}`);
      return draft;
    });

    m.implement(studioEndpoints.listDrafts, async ({ ctx }) => listDrafts(ctx));

    m.implement(studioEndpoints.getDraft, async ({ params, ctx }) => getDraft(ctx, params.id));

    m.implement(studioEndpoints.updateDraft, async ({ params, body, ctx }) => updateDraft(ctx, params.id, body.data));

    m.implement(studioEndpoints.deleteDraft, async ({ params, ctx }) => {
      await deleteDraft(ctx, params.id);
    });

    m.implement(studioEndpoints.submitDraft, async ({ params, ctx, reply }) => {
      const result = await submitDraft(ctx, deps, params.id);
      reply.header('location', `/api/v2/studio/mods/${result.modId}`);
      return result;
    });
  },
});
