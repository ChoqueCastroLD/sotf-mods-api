/**
 * Minimal RFC 5322 / MIME builder for the SMTP transport (Mailpit locally): a
 * `multipart/alternative` message with a plain-text and an HTML part, UTF-8 everywhere, base64
 * bodies (76-char lines) and RFC 2047 encoded-words for non-ASCII headers.
 */
import { randomBytes } from 'node:crypto';

export interface OutgoingEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  /** Extra headers (e.g. `List-Unsubscribe`). */
  headers?: Record<string, string>;
  /** Stable id used as the provider idempotency key (`outbox-<id>`). */
  idempotencyKey?: string;
}

const CRLF = '\r\n';

/** RFC 2047 `=?UTF-8?B?…?=` when the value is not plain printable ASCII. */
export function encodeHeaderValue(value: string): string {
  const clean = value.replace(/[\r\n]+/g, ' ');
  if (/^[\x20-\x7e]*$/.test(clean)) return clean;
  // Split into encoded words of ≤ 45 source bytes (≤ 75 chars each once encoded).
  const words: string[] = [];
  let chunk = '';
  for (const char of clean) {
    if (Buffer.byteLength(chunk + char, 'utf8') > 45) {
      words.push(chunk);
      chunk = '';
    }
    chunk += char;
  }
  if (chunk) words.push(chunk);
  return words.map((w) => `=?UTF-8?B?${Buffer.from(w, 'utf8').toString('base64')}?=`).join(`${CRLF} `);
}

/** `Name <addr>` with the display name encoded when needed. */
export function encodeAddress(address: string): string {
  const match = /^\s*(.*?)\s*<([^>]+)>\s*$/.exec(address);
  if (!match) return address.trim();
  const name = (match[1] ?? '').replace(/^"|"$/g, '');
  if (!name) return `<${match[2]}>`;
  const encoded = encodeHeaderValue(name);
  const display = encoded === name && /[()<>@,;:\\".[\]]/.test(name) ? `"${name.replace(/"/g, '\\"')}"` : encoded;
  return `${display} <${match[2]}>`;
}

/** Bare `addr` of `Name <addr>`. */
export function addressOf(address: string): string {
  const match = /<([^>]+)>/.exec(address);
  return (match?.[1] ?? address).trim();
}

function base64Lines(content: string): string {
  const encoded = Buffer.from(content, 'utf8').toString('base64');
  return encoded.match(/.{1,76}/g)?.join(CRLF) ?? '';
}

/** Full message source with CRLF line endings. */
export function buildMime(message: OutgoingEmail, options: { date?: Date; messageIdDomain?: string } = {}): string {
  const boundary = `sotf-${randomBytes(12).toString('hex')}`;
  const domain = options.messageIdDomain ?? (addressOf(message.from).split('@')[1] || 'sotf-mods.com');
  const headers: Array<[string, string]> = [
    ['From', encodeAddress(message.from)],
    ['To', encodeAddress(message.to)],
    ['Subject', encodeHeaderValue(message.subject)],
    ['Date', (options.date ?? new Date()).toUTCString().replace('GMT', '+0000')],
    ['Message-ID', `<${randomBytes(16).toString('hex')}@${domain}>`],
    ['MIME-Version', '1.0'],
  ];
  for (const [name, value] of Object.entries(message.headers ?? {})) {
    if (!/^[A-Za-z0-9-]+$/.test(name)) throw new TypeError(`invalid header name "${name}"`);
    headers.push([name, encodeHeaderValue(value)]);
  }
  headers.push(['Content-Type', `multipart/alternative; boundary="${boundary}"`]);
  const lines = headers.map(([name, value]) => `${name}: ${value}`);
  return [
    ...lines,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64Lines(message.text),
    `--${boundary}`,
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64Lines(message.html),
    `--${boundary}--`,
    '',
  ].join(CRLF);
}
