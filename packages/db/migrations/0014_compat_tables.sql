-- Compatibility by game build: Field reports and Patch Radar (PLAN §6.4, §7.10).

CREATE TABLE "GameBuild" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "label" text NOT NULL,
  "steamBuildId" text,
  "releasedAt" date NOT NULL,
  "isBreaking" boolean NOT NULL DEFAULT false,
  "isCurrent" boolean NOT NULL DEFAULT false,
  "notesMd" text,
  "createdById" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "GameBuild_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "GameBuild_label_key" UNIQUE ("label"),
  CONSTRAINT "GameBuild_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- At most one current build.
CREATE UNIQUE INDEX "GameBuild_isCurrent_key" ON "GameBuild"("isCurrent") WHERE "isCurrent";

CREATE TABLE "LoaderRelease" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "name" text NOT NULL DEFAULT 'RedLoader',
  "version" text NOT NULL,
  "releasedAt" date,
  "url" text,
  CONSTRAINT "LoaderRelease_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "LoaderRelease_name_version_key" UNIQUE ("name", "version")
);

CREATE TABLE "EcosystemStatus" (
  "gameBuildId" integer NOT NULL,
  "loaderReleaseId" integer NOT NULL,
  "status" text NOT NULL,
  "noteMd" text,
  "updatedById" integer,
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "EcosystemStatus_pkey" PRIMARY KEY ("gameBuildId", "loaderReleaseId"),
  CONSTRAINT "EcosystemStatus_status_check" CHECK ("status" IN ('works', 'partial', 'broken', 'unknown')),
  CONSTRAINT "EcosystemStatus_gameBuildId_fkey"
    FOREIGN KEY ("gameBuildId") REFERENCES "GameBuild"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "EcosystemStatus_loaderReleaseId_fkey"
    FOREIGN KEY ("loaderReleaseId") REFERENCES "LoaderRelease"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "EcosystemStatus_updatedById_fkey"
    FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "EcosystemStatus_loaderReleaseId_idx" ON "EcosystemStatus"("loaderReleaseId");

CREATE TABLE "CompatReport" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "userId" integer NOT NULL,
  "modVersionId" integer NOT NULL,
  "gameBuildId" integer NOT NULL,
  "mode" text NOT NULL,
  "result" text NOT NULL,
  "note" text,
  "otherMods" text,
  "weight" real NOT NULL DEFAULT 1,
  "status" text NOT NULL DEFAULT 'visible',
  "acknowledgedAt" timestamptz(3),
  "fixedInVersionId" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "CompatReport_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CompatReport_userId_modVersionId_gameBuildId_mode_key"
    UNIQUE ("userId", "modVersionId", "gameBuildId", "mode"),
  CONSTRAINT "CompatReport_mode_check" CHECK ("mode" IN ('singleplayer', 'host', 'client', 'dedicated')),
  CONSTRAINT "CompatReport_result_check" CHECK ("result" IN ('works', 'partial', 'broken')),
  CONSTRAINT "CompatReport_note_check" CHECK (char_length("note") <= 500),
  CONSTRAINT "CompatReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "CompatReport_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "CompatReport_gameBuildId_fkey"
    FOREIGN KEY ("gameBuildId") REFERENCES "GameBuild"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "CompatReport_fixedInVersionId_fkey"
    FOREIGN KEY ("fixedInVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "CompatReport_modVersionId_gameBuildId_idx" ON "CompatReport"("modVersionId", "gameBuildId");

CREATE INDEX "CompatReport_gameBuildId_idx" ON "CompatReport"("gameBuildId");

CREATE TABLE "ModVersionCompat" (
  "modVersionId" integer NOT NULL,
  "gameBuildId" integer NOT NULL,
  "works" integer NOT NULL DEFAULT 0,
  "partial" integer NOT NULL DEFAULT 0,
  "broken" integer NOT NULL DEFAULT 0,
  "weightedScore" real,
  "authorTested" boolean NOT NULL DEFAULT false,
  "computedStatus" text NOT NULL DEFAULT 'untested',
  "updatedAt" timestamptz(3),
  CONSTRAINT "ModVersionCompat_pkey" PRIMARY KEY ("modVersionId", "gameBuildId"),
  CONSTRAINT "ModVersionCompat_computedStatus_check"
    CHECK ("computedStatus" IN ('works', 'mixed', 'broken', 'untested')),
  CONSTRAINT "ModVersionCompat_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModVersionCompat_gameBuildId_fkey"
    FOREIGN KEY ("gameBuildId") REFERENCES "GameBuild"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ModVersionCompat_gameBuildId_idx" ON "ModVersionCompat"("gameBuildId");
