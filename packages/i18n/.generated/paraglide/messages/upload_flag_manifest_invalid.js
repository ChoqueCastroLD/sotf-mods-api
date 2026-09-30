/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Manifest_InvalidInputs */

const en_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json has errors.`)
};

const es_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json tiene errores.`)
};

const de_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json enthält Fehler.`)
};

const fr_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json contient des erreurs.`)
};

const it_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json contiene errori.`)
};

const nl_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json bevat fouten.`)
};

const pl_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json zawiera błędy.`)
};

const pt_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O manifest.json tem erros.`)
};

const ru_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В manifest.json есть ошибки.`)
};

const sv_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json innehåller fel.`)
};

const tr_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json hatalar içeriyor.`)
};

const zh_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json 有错误。`)
};

const ja_upload_flag_manifest_invalid = /** @type {(inputs: Upload_Flag_Manifest_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json にエラーがあります。`)
};

/**
* | output |
* | --- |
* | "manifest.json has errors." |
*
* @param {Upload_Flag_Manifest_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_manifest_invalid = /** @type {((inputs?: Upload_Flag_Manifest_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Manifest_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_manifest_invalid(inputs)
	if (locale === "de") return de_upload_flag_manifest_invalid(inputs)
	if (locale === "fr") return fr_upload_flag_manifest_invalid(inputs)
	if (locale === "it") return it_upload_flag_manifest_invalid(inputs)
	if (locale === "nl") return nl_upload_flag_manifest_invalid(inputs)
	if (locale === "pl") return pl_upload_flag_manifest_invalid(inputs)
	if (locale === "pt") return pt_upload_flag_manifest_invalid(inputs)
	if (locale === "ru") return ru_upload_flag_manifest_invalid(inputs)
	if (locale === "sv") return sv_upload_flag_manifest_invalid(inputs)
	if (locale === "tr") return tr_upload_flag_manifest_invalid(inputs)
	if (locale === "zh") return zh_upload_flag_manifest_invalid(inputs)
	if (locale === "ja") return ja_upload_flag_manifest_invalid(inputs)
	return en_upload_flag_manifest_invalid(inputs)
});
