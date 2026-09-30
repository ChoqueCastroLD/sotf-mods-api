/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_SpamInputs */

const en_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam or advertising`)
};

const es_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o publicidad`)
};

const de_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam oder Werbung`)
};

const fr_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicité`)
};

const it_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam o pubblicità`)
};

const nl_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam of reclame`)
};

const pl_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam lub reklama`)
};

const pt_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam ou publicidade`)
};

const ru_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спам или реклама`)
};

const sv_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam eller reklam`)
};

const tr_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spam veya reklam`)
};

const zh_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`垃圾信息或广告`)
};

const ja_mod_report_reason_spam = /** @type {(inputs: Mod_Report_Reason_SpamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スパムまたは広告`)
};

/**
* | output |
* | --- |
* | "Spam or advertising" |
*
* @param {Mod_Report_Reason_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_spam = /** @type {((inputs?: Mod_Report_Reason_SpamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_SpamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_spam(inputs)
	if (locale === "de") return de_mod_report_reason_spam(inputs)
	if (locale === "fr") return fr_mod_report_reason_spam(inputs)
	if (locale === "it") return it_mod_report_reason_spam(inputs)
	if (locale === "nl") return nl_mod_report_reason_spam(inputs)
	if (locale === "pl") return pl_mod_report_reason_spam(inputs)
	if (locale === "pt") return pt_mod_report_reason_spam(inputs)
	if (locale === "ru") return ru_mod_report_reason_spam(inputs)
	if (locale === "sv") return sv_mod_report_reason_spam(inputs)
	if (locale === "tr") return tr_mod_report_reason_spam(inputs)
	if (locale === "zh") return zh_mod_report_reason_spam(inputs)
	if (locale === "ja") return ja_mod_report_reason_spam(inputs)
	return en_mod_report_reason_spam(inputs)
});
