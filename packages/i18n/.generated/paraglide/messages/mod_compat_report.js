/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Compat_ReportInputs */

const en_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar`)
};

const de_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar`)
};

const ru_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить`)
};

const sv_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_mod_compat_report = /** @type {(inputs: Mod_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Mod_Compat_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_report = /** @type {((inputs?: Mod_Compat_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_report(inputs)
	if (locale === "de") return de_mod_compat_report(inputs)
	if (locale === "fr") return fr_mod_compat_report(inputs)
	if (locale === "it") return it_mod_compat_report(inputs)
	if (locale === "nl") return nl_mod_compat_report(inputs)
	if (locale === "pl") return pl_mod_compat_report(inputs)
	if (locale === "pt") return pt_mod_compat_report(inputs)
	if (locale === "ru") return ru_mod_compat_report(inputs)
	if (locale === "sv") return sv_mod_compat_report(inputs)
	if (locale === "tr") return tr_mod_compat_report(inputs)
	if (locale === "zh") return zh_mod_compat_report(inputs)
	if (locale === "ja") return ja_mod_compat_report(inputs)
	return en_mod_compat_report(inputs)
});
