-- New columns on "ModReview" (PLAN §6.3, §7.7). The legacy "isHidden" defaults to true: v2 always
-- writes "status" and "isHidden" explicitly; trg_review_status_sync (0020) keeps them in sync.

ALTER TABLE "ModReview"
  ADD COLUMN "bodyMd" text,
  ADD COLUMN "bodyHtml" text,
  ADD COLUMN "status" text NOT NULL DEFAULT 'visible',
  ADD COLUMN "modVersionId" integer,
  ADD COLUMN "isVerifiedDownload" boolean NOT NULL DEFAULT false,
  ADD COLUMN "helpfulCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "unhelpfulCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "authorReplyMd" text,
  ADD COLUMN "authorReplyHtml" text,
  ADD COLUMN "authorRepliedAt" timestamp(3),
  ADD COLUMN "editedAt" timestamp(3),
  ADD COLUMN "deletedAt" timestamp(3);

ALTER TABLE "ModReview"
  ADD CONSTRAINT "ModReview_status_check"
    CHECK ("status" IN ('visible', 'hidden', 'deleted')) NOT VALID,
  ADD CONSTRAINT "ModReview_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID;
