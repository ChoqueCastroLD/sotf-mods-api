import { Elysia, t } from "elysia";
import { cron } from "@elysiajs/cron";

import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia()
    // Count downloads for the last week
    .use(
      cron({
        name: "last week downloads",
        pattern: "*/30 * * * *",
        async run() {
          const mods = await prisma.mod.findMany({
            include: {
              versions: {
                orderBy: {
                  version: "asc",
                },
                select: {
                  _count: {
                    select: {
                      downloads: {
                        where: {
                          createdAt: {
                            gt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          });
          for (const mod of mods) {
            await prisma.mod.update({
              where: { id: mod.id },
              data: {
                lastWeekDownloads: mod.versions.reduce(
                  (acc, version) => acc + version._count.downloads,
                  0
                ),
              },
            });
          }
        },
      })
    )
    // Count downloads
    .use(
      cron({
        name: "count downloads",
        pattern: "*/30 * * * *",
        async run() {
          const mods = await prisma.mod.findMany({
            include: {
              versions: {
                orderBy: {
                  version: "asc",
                },
                select: {
                  _count: {
                    select: {
                      downloads: true,
                    },
                  },
                },
              },
            },
          });
          for (const mod of mods) {
            await prisma.mod.update({
              where: { id: mod.id },
              data: {
                downloads: mod.versions.reduce(
                  (acc, version) => acc + version._count.downloads,
                  0
                ),
              },
            });
          }
        },
      })
    )
    // Count favorites
    .use(
      cron({
        name: "count favorites",
        pattern: "*/30 * * * *",
        async run() {
          const mods = await prisma.mod.findMany({
            include: {
              favorites: true,
            },
          });
          for (const mod of mods) {
            await prisma.mod.update({
              where: { id: mod.id },
              data: {
                favoritesCount: mod.favorites.length,
              },
            });
          }
        },
      })
    );
