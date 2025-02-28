import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';

export const router = () => new Elysia()
    .get(
        '/api/mods',
        async ({ query: { type, page, limit, search, userSlug, userSlugFavorites, approved, nsfw, orderby, category, modIds } }) => {
            const query_stringified = JSON.stringify({ type, page, limit, search, userSlug, userSlugFavorites, approved, nsfw, orderby, category, modIds });
            console.log(query_stringified);

            const meta = {
                page: page ? parseInt(page) : 1,
                limit: limit ? parseInt(limit) : 10,
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
            if (userSlug) {
                where.user = {
                    slug: userSlug,
                }
            }
            if (userSlugFavorites) {
                where.favorites = {
                    some: {
                        user: {
                            slug: userSlugFavorites,
                        }
                    }
                }
            }

            if (modIds) {
                where.mod_id = {
                    in: modIds.split(",").map(id => id.trim()),
                }
            }

            where.isApproved = approved && (approved === "true");

            if (category) {
                where.category = {
                    slug: category,
                }
            }

            where.isNSFW = nsfw === "true";

            if (type !== "Both") {
                where.type = type || "Mod";
            }

            const orderBy: any = {}

            switch (orderby) {
                case "most_downloaded":
                    orderBy["downloads"] = 'desc'
                    break;
                case "least_downloaded":
                    orderBy["downloads"] = 'asc'
                    break;
                case "most_downloaded_week":
                    orderBy["lastWeekDownloads"] = 'desc'
                    break;
                case "least_downloaded_week":
                    orderBy["lastWeekDownloads"] = 'asc'
                    break;
                case "most_followed":
                    orderBy["favoritesCount"] = 'desc'
                    break;
                case "least_followed":
                    orderBy["favoritesCount"] = 'asc'
                    break;
                case "highest_rating":
                    orderBy["averageRating"] = 'desc'
                    break;
                case "lowest_rating":
                    orderBy["averageRating"] = 'asc'
                    break;
                case "oldest":
                    orderBy["lastReleasedAt"] = "asc"
                    break;
                case "newest":
                default:
                    orderBy["lastReleasedAt"] = "desc"
                    break;
            }

            const [mods, total_count] = await Promise.all([
                prisma.mod.findMany({
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
                            select: {
                                version: true,
                                isLatest: true,
                            },
                            orderBy: {
                                version: "asc",
                            },
                            take: 1,
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
                }),
                prisma.mod.count({ where }),
            ]);

            const number_of_pages = Math.ceil(total_count / meta.limit);
            const next_page = (meta.page + 1 <= number_of_pages ? meta.page + 1 : number_of_pages);
            const prev_page = (meta.page - 1 > 0 ? meta.page - 1 : 1);

            const returnMeta = {
                total: total_count,
                page: meta.page,
                limit: meta.limit,
                pages: number_of_pages,
                next_page: next_page,
                prev_page: prev_page,
            }

            const result = { status: true, data: mods, meta: returnMeta };

            return result;
        }, {
            query: t.Object({
                page: t.Optional(t.String()),
                limit: t.Optional(t.String()),
                type: t.Optional(t.String()),
                search: t.Optional(t.String()),
                userSlug: t.Optional(t.String()),
                userSlugFavorites: t.Optional(t.String()),
                modIds: t.Optional(t.String()),
                nsfw: t.Optional(t.String()),
                approved: t.Optional(t.String()),
                orderby: t.Optional(t.String()),
                category: t.Optional(t.String()),
            }),
        }
    )