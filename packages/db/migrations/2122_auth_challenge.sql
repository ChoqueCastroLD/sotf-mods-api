-- Short-lived, single-use challenges of the multi-step sign-in flows: the password step of a login
-- that still needs a second factor (`login_2fa`, 5 min) and the WebAuthn ceremonies
-- (`passkey_register`, `passkey_login`, 5 min). "challenge" holds the WebAuthn challenge;
-- "payload" holds the "remember me" choice. Expired rows are removed by `cleanup.sessions`.

CREATE TABLE "AuthChallenge" (
  "id" uuid NOT NULL,
  "kind" text NOT NULL,
  "userId" integer,
  "challenge" text,
  "payload" jsonb NOT NULL DEFAULT '{}'::jsonb,
  "failures" integer NOT NULL DEFAULT 0,
  "expiresAt" timestamptz(3) NOT NULL,
  "usedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "AuthChallenge_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "AuthChallenge_kind_check" CHECK ("kind" IN ('login_2fa', 'passkey_register', 'passkey_login')),
  CONSTRAINT "AuthChallenge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "AuthChallenge_expiresAt_idx" ON "AuthChallenge"("expiresAt");
