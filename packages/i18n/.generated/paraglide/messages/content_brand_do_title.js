/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Do_TitleInputs */

const en_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do`)
};

const es_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz esto`)
};

const de_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitte`)
};

const fr_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À faire`)
};

const it_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da fare`)
};

const nl_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wel`)
};

const pl_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rób tak`)
};

const pt_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faça`)
};

const ru_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Можно`)
};

const sv_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör så här`)
};

const tr_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yap`)
};

const zh_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建议`)
};

const ja_content_brand_do_title = /** @type {(inputs: Content_Brand_Do_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`推奨`)
};

/**
* | output |
* | --- |
* | "Do" |
*
* @param {Content_Brand_Do_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_do_title = /** @type {((inputs?: Content_Brand_Do_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Do_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_do_title(inputs)
	if (locale === "de") return de_content_brand_do_title(inputs)
	if (locale === "fr") return fr_content_brand_do_title(inputs)
	if (locale === "it") return it_content_brand_do_title(inputs)
	if (locale === "nl") return nl_content_brand_do_title(inputs)
	if (locale === "pl") return pl_content_brand_do_title(inputs)
	if (locale === "pt") return pt_content_brand_do_title(inputs)
	if (locale === "ru") return ru_content_brand_do_title(inputs)
	if (locale === "sv") return sv_content_brand_do_title(inputs)
	if (locale === "tr") return tr_content_brand_do_title(inputs)
	if (locale === "zh") return zh_content_brand_do_title(inputs)
	if (locale === "ja") return ja_content_brand_do_title(inputs)
	return en_content_brand_do_title(inputs)
});
