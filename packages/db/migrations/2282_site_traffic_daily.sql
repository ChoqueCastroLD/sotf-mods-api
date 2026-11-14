-- Site-wide traffic per UTC day (2282): page views and visitors by one dimension at a time, plus the
-- manager, download and event counters of the owner dashboard. Rebuilt hourly by `stats.rollup`
-- from "AnalyticsEvent" (kept 90 days) and the download tables, so the history outlives the events.
CREATE TABLE IF NOT EXISTS "SiteTrafficDaily" (
  "day" date NOT NULL,
  "dimension" text NOT NULL,
  "key" text NOT NULL,
  "views" integer NOT NULL DEFAULT 0,
  "visitors" integer NOT NULL DEFAULT 0,
  CONSTRAINT "SiteTrafficDaily_pkey" PRIMARY KEY ("day", "dimension", "key")
);
