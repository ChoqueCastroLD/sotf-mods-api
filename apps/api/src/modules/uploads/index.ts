/**
 * Uploads module (WP-31, PLAN §2.8 "Subida", §5.2): `POST /api/v2/uploads` (presign),
 * `POST /api/v2/uploads/:id/complete` and `GET /api/v2/uploads/:id`. Verified email required;
 * the `uploads` bucket limits requests per user and core enforces the quota and ownership
 * (someone else's upload is a 404).
 *
 * Without R2 credentials (`R2_ACCESS_KEY_ID`/`R2_SECRET_ACCESS_KEY` and `R2_ENDPOINT` or
 * `R2_ACCOUNT_ID`) the endpoints answer 503 UNAVAILABLE; everything else keeps working.
 */
import { uploadsEndpoints } from '@sotf/contracts/uploads';
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import { completeUpload, createUpload, getUpload } from '@sotf/core/uploads/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'uploads',
  register(m) {
    const config = storageConfigFromEnv(m.platform.env);
    const storage: ObjectStorage | null = config ? createStorage(config) : null;
    if (!storage) m.platform.log.warn('R2 is not configured: uploads answer 503');
    m.app.addHook('onClose', async () => storage?.destroy());

    m.implement(uploadsEndpoints.create, async ({ body, ctx, reply }) => {
      const presigned = await createUpload(ctx, storage, body);
      reply.header('location', `/api/v2/uploads/${presigned.upload.id}`);
      return presigned;
    });

    m.implement(uploadsEndpoints.complete, async ({ params, body, ctx }) =>
      completeUpload(ctx, storage, params.id, body),
    );

    const catalog = catalogConfigOf(m.platform.env);
    m.implement(uploadsEndpoints.get, async ({ params, ctx }) => getUpload(ctx, params.id, catalog));
  },
});
