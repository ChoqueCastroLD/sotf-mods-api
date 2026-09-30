import { describe, expect, it, vi } from 'vitest';

vi.mock('../../../lib/api.ts', () => ({ api: {} }));
const { previewFor, savePreview } = await import('./preview-cache.ts');

describe('previewFor', () => {
  it('prefers the copy of this browser', async () => {
    await savePreview('up-local', 'data:image/jpeg;base64,AAAA');
    const remote = vi.fn(async () => 'https://r2.test/remote.webp');
    expect(await previewFor({ uploadId: 'up-local' }, remote)).toBe('data:image/jpeg;base64,AAAA');
    expect(remote).not.toHaveBeenCalled();
  });

  it('asks the API for an upload resumed on another device', async () => {
    const remote = vi.fn(async () => 'https://r2.test/320.webp');
    expect(await previewFor({ uploadId: 'up-remote', mediaId: 'm1' }, remote)).toBe('https://r2.test/320.webp');
    expect(remote).toHaveBeenCalledWith('up-remote');
  });

  it('cannot resolve a bare media id or nothing', async () => {
    const remote = vi.fn(async () => 'x');
    expect(await previewFor({ mediaId: 'm-only' }, remote)).toBeNull();
    expect(await previewFor({}, remote)).toBeNull();
    expect(remote).not.toHaveBeenCalled();
  });
});
