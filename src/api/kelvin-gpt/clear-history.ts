import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = new Elysia()
    .get(
        '/api/kelvin-gpt/clear-history',
        async ({ query: { chat_id } }) => {
            await prisma.kelvinGPTMessages.deleteMany({
                where: {
                    chatId: chat_id
                }
            });
            return "Chat cleared";
        }, {
            query: t.Object({
                chat_id: t.String(),
            }),
            response: t.String()
        }
    )