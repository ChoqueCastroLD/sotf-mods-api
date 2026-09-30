-- Mod Jams: themed, timed modding events (migration 2210). A jam moves through
-- draft -> announced -> submissions -> submissions_closed -> voting -> results -> archived, either by
-- its schedule (worker job `jam.advance`) or forced by staff ("phaseLocked" stops the schedule).
-- Creators enter one of their published mods/builds; verified members score each entry 1-5 per
-- category while the jam is in `voting`; results (Bayesian average with a minimum of votes) are
-- computed when voting closes and only then shown.
CREATE TABLE IF NOT EXISTS "Jam" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "slug" text NOT NULL,
  "title" text NOT NULL,
  "tagline" text NOT NULL DEFAULT '',
  "theme" text NOT NULL DEFAULT '',
  "themeHidden" boolean NOT NULL DEFAULT false,
  "descriptionMd" text NOT NULL DEFAULT '',
  "descriptionHtml" text,
  "rulesMd" text NOT NULL DEFAULT '',
  "rulesHtml" text,
  "prizesMd" text NOT NULL DEFAULT '',
  "prizesHtml" text,
  "bannerUrl" text,
  "accent" text NOT NULL DEFAULT 'signal',
  "phase" text NOT NULL DEFAULT 'draft',
  "phaseLocked" boolean NOT NULL DEFAULT false,
  "announceAt" timestamptz(3),
  "submissionsOpenAt" timestamptz(3),
  "submissionsCloseAt" timestamptz(3),
  "votingOpenAt" timestamptz(3),
  "votingCloseAt" timestamptz(3),
  "archiveAt" timestamptz(3),
  "entryKinds" text NOT NULL DEFAULT 'any',
  "maxEntriesPerUser" integer NOT NULL DEFAULT 1,
  "maxCoAuthors" integer NOT NULL DEFAULT 4,
  "minVoterAgeDays" integer NOT NULL DEFAULT 3,
  "minVoterActivity" integer NOT NULL DEFAULT 1,
  "minVotes" integer NOT NULL DEFAULT 5,
  "autoPublishResults" boolean NOT NULL DEFAULT true,
  "resultsComputedAt" timestamptz(3),
  "resultsPublishedAt" timestamptz(3),
  "ogImageKey" text,
  "createdById" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Jam_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Jam_slug_key" UNIQUE ("slug"),
  CONSTRAINT "Jam_phase_check" CHECK ("phase" IN
    ('draft', 'announced', 'submissions', 'submissions_closed', 'voting', 'results', 'archived')),
  CONSTRAINT "Jam_entryKinds_check" CHECK ("entryKinds" IN ('any', 'mod', 'build')),
  CONSTRAINT "Jam_limits_check" CHECK ("maxEntriesPerUser" BETWEEN 1 AND 10 AND "maxCoAuthors" BETWEEN 0 AND 10
    AND "minVoterAgeDays" BETWEEN 0 AND 365 AND "minVoterActivity" BETWEEN 0 AND 100 AND "minVotes" BETWEEN 1 AND 500),
  CONSTRAINT "Jam_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "Jam_phase_idx" ON "Jam"("phase");

