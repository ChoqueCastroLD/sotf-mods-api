/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_ShortInputs */

const en_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short description`)
};

const es_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción corta`)
};

const de_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurzbeschreibung`)
};

const fr_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description courte`)
};

const it_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione breve`)
};

const nl_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korte beschrijving`)
};

const pl_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótki opis`)
};

const pt_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição curta`)
};

const ru_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Краткое описание`)
};

const sv_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kort beskrivning`)
};

const tr_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa açıklama`)
};

const zh_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简短描述`)
};

const ja_basecamp_listing_short = /** @type {(inputs: Basecamp_Listing_ShortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短い説明`)
};

/**
* | output |
* | --- |
* | "Short description" |
*
* @param {Basecamp_Listing_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_short = /** @type {((inputs?: Basecamp_Listing_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_short(inputs)
	if (locale === "de") return de_basecamp_listing_short(inputs)
	if (locale === "fr") return fr_basecamp_listing_short(inputs)
	if (locale === "it") return it_basecamp_listing_short(inputs)
	if (locale === "nl") return nl_basecamp_listing_short(inputs)
	if (locale === "pl") return pl_basecamp_listing_short(inputs)
	if (locale === "pt") return pt_basecamp_listing_short(inputs)
	if (locale === "ru") return ru_basecamp_listing_short(inputs)
	if (locale === "sv") return sv_basecamp_listing_short(inputs)
	if (locale === "tr") return tr_basecamp_listing_short(inputs)
	if (locale === "zh") return zh_basecamp_listing_short(inputs)
	if (locale === "ja") return ja_basecamp_listing_short(inputs)
	return en_basecamp_listing_short(inputs)
});
