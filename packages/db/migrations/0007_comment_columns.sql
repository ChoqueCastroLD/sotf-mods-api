-- New columns on "Comment" (PLAN §6.3, §7.6). "status" is kept in sync with the legacy "isHidden"
-- by trg_comment_status_sync (0020).

ALTER TABLE "Comment"
  ADD COLUMN "bodyMd" text,
  ADD COLUMN "bodyHtml" text,
  ADD COLUMN "status" text NOT NULL DEFAULT 'visible',
  ADD COLUMN "hiddenReason" text,
  ADD COLUMN "editedAt" timestamp(3),
  ADD COLUMN "deletedAt" timestamp(3),
  ADD COLUMN "pinnedAt" timestamp(3),
  ADD COLUMN "deletedById" integer,
  ADD COLUMN "pinnedById" integer,
  ADD COLUMN "isBugReport" boolean NOT NULL DEFAULT false,
  ADD COLUMN "isSolution" boolean NOT NULL DEFAULT false,
  ADD COLUMN "modVersionId" integer,
  ADD COLUMN "bugResolvedInVersionId" integer,
  ADD COLUMN "reactionsCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "repliesCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "ipHash" text;

-- Every new foreign key on a legacy table is ON DELETE SET NULL so that no legacy delete path
-- (including the manual delete-unapproved-mods script) can be blocked by v2 data.
ALTER TABLE "Comment"
  ADD CONSTRAINT "Comment_status_check"
    CHECK ("status" IN ('visible', 'hidden', 'pending', 'deleted')) NOT VALID,
  ADD CONSTRAINT "Comment_deletedById_fkey"
    FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID,
  ADD CONSTRAINT "Comment_pinnedById_fkey"
    FOREIGN KEY ("pinnedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID,
  ADD CONSTRAINT "Comment_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID,
  ADD CONSTRAINT "Comment_bugResolvedInVersionId_fkey"
    FOREIGN KEY ("bugResolvedInVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID;
