/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_Top_ErrorsInputs */

const en_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most frequent errors`)
};

const es_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errores más frecuentes`)
};

const de_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Häufigste Fehler`)
};

const fr_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreurs les plus fréquentes`)
};

const it_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errori più frequenti`)
};

const nl_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest voorkomende fouten`)
};

const pl_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęstsze błędy`)
};

const pt_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erros mais frequentes`)
};

const ru_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые частые ошибки`)
};

const sv_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vanligaste felen`)
};

const tr_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En sık görülen hatalar`)
};

const zh_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最常见的错误`)
};

const ja_logs_sum_top_errors = /** @type {(inputs: Logs_Sum_Top_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`よくあるエラー`)
};

/**
* | output |
* | --- |
* | "Most frequent errors" |
*
* @param {Logs_Sum_Top_ErrorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_top_errors = /** @type {((inputs?: Logs_Sum_Top_ErrorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_Top_ErrorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_top_errors(inputs)
	if (locale === "de") return de_logs_sum_top_errors(inputs)
	if (locale === "fr") return fr_logs_sum_top_errors(inputs)
	if (locale === "it") return it_logs_sum_top_errors(inputs)
	if (locale === "nl") return nl_logs_sum_top_errors(inputs)
	if (locale === "pl") return pl_logs_sum_top_errors(inputs)
	if (locale === "pt") return pt_logs_sum_top_errors(inputs)
	if (locale === "ru") return ru_logs_sum_top_errors(inputs)
	if (locale === "sv") return sv_logs_sum_top_errors(inputs)
	if (locale === "tr") return tr_logs_sum_top_errors(inputs)
	if (locale === "zh") return zh_logs_sum_top_errors(inputs)
	if (locale === "ja") return ja_logs_sum_top_errors(inputs)
	return en_logs_sum_top_errors(inputs)
});
