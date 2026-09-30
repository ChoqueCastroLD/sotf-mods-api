/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_LabelInputs */

const en_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund`)
};

const fr_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anledning`)
};

const tr_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden`)
};

const zh_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_mod_report_reason_label = /** @type {(inputs: Mod_Report_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Mod_Report_Reason_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_label = /** @type {((inputs?: Mod_Report_Reason_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_label(inputs)
	if (locale === "de") return de_mod_report_reason_label(inputs)
	if (locale === "fr") return fr_mod_report_reason_label(inputs)
	if (locale === "it") return it_mod_report_reason_label(inputs)
	if (locale === "nl") return nl_mod_report_reason_label(inputs)
	if (locale === "pl") return pl_mod_report_reason_label(inputs)
	if (locale === "pt") return pt_mod_report_reason_label(inputs)
	if (locale === "ru") return ru_mod_report_reason_label(inputs)
	if (locale === "sv") return sv_mod_report_reason_label(inputs)
	if (locale === "tr") return tr_mod_report_reason_label(inputs)
	if (locale === "zh") return zh_mod_report_reason_label(inputs)
	if (locale === "ja") return ja_mod_report_reason_label(inputs)
	return en_mod_report_reason_label(inputs)
});
