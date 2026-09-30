-- Known issues of a mod, maintained by its author (PLAN §7.13 T1-14). Plain text (no Markdown
-- pipeline): shown on the mod page and in the Markdown alternate. "status" `open` |
-- `investigating` | `fixed`; "fixedInVersion" is free text (the version label that fixes it).

CREATE TABLE "ModKnownIssue" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modId" integer NOT NULL,
  "title" text NOT NULL,
  "body" text NOT NULL DEFAULT '',
  "status" text NOT NULL DEFAULT 'open',
  "affectedVersions" text,
  "fixedInVersion" text,
  "position" integer NOT NULL DEFAULT 0,
  "createdById" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "resolvedAt" timestamptz(3),
  CONSTRAINT "ModKnownIssue_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModKnownIssue_status_check" CHECK ("status" IN ('open', 'investigating', 'fixed')),
  CONSTRAINT "ModKnownIssue_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModKnownIssue_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModKnownIssue_modId_position_idx" ON "ModKnownIssue"("modId", "position");
