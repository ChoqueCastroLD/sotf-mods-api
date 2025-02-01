import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware'


export const router = () => new Elysia()
    .use(loggedOnly())
    .get(
        '/api/mods/:mod_id/favorite',
        async ({ params: { mod_id }, user }) => {
            const mod = await prisma.mod.findFirst({
              where: {
                mod_id
              }
            });
            if (!mod) {
              throw new NotFoundError();
            }
            
            const count = await prisma.modFavorite.count({
              where: {
                modId: mod.id,
              }
            });

            const favorite = await prisma.modFavorite.findFirst({
              where: {
                modId: mod.id,
                userId: user?.id,
              }
            });
            if (favorite) {
              await prisma.modFavorite.delete({
                where: {
                  id: favorite.id,
                }
              });
              return { status: true, data: { favorite: false, count: count - 1, message: 'Mod removed from favorites.' } };
            }
            await prisma.modFavorite.create({
              data: {
                modId: mod.id,
                userId: user?.id,
              }
            });
            return { status: true, data: { favorite: true, count: count + 1, message: 'Mod added to favorites.' } };
        }
    )