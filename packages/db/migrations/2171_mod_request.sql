-- Mod request board (T2): players ask for mods, the community votes and comments, a creator
-- "adopts" a request and, once the mod is published, links it (status `fulfilled`).
-- Status: open → adopted → fulfilled, or closed (by the author or a moderator). Moderation hides a
-- request or a comment with "hiddenAt"/status; deletion is soft. Counters ("voteCount",
-- "commentCount") are kept by the application inside the writing transaction.

CREATE TABLE "ModRequest" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "authorId" integer,
  "title" text NOT NULL,
  "bodyMd" text NOT NULL DEFAULT '',
  "bodyHtml" text,
  "status" text NOT NULL DEFAULT 'open',
  "hiddenAt" timestamptz(3),
  "hiddenReason" text,
  "deletedAt" timestamptz(3),
  "voteCount" integer NOT NULL DEFAULT 0,
  "commentCount" integer NOT NULL DEFAULT 0,
  "adoptedById" integer,
  "adoptedAt" timestamptz(3),
  "fulfilledModId" integer,
  "fulfilledById" integer,
  "fulfilledAt" timestamptz(3),
  "closedAt" timestamptz(3),
  "editedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModRequest_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModRequest_status_check" CHECK ("status" IN ('open', 'adopted', 'fulfilled', 'closed')),
  CONSTRAINT "ModRequest_title_check" CHECK (char_length("title") BETWEEN 1 AND 140),
  CONSTRAINT "ModRequest_counters_check" CHECK ("voteCount" >= 0 AND "commentCount" >= 0),
  CONSTRAINT "ModRequest_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ModRequest_adoptedById_fkey" FOREIGN KEY ("adoptedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ModRequest_fulfilledModId_fkey" FOREIGN KEY ("fulfilledModId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ModRequest_fulfilledById_fkey" FOREIGN KEY ("fulfilledById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModRequest_status_voteCount_idx" ON "ModRequest"("status", "voteCount" DESC, "id" DESC)
  WHERE "hiddenAt" IS NULL AND "deletedAt" IS NULL;

CREATE INDEX "ModRequest_createdAt_idx" ON "ModRequest"("createdAt" DESC, "id" DESC)
  WHERE "hiddenAt" IS NULL AND "deletedAt" IS NULL;

CREATE INDEX "ModRequest_authorId_idx" ON "ModRequest"("authorId") WHERE "authorId" IS NOT NULL;

CREATE INDEX "ModRequest_adoptedById_idx" ON "ModRequest"("adoptedById") WHERE "adoptedById" IS NOT NULL;

CREATE INDEX "ModRequest_fulfilledModId_idx" ON "ModRequest"("fulfilledModId") WHERE "fulfilledModId" IS NOT NULL;

CREATE TABLE "ModRequestVote" (
  "requestId" integer NOT NULL,
  "userId" integer NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModRequestVote_pkey" PRIMARY KEY ("requestId", "userId"),
  CONSTRAINT "ModRequestVote_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "ModRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModRequestVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ModRequestVote_userId_idx" ON "ModRequestVote"("userId");

CREATE TABLE "ModRequestComment" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "requestId" integer NOT NULL,
  "authorId" integer,
  "bodyMd" text NOT NULL,
  "bodyHtml" text NOT NULL,
  "status" text NOT NULL DEFAULT 'visible',
  "editedAt" timestamptz(3),
  "deletedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModRequestComment_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModRequestComment_status_check" CHECK ("status" IN ('visible', 'hidden', 'deleted')),
  CONSTRAINT "ModRequestComment_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "ModRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModRequestComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModRequestComment_requestId_idx" ON "ModRequestComment"("requestId", "id");

CREATE INDEX "ModRequestComment_authorId_idx" ON "ModRequestComment"("authorId") WHERE "authorId" IS NOT NULL;
