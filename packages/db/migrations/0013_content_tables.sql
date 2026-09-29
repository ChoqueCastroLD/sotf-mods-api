-- Media, direct-to-R2 uploads, drafts, dependencies and version inspection (PLAN §2.8, §6.4).
-- Rule for new foreign keys that point at legacy rows: NOT NULL -> ON DELETE CASCADE,
-- nullable -> ON DELETE SET NULL, so v2 data never blocks a legacy delete.

CREATE TABLE "Media" (
  "id" uuid NOT NULL,
  "ownerId" integer,
  "purpose" text NOT NULL,
  "sourceBucket" text NOT NULL,
  "sourceKey" text NOT NULL,
  "width" integer,
  "height" integer,
  "bytes" bigint,
  "contentType" text,
  "thumbhash" text,
  "dominantColor" text,
  -- [{ "w": 640, "format": "avif", "key": "media/<id>/640.avif", "bytes": 12345 }]
  "variants" jsonb NOT NULL DEFAULT '[]',
  "status" text NOT NULL DEFAULT 'pending',
  "error" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "processedAt" timestamptz(3),
  CONSTRAINT "Media_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Media_source_key" UNIQUE ("sourceBucket", "sourceKey"),
  CONSTRAINT "Media_purpose_check"
    CHECK ("purpose" IN ('mod_image', 'thumbnail', 'avatar', 'banner', 'comment_image', 'kit_cover', 'og', 'legacy')),
  CONSTRAINT "Media_status_check" CHECK ("status" IN ('pending', 'ready', 'failed')),
  CONSTRAINT "Media_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Media_ownerId_idx" ON "Media"("ownerId");

CREATE INDEX "Media_pending_idx" ON "Media"("createdAt") WHERE "status" = 'pending';

CREATE TABLE "Upload" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "purpose" text NOT NULL,
  "bucket" text NOT NULL,
  "key" text NOT NULL,
  "filename" text NOT NULL,
  "contentType" text NOT NULL,
  "declaredBytes" bigint NOT NULL,
  "maxBytes" bigint NOT NULL,
  "sha256" text,
  "status" text NOT NULL DEFAULT 'pending',
  "resultRef" jsonb,
  "error" text,
  "expiresAt" timestamptz(3) NOT NULL,
  "completedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Upload_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Upload_purpose_check"
    CHECK ("purpose" IN ('mod_file', 'build_file', 'image', 'avatar', 'banner', 'comment_image')),
  CONSTRAINT "Upload_status_check"
    CHECK ("status" IN ('pending', 'uploaded', 'processing', 'ready', 'rejected', 'expired')),
  CONSTRAINT "Upload_bytes_check" CHECK ("declaredBytes" >= 0 AND "declaredBytes" <= "maxBytes"),
  CONSTRAINT "Upload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "Upload_userId_createdAt_idx" ON "Upload"("userId", "createdAt" DESC);

CREATE INDEX "Upload_open_expiresAt_idx" ON "Upload"("expiresAt") WHERE "status" IN ('pending', 'uploaded');

-- Drafts never go to "Mod": the legacy site would list them as unapproved mods.
CREATE TABLE "ModDraft" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "modId" integer,
  "kind" text NOT NULL,
  "data" jsonb NOT NULL DEFAULT '{}',
  "uploadIds" uuid[] NOT NULL DEFAULT '{}',
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModDraft_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModDraft_kind_check" CHECK ("kind" IN ('mod', 'build')),
  CONSTRAINT "ModDraft_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModDraft_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModDraft_userId_updatedAt_idx" ON "ModDraft"("userId", "updatedAt" DESC);

CREATE TABLE "ModDependency" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modVersionId" integer NOT NULL,
  "depManifestId" text NOT NULL,
  "depModId" integer,
  "versionRange" text,
  "kind" text NOT NULL DEFAULT 'required',
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModDependency_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModDependency_modVersionId_depManifestId_key" UNIQUE ("modVersionId", "depManifestId"),
  CONSTRAINT "ModDependency_kind_check" CHECK ("kind" IN ('required', 'optional', 'conflicts')),
  CONSTRAINT "ModDependency_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModDependency_depModId_fkey"
    FOREIGN KEY ("depModId") REFERENCES "Mod"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModDependency_depModId_idx" ON "ModDependency"("depModId");

CREATE TABLE "VersionInspection" (
  "modVersionId" integer NOT NULL,
  "status" text NOT NULL,
  "manifest" jsonb,
  -- [{ "path": "...", "size": 1, "compressed": 1, "crc32": 1 }]
  "entries" jsonb,
  "flags" jsonb NOT NULL DEFAULT '[]',
  "uncompressedBytes" bigint,
  "ratio" real,
  "sha256" text,
  "error" text,
  "inspectedAt" timestamptz(3),
  CONSTRAINT "VersionInspection_pkey" PRIMARY KEY ("modVersionId"),
  CONSTRAINT "VersionInspection_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "SecurityScan" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modVersionId" integer NOT NULL,
  "sha256" text NOT NULL,
  "engine" text NOT NULL DEFAULT 'virustotal',
  "positives" integer,
  "total" integer,
  "permalink" text,
  "verdict" text NOT NULL,
  "raw" jsonb,
  "scannedAt" timestamptz(3),
  "overrideById" integer,
  "overrideNote" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "SecurityScan_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "SecurityScan_verdict_check"
    CHECK ("verdict" IN ('pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive')),
  CONSTRAINT "SecurityScan_modVersionId_fkey"
    FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SecurityScan_overrideById_fkey"
    FOREIGN KEY ("overrideById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "SecurityScan_modVersionId_scannedAt_idx" ON "SecurityScan"("modVersionId", "scannedAt" DESC);

CREATE INDEX "SecurityScan_sha256_idx" ON "SecurityScan"("sha256");
