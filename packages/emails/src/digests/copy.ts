/**
 * Subject, heading, intro and footer reason of a notifications email by cadence: the instant batch, or
 * the daily and weekly digests (PLAN §7.3).
 */
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { SignalCadence } from '../notifications/types.ts';

export interface DigestCopy {
  subject: string;
  heading: string;
  intro: string;
  reason: string;
}

export function digestCopy(cadence: SignalCadence, count: number, locale: Locale): DigestCopy {
  const o = { locale };
  switch (cadence) {
    case 'instant':
      return {
        subject: m.emails_notify_instant_subject({ count }, o),
        heading: m.emails_notify_instant_heading({}, o),
        intro: m.emails_notify_instant_intro({}, o),
        reason: m.emails_notify_reason_instant({}, o),
      };
    case 'daily':
      return {
        subject: m.emails_notify_daily_subject({ count }, o),
        heading: m.emails_notify_daily_heading({}, o),
        intro: m.emails_notify_digest_intro({}, o),
        reason: m.emails_notify_reason_digest({ cadence }, o),
      };
    case 'weekly':
      return {
        subject: m.emails_notify_weekly_subject({ count }, o),
        heading: m.emails_notify_weekly_heading({}, o),
        intro: m.emails_notify_digest_intro({}, o),
        reason: m.emails_notify_reason_digest({ cadence }, o),
      };
  }
}
