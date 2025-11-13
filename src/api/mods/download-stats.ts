import { Elysia, t } from "elysia";
import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia().get(
    "/api/mods/:mod_id/download-stats",
    async ({ params: { mod_id }, query }) => {
      const period = query?.period;
      console.log(`[Download Stats] Request received - mod_id: ${mod_id}, period: ${period}, query object:`, JSON.stringify(query));
      
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
      
      // Normalize period to string and handle undefined
      const periodStr = period?.toString() || 'week';
      console.log(`[Download Stats] Processing period: ${periodStr}`);

      switch (periodStr) {
        case "week":
          // Last 7 days
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 7);
          startDate.setHours(0, 0, 0, 0); // Set to start of day
          break;
        case "month":
          // Last 30 days
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 30);
          startDate.setHours(0, 0, 0, 0); // Set to start of day
          break;
        case "all":
          // All time - set to a very old date
          startDate = new Date(0);
          break;
        default:
          // Default to last 7 days
          console.log(`[Download Stats] Unknown period "${periodStr}", defaulting to week`);
          startDate = new Date(now);
          startDate.setDate(startDate.getDate() - 7);
          startDate.setHours(0, 0, 0, 0); // Set to start of day
      }
      
      console.log(`[Download Stats] Date range: ${startDate.toISOString()} to ${now.toISOString()}`);

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
      const whereClause: any = {
        modVersionId: {
          in: versionIds,
        },
      };
      
      // Only add date filter if not "all"
      if (periodStr !== "all") {
        whereClause.createdAt = {
          gte: startDate,
        };
      }
      
      console.log(`[Download Stats] Query where clause:`, JSON.stringify(whereClause));
      
      const downloads = await prisma.modDownload.findMany({
        where: whereClause,
        select: {
          createdAt: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      });
      
      console.log(`[Download Stats] Found ${downloads.length} total downloads`);
      
      // Log first few download dates for debugging
      if (downloads.length > 0) {
        const sampleDates = downloads.slice(0, 5).map(d => d.createdAt.toISOString());
        console.log(`[Download Stats] Sample download dates:`, sampleDates);
      }

      // Group downloads by date
      const downloadsByDate = new Map<string, number>();

      downloads.forEach((download) => {
        const date = new Date(download.createdAt);
        // Use UTC date to avoid timezone issues
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const dateKey = `${year}-${month}-${day}`;

        downloadsByDate.set(
          dateKey,
          (downloadsByDate.get(dateKey) || 0) + 1
        );
      });
      
      console.log(`[Download Stats] Grouped into ${downloadsByDate.size} unique dates`);
      console.log(`[Download Stats] Date keys:`, Array.from(downloadsByDate.keys()));

      // Convert to array format for chart
      const chartData = Array.from(downloadsByDate.entries())
        .map(([date, count]) => ({
          date,
          count,
        }))
        .sort((a, b) => a.date.localeCompare(b.date));

      console.log(`[Download Stats] Returning ${chartData.length} data points for period ${periodStr}`);
      console.log(`[Download Stats] Date range in response: ${chartData[0]?.date} to ${chartData[chartData.length - 1]?.date}`);

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
        _t: t.Optional(t.String()), // Ignore timestamp parameter
      }),
    }
  );

