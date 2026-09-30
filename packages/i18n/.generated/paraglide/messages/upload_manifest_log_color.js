/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Log_ColorInputs */

const en_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log colour`)
};

const es_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Color del log`)
};

const de_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log-Farbe`)
};

const fr_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couleur du log`)
};

const it_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colore del log`)
};

const nl_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logkleur`)
};

const pl_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolor logu`)
};

const pt_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cor do log`)
};

const ru_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Цвет лога`)
};

const sv_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggfärg`)
};

const tr_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük rengi`)
};

const zh_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志颜色`)
};

const ja_upload_manifest_log_color = /** @type {(inputs: Upload_Manifest_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログの色`)
};

/**
* | output |
* | --- |
* | "Log colour" |
*
* @param {Upload_Manifest_Log_ColorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_log_color = /** @type {((inputs?: Upload_Manifest_Log_ColorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Log_ColorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_log_color(inputs)
	if (locale === "de") return de_upload_manifest_log_color(inputs)
	if (locale === "fr") return fr_upload_manifest_log_color(inputs)
	if (locale === "it") return it_upload_manifest_log_color(inputs)
	if (locale === "nl") return nl_upload_manifest_log_color(inputs)
	if (locale === "pl") return pl_upload_manifest_log_color(inputs)
	if (locale === "pt") return pt_upload_manifest_log_color(inputs)
	if (locale === "ru") return ru_upload_manifest_log_color(inputs)
	if (locale === "sv") return sv_upload_manifest_log_color(inputs)
	if (locale === "tr") return tr_upload_manifest_log_color(inputs)
	if (locale === "zh") return zh_upload_manifest_log_color(inputs)
	if (locale === "ja") return ja_upload_manifest_log_color(inputs)
	return en_upload_manifest_log_color(inputs)
});
