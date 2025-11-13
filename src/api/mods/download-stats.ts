import { Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia().get(
    "/api/mods/:mod_id/download-stats",
    async ({ params: { mod_id }, query: { period } }) => {
      // Validate mod exists - mod_id can be either numeric ID or mod_id string
      let mod;
      if (!isNaN(parseInt(mod_id))) {
        mod = await prisma.mod.findUnique({
          where: { id: parseInt(mod_id) },
          select: { id: true },
        });
      } else {
        mod = await prisma.mod.findUnique({
          where: { mod_id: mod_id },
          select: { id: true },
        });
      }

      if (!mod) {
        return {
          status: false,
          message: "Mod not found",
        };
      }

      // Calculate date range based on period
      let startDate: Date;
      const now = new Date();

      switch (period) {
        case "week":
          // Last 7 days
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 7);
          break;
        case "month":
          // Last 30 days
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 30);
          break;
        case "all":
          // All time - set to a very old date
          startDate = new Date(0);
          break;
        default:
          // Default to last 7 days
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 7);
      }

      // Get all versions for this mod (use the found mod's id)
      const versions = await prisma.modVersion.findMany({
        where: {
          modId: mod.id,
        },
        select: {
          id: true,
        },
      });

      const versionIds = versions.map((v) => v.id);

      if (versionIds.length === 0) {
        return {
          status: true,
          data: [],
        };
      }

      // Get downloads grouped by date
      const downloads = await prisma.modDownload.findMany({
        where: {
          modVersionId: {
            in: versionIds,
          },
          createdAt: {
            gte: startDate,
          },
        },
        select: {
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      // Group downloads by date
      const downloadsByDate = new Map<string, number>();

      downloads.forEach((download) => {
        const date = new Date(download.createdAt);
        // Format as YYYY-MM-DD
        const dateKey = date.toISOString().split("T")[0];

        downloadsByDate.set(
          dateKey,
          (downloadsByDate.get(dateKey) || 0) + 1
        );
      });

      // Convert to array format for chart
      const chartData = Array.from(downloadsByDate.entries())
        .map(([date, count]) => ({
          date,
          count,
        }))
        .sort((a, b) => a.date.localeCompare(b.date));

      return {
        status: true,
        data: chartData,
      };
    },
    {
      params: t.Object({
        mod_id: t.String(),
      }),
      query: t.Object({
        period: t.Optional(
          t.Union([
            t.Literal("week"),
            t.Literal("month"),
            t.Literal("all"),
          ])
        ),
      }),
    }
  );

