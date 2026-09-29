/**
 * KelvinSeek text handling against the legacy libraries: expected values produced by the legacy
 * `sanitizeInput` (sanitize-html 2), `dice-similarity-coeff` 1.1.1 and `fastest-levenshtein` 1.0.16
 * (20 000 random inputs matched during development; these are the representative cases).
 */
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { KELVINSEEK_COMMANDS, kelvinPrompt } from './prompt.ts';
import {
  closestCommand,
  diceSimilarity,
  fallbackReply,
  levenshtein,
  parseModelAnswer,
  previousConversations,
  sanitizeInput,
  simSort,
} from './text.ts';

const SANITIZE: ReadonlyArray<readonly [string, string]> = [
  ['a & b', 'a &amp; b'],
  ['a &amp; b', 'a &amp; b'],
  ['"q" \'s\'', '"q" \'s\''],
  ['x: y', 'x: y'],
  ['  <b>hi</b> ', 'bhi/b'],
  ['ñandú 漢字 é', 'and 漢字'],
  ['&lt;3', '&lt;3'],
  ['a\nb', 'a\nb'],
  ['&#39;', "'"],
  ['&copy; &nbsp;x', '\u00a9 \u00a0x'],
  ['a&b;c', 'a&amp;b;c'],
  ['&#x41;', 'A'],
  ['&', '&amp;'],
  ['Tom & Jerry "x"', 'Tom &amp; Jerry "x"'],
  ['&quot;', '"'],
  ['&lt3', '&lt;3'],
  ['&amp b', '&amp; b'],
  ['please get logs and follow me', 'please get logs and follow me'],
  ['Kelvin: build a fire!!', 'Kelvin: build a fire!!'],
  ['¿Qué tal? ¡Hola!', '¿Qu tal? ¡Hola!'],
  ['&#128512;', '😀'],
  ['&#0;', '�'],
  ['&#150;', '–'],
  ['&foo;', '&amp;foo;'],
  ['50% off $5 #1 (a+b); c/d @me_x-y', '50% off $5 #1 (a+b); c/d @me_x-y'],
  ['A:B:C', 'A:B:C'],
  ['&AMP;', '&amp;'],
  ['&Amp;', '&amp;Amp;'],
];

const NOTE = '(Chat GPT API Error. Try a different chat gpt api key)';
const FALLBACK: ReadonlyArray<readonly [string, string]> = [
  ['please get logs and follow me', 'get.logs.follow_me|I will get logs and follow you right away'],
  ['how are you today?', 'follow_me|I will follow you right away'],
  ['build a fire', 'build.fire|I will build fire right away'],
  ['get fish', 'get.fish.drop_here|I will get fish and drop here right away'],
  ['stay hidden here', 'stay.hidden|I will stay hidden right away'],
  ['clear 10 meters', 'clear.10_meters|I will clear 10 meters right away'],
  ['give me items', 'give_items|I will give items right away'],
  ['fuel the fire please', 'fuel_fire|I will fuel fire right away'],
  ['take a break', 'take_a_break|I will take a break right away'],
  ['get me some stones and fill the sled', 'get.stones.fill_sled|I will get stones and fill sled right away'],
  ['reset traps', 'reset_traps|I will reset traps right away'],
  ['finish structure', 'finish_structure|I will finish structure right away'],
  ['', 'follow_me|I will follow you right away'],
  ['sticks drop here', 'get.sticks.drop_here|I will get sticks and drop here right away'],
  ['radio', 'get.radio.drop_here|I will get radio and drop here right away'],
];

const CLOSEST: ReadonlyArray<readonly [string, string]> = [
  ['get.log.follow', 'get.logs.follow_me'],
  ['build fire', 'build.fire'],
  ['none', 'follow_me'],
  ['stay_hidden', 'stay.hidden'],
  ['GET.LOGS.DROP_HERE', 'get.fish.drop_here'],
  ['get.fish.take_a_break', 'get.fish.drop_here'],
  ['x', 'follow_me'],
  ['clear.15_meters', 'clear.5_meters'],
];

