/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Term_CreatorsInputs */

const en_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creators`)
};

const es_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores`)
};

const de_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const fr_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs`)
};

const it_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori`)
};

const nl_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers`)
};

const pl_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy`)
};

const pt_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores`)
};

const ru_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const sv_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticiler`)
};

const zh_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_cmdk_term_creators = /** @type {(inputs: Cmdk_Term_CreatorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creators" |
*
* @param {Cmdk_Term_CreatorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_term_creators = /** @type {((inputs?: Cmdk_Term_CreatorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Term_CreatorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_term_creators(inputs)
	if (locale === "de") return de_cmdk_term_creators(inputs)
	if (locale === "fr") return fr_cmdk_term_creators(inputs)
	if (locale === "it") return it_cmdk_term_creators(inputs)
	if (locale === "nl") return nl_cmdk_term_creators(inputs)
	if (locale === "pl") return pl_cmdk_term_creators(inputs)
	if (locale === "pt") return pt_cmdk_term_creators(inputs)
	if (locale === "ru") return ru_cmdk_term_creators(inputs)
	if (locale === "sv") return sv_cmdk_term_creators(inputs)
	if (locale === "tr") return tr_cmdk_term_creators(inputs)
	if (locale === "zh") return zh_cmdk_term_creators(inputs)
	if (locale === "ja") return ja_cmdk_term_creators(inputs)
	return en_cmdk_term_creators(inputs)
});
