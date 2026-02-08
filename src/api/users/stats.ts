import { Elysia, NotFoundError, t } from "elysia";

import { prisma } from "../../services/prisma";

export const router = () =>
    new Elysia().get(
        "/api/users/:userSlug/stats",
        async ({ params: { userSlug } }) => {
            const user = await prisma.user.findFirst({
                where: { slug: userSlug },
                select: { id: true },
            });

            if (!user) {
                throw new NotFoundError();
            }

            const now = new Date();

            const oneDayAgo = new Date(now);
            oneDayAgo.setDate(oneDayAgo.getDate() - 1);

            const sevenDaysAgo = new Date(now);
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

            const thirtyDaysAgo = new Date(now);
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

            const modIds = await prisma.mod.findMany({
                where: { userId: user.id },
                select: { id: true },
            });

            const ids = modIds.map((m) => m.id);

            if (ids.length === 0) {
                return {
                    status: true,
                    data: {
                        modsCount: 0,
                        totalDownloads: 0,
                        downloadsLastDay: 0,
                        downloadsLast7Days: 0,
                        downloadsLast30Days: 0,
                        totalFavorites: 0,
                        totalReviews: 0,
                        averageRating: 0,
                    },
                };
            }

            const versionIds = await prisma.modVersion.findMany({
                where: { modId: { in: ids } },
                select: { id: true },
            });
            const vIds = versionIds.map((v) => v.id);

            const downloadWhere = vIds.length > 0 ? { modVersionId: { in: vIds } } : { modVersionId: -1 };

            const [
                modsCount,
                totalDownloads,
                downloadsLastDay,
                downloadsLast7Days,
                downloadsLast30Days,
                totalFavorites,
                totalReviews,
                ratingAgg,
            ] = await Promise.all([
                prisma.mod.count({ where: { userId: user.id } }),
                prisma.modDownload.count({ where: downloadWhere }),
                prisma.modDownload.count({
                    where: { ...downloadWhere, createdAt: { gte: oneDayAgo } },
                }),
                prisma.modDownload.count({
                    where: { ...downloadWhere, createdAt: { gte: sevenDaysAgo } },
                }),
                prisma.modDownload.count({
                    where: { ...downloadWhere, createdAt: { gte: thirtyDaysAgo } },
                }),
                prisma.modFavorite.count({ where: { modId: { in: ids } } }),
                prisma.modReview.count({ where: { modId: { in: ids } } }),
                prisma.modReview.aggregate({
                    _avg: { rating: true },
                    where: { modId: { in: ids } },
                }),
            ]);

            return {
                status: true,
                data: {
                    modsCount,
                    totalDownloads,
                    downloadsLastDay,
                    downloadsLast7Days,
                    downloadsLast30Days,
                    totalFavorites,
                    totalReviews,
                    averageRating: ratingAgg._avg.rating ?? 0,
                },
            };
        },
        {
            params: t.Object({
                userSlug: t.String(),
            }),
        }
    );
