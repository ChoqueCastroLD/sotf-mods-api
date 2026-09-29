import { describe, expect, it } from 'vitest';
import { storageKeyFromUrl } from '../src/storage-key.ts';

describe('storageKeyFromUrl', () => {
  it('decodes R2 URLs into object keys', () => {
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/1790458408372_arctic fox savage.png')).toBe(
      '1790458408372_arctic fox savage.png',
    );
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/1_a%20b%27s%20(c).zip')).toBe("1_a b's (c).zip");
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/1_a+b.zip')).toBe('1_a+b.zip');
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/100%_real.zip')).toBe('100%_real.zip');
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/k.zip?x=1#f')).toBe('k.zip');
  });

  it('returns null outside R2 or for unusable keys', () => {
    expect(storageKeyFromUrl('https://example.com/x.zip')).toBeNull();
    expect(storageKeyFromUrl('http://r2.sotf-mods.com/x.zip')).toBeNull();
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/')).toBeNull();
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/%2Fabs')).toBeNull();
    expect(storageKeyFromUrl('https://r2.sotf-mods.com/a%0Ab')).toBeNull();
    expect(storageKeyFromUrl('')).toBeNull();
    expect(storageKeyFromUrl(null)).toBeNull();
  });
});
