/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_Reason_OtherInputs */

const en_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other`)
};

const es_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro`)
};

const de_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonstiges`)
};

const fr_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre`)
};

const it_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anders`)
};

const pl_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne`)
};

const pt_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro`)
};

const ru_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annat`)
};

const tr_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_logs_report_reason_other = /** @type {(inputs: Logs_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Other" |
*
* @param {Logs_Report_Reason_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_reason_other = /** @type {((inputs?: Logs_Report_Reason_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_Reason_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_reason_other(inputs)
	if (locale === "de") return de_logs_report_reason_other(inputs)
	if (locale === "fr") return fr_logs_report_reason_other(inputs)
	if (locale === "it") return it_logs_report_reason_other(inputs)
	if (locale === "nl") return nl_logs_report_reason_other(inputs)
	if (locale === "pl") return pl_logs_report_reason_other(inputs)
	if (locale === "pt") return pt_logs_report_reason_other(inputs)
	if (locale === "ru") return ru_logs_report_reason_other(inputs)
	if (locale === "sv") return sv_logs_report_reason_other(inputs)
	if (locale === "tr") return tr_logs_report_reason_other(inputs)
	if (locale === "zh") return zh_logs_report_reason_other(inputs)
	if (locale === "ja") return ja_logs_report_reason_other(inputs)
	return en_logs_report_reason_other(inputs)
});
