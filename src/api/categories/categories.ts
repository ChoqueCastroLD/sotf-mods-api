import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/categories',
        async ({ query: { type } }) => {
            const categories = await prisma.category.findMany({
                where: {
                    type: type || "Mod",
                },
                orderBy: {
                    name: 'asc',
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                }
            })
            return { status: true, data: categories }
        },
    )