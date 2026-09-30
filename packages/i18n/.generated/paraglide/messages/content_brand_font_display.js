/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Font_DisplayInputs */

const en_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: titles and figures, always in capitals.`)
};

const es_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: títulos y cifras, siempre en mayúsculas.`)
};

const de_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: Titel und Zahlen, immer in Großbuchstaben.`)
};

const fr_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titrage : titres et chiffres, toujours en capitales.`)
};

const it_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: titoli e cifre, sempre in maiuscolo.`)
};

const nl_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: titels en cijfers, altijd in hoofdletters.`)
};

const pl_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: tytuły i liczby, zawsze wielkimi literami.`)
};

const pt_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: títulos e números, sempre em maiúsculas.`)
};

const ru_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Акцидентный: заголовки и цифры, всегда заглавными.`)
};

const sv_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Display: rubriker och siffror, alltid med versaler.`)
};

const tr_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık: başlıklar ve rakamlar, her zaman büyük harf.`)
};

const zh_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题字体：标题与数字，始终使用大写。`)
};

const ja_content_brand_font_display = /** @type {(inputs: Content_Brand_Font_DisplayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`見出し用：タイトルと数字。常に大文字。`)
};

/**
* | output |
* | --- |
* | "Display: titles and figures, always in capitals." |
*
* @param {Content_Brand_Font_DisplayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_font_display = /** @type {((inputs?: Content_Brand_Font_DisplayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Font_DisplayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_font_display(inputs)
	if (locale === "de") return de_content_brand_font_display(inputs)
	if (locale === "fr") return fr_content_brand_font_display(inputs)
	if (locale === "it") return it_content_brand_font_display(inputs)
	if (locale === "nl") return nl_content_brand_font_display(inputs)
	if (locale === "pl") return pl_content_brand_font_display(inputs)
	if (locale === "pt") return pt_content_brand_font_display(inputs)
	if (locale === "ru") return ru_content_brand_font_display(inputs)
	if (locale === "sv") return sv_content_brand_font_display(inputs)
	if (locale === "tr") return tr_content_brand_font_display(inputs)
	if (locale === "zh") return zh_content_brand_font_display(inputs)
	if (locale === "ja") return ja_content_brand_font_display(inputs)
	return en_content_brand_font_display(inputs)
});
