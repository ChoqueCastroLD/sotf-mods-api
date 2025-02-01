import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/stats',
        async () => {
            const [users, mods, downloads, developers] = await Promise.all([
                prisma.user.count(),
                prisma.mod.count(),
                prisma.modDownload.count(),
                prisma.user.count({
                    where: {
                        mods: {
                            some: {
                                isApproved: true,
                            }
                        }
                    }
                })
            ]);
            
            return {
                status: true,
                data: {
                    users,
                    mods,
                    downloads,
                    developers,
                }
            }
        },
    )