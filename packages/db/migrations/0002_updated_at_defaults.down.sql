-- Restores the legacy state: "updatedAt" had no database default (see legacy-catalog.json).

ALTER TABLE "User" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "Token" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "PasswordResetToken" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "LoginAttempt" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "Mod" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "ModImage" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "ModVersion" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "Tag" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "Category" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "ModDownload" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "ModFavorite" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "ModReview" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "KelvinGPTMessages" ALTER COLUMN "updatedAt" DROP DEFAULT;

ALTER TABLE "Comment" ALTER COLUMN "updatedAt" DROP DEFAULT;
