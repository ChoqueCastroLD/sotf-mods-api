/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_BackpackInputs */

const en_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backpack`)
};

const es_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mochila`)
};

const de_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rucksack`)
};

const fr_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sac à dos`)
};

const it_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaino`)
};

const nl_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rugzak`)
};

const pl_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plecak`)
};

const pt_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mochila`)
};

const ru_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рюкзак`)
};

const sv_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ryggsäck`)
};

const tr_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt Çantası`)
};

const zh_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`背包`)
};

const ja_common_term_backpack = /** @type {(inputs: Common_Term_BackpackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパック`)
};

/**
* | output |
* | --- |
* | "Backpack" |
*
* @param {Common_Term_BackpackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_backpack = /** @type {((inputs?: Common_Term_BackpackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_BackpackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_backpack(inputs)
	if (locale === "de") return de_common_term_backpack(inputs)
	if (locale === "fr") return fr_common_term_backpack(inputs)
	if (locale === "it") return it_common_term_backpack(inputs)
	if (locale === "nl") return nl_common_term_backpack(inputs)
	if (locale === "pl") return pl_common_term_backpack(inputs)
	if (locale === "pt") return pt_common_term_backpack(inputs)
	if (locale === "ru") return ru_common_term_backpack(inputs)
	if (locale === "sv") return sv_common_term_backpack(inputs)
	if (locale === "tr") return tr_common_term_backpack(inputs)
	if (locale === "zh") return zh_common_term_backpack(inputs)
	if (locale === "ja") return ja_common_term_backpack(inputs)
	return en_common_term_backpack(inputs)
});
