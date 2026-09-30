/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Dont_TitleInputs */

const en_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don’t`)
};

const es_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evita esto`)
};

const de_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitte nicht`)
};

const fr_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À éviter`)
};

const it_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da evitare`)
};

const nl_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet`)
};

const pl_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unikaj`)
};

const pt_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evite`)
};

const ru_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нельзя`)
};

const sv_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undvik`)
};

const tr_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapma`)
};

const zh_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`避免`)
};

const ja_content_brand_dont_title = /** @type {(inputs: Content_Brand_Dont_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁止`)
};

/**
* | output |
* | --- |
* | "Don’t" |
*
* @param {Content_Brand_Dont_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_dont_title = /** @type {((inputs?: Content_Brand_Dont_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_dont_title(inputs)
	if (locale === "de") return de_content_brand_dont_title(inputs)
	if (locale === "fr") return fr_content_brand_dont_title(inputs)
	if (locale === "it") return it_content_brand_dont_title(inputs)
	if (locale === "nl") return nl_content_brand_dont_title(inputs)
	if (locale === "pl") return pl_content_brand_dont_title(inputs)
	if (locale === "pt") return pt_content_brand_dont_title(inputs)
	if (locale === "ru") return ru_content_brand_dont_title(inputs)
	if (locale === "sv") return sv_content_brand_dont_title(inputs)
	if (locale === "tr") return tr_content_brand_dont_title(inputs)
	if (locale === "zh") return zh_content_brand_dont_title(inputs)
	if (locale === "ja") return ja_content_brand_dont_title(inputs)
	return en_content_brand_dont_title(inputs)
});
