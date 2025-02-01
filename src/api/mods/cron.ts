import { Elysia, t } from "elysia";
import { cron } from "@elysiajs/cron";

import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia().use(
    cron({
      name: "heartbeat",
      pattern: "*/30 * * * *",
      async run() {
        const mods = await prisma.mod.findMany({
          include: {
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
          },
        });
        for (const mod of mods) {
          const downloads_arr =
            mod.versions?.flatMap((version) =>
              version.downloads.map((download) => download.ip)
            ) ?? [];

          const downloads = downloads_arr.length;

          const lastWeekDownloads = [
            ...new Set(
              mod.versions?.flatMap((version) => {
                return version.downloads
                  .filter(
                    (download) =>
                      download.createdAt >
                      new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
                  ) // 7 days
                  .map((download) => download.ip);
              }) ?? []
            ),
          ].length;

          await prisma.mod.update({
            where: { id: mod.id },
            data: {
              lastWeekDownloads,
              downloads,
            },
          });
        }
      },
    })
  );
