/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Payload_Too_Large_TitleInputs */

const en_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File too large`)
};

const es_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo demasiado grande`)
};

const de_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei zu groß`)
};

const fr_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier trop volumineux`)
};

const it_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File troppo grande`)
};

const nl_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand te groot`)
};

const pl_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest za duży`)
};

const pt_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo grande demais`)
};

const ru_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл слишком большой`)
};

const sv_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är för stor`)
};

const tr_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya çok büyük`)
};

const zh_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件过大`)
};

const ja_errors_code_payload_too_large_title = /** @type {(inputs: Errors_Code_Payload_Too_Large_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが大きすぎます`)
};

/**
* | output |
* | --- |
* | "File too large" |
*
* @param {Errors_Code_Payload_Too_Large_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_payload_too_large_title = /** @type {((inputs?: Errors_Code_Payload_Too_Large_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Payload_Too_Large_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_payload_too_large_title(inputs)
	if (locale === "de") return de_errors_code_payload_too_large_title(inputs)
	if (locale === "fr") return fr_errors_code_payload_too_large_title(inputs)
	if (locale === "it") return it_errors_code_payload_too_large_title(inputs)
	if (locale === "nl") return nl_errors_code_payload_too_large_title(inputs)
	if (locale === "pl") return pl_errors_code_payload_too_large_title(inputs)
	if (locale === "pt") return pt_errors_code_payload_too_large_title(inputs)
	if (locale === "ru") return ru_errors_code_payload_too_large_title(inputs)
	if (locale === "sv") return sv_errors_code_payload_too_large_title(inputs)
	if (locale === "tr") return tr_errors_code_payload_too_large_title(inputs)
	if (locale === "zh") return zh_errors_code_payload_too_large_title(inputs)
	if (locale === "ja") return ja_errors_code_payload_too_large_title(inputs)
	return en_errors_code_payload_too_large_title(inputs)
});
