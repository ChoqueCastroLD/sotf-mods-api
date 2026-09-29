-- New columns on "ModVersion" (PLAN §6.3). The semver columns are filled by trg_modversion_semver
-- (0020); "storageKey" by backfill B2 and by the v2 publication flow.

ALTER TABLE "ModVersion"
  ADD COLUMN "storageKey" text,
  ADD COLUMN "fileSize" bigint,
  ADD COLUMN "sha256" text,
  ADD COLUMN "contentType" text,
  ADD COLUMN "status" text NOT NULL DEFAULT 'active',
  ADD COLUMN "statusReason" text,
  ADD COLUMN "channel" text NOT NULL DEFAULT 'release',
  ADD COLUMN "changelogMd" text,
  ADD COLUMN "changelogHtml" text,
  ADD COLUMN "semverMajor" integer,
  ADD COLUMN "semverMinor" integer,
  ADD COLUMN "semverPatch" integer,
  ADD COLUMN "semverPre" text,
  ADD COLUMN "manifest" jsonb,
  ADD COLUMN "gameVersionDeclared" text,
  ADD COLUMN "loaderVersionDeclared" text,
  ADD COLUMN "platformDeclared" text,
  ADD COLUMN "buildMeta" jsonb,
  ADD COLUMN "checksStatus" text,
  ADD COLUMN "publishedById" integer,
  ADD COLUMN "publishedAt" timestamp(3),
  ADD COLUMN "downloadsCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "uniqueDownloadsCount" integer NOT NULL DEFAULT 0;

ALTER TABLE "ModVersion"
  ADD CONSTRAINT "ModVersion_status_check"
    CHECK ("status" IN ('pending', 'active', 'rejected', 'yanked', 'file_missing')) NOT VALID,
  ADD CONSTRAINT "ModVersion_channel_check"
    CHECK ("channel" IN ('release', 'beta')) NOT VALID,
  ADD CONSTRAINT "ModVersion_checksStatus_check"
    CHECK ("checksStatus" IN ('pending', 'passed', 'flagged', 'failed')) NOT VALID,
  ADD CONSTRAINT "ModVersion_publishedById_fkey"
    FOREIGN KEY ("publishedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID;
