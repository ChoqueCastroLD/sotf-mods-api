import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/mods/slug/:user_slug/:mod_slug',
        async ({ params: { user_slug, mod_slug } }) => {
            if (!mod_slug) {
                throw new NotFoundError();
            }
            const mod = await prisma.mod.findFirst({
                where: {
                    user: {
                        slug: user_slug,
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
                            image_url: true,
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
                        include: {
                            downloads: {
                                select: {
                                    ip: true,
                                },
                            },
                        },
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

            const versions = mod.versions?.map(version => ({
                version: version.version,
                isLatest: version.isLatest,
                changelog: version.changelog,
                downloads: version.downloads.length,
            })).sort((a, b) => Bun.semver.order(b.version, a.version));

            const favorites = mod._count.favorites;

            const modDetails = {
                mod_id: mod.mod_id,
                name: mod.name,
                slug: mod.slug,
                description: mod.description,
                short_description: mod.shortDescription,
                isNSFW: mod.isNSFW,
                isApproved: mod.isApproved,
                isFeatured: mod.isFeatured,
                category_slug: mod?.category?.slug,
                category_name: mod?.category?.name,
                user_name: mod?.user?.name,
                user_slug: mod?.user?.slug,
                user_image_url: mod?.user?.image_url,
                imageUrl: mod?.imageUrl,
                dependencies: mod?.dependencies?.split(","),
                type: mod?.type ?? "Mod",
                latest_version: mod?.latestVersion,
                downloads: mod.downloads,
                lastWeekDownloads: mod.lastWeekDownloads,
                favorites,
                versions,
                lastReleasedAt: mod.lastReleasedAt,
                images: mod?.images,
            };

            return { status: true, data: modDetails };
        }
    )