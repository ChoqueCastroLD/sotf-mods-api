import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';


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
                            isPrimary: true,
                            isThumbnail: true,
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

            const thumbnail_url = mod?.images
                ?.find((image) => image.isThumbnail)?.url
                ?? mod.images?.[0]?.url
                ?? "https://via.placeholder.com/1080x608/222/222";

            const primary_image_url = mod?.images
                ?.find((image) => image.isPrimary)?.url
                ?? mod.images?.[0]?.url
                ?? "https://via.placeholder.com/1080x608/222/222";

            const latest_version = mod.versions?.find((version) => version.isLatest);

            const versions = mod.versions?.map(version => ({
                version: version.version,
                changelog: version.changelog,
                downloads: version.downloads.length,
            }));

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
                thumbnail_url,
                primary_image_url,
                dependencies: mod?.dependencies?.split(","),
                type: mod?.type ?? "Mod",
                latest_version: latest_version?.version,
                downloads: mod.downloads,
                lastWeekDownloads: mod.lastWeekDownloads,
                favorites,
                versions,
                lastReleasedAt: mod.lastReleasedAt,
            };

            return { status: true, data: modDetails };
        }
    )