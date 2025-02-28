import { Elysia } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware';


export const router = () => new Elysia()
    .use(loggedOnly())
    .get(
        '/api/favorites',
        async ({ user }) => {
            const favorites = await prisma.modFavorite.findMany({
                where: {
                    userId: user.id,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                select: {
                    id: true,
                    mod: {
                        select: {
                            id: true,
                            favoritesCount: true,
                        }
                    },
                }
            })
            return { status: true, data: favorites }
        },
    )