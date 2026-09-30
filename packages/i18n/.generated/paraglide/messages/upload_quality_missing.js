/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_MissingInputs */

const en_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`missing`)
};

const es_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`falta`)
};

const de_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fehlt`)
};

const fr_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manquant`)
};

const it_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mancante`)
};

const nl_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ontbreekt`)
};

const pl_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`brak`)
};

const pt_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`faltando`)
};

const ru_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`не хватает`)
};

const sv_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`saknas`)
};

const tr_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`eksik`)
};

const zh_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺失`)
};

const ja_upload_quality_missing = /** @type {(inputs: Upload_Quality_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未設定`)
};

/**
* | output |
* | --- |
* | "missing" |
*
* @param {Upload_Quality_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_missing = /** @type {((inputs?: Upload_Quality_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_missing(inputs)
	if (locale === "de") return de_upload_quality_missing(inputs)
	if (locale === "fr") return fr_upload_quality_missing(inputs)
	if (locale === "it") return it_upload_quality_missing(inputs)
	if (locale === "nl") return nl_upload_quality_missing(inputs)
	if (locale === "pl") return pl_upload_quality_missing(inputs)
	if (locale === "pt") return pt_upload_quality_missing(inputs)
	if (locale === "ru") return ru_upload_quality_missing(inputs)
	if (locale === "sv") return sv_upload_quality_missing(inputs)
	if (locale === "tr") return tr_upload_quality_missing(inputs)
	if (locale === "zh") return zh_upload_quality_missing(inputs)
	if (locale === "ja") return ja_upload_quality_missing(inputs)
	return en_upload_quality_missing(inputs)
});
