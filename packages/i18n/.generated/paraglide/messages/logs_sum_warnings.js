/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_Sum_WarningsInputs */

const en_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Warnings: ${i?.count}`)
};

const es_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avisos: ${i?.count}`)
};

const de_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Warnungen: ${i?.count}`)
};

const fr_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avertissements : ${i?.count}`)
};

const it_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avvisi: ${i?.count}`)
};

const nl_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Waarschuwingen: ${i?.count}`)
};

const pl_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostrzeżenia: ${i?.count}`)
};

const pt_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avisos: ${i?.count}`)
};

const ru_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Предупреждения: ${i?.count}`)
};

const sv_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Varningar: ${i?.count}`)
};

const tr_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uyarılar: ${i?.count}`)
};

const zh_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`警告：${i?.count}`)
};

const ja_logs_sum_warnings = /** @type {(inputs: Logs_Sum_WarningsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`警告：${i?.count}`)
};

/**
* | output |
* | --- |
* | "Warnings: {count}" |
*
* @param {Logs_Sum_WarningsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_warnings = /** @type {((inputs: Logs_Sum_WarningsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_WarningsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_warnings(inputs)
	if (locale === "de") return de_logs_sum_warnings(inputs)
	if (locale === "fr") return fr_logs_sum_warnings(inputs)
	if (locale === "it") return it_logs_sum_warnings(inputs)
	if (locale === "nl") return nl_logs_sum_warnings(inputs)
	if (locale === "pl") return pl_logs_sum_warnings(inputs)
	if (locale === "pt") return pt_logs_sum_warnings(inputs)
	if (locale === "ru") return ru_logs_sum_warnings(inputs)
	if (locale === "sv") return sv_logs_sum_warnings(inputs)
	if (locale === "tr") return tr_logs_sum_warnings(inputs)
	if (locale === "zh") return zh_logs_sum_warnings(inputs)
	if (locale === "ja") return ja_logs_sum_warnings(inputs)
	return en_logs_sum_warnings(inputs)
});
