-- Signals (in-app notifications), preferences and the email outbox (PLAN §6.4, §7.3).

CREATE TABLE "Notification" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "userId" integer NOT NULL,
  "type" text NOT NULL,
  "actorId" integer,
  "targetType" text,
  "targetId" integer,
  "groupKey" text,
  "data" jsonb NOT NULL DEFAULT '{}',
  "readAt" timestamptz(3),
  "emailedAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "Notification_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Notification_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "Notification_userId_createdAt_idx" ON "Notification"("userId", "createdAt" DESC);

CREATE INDEX "Notification_userId_unread_idx" ON "Notification"("userId") WHERE "readAt" IS NULL;

CREATE INDEX "Notification_userId_groupKey_idx" ON "Notification"("userId", "groupKey") WHERE "groupKey" IS NOT NULL;

-- No row = the defaults of PLAN §7.3 apply.
CREATE TABLE "NotificationPreference" (
  "userId" integer NOT NULL,
  "type" text NOT NULL,
  "inApp" boolean NOT NULL,
  "email" text NOT NULL,
  CONSTRAINT "NotificationPreference_pkey" PRIMARY KEY ("userId", "type"),
  CONSTRAINT "NotificationPreference_email_check" CHECK ("email" IN ('instant', 'daily', 'weekly', 'off')),
  CONSTRAINT "NotificationPreference_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "EmailOutbox" (
  "id" bigint GENERATED ALWAYS AS IDENTITY,
  "userId" integer,
  "toEmail" text NOT NULL,
  "template" text NOT NULL,
  "locale" text NOT NULL,
  "payload" jsonb NOT NULL,
  "dedupeKey" text,
  "status" text NOT NULL DEFAULT 'queued',
  "sendAfter" timestamptz(3) NOT NULL DEFAULT now(),
  "attempts" integer NOT NULL DEFAULT 0,
  "providerId" text,
  "error" text,
  "sentAt" timestamptz(3),
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "EmailOutbox_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "EmailOutbox_dedupeKey_key" UNIQUE ("dedupeKey"),
  CONSTRAINT "EmailOutbox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "EmailOutbox_queued_idx" ON "EmailOutbox"("sendAfter") WHERE "status" = 'queued';

CREATE INDEX "EmailOutbox_userId_createdAt_idx" ON "EmailOutbox"("userId", "createdAt" DESC);
