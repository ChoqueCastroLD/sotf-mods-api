-- sotf:baseline
--
-- Legacy baseline (PLAN §6.2): the schema of the legacy API (sotf-mods-api@e0606b6), exactly as
-- Prisma 6.19 creates it. Generated, never edited by hand:
--
--   pnpm --filter @sotf/db db:baseline:generate
--   (= prisma@6.19.0 migrate diff --from-empty --to-schema-datamodel legacy/schema.prisma --script)
--
-- Production already has these tables: there the file is never executed, only recorded with
-- `pnpm db:baseline --mark-applied` after the guard has checked the live catalog against
-- src/guard/legacy-catalog.json. On an empty database (dev, CI, tests) it is applied as-is.
-- When the real production dump arrives, this file is regenerated from it (PLAN §6.2, step 2).

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL,
    "isTrusted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginAttempt" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mod_id" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "dependencies" TEXT NOT NULL DEFAULT '',
    "type" TEXT,
    "modSide" TEXT,
    "isNSFW" BOOLEAN NOT NULL,
    "isApproved" BOOLEAN NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "isMultiplayerCompatible" BOOLEAN NOT NULL DEFAULT false,
    "requiresAllPlayers" BOOLEAN NOT NULL DEFAULT false,
    "lastWeekDownloads" INTEGER NOT NULL DEFAULT 0,
    "downloads" INTEGER NOT NULL DEFAULT 0,
    "latestVersion" TEXT DEFAULT '',
    "latestVersionSize" TEXT DEFAULT '',
    "averageRating" DOUBLE PRECISION DEFAULT 0,
    "reviewsCount" INTEGER DEFAULT 0,
    "favoritesCount" INTEGER NOT NULL DEFAULT 0,
    "commentsCount" INTEGER NOT NULL DEFAULT 0,
    "sourceUrl" TEXT,
    "imageUrl" TEXT,
    "buildGuid" TEXT,
    "buildShareVersion" TEXT,
    "numberOfElements" INTEGER,
    "lastReleasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "categoryId" INTEGER,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL,
    "isThumbnail" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modId" INTEGER,

    CONSTRAINT "ModImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModVersion" (
    "id" SERIAL NOT NULL,
    "version" TEXT NOT NULL,
    "isLatest" BOOLEAN NOT NULL,
    "changelog" TEXT NOT NULL,
    "downloadUrl" TEXT NOT NULL,
    "extension" TEXT,
    "filename" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modId" INTEGER,

    CONSTRAINT "ModVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModDownload" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modVersionId" INTEGER,

    CONSTRAINT "ModDownload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModFavorite" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "modId" INTEGER,

    CONSTRAINT "ModFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModReview" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "isHidden" BOOLEAN NOT NULL DEFAULT true,
    "modVersionString" TEXT,
    "userId" INTEGER,
    "modId" INTEGER,

    CONSTRAINT "ModReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KelvinGPTMessages" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chatId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL DEFAULT '',
    "prompt" TEXT NOT NULL DEFAULT '',
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "who" TEXT NOT NULL,

    CONSTRAINT "KelvinGPTMessages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isHidden" BOOLEAN NOT NULL,
    "ip" TEXT NOT NULL,
    "userId" INTEGER,
    "modId" INTEGER NOT NULL,
    "replyId" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingMention" (
    "id" SERIAL NOT NULL,
    "targetUserId" INTEGER NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "modId" INTEGER NOT NULL,
    "commentMessage" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PendingMention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ModToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ModToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_token_key" ON "PasswordResetToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Mod_mod_id_key" ON "Mod"("mod_id");

-- CreateIndex
CREATE INDEX "Mod_isNSFW_idx" ON "Mod"("isNSFW");

-- CreateIndex
CREATE INDEX "Mod_isApproved_idx" ON "Mod"("isApproved");

-- CreateIndex
CREATE INDEX "Mod_isFeatured_idx" ON "Mod"("isFeatured");

-- CreateIndex
CREATE INDEX "Mod_lastReleasedAt_idx" ON "Mod"("lastReleasedAt");

-- CreateIndex
CREATE INDEX "Mod_createdAt_idx" ON "Mod"("createdAt");

-- CreateIndex
CREATE INDEX "Mod_userId_idx" ON "Mod"("userId");

-- CreateIndex
CREATE INDEX "Mod_categoryId_idx" ON "Mod"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Mod_slug_userId_key" ON "Mod"("slug", "userId");

-- CreateIndex
CREATE INDEX "ModImage_isPrimary_idx" ON "ModImage"("isPrimary");

-- CreateIndex
CREATE INDEX "ModImage_isThumbnail_idx" ON "ModImage"("isThumbnail");

-- CreateIndex
CREATE INDEX "ModImage_createdAt_idx" ON "ModImage"("createdAt");

-- CreateIndex
CREATE INDEX "ModImage_modId_idx" ON "ModImage"("modId");

-- CreateIndex
CREATE INDEX "ModVersion_isLatest_idx" ON "ModVersion"("isLatest");

-- CreateIndex
CREATE INDEX "ModVersion_createdAt_idx" ON "ModVersion"("createdAt");

-- CreateIndex
CREATE INDEX "ModVersion_modId_idx" ON "ModVersion"("modId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "ModDownload_ip_idx" ON "ModDownload"("ip");

-- CreateIndex
CREATE INDEX "ModDownload_createdAt_idx" ON "ModDownload"("createdAt");

-- CreateIndex
CREATE INDEX "ModDownload_modVersionId_idx" ON "ModDownload"("modVersionId");

-- CreateIndex
CREATE UNIQUE INDEX "ModReview_userId_modId_key" ON "ModReview"("userId", "modId");

-- CreateIndex
CREATE INDEX "PendingMention_createdAt_idx" ON "PendingMention"("createdAt");

-- CreateIndex
CREATE INDEX "_ModToTag_B_index" ON "_ModToTag"("B");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModImage" ADD CONSTRAINT "ModImage_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModVersion" ADD CONSTRAINT "ModVersion_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModDownload" ADD CONSTRAINT "ModDownload_modVersionId_fkey" FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModFavorite" ADD CONSTRAINT "ModFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModFavorite" ADD CONSTRAINT "ModFavorite_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModReview" ADD CONSTRAINT "ModReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModReview" ADD CONSTRAINT "ModReview_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingMention" ADD CONSTRAINT "PendingMention_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingMention" ADD CONSTRAINT "PendingMention_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingMention" ADD CONSTRAINT "PendingMention_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModToTag" ADD CONSTRAINT "_ModToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModToTag" ADD CONSTRAINT "_ModToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
