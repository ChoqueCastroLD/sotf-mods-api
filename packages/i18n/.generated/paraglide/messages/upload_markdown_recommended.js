/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Upload_Markdown_RecommendedInputs */

const en_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}+ recommended`)
};

const es_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`se recomiendan ${i?.min} o más`)
};

const de_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}+ empfohlen`)
};

const fr_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} ou plus recommandés`)
};

const it_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`consigliati ${i?.min}+`)
};

const nl_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}+ aanbevolen`)
};

const pl_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zalecane ${i?.min}+`)
};

const pt_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`recomendado ${i?.min}+`)
};

const ru_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`рекомендуется от ${i?.min}`)
};

const sv_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}+ rekommenderas`)
};

const tr_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}+ önerilir`)
};

const zh_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`建议 ${i?.min} 字以上`)
};

const ja_upload_markdown_recommended = /** @type {(inputs: Upload_Markdown_RecommendedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}文字以上を推奨`)
};

/**
* | output |
* | --- |
* | "{min}+ recommended" |
*
* @param {Upload_Markdown_RecommendedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_markdown_recommended = /** @type {((inputs: Upload_Markdown_RecommendedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_RecommendedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_markdown_recommended(inputs)
	if (locale === "de") return de_upload_markdown_recommended(inputs)
	if (locale === "fr") return fr_upload_markdown_recommended(inputs)
	if (locale === "it") return it_upload_markdown_recommended(inputs)
	if (locale === "nl") return nl_upload_markdown_recommended(inputs)
	if (locale === "pl") return pl_upload_markdown_recommended(inputs)
	if (locale === "pt") return pt_upload_markdown_recommended(inputs)
	if (locale === "ru") return ru_upload_markdown_recommended(inputs)
	if (locale === "sv") return sv_upload_markdown_recommended(inputs)
	if (locale === "tr") return tr_upload_markdown_recommended(inputs)
	if (locale === "zh") return zh_upload_markdown_recommended(inputs)
	if (locale === "ja") return ja_upload_markdown_recommended(inputs)
	return en_upload_markdown_recommended(inputs)
});
