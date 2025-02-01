import { Elysia } from 'elysia';
import { prisma } from '../../services/prisma';

export const router = () => new Elysia()
    .get('/api/mods/featured', async () => {
        const mods = await prisma.mod.findMany({
            where: {
                isNSFW: false,
                isApproved: true,
                type: "Mod",
            },
            orderBy: {
                lastWeekDownloads: 'desc',
            },
            take: 4,
            select: {
                id: true,
                name: true,
                slug: true,
                mod_id: true,
                shortDescription: true,
                isNSFW: true,
                isApproved: true,
                isFeatured: true,
                lastReleasedAt: true,
                type: true,
                dependencies: true,
                category: {
                    select: {
                        name: true,
                        slug: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                        slug: true,
                        image_url: true,
                    }
                },
                images: {
                    select: {
                        isPrimary: true,
                        isThumbnail: true,
                        url: true,
                    }
                },
                _count: {
                    select: { favorites: true }
                }
            }
        });

        const result = mods.map(mod => {
            const thumbnail_url = mod?.images?.find(image => image.isThumbnail)?.url
                ?? mod.images?.[0]?.url
                ?? "https://via.placeholder.com/1080x608/222/222";

            const primary_image_url = mod?.images?.find(image => image.isPrimary)?.url
                ?? mod.images?.[0]?.url
                ?? "https://via.placeholder.com/1080x608/222/222";

            return {
                mod_id: mod.mod_id,
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
                dependencies: mod?.dependencies?.split(",") ?? [],
                type: mod?.type ?? "Mod",
                lastWeekDownloads: mod.lastWeekDownloads,
                downloads: mod.downloads,
                favorites: mod._count.favorites,
                lastReleasedAt: mod.lastReleasedAt,
            };
        });

        return { status: true, data: result };
    });
