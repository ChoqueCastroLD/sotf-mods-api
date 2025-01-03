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
                    image_url: true,
                }
            })

            if (!user) {
                throw new NotFoundError()
            }

            return user
        }
    )