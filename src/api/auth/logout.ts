import { Elysia, t } from 'elysia'

import { prisma } from "../../services/prisma";
import { loggedOnly } from '../../middlewares/auth.middleware'


export const router = () => new Elysia()
    .use(loggedOnly())
    .post(
        '/api/auth/logout',
        async ({ token, cookie }) => {
            await prisma.token.deleteMany({
                where: {
                    OR: [
                        {
                            expiresAt: {
                                lt: new Date(),
                            }
                        },
                        {
                            token
                        }
                    ]
                }
            });

            cookie.token.remove();

            return { status: true };
        }, {
            response: t.Object({
                status: t.Boolean(),
            })
        }
    )