describe('the literal legacy contract', () => {
  it('keeps the 55 commands of the mod in order', () => {
    expect(KELVINSEEK_COMMANDS).toHaveLength(55);
    expect(KELVINSEEK_COMMANDS[0]).toBe('follow_me');
    expect(KELVINSEEK_COMMANDS.at(-1)).toBe('give_items');
    expect(KELVINSEEK_COMMANDS).not.toContain('build.perimeter_wall');
  });

  it('builds the legacy prompt byte for byte (sha256 of the legacy template)', () => {
    const prompt = kelvinPrompt('CTX', 'PREV');
    expect(prompt).toHaveLength(3925);
    expect(createHash('sha256').update(prompt).digest('hex')).toBe(
      '185222c907d691668b3f5d825777b059702bcfac8887e5a0957ef318b5a518c8',
    );
    expect(prompt.startsWith('You are Kelvin.\n    Character Name: Kelvin')).toBe(true);
    expect(prompt.endsWith('previousConversations: PREV')).toBe(true);
  });
});

describe('sanitizeInput', () => {
  it.each(SANITIZE)('%j → %j', (input, expected) => {
    expect(sanitizeInput(input)).toBe(expected);
  });

  it('returns "" for empty input', () => {
    expect(sanitizeInput('')).toBe('');
    expect(sanitizeInput(undefined)).toBe('');
  });
});

describe('similarity', () => {
  it('computes the bigram Dice coefficient', () => {
    expect(diceSimilarity('night', 'nacht')).toBeCloseTo(0.25);
    expect(diceSimilarity('a', 'a')).toBe(1);
    expect(diceSimilarity('a', 'b')).toBe(0);
    expect(diceSimilarity('', 'follow_me')).toBe(0);
  });

  it('sorts a copy (the shared command list is never reordered)', () => {
    const before = [...KELVINSEEK_COMMANDS];
    expect(simSort('fire', KELVINSEEK_COMMANDS)[0]).toBe('fuel_fire');
    expect([...KELVINSEEK_COMMANDS]).toEqual(before);
  });

  it('computes Levenshtein distances', () => {
    expect(levenshtein('kitten', 'sitting')).toBe(3);
    expect(levenshtein('', 'abc')).toBe(3);
    expect(levenshtein('same', 'same')).toBe(0);
  });

  it.each(CLOSEST)('closest(%j) → %j', (value, expected) => {
    expect(closestCommand(value)).toBe(expected);
  });
});

describe('fallbackReply', () => {
  it.each(FALLBACK)('%j → %j', (text, expected) => {
    expect(fallbackReply(sanitizeInput(text), 'error')).toBe(`${expected} ${NOTE}`);
  });

  it('uses the legacy quota message when the budget is spent', () => {
    expect(fallbackReply('build a fire', 'quota')).toBe(
      'build.fire|I will build fire right away (Chat GPT API Error. You have exceeded your current quota.)',
    );
  });
});

describe('parseModelAnswer', () => {
  it('snaps the command to the closest one and sanitises the answer', () => {
    expect(parseModelAnswer('get.log.follow_me | I will follow you & bring logs')).toEqual({
      command: 'get.logs.follow_me',
      answer: 'I will follow you &amp; bring logs',
    });
  });

  it('keeps an empty command empty', () => {
    expect(parseModelAnswer('|I am fine')).toEqual({ command: '', answer: 'I am fine' });
  });

  it('uses the whole text when there is no separator', () => {
    expect(parseModelAnswer('  Hello there  ')).toEqual({ command: '', answer: 'Hello there' });
  });

  it('keeps the answer on one line after the last separator', () => {
    expect(parseModelAnswer('build.fire|first|Sure,\nI will build it')).toEqual({
      command: 'build.fire',
      answer: 'Sure, I will build it',
    });
  });

  it('returns null when nothing is left to say', () => {
    expect(parseModelAnswer('build.fire|')).toBeNull();
    expect(parseModelAnswer('   ')).toBeNull();
  });
});

describe('previousConversations', () => {
  it('joins "prompt > message" pairs removing only the first "," and ">" of each side', () => {
    expect(
      previousConversations([
        { prompt: 'hi, there, you', message: '|Hello, friend' },
        { prompt: 'a > b > c', message: 'build.fire|ok' },
      ]),
    ).toBe('hi there, you > |Hello friend,a  b > c > build.fire|ok');
  });
});
