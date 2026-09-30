/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Row_MultiplayerInputs */

const en_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const nl_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pt_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人模式`)
};

const ja_explore_compare_row_multiplayer = /** @type {(inputs: Explore_Compare_Row_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Explore_Compare_Row_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_row_multiplayer = /** @type {((inputs?: Explore_Compare_Row_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_row_multiplayer(inputs)
	if (locale === "de") return de_explore_compare_row_multiplayer(inputs)
	if (locale === "fr") return fr_explore_compare_row_multiplayer(inputs)
	if (locale === "it") return it_explore_compare_row_multiplayer(inputs)
	if (locale === "nl") return nl_explore_compare_row_multiplayer(inputs)
	if (locale === "pl") return pl_explore_compare_row_multiplayer(inputs)
	if (locale === "pt") return pt_explore_compare_row_multiplayer(inputs)
	if (locale === "ru") return ru_explore_compare_row_multiplayer(inputs)
	if (locale === "sv") return sv_explore_compare_row_multiplayer(inputs)
	if (locale === "tr") return tr_explore_compare_row_multiplayer(inputs)
	if (locale === "zh") return zh_explore_compare_row_multiplayer(inputs)
	if (locale === "ja") return ja_explore_compare_row_multiplayer(inputs)
	return en_explore_compare_row_multiplayer(inputs)
});
