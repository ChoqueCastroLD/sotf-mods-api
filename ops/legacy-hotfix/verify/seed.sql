-- Minimal fixture for ops/legacy-hotfix/verify.sh (schema from `prisma db push`).
-- Object keys and slugs are copied from production (read-only API) so that the
-- tricky cases are real: spaces and an apostrophe in the key, an apostrophe and
-- "+" in slugs, and the one version still stored on the retired file server.

BEGIN;

INSERT INTO "User" (id, email, password, name, slug, "isTrusted", "updatedAt") VALUES
  (1, 'regitoxic@example.test', 'not-a-hash', 'regitoxic', 'regitoxic', false, now()),
  (2, 'ranger@example.test', 'not-a-hash', 'ranger', 'ranger', true, now()),
  (3, 'reuploader@example.test', 'not-a-hash', 'reuploader', 'reuploader', false, now());

INSERT INTO "Token" (token, "expiresAt", "userId", "updatedAt") VALUES
  ('verify-moderator-token', now() + interval '1 day', 2, now());

INSERT INTO "Category" (id, name, slug, description, type, "updatedAt") VALUES
  (1, 'Library', 'library', 'Libraries', 'Mod', now()),
  (6, 'Houses', 'houses', 'Houses', 'Build', now());

INSERT INTO "Mod" (id, name, slug, mod_id, "shortDescription", description, type, "isNSFW", "isApproved",
                   "isFeatured", "latestVersion", "imageUrl", "userId", "categoryId", "updatedAt") VALUES
  (1, 'Regi''s Modding Library', 'regi''s-modding-library', 'Regi_s_Modding_Library', 'Shared helpers',
   E'**Library** used by other mods.\n\n<img src=x onerror=alert(1)>', 'Library', false, true,
   false, '1.0.0', NULL, 1, 1, now()),
  (2, 'Companion Wardrobe', 'virginia-wardrobe-18+', 'CompanionWardrobe', 'Wardrobe',
   'Wardrobe', 'Mod', true, false, false, '0.0.3', NULL, 1, 1, now()),
  (3, 'A Frame House', 'a-frame-house', 'AFrameHouse', 'A house',
   'A house', 'Build', false, true, false, '019a0000-0000-7000-8000-000000000000', NULL, 3, 6, now());

INSERT INTO "ModVersion" (id, version, "isLatest", changelog, "downloadUrl", extension, filename, "modId", "updatedAt") VALUES
  (1, '1.0.0', true, 'First release',
   'https://r2.sotf-mods.com/1766549349465_Regi''s Modding Library.zip', 'zip',
   '1766549349465_Regi''s Modding Library.zip', 1, now()),
  (2, '0.0.3', true, 'Old release',
   'https://files.sotf-mods.com/download/1722123985521_virginia-wardrobe-18 _0.0.3.zip', 'zip',
   '1722123985521_virginia-wardrobe-18 _0.0.3.zip', 2, now()),
  (3, '019a0000-0000-7000-8000-000000000000', true, '<img src=x onerror=alert(1)>',
   'https://r2.sotf-mods.com/1767668000000_a-frame-house.json', 'json',
   '1767668000000_a-frame-house.json', 3, now());

SELECT setval(pg_get_serial_sequence('"User"', 'id'), 3);
SELECT setval(pg_get_serial_sequence('"Mod"', 'id'), 3);
SELECT setval(pg_get_serial_sequence('"ModVersion"', 'id'), 3);
SELECT setval(pg_get_serial_sequence('"Category"', 'id'), 6);

COMMIT;
