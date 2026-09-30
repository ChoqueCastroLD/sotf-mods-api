-- Patch Radar uptime (T1-20): one row per probe of a platform component ("web", "api", "media",
-- "database"). The worker job `compat.uptime_probe` inserts a sample per component every
-- 5 minutes and prunes samples older than 100 days; `GET /api/v2/compat/uptime` aggregates them
-- per day for the series on /patch-radar. Additive: no legacy table is touched.

CREATE TABLE "CompatUptimeSample" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "component" text NOT NULL,
  "ok" boolean NOT NULL,
  "latencyMs" integer,
  "statusCode" integer,
  "checkedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "CompatUptimeSample_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CompatUptimeSample_component_check" CHECK ("component" IN ('web', 'api', 'media', 'database')),
  CONSTRAINT "CompatUptimeSample_latencyMs_check" CHECK ("latencyMs" IS NULL OR "latencyMs" >= 0)
);

CREATE INDEX "CompatUptimeSample_component_checkedAt_idx" ON "CompatUptimeSample"("component", "checkedAt" DESC);

CREATE INDEX "CompatUptimeSample_checkedAt_idx" ON "CompatUptimeSample"("checkedAt");
