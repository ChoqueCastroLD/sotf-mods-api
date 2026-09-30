-- Paths of content deleted before v2 that external sites still link to (research/01 §4.4, WP-31
-- backlog «known tombstones as data»). They answer 410; `KNOWN_TOMBSTONES` of
-- packages/core/src/resolve/paths.ts is only the fallback for databases migrated before this file.

INSERT INTO "Tombstone" ("path", "status", "reason")
VALUES ('/mods/aedev/gyrocopter', 410, 'Deleted from the legacy site (tutorial links)')
ON CONFLICT ("path") DO NOTHING;
