-- Official bundles (T1-04): a creator attaches one of their Kits to one of their mods; the worker
-- builds a single zip with every resolved file in the right folders ("download all").
CREATE TABLE IF NOT EXISTS "ModBundle" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modId" integer NOT NULL,
  "kitId" integer NOT NULL,
  "createdById" integer,
  "status" text NOT NULL DEFAULT 'pending',
  "statusReason" text,
  "storageKey" text,
  "bytes" bigint,
  "sha256" text,
  "filesCount" integer NOT NULL DEFAULT 0,
  "contents" jsonb NOT NULL DEFAULT '[]'::jsonb,
  -- Hash of the resolved item versions the stored zip was built from.
  "fingerprint" text,
  "downloadsCount" integer NOT NULL DEFAULT 0,
  "builtAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModBundle_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModBundle_mod_kit_key" UNIQUE ("modId", "kitId"),
  CONSTRAINT "ModBundle_status_check" CHECK ("status" IN ('pending', 'ready', 'failed')),
  CONSTRAINT "ModBundle_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModBundle_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "Kit"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModBundle_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "ModBundle_modId_idx" ON "ModBundle"("modId");
CREATE INDEX IF NOT EXISTS "ModBundle_kitId_idx" ON "ModBundle"("kitId");
