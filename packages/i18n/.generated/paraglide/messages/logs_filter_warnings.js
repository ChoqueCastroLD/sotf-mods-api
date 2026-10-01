/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Filter_WarningsInputs */

const en_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnings`)
};

const es_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos`)
};

const de_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warnungen`)
};

const fr_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissements`)
};

const it_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisi`)
};

const nl_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarschuwingen`)
};

const pl_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostrzeżenia`)
};

const pt_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos`)
};

const ru_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждения`)
};

const sv_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varningar`)
};

const tr_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyarılar`)
};

const zh_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ja_logs_filter_warnings = /** @type {(inputs: Logs_Filter_WarningsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

/**
* | output |
* | --- |
* | "Warnings" |
*
* @param {Logs_Filter_WarningsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_filter_warnings = /** @type {((inputs?: Logs_Filter_WarningsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Filter_WarningsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_filter_warnings(inputs)
	if (locale === "de") return de_logs_filter_warnings(inputs)
	if (locale === "fr") return fr_logs_filter_warnings(inputs)
	if (locale === "it") return it_logs_filter_warnings(inputs)
	if (locale === "nl") return nl_logs_filter_warnings(inputs)
	if (locale === "pl") return pl_logs_filter_warnings(inputs)
	if (locale === "pt") return pt_logs_filter_warnings(inputs)
	if (locale === "ru") return ru_logs_filter_warnings(inputs)
	if (locale === "sv") return sv_logs_filter_warnings(inputs)
	if (locale === "tr") return tr_logs_filter_warnings(inputs)
	if (locale === "zh") return zh_logs_filter_warnings(inputs)
	if (locale === "ja") return ja_logs_filter_warnings(inputs)
	return en_logs_filter_warnings(inputs)
});
