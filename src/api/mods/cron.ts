import { Elysia, t } from "elysia";
import { cron } from "@elysiajs/cron";

import { prisma } from "../../services/prisma";
import { sendBatchedMentionsEmail, type MentionItem } from "../../services/email";

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
    )
    // Count comments
    .use(
      cron({
        name: "count comments",
        pattern: "*/30 * * * *",
        async run() {
          const mods = await prisma.mod.findMany({
            include: {
              comments: true,
            },
          });
          for (const mod of mods) {
            await prisma.mod.update({
              where: { id: mod.id },
              data: {
                commentsCount: mod.comments.length,
              },
            });
          }
        },
      })
    )
    // Batched mention notifications
    .use(
      cron({
        name: "batched mentions",
        pattern: "*/10 * * * *",
        async run() {
          const pending = await prisma.pendingMention.findMany({
            include: {
              targetUser: { select: { email: true, name: true } },
              fromUser: { select: { name: true } },
              mod: {
                select: { name: true, slug: true, user: { select: { slug: true } } },
              },
            },
          });

          if (pending.length === 0) return;

          const BASE_URL = Bun.env.BASE_URL ?? "https://sotf-mods.com";

          // Group by target user
          const grouped = new Map<number, { email: string; userName: string; mentions: MentionItem[] }>();

          for (const p of pending) {
            if (!grouped.has(p.targetUserId)) {
              grouped.set(p.targetUserId, {
                email: p.targetUser.email,
                userName: p.targetUser.name,
                mentions: [],
              });
            }
            const modUrl = `${BASE_URL}/mods/${p.mod.user?.slug ?? "unknown"}/${p.mod.slug}`;
            grouped.get(p.targetUserId)!.mentions.push({
              type: p.type,
              fromUserName: p.fromUser.name,
              modName: p.mod.name,
              modUrl,
              message: p.commentMessage,
            });
          }

          // Send one email per user
          for (const [, { email, userName, mentions }] of grouped) {
            await sendBatchedMentionsEmail(email, userName, mentions).catch((err) => {
              console.error("Failed to send batched mentions email:", err);
            });
          }

          // Delete all processed records
          await prisma.pendingMention.deleteMany({
            where: {
              id: { in: pending.map((p) => p.id) },
            },
          });
        },
      })
    );
