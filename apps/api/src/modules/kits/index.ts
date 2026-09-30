/**
 * Kits module (WP-42, PLAN §5.2 "Comunidad", §7.8): public reads (list, by id, slug and share
 * code, a user's kits), "my kits" and the owner writes (create, edit, soft delete, items, fork).
 * The business rules live in `@sotf/core/kits`.
 *
 * Caching: the public reads are edge-cacheable (`kit:{id}` + `user:{ownerId}`; `list:kits`) and,
 * like every public cacheable endpoint, never resolve the session, so they always answer as for
 * an anonymous visitor (private kits are 404 there, `descriptionMd` is never included). The owner
 * gets the full kit from the write responses and `GET /me/kits` (see docs/backlog/WP-42.md for the
 * owner read of a single kit).
 */
import { cacheTag } from '@sotf/contracts';
import { kitsEndpoints } from '@sotf/contracts/kits';
import {
  createKit,
  deleteKit,
  forkKit,
  getKit,
  getKitByCode,
  getKitBySlug,
  type KitsDeps,
  listKits,
  listMyKits,
  listUserKits,
  putKitItems,
  updateKit,
} from '@sotf/core/kits/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'kits',
  register(m) {
    const deps: KitsDeps = { config: catalogConfigOf(m.platform.env) };

    m.implement(kitsEndpoints.list, async ({ query, ctx }) => listKits(ctx, deps, query));

    m.implement(kitsEndpoints.get, async ({ params, ctx, cache }) => {
      const { kit } = await getKit(ctx, deps, params.id);
      cache({ id: kit.id }, [cacheTag.user(kit.owner.id)]);
      return kit;
    });

    m.implement(kitsEndpoints.getBySlug, async ({ params, ctx, cache }) => {
      const { kit } = await getKitBySlug(ctx, deps, params.user, params.slug);
      cache({ id: kit.id }, [cacheTag.user(kit.owner.id)]);
      return kit;
    });

    m.implement(kitsEndpoints.getByCode, async ({ params, ctx, cache }) => {
      const { kit } = await getKitByCode(ctx, deps, params.code);
      cache({ id: kit.id }, [cacheTag.user(kit.owner.id)]);
      return kit;
    });

    m.implement(kitsEndpoints.userKits, async ({ params, query, ctx, cache }) => {
      const { userId, page } = await listUserKits(ctx, deps, params.handle, query);
      cache({ id: userId });
      return page;
    });

    m.implement(kitsEndpoints.myKits, async ({ ctx }) => ({ items: await listMyKits(ctx, deps) }));

    m.implement(kitsEndpoints.create, async ({ body, ctx }) => (await createKit(ctx, deps, body)).kit);

    m.implement(
      kitsEndpoints.update,
      async ({ params, body, ctx }) => (await updateKit(ctx, deps, params.id, body)).kit,
    );

    m.implement(kitsEndpoints.delete, async ({ params, ctx }) => {
      await deleteKit(ctx, params.id);
    });

    m.implement(
      kitsEndpoints.putItems,
      async ({ params, body, ctx }) => (await putKitItems(ctx, deps, params.id, body)).kit,
    );

    m.implement(kitsEndpoints.fork, async ({ params, body, ctx }) => (await forkKit(ctx, deps, params.id, body)).kit);
  },
});
