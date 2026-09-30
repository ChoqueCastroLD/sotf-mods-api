import { FILE_CHECKS } from '@sotf/contracts/manifest';
import { describe, expect, it } from 'vitest';
import { decodeThumbnail, inspectBlueprint, storedBuildMeta } from './blueprint.ts';

const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
const blueprint = (over: Record<string, unknown> = {}) =>
  Buffer.from(
    JSON.stringify({
      Name: 'MountianHouse',
      Guid: 'e215ede2e4d742398c72aaca62496c10',
      Author: 'Natka',
      Description: 'Cliff house',
      NumberOfElements: 4125,
      Data: JSON.stringify({ Version: '0.0.16', Structures: [1, 2, 3] }),
      Thumbnail: PNG_1PX,
      ...over,
    }),
  );

describe('BuildShare blueprints (T0-24)', () => {
  it('extracts buildMeta and the embedded PNG thumbnail', () => {
    const result = inspectBlueprint(blueprint());
    expect(result.flags).toEqual([]);
    expect(result.buildMeta).toEqual({
      guid: 'e215ede2e4d742398c72aaca62496c10',
      buildshareVersion: '0.0.16',
      elements: 4125,
      structures: 3,
      blueprintAuthor: 'Natka',
      sizeClass: 'L',
    });
    const png = result.summary ? decodeThumbnail(result.summary) : null;
    expect(png?.subarray(1, 4).toString()).toBe('PNG');
    expect(storedBuildMeta(result.buildMeta)).toEqual(result.buildMeta);
  });

  it('omits unknown optional facts in the stored JSON', () => {
    const result = inspectBlueprint(blueprint({ Author: undefined, Data: JSON.stringify({ Version: '0.0.9' }) }));
    expect(result.buildMeta).toMatchObject({ blueprintAuthor: null, structures: null });
    expect(storedBuildMeta(result.buildMeta)).toEqual({
      guid: 'e215ede2e4d742398c72aaca62496c10',
      buildshareVersion: '0.0.9',
      elements: 4125,
      sizeClass: 'L',
    });
    expect(storedBuildMeta(null)).toBeNull();
  });

  it('ignores thumbnails that are not PNG', () => {
    const gif = Buffer.from('GIF89a....').toString('base64');
    const result = inspectBlueprint(blueprint({ Thumbnail: gif }));
    expect(result.summary && decodeThumbnail(result.summary)).toBeNull();
    const none = inspectBlueprint(blueprint({ Thumbnail: undefined }));
    expect(none.summary && decodeThumbnail(none.summary)).toBeNull();
  });

  it('flags invalid blueprints and files over the real 20 MB limit instead of throwing', () => {
    expect(inspectBlueprint(Buffer.from('{broken')).flags.map((f) => f.code)).toEqual(['blueprint_invalid']);
    expect(inspectBlueprint(blueprint({ Guid: undefined })).flags[0]).toMatchObject({
      code: 'blueprint_invalid',
      severity: 'error',
    });
    const big = Buffer.alloc(FILE_CHECKS.maxBuildBytes + 1, 0x20);
    expect(inspectBlueprint(big).flags.map((f) => f.code)).toEqual(['file_too_large']);
  });
});
