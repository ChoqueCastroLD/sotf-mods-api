/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Log_RegionInputs */

const en_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log lines`)
};

const es_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Líneas del log`)
};

const de_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log-Zeilen`)
};

const fr_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lignes du log`)
};

const it_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Righe del log`)
};

const nl_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logregels`)
};

const pl_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiersze logu`)
};

const pt_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linhas do log`)
};

const ru_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строки лога`)
};

const sv_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggrader`)
};

const tr_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log satırları`)
};

const zh_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志行`)
};

const ja_logs_log_region = /** @type {(inputs: Logs_Log_RegionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログの行`)
};

/**
* | output |
* | --- |
* | "Log lines" |
*
* @param {Logs_Log_RegionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_log_region = /** @type {((inputs?: Logs_Log_RegionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Log_RegionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_log_region(inputs)
	if (locale === "de") return de_logs_log_region(inputs)
	if (locale === "fr") return fr_logs_log_region(inputs)
	if (locale === "it") return it_logs_log_region(inputs)
	if (locale === "nl") return nl_logs_log_region(inputs)
	if (locale === "pl") return pl_logs_log_region(inputs)
	if (locale === "pt") return pt_logs_log_region(inputs)
	if (locale === "ru") return ru_logs_log_region(inputs)
	if (locale === "sv") return sv_logs_log_region(inputs)
	if (locale === "tr") return tr_logs_log_region(inputs)
	if (locale === "zh") return zh_logs_log_region(inputs)
	if (locale === "ja") return ja_logs_log_region(inputs)
	return en_logs_log_region(inputs)
});
