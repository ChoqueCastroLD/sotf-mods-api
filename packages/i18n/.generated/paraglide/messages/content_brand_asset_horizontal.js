/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_HorizontalInputs */

const en_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horizontal logo`)
};

const es_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo horizontal`)
};

const de_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horizontales Logo`)
};

const fr_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo horizontal`)
};

const it_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo orizzontale`)
};

const nl_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horizontaal logo`)
};

const pl_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo poziome`)
};

const pt_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo horizontal`)
};

const ru_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Горизонтальный логотип`)
};

const sv_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Horisontell logotyp`)
};

const tr_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yatay logo`)
};

const zh_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横版标志`)
};

const ja_content_brand_asset_horizontal = /** @type {(inputs: Content_Brand_Asset_HorizontalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`横型ロゴ`)
};

/**
* | output |
* | --- |
* | "Horizontal logo" |
*
* @param {Content_Brand_Asset_HorizontalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_horizontal = /** @type {((inputs?: Content_Brand_Asset_HorizontalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_HorizontalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_horizontal(inputs)
	if (locale === "de") return de_content_brand_asset_horizontal(inputs)
	if (locale === "fr") return fr_content_brand_asset_horizontal(inputs)
	if (locale === "it") return it_content_brand_asset_horizontal(inputs)
	if (locale === "nl") return nl_content_brand_asset_horizontal(inputs)
	if (locale === "pl") return pl_content_brand_asset_horizontal(inputs)
	if (locale === "pt") return pt_content_brand_asset_horizontal(inputs)
	if (locale === "ru") return ru_content_brand_asset_horizontal(inputs)
	if (locale === "sv") return sv_content_brand_asset_horizontal(inputs)
	if (locale === "tr") return tr_content_brand_asset_horizontal(inputs)
	if (locale === "zh") return zh_content_brand_asset_horizontal(inputs)
	if (locale === "ja") return ja_content_brand_asset_horizontal(inputs)
	return en_content_brand_asset_horizontal(inputs)
});
