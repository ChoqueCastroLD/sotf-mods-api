/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Compat_ReportInputs */

const en_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field report (does it work on this build?)`)
};

const es_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de campo (¿funciona en esta build?)`)
};

const de_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht (läuft es auf diesem Build?)`)
};

const fr_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de terrain (ça marche sur ce build ?)`)
};

const it_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto sul campo (funziona su questa build?)`)
};

const nl_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapport (werkt het op deze build?)`)
};

const pl_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport terenowy (czy działa na tej wersji?)`)
};

const pt_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de campo (funciona nesta build?)`)
};

const ru_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт (работает ли на этой сборке?)`)
};

const sv_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapport (fungerar det på det här bygget?)`)
};

const tr_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu (bu sürümde çalışıyor mu?)`)
};

const zh_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告（在此版本上能用吗？）`)
};

const ja_profile_xp_compat_report = /** @type {(inputs: Profile_Xp_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポート（このビルドで動く？）`)
};

/**
* | output |
* | --- |
* | "Field report (does it work on this build?)" |
*
* @param {Profile_Xp_Compat_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_compat_report = /** @type {((inputs?: Profile_Xp_Compat_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Compat_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_compat_report(inputs)
	if (locale === "de") return de_profile_xp_compat_report(inputs)
	if (locale === "fr") return fr_profile_xp_compat_report(inputs)
	if (locale === "it") return it_profile_xp_compat_report(inputs)
	if (locale === "nl") return nl_profile_xp_compat_report(inputs)
	if (locale === "pl") return pl_profile_xp_compat_report(inputs)
	if (locale === "pt") return pt_profile_xp_compat_report(inputs)
	if (locale === "ru") return ru_profile_xp_compat_report(inputs)
	if (locale === "sv") return sv_profile_xp_compat_report(inputs)
	if (locale === "tr") return tr_profile_xp_compat_report(inputs)
	if (locale === "zh") return zh_profile_xp_compat_report(inputs)
	if (locale === "ja") return ja_profile_xp_compat_report(inputs)
	return en_profile_xp_compat_report(inputs)
});
