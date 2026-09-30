/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Type_TitleInputs */

const en_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typefaces`)
};

const es_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipografías`)
};

const de_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schriften`)
};

const fr_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polices`)
};

const it_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caratteri`)
};

const nl_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettertypen`)
};

const pl_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kroje pisma`)
};

const pt_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fontes`)
};

const ru_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шрифты`)
};

const sv_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typsnitt`)
};

const tr_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazı tipleri`)
};

const zh_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字体`)
};

const ja_content_brand_type_title = /** @type {(inputs: Content_Brand_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`書体`)
};

/**
* | output |
* | --- |
* | "Typefaces" |
*
* @param {Content_Brand_Type_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_type_title = /** @type {((inputs?: Content_Brand_Type_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Type_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_type_title(inputs)
	if (locale === "de") return de_content_brand_type_title(inputs)
	if (locale === "fr") return fr_content_brand_type_title(inputs)
	if (locale === "it") return it_content_brand_type_title(inputs)
	if (locale === "nl") return nl_content_brand_type_title(inputs)
	if (locale === "pl") return pl_content_brand_type_title(inputs)
	if (locale === "pt") return pt_content_brand_type_title(inputs)
	if (locale === "ru") return ru_content_brand_type_title(inputs)
	if (locale === "sv") return sv_content_brand_type_title(inputs)
	if (locale === "tr") return tr_content_brand_type_title(inputs)
	if (locale === "zh") return zh_content_brand_type_title(inputs)
	if (locale === "ja") return ja_content_brand_type_title(inputs)
	return en_content_brand_type_title(inputs)
});
