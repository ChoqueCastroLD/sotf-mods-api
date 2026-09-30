/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Content_Brand_Font_LinkInputs */

const en_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Get ${i?.name}`)
};

const es_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obtener ${i?.name}`)
};

const de_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} holen`)
};

const fr_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obtenir ${i?.name}`)
};

const it_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica ${i?.name}`)
};

const nl_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} downloaden`)
};

const pl_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz ${i?.name}`)
};

const pt_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Obter ${i?.name}`)
};

const ru_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачать ${i?.name}`)
};

const sv_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hämta ${i?.name}`)
};

const tr_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} indir`)
};

const zh_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`获取 ${i?.name}`)
};

const ja_content_brand_font_link = /** @type {(inputs: Content_Brand_Font_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を入手`)
};

/**
* | output |
* | --- |
* | "Get {name}" |
*
* @param {Content_Brand_Font_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_font_link = /** @type {((inputs: Content_Brand_Font_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Font_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_font_link(inputs)
	if (locale === "de") return de_content_brand_font_link(inputs)
	if (locale === "fr") return fr_content_brand_font_link(inputs)
	if (locale === "it") return it_content_brand_font_link(inputs)
	if (locale === "nl") return nl_content_brand_font_link(inputs)
	if (locale === "pl") return pl_content_brand_font_link(inputs)
	if (locale === "pt") return pt_content_brand_font_link(inputs)
	if (locale === "ru") return ru_content_brand_font_link(inputs)
	if (locale === "sv") return sv_content_brand_font_link(inputs)
	if (locale === "tr") return tr_content_brand_font_link(inputs)
	if (locale === "zh") return zh_content_brand_font_link(inputs)
	if (locale === "ja") return ja_content_brand_font_link(inputs)
	return en_content_brand_font_link(inputs)
});
