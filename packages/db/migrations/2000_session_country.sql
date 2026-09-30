-- "Session"."country": ISO 3166-1 alpha-2 country of the request that created the session (from
-- the edge `CF-IPCountry` header), shown in Settings → Security (`SessionDTO.country`, WP-30/WP-81).
-- NULL when unknown (sessions created before this column, local development).

ALTER TABLE "Session" ADD COLUMN "country" text;
