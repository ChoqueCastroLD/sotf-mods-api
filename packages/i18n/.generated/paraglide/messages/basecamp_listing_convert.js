/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_ConvertInputs */

const en_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convert to Markdown`)
};

const es_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convertir a Markdown`)
};

const de_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Markdown umwandeln`)
};

const fr_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convertir en Markdown`)
};

const it_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Converti in Markdown`)
};

const nl_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omzetten naar Markdown`)
};

const pl_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konwertuj na Markdown`)
};

const pt_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Converter para Markdown`)
};

const ru_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Преобразовать в Markdown`)
};

const sv_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konvertera till Markdown`)
};

const tr_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown'a dönüştür`)
};

const zh_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`转换为 Markdown`)
};

const ja_basecamp_listing_convert = /** @type {(inputs: Basecamp_Listing_ConvertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdownに変換`)
};

/**
* | output |
* | --- |
* | "Convert to Markdown" |
*
* @param {Basecamp_Listing_ConvertInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_convert = /** @type {((inputs?: Basecamp_Listing_ConvertInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_ConvertInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_convert(inputs)
	if (locale === "de") return de_basecamp_listing_convert(inputs)
	if (locale === "fr") return fr_basecamp_listing_convert(inputs)
	if (locale === "it") return it_basecamp_listing_convert(inputs)
	if (locale === "nl") return nl_basecamp_listing_convert(inputs)
	if (locale === "pl") return pl_basecamp_listing_convert(inputs)
	if (locale === "pt") return pt_basecamp_listing_convert(inputs)
	if (locale === "ru") return ru_basecamp_listing_convert(inputs)
	if (locale === "sv") return sv_basecamp_listing_convert(inputs)
	if (locale === "tr") return tr_basecamp_listing_convert(inputs)
	if (locale === "zh") return zh_basecamp_listing_convert(inputs)
	if (locale === "ja") return ja_basecamp_listing_convert(inputs)
	return en_basecamp_listing_convert(inputs)
});
