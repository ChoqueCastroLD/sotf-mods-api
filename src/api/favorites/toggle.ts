import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware';


export const router = () => new Elysia()
    .use(loggedOnly())
    .post(
        '/api/favorites/toggle',
        async ({ user, body: { modId, favorite } }) => {
            const mod = await prisma.mod.findUnique({
                where: {
                    id: modId,
                },
            })
            if (!mod) {
                throw new NotFoundError();
            }
            const favoriteExists = await prisma.modFavorite.findFirst({
                where: {
                    userId: user.id,
                    modId: mod.id,
                },
                select: {
                    id: true,
                    mod: {
                        select: {
                            id: true,
                        }
                    },
                }
            })
            if (favoriteExists && !favorite) {
                const deletedFavorites = await prisma.modFavorite.deleteMany({
                    where: { userId: user.id, modId: mod.id },
                });
                await prisma.mod.update({
                    where: { id: mod.id },
                    data: {
                        favoritesCount: { decrement: deletedFavorites.count },
                    },
                });
            } else if (!favoriteExists && favorite) {
                await Promise.all([
                    prisma.modFavorite.create({
                        data: {
                            userId: user.id,
                            modId: mod.id,
                        },
                    }),
                    prisma.mod.update({
                        where: { id: mod.id },
                        data: {
                            favoritesCount: { increment: 1 },
                        },
                    }),
                ])
            }
            const count = await prisma.mod.findFirst({
                where: {
                    id: mod.id,
                },
                select: {
                    favoritesCount: true,
                },
            })
            return {
                status: true,
                data: {
                    favorite,
                    count: count?.favoritesCount,
                }
            };
        },
        {
            body: t.Object({
                modId: t.Number(),
                favorite: t.Boolean(),
            }),
        }
    )