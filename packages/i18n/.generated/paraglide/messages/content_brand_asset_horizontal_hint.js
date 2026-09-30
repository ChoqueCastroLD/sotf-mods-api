/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_Horizontal_HintInputs */

const en_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The default lockup: isotype and wordmark side by side.`)
};

const es_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versión principal: isotipo y logotipo uno al lado del otro.`)
};

const de_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Standardversion: Bildmarke und Schriftzug nebeneinander.`)
};

const fr_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version par défaut : symbole et logotype côte à côte.`)
};

const it_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La versione principale: simbolo e logotipo affiancati.`)
};

const nl_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De standaardversie: beeldmerk en woordmerk naast elkaar.`)
};

const pl_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja podstawowa: sygnet i logotyp obok siebie.`)
};

const pt_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A versão padrão: símbolo e logotipo lado a lado.`)
};

const ru_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основная версия: знак и надпись рядом.`)
};

const sv_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Standardversionen: symbol och ordmärke sida vid sida.`)
};

const tr_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varsayılan sürüm: simge ve yazı yan yana.`)
};

const zh_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认版本：图形标与文字标并排。`)
};

const ja_content_brand_asset_horizontal_hint = /** @type {(inputs: Content_Brand_Asset_Horizontal_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`標準版：シンボルとロゴタイプを横に並べたもの。`)
};

/**
* | output |
* | --- |
* | "The default lockup: isotype and wordmark side by side." |
*
* @param {Content_Brand_Asset_Horizontal_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_horizontal_hint = /** @type {((inputs?: Content_Brand_Asset_Horizontal_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_Horizontal_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_horizontal_hint(inputs)
	if (locale === "de") return de_content_brand_asset_horizontal_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_horizontal_hint(inputs)
	if (locale === "it") return it_content_brand_asset_horizontal_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_horizontal_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_horizontal_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_horizontal_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_horizontal_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_horizontal_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_horizontal_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_horizontal_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_horizontal_hint(inputs)
	return en_content_brand_asset_horizontal_hint(inputs)
});
