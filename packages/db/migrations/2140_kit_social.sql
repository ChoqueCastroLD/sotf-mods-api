-- Kits T1-24 (PLAN §7.8): follow a kit ("KitFollow", `notify` = signals when it changes) and kit
-- comments ("KitComment": a comment thread per kit, one reply level). Additive; "Kit"."followersCount"
-- (PLAN §6.4) is kept in step with "KitFollow" by the follow service.

CREATE TABLE "KitFollow" (
  "kitId" integer NOT NULL,
  "userId" integer NOT NULL,
  "notify" boolean NOT NULL DEFAULT true,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "KitFollow_pkey" PRIMARY KEY ("kitId", "userId"),
  CONSTRAINT "KitFollow_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "KitFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "KitFollow_userId_createdAt_idx" ON "KitFollow"("userId", "createdAt" DESC);

CREATE TABLE "KitComment" (
  "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "kitId" integer NOT NULL,
  "userId" integer,
  "parentId" integer,
  "bodyMd" text NOT NULL,
  "bodyHtml" text NOT NULL,
  "status" text NOT NULL DEFAULT 'visible',
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "editedAt" timestamptz(3),
  "deletedAt" timestamptz(3),
  "deletedById" integer,
  CONSTRAINT "KitComment_status_check" CHECK ("status" IN ('visible', 'hidden', 'deleted')),
  CONSTRAINT "KitComment_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "KitComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "KitComment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "KitComment"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "KitComment_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "KitComment_kitId_parentId_createdAt_idx" ON "KitComment"("kitId", "parentId", "createdAt" DESC);
CREATE INDEX "KitComment_parentId_idx" ON "KitComment"("parentId") WHERE "parentId" IS NOT NULL;
CREATE INDEX "KitComment_userId_idx" ON "KitComment"("userId");
