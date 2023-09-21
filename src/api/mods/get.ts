import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { timeAgo } from '../../shared/time-ago';


export const router = new Elysia()
    .get(
        '/api/mods/:user_slug/:mod_slug',
        async ({ params: { user_slug, mod_slug } }) => {
            const mod = await prisma.mod.findFirst({
                where: {
                    slug: mod_slug,
                    user: {
                        slug: user_slug
                    }
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
                            version: "asc",
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

            const downloads_arr = mod.versions?.flatMap(version => version.downloads.map(download => download.ip)) ?? [];

            const downloads = [...new Set(downloads_arr)].length;

            const versions = mod.versions?.map(version => ({
                version: version.version,
                changelog: version.changelog,
                downloads: version.downloads.length,
            }));

            const favorites = mod._count.favorites;

            const total_downloads = downloads_arr.length;

            let time_ago = timeAgo(mod.updatedAt);
            if (latest_version && (new Date(latest_version.createdAt)).getTime() > (new Date(mod.updatedAt)).getTime()) {
                time_ago = timeAgo(latest_version.createdAt);
            }

            return {
                name: mod.name,
                slug: mod.slug,
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
                latest_version: latest_version?.version,
                download_url: latest_version?.downloadUrl,
                downloads,
                favorites,
                total_downloads,
                versions,
                time_ago,
            }
        }
    )