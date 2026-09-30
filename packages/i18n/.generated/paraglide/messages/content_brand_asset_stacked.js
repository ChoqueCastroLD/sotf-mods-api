/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_StackedInputs */

const en_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stacked logo`)
};

const es_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo apilado`)
};

const de_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestapeltes Logo`)
};

const fr_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo empilé`)
};

const it_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo verticale`)
};

const nl_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestapeld logo`)
};

const pl_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo pionowe`)
};

const pt_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo empilhado`)
};

const ru_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вертикальный логотип`)
};

const sv_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staplad logotyp`)
};

const tr_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dikey logo`)
};

const zh_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`竖版标志`)
};

const ja_content_brand_asset_stacked = /** @type {(inputs: Content_Brand_Asset_StackedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`縦型ロゴ`)
};

/**
* | output |
* | --- |
* | "Stacked logo" |
*
* @param {Content_Brand_Asset_StackedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_stacked = /** @type {((inputs?: Content_Brand_Asset_StackedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_StackedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_stacked(inputs)
	if (locale === "de") return de_content_brand_asset_stacked(inputs)
	if (locale === "fr") return fr_content_brand_asset_stacked(inputs)
	if (locale === "it") return it_content_brand_asset_stacked(inputs)
	if (locale === "nl") return nl_content_brand_asset_stacked(inputs)
	if (locale === "pl") return pl_content_brand_asset_stacked(inputs)
	if (locale === "pt") return pt_content_brand_asset_stacked(inputs)
	if (locale === "ru") return ru_content_brand_asset_stacked(inputs)
	if (locale === "sv") return sv_content_brand_asset_stacked(inputs)
	if (locale === "tr") return tr_content_brand_asset_stacked(inputs)
	if (locale === "zh") return zh_content_brand_asset_stacked(inputs)
	if (locale === "ja") return ja_content_brand_asset_stacked(inputs)
	return en_content_brand_asset_stacked(inputs)
});
