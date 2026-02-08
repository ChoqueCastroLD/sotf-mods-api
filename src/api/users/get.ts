import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma'


export const router = () => new Elysia()
    .get(
        '/api/users/:userSlug',
        async ({ params }) => {
            const user = await prisma.user.findFirst({
                where: {
                    slug: params?.userSlug,
                },
                select: {
                    name: true,
                    slug: true,
                    imageUrl: true,
                    isTrusted: true,
                    createdAt: true,
                }
            })

            if (!user) {
                throw new NotFoundError()
            }

            return { status: true, data: user }
        }
    )