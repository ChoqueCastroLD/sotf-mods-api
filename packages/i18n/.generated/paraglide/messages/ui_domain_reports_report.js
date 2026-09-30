/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reports_ReportInputs */

const en_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar`)
};

const de_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar`)
};

const ru_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить`)
};

const sv_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_ui_domain_reports_report = /** @type {(inputs: Ui_Domain_Reports_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Ui_Domain_Reports_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_report = /** @type {((inputs?: Ui_Domain_Reports_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_report(inputs)
	if (locale === "de") return de_ui_domain_reports_report(inputs)
	if (locale === "fr") return fr_ui_domain_reports_report(inputs)
	if (locale === "it") return it_ui_domain_reports_report(inputs)
	if (locale === "nl") return nl_ui_domain_reports_report(inputs)
	if (locale === "pl") return pl_ui_domain_reports_report(inputs)
	if (locale === "pt") return pt_ui_domain_reports_report(inputs)
	if (locale === "ru") return ru_ui_domain_reports_report(inputs)
	if (locale === "sv") return sv_ui_domain_reports_report(inputs)
	if (locale === "tr") return tr_ui_domain_reports_report(inputs)
	if (locale === "zh") return zh_ui_domain_reports_report(inputs)
	if (locale === "ja") return ja_ui_domain_reports_report(inputs)
	return en_ui_domain_reports_report(inputs)
});
