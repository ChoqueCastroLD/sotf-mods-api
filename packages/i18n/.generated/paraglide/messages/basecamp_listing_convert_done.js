/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Convert_DoneInputs */

const en_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description converted to Markdown.`)
};

const es_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción convertida a Markdown.`)
};

const de_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung in Markdown umgewandelt.`)
};

const fr_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description convertie en Markdown.`)
};

const it_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione convertita in Markdown.`)
};

const nl_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving omgezet naar Markdown.`)
};

const pl_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis przekonwertowany na Markdown.`)
};

const pt_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição convertida para Markdown.`)
};

const ru_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание преобразовано в Markdown.`)
};

const sv_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivningen har konverterats till Markdown.`)
};

const tr_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama Markdown'a dönüştürüldü.`)
};

const zh_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述已转换为 Markdown。`)
};

const ja_basecamp_listing_convert_done = /** @type {(inputs: Basecamp_Listing_Convert_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明をMarkdownに変換しました。`)
};

/**
* | output |
* | --- |
* | "Description converted to Markdown." |
*
* @param {Basecamp_Listing_Convert_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_convert_done = /** @type {((inputs?: Basecamp_Listing_Convert_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Convert_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_convert_done(inputs)
	if (locale === "de") return de_basecamp_listing_convert_done(inputs)
	if (locale === "fr") return fr_basecamp_listing_convert_done(inputs)
	if (locale === "it") return it_basecamp_listing_convert_done(inputs)
	if (locale === "nl") return nl_basecamp_listing_convert_done(inputs)
	if (locale === "pl") return pl_basecamp_listing_convert_done(inputs)
	if (locale === "pt") return pt_basecamp_listing_convert_done(inputs)
	if (locale === "ru") return ru_basecamp_listing_convert_done(inputs)
	if (locale === "sv") return sv_basecamp_listing_convert_done(inputs)
	if (locale === "tr") return tr_basecamp_listing_convert_done(inputs)
	if (locale === "zh") return zh_basecamp_listing_convert_done(inputs)
	if (locale === "ja") return ja_basecamp_listing_convert_done(inputs)
	return en_basecamp_listing_convert_done(inputs)
});
