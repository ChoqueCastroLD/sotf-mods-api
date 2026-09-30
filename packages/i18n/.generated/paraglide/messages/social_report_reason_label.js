/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Reason_LabelInputs */

const en_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund`)
};

const fr_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anledning`)
};

const tr_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden`)
};

const zh_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_social_report_reason_label = /** @type {(inputs: Social_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Social_Report_Reason_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_reason_label = /** @type {((inputs?: Social_Report_Reason_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Reason_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_reason_label(inputs)
	if (locale === "de") return de_social_report_reason_label(inputs)
	if (locale === "fr") return fr_social_report_reason_label(inputs)
	if (locale === "it") return it_social_report_reason_label(inputs)
	if (locale === "nl") return nl_social_report_reason_label(inputs)
	if (locale === "pl") return pl_social_report_reason_label(inputs)
	if (locale === "pt") return pt_social_report_reason_label(inputs)
	if (locale === "ru") return ru_social_report_reason_label(inputs)
	if (locale === "sv") return sv_social_report_reason_label(inputs)
	if (locale === "tr") return tr_social_report_reason_label(inputs)
	if (locale === "zh") return zh_social_report_reason_label(inputs)
	if (locale === "ja") return ja_social_report_reason_label(inputs)
	return en_social_report_reason_label(inputs)
});
