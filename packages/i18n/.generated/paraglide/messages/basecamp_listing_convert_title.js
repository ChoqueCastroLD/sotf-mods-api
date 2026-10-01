/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Convert_TitleInputs */

const en_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convert this description to Markdown?`)
};

const es_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Convertir esta descripción a Markdown?`)
};

const de_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Beschreibung in Markdown umwandeln?`)
};

const fr_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convertir cette description en Markdown ?`)
};

const it_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Convertire questa descrizione in Markdown?`)
};

const nl_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze beschrijving omzetten naar Markdown?`)
};

const pl_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przekonwertować ten opis na Markdown?`)
};

const pt_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Converter esta descrição para Markdown?`)
};

const ru_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Преобразовать это описание в Markdown?`)
};

const sv_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konvertera den här beskrivningen till Markdown?`)
};

const tr_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu açıklama Markdown'a dönüştürülsün mü?`)
};

const zh_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将此描述转换为 Markdown？`)
};

const ja_basecamp_listing_convert_title = /** @type {(inputs: Basecamp_Listing_Convert_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この説明をMarkdownに変換しますか？`)
};

/**
* | output |
* | --- |
* | "Convert this description to Markdown?" |
*
* @param {Basecamp_Listing_Convert_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_convert_title = /** @type {((inputs?: Basecamp_Listing_Convert_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Convert_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_convert_title(inputs)
	if (locale === "de") return de_basecamp_listing_convert_title(inputs)
	if (locale === "fr") return fr_basecamp_listing_convert_title(inputs)
	if (locale === "it") return it_basecamp_listing_convert_title(inputs)
	if (locale === "nl") return nl_basecamp_listing_convert_title(inputs)
	if (locale === "pl") return pl_basecamp_listing_convert_title(inputs)
	if (locale === "pt") return pt_basecamp_listing_convert_title(inputs)
	if (locale === "ru") return ru_basecamp_listing_convert_title(inputs)
	if (locale === "sv") return sv_basecamp_listing_convert_title(inputs)
	if (locale === "tr") return tr_basecamp_listing_convert_title(inputs)
	if (locale === "zh") return zh_basecamp_listing_convert_title(inputs)
	if (locale === "ja") return ja_basecamp_listing_convert_title(inputs)
	return en_basecamp_listing_convert_title(inputs)
});
