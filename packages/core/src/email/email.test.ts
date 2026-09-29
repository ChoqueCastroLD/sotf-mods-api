import net from 'node:net';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { buildMime, encodeAddress, encodeHeaderValue } from './mime.ts';
import { dotStuff, sendSmtp } from './smtp.ts';
import { maskEmail, parseTemplatePayload } from './templates.ts';
import {
  createAllowlistTransport,
  createMemoryTransport,
  createResendTransport,
  createTransport,
  EmailDeliveryError,
  isAllowlisted,
  parseAllowlist,
} from './transports.ts';

const MESSAGE = {
  from: 'SOTF Mods <noreply@sotf-mods.com>',
  to: 'kelvin@example.test',
  subject: 'Confirma tu correo · ñandú',
  html: '<p>Hola</p>',
  text: 'Hola\n.línea con punto',
};

describe('MIME', () => {
  it('encodes non-ASCII headers and keeps ASCII ones', () => {
    expect(encodeHeaderValue('Plain subject')).toBe('Plain subject');
    const encoded = encodeHeaderValue('Contraseña cambiada');
    expect(encoded).toMatch(/^=\?UTF-8\?B\?/);
    expect(Buffer.from(encoded.slice(10, -2), 'base64').toString('utf8')).toBe('Contraseña cambiada');
    expect(encodeAddress('SOTF Mods <noreply@sotf-mods.com>')).toBe('SOTF Mods <noreply@sotf-mods.com>');
  });

  it('builds a multipart/alternative message with base64 parts', () => {
    const mime = buildMime(MESSAGE, { date: new Date('2026-10-01T10:00:00Z') });
    expect(mime).toContain('From: SOTF Mods <noreply@sotf-mods.com>\r\n');
    expect(mime).toContain('Date: Thu, 01 Oct 2026 10:00:00 +0000');
    expect(mime).toMatch(/Content-Type: multipart\/alternative; boundary="sotf-[0-9a-f]+"/);
    expect(mime).toContain(Buffer.from(MESSAGE.html).toString('base64'));
    expect(mime.split('\r\n').every((line) => line.length <= 998)).toBe(true);
  });

  it('dot-stuffs lines that start with a dot', () => {
    expect(dotStuff('a\n.b\r\n..c')).toBe('a\r\n..b\r\n...c');
  });
});

describe('SMTP client', () => {
  let server: net.Server | null = null;
  afterEach(() => {
    server?.close();
    server = null;
  });

  it('speaks EHLO / AUTH PLAIN / MAIL / RCPT / DATA / QUIT', async () => {
    const received: string[] = [];
    server = net.createServer((socket) => {
      socket.write('220 test ESMTP\r\n');
      let buffer = '';
      let inData = false;
      socket.on('data', (chunk) => {
        buffer += chunk.toString('utf8');
        let index = buffer.indexOf('\r\n');
        while (index >= 0) {
          const line = buffer.slice(0, index);
          buffer = buffer.slice(index + 2);
          received.push(line);
          if (inData) {
            if (line === '.') {
              inData = false;
              socket.write('250 2.0.0 Ok: queued as ABC123\r\n');
            }
          } else if (line.startsWith('EHLO')) socket.write('250-test\r\n250 AUTH PLAIN\r\n');
          else if (line.startsWith('AUTH PLAIN')) socket.write('235 ok\r\n');
          else if (line === 'DATA') {
            inData = true;
            socket.write('354 go\r\n');
          } else if (line === 'QUIT') socket.end('221 bye\r\n');
          else socket.write('250 ok\r\n');
          index = buffer.indexOf('\r\n');
        }
      });
    });
    await new Promise<void>((resolve) => server?.listen(0, '127.0.0.1', resolve));
    const port = (server.address() as net.AddressInfo).port;
    const reply = await sendSmtp(
      { url: `smtp://user:p%40ss@127.0.0.1:${port}` },
      { from: 'noreply@sotf-mods.com', to: 'kelvin@example.test' },
      buildMime(MESSAGE),
    );
    expect(reply).toContain('queued as ABC123');
    expect(received).toContain(`AUTH PLAIN ${Buffer.from('\0user\0p@ss').toString('base64')}`);
    expect(received).toContain('MAIL FROM:<noreply@sotf-mods.com>');
    expect(received).toContain('RCPT TO:<kelvin@example.test>');
  });

  it('turns SMTP rejections into typed errors', async () => {
    server = net.createServer((socket) => {
      socket.write('220 hi\r\n');
      socket.on('data', (chunk) => {
        const text = chunk.toString();
        if (text.startsWith('EHLO')) socket.write('250 ok\r\n');
        else if (text.startsWith('MAIL')) socket.write('250 ok\r\n');
        else if (text.startsWith('RCPT')) socket.write('550 no such user\r\n');
      });
    });
    await new Promise<void>((resolve) => server?.listen(0, '127.0.0.1', resolve));
    const port = (server.address() as net.AddressInfo).port;
    const transport = createTransport({ EMAIL_TRANSPORT: 'mailpit', SMTP_URL: `smtp://127.0.0.1:${port}` });
    await expect(transport.send(MESSAGE)).rejects.toMatchObject({ name: 'EmailDeliveryError', permanent: true });
  });
});

