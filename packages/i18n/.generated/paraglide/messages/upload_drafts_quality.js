/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ score: NonNullable<unknown> }} Upload_Drafts_QualityInputs */

const en_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quality ${i?.score}`)
};

const es_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Calidad ${i?.score}`)
};

const de_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Qualität ${i?.score}`)
};

const fr_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Qualité ${i?.score}`)
};

const it_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Qualità ${i?.score}`)
};

const nl_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kwaliteit ${i?.score}`)
};

const pl_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jakość ${i?.score}`)
};

const pt_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Qualidade ${i?.score}`)
};

const ru_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Качество ${i?.score}`)
};

const sv_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kvalitet ${i?.score}`)
};

const tr_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kalite ${i?.score}`)
};

const zh_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`质量 ${i?.score}`)
};

const ja_upload_drafts_quality = /** @type {(inputs: Upload_Drafts_QualityInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`完成度 ${i?.score}`)
};

/**
* | output |
* | --- |
* | "Quality {score}" |
*
* @param {Upload_Drafts_QualityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_quality = /** @type {((inputs: Upload_Drafts_QualityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_QualityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_quality(inputs)
	if (locale === "de") return de_upload_drafts_quality(inputs)
	if (locale === "fr") return fr_upload_drafts_quality(inputs)
	if (locale === "it") return it_upload_drafts_quality(inputs)
	if (locale === "nl") return nl_upload_drafts_quality(inputs)
	if (locale === "pl") return pl_upload_drafts_quality(inputs)
	if (locale === "pt") return pt_upload_drafts_quality(inputs)
	if (locale === "ru") return ru_upload_drafts_quality(inputs)
	if (locale === "sv") return sv_upload_drafts_quality(inputs)
	if (locale === "tr") return tr_upload_drafts_quality(inputs)
	if (locale === "zh") return zh_upload_drafts_quality(inputs)
	if (locale === "ja") return ja_upload_drafts_quality(inputs)
	return en_upload_drafts_quality(inputs)
});
