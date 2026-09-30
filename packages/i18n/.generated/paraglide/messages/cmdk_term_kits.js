/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Term_KitsInputs */

const en_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const es_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const de_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const fr_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const it_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const nl_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const pl_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zestawy`)
};

const pt_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits`)
};

const ru_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наборы`)
};

const sv_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit`)
};

const tr_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler`)
};

const zh_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装`)
};

const ja_cmdk_term_kits = /** @type {(inputs: Cmdk_Term_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キット`)
};

/**
* | output |
* | --- |
* | "Kits" |
*
* @param {Cmdk_Term_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_term_kits = /** @type {((inputs?: Cmdk_Term_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Term_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_term_kits(inputs)
	if (locale === "de") return de_cmdk_term_kits(inputs)
	if (locale === "fr") return fr_cmdk_term_kits(inputs)
	if (locale === "it") return it_cmdk_term_kits(inputs)
	if (locale === "nl") return nl_cmdk_term_kits(inputs)
	if (locale === "pl") return pl_cmdk_term_kits(inputs)
	if (locale === "pt") return pt_cmdk_term_kits(inputs)
	if (locale === "ru") return ru_cmdk_term_kits(inputs)
	if (locale === "sv") return sv_cmdk_term_kits(inputs)
	if (locale === "tr") return tr_cmdk_term_kits(inputs)
	if (locale === "zh") return zh_cmdk_term_kits(inputs)
	if (locale === "ja") return ja_cmdk_term_kits(inputs)
	return en_cmdk_term_kits(inputs)
});
