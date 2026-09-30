/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Term_ModsInputs */

const en_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_cmdk_term_mods = /** @type {(inputs: Cmdk_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Cmdk_Term_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_term_mods = /** @type {((inputs?: Cmdk_Term_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Term_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_term_mods(inputs)
	if (locale === "de") return de_cmdk_term_mods(inputs)
	if (locale === "fr") return fr_cmdk_term_mods(inputs)
	if (locale === "it") return it_cmdk_term_mods(inputs)
	if (locale === "nl") return nl_cmdk_term_mods(inputs)
	if (locale === "pl") return pl_cmdk_term_mods(inputs)
	if (locale === "pt") return pt_cmdk_term_mods(inputs)
	if (locale === "ru") return ru_cmdk_term_mods(inputs)
	if (locale === "sv") return sv_cmdk_term_mods(inputs)
	if (locale === "tr") return tr_cmdk_term_mods(inputs)
	if (locale === "zh") return zh_cmdk_term_mods(inputs)
	if (locale === "ja") return ja_cmdk_term_mods(inputs)
	return en_cmdk_term_mods(inputs)
});
