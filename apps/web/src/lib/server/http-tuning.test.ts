import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import {
  DRAIN_DELAY_MS,
  HEADERS_TIMEOUT_MS,
  installGracefulShutdown,
  installHttpTuning,
  KEEP_ALIVE_TIMEOUT_MS,
  tuneServer,
} from './http-tuning.ts';

describe('http server tuning (Traefik reuses idle upstream connections for 90 s)', () => {
  it('outlives the proxy idle timeout and keeps headersTimeout above it', () => {
    expect(KEEP_ALIVE_TIMEOUT_MS).toBeGreaterThan(90_000);
    expect(HEADERS_TIMEOUT_MS).toBeGreaterThan(KEEP_ALIVE_TIMEOUT_MS);
  });

  it('Node would otherwise close idle sockets after 5 s', () => {
    const plain = http.createServer();
    expect(plain.keepAliveTimeout).toBe(5_000);
    plain.close();
  });

  it('tunes servers made through the wrapped createServer, once', () => {
    const fakeModule = { createServer: http.createServer };
    installHttpTuning(fakeModule);
    const wrapped = fakeModule.createServer;
    installHttpTuning(fakeModule);
    expect(fakeModule.createServer).toBe(wrapped);
    const server = fakeModule.createServer((_req, res) => res.end('ok'));
    expect(server.keepAliveTimeout).toBe(KEEP_ALIVE_TIMEOUT_MS);
    expect(server.headersTimeout).toBe(HEADERS_TIMEOUT_MS);
    server.close();
  });

  it('keeps the request listener working', async () => {
    const fakeModule = { createServer: http.createServer };
    installHttpTuning(fakeModule);
    const server = fakeModule.createServer((_req, res) => res.end('ok'));
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address() as import('node:net').AddressInfo;
    const response = await fetch(`http://127.0.0.1:${port}/`);
    expect(await response.text()).toBe('ok');
    expect(response.headers.get('keep-alive')).toContain(`timeout=${Math.floor(KEEP_ALIVE_TIMEOUT_MS / 1000)}`);
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  });

  it('tuneServer sets both timeouts', () => {
    const server = tuneServer({ keepAliveTimeout: 1, headersTimeout: 1 });
    expect(server).toEqual({ keepAliveTimeout: KEEP_ALIVE_TIMEOUT_MS, headersTimeout: HEADERS_TIMEOUT_MS });
  });

  it('stops in steps: keeps serving during the drain delay, then closes, then cuts what is left', () => {
    vi.useFakeTimers();
    try {
      const handlers: Record<string, () => void> = {};
      const proc = { once: (signal: string, handler: () => void) => (handlers[signal] = handler), exit: vi.fn() };
      let onClosed = () => {};
      const server = {
        close: vi.fn((callback?: () => void) => {
          onClosed = callback ?? (() => {});
        }),
        closeAllConnections: vi.fn(),
      };
      installGracefulShutdown(server, proc, { drainDelayMs: 100, graceMs: 500 });
      handlers.SIGTERM?.();
      handlers.SIGTERM?.();
      vi.advanceTimersByTime(99);
      expect(server.close).not.toHaveBeenCalled(); // still accepting while Traefik drops the backend
      vi.advanceTimersByTime(1);
      expect(server.close).toHaveBeenCalledTimes(1);
      expect(proc.exit).not.toHaveBeenCalled();
      onClosed(); // every request finished
      expect(proc.exit).toHaveBeenCalledWith(0);
      proc.exit.mockClear();
      vi.advanceTimersByTime(500); // a stuck connection is cut at the hard limit
      expect(server.closeAllConnections).toHaveBeenCalled();
      expect(proc.exit).toHaveBeenCalledWith(0);
    } finally {
      vi.useRealTimers();
    }
  });

  it('a real server finishes the request in flight when it gets SIGTERM, then exits 0', async () => {
    const module = fileURLToPath(new URL('./http-tuning.ts', import.meta.url));
    const script = `
      import http from 'node:http';
      import { installHttpTuning } from ${JSON.stringify(module)};
      installHttpTuning(http, { gracefulShutdown: true });
      const server = http.createServer((req, res) => setTimeout(() => res.end('finished'), 700));
      server.listen(0, '127.0.0.1', () => console.log('PORT ' + server.address().port));
    `;
    const child = spawn(process.execPath, ['--input-type=module', '-e', script], {
      stdio: ['ignore', 'pipe', 'inherit'],
    });
    try {
      const port = await new Promise<number>((resolve, reject) => {
        child.stdout.on('data', (chunk: Buffer) => {
          const match = /PORT (\d+)/.exec(chunk.toString());
          if (match) resolve(Number(match[1]));
        });
        child.on('error', reject);
        child.on('exit', (code) => reject(new Error(`child exited early: ${code}`)));
      });
      const exited = new Promise<number | null>((resolve) => child.on('exit', (code) => resolve(code)));
      const response = fetch(`http://127.0.0.1:${port}/`);
      await new Promise((resolve) => setTimeout(resolve, 200)); // the request is being handled
      child.kill('SIGTERM');
      expect(await (await response).text()).toBe('finished');
      expect(await exited).toBe(0);
    } finally {
      child.kill('SIGKILL');
    }
  }, 90_000);

  it('drains for longer than a proxy needs to notice the container is gone', () => {
    expect(DRAIN_DELAY_MS).toBeGreaterThanOrEqual(1_000);
  });

  it('is wired into the production server entry before the adapter starts listening', () => {
    // fetch.ts is evaluated at module load, ahead of the adapter's `startServer()`; the wrapper
    // only helps if it is installed at module scope and is production-only for the shutdown part.
    const entry = readFileSync(new URL('./fetch.ts', import.meta.url), 'utf8');
    expect(entry).toMatch(
      /^installHttpTuning\(http, \{ gracefulShutdown: process\.env\.NODE_ENV === 'production' \}\);$/m,
    );
    expect(entry.indexOf('installHttpTuning(http')).toBeLessThan(entry.indexOf('export async function handle'));
  });
});
