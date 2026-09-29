-- Moderation (Ranger Station) and operations (PLAN §6.4, §7.4, §6.9, §9.3).

CREATE TABLE "Report" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "reporterId" integer NOT NULL,
  "targetType" text NOT NULL,
  "targetId" integer NOT NULL,
  "reason" text NOT NULL,
  "details" text,
  "status" text NOT NULL DEFAULT 'open',
  "assignedToId" integer,
  "resolution" text,
  "resolvedById" integer,
  "resolvedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Report_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Report_targetType_check"
    CHECK ("targetType" IN ('mod', 'version', 'comment', 'review', 'user', 'kit', 'compat_report')),
  CONSTRAINT "Report_status_check" CHECK ("status" IN ('open', 'resolved', 'dismissed')),
  CONSTRAINT "Report_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Report_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Report_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Report_status_createdAt_idx" ON "Report"("status", "createdAt");

CREATE INDEX "Report_target_idx" ON "Report"("targetType", "targetId");

-- One open report per reporter and target.
CREATE UNIQUE INDEX "Report_open_key" ON "Report"("reporterId", "targetType", "targetId") WHERE "status" = 'open';

-- Insert-only: ops/sql/roles.sql revokes UPDATE and DELETE from the application role. No foreign
-- keys: the log must outlive the rows it describes.
CREATE TABLE "AuditLog" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "actorId" integer,
  "action" text NOT NULL,
  "targetType" text,
  "targetId" integer,
  "before" jsonb,
  "after" jsonb,
  "reason" text,
  "ipHash" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "AuditLog_target_createdAt_idx" ON "AuditLog"("targetType", "targetId", "createdAt" DESC);

CREATE INDEX "AuditLog_actorId_createdAt_idx" ON "AuditLog"("actorId", "createdAt" DESC);

CREATE INDEX "AuditLog_createdAt_brin" ON "AuditLog" USING brin ("createdAt");

CREATE TABLE "UserSanction" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "userId" integer NOT NULL,
  "kind" text NOT NULL,
  "scopeModId" integer,
  "reason" text NOT NULL,
  "startsAt" timestamptz(3) NOT NULL DEFAULT now(),
  "endsAt" timestamptz(3),
  -- No foreign key: the history must survive the moderator's account.
  "createdById" integer NOT NULL,
  "revokedAt" timestamptz(3),
  CONSTRAINT "UserSanction_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "UserSanction_kind_check" CHECK ("kind" IN ('suspend', 'ban', 'comment_mute', 'upload_mute')),
  CONSTRAINT "UserSanction_period_check" CHECK ("endsAt" IS NULL OR "endsAt" > "startsAt"),
  CONSTRAINT "UserSanction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "UserSanction_scopeModId_fkey" FOREIGN KEY ("scopeModId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "UserSanction_userId_active_idx" ON "UserSanction"("userId") WHERE "revokedAt" IS NULL;

CREATE TABLE "Announcement" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "level" text NOT NULL,
  "messageI18n" jsonb NOT NULL,
  "href" text,
  "startsAt" timestamptz(3) NOT NULL,
  "endsAt" timestamptz(3),
  "dismissible" boolean NOT NULL DEFAULT true,
  "createdById" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Announcement_level_check" CHECK ("level" IN ('info', 'warning', 'patch')),
  CONSTRAINT "Announcement_createdById_fkey"
    FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Announcement_window_idx" ON "Announcement"("startsAt", "endsAt");

-- Keys: ads, discordWebhooks, moderationTemplates, limits, kelvinseek, featureFlags.
CREATE TABLE "SiteSetting" (
  "key" text NOT NULL,
  "value" jsonb NOT NULL,
  "updatedById" integer,
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("key"),
  CONSTRAINT "SiteSetting_updatedById_fkey"
    FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE "KelvinUsageDaily" (
  "day" date NOT NULL,
  "requests" integer NOT NULL DEFAULT 0,
  "fallbacks" integer NOT NULL DEFAULT 0,
  "tokensIn" bigint NOT NULL DEFAULT 0,
  "tokensOut" bigint NOT NULL DEFAULT 0,
  "costMicroUsd" bigint NOT NULL DEFAULT 0,
  CONSTRAINT "KelvinUsageDaily_pkey" PRIMARY KEY ("day")
);

-- GDPR export (PLAN §9.3): a private R2 object behind a 15-minute presigned URL.
CREATE TABLE "DataExport" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "status" text NOT NULL DEFAULT 'pending',
  "key" text,
  "expiresAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "DataExport_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "DataExport_status_check" CHECK ("status" IN ('pending', 'ready', 'failed', 'expired')),
  CONSTRAINT "DataExport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "DataExport_userId_createdAt_idx" ON "DataExport"("userId", "createdAt" DESC);

CREATE TABLE "AccountDeletion" (
  "userId" integer NOT NULL,
  "requestedAt" timestamptz(3) NOT NULL,
  "executeAfter" timestamptz(3) NOT NULL,
  "mode" text NOT NULL,
  "cancelledAt" timestamptz(3),
  "executedAt" timestamptz(3),
  CONSTRAINT "AccountDeletion_pkey" PRIMARY KEY ("userId"),
  CONSTRAINT "AccountDeletion_mode_check" CHECK ("mode" IN ('archive_mods', 'keep_mods_anonymous')),
  CONSTRAINT "AccountDeletion_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "AccountDeletion_due_idx" ON "AccountDeletion"("executeAfter")
  WHERE "cancelledAt" IS NULL AND "executedAt" IS NULL;

-- Every in-place change to a legacy column stores the previous value here and can be reverted
-- row by row with `pnpm db:revert-fix <fixId>` (PLAN §6.1 rule 3).
CREATE TABLE "DataFixAudit" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "fixId" text NOT NULL,
  "tableName" text NOT NULL,
  "rowId" text NOT NULL,
  "columnName" text NOT NULL,
  "oldValue" jsonb,
  "newValue" jsonb,
  "appliedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "revertedAt" timestamptz(3),
  CONSTRAINT "DataFixAudit_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "DataFixAudit_fixId_idx" ON "DataFixAudit"("fixId");

CREATE INDEX "DataFixAudit_row_idx" ON "DataFixAudit"("tableName", "rowId");

CREATE TABLE "MigrationRun" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "name" text NOT NULL,
  "startedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "finishedAt" timestamptz(3),
  "rowsAffected" bigint,
  "checksumBefore" text,
  "checksumAfter" text,
  "notes" jsonb,
  CONSTRAINT "MigrationRun_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "MigrationRun_name_startedAt_idx" ON "MigrationRun"("name", "startedAt" DESC);

-- Same shape as "ModFavorite" (ids preserved) + why and when the row was archived (backfill B5).
CREATE TABLE "ModFavoriteArchive" (
  "id" integer NOT NULL,
  "createdAt" timestamp(3) NOT NULL,
  "updatedAt" timestamp(3) NOT NULL,
  "userId" integer,
  "modId" integer,
  "notify" boolean NOT NULL DEFAULT true,
  "archivedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "reason" text NOT NULL,
  CONSTRAINT "ModFavoriteArchive_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ModFavoriteArchive_reason_idx" ON "ModFavoriteArchive"("reason");
