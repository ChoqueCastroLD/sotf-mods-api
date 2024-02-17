import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { timeAgo } from '../../shared/time-ago';
import { authMiddleware } from '../../middlewares/auth.middleware';


export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: false }))
    .get(
        '/api/comments',
        async ({ query: { mod_id, comment_id }, user }) => {
            const comments = await prisma.comment.findMany({
                where: {
                    
                },
                select: {
                    message: true,
                    createdAt: true,
                    isHidden: true,
                    user: {
                        select: {
                            name: true,
                            slug: true,
                            image_url: true,
                        }
                    },
                    replies: {
                        select: {
                            id: true,
                            message: true,
                            createdAt: true,
                            isHidden: true,
                            user: {
                                select: {
                                    name: true,
                                    slug: true,
                                    image_url: true,
                                }
                            },
                            _count: {
                                select: {
                                    replies: true
                                }
                            }
                        },
                        take: 1
                    }
                },
                orderBy: {

                },
            })

            // const time_ago = timeAgo(mod.lastReleasedAt);
            return []
        }, {
            query: t.Object({
                mod_id: t.String(),
                comment_id: t.Optional(t.String())
            }),
        }
    )