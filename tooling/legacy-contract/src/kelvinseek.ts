/**
 * KelvinSeek text protocol (research/01 §2.7, PLAN §5.5): `text/plain;charset=utf-8`,
 * `"{command}|{answer}"`, where `command` is empty or one of the ids compiled into the mod. The
 * list is copied literally from `sotf-mods-api/src/api/kelvinseek/prompt.ts` (the commented-out
 * `build.perimeter_wall` is not part of it).
 */
export const KELVINSEEK_COMMANDS = [
  'follow_me',
  'get.berries.fill_holder',
  'get.berries.drop_here',
  'get.berries.give_to_me',
  'get.berries.follow_me',
  'get.berries.fill_sled',
  'get.fish.fill_holder',
  'get.fish.drop_here',
  'get.fish.give_to_me',
  'get.fish.follow_me',
  'get.fish.fill_sled',
  'get.sticks.fill_holder',
  'get.sticks.drop_here',
  'get.sticks.give_to_me',
  'get.sticks.follow_me',
  'get.sticks.fill_sled',
  'get.rocks.fill_holder',
  'get.rocks.drop_here',
  'get.rocks.give_to_me',
  'get.rocks.follow_me',
  'get.rocks.fill_sled',
  'get.stones.fill_holder',
  'get.stones.drop_here',
  'get.stones.give_to_me',
  'get.stones.follow_me',
  'get.stones.fill_sled',
  'get.arrows.fill_holder',
  'get.arrows.drop_here',
  'get.arrows.give_to_me',
  'get.arrows.follow_me',
  'get.arrows.fill_sled',
  'get.radio.fill_holder',
  'get.radio.drop_here',
  'get.radio.give_to_me',
  'get.radio.follow_me',
  'get.radio.fill_sled',
  'get.logs.fill_holder',
  'get.logs.drop_here',
  'get.logs.give_to_me',
  'get.logs.follow_me',
  'get.logs.fill_sled',
  'build.fire',
  'build.shelter',
  'clear_shelter',
  'finish_structure',
  'reset_traps',
  'fuel_fire',
  'stay.here',
  'stay.shelter',
  'stay.hidden',
  'take_a_break',
  'clear.5_meters',
  'clear.10_meters',
  'clear.20_meters',
  'give_items',
] as const;

export type KelvinSeekCommand = (typeof KELVINSEEK_COMMANDS)[number];

const COMMANDS: ReadonlySet<string> = new Set(KELVINSEEK_COMMANDS);

export type KelvinSeekParse =
  | { ok: true; command: KelvinSeekCommand | ''; answer: string }
  | { ok: false; reason: string };

/**
 * Parses a reply the way the mod does (`split('|')`): exactly one separator, a known (or empty)
 * command and a non-empty answer on a single line.
 */
export function parseKelvinSeekReply(text: string): KelvinSeekParse {
  const parts = text.split('|');
  if (parts.length !== 2) return { ok: false, reason: `expected exactly one "|" separator, found ${parts.length - 1}` };
  const [command = '', answer = ''] = parts;
  if (command !== '' && !COMMANDS.has(command))
    return { ok: false, reason: `unknown command ${JSON.stringify(command)}` };
  if (answer.trim() === '') return { ok: false, reason: 'empty answer' };
  if (/[\r\n]/.test(text)) return { ok: false, reason: 'the reply must be a single line' };
  return { ok: true, command: command as KelvinSeekCommand | '', answer };
}
