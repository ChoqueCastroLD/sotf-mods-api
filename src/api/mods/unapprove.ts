import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware'


export const router = () => new Elysia()
    .use(loggedOnly())
    .get(
        '/api/mods/:mod_id/unapprove',
        async ({ params: { mod_id }, user }) => {
            if (user?.isTrusted !== true) {
              throw new NotFoundError();
            }
            const mod = await prisma.mod.findFirst({
              where: {
                mod_id
              }
            });
            if (!mod) {
              throw new NotFoundError();
            }
            await prisma.mod.update({
              where: {
                id: mod.id,
              },
              data: {
                isApproved: false,
              },
            });
            return { status: true, message: 'Mod approved.' };
        }
    )