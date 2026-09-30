/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Rules_TitleInputs */

const en_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Using the logo`)
};

const es_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uso del logo`)
};

const de_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Logo verwenden`)
};

const fr_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser le logo`)
};

const it_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uso del logo`)
};

const nl_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het logo gebruiken`)
};

const pl_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używanie logo`)
};

const pt_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como usar o logo`)
};

const ru_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как использовать логотип`)
};

const sv_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så använder du logotypen`)
};

const tr_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logoyu kullanmak`)
};

const zh_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标志使用规范`)
};

const ja_content_brand_rules_title = /** @type {(inputs: Content_Brand_Rules_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロゴの使い方`)
};

/**
* | output |
* | --- |
* | "Using the logo" |
*
* @param {Content_Brand_Rules_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_rules_title = /** @type {((inputs?: Content_Brand_Rules_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Rules_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_rules_title(inputs)
	if (locale === "de") return de_content_brand_rules_title(inputs)
	if (locale === "fr") return fr_content_brand_rules_title(inputs)
	if (locale === "it") return it_content_brand_rules_title(inputs)
	if (locale === "nl") return nl_content_brand_rules_title(inputs)
	if (locale === "pl") return pl_content_brand_rules_title(inputs)
	if (locale === "pt") return pt_content_brand_rules_title(inputs)
	if (locale === "ru") return ru_content_brand_rules_title(inputs)
	if (locale === "sv") return sv_content_brand_rules_title(inputs)
	if (locale === "tr") return tr_content_brand_rules_title(inputs)
	if (locale === "zh") return zh_content_brand_rules_title(inputs)
	if (locale === "ja") return ja_content_brand_rules_title(inputs)
	return en_content_brand_rules_title(inputs)
});
