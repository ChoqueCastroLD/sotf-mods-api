-- URL history, tombstones and redirects (PLAN §4.6, §6.4). "Mod"."slug" never changes before the
-- contract phase: canonical slugs and every historical path live here.

CREATE TABLE "ModSlugHistory" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modId" integer NOT NULL,
  "userSlug" text NOT NULL,
  "slug" text NOT NULL,
  "reason" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModSlugHistory_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModSlugHistory_reason_check" CHECK ("reason" IN ('legacy', 'canonicalized', 'renamed', 'owner_changed')),
  CONSTRAINT "ModSlugHistory_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ModSlugHistory_slug_idx" ON "ModSlugHistory"(lower("slug"));

CREATE INDEX "ModSlugHistory_path_idx" ON "ModSlugHistory"(lower("userSlug"), lower("slug"));

-- One row per (mod, path): lets backfill B3 and renames use ON CONFLICT DO NOTHING.
CREATE UNIQUE INDEX "ModSlugHistory_modId_path_key" ON "ModSlugHistory"("modId", lower("userSlug"), lower("slug"));

CREATE TABLE "UserSlugHistory" (
  "userId" integer NOT NULL,
  "slug" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "UserSlugHistory_pkey" PRIMARY KEY ("slug"),
  CONSTRAINT "UserSlugHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "UserSlugHistory_userId_idx" ON "UserSlugHistory"("userId");

CREATE TABLE "Tombstone" (
  "path" text NOT NULL,
  "status" smallint NOT NULL DEFAULT 410,
  "reason" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Tombstone_pkey" PRIMARY KEY ("path"),
  CONSTRAINT "Tombstone_status_check" CHECK ("status" IN (404, 410))
);

CREATE TABLE "Redirect" (
  "fromPath" text NOT NULL,
  "toPath" text NOT NULL,
  "status" smallint NOT NULL DEFAULT 301,
  "hits" bigint NOT NULL DEFAULT 0,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Redirect_pkey" PRIMARY KEY ("fromPath"),
  CONSTRAINT "Redirect_status_check" CHECK ("status" IN (301, 302, 307, 308)),
  CONSTRAINT "Redirect_not_self_check" CHECK ("fromPath" <> "toPath")
);
