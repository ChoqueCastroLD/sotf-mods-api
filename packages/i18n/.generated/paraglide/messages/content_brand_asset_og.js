/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_OgInputs */

const en_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Social preview image`)
};

const es_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagen para redes`)
};

const de_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorschaubild für soziale Medien`)
};

const fr_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image d’aperçu social`)
};

const it_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immagine di anteprima social`)
};

const nl_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbeeldafbeelding voor sociale media`)
};

const pl_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obraz podglądu w mediach społecznościowych`)
};

const pt_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imagem de prévia social`)
};

const ru_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Картинка для превью в соцсетях`)
};

const sv_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsbild för sociala medier`)
};

const tr_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sosyal medya önizleme görseli`)
};

const zh_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社交分享预览图`)
};

const ja_content_brand_asset_og = /** @type {(inputs: Content_Brand_Asset_OgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SNS プレビュー画像`)
};

/**
* | output |
* | --- |
* | "Social preview image" |
*
* @param {Content_Brand_Asset_OgInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_og = /** @type {((inputs?: Content_Brand_Asset_OgInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_OgInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_og(inputs)
	if (locale === "de") return de_content_brand_asset_og(inputs)
	if (locale === "fr") return fr_content_brand_asset_og(inputs)
	if (locale === "it") return it_content_brand_asset_og(inputs)
	if (locale === "nl") return nl_content_brand_asset_og(inputs)
	if (locale === "pl") return pl_content_brand_asset_og(inputs)
	if (locale === "pt") return pt_content_brand_asset_og(inputs)
	if (locale === "ru") return ru_content_brand_asset_og(inputs)
	if (locale === "sv") return sv_content_brand_asset_og(inputs)
	if (locale === "tr") return tr_content_brand_asset_og(inputs)
	if (locale === "zh") return zh_content_brand_asset_og(inputs)
	if (locale === "ja") return ja_content_brand_asset_og(inputs)
	return en_content_brand_asset_og(inputs)
});
