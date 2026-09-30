-- Co-authors of a mod (PLAN §7.13 T1-12). The owner ("Mod"."userId") invites a user (`pending`);
-- the invitee accepts (`accepted`) or declines (the row is deleted). Accepted co-authors show on
-- the mod page and their profile, and may release versions and maintain known issues and FAQ.
-- Pending invitations expire after 30 days (worker job `modknowledge.expire-invites`).

CREATE TABLE "ModCoAuthor" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modId" integer NOT NULL,
  "userId" integer NOT NULL,
  "invitedById" integer,
  "status" text NOT NULL DEFAULT 'pending',
  "invitedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "respondedAt" timestamptz(3),
  CONSTRAINT "ModCoAuthor_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModCoAuthor_status_check" CHECK ("status" IN ('pending', 'accepted')),
  CONSTRAINT "ModCoAuthor_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModCoAuthor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModCoAuthor_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "ModCoAuthor_modId_userId_key" ON "ModCoAuthor"("modId", "userId");

CREATE INDEX "ModCoAuthor_userId_status_idx" ON "ModCoAuthor"("userId", "status");
