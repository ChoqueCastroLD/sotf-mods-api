import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

describe('DownloadCounter.flush', () => {
  it('does not spin when two flushes overlap while the follow-up of the first one waits for I/O', () => {
    // A hang is a busy loop that no in-process timeout can break: run it in a child that is killed.
    const script = fileURLToPath(new URL('./counter-race.script.ts', import.meta.url));
    const out = execFileSync(process.execPath, [script], { timeout: 15_000, encoding: 'utf8' });
    expect(out.trim()).toBe('ok');
  });
});
