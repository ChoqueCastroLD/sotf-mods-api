-- "Category"."ogImageKey": key of the generated OG card of a category hub in the public bucket
-- (`og/category/{slug}-{hash}.png`, written by `og.render`, WP-61 backlog). NULL = use og-default.

ALTER TABLE "Category" ADD COLUMN "ogImageKey" text;
