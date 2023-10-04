import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'


export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .get(
        '/api/kelvin-gpt/chat',
        async ({ query: { chat_id }, user }) => {
            if (user?.canApprove !== true) {
                throw new NotFoundError()
            }

            const chats = await prisma.kelvinGPTMessages.findMany({
                where: {
                    chatId: chat_id
                },
                orderBy: {
                    createdAt: 'desc'
                }
            })
            return chats.map(chat => chat.message)
        }, {
            query: t.Object({
                chat_id: t.String(),
            }),
            response: t.Array(t.String())
        }
    )