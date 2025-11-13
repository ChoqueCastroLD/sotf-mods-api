import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { semver } from 'bun';


export const router = () => new Elysia()
    .get(
        '/api/mods/:mod_id',
        async ({ params: { mod_id } }) => {
            if (!mod_id) {
                throw new NotFoundError();
            }
            const mod = await prisma.mod.findFirst({
                where: {
                    mod_id,
                },
                include: {
                    images: {
                        select: {
                            url: true,
                        }
                    },
                    user: {
                        select: {
                            name: true,
                            slug: true,
                            imageUrl: true,
                            isTrusted: true,
                        }
                    },
                    category: {
                        select: {
                            name: true,
                            slug: true,
                        }
                    },
                    versions: {
                        orderBy: {
                            version: "desc",
                        },
                        select: {
                            id: true,
                            version: true,
                            isLatest: true,
                            changelog: true,
                            downloadUrl: true,
                            extension: true,
                            filename: true,
                            createdAt: true,
                            updatedAt: true,
                            _count: {
                                select: {
                                    downloads: true,
                                }
                            }
                        }
                    },
                    _count: {
                        select: {
                            favorites: true,
                        }
                    }
                }
            })

            if (!mod) {
                throw new NotFoundError();
            }

            return { status: true, data: mod };
        }
    )