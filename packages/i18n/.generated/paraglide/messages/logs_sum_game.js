/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_GameInputs */

const en_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const es_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego`)
};

const de_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel`)
};

const fr_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu`)
};

const it_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco`)
};

const nl_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const pl_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra`)
};

const pt_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo`)
};

const ru_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра`)
};

const sv_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const tr_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun`)
};

const zh_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏`)
};

const ja_logs_sum_game = /** @type {(inputs: Logs_Sum_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム`)
};

/**
* | output |
* | --- |
* | "Game" |
*
* @param {Logs_Sum_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_game = /** @type {((inputs?: Logs_Sum_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_game(inputs)
	if (locale === "de") return de_logs_sum_game(inputs)
	if (locale === "fr") return fr_logs_sum_game(inputs)
	if (locale === "it") return it_logs_sum_game(inputs)
	if (locale === "nl") return nl_logs_sum_game(inputs)
	if (locale === "pl") return pl_logs_sum_game(inputs)
	if (locale === "pt") return pt_logs_sum_game(inputs)
	if (locale === "ru") return ru_logs_sum_game(inputs)
	if (locale === "sv") return sv_logs_sum_game(inputs)
	if (locale === "tr") return tr_logs_sum_game(inputs)
	if (locale === "zh") return zh_logs_sum_game(inputs)
	if (locale === "ja") return ja_logs_sum_game(inputs)
	return en_logs_sum_game(inputs)
});
