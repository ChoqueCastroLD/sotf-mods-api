/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_HarassmentInputs */

const en_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harassment or hate`)
};

const es_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acoso u odio`)
};

const de_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belästigung oder Hass`)
};

const fr_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harcèlement ou haine`)
};

const it_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Molestie o odio`)
};

const nl_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intimidatie of haat`)
};

const pl_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nękanie lub nienawiść`)
};

const pt_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assédio ou ódio`)
};

const ru_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Травля или ненависть`)
};

const sv_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trakasserier eller hat`)
};

const tr_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taciz veya nefret`)
};

const zh_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`骚扰或仇恨`)
};

const ja_mod_report_reason_harassment = /** @type {(inputs: Mod_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嫌がらせやヘイト`)
};

/**
* | output |
* | --- |
* | "Harassment or hate" |
*
* @param {Mod_Report_Reason_HarassmentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_harassment = /** @type {((inputs?: Mod_Report_Reason_HarassmentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_HarassmentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_harassment(inputs)
	if (locale === "de") return de_mod_report_reason_harassment(inputs)
	if (locale === "fr") return fr_mod_report_reason_harassment(inputs)
	if (locale === "it") return it_mod_report_reason_harassment(inputs)
	if (locale === "nl") return nl_mod_report_reason_harassment(inputs)
	if (locale === "pl") return pl_mod_report_reason_harassment(inputs)
	if (locale === "pt") return pt_mod_report_reason_harassment(inputs)
	if (locale === "ru") return ru_mod_report_reason_harassment(inputs)
	if (locale === "sv") return sv_mod_report_reason_harassment(inputs)
	if (locale === "tr") return tr_mod_report_reason_harassment(inputs)
	if (locale === "zh") return zh_mod_report_reason_harassment(inputs)
	if (locale === "ja") return ja_mod_report_reason_harassment(inputs)
	return en_mod_report_reason_harassment(inputs)
});
