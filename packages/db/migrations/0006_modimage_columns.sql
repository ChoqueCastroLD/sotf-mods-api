-- New columns on "ModImage" (PLAN §6.3). The legacy editor deletes and recreates gallery rows, so
-- these are recomputed by an idempotent job whenever they are missing.

ALTER TABLE "ModImage"
  ADD COLUMN "mediaId" uuid,
  ADD COLUMN "storageKey" text,
  ADD COLUMN "position" integer,
  ADD COLUMN "alt" text;
