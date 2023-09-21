import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { timeAgo } from '../../shared/time-ago';


export const router = new Elysia()
    .get(
        '/api/mods',
        async ({ query: { page, limit, search, user_slug, favorites_of_user_slug, approved, nsfw, orderby }, set }) => {
            const meta = {
                page: page ? parseInt(page) : 1,
                limit: limit ? parseInt(limit) : 10,
                search,
                user_slug,
                nsfw: nsfw === "true" ? nsfw : false,
            }
            const where: any = {};

            if (search) {
                where.OR = [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        }
                    },
                    {
                        description: {
                            contains: search,
                            mode: "insensitive",
                        }
                    },
                    {
                        user: {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            }
                        }
                    }
                ]
            }
            if (user_slug) {
                where.user = {
                    slug: user_slug,
                }
            }
            if (favorites_of_user_slug) {
                where.favorites = {
                    some: {
                        user: {
                            slug: favorites_of_user_slug,
                        }
                    }
                }
            }

            if (approved !== "false") {
                where.isApproved = true;
            }

            const orderBy: any = {}
            switch (orderby) {
                case "popular":
                    orderBy["favorites"] = { _count: 'desc' }
                    break;
                case "unpopular":
                    orderBy["favorites"] = { _count: 'asc' }
                    break;
                case "oldest":
                    orderBy["updatedAt"] = "asc"
                    break;
                case "newest":
                default:
                    orderBy["updatedAt"] = "desc"
                    break;
            }

            const mods = await prisma.mod.findMany({
                where: where,
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
                },
                orderBy,
                take: meta.limit,
                skip: (meta.page - 1) * meta.limit,
            })

            const total_count = await prisma.mod.count({ where });
            const number_of_pages = Math.ceil(total_count / meta.limit);
            const next_page = (meta.page + 1 <= number_of_pages ? meta.page + 1 : number_of_pages);
            const prev_page = (meta.page - 1 > 0 ? meta.page - 1 : 1);
            set.headers['X-Total-Count'] = total_count.toString();
            set.headers['X-Page'] = meta.page.toString();
            set.headers['X-Limit'] = meta.limit.toString();
            set.headers['X-Pages'] = number_of_pages.toString();
            set.headers['X-Next-Page'] = next_page.toString();
            set.headers['X-Prev-Page'] = prev_page.toString();

            return mods.map(mod => {
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
                    downloads,
                    favorites,
                    total_downloads,
                    time_ago,
                }
            })
        }, {
            query: t.Object({
                page: t.Optional(t.String()),
                limit: t.Optional(t.String()),
                search: t.Optional(t.String()),
                user_slug: t.Optional(t.String()),
                favorites_of_user_slug: t.Optional(t.String()),
                nsfw: t.Optional(t.String()),
                approved: t.Optional(t.String()),
                orderby: t.Optional(t.String()),
            }),
        }
    )