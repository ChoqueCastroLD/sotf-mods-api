import { Elysia } from "elysia";
import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia()
    .get("/api/mods/featured", async () => {
      const mods = await prisma.mod.findMany({
        where: {
          isNSFW: false,
          isApproved: true,
          type: "Mod",
        },
        orderBy: {
          lastWeekDownloads: "desc",
        },
        take: 12,
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
          lastWeekDownloads: true,
          imageUrl: true,
          downloads: true,
          latestVersion: true,
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          user: {
            select: {
              name: true,
              slug: true,
              imageUrl: true,
              isTrusted: true,
            },
          },
          images: {
            select: {
              isPrimary: true,
              isThumbnail: true,
              url: true,
            },
          },
          _count: {
            select: { favorites: true },
          },
        },
      });

      return { status: true, data: mods };
    })
    .get("/api/builds/featured", async () => {
      const mods = await prisma.mod.findMany({
        where: {
          isNSFW: false,

          isApproved: true,
          type: "Build",
        },
        orderBy: {
          lastWeekDownloads: "desc",
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
          lastWeekDownloads: true,
          imageUrl: true,
          downloads: true,
          latestVersion: true,
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          user: {
            select: {
              name: true,
              slug: true,
              imageUrl: true,
              isTrusted: true,
            },
          },
          images: {
            select: {
              isPrimary: true,
              isThumbnail: true,
              url: true,
            },
          },
          _count: {
            select: { favorites: true },
          },
        },
      });

      return { status: true, data: mods };
    });
