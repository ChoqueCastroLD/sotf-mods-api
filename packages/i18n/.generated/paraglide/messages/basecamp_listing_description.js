/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_DescriptionInputs */

const en_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const ja_basecamp_listing_description = /** @type {(inputs: Basecamp_Listing_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Basecamp_Listing_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_description = /** @type {((inputs?: Basecamp_Listing_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_description(inputs)
	if (locale === "de") return de_basecamp_listing_description(inputs)
	if (locale === "fr") return fr_basecamp_listing_description(inputs)
	if (locale === "it") return it_basecamp_listing_description(inputs)
	if (locale === "nl") return nl_basecamp_listing_description(inputs)
	if (locale === "pl") return pl_basecamp_listing_description(inputs)
	if (locale === "pt") return pt_basecamp_listing_description(inputs)
	if (locale === "ru") return ru_basecamp_listing_description(inputs)
	if (locale === "sv") return sv_basecamp_listing_description(inputs)
	if (locale === "tr") return tr_basecamp_listing_description(inputs)
	if (locale === "zh") return zh_basecamp_listing_description(inputs)
	if (locale === "ja") return ja_basecamp_listing_description(inputs)
	return en_basecamp_listing_description(inputs)
});
