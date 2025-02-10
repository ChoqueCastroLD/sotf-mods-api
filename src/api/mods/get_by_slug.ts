import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/mods/slug/:userSlug/:mod_slug',
        async ({ params: { userSlug, mod_slug } }) => {
            if (!mod_slug) {
                throw new NotFoundError();
            }
            const mod = await prisma.mod.findFirst({
                where: {
                    user: {
                        slug: userSlug,
                    },
                    slug: mod_slug,
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