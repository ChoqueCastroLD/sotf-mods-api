-- New columns on "Mod" (PLAN §6.3), including the generated full-text "searchVector".
-- "status" is kept in sync with the legacy "isApproved" by trg_mod_status_sync (0020).
-- Foreign keys and CHECK constraints enter NOT VALID and are validated in 0090.

ALTER TABLE "Mod"
  ADD COLUMN "status" text NOT NULL DEFAULT 'pending',
  ADD COLUMN "statusReason" text,
  ADD COLUMN "statusChangedAt" timestamp(3),
  ADD COLUMN "publishedAt" timestamp(3),
  ADD COLUMN "approvedAt" timestamp(3),
  ADD COLUMN "archivedAt" timestamp(3),
  ADD COLUMN "removedAt" timestamp(3),
  ADD COLUMN "editedAt" timestamp(3),
  ADD COLUMN "compatUpdatedAt" timestamp(3),
  ADD COLUMN "approvedById" integer,
  ADD COLUMN "successorModId" integer,
  ADD COLUMN "canonicalSlug" text,
  ADD COLUMN "descriptionMd" text,
  ADD COLUMN "descriptionHtml" text,
  ADD COLUMN "renderVersion" smallint NOT NULL DEFAULT 0,
  ADD COLUMN "thumbnailMediaId" uuid,
  ADD COLUMN "license" text,
  ADD COLUMN "supportLinks" jsonb NOT NULL DEFAULT '[]',
  ADD COLUMN "videoUrl" text,
  ADD COLUMN "contentLang" text,
  ADD COLUMN "platform" text,
  ADD COLUMN "multiplayerRole" text,
  ADD COLUMN "dedicatedServer" text,
  ADD COLUMN "safeToRemove" text,
  ADD COLUMN "logColor" text,
  ADD COLUMN "originalAuthorName" text,
  ADD COLUMN "originalAuthorUrl" text,
  ADD COLUMN "compatStatus" text,
  ADD COLUMN "possiblyOutdated" boolean NOT NULL DEFAULT false,
  ADD COLUMN "trendingScore" double precision NOT NULL DEFAULT 0,
  ADD COLUMN "ratingBayes" double precision NOT NULL DEFAULT 0,
  ADD COLUMN "dependentsCount" integer NOT NULL DEFAULT 0,
  ADD COLUMN "qualityScore" smallint,
  ADD COLUMN "ogImageKey" text;

-- Weighted document: name and manifest id (A), short description (B), description (C, first 20k
-- characters). "Mod" is small (~300 rows), so the rewrite caused by a stored generated column is
-- instantaneous.
ALTER TABLE "Mod"
  ADD COLUMN "searchVector" tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('simple'::regconfig, public.sotf_unaccent(coalesce("name", ''))), 'A')
    || setweight(to_tsvector('simple'::regconfig, public.sotf_unaccent(coalesce("mod_id", ''))), 'A')
    || setweight(to_tsvector('english'::regconfig, public.sotf_unaccent(coalesce("shortDescription", ''))), 'B')
    || setweight(to_tsvector('english'::regconfig, public.sotf_unaccent(left(coalesce("description", ''), 20000))), 'C')
  ) STORED;

ALTER TABLE "Mod"
  ADD CONSTRAINT "Mod_status_check"
    CHECK ("status" IN ('pending', 'published', 'unlisted', 'rejected', 'archived', 'removed')) NOT VALID,
  ADD CONSTRAINT "Mod_platform_check"
    CHECK ("platform" IN ('Client', 'Server', 'Universal')) NOT VALID,
  ADD CONSTRAINT "Mod_multiplayerRole_check"
    CHECK ("multiplayerRole" IN ('singleplayer_only', 'client_side', 'host_only', 'all_players', 'unknown')) NOT VALID,
  ADD CONSTRAINT "Mod_dedicatedServer_check"
    CHECK ("dedicatedServer" IN ('yes', 'no', 'partial', 'unknown')) NOT VALID,
  ADD CONSTRAINT "Mod_safeToRemove_check"
    CHECK ("safeToRemove" IN ('yes', 'no', 'unknown')) NOT VALID,
  ADD CONSTRAINT "Mod_compatStatus_check"
    CHECK ("compatStatus" IN ('works', 'mixed', 'broken', 'untested')) NOT VALID,
  ADD CONSTRAINT "Mod_approvedById_fkey"
    FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID,
  ADD CONSTRAINT "Mod_successorModId_fkey"
    FOREIGN KEY ("successorModId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID;
