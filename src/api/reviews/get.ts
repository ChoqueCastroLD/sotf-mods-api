import { Elysia, NotFoundError } from 'elysia'

import { prisma } from '../../services/prisma';

export const router = () => new Elysia()
    .get(
        '/api/reviews',
        async ({ query: { modId } }) => {
            if (!modId) {
                throw new NotFoundError();
            }
            const reviews = await prisma.modReview.findMany({
                where: {
                    modId: Number(modId),
                },
                orderBy: {
                    createdAt: 'desc',
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
            return { status: true, data: reviews }
        },
    )