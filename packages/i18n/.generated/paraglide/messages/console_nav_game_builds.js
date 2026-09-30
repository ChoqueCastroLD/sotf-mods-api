/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_Game_BuildsInputs */

const en_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game builds`)
};

const es_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones del juego`)
};

const de_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spielversionen`)
};

const fr_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions du jeu`)
};

const it_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni del gioco`)
};

const nl_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gameversies`)
};

const pl_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje gry`)
};

const pt_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões do jogo`)
};

const ru_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии игры`)
};

const sv_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversioner`)
};

const tr_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümleri`)
};

const zh_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_console_nav_game_builds = /** @type {(inputs: Console_Nav_Game_BuildsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのバージョン`)
};

/**
* | output |
* | --- |
* | "Game builds" |
*
* @param {Console_Nav_Game_BuildsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_game_builds = /** @type {((inputs?: Console_Nav_Game_BuildsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_Game_BuildsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_game_builds(inputs)
	if (locale === "de") return de_console_nav_game_builds(inputs)
	if (locale === "fr") return fr_console_nav_game_builds(inputs)
	if (locale === "it") return it_console_nav_game_builds(inputs)
	if (locale === "nl") return nl_console_nav_game_builds(inputs)
	if (locale === "pl") return pl_console_nav_game_builds(inputs)
	if (locale === "pt") return pt_console_nav_game_builds(inputs)
	if (locale === "ru") return ru_console_nav_game_builds(inputs)
	if (locale === "sv") return sv_console_nav_game_builds(inputs)
	if (locale === "tr") return tr_console_nav_game_builds(inputs)
	if (locale === "zh") return zh_console_nav_game_builds(inputs)
	if (locale === "ja") return ja_console_nav_game_builds(inputs)
	return en_console_nav_game_builds(inputs)
});
