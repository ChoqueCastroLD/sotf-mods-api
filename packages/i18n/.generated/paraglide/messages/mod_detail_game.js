/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Detail_GameInputs */

const en_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game version`)
};

const es_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión del juego`)
};

const de_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spielversion`)
};

const fr_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du jeu`)
};

const it_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione del gioco`)
};

const nl_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversie`)
};

const pl_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja gry`)
};

const pt_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do jogo`)
};

const ru_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия игры`)
};

const sv_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversion`)
};

const tr_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü`)
};

const zh_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_mod_detail_game = /** @type {(inputs: Mod_Detail_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームバージョン`)
};

/**
* | output |
* | --- |
* | "Game version" |
*
* @param {Mod_Detail_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_detail_game = /** @type {((inputs?: Mod_Detail_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Detail_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_detail_game(inputs)
	if (locale === "de") return de_mod_detail_game(inputs)
	if (locale === "fr") return fr_mod_detail_game(inputs)
	if (locale === "it") return it_mod_detail_game(inputs)
	if (locale === "nl") return nl_mod_detail_game(inputs)
	if (locale === "pl") return pl_mod_detail_game(inputs)
	if (locale === "pt") return pt_mod_detail_game(inputs)
	if (locale === "ru") return ru_mod_detail_game(inputs)
	if (locale === "sv") return sv_mod_detail_game(inputs)
	if (locale === "tr") return tr_mod_detail_game(inputs)
	if (locale === "zh") return zh_mod_detail_game(inputs)
	if (locale === "ja") return ja_mod_detail_game(inputs)
	return en_mod_detail_game(inputs)
});
