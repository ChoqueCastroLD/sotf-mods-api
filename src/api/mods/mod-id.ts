import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/mods/find',
        async ({ query: { userSlug, mod_slug } }) => {
            const mod = await prisma.mod.findFirst({
                where: {
                    slug: mod_slug,
                    user: {
                        slug: userSlug,
                    }
                },
                select: {
                    mod_id: true,
                }
            })

            if (!mod) {
                throw new NotFoundError();
            }

            return { status: true, data: mod };
        },
        {
            query: t.Object({
                userSlug: t.String(),
                mod_slug: t.String(),
            })
        }
    )