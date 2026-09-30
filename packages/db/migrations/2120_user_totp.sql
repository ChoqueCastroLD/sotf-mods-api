-- Two-factor authentication (T1-02, PLAN §7.1/§9): one TOTP secret per account and the one-time
-- recovery codes. "secret" is AES-256-GCM ciphertext (key derived from APP_SECRET), never the raw
-- secret. "confirmedAt" NULL = setup started but not confirmed (2FA is not active yet).
-- "lastUsedStep" is the last accepted 30 s time step (a code cannot be replayed).
-- Recovery codes are stored as sha256 hashes and are single use.

CREATE TABLE "UserTotp" (
  "userId" integer NOT NULL,
  "secret" text NOT NULL,
  "confirmedAt" timestamptz(3),
  "lastUsedStep" bigint,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "UserTotp_pkey" PRIMARY KEY ("userId"),
  CONSTRAINT "UserTotp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "UserRecoveryCode" (
  "id" uuid NOT NULL,
  "userId" integer NOT NULL,
  "codeHash" text NOT NULL,
  "usedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "UserRecoveryCode_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "UserRecoveryCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "UserRecoveryCode_userId_codeHash_key" ON "UserRecoveryCode"("userId", "codeHash");
