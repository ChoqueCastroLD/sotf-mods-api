import { Elysia, t } from 'elysia'

import { prisma } from "../../services/prisma";
import { authMiddleware } from '../../middlewares/auth.middleware'


export const router = () => new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .get(
        '/api/auth/check',
        async ({ token }) => {
            const user = await prisma.user.findFirst({
                where: {
                    tokens: {
                        some: {
                            token
                        }
                    }
                },
                select: {
                    name: true,
                    slug: true,
                    email: true,
                    image_url: true,
                    canApprove: true,
                }
            });

            return user;
        }
    )