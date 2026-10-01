/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_Sum_ErrorsInputs */

const en_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Errors: ${i?.count}`)
};

const es_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Errores: ${i?.count}`)
};

const de_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehler: ${i?.count}`)
};

const fr_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erreurs : ${i?.count}`)
};

const it_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Errori: ${i?.count}`)
};

const nl_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fouten: ${i?.count}`)
};

const pl_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Błędy: ${i?.count}`)
};

const pt_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erros: ${i?.count}`)
};

const ru_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ошибки: ${i?.count}`)
};

const sv_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fel: ${i?.count}`)
};

const tr_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hatalar: ${i?.count}`)
};

const zh_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`错误：${i?.count}`)
};

const ja_logs_sum_errors = /** @type {(inputs: Logs_Sum_ErrorsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`エラー：${i?.count}`)
};

/**
* | output |
* | --- |
* | "Errors: {count}" |
*
* @param {Logs_Sum_ErrorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_errors = /** @type {((inputs: Logs_Sum_ErrorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_ErrorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_errors(inputs)
	if (locale === "de") return de_logs_sum_errors(inputs)
	if (locale === "fr") return fr_logs_sum_errors(inputs)
	if (locale === "it") return it_logs_sum_errors(inputs)
	if (locale === "nl") return nl_logs_sum_errors(inputs)
	if (locale === "pl") return pl_logs_sum_errors(inputs)
	if (locale === "pt") return pt_logs_sum_errors(inputs)
	if (locale === "ru") return ru_logs_sum_errors(inputs)
	if (locale === "sv") return sv_logs_sum_errors(inputs)
	if (locale === "tr") return tr_logs_sum_errors(inputs)
	if (locale === "zh") return zh_logs_sum_errors(inputs)
	if (locale === "ja") return ja_logs_sum_errors(inputs)
	return en_logs_sum_errors(inputs)
});
