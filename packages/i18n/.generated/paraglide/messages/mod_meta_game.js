/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Meta_GameInputs */

const en_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const es_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego`)
};

const de_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel`)
};

const fr_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu`)
};

const it_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco`)
};

const nl_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const pl_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra`)
};

const pt_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo`)
};

const ru_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра`)
};

const sv_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const tr_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun`)
};

const zh_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏`)
};

const ja_mod_meta_game = /** @type {(inputs: Mod_Meta_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム`)
};

/**
* | output |
* | --- |
* | "Game" |
*
* @param {Mod_Meta_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_meta_game = /** @type {((inputs?: Mod_Meta_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Meta_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_meta_game(inputs)
	if (locale === "de") return de_mod_meta_game(inputs)
	if (locale === "fr") return fr_mod_meta_game(inputs)
	if (locale === "it") return it_mod_meta_game(inputs)
	if (locale === "nl") return nl_mod_meta_game(inputs)
	if (locale === "pl") return pl_mod_meta_game(inputs)
	if (locale === "pt") return pt_mod_meta_game(inputs)
	if (locale === "ru") return ru_mod_meta_game(inputs)
	if (locale === "sv") return sv_mod_meta_game(inputs)
	if (locale === "tr") return tr_mod_meta_game(inputs)
	if (locale === "zh") return zh_mod_meta_game(inputs)
	if (locale === "ja") return ja_mod_meta_game(inputs)
	return en_mod_meta_game(inputs)
});
