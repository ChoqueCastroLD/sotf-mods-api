/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Filter_ErrorsInputs */

const en_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errors`)
};

const es_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errores`)
};

const de_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehler`)
};

const fr_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreurs`)
};

const it_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errori`)
};

const nl_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fouten`)
};

const pl_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błędy`)
};

const pt_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erros`)
};

const ru_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибки`)
};

const sv_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel`)
};

const tr_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hatalar`)
};

const zh_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const ja_logs_filter_errors = /** @type {(inputs: Logs_Filter_ErrorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラー`)
};

/**
* | output |
* | --- |
* | "Errors" |
*
* @param {Logs_Filter_ErrorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_filter_errors = /** @type {((inputs?: Logs_Filter_ErrorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Filter_ErrorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_filter_errors(inputs)
	if (locale === "de") return de_logs_filter_errors(inputs)
	if (locale === "fr") return fr_logs_filter_errors(inputs)
	if (locale === "it") return it_logs_filter_errors(inputs)
	if (locale === "nl") return nl_logs_filter_errors(inputs)
	if (locale === "pl") return pl_logs_filter_errors(inputs)
	if (locale === "pt") return pt_logs_filter_errors(inputs)
	if (locale === "ru") return ru_logs_filter_errors(inputs)
	if (locale === "sv") return sv_logs_filter_errors(inputs)
	if (locale === "tr") return tr_logs_filter_errors(inputs)
	if (locale === "zh") return zh_logs_filter_errors(inputs)
	if (locale === "ja") return ja_logs_filter_errors(inputs)
	return en_logs_filter_errors(inputs)
});
