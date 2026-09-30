-- Author-written FAQ of a mod (PLAN §7.13 T1-14). Shown on the mod page before the generated
-- facts and emitted in the page's `FAQPage` JSON-LD. Plain text.

CREATE TABLE "ModFaqEntry" (
  "id" integer GENERATED ALWAYS AS IDENTITY,
  "modId" integer NOT NULL,
  "question" text NOT NULL,
  "answer" text NOT NULL,
  "position" integer NOT NULL DEFAULT 0,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModFaqEntry_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ModFaqEntry_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mod"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ModFaqEntry_modId_position_idx" ON "ModFaqEntry"("modId", "position");
