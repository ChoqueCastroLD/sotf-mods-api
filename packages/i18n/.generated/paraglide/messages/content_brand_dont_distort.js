/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Dont_DistortInputs */

const en_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stretch, rotate, crop or rearrange its parts.`)
};

const es_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lo estires, gires ni recortes, ni reordenes sus partes.`)
};

const de_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es strecken, drehen, beschneiden oder seine Teile umstellen.`)
};

const fr_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’étirer, le faire pivoter, le rogner ou réorganiser ses éléments.`)
};

const it_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non allungarlo, ruotarlo o ritagliarlo e non riordinarne le parti.`)
};

const nl_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het niet uitrekken, draaien, bijsnijden of de onderdelen herschikken.`)
};

const pl_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie rozciągaj, nie obracaj, nie przycinaj ani nie przestawiaj jego elementów.`)
};

const pt_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não estique, gire, corte nem reorganize as partes dele.`)
};

const ru_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Растягивать, поворачивать, обрезать или переставлять его части.`)
};

const sv_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att sträcka, rotera, beskära eller flytta om dess delar.`)
};

const tr_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logoyu esnetme, döndürme, kırpma veya parçalarının yerini değiştirme.`)
};

const zh_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不要拉伸、旋转、裁剪标志或重排其组成部分。`)
};

const ja_content_brand_dont_distort = /** @type {(inputs: Content_Brand_Dont_DistortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引き伸ばし、回転、切り抜き、パーツの並べ替えをしないでください。`)
};

/**
* | output |
* | --- |
* | "Stretch, rotate, crop or rearrange its parts." |
*
* @param {Content_Brand_Dont_DistortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_dont_distort = /** @type {((inputs?: Content_Brand_Dont_DistortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_DistortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_dont_distort(inputs)
	if (locale === "de") return de_content_brand_dont_distort(inputs)
	if (locale === "fr") return fr_content_brand_dont_distort(inputs)
	if (locale === "it") return it_content_brand_dont_distort(inputs)
	if (locale === "nl") return nl_content_brand_dont_distort(inputs)
	if (locale === "pl") return pl_content_brand_dont_distort(inputs)
	if (locale === "pt") return pt_content_brand_dont_distort(inputs)
	if (locale === "ru") return ru_content_brand_dont_distort(inputs)
	if (locale === "sv") return sv_content_brand_dont_distort(inputs)
	if (locale === "tr") return tr_content_brand_dont_distort(inputs)
	if (locale === "zh") return zh_content_brand_dont_distort(inputs)
	if (locale === "ja") return ja_content_brand_dont_distort(inputs)
	return en_content_brand_dont_distort(inputs)
});
