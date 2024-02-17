import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = new Elysia()
    .get(
        '/api/kelvin-gpt/clear-history',
        async ({ query: { chat_id, gpt_key } }) => {
            await prisma.kelvinGPTMessages.deleteMany({
                where: {
                    chatId: chat_id
                }
            });
            return "Chat cleared";
        }, {
            query: t.Object({
                chat_id: t.String(),
                gpt_key: t.String()
            }),
            response: t.String()
        }
    )