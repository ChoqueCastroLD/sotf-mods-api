/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Compat_Report_CtaInputs */

const en_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report whether it works`)
};

const es_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informa si funciona`)
};

const de_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden, ob es funktioniert`)
};

const fr_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler si ça marche`)
};

const it_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala se funziona`)
};

const nl_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meld of het werkt`)
};

const pl_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś, czy działa`)
};

const pt_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar se funciona`)
};

const ru_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить, работает ли`)
};

const sv_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera om den fungerar`)
};

const tr_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıp çalışmadığını bildir`)
};

const zh_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告是否可用`)
};

const ja_mod_compat_report_cta = /** @type {(inputs: Mod_Compat_Report_CtaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作するか報告する`)
};

/**
* | output |
* | --- |
* | "Report whether it works" |
*
* @param {Mod_Compat_Report_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_report_cta = /** @type {((inputs?: Mod_Compat_Report_CtaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_Report_CtaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_report_cta(inputs)
	if (locale === "de") return de_mod_compat_report_cta(inputs)
	if (locale === "fr") return fr_mod_compat_report_cta(inputs)
	if (locale === "it") return it_mod_compat_report_cta(inputs)
	if (locale === "nl") return nl_mod_compat_report_cta(inputs)
	if (locale === "pl") return pl_mod_compat_report_cta(inputs)
	if (locale === "pt") return pt_mod_compat_report_cta(inputs)
	if (locale === "ru") return ru_mod_compat_report_cta(inputs)
	if (locale === "sv") return sv_mod_compat_report_cta(inputs)
	if (locale === "tr") return tr_mod_compat_report_cta(inputs)
	if (locale === "zh") return zh_mod_compat_report_cta(inputs)
	if (locale === "ja") return ja_mod_compat_report_cta(inputs)
	return en_mod_compat_report_cta(inputs)
});
