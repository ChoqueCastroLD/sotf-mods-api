import { describe, expect, it } from 'vitest';
import type { KelvinModelRequest } from '../kelvinseek/model.ts';
import { prepareDescription, translateDescription, translateListing } from './pipeline.ts';

const DESCRIPTION = [
  '# Better Bunkers 2.0',
  '',
  'Adds **new** bunkers. See [the docs](https://example.com/docs) and `bunker.open` for details.',
  '',
  '```ini',
  'Depth = 12',
  '```',
  '',
  'Visit https://sotf-mods.com/mods/1 today.',
].join('\n');

const settings = { model: 'm', timeoutMs: 1000, from: 'en' };
const answer = (text: string) => ({ text, id: 'x', tokensIn: 1, tokensOut: 1 });

/** Fake model: swaps two words in the fragment and keeps every token. */
const swapModel = async (request: KelvinModelRequest) => {
  const body = /<text>\n([\s\S]*)\n<\/text>/.exec(request.user)?.[1] ?? '';
  return answer(body.replace('Adds', 'Anade').replace('today', 'hoy'));
};

describe('translateDescription', () => {
  it('translates the prose and restores code, links, URLs and the mod name untouched', async () => {
    const prepared = prepareDescription(DESCRIPTION, ['Better Bunkers 2.0']);
    const out = await translateDescription(swapModel, settings, prepared, 'es');
    expect(out).toBe(DESCRIPTION.replace('Adds', 'Anade').replace('today', 'hoy'));
  });

  it('retries once when the model drops a placeholder, then gives up', async () => {
    const prepared = prepareDescription(DESCRIPTION, []);
    let calls = 0;
    const lossy = async () => {
      calls++;
      return answer('Anade bunkers nuevos.');
    };
    await expect(translateDescription(lossy, settings, prepared, 'de')).rejects.toThrow(/failed validation/);
    expect(calls).toBe(2);
  });

  it('rethrows fatal errors without retrying', async () => {
    const prepared = prepareDescription(DESCRIPTION, []);
    let calls = 0;
    const boom = async (): Promise<never> => {
      calls++;
      throw new Error('budget');
    };
    await expect(translateDescription(boom, { ...settings, isFatal: () => true }, prepared, 'de')).rejects.toThrow(
      'budget',
    );
    expect(calls).toBe(1);
  });
});

describe('translateListing', () => {
  it('parses one JSON answer for all locales', async () => {
    const model = async () => answer('{"es":{"name":"Búnkeres","shortDescription":"Hola."},"de":{"name":"Bunker"}}');
    const out = await translateListing(model, settings, {
      texts: { name: 'Bunkers', shortDescription: 'Hello.' },
      locales: ['es', 'de'],
    });
    expect(out.get('es')).toEqual({ name: 'Búnkeres', shortDescription: 'Hola.' });
    expect(out.get('de')).toEqual({ name: 'Bunker' });
  });

  it('returns an empty map when the answer is unusable twice', async () => {
    let calls = 0;
    const model = async () => {
      calls++;
      return answer('not json');
    };
    const out = await translateListing(model, settings, { texts: { name: 'X' }, locales: ['es'] });
    expect(out.size).toBe(0);
    expect(calls).toBe(2);
  });
});
