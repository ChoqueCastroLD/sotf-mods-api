/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Report_LinkInputs */

const en_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal report`)
};

const es_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe de VirusTotal`)
};

const de_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal-Bericht`)
};

const fr_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport VirusTotal`)
};

const it_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto VirusTotal`)
};

const nl_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal-rapport`)
};

const pl_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport VirusTotal`)
};

const pt_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório do VirusTotal`)
};

const ru_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёт VirusTotal`)
};

const sv_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal-rapport`)
};

const tr_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal raporu`)
};

const zh_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal 报告`)
};

const ja_ranger_scan_report_link = /** @type {(inputs: Ranger_Scan_Report_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`VirusTotal レポート`)
};

/**
* | output |
* | --- |
* | "VirusTotal report" |
*
* @param {Ranger_Scan_Report_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_report_link = /** @type {((inputs?: Ranger_Scan_Report_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Report_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_report_link(inputs)
	if (locale === "de") return de_ranger_scan_report_link(inputs)
	if (locale === "fr") return fr_ranger_scan_report_link(inputs)
	if (locale === "it") return it_ranger_scan_report_link(inputs)
	if (locale === "nl") return nl_ranger_scan_report_link(inputs)
	if (locale === "pl") return pl_ranger_scan_report_link(inputs)
	if (locale === "pt") return pt_ranger_scan_report_link(inputs)
	if (locale === "ru") return ru_ranger_scan_report_link(inputs)
	if (locale === "sv") return sv_ranger_scan_report_link(inputs)
	if (locale === "tr") return tr_ranger_scan_report_link(inputs)
	if (locale === "zh") return zh_ranger_scan_report_link(inputs)
	if (locale === "ja") return ja_ranger_scan_report_link(inputs)
	return en_ranger_scan_report_link(inputs)
});
