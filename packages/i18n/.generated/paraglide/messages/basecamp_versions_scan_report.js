/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Scan_ReportInputs */

const en_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full report`)
};

const es_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe completo`)
};

const de_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständiger Bericht`)
};

const fr_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport complet`)
};

const it_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto completo`)
};

const nl_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volledig rapport`)
};

const pl_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełny raport`)
};

const pt_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório completo`)
};

const ru_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полный отчёт`)
};

const sv_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullständig rapport`)
};

const tr_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam rapor`)
};

const zh_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整报告`)
};

const ja_basecamp_versions_scan_report = /** @type {(inputs: Basecamp_Versions_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細レポート`)
};

/**
* | output |
* | --- |
* | "Full report" |
*
* @param {Basecamp_Versions_Scan_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_scan_report = /** @type {((inputs?: Basecamp_Versions_Scan_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Scan_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_scan_report(inputs)
	if (locale === "de") return de_basecamp_versions_scan_report(inputs)
	if (locale === "fr") return fr_basecamp_versions_scan_report(inputs)
	if (locale === "it") return it_basecamp_versions_scan_report(inputs)
	if (locale === "nl") return nl_basecamp_versions_scan_report(inputs)
	if (locale === "pl") return pl_basecamp_versions_scan_report(inputs)
	if (locale === "pt") return pt_basecamp_versions_scan_report(inputs)
	if (locale === "ru") return ru_basecamp_versions_scan_report(inputs)
	if (locale === "sv") return sv_basecamp_versions_scan_report(inputs)
	if (locale === "tr") return tr_basecamp_versions_scan_report(inputs)
	if (locale === "zh") return zh_basecamp_versions_scan_report(inputs)
	if (locale === "ja") return ja_basecamp_versions_scan_report(inputs)
	return en_basecamp_versions_scan_report(inputs)
});
