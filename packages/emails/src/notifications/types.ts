/**
 * Payload shapes of the notification templates. They mirror `NOTIFICATION_EMAIL_PAYLOADS` of
 * @sotf/core (`src/notifications/email.ts`), which validates every payload before rendering.
 */
export type SignalCadence = 'instant' | 'daily' | 'weekly';

export interface SignalEmailItem {
  type: string;
  count: number;
  actorName: string | null;
  modName: string | null;
  url: string | null;
  excerpt: string | null;
  version: string | null;
  rating: number | null;
  status: string | null;
  reason: string | null;
  build: string | null;
  threshold: number | null;
  awardKind: string | null;
  badgeKey: string | null;
  reportAction: string | null;
  createdAt: string;
}

export interface UnsubscribeLinks {
  /** RFC 8058 POST target (the `List-Unsubscribe` header). */
  oneClick: string;
  /** Page a person opens from the footer link. */
  page: string;
}

export interface SignalsPayload {
  displayName: string;
  cadence: SignalCadence;
  items: SignalEmailItem[];
  moreCount: number;
  signalsUrl: string;
  unsubscribe: UnsubscribeLinks;
}

export interface CreatorWeeklyPayload {
  displayName: string;
  weekStart: string;
  weekEnd: string;
  totals: { downloads: number; downloadsPrevious: number; followers: number; comments: number; reviews: number };
  mods: Array<{
    name: string;
    url: string | null;
    downloads: number;
    followers: number;
    comments: number;
    reviews: number;
  }>;
  basecampUrl: string;
  unsubscribe: UnsubscribeLinks;
}
