/**
 * Small SMTP client (RFC 5321) for the `mailpit` transport: local development and integration
 * tests deliver to Mailpit's SMTP sink. One connection per message: greeting → EHLO → AUTH PLAIN
 * (only when the URL has credentials) → MAIL FROM → RCPT TO → DATA (dot-stuffed) → QUIT.
 * `smtp://` is plain TCP, `smtps://` is implicit TLS. Production mail goes through Resend (HTTP).
 */
import net from 'node:net';
import tls from 'node:tls';

export interface SmtpOptions {
  /** `smtp://[user:pass@]host:port` or `smtps://…`. */
  url: string;
  /** Name announced in EHLO. */
  clientName?: string;
  timeoutMs?: number;
}

export class SmtpError extends Error {
  override readonly name = 'SmtpError';
  readonly code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
  /** 5xx replies are permanent failures (retrying will not help). */
  get permanent(): boolean {
    return this.code >= 500;
  }
}

interface Reply {
  code: number;
  lines: string[];
}

/** Buffers socket data and yields complete SMTP replies (multi-line `250-…` / `250 …`). */
class ReplyReader {
  #buffer = '';
  #lines: string[] = [];
  readonly #replies: Reply[] = [];
  #waiter: { resolve: (reply: Reply) => void; reject: (error: Error) => void } | null = null;
  #error: Error | null = null;

  push(chunk: string): void {
    this.#buffer += chunk;
    let index = this.#buffer.indexOf('\r\n');
    while (index >= 0) {
      const line = this.#buffer.slice(0, index);
      this.#buffer = this.#buffer.slice(index + 2);
      this.#lines.push(line);
      if (/^\d{3}(?: |$)/.test(line)) {
        const reply = { code: Number(line.slice(0, 3)), lines: this.#lines };
        this.#lines = [];
        if (this.#waiter) {
          const waiter = this.#waiter;
          this.#waiter = null;
          waiter.resolve(reply);
        } else {
          this.#replies.push(reply);
        }
      }
      index = this.#buffer.indexOf('\r\n');
    }
  }

  fail(error: Error): void {
    this.#error ??= error;
    if (this.#waiter) {
      const waiter = this.#waiter;
      this.#waiter = null;
      waiter.reject(error);
    }
  }

  next(): Promise<Reply> {
    const ready = this.#replies.shift();
    if (ready) return Promise.resolve(ready);
    if (this.#error) return Promise.reject(this.#error);
    return new Promise((resolve, reject) => {
      this.#waiter = { resolve, reject };
    });
  }
}

/** `.` at the start of a line is doubled (RFC 5321 §4.5.2); line endings are CRLF. */
export function dotStuff(data: string): string {
  return data
    .replace(/\r?\n/g, '\r\n')
    .split('\r\n')
    .map((line) => (line.startsWith('.') ? `.${line}` : line))
    .join('\r\n');
}

/** Sends one message. Resolves with the server's final DATA reply text (queue id). */
export async function sendSmtp(
  options: SmtpOptions,
  envelope: { from: string; to: string },
  data: string,
): Promise<string> {
  const url = new URL(options.url);
  const secure = url.protocol === 'smtps:';
  if (!secure && url.protocol !== 'smtp:') throw new TypeError(`unsupported SMTP URL scheme ${url.protocol}`);
  const port = Number(url.port || (secure ? 465 : 25));
  const host = url.hostname;
  const timeoutMs = options.timeoutMs ?? 15_000;

  const socket: net.Socket = secure ? tls.connect({ host, port, servername: host }) : net.connect({ host, port });
  socket.setEncoding('utf8');
  socket.setTimeout(timeoutMs);
  const reader = new ReplyReader();
  socket.on('data', (chunk: string) => reader.push(chunk));
  socket.on('timeout', () => {
    reader.fail(new SmtpError(421, `SMTP timeout after ${timeoutMs} ms`));
    socket.destroy();
  });
  socket.on('error', (error) => reader.fail(error));
  socket.on('close', () => reader.fail(new SmtpError(421, 'SMTP connection closed')));

  const expect = async (codes: number[], step: string): Promise<Reply> => {
    const reply = await reader.next();
    if (!codes.includes(reply.code)) {
      throw new SmtpError(reply.code, `SMTP ${step} failed: ${reply.lines.join(' | ').slice(0, 300)}`);
    }
    return reply;
  };
  const command = async (line: string, codes: number[], step: string): Promise<Reply> => {
    socket.write(`${line}\r\n`);
    return expect(codes, step);
  };

  try {
    await expect([220], 'greeting');
    await command(`EHLO ${options.clientName ?? 'sotf-mods.local'}`, [250], 'EHLO');
    if (url.username) {
      const user = decodeURIComponent(url.username);
      const pass = decodeURIComponent(url.password);
      const token = Buffer.from(`\0${user}\0${pass}`, 'utf8').toString('base64');
      await command(`AUTH PLAIN ${token}`, [235], 'AUTH');
    }
    await command(`MAIL FROM:<${envelope.from}>`, [250], 'MAIL FROM');
    await command(`RCPT TO:<${envelope.to}>`, [250, 251], 'RCPT TO');
    await command('DATA', [354], 'DATA');
    socket.write(`${dotStuff(data).replace(/(\r\n)?$/, '\r\n')}.\r\n`);
    const done = await expect([250], 'message');
    socket.write('QUIT\r\n');
    return done.lines.join(' ').slice(4).trim();
  } finally {
    socket.end();
  }
}
