/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Font_MonoInputs */

const en_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Readouts: versions, ids and code.`)
};

const es_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecturas: versiones, identificadores y código.`)
};

const de_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen: Versionen, IDs und Code.`)
};

const fr_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relevés : versions, identifiants et code.`)
};

const it_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letture: versioni, ID e codice.`)
};

const nl_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitlezingen: versies, id’s en code.`)
};

const pl_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odczyty: wersje, identyfikatory i kod.`)
};

const pt_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leituras: versões, IDs e código.`)
};

const ru_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показания: версии, идентификаторы и код.`)
};

const sv_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avläsningar: versioner, id:n och kod.`)
};

const tr_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göstergeler: sürümler, kimlikler ve kod.`)
};

const zh_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读数：版本、ID 与代码。`)
};

const ja_content_brand_font_mono = /** @type {(inputs: Content_Brand_Font_MonoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示用：バージョン、ID、コード。`)
};

/**
* | output |
* | --- |
* | "Readouts: versions, ids and code." |
*
* @param {Content_Brand_Font_MonoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_font_mono = /** @type {((inputs?: Content_Brand_Font_MonoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Font_MonoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_font_mono(inputs)
	if (locale === "de") return de_content_brand_font_mono(inputs)
	if (locale === "fr") return fr_content_brand_font_mono(inputs)
	if (locale === "it") return it_content_brand_font_mono(inputs)
	if (locale === "nl") return nl_content_brand_font_mono(inputs)
	if (locale === "pl") return pl_content_brand_font_mono(inputs)
	if (locale === "pt") return pt_content_brand_font_mono(inputs)
	if (locale === "ru") return ru_content_brand_font_mono(inputs)
	if (locale === "sv") return sv_content_brand_font_mono(inputs)
	if (locale === "tr") return tr_content_brand_font_mono(inputs)
	if (locale === "zh") return zh_content_brand_font_mono(inputs)
	if (locale === "ja") return ja_content_brand_font_mono(inputs)
	return en_content_brand_font_mono(inputs)
});
