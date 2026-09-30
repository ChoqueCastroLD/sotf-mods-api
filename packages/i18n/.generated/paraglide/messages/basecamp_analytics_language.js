/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_LanguageInputs */

const en_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const es_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const de_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache`)
};

const fr_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue`)
};

const it_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua`)
};

const nl_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal`)
};

const pl_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język`)
};

const pt_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma`)
};

const ru_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык`)
};

const sv_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Språk`)
};

const tr_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dil`)
};

const zh_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语言`)
};

const ja_basecamp_analytics_language = /** @type {(inputs: Basecamp_Analytics_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Basecamp_Analytics_LanguageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_language = /** @type {((inputs?: Basecamp_Analytics_LanguageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_LanguageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_language(inputs)
	if (locale === "de") return de_basecamp_analytics_language(inputs)
	if (locale === "fr") return fr_basecamp_analytics_language(inputs)
	if (locale === "it") return it_basecamp_analytics_language(inputs)
	if (locale === "nl") return nl_basecamp_analytics_language(inputs)
	if (locale === "pl") return pl_basecamp_analytics_language(inputs)
	if (locale === "pt") return pt_basecamp_analytics_language(inputs)
	if (locale === "ru") return ru_basecamp_analytics_language(inputs)
	if (locale === "sv") return sv_basecamp_analytics_language(inputs)
	if (locale === "tr") return tr_basecamp_analytics_language(inputs)
	if (locale === "zh") return zh_basecamp_analytics_language(inputs)
	if (locale === "ja") return ja_basecamp_analytics_language(inputs)
	return en_basecamp_analytics_language(inputs)
});
