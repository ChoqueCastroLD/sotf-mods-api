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
            const chatIdsWithLatestUpdatedAt = await prisma.kelvinGPTMessages.groupBy({
                by: ['chatId'],
                _max: {
                    updatedAt: true,
                },
            })
            console.log(chatIdsWithLatestUpdatedAt);
            const chatIdsOrderedByUpdatedAt = chatIdsWithLatestUpdatedAt.sort((a, b) =>
                b?._max?.updatedAt?.getTime() && a?._max?.updatedAt?.getTime()
                ? b._max.updatedAt.getTime() - a._max.updatedAt.getTime()
                : 0
            ).map(chat => ({chatId: chat.chatId, updatedAt: chat._max.updatedAt}))
            
            return chatIdsOrderedByUpdatedAt
        }
    )