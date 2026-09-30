/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_Mark_HintInputs */

const en_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The pin alone. Use the simplified version between 16 and 24 px.`)
};

const es_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El pin solo. Usa la versión simplificada entre 16 y 24 px.`)
};

const de_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur der Pin. Zwischen 16 und 24 px die vereinfachte Version verwenden.`)
};

const fr_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le repère seul. Utilisez la version simplifiée entre 16 et 24 px.`)
};

const it_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo il segnaposto. Tra 16 e 24 px usa la versione semplificata.`)
};

const nl_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen de pin. Gebruik tussen 16 en 24 px de vereenvoudigde versie.`)
};

const pl_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sama pinezka. Między 16 a 24 px używaj wersji uproszczonej.`)
};

const pt_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só o pino. Entre 16 e 24 px, use a versão simplificada.`)
};

const ru_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только метка. От 16 до 24 px используйте упрощённую версию.`)
};

const sv_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara nålen. Använd den förenklade versionen mellan 16 och 24 px.`)
};

const tr_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca iğne. 16 ile 24 px arasında sadeleştirilmiş sürümü kullan.`)
};

const zh_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅图钉。16 到 24 px 之间请使用简化版。`)
};

const ja_content_brand_asset_mark_hint = /** @type {(inputs: Content_Brand_Asset_Mark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピンのみ。16〜24 px では簡易版を使ってください。`)
};

/**
* | output |
* | --- |
* | "The pin alone. Use the simplified version between 16 and 24 px." |
*
* @param {Content_Brand_Asset_Mark_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_mark_hint = /** @type {((inputs?: Content_Brand_Asset_Mark_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_Mark_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_mark_hint(inputs)
	if (locale === "de") return de_content_brand_asset_mark_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_mark_hint(inputs)
	if (locale === "it") return it_content_brand_asset_mark_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_mark_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_mark_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_mark_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_mark_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_mark_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_mark_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_mark_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_mark_hint(inputs)
	return en_content_brand_asset_mark_hint(inputs)
});
