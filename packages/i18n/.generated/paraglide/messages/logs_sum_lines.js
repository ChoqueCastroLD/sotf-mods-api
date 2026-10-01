/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_LinesInputs */

const en_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lines`)
};

const es_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Líneas`)
};

const de_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeilen`)
};

const fr_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lignes`)
};

const it_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Righe`)
};

const nl_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regels`)
};

const pl_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiersze`)
};

const pt_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linhas`)
};

const ru_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строки`)
};

const sv_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rader`)
};

const tr_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satırlar`)
};

const zh_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行数`)
};

const ja_logs_sum_lines = /** @type {(inputs: Logs_Sum_LinesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行数`)
};

/**
* | output |
* | --- |
* | "Lines" |
*
* @param {Logs_Sum_LinesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_lines = /** @type {((inputs?: Logs_Sum_LinesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_LinesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_lines(inputs)
	if (locale === "de") return de_logs_sum_lines(inputs)
	if (locale === "fr") return fr_logs_sum_lines(inputs)
	if (locale === "it") return it_logs_sum_lines(inputs)
	if (locale === "nl") return nl_logs_sum_lines(inputs)
	if (locale === "pl") return pl_logs_sum_lines(inputs)
	if (locale === "pt") return pt_logs_sum_lines(inputs)
	if (locale === "ru") return ru_logs_sum_lines(inputs)
	if (locale === "sv") return sv_logs_sum_lines(inputs)
	if (locale === "tr") return tr_logs_sum_lines(inputs)
	if (locale === "zh") return zh_logs_sum_lines(inputs)
	if (locale === "ja") return ja_logs_sum_lines(inputs)
	return en_logs_sum_lines(inputs)
});
