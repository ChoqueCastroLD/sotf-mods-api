-- Gamification (PLAN §6.4, §7.2): badges, XP events, mod milestones and awards. The badge catalog
-- is seeded from code; its translations live in the i18n messages.

CREATE TABLE "Badge" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "key" text NOT NULL,
  "group" text NOT NULL,
  "tier" smallint NOT NULL DEFAULT 1,
  "icon" text NOT NULL,
  "criteria" jsonb NOT NULL,
  "isSecret" boolean NOT NULL DEFAULT false,
  "isRepeatable" boolean NOT NULL DEFAULT false,
  "sortOrder" integer NOT NULL DEFAULT 0,
  "retiredAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Badge_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Badge_key_key" UNIQUE ("key")
);

CREATE TABLE "UserBadge" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "userId" integer NOT NULL,
  "badgeId" integer NOT NULL,
  "contextKey" text NOT NULL DEFAULT '',
  "awardedAt" timestamptz(3) NOT NULL DEFAULT now(),
  "isFeatured" boolean NOT NULL DEFAULT false,
  "notifiedAt" timestamptz(3),
  CONSTRAINT "UserBadge_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "UserBadge_userId_badgeId_contextKey_key" UNIQUE ("userId", "badgeId", "contextKey"),
  CONSTRAINT "UserBadge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "UserBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "UserBadge_badgeId_idx" ON "UserBadge"("badgeId");

CREATE TABLE "XpEvent" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "userId" integer NOT NULL,
  "kind" text NOT NULL,
  "points" integer NOT NULL,
  "refType" text NOT NULL,
  "refId" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "revokedAt" timestamptz(3),
  CONSTRAINT "XpEvent_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "XpEvent_userId_kind_refType_refId_key" UNIQUE ("userId", "kind", "refType", "refId"),
  CONSTRAINT "XpEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "XpEvent_userId_createdAt_idx" ON "XpEvent"("userId", "createdAt" DESC);

CREATE TABLE "ModMilestone" (
  "modId" integer NOT NULL,
  "threshold" integer NOT NULL,
  "reachedAt" timestamptz(3) NOT NULL,
  "notifiedAt" timestamptz(3),
  CONSTRAINT "ModMilestone_pkey" PRIMARY KEY ("modId", "threshold"),
  CONSTRAINT "ModMilestone_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "Award" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "kind" text NOT NULL,
  "modId" integer NOT NULL,
  "periodStart" date NOT NULL,
  "periodEnd" date NOT NULL,
  "reason" text,
  "createdById" integer,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Award_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Award_kind_periodStart_key" UNIQUE ("kind", "periodStart"),
  CONSTRAINT "Award_kind_check" CHECK ("kind" IN ('mod_of_week', 'staff_pick', 'build_of_month', 'mod_of_month')),
  CONSTRAINT "Award_period_check" CHECK ("periodEnd" >= "periodStart"),
  CONSTRAINT "Award_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Award_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Award_modId_idx" ON "Award"("modId");
