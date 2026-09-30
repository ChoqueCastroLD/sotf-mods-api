/**
 * Announcements module (WP-51, PLAN T0-28): the public `GET /api/v2/announcements/active?locale=`
 * read of the global banner (edge-cached 5 min under `html`, purged by every admin write) and the
 * admin CRUD `/api/v2/admin/announcements*` (👑, session < 12 h, audited).
 */
import { adminEndpoints } from '@sotf/contracts/admin';
import {
  createAnnouncement,
  deleteAnnouncement,
  listActiveAnnouncements,
  listAnnouncements,
  updateAnnouncement,
} from '@sotf/core/announcements/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'announcements',
  register(m) {
    m.implement(adminEndpoints.activeAnnouncements, async ({ query, ctx }) =>
      listActiveAnnouncements(ctx, query.locale),
    );

    m.implement(adminEndpoints.listAnnouncements, async ({ ctx }) => listAnnouncements(ctx));

    m.implement(adminEndpoints.createAnnouncement, async ({ body, ctx, reply }) => {
      const created = await createAnnouncement(ctx, body);
      reply.header('location', `/api/v2/admin/announcements/${created.id}`);
      return created;
    });

    m.implement(adminEndpoints.updateAnnouncement, async ({ params, body, ctx }) =>
      updateAnnouncement(ctx, params.id, body),
    );

    m.implement(adminEndpoints.deleteAnnouncement, async ({ params, ctx }) => {
      await deleteAnnouncement(ctx, params.id);
    });
  },
});
