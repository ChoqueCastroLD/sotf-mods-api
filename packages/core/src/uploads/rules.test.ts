import { FILE_CHECKS } from '@sotf/contracts/manifest';
import { describe, expect, it } from 'vitest';
import { DomainError } from '../kernel/errors.ts';
import { baseContentType, extensionOf, mediaPurposeOf, partSize, validateUpload } from './rules.ts';

const MB = 1024 * 1024;

function code(fn: () => unknown): string | undefined {
  try {
    fn();
  } catch (error) {
    return error instanceof DomainError ? error.code : 'other';
  }
  return undefined;
}

describe('validateUpload', () => {
  const zip = {
    purpose: 'mod_file' as const,
    filename: 'Mod.zip',
    size: 1000,
    contentType: 'application/zip',
    verifiedCreator: false,
  };

  it('signs the canonical type (Windows zips included)', () => {
    expect(validateUpload(zip)).toMatchObject({ contentType: 'application/zip', extension: 'zip', multipart: null });
    expect(validateUpload({ ...zip, contentType: 'application/x-zip-compressed' }).contentType).toBe('application/zip');
    expect(validateUpload({ ...zip, purpose: 'image', filename: 'a.JPG', contentType: 'image/jpeg' }).contentType).toBe(
      'image/jpeg',
    );
  });

  it('rejects wrong extensions and types (415)', () => {
    expect(code(() => validateUpload({ ...zip, filename: 'Mod.rar' }))).toBe('UNSUPPORTED_MEDIA_TYPE');
    expect(code(() => validateUpload({ ...zip, contentType: 'text/html' }))).toBe('UNSUPPORTED_MEDIA_TYPE');
    expect(code(() => validateUpload({ ...zip, purpose: 'image', filename: 'a.png', contentType: 'image/jpeg' }))).toBe(
      'UNSUPPORTED_MEDIA_TYPE',
    );
    expect(
      code(() => validateUpload({ ...zip, purpose: 'build_file', filename: 'b.json', contentType: 'application/zip' })),
    ).toBe('UNSUPPORTED_MEDIA_TYPE');
  });

  it('enforces the size limits (413), with the larger limit for verified creators', () => {
    expect(code(() => validateUpload({ ...zip, size: FILE_CHECKS.maxModBytes + 1 }))).toBe('PAYLOAD_TOO_LARGE');
    expect(validateUpload({ ...zip, size: FILE_CHECKS.maxModBytes + 1, verifiedCreator: true }).maxBytes).toBe(
      FILE_CHECKS.maxModBytesVerified,
    );
    expect(
      code(() =>
        validateUpload({ ...zip, purpose: 'avatar', filename: 'a.png', contentType: 'image/png', size: 5 * MB + 1 }),
      ),
    ).toBe('PAYLOAD_TOO_LARGE');
    expect(code(() => validateUpload({ ...zip, size: 0 }))).toBe('VALIDATION_FAILED');
  });

  it('switches to multipart above 100 MB with 16 MB parts', () => {
    const big = validateUpload({ ...zip, size: 150 * MB, verifiedCreator: true });
    expect(big.multipart).toEqual({ partBytes: 16 * MB, parts: 10 });
    expect(partSize(150 * MB, 16 * MB, 1)).toBe(16 * MB);
    expect(partSize(150 * MB, 16 * MB, 10)).toBe(6 * MB);
    expect(partSize(150 * MB, 16 * MB, 11)).toBe(0);
  });

  it('helpers', () => {
    expect(extensionOf('a.b.ZIP')).toBe('zip');
    expect(extensionOf('.zip')).toBe('');
    expect(baseContentType('Application/JSON; charset=utf-8')).toBe('application/json');
    expect(mediaPurposeOf('image')).toBe('mod_image');
    expect(mediaPurposeOf('avatar')).toBe('avatar');
    expect(mediaPurposeOf('mod_file')).toBeNull();
  });
});
