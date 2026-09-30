/**
 * Email transports (PLAN §2.2, §11.4 `EMAIL_TRANSPORT`):
 *
 * - `resend`: production, Resend HTTP API (`POST /emails`) with an idempotency key per outbox row.
 * - `mailpit`: local development and tests, SMTP to Mailpit (`SMTP_URL`).
 * - `allowlist`: staging and preflight. Only recipients in `EMAIL_ALLOWLIST` (addresses or
 *   `@domain` entries) are delivered through Resend (or SMTP when there is no Resend key); every
 *   other message is **suppressed** and recorded as such, so a staging copy never mails real users.
 */
import { addressOf, buildMime, type OutgoingEmail } from './mime.ts';
import { SmtpError, sendSmtp } from './smtp.ts';

export type { OutgoingEmail } from './mime.ts';

export interface SendResult {
  /** Provider message id (Resend id, SMTP queue id) or null. */
  providerId: string | null;
  /** True when the transport deliberately did not deliver (allowlist). */
  suppressed?: boolean;
}

export interface EmailTransport {
  readonly name: 'resend' | 'mailpit' | 'allowlist' | 'memory';
  send(message: OutgoingEmail): Promise<SendResult>;
}

/** A delivery failure. `permanent` failures are not retried (invalid address, rejected content). */
export class EmailDeliveryError extends Error {
  override readonly name = 'EmailDeliveryError';
  readonly permanent: boolean;
  constructor(message: string, permanent: boolean) {
    super(message);
    this.permanent = permanent;
  }
}

export const RESEND_API_URL = 'https://api.resend.com/emails';

export function createResendTransport(options: {
  apiKey: string;
  fetch?: typeof fetch;
  apiUrl?: string;
  timeoutMs?: number;
}): EmailTransport {
  const doFetch = options.fetch ?? fetch;
  return {
    name: 'resend',
    async send(message) {
      const headers: Record<string, string> = {
        authorization: `Bearer ${options.apiKey}`,
        'content-type': 'application/json',
      };
      if (message.idempotencyKey) headers['idempotency-key'] = message.idempotencyKey;
      let response: Response;
      try {
        response = await doFetch(options.apiUrl ?? RESEND_API_URL, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            from: message.from,
            to: [message.to],
            subject: message.subject,
            html: message.html,
            text: message.text,
            ...(message.headers ? { headers: message.headers } : {}),
          }),
          signal: AbortSignal.timeout(options.timeoutMs ?? 15_000),
        });
      } catch (error) {
        throw new EmailDeliveryError(`resend unreachable: ${(error as Error).name}`, false);
      }
      const body = (await response.json().catch(() => ({}))) as { id?: string; message?: string; name?: string };
      if (!response.ok) {
        // 400/422: the request is invalid and will stay invalid; 401/403: configuration; 429/5xx: retry.
        const permanent = response.status === 400 || response.status === 422;
        throw new EmailDeliveryError(
          `resend ${response.status}: ${String(body.name ?? '')} ${String(body.message ?? '')}`.trim(),
          permanent,
        );
      }
      return { providerId: body.id ?? null };
    },
  };
}

export function createSmtpTransport(options: { url: string; timeoutMs?: number }): EmailTransport {
  return {
    name: 'mailpit',
    async send(message) {
      try {
        const reply = await sendSmtp(
          { url: options.url, timeoutMs: options.timeoutMs },
          { from: addressOf(message.from), to: addressOf(message.to) },
          buildMime(message),
        );
        return { providerId: reply || null };
      } catch (error) {
        if (error instanceof SmtpError) throw new EmailDeliveryError(error.message, error.permanent);
        throw new EmailDeliveryError(`smtp: ${(error as Error).message}`, false);
      }
    },
  };
}

/** Parses `EMAIL_ALLOWLIST` (comma/space separated addresses and `@domain` entries). */
export function parseAllowlist(value: string | undefined): string[] {
  return (value ?? '')
    .split(/[\s,;]+/)
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowlisted(address: string, allowlist: readonly string[]): boolean {
  const email = addressOf(address).toLowerCase();
  const domain = email.slice(email.lastIndexOf('@'));
  return allowlist.some((entry) => (entry.startsWith('@') ? domain === entry : email === entry));
}

export function createAllowlistTransport(inner: EmailTransport, allowlist: readonly string[]): EmailTransport {
  return {
    name: 'allowlist',
    async send(message) {
      if (!isAllowlisted(message.to, allowlist)) return { providerId: null, suppressed: true };
      return inner.send(message);
    },
  };
}

/** In-memory transport (unit tests and previews). */
export function createMemoryTransport(): EmailTransport & { sent: OutgoingEmail[] } {
  const sent: OutgoingEmail[] = [];
  return {
    name: 'memory',
    sent,
    async send(message) {
      sent.push(message);
      return { providerId: `memory-${sent.length}` };
    },
  };
}

export interface TransportConfig {
  EMAIL_TRANSPORT: 'resend' | 'mailpit' | 'allowlist';
  RESEND_API_KEY?: string | undefined;
  SMTP_URL?: string | undefined;
  EMAIL_ALLOWLIST?: string | undefined;
}

/** Builds the transport of an environment; throws a readable error when it is misconfigured. */
export function createTransport(config: TransportConfig, options: { fetch?: typeof fetch } = {}): EmailTransport {
  const resend = config.RESEND_API_KEY
    ? createResendTransport({ apiKey: config.RESEND_API_KEY, fetch: options.fetch })
    : null;
  const smtp = config.SMTP_URL ? createSmtpTransport({ url: config.SMTP_URL }) : null;
  switch (config.EMAIL_TRANSPORT) {
    case 'resend':
      if (!resend) throw new Error('EMAIL_TRANSPORT=resend needs RESEND_API_KEY');
      return resend;
    case 'mailpit':
      if (!smtp) throw new Error('EMAIL_TRANSPORT=mailpit needs SMTP_URL (e.g. smtp://127.0.0.1:47025)');
      return smtp;
    case 'allowlist': {
      const inner = resend ?? smtp;
      if (!inner) throw new Error('EMAIL_TRANSPORT=allowlist needs RESEND_API_KEY or SMTP_URL');
      return createAllowlistTransport(inner, parseAllowlist(config.EMAIL_ALLOWLIST));
    }
  }
}
