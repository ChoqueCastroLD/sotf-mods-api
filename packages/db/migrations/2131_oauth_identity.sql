-- OAuth login and account linking (PLAN §7.1 T1-01, Discord). One row per linked external
-- account; "OAuthLinkTicket" holds a pending link that needs the owner's password before it
-- becomes an identity (the provider's verified email matched an existing account).

CREATE TABLE "OAuthIdentity" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "provider" text NOT NULL,
  "providerUserId" text NOT NULL,
  "providerUsername" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "lastLoginAt" timestamptz(3),
  CONSTRAINT "OAuthIdentity_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "OAuthIdentity_provider_check" CHECK ("provider" IN ('discord')),
  CONSTRAINT "OAuthIdentity_provider_subject_key" UNIQUE ("provider", "providerUserId"),
  CONSTRAINT "OAuthIdentity_userId_provider_key" UNIQUE ("userId", "provider"),
  CONSTRAINT "OAuthIdentity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "OAuthLinkTicket" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "tokenHash" text NOT NULL,
  "provider" text NOT NULL,
  "providerUserId" text NOT NULL,
  "providerUsername" text NOT NULL,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  "expiresAt" timestamptz(3) NOT NULL,
  "usedAt" timestamptz(3),
  CONSTRAINT "OAuthLinkTicket_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "OAuthLinkTicket_tokenHash_key" UNIQUE ("tokenHash"),
  CONSTRAINT "OAuthLinkTicket_provider_check" CHECK ("provider" IN ('discord')),
  CONSTRAINT "OAuthLinkTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "OAuthLinkTicket_expiresAt_idx" ON "OAuthLinkTicket"("expiresAt");
