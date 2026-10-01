/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_BinaryInputs */

const en_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That does not look like a text log.`)
};

const es_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eso no parece un log de texto.`)
};

const de_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das sieht nicht nach einem Text-Log aus.`)
};

const fr_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela ne ressemble pas à un log texte.`)
};

const it_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non sembra un log di testo.`)
};

const nl_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit lijkt geen tekstlog.`)
};

const pl_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie wygląda na tekstowy log.`)
};

const pt_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso não parece um log de texto.`)
};

const ru_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это не похоже на текстовый лог.`)
};

const sv_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här ser inte ut som en textlogg.`)
};

const tr_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bir metin logu gibi görünmüyor.`)
};

const zh_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这看起来不是文本日志。`)
};

const ja_logs_err_binary = /** @type {(inputs: Logs_Err_BinaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テキストのログではないようです。`)
};

/**
* | output |
* | --- |
* | "That does not look like a text log." |
*
* @param {Logs_Err_BinaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_binary = /** @type {((inputs?: Logs_Err_BinaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_BinaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_binary(inputs)
	if (locale === "de") return de_logs_err_binary(inputs)
	if (locale === "fr") return fr_logs_err_binary(inputs)
	if (locale === "it") return it_logs_err_binary(inputs)
	if (locale === "nl") return nl_logs_err_binary(inputs)
	if (locale === "pl") return pl_logs_err_binary(inputs)
	if (locale === "pt") return pt_logs_err_binary(inputs)
	if (locale === "ru") return ru_logs_err_binary(inputs)
	if (locale === "sv") return sv_logs_err_binary(inputs)
	if (locale === "tr") return tr_logs_err_binary(inputs)
	if (locale === "zh") return zh_logs_err_binary(inputs)
	if (locale === "ja") return ja_logs_err_binary(inputs)
	return en_logs_err_binary(inputs)
});
