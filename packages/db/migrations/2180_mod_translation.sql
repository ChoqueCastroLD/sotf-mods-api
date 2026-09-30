-- Automatic translation of the mod short description (PLAN §7.13 T1-25): one row per mod and
-- non-English locale, written by the `translation.mod` job (OpenAI) or by the author (override in
-- Basecamp). "sourceHash" is the hash of the English text the row was made from: a machine row whose
-- hash differs from the current text is stale and gets retranslated; an author row is never
-- overwritten by the job. "TranslationUsageDaily" is the daily budget ledger of the job.

CREATE TABLE "ModTranslation" (
  "modId" integer NOT NULL,
  "locale" text NOT NULL,
  "shortDescription" text NOT NULL,
  "source" text NOT NULL DEFAULT 'machine',
  "sourceHash" text NOT NULL,
  "model" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModTranslation_pkey" PRIMARY KEY ("modId", "locale"),
  CONSTRAINT "ModTranslation_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModTranslation_locale_check" CHECK ("locale" IN ('es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja')),
  CONSTRAINT "ModTranslation_source_check" CHECK ("source" IN ('machine', 'author')),
  CONSTRAINT "ModTranslation_text_check" CHECK (length("shortDescription") BETWEEN 1 AND 400)
);

CREATE TABLE "TranslationUsageDaily" (
  "day" date NOT NULL,
  "requests" integer NOT NULL DEFAULT 0,
  "failures" integer NOT NULL DEFAULT 0,
  "tokensIn" bigint NOT NULL DEFAULT 0,
  "tokensOut" bigint NOT NULL DEFAULT 0,
  "costMicroUsd" bigint NOT NULL DEFAULT 0,
  CONSTRAINT "TranslationUsageDaily_pkey" PRIMARY KEY ("day")
);
