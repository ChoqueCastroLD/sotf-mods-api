-- "Players also downloaded" and similar mods (T1-15, PLAN §7). Computed nightly by the worker
-- (`recommendations.compute`) from co-downloads (users and hashed IPs that downloaded both mods)
-- blended with shared tags and category; the API only reads it. A derived table: it can be
-- emptied and recomputed at any time.

CREATE TABLE "ModRecommendation" (
  "modId" integer NOT NULL,
  "recommendedModId" integer NOT NULL,
  "kind" text NOT NULL,
  "rank" smallint NOT NULL,
  "score" double precision NOT NULL,
  "supportCount" integer NOT NULL DEFAULT 0,
  "computedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModRecommendation_pkey" PRIMARY KEY ("modId", "kind", "recommendedModId"),
  CONSTRAINT "ModRecommendation_kind_check" CHECK ("kind" IN ('also_downloaded', 'similar')),
  CONSTRAINT "ModRecommendation_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ModRecommendation_recommendedModId_fkey" FOREIGN KEY ("recommendedModId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ModRecommendation_mod_kind_rank_idx" ON "ModRecommendation"("modId", "kind", "rank");
