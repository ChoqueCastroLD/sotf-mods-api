/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_LanguageInputs */

const en_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language of the listing`)
};

const es_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma de la ficha`)
};

const de_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprache der Seite`)
};

const fr_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langue de la fiche`)
};

const it_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lingua della scheda`)
};

const nl_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taal van de pagina`)
};

const pl_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Język strony`)
};

const pt_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Idioma da página`)
};

const ru_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Язык страницы`)
};

const sv_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidans språk`)
};

const tr_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın dili`)
};

const zh_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面语言`)
};

const ja_basecamp_listing_language = /** @type {(inputs: Basecamp_Listing_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページの言語`)
};

/**
* | output |
* | --- |
* | "Language of the listing" |
*
* @param {Basecamp_Listing_LanguageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_language = /** @type {((inputs?: Basecamp_Listing_LanguageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_LanguageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_language(inputs)
	if (locale === "de") return de_basecamp_listing_language(inputs)
	if (locale === "fr") return fr_basecamp_listing_language(inputs)
	if (locale === "it") return it_basecamp_listing_language(inputs)
	if (locale === "nl") return nl_basecamp_listing_language(inputs)
	if (locale === "pl") return pl_basecamp_listing_language(inputs)
	if (locale === "pt") return pt_basecamp_listing_language(inputs)
	if (locale === "ru") return ru_basecamp_listing_language(inputs)
	if (locale === "sv") return sv_basecamp_listing_language(inputs)
	if (locale === "tr") return tr_basecamp_listing_language(inputs)
	if (locale === "zh") return zh_basecamp_listing_language(inputs)
	if (locale === "ja") return ja_basecamp_listing_language(inputs)
	return en_basecamp_listing_language(inputs)
});
