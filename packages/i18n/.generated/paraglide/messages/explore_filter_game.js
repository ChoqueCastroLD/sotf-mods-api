/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_GameInputs */

const en_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const es_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego`)
};

const de_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel`)
};

const fr_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu`)
};

const it_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco`)
};

const nl_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const pl_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra`)
};

const pt_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo`)
};

const ru_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра`)
};

const sv_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const tr_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun`)
};

const zh_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏`)
};

const ja_explore_filter_game = /** @type {(inputs: Explore_Filter_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム`)
};

/**
* | output |
* | --- |
* | "Game" |
*
* @param {Explore_Filter_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_game = /** @type {((inputs?: Explore_Filter_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_game(inputs)
	if (locale === "de") return de_explore_filter_game(inputs)
	if (locale === "fr") return fr_explore_filter_game(inputs)
	if (locale === "it") return it_explore_filter_game(inputs)
	if (locale === "nl") return nl_explore_filter_game(inputs)
	if (locale === "pl") return pl_explore_filter_game(inputs)
	if (locale === "pt") return pt_explore_filter_game(inputs)
	if (locale === "ru") return ru_explore_filter_game(inputs)
	if (locale === "sv") return sv_explore_filter_game(inputs)
	if (locale === "tr") return tr_explore_filter_game(inputs)
	if (locale === "zh") return zh_explore_filter_game(inputs)
	if (locale === "ja") return ja_explore_filter_game(inputs)
	return en_explore_filter_game(inputs)
});
