/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Reason_HarassmentInputs */

const en_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harassment or hate`)
};

const es_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acoso u odio`)
};

const de_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belästigung oder Hass`)
};

const fr_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harcèlement ou haine`)
};

const it_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Molestie o odio`)
};

const nl_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intimidatie of haat`)
};

const pl_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nękanie lub nienawiść`)
};

const pt_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assédio ou ódio`)
};

const ru_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Травля или ненависть`)
};

const sv_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trakasserier eller hat`)
};

const tr_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taciz veya nefret`)
};

const zh_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`骚扰或仇恨`)
};

const ja_social_report_reason_harassment = /** @type {(inputs: Social_Report_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嫌がらせやヘイト`)
};

/**
* | output |
* | --- |
* | "Harassment or hate" |
*
* @param {Social_Report_Reason_HarassmentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_reason_harassment = /** @type {((inputs?: Social_Report_Reason_HarassmentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Reason_HarassmentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_reason_harassment(inputs)
	if (locale === "de") return de_social_report_reason_harassment(inputs)
	if (locale === "fr") return fr_social_report_reason_harassment(inputs)
	if (locale === "it") return it_social_report_reason_harassment(inputs)
	if (locale === "nl") return nl_social_report_reason_harassment(inputs)
	if (locale === "pl") return pl_social_report_reason_harassment(inputs)
	if (locale === "pt") return pt_social_report_reason_harassment(inputs)
	if (locale === "ru") return ru_social_report_reason_harassment(inputs)
	if (locale === "sv") return sv_social_report_reason_harassment(inputs)
	if (locale === "tr") return tr_social_report_reason_harassment(inputs)
	if (locale === "zh") return zh_social_report_reason_harassment(inputs)
	if (locale === "ja") return ja_social_report_reason_harassment(inputs)
	return en_social_report_reason_harassment(inputs)
});
