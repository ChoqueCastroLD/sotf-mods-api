/**
 * Consent for ads (PLAN §8.5, §9.3): Google «Privacy & messaging» CMP (TCF v2.2 + Consent Mode
 * v2). It is loaded only for guests on pages that actually have an ad slot, after `load` + idle,
 * and it only shows a message in the EEA, the UK and Switzerland. Ads wait for the CMP to settle:
 * the user answered, a stored answer was loaded, or GDPR does not apply.
 */

export const CMP_TIMEOUT_MS = 15_000;

interface TcData {
  gdprApplies?: boolean;
  eventStatus?: 'tcloaded' | 'cmpuishown' | 'useractioncomplete' | string;
  listenerId?: number;
}

type TcfApi = (
  command: string,
  version: number,
  callback: (data: TcData | boolean, success: boolean) => void,
  parameter?: unknown,
) => void;

declare global {
  interface Window {
    __tcfapi?: TcfApi;
  }
}

/** `pub-…` id from the AdSense client (`ca-pub-…`). */
export function publisherId(client: string): string | null {
  const match = /^ca-(pub-\d{10,20})$/.exec(client);
  return match?.[1] ?? null;
}

/** Whether a TCF event means «the CMP has settled» (ads may be requested). */
export function consentSettled(data: TcData): boolean {
  return data.gdprApplies === false || data.eventStatus === 'tcloaded' || data.eventStatus === 'useractioncomplete';
}

/** Google's `googlefcPresent` signal frame (part of the official CMP snippet). */
function signalCmpPresent(doc: Document): void {
  if (doc.querySelector('iframe[name="googlefcPresent"]')) return;
  const frame = doc.createElement('iframe');
  frame.name = 'googlefcPresent';
  frame.title = 'googlefcPresent';
  frame.hidden = true;
  frame.setAttribute('aria-hidden', 'true');
  frame.tabIndex = -1;
  doc.body.append(frame);
}

let loading: Promise<boolean> | null = null;

/**
 * Loads the CMP once and resolves `true` when ads may be requested, `false` if the CMP never
 * settled (blocked by an extension, network error): no ads then.
 */
export function ensureAdConsent(client: string, doc: Document = document): Promise<boolean> {
  if (loading) return loading;
  const pub = publisherId(client);
  if (!pub) return Promise.resolve(false);
  loading = new Promise<boolean>((resolve) => {
    const win = doc.defaultView ?? window;
    let done = false;
    const finish = (value: boolean) => {
      if (done) return;
      done = true;
      resolve(value);
    };
    const timer = win.setTimeout(() => finish(false), CMP_TIMEOUT_MS);
    const listen = () => {
      const api = win.__tcfapi;
      if (!api) return false;
      api('addEventListener', 2, (data, success) => {
        if (!success || typeof data !== 'object') return;
        if (consentSettled(data)) {
          win.clearTimeout(timer);
          finish(true);
          if (data.listenerId !== undefined) api('removeEventListener', 2, () => {}, data.listenerId);
        }
      });
      return true;
    };
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://fundingchoicesmessages.google.com/i/${pub}?ers=1`;
    script.addEventListener('load', () => {
      if (!listen()) {
        // The stub may appear a tick later.
        win.setTimeout(() => {
          if (!listen()) finish(false);
        }, 500);
      }
    });
    script.addEventListener('error', () => {
      win.clearTimeout(timer);
      finish(false);
    });
    doc.head.append(script);
    signalCmpPresent(doc);
  });
  return loading;
}
