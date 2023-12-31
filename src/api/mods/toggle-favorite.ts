import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'


export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
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
              return { favorite: false, message: 'Mod removed from favorites.' };
            }
            await prisma.modFavorite.create({
              data: {
                modId: mod.id,
                userId: user?.id,
              }
            });
            return { favorite: true, message: 'Mod added to favorites.' };
        }, {
            response: t.Object({
              favorite: t.Boolean(),
              message: t.String(),
            }),
        }
    )