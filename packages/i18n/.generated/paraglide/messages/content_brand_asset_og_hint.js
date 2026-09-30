/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_Og_HintInputs */

const en_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, for link previews and thumbnails.`)
};

const es_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, para vistas previas de enlaces y miniaturas.`)
};

const de_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, für Linkvorschauen und Thumbnails.`)
};

const fr_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, pour les aperçus de liens et les miniatures.`)
};

const it_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, per anteprime dei link e miniature.`)
};

const nl_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, voor linkvoorbeelden en thumbnails.`)
};

const pl_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, do podglądów linków i miniatur.`)
};

const pt_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, para prévias de links e miniaturas.`)
};

const ru_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, для превью ссылок и миниатюр.`)
};

const sv_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630, för länkförhandsvisningar och miniatyrer.`)
};

const tr_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630; bağlantı önizlemeleri ve küçük resimler için.`)
};

const zh_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630，用于链接预览和缩略图。`)
};

const ja_content_brand_asset_og_hint = /** @type {(inputs: Content_Brand_Asset_Og_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1200 × 630。リンクプレビューやサムネイル向け。`)
};

/**
* | output |
* | --- |
* | "1200 × 630, for link previews and thumbnails." |
*
* @param {Content_Brand_Asset_Og_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_og_hint = /** @type {((inputs?: Content_Brand_Asset_Og_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_Og_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_og_hint(inputs)
	if (locale === "de") return de_content_brand_asset_og_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_og_hint(inputs)
	if (locale === "it") return it_content_brand_asset_og_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_og_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_og_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_og_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_og_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_og_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_og_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_og_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_og_hint(inputs)
	return en_content_brand_asset_og_hint(inputs)
});
