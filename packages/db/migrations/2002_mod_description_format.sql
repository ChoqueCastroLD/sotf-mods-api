-- "Mod"."descriptionFormat": rendering profile of "descriptionMd" (WP-15/WP-40 backlogs).
--   'legacy'   rendered with the `legacyHtml` profile (showdown-compatible; raw HTML allowed);
--   'markdown' rendered with the `full` profile (CommonMark + GFM; raw HTML is literal text);
--   NULL       not decided yet: readers infer it (a mod never published through v2 keeps
--              `legacyHtml`), backfill B9 writes 'legacy' for every legacy description it renders.
-- An edited legacy description keeps 'legacy' until its author converts it.

ALTER TABLE "Mod" ADD COLUMN "descriptionFormat" text;
