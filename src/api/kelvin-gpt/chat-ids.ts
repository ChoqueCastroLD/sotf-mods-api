import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'


export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .get(
        '/api/kelvin-gpt/chat/ids',
        async ({ user }) => {
            if (user?.canApprove !== true) {
                throw new NotFoundError();
            }
            const chatIds = await prisma.kelvinGPTMessages.groupBy({
                by: ['chatId']
            })
            return chatIds.map(chat => chat.chatId)
        }, {
            query: t.Object({
                chat_id: t.String(),
            }),
            response: t.Array(t.String())
        }
    )