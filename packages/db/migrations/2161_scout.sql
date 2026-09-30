-- Scout (T1-07): the natural-language mod finder of Cmd+K. "ScoutCache" keeps the answers of the
-- last days (key = HMAC of locale + normalised question; only mod ids and one-line reasons, the
-- cards are rebuilt from the catalogue on every read) and "ScoutUsageDaily" aggregates the model
-- usage that the daily spend cap is charged against.

CREATE TABLE "ScoutCache" (
  "cacheKey" text NOT NULL,
  "locale" text NOT NULL,
  "question" text NOT NULL,
  "answer" text NOT NULL,
  "picks" jsonb NOT NULL DEFAULT '[]'::jsonb,
  "hits" integer NOT NULL DEFAULT 0,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "lastHitAt" timestamptz(3),
  CONSTRAINT "ScoutCache_pkey" PRIMARY KEY ("cacheKey")
);

CREATE INDEX "ScoutCache_createdAt_idx" ON "ScoutCache"("createdAt");

CREATE TABLE "ScoutUsageDaily" (
  "day" date NOT NULL,
  "requests" integer NOT NULL DEFAULT 0,
  "cacheHits" integer NOT NULL DEFAULT 0,
  "refusals" integer NOT NULL DEFAULT 0,
  "errors" integer NOT NULL DEFAULT 0,
  "tokensIn" bigint NOT NULL DEFAULT 0,
  "tokensOut" bigint NOT NULL DEFAULT 0,
  "costMicroUsd" bigint NOT NULL DEFAULT 0,
  CONSTRAINT "ScoutUsageDaily_pkey" PRIMARY KEY ("day")
);