CREATE TABLE IF NOT EXISTS "JamCategory" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "jamId" integer NOT NULL,
  -- Stable key (`fun`, `polish`, `creativity`, `lore`…). The four defaults are translated by key;
  -- a custom category carries its own "label".
  "key" text NOT NULL,
  "label" text,
  "weight" integer NOT NULL DEFAULT 1,
  "position" integer NOT NULL DEFAULT 0,
  CONSTRAINT "JamCategory_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "JamCategory_jam_key_key" UNIQUE ("jamId", "key"),
  CONSTRAINT "JamCategory_weight_check" CHECK ("weight" BETWEEN 1 AND 10),
  CONSTRAINT "JamCategory_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "JamEntry" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "jamId" integer NOT NULL,
  "modId" integer NOT NULL,
  "submittedById" integer,
  "notesMd" text NOT NULL DEFAULT '',
  "notesHtml" text,
  -- active: visible and votable; withdrawn: by the authors; hidden: by staff (reversible);
  -- disqualified: by staff, never ranked.
  "status" text NOT NULL DEFAULT 'active',
  "statusReason" text,
  "createdDuringJam" boolean NOT NULL DEFAULT false,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "JamEntry_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "JamEntry_jam_mod_key" UNIQUE ("jamId", "modId"),
  CONSTRAINT "JamEntry_status_check" CHECK ("status" IN ('active', 'withdrawn', 'hidden', 'disqualified')),
  CONSTRAINT "JamEntry_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamEntry_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamEntry_submittedById_fkey" FOREIGN KEY ("submittedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "JamEntry_jamId_status_idx" ON "JamEntry"("jamId", "status");
CREATE INDEX IF NOT EXISTS "JamEntry_modId_idx" ON "JamEntry"("modId");

CREATE TABLE IF NOT EXISTS "JamEntryAuthor" (
  "entryId" integer NOT NULL,
  "userId" integer NOT NULL,
  "isLead" boolean NOT NULL DEFAULT false,
  CONSTRAINT "JamEntryAuthor_pkey" PRIMARY KEY ("entryId", "userId"),
  CONSTRAINT "JamEntryAuthor_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "JamEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamEntryAuthor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "JamEntryAuthor_userId_idx" ON "JamEntryAuthor"("userId");

-- One score per voter, entry and category. "excludedReason" is set by the results run (shared
-- address with an author, burst) and never deletes the row, so the audit stays complete.
CREATE TABLE IF NOT EXISTS "JamVote" (
  "entryId" integer NOT NULL,
  "categoryId" integer NOT NULL,
  "voterId" integer NOT NULL,
  "jamId" integer NOT NULL,
  "score" smallint NOT NULL,
  "changes" integer NOT NULL DEFAULT 0,
  "ipHash" text,
  "excludedReason" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "JamVote_pkey" PRIMARY KEY ("entryId", "categoryId", "voterId"),
  CONSTRAINT "JamVote_score_check" CHECK ("score" BETWEEN 1 AND 5),
  CONSTRAINT "JamVote_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "JamEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamVote_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "JamCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamVote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamVote_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "JamVote_jamId_voterId_idx" ON "JamVote"("jamId", "voterId");
CREATE INDEX IF NOT EXISTS "JamVote_voterId_idx" ON "JamVote"("voterId");

-- Computed results: one row per entry and category, plus `categoryKey = '_overall'`.
-- "rank" is null while the entry has fewer than "Jam"."minVotes" valid votes.
CREATE TABLE IF NOT EXISTS "JamResult" (
  "jamId" integer NOT NULL,
  "entryId" integer NOT NULL,
  "categoryKey" text NOT NULL,
  "votes" integer NOT NULL DEFAULT 0,
  "average" double precision NOT NULL DEFAULT 0,
  "score" double precision NOT NULL DEFAULT 0,
  "rank" integer,
  "computedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "JamResult_pkey" PRIMARY KEY ("jamId", "entryId", "categoryKey"),
  CONSTRAINT "JamResult_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamResult_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "JamEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "JamResult_jam_cat_rank_idx" ON "JamResult"("jamId", "categoryKey", "rank");

-- "Remind me" follows of a jam (also set when a member submits an entry).
CREATE TABLE IF NOT EXISTS "JamFollow" (
  "jamId" integer NOT NULL,
  "userId" integer NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "JamFollow_pkey" PRIMARY KEY ("jamId", "userId"),
  CONSTRAINT "JamFollow_jamId_fkey" FOREIGN KEY ("jamId") REFERENCES "Jam"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "JamFollow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS "JamFollow_userId_idx" ON "JamFollow"("userId");
