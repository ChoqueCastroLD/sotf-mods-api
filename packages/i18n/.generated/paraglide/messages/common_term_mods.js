/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_ModsInputs */

const en_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_common_term_mods = /** @type {(inputs: Common_Term_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Common_Term_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_mods = /** @type {((inputs?: Common_Term_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_mods(inputs)
	if (locale === "de") return de_common_term_mods(inputs)
	if (locale === "fr") return fr_common_term_mods(inputs)
	if (locale === "it") return it_common_term_mods(inputs)
	if (locale === "nl") return nl_common_term_mods(inputs)
	if (locale === "pl") return pl_common_term_mods(inputs)
	if (locale === "pt") return pt_common_term_mods(inputs)
	if (locale === "ru") return ru_common_term_mods(inputs)
	if (locale === "sv") return sv_common_term_mods(inputs)
	if (locale === "tr") return tr_common_term_mods(inputs)
	if (locale === "zh") return zh_common_term_mods(inputs)
	if (locale === "ja") return ja_common_term_mods(inputs)
	return en_common_term_mods(inputs)
});
