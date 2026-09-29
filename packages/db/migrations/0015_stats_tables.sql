-- Statistics and first-party analytics (PLAN §6.4, §2.8). Aggregates carry no foreign keys on
-- purpose: they must keep adding up to count("ModDownload") even when versions or mods are
-- deleted or orphaned (invariant 1 of PLAN §6.11).

CREATE TABLE "ModVersionDownloadDaily" (
  "modVersionId" integer NOT NULL,
  "day" date NOT NULL,
  "channel" text NOT NULL,
  "downloads" integer NOT NULL DEFAULT 0,
  "uniqueDownloads" integer NOT NULL DEFAULT 0,
  CONSTRAINT "ModVersionDownloadDaily_pkey" PRIMARY KEY ("modVersionId", "day", "channel"),
  CONSTRAINT "ModVersionDownloadDaily_channel_check"
    CHECK ("channel" IN ('web', 'redmanager', 'client', 'api', 'unknown'))
);

CREATE INDEX "ModVersionDownloadDaily_day_idx" ON "ModVersionDownloadDaily"("day");

-- Orphan downloads: NULL version, or a version whose mod is gone.
CREATE TABLE "SiteDownloadDaily" (
  "day" date NOT NULL,
  "channel" text NOT NULL,
  "downloads" integer NOT NULL,
  CONSTRAINT "SiteDownloadDaily_pkey" PRIMARY KEY ("day", "channel"),
  CONSTRAINT "SiteDownloadDaily_channel_check"
    CHECK ("channel" IN ('web', 'redmanager', 'client', 'api', 'unknown'))
);

-- Uniqueness window for "uniqueDownloads" (version + ipHash + day), 2-day retention.
CREATE TABLE "DownloadUnique" (
  "modVersionId" integer NOT NULL,
  "day" date NOT NULL,
  "ipHash" text NOT NULL,
  CONSTRAINT "DownloadUnique_pkey" PRIMARY KEY ("modVersionId", "day", "ipHash")
);

CREATE INDEX "DownloadUnique_day_idx" ON "DownloadUnique"("day");

CREATE TABLE "ModStatsDaily" (
  "modId" integer NOT NULL,
  "day" date NOT NULL,
  "views" integer NOT NULL DEFAULT 0,
  "uniqueViews" integer NOT NULL DEFAULT 0,
  "downloads" integer NOT NULL DEFAULT 0,
  "uniqueDownloads" integer NOT NULL DEFAULT 0,
  "follows" integer NOT NULL DEFAULT 0,
  "unfollows" integer NOT NULL DEFAULT 0,
  "comments" integer NOT NULL DEFAULT 0,
  "reviews" integer NOT NULL DEFAULT 0,
  "compatReports" integer NOT NULL DEFAULT 0,
  "bySource" jsonb NOT NULL DEFAULT '{}',
  "byReferrer" jsonb NOT NULL DEFAULT '{}',
  "byCountry" jsonb NOT NULL DEFAULT '{}',
  "byLocale" jsonb NOT NULL DEFAULT '{}',
  CONSTRAINT "ModStatsDaily_pkey" PRIMARY KEY ("modId", "day")
);

CREATE INDEX "ModStatsDaily_day_idx" ON "ModStatsDaily"("day");

CREATE TABLE "ModStats" (
  "modId" integer NOT NULL,
  "downloadsTotal" bigint NOT NULL DEFAULT 0,
  "downloads7d" integer NOT NULL DEFAULT 0,
  "downloads30d" integer NOT NULL DEFAULT 0,
  "uniqueDownloadsTotal" bigint NOT NULL DEFAULT 0,
  "views7d" integer NOT NULL DEFAULT 0,
  "views30d" integer NOT NULL DEFAULT 0,
  "followers" integer NOT NULL DEFAULT 0,
  "commentsVisible" integer NOT NULL DEFAULT 0,
  "reviewsVisible" integer NOT NULL DEFAULT 0,
  "ratingAvg" real,
  "updatedAt" timestamptz(3),
  CONSTRAINT "ModStats_pkey" PRIMARY KEY ("modId"),
  CONSTRAINT "ModStats_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Keys: users, mods, downloads, developers, builds, buildDownloads, buildDevelopers, orphanDownloads.
CREATE TABLE "SiteStat" (
  "key" text NOT NULL,
  "value" bigint NOT NULL,
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "SiteStat_pkey" PRIMARY KEY ("key")
);

CREATE TABLE "UserStats" (
  "userId" integer NOT NULL,
  "modsCount" integer NOT NULL DEFAULT 0,
  "buildsCount" integer NOT NULL DEFAULT 0,
  "downloadsTotal" bigint NOT NULL DEFAULT 0,
  "followersCount" integer NOT NULL DEFAULT 0,
  "followingCount" integer NOT NULL DEFAULT 0,
  "ratingAvg" real,
  "reviewsCount" integer NOT NULL DEFAULT 0,
  "helpfulVotes" integer NOT NULL DEFAULT 0,
  "compatReportsCount" integer NOT NULL DEFAULT 0,
  "creatorTier" text,
  "survivorRank" text,
  "updatedAt" timestamptz(3),
  CONSTRAINT "UserStats_pkey" PRIMARY KEY ("userId"),
  CONSTRAINT "UserStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "UserActivityDaily" (
  "userId" integer NOT NULL,
  "day" date NOT NULL,
  "releases" integer NOT NULL DEFAULT 0,
  "comments" integer NOT NULL DEFAULT 0,
  "reviews" integer NOT NULL DEFAULT 0,
  "reports" integer NOT NULL DEFAULT 0,
  CONSTRAINT "UserActivityDaily_pkey" PRIMARY KEY ("userId", "day")
);

-- Product analytics beacon (PLAN §7.1, §9.3): 90-day retention, no PII in clear.
CREATE TABLE "AnalyticsEvent" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "ts" timestamptz(3) NOT NULL DEFAULT now(),
  "kind" text NOT NULL,
  "path" text,
  "entityType" text,
  "entityId" integer,
  "locale" text,
  "referrerDomain" text,
  "country" text,
  "device" text,
  "visitorHash" text,
  "props" jsonb,
  CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "AnalyticsEvent_ts_brin" ON "AnalyticsEvent" USING brin ("ts");

CREATE INDEX "AnalyticsEvent_entity_ts_idx" ON "AnalyticsEvent"("entityType", "entityId", "ts");

CREATE TABLE "SearchQueryDaily" (
  "day" date NOT NULL,
  "qNorm" text NOT NULL,
  "results" integer,
  "count" integer NOT NULL DEFAULT 1,
  CONSTRAINT "SearchQueryDaily_pkey" PRIMARY KEY ("day", "qNorm")
);
