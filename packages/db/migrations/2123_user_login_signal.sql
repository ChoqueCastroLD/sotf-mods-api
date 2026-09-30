-- New-login alert (PLAN §9): the countries and devices an account has signed in from. A login from
-- a country or a device label not seen before (for an account that already has history) queues the
-- «new sign-in» email. "kind" is `country` (ISO 3166-1 alpha-2) or `device` (session device label).

CREATE TABLE "UserLoginSignal" (
  "userId" integer NOT NULL,
  "kind" text NOT NULL,
  "value" text NOT NULL,
  "firstSeenAt" timestamptz(3) NOT NULL DEFAULT now(),
  "lastSeenAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "UserLoginSignal_pkey" PRIMARY KEY ("userId", "kind", "value"),
  CONSTRAINT "UserLoginSignal_kind_check" CHECK ("kind" IN ('country', 'device')),
  CONSTRAINT "UserLoginSignal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
