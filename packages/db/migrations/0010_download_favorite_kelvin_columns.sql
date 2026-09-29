-- New columns on "ModDownload", "ModFavorite" and "KelvinGPTMessages" (PLAN §6.3).
-- "ModDownload" holds ~2M rows: nullable columns without default are catalog-only changes.

ALTER TABLE "ModDownload"
  ADD COLUMN "ipHash" text,
  ADD COLUMN "country" text,
  ADD COLUMN "source" text,
  ADD COLUMN "userId" integer,
  ADD COLUMN "isUnique" boolean;

ALTER TABLE "ModDownload"
  ADD CONSTRAINT "ModDownload_source_check"
    CHECK ("source" IN ('web', 'redmanager', 'client', 'api', 'unknown')) NOT VALID,
  ADD CONSTRAINT "ModDownload_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE NOT VALID;

-- Follow (♥) = Backpack: "notify" opts into new-version signals (PLAN §6.8).
ALTER TABLE "ModFavorite"
  ADD COLUMN "notify" boolean NOT NULL DEFAULT true;

-- v2 stores chatId = HMAC(chat_id) and marks the row as hashed (PLAN §6.8).
ALTER TABLE "KelvinGPTMessages"
  ADD COLUMN "isHashed" boolean NOT NULL DEFAULT false;
