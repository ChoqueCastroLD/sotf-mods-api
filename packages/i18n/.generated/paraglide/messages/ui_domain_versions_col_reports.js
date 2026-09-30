/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_ReportsInputs */

const en_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports`)
};

const es_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes`)
};

const de_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berichte`)
};

const fr_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports`)
};

const it_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti`)
};

const nl_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporten`)
};

const pl_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty`)
};

const pt_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios`)
};

const ru_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёты`)
};

const sv_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporter`)
};

const tr_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporlar`)
};

const zh_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_ui_domain_versions_col_reports = /** @type {(inputs: Ui_Domain_Versions_Col_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポート`)
};

/**
* | output |
* | --- |
* | "Reports" |
*
* @param {Ui_Domain_Versions_Col_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_reports = /** @type {((inputs?: Ui_Domain_Versions_Col_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_reports(inputs)
	if (locale === "de") return de_ui_domain_versions_col_reports(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_reports(inputs)
	if (locale === "it") return it_ui_domain_versions_col_reports(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_reports(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_reports(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_reports(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_reports(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_reports(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_reports(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_reports(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_reports(inputs)
	return en_ui_domain_versions_col_reports(inputs)
});
