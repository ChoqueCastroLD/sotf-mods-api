/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_ReportInputs */

const en_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full report`)
};

const es_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe completo`)
};

const de_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständiger Bericht`)
};

const fr_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport complet`)
};

const it_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto completo`)
};

const nl_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volledig rapport`)
};

const pl_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełny raport`)
};

const pt_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório completo`)
};

const ru_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полный отчёт`)
};

const sv_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullständig rapport`)
};

const tr_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam rapor`)
};

const zh_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整报告`)
};

const ja_mod_scan_report = /** @type {(inputs: Mod_Scan_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細レポート`)
};

/**
* | output |
* | --- |
* | "Full report" |
*
* @param {Mod_Scan_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_report = /** @type {((inputs?: Mod_Scan_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_report(inputs)
	if (locale === "de") return de_mod_scan_report(inputs)
	if (locale === "fr") return fr_mod_scan_report(inputs)
	if (locale === "it") return it_mod_scan_report(inputs)
	if (locale === "nl") return nl_mod_scan_report(inputs)
	if (locale === "pl") return pl_mod_scan_report(inputs)
	if (locale === "pt") return pt_mod_scan_report(inputs)
	if (locale === "ru") return ru_mod_scan_report(inputs)
	if (locale === "sv") return sv_mod_scan_report(inputs)
	if (locale === "tr") return tr_mod_scan_report(inputs)
	if (locale === "zh") return zh_mod_scan_report(inputs)
	if (locale === "ja") return ja_mod_scan_report(inputs)
	return en_mod_scan_report(inputs)
});
