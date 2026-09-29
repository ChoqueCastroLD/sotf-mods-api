-- New columns on "User" (PLAN §6.3). Every column is NULL or NOT NULL with a constant default, so
-- the legacy INSERTs keep working; CHECK constraints enter NOT VALID and are validated in 0090.

ALTER TABLE "User"
  ADD COLUMN "emailNormalized" text,
  ADD COLUMN "role" text NOT NULL DEFAULT 'user',
  ADD COLUMN "verifiedCreator" boolean NOT NULL DEFAULT false,
  ADD COLUMN "legacyTrusted" boolean,
  ADD COLUMN "displayName" text,
  ADD COLUMN "bioMd" text,
  ADD COLUMN "links" jsonb NOT NULL DEFAULT '[]',
  ADD COLUMN "avatarMediaId" uuid,
  ADD COLUMN "bannerMediaId" uuid,
  ADD COLUMN "bannerSeed" integer,
  ADD COLUMN "settings" jsonb NOT NULL DEFAULT '{}',
  ADD COLUMN "privacy" jsonb NOT NULL DEFAULT '{}',
  ADD COLUMN "onboarding" jsonb NOT NULL DEFAULT '{}',
  ADD COLUMN "pinnedModIds" integer[] NOT NULL DEFAULT '{}',
  ADD COLUMN "emailVerifiedAt" timestamp(3),
  ADD COLUMN "passwordUpdatedAt" timestamp(3),
  ADD COLUMN "lastLoginAt" timestamp(3),
  ADD COLUMN "lastSeenAt" timestamp(3),
  ADD COLUMN "suspendedUntil" timestamp(3),
  ADD COLUMN "bannedAt" timestamp(3),
  ADD COLUMN "deletedAt" timestamp(3),
  ADD COLUMN "banReason" text,
  ADD COLUMN "trustLevel" smallint NOT NULL DEFAULT 0,
  ADD COLUMN "xp" integer NOT NULL DEFAULT 0,
  ADD COLUMN "ogImageKey" text;

ALTER TABLE "User"
  ADD CONSTRAINT "User_role_check" CHECK ("role" IN ('user', 'moderator', 'admin')) NOT VALID;
