/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Reason_OtherInputs */

const en_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something else`)
};

const es_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otra cosa`)
};

const de_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas anderes`)
};

const fr_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre chose`)
};

const it_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iets anders`)
};

const pl_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś innego`)
};

const pt_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro motivo`)
};

const ru_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något annat`)
};

const tr_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir şey`)
};

const zh_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_social_report_reason_other = /** @type {(inputs: Social_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Something else" |
*
* @param {Social_Report_Reason_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_reason_other = /** @type {((inputs?: Social_Report_Reason_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Reason_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_reason_other(inputs)
	if (locale === "de") return de_social_report_reason_other(inputs)
	if (locale === "fr") return fr_social_report_reason_other(inputs)
	if (locale === "it") return it_social_report_reason_other(inputs)
	if (locale === "nl") return nl_social_report_reason_other(inputs)
	if (locale === "pl") return pl_social_report_reason_other(inputs)
	if (locale === "pt") return pt_social_report_reason_other(inputs)
	if (locale === "ru") return ru_social_report_reason_other(inputs)
	if (locale === "sv") return sv_social_report_reason_other(inputs)
	if (locale === "tr") return tr_social_report_reason_other(inputs)
	if (locale === "zh") return zh_social_report_reason_other(inputs)
	if (locale === "ja") return ja_social_report_reason_other(inputs)
	return en_social_report_reason_other(inputs)
});
