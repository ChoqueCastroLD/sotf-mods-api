-- Personal access tokens (PLAN §7.1 T1-08): `Authorization: Bearer sotfm_pat_…` for the public API.
-- Only sha256 of the secret is stored; "tokenPrefix" (the first characters) lets the owner
-- recognise a token in the list. Scopes are a closed set enforced by the application.

CREATE TABLE "PersonalAccessToken" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "name" text NOT NULL,
  "tokenHash" text NOT NULL,
  "tokenPrefix" text NOT NULL,
  "scopes" text[] NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "lastUsedAt" timestamptz(3),
  "expiresAt" timestamptz(3),
  "revokedAt" timestamptz(3),
  CONSTRAINT "PersonalAccessToken_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "PersonalAccessToken_tokenHash_key" UNIQUE ("tokenHash"),
  CONSTRAINT "PersonalAccessToken_name_check" CHECK (char_length("name") BETWEEN 1 AND 64),
  CONSTRAINT "PersonalAccessToken_scopes_check" CHECK (cardinality("scopes") BETWEEN 1 AND 8),
  CONSTRAINT "PersonalAccessToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "PersonalAccessToken_userId_active_idx" ON "PersonalAccessToken"("userId", "createdAt" DESC) WHERE "revokedAt" IS NULL;