describe('transports', () => {
  it('Resend: posts JSON with the idempotency key and returns the id', async () => {
    const fetch = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
      const headers = init?.headers as Record<string, string>;
      expect(headers.authorization).toBe('Bearer re_test_key');
      expect(headers['idempotency-key']).toBe('outbox-7');
      const body = JSON.parse(String(init?.body));
      expect(body).toMatchObject({ from: MESSAGE.from, to: [MESSAGE.to], subject: MESSAGE.subject });
      return Response.json({ id: 'resend-id-1' });
    });
    const transport = createResendTransport({ apiKey: 're_test_key', fetch: fetch as typeof globalThis.fetch });
    expect(await transport.send({ ...MESSAGE, idempotencyKey: 'outbox-7' })).toEqual({ providerId: 'resend-id-1' });
  });

  it('Resend: 422 is permanent, 429/5xx are retried', async () => {
    const reply = (status: number) =>
      createResendTransport({
        apiKey: 'k',
        fetch: (async () => Response.json({ name: 'x', message: 'y' }, { status })) as typeof fetch,
      });
    await expect(reply(422).send(MESSAGE)).rejects.toMatchObject({ permanent: true });
    await expect(reply(429).send(MESSAGE)).rejects.toMatchObject({ permanent: false });
    await expect(reply(500).send(MESSAGE)).rejects.toBeInstanceOf(EmailDeliveryError);
  });

  it('allowlist: delivers only to listed addresses and domains', async () => {
    const inner = createMemoryTransport();
    const allowlist = parseAllowlist('owner@example.test, @team.example.test');
    const transport = createAllowlistTransport(inner, allowlist);
    expect(isAllowlisted('Owner <OWNER@example.test>', allowlist)).toBe(true);
    expect(await transport.send({ ...MESSAGE, to: 'someone@team.example.test' })).toEqual({ providerId: 'memory-1' });
    expect(await transport.send({ ...MESSAGE, to: 'real.user@gmail.com' })).toEqual({
      providerId: null,
      suppressed: true,
    });
    expect(inner.sent).toHaveLength(1);
  });

  it('createTransport validates the configuration', () => {
    expect(() => createTransport({ EMAIL_TRANSPORT: 'resend' })).toThrow(/RESEND_API_KEY/);
    expect(() => createTransport({ EMAIL_TRANSPORT: 'mailpit' })).toThrow(/SMTP_URL/);
    expect(() => createTransport({ EMAIL_TRANSPORT: 'allowlist' })).toThrow(/RESEND_API_KEY or SMTP_URL/);
    expect(createTransport({ EMAIL_TRANSPORT: 'allowlist', SMTP_URL: 'smtp://127.0.0.1:1' }).name).toBe('allowlist');
  });
});

describe('templates', () => {
  it('validates payloads and masks emails', () => {
    expect(() => parseTemplatePayload('auth.verify_email', { displayName: 'K' })).toThrow();
    expect(
      parseTemplatePayload('auth.verify_email', { displayName: 'K', url: 'https://x.test/v', expiresHours: 24 }),
    ).toEqual({
      displayName: 'K',
      url: 'https://x.test/v',
      expiresHours: 24,
    });
    expect(maskEmail('kelvin@example.test')).toBe('k***@example.test');
    expect(maskEmail('bad')).toBe('***');
  });
});
