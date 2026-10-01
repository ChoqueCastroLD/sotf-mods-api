/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_ReasonInputs */

const en_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund`)
};

const fr_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orsak`)
};

const tr_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden`)
};

const zh_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_logs_report_reason = /** @type {(inputs: Logs_Report_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Logs_Report_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_reason = /** @type {((inputs?: Logs_Report_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_reason(inputs)
	if (locale === "de") return de_logs_report_reason(inputs)
	if (locale === "fr") return fr_logs_report_reason(inputs)
	if (locale === "it") return it_logs_report_reason(inputs)
	if (locale === "nl") return nl_logs_report_reason(inputs)
	if (locale === "pl") return pl_logs_report_reason(inputs)
	if (locale === "pt") return pt_logs_report_reason(inputs)
	if (locale === "ru") return ru_logs_report_reason(inputs)
	if (locale === "sv") return sv_logs_report_reason(inputs)
	if (locale === "tr") return tr_logs_report_reason(inputs)
	if (locale === "zh") return zh_logs_report_reason(inputs)
	if (locale === "ja") return ja_logs_report_reason(inputs)
	return en_logs_report_reason(inputs)
});
