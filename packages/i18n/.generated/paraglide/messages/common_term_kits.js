/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_KitsInputs */

const en_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const es_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const de_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const fr_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const it_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const pl_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy`)
};

const pt_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const ru_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler`)
};

const zh_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装`)
};

const ja_common_term_kits = /** @type {(inputs: Common_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kits" |
*
* @param {Common_Term_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_kits = /** @type {((inputs?: Common_Term_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_kits(inputs)
	if (locale === "de") return de_common_term_kits(inputs)
	if (locale === "fr") return fr_common_term_kits(inputs)
	if (locale === "it") return it_common_term_kits(inputs)
	if (locale === "nl") return nl_common_term_kits(inputs)
	if (locale === "pl") return pl_common_term_kits(inputs)
	if (locale === "pt") return pt_common_term_kits(inputs)
	if (locale === "ru") return ru_common_term_kits(inputs)
	if (locale === "sv") return sv_common_term_kits(inputs)
	if (locale === "tr") return tr_common_term_kits(inputs)
	if (locale === "zh") return zh_common_term_kits(inputs)
	if (locale === "ja") return ja_common_term_kits(inputs)
	return en_common_term_kits(inputs)
});
