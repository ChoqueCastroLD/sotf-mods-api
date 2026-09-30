-- WebAuthn passkeys (T1-26, PLAN §7.1): one row per registered credential. "credentialId" and
-- "publicKey" are base64url. "counter" is the signature counter (0 for authenticators that do not
-- count, e.g. synced passkeys). Passkeys sign in without a password and count as two factors.

CREATE TABLE "UserPasskey" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "credentialId" text NOT NULL,
  "publicKey" text NOT NULL,
  "counter" bigint NOT NULL DEFAULT 0,
  "transports" text[] NOT NULL DEFAULT '{}'::text[],
  "deviceType" text NOT NULL DEFAULT 'singleDevice',
  "backedUp" boolean NOT NULL DEFAULT false,
  "name" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "lastUsedAt" timestamptz(3),
  CONSTRAINT "UserPasskey_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "UserPasskey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "UserPasskey_credentialId_key" ON "UserPasskey"("credentialId");

CREATE INDEX "UserPasskey_userId_idx" ON "UserPasskey"("userId");
