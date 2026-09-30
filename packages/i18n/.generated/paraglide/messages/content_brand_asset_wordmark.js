/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_WordmarkInputs */

const en_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordmark`)
};

const es_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logotipo`)
};

const de_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schriftzug`)
};

const fr_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logotype`)
};

const it_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logotipo`)
};

const nl_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Woordmerk`)
};

const pl_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logotyp`)
};

const pt_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logotipo`)
};

const ru_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Надпись`)
};

const sv_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordmärke`)
};

const tr_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazı logosu`)
};

const zh_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文字标`)
};

const ja_content_brand_asset_wordmark = /** @type {(inputs: Content_Brand_Asset_WordmarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ロゴタイプ`)
};

/**
* | output |
* | --- |
* | "Wordmark" |
*
* @param {Content_Brand_Asset_WordmarkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_wordmark = /** @type {((inputs?: Content_Brand_Asset_WordmarkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_WordmarkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_wordmark(inputs)
	if (locale === "de") return de_content_brand_asset_wordmark(inputs)
	if (locale === "fr") return fr_content_brand_asset_wordmark(inputs)
	if (locale === "it") return it_content_brand_asset_wordmark(inputs)
	if (locale === "nl") return nl_content_brand_asset_wordmark(inputs)
	if (locale === "pl") return pl_content_brand_asset_wordmark(inputs)
	if (locale === "pt") return pt_content_brand_asset_wordmark(inputs)
	if (locale === "ru") return ru_content_brand_asset_wordmark(inputs)
	if (locale === "sv") return sv_content_brand_asset_wordmark(inputs)
	if (locale === "tr") return tr_content_brand_asset_wordmark(inputs)
	if (locale === "zh") return zh_content_brand_asset_wordmark(inputs)
	if (locale === "ja") return ja_content_brand_asset_wordmark(inputs)
	return en_content_brand_asset_wordmark(inputs)
});
