-- Community: user follows, Kits, comment reactions/edits/images, review votes/edits
-- (PLAN §6.4, §7.6–§7.8). Mod follows reuse the legacy "ModFavorite" (+ "notify").

CREATE TABLE "UserFollow" (
  "followerId" integer NOT NULL,
  "followeeId" integer NOT NULL,
  "notify" boolean NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "UserFollow_pkey" PRIMARY KEY ("followerId", "followeeId"),
  CONSTRAINT "UserFollow_not_self_check" CHECK ("followerId" <> "followeeId"),
  CONSTRAINT "UserFollow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "UserFollow_followeeId_fkey" FOREIGN KEY ("followeeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "UserFollow_followeeId_idx" ON "UserFollow"("followeeId");

CREATE TABLE "Kit" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "ownerId" integer NOT NULL,
  "slug" text NOT NULL,
  "name" text NOT NULL,
  "descriptionMd" text,
  "descriptionHtml" text,
  "visibility" text NOT NULL DEFAULT 'public',
  -- Shareable code KIT-XXXX-XX (Crockford base32).
  "code" text NOT NULL,
  "coverMediaId" uuid,
  "isStaffPick" boolean NOT NULL DEFAULT false,
  "forkedFromId" integer,
  "revision" integer NOT NULL DEFAULT 1,
  "itemsCount" integer NOT NULL DEFAULT 0,
  "followersCount" integer NOT NULL DEFAULT 0,
  "ogImageKey" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "deletedAt" timestamptz(3),
  CONSTRAINT "Kit_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Kit_code_key" UNIQUE ("code"),
  CONSTRAINT "Kit_ownerId_slug_key" UNIQUE ("ownerId", "slug"),
  CONSTRAINT "Kit_visibility_check" CHECK ("visibility" IN ('public', 'unlisted', 'private')),
  CONSTRAINT "Kit_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Kit_coverMediaId_fkey" FOREIGN KEY ("coverMediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "Kit_forkedFromId_fkey" FOREIGN KEY ("forkedFromId") REFERENCES "Kit"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Kit_public_updatedAt_idx" ON "Kit"("updatedAt" DESC) WHERE "visibility" = 'public' AND "deletedAt" IS NULL;

CREATE INDEX "Kit_forkedFromId_idx" ON "Kit"("forkedFromId");

CREATE TABLE "KitItem" (
  "kitId" integer NOT NULL,
  "modId" integer NOT NULL,
  "position" integer NOT NULL,
  "note" text,
  "pinnedVersionId" integer,
  "isAutoDependency" boolean NOT NULL DEFAULT false,
  "addedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "KitItem_pkey" PRIMARY KEY ("kitId", "modId"),
  CONSTRAINT "KitItem_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "KitItem_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "KitItem_pinnedVersionId_fkey"
    FOREIGN KEY ("pinnedVersionId") REFERENCES "ModVersion"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "KitItem_modId_idx" ON "KitItem"("modId");

CREATE TABLE "KitRevision" (
  "kitId" integer NOT NULL,
  "revision" integer NOT NULL,
  "changes" jsonb NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "KitRevision_pkey" PRIMARY KEY ("kitId", "revision"),
  CONSTRAINT "KitRevision_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "CommentReaction" (
  "commentId" integer NOT NULL,
  "userId" integer NOT NULL,
  "kind" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "CommentReaction_pkey" PRIMARY KEY ("commentId", "userId", "kind"),
  CONSTRAINT "CommentReaction_kind_check" CHECK ("kind" IN ('thumbs_up', 'heart', 'laugh', 'party', 'pray', 'fire')),
  CONSTRAINT "CommentReaction_commentId_fkey"
    FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "CommentReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "CommentReaction_userId_idx" ON "CommentReaction"("userId");

CREATE TABLE "CommentEdit" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "commentId" integer NOT NULL,
  "bodyMd" text NOT NULL,
  "editedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "CommentEdit_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CommentEdit_commentId_fkey"
    FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "CommentEdit_commentId_editedAt_idx" ON "CommentEdit"("commentId", "editedAt");

CREATE TABLE "CommentImage" (
  "commentId" integer NOT NULL,
  "mediaId" uuid NOT NULL,
  "position" smallint,
  CONSTRAINT "CommentImage_pkey" PRIMARY KEY ("commentId", "mediaId"),
  CONSTRAINT "CommentImage_commentId_fkey"
    FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "CommentImage_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "CommentImage_mediaId_idx" ON "CommentImage"("mediaId");

CREATE TABLE "ReviewVote" (
  "reviewId" integer NOT NULL,
  "userId" integer NOT NULL,
  "value" smallint NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ReviewVote_pkey" PRIMARY KEY ("reviewId", "userId"),
  CONSTRAINT "ReviewVote_value_check" CHECK ("value" IN (-1, 1)),
  CONSTRAINT "ReviewVote_reviewId_fkey"
    FOREIGN KEY ("reviewId") REFERENCES "ModReview"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ReviewVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ReviewVote_userId_idx" ON "ReviewVote"("userId");

CREATE TABLE "ReviewEdit" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "reviewId" integer NOT NULL,
  "rating" smallint,
  "title" text,
  "bodyMd" text,
  "editedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ReviewEdit_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ReviewEdit_reviewId_fkey"
    FOREIGN KEY ("reviewId") REFERENCES "ModReview"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ReviewEdit_reviewId_editedAt_idx" ON "ReviewEdit"("reviewId", "editedAt");
