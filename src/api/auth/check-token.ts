import { Elysia, t } from 'elysia'

import { prisma } from "../../services/prisma";
import { loggedOnly } from '../../middlewares/auth.middleware'


export const router = () => new Elysia()
    .use(loggedOnly())
    .get(
        '/api/auth/check',
        async ({ user }) => {
            return {
                status: true,
                data: {
                    name: user.name,
                    slug: user.slug,
                    email: user.email,
                    imageUrl: user.imageUrl,
                    canApprove: user.canApprove,
                }
            };
        }
    )