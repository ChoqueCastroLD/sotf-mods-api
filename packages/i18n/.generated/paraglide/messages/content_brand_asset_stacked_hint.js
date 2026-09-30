/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_Stacked_HintInputs */

const en_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For square and tall spaces.`)
};

const es_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para espacios cuadrados y verticales.`)
};

const de_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für quadratische und hohe Flächen.`)
};

const fr_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour les espaces carrés et verticaux.`)
};

const it_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per spazi quadrati e verticali.`)
};

const nl_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor vierkante en hoge ruimtes.`)
};

const pl_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do kwadratowych i wysokich miejsc.`)
};

const pt_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para espaços quadrados e verticais.`)
};

const ru_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для квадратных и высоких мест.`)
};

const sv_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För kvadratiska och höga ytor.`)
};

const tr_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kare ve uzun alanlar için.`)
};

const zh_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于方形或较高的空间。`)
};

const ja_content_brand_asset_stacked_hint = /** @type {(inputs: Content_Brand_Asset_Stacked_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正方形や縦長のスペース向け。`)
};

/**
* | output |
* | --- |
* | "For square and tall spaces." |
*
* @param {Content_Brand_Asset_Stacked_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_stacked_hint = /** @type {((inputs?: Content_Brand_Asset_Stacked_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_Stacked_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_stacked_hint(inputs)
	if (locale === "de") return de_content_brand_asset_stacked_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_stacked_hint(inputs)
	if (locale === "it") return it_content_brand_asset_stacked_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_stacked_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_stacked_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_stacked_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_stacked_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_stacked_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_stacked_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_stacked_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_stacked_hint(inputs)
	return en_content_brand_asset_stacked_hint(inputs)
});
