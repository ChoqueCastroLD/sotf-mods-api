/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_MarkInputs */

const en_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isotype (Contour Pin)`)
};

const es_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isotipo (Contour Pin)`)
};

const de_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildmarke (Contour Pin)`)
};

const fr_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Symbole (Contour Pin)`)
};

const it_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simbolo (Contour Pin)`)
};

const nl_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beeldmerk (Contour Pin)`)
};

const pl_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnet (Contour Pin)`)
};

const pt_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Símbolo (Contour Pin)`)
};

const ru_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Знак (Contour Pin)`)
};

const sv_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Symbol (Contour Pin)`)
};

const tr_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simge (Contour Pin)`)
};

const zh_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图形标（Contour Pin）`)
};

const ja_content_brand_asset_mark = /** @type {(inputs: Content_Brand_Asset_MarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シンボル（Contour Pin）`)
};

/**
* | output |
* | --- |
* | "Isotype (Contour Pin)" |
*
* @param {Content_Brand_Asset_MarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_mark = /** @type {((inputs?: Content_Brand_Asset_MarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_MarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_mark(inputs)
	if (locale === "de") return de_content_brand_asset_mark(inputs)
	if (locale === "fr") return fr_content_brand_asset_mark(inputs)
	if (locale === "it") return it_content_brand_asset_mark(inputs)
	if (locale === "nl") return nl_content_brand_asset_mark(inputs)
	if (locale === "pl") return pl_content_brand_asset_mark(inputs)
	if (locale === "pt") return pt_content_brand_asset_mark(inputs)
	if (locale === "ru") return ru_content_brand_asset_mark(inputs)
	if (locale === "sv") return sv_content_brand_asset_mark(inputs)
	if (locale === "tr") return tr_content_brand_asset_mark(inputs)
	if (locale === "zh") return zh_content_brand_asset_mark(inputs)
	if (locale === "ja") return ja_content_brand_asset_mark(inputs)
	return en_content_brand_asset_mark(inputs)
});
