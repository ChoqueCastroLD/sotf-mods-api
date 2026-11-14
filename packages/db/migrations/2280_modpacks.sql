-- Modpacks (2280): the public face of Kits (shareable, ordered mod collections; SotF Mods Manager
-- profiles). Downloads of the .sotfprofile and approval like mods: verified creators and staff
-- publish at once, everyone else waits as `pending` for a moderator. Existing kits stay published.
ALTER TABLE "Kit"
  ADD COLUMN "downloads" integer NOT NULL DEFAULT 0,
  ADD COLUMN "approvalStatus" text NOT NULL DEFAULT 'published';
ALTER TABLE "Kit"
  ADD CONSTRAINT "Kit_approvalStatus_check" CHECK ("approvalStatus" IN ('pending', 'published')) NOT VALID,
  ADD CONSTRAINT "Kit_downloads_check" CHECK ("downloads" >= 0) NOT VALID;
