/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_OtherInputs */

const en_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something else`)
};

const es_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otra cosa`)
};

const de_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas anderes`)
};

const fr_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autre chose`)
};

const it_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iets anders`)
};

const pl_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coś innego`)
};

const pt_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro motivo`)
};

const ru_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другое`)
};

const sv_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Något annat`)
};

const tr_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka bir şey`)
};

const zh_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他`)
};

const ja_mod_report_reason_other = /** @type {(inputs: Mod_Report_Reason_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "Something else" |
*
* @param {Mod_Report_Reason_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_other = /** @type {((inputs?: Mod_Report_Reason_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_other(inputs)
	if (locale === "de") return de_mod_report_reason_other(inputs)
	if (locale === "fr") return fr_mod_report_reason_other(inputs)
	if (locale === "it") return it_mod_report_reason_other(inputs)
	if (locale === "nl") return nl_mod_report_reason_other(inputs)
	if (locale === "pl") return pl_mod_report_reason_other(inputs)
	if (locale === "pt") return pt_mod_report_reason_other(inputs)
	if (locale === "ru") return ru_mod_report_reason_other(inputs)
	if (locale === "sv") return sv_mod_report_reason_other(inputs)
	if (locale === "tr") return tr_mod_report_reason_other(inputs)
	if (locale === "zh") return zh_mod_report_reason_other(inputs)
	if (locale === "ja") return ja_mod_report_reason_other(inputs)
	return en_mod_report_reason_other(inputs)
});
