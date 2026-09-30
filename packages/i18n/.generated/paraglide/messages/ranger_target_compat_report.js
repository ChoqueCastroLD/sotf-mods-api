/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Target_Compat_ReportInputs */

const en_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field report`)
};

const es_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de campo`)
};

const de_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht`)
};

const fr_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de terrain`)
};

const it_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto sul campo`)
};

const nl_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapport`)
};

const pl_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport z terenu`)
};

const pt_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de campo`)
};

const ru_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт`)
};

const sv_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapport`)
};

const tr_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu`)
};

const zh_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实测报告`)
};

const ja_ranger_target_compat_report = /** @type {(inputs: Ranger_Target_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作報告`)
};

/**
* | output |
* | --- |
* | "Field report" |
*
* @param {Ranger_Target_Compat_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_target_compat_report = /** @type {((inputs?: Ranger_Target_Compat_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Target_Compat_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_target_compat_report(inputs)
	if (locale === "de") return de_ranger_target_compat_report(inputs)
	if (locale === "fr") return fr_ranger_target_compat_report(inputs)
	if (locale === "it") return it_ranger_target_compat_report(inputs)
	if (locale === "nl") return nl_ranger_target_compat_report(inputs)
	if (locale === "pl") return pl_ranger_target_compat_report(inputs)
	if (locale === "pt") return pt_ranger_target_compat_report(inputs)
	if (locale === "ru") return ru_ranger_target_compat_report(inputs)
	if (locale === "sv") return sv_ranger_target_compat_report(inputs)
	if (locale === "tr") return tr_ranger_target_compat_report(inputs)
	if (locale === "zh") return zh_ranger_target_compat_report(inputs)
	if (locale === "ja") return ja_ranger_target_compat_report(inputs)
	return en_ranger_target_compat_report(inputs)
});
