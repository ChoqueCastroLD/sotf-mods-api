/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_Log_ColorInputs */

const en_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The log colour must be a hex colour like #FF9900.`)
};

const es_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El color del log debe ser hexadecimal, como #FF9900.`)
};

const de_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Log-Farbe muss eine Hex-Farbe wie #FF9900 sein.`)
};

const fr_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La couleur du log doit être une couleur hexadécimale comme #FF9900.`)
};

const it_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il colore del log deve essere esadecimale, come #FF9900.`)
};

const nl_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De logkleur moet een hexkleur zijn, zoals #FF9900.`)
};

const pl_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolor logu musi być kolorem szesnastkowym, np. #FF9900.`)
};

const pt_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A cor do log precisa ser hexadecimal, como #FF9900.`)
};

const ru_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Цвет лога должен быть в формате hex, например #FF9900.`)
};

const sv_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggfärgen måste vara en hexfärg som #FF9900.`)
};

const tr_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük rengi #FF9900 gibi bir hex renk olmalı.`)
};

const zh_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志颜色必须是十六进制颜色，例如 #FF9900。`)
};

const ja_upload_issue_invalid_log_color = /** @type {(inputs: Upload_Issue_Invalid_Log_ColorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログの色は #FF9900 のような16進カラーにしてください。`)
};

/**
* | output |
* | --- |
* | "The log colour must be a hex colour like #FF9900." |
*
* @param {Upload_Issue_Invalid_Log_ColorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_log_color = /** @type {((inputs?: Upload_Issue_Invalid_Log_ColorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_Log_ColorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_log_color(inputs)
	if (locale === "de") return de_upload_issue_invalid_log_color(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_log_color(inputs)
	if (locale === "it") return it_upload_issue_invalid_log_color(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_log_color(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_log_color(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_log_color(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_log_color(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_log_color(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_log_color(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_log_color(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_log_color(inputs)
	return en_upload_issue_invalid_log_color(inputs)
});
