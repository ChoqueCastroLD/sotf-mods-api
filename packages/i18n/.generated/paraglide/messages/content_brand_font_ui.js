/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Font_UiInputs */

const en_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface and reading text.`)
};

const es_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfaz y texto de lectura.`)
};

const de_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oberfläche und Lesetext.`)
};

const fr_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface et texte de lecture.`)
};

const it_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfaccia e testo di lettura.`)
};

const nl_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface en leestekst.`)
};

const pl_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interfejs i tekst do czytania.`)
};

const pt_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interface e texto de leitura.`)
};

const ru_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Интерфейс и основной текст.`)
};

const sv_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gränssnitt och brödtext.`)
};

const tr_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arayüz ve okuma metni.`)
};

const zh_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`界面与正文。`)
};

const ja_content_brand_font_ui = /** @type {(inputs: Content_Brand_Font_UiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インターフェースと本文。`)
};

/**
* | output |
* | --- |
* | "Interface and reading text." |
*
* @param {Content_Brand_Font_UiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_font_ui = /** @type {((inputs?: Content_Brand_Font_UiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Font_UiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_font_ui(inputs)
	if (locale === "de") return de_content_brand_font_ui(inputs)
	if (locale === "fr") return fr_content_brand_font_ui(inputs)
	if (locale === "it") return it_content_brand_font_ui(inputs)
	if (locale === "nl") return nl_content_brand_font_ui(inputs)
	if (locale === "pl") return pl_content_brand_font_ui(inputs)
	if (locale === "pt") return pt_content_brand_font_ui(inputs)
	if (locale === "ru") return ru_content_brand_font_ui(inputs)
	if (locale === "sv") return sv_content_brand_font_ui(inputs)
	if (locale === "tr") return tr_content_brand_font_ui(inputs)
	if (locale === "zh") return zh_content_brand_font_ui(inputs)
	if (locale === "ja") return ja_content_brand_font_ui(inputs)
	return en_content_brand_font_ui(inputs)
});
