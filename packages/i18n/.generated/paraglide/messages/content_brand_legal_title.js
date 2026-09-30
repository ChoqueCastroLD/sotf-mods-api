/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Legal_TitleInputs */

const en_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trademarks`)
};

const es_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcas`)
};

const de_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marken`)
};

const fr_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marques`)
};

const it_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marchi`)
};

const nl_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merken`)
};

const pl_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znaki towarowe`)
};

const pt_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcas`)
};

const ru_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Товарные знаки`)
};

const sv_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varumärken`)
};

const tr_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ticari markalar`)
};

const zh_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`商标`)
};

const ja_content_brand_legal_title = /** @type {(inputs: Content_Brand_Legal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`商標`)
};

/**
* | output |
* | --- |
* | "Trademarks" |
*
* @param {Content_Brand_Legal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_legal_title = /** @type {((inputs?: Content_Brand_Legal_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Legal_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_legal_title(inputs)
	if (locale === "de") return de_content_brand_legal_title(inputs)
	if (locale === "fr") return fr_content_brand_legal_title(inputs)
	if (locale === "it") return it_content_brand_legal_title(inputs)
	if (locale === "nl") return nl_content_brand_legal_title(inputs)
	if (locale === "pl") return pl_content_brand_legal_title(inputs)
	if (locale === "pt") return pt_content_brand_legal_title(inputs)
	if (locale === "ru") return ru_content_brand_legal_title(inputs)
	if (locale === "sv") return sv_content_brand_legal_title(inputs)
	if (locale === "tr") return tr_content_brand_legal_title(inputs)
	if (locale === "zh") return zh_content_brand_legal_title(inputs)
	if (locale === "ja") return ja_content_brand_legal_title(inputs)
	return en_content_brand_legal_title(inputs)
});
