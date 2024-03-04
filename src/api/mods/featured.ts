import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { timeAgo } from '../../shared/time-ago';
import { authMiddleware } from '../../middlewares/auth.middleware';


const featuredModsCache: any = {};

export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: false }))
    .get(
        '/api/mods/featured',
        async ({ user }) => {
            const query_stringified = JSON.stringify({ user });
            if (featuredModsCache[query_stringified] && featuredModsCache[query_stringified].expires_at > Date.now()) {
                return featuredModsCache[query_stringified].data;
            }
            const mods = await prisma.mod.findMany({
                where: {
                    isNSFW: false,
                    isApproved: true,
                    type: "Mod",
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
                                    createdAt: true,
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

            let allMods = mods.map(mod => {
                const thumbnail_url = mod?.images
                    ?.find((image) => image.isThumbnail)?.url
                    ?? mod.images?.[0]?.url
                    ?? "https://via.placeholder.com/1080x608/222/222";
            
                const primary_image_url = mod?.images
                    ?.find((image) => image.isPrimary)?.url
                    ?? mod.images?.[0]?.url
                    ?? "https://via.placeholder.com/1080x608/222/222";

                const latest_version = mod.versions?.find((version) => version.isLatest);

                const downloads_arr = mod.versions?.flatMap(version => {
                    return version.downloads
                        .map(download => download.ip)
                }) ?? [];

                const last_week_downloads = [...new Set(mod.versions?.flatMap(version => {
                    return version.downloads
                        .filter(download => download.createdAt > new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)) // 7 days
                        .map(download => download.ip)
                }) ?? [])].length;

                const downloads = [...new Set(downloads_arr)].length;

                const favorites = mod._count.favorites;

                const total_downloads = downloads_arr.length;

                const time_ago = timeAgo(mod.lastReleasedAt);

                const isFavorite = user?.favoriteMods?.some((favorite) => favorite?.mod?.mod_id === mod.mod_id);

                return {
                    mod_id: mod.mod_id,
                    name: mod.name,
                    slug: mod.slug,
                    short_description: mod.shortDescription,
                    isNSFW: mod.isNSFW,
                    isApproved: mod.isApproved,
                    isFeatured: mod.isFeatured,
                    isFavorite,
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
                    downloads,
                    last_week_downloads,
                    favorites,
                    total_downloads,
                    time_ago,
                }
            })

            const result = allMods.sort((a, b) => b.last_week_downloads - a.last_week_downloads).slice(0, 5);

            featuredModsCache[query_stringified] = {
                expires_at: Date.now() + 1000 * 60 * 5, // 5 minutes
                data: result
            }

            return result;
        }
    )
