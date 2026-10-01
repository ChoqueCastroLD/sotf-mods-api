-- "Share logs" (2250): a pasted or uploaded game log that lives for 24 hours behind an unguessable
-- link. The id is 24 characters of base64url (144 random bits); the creator's "delete now" token is
-- stored only as a SHA-256 hash. "content" is the redacted text, gzip-compressed. When a log
-- expires, is deleted by its creator or is removed after reports, the worker hard-deletes the
-- payload ("content", "title", "summary", "userId", "deleteTokenHash" → NULL, "purgedAt" set) and keeps
-- a tombstone row for 30 more days so the viewer can answer 410 instead of 404.

CREATE TABLE "SharedLog" (
  "id" text NOT NULL,
  "userId" integer,
  "deleteTokenHash" text,
  "title" text,
  "kind" text NOT NULL DEFAULT 'unknown',
  "sizeBytes" integer NOT NULL DEFAULT 0,
  "storedBytes" integer NOT NULL DEFAULT 0,
  "lineCount" integer NOT NULL DEFAULT 0,
  "redactions" jsonb NOT NULL DEFAULT '{}'::jsonb,
  "summary" jsonb,
  "content" bytea,
  "reportCount" integer NOT NULL DEFAULT 0,
  "hiddenAt" timestamptz(3),
  "purgeReason" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "expiresAt" timestamptz(3) NOT NULL,
  "purgedAt" timestamptz(3),
  CONSTRAINT "SharedLog_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "SharedLog_id_check" CHECK (char_length("id") = 24),
  CONSTRAINT "SharedLog_title_check" CHECK ("title" IS NULL OR char_length("title") <= 120),
  CONSTRAINT "SharedLog_purgeReason_check" CHECK ("purgeReason" IS NULL OR "purgeReason" IN ('expired', 'deleted', 'reported')),
  CONSTRAINT "SharedLog_content_check" CHECK ("purgedAt" IS NOT NULL OR "content" IS NOT NULL),
  CONSTRAINT "SharedLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Hourly purge: live logs past their expiry.
CREATE INDEX "SharedLog_expiresAt_live_idx" ON "SharedLog"("expiresAt") WHERE "purgedAt" IS NULL;
-- Tombstone sweep (30 days after the purge).
CREATE INDEX "SharedLog_purgedAt_idx" ON "SharedLog"("purgedAt") WHERE "purgedAt" IS NOT NULL;
CREATE INDEX "SharedLog_userId_idx" ON "SharedLog"("userId") WHERE "userId" IS NOT NULL;
