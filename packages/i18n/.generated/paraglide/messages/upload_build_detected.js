/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_DetectedInputs */

const en_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build detected`)
};

const es_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build detectada`)
};

const de_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build erkannt`)
};

const fr_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build détecté`)
};

const it_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build rilevata`)
};

const nl_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build herkend`)
};

const pl_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wykryto build`)
};

const pt_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build detectada`)
};

const ru_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка распознана`)
};

const sv_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge hittat`)
};

const tr_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı algılandı`)
};

const zh_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已识别建筑`)
};

const ja_upload_build_detected = /** @type {(inputs: Upload_Build_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築を検出`)
};

/**
* | output |
* | --- |
* | "Build detected" |
*
* @param {Upload_Build_DetectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_detected = /** @type {((inputs?: Upload_Build_DetectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_DetectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_detected(inputs)
	if (locale === "de") return de_upload_build_detected(inputs)
	if (locale === "fr") return fr_upload_build_detected(inputs)
	if (locale === "it") return it_upload_build_detected(inputs)
	if (locale === "nl") return nl_upload_build_detected(inputs)
	if (locale === "pl") return pl_upload_build_detected(inputs)
	if (locale === "pt") return pt_upload_build_detected(inputs)
	if (locale === "ru") return ru_upload_build_detected(inputs)
	if (locale === "sv") return sv_upload_build_detected(inputs)
	if (locale === "tr") return tr_upload_build_detected(inputs)
	if (locale === "zh") return zh_upload_build_detected(inputs)
	if (locale === "ja") return ja_upload_build_detected(inputs)
	return en_upload_build_detected(inputs)
});
