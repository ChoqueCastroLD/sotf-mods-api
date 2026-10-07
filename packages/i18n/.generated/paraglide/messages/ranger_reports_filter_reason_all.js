/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Filter_Reason_AllInputs */

const en_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any reason`)
};

const es_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier motivo`)
};

const de_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Grund`)
};

const fr_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les motifs`)
};

const it_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi motivo`)
};

const nl_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke reden`)
};

const pl_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny powód`)
};

const pt_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer motivo`)
};

const ru_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая причина`)
};

const sv_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla orsaker`)
};

const tr_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm nedenler`)
};

const zh_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意原因`)
};

const ja_ranger_reports_filter_reason_all = /** @type {(inputs: Ranger_Reports_Filter_Reason_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての理由`)
};

/**
* | output |
* | --- |
* | "Any reason" |
*
* @param {Ranger_Reports_Filter_Reason_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filter_reason_all = /** @type {((inputs?: Ranger_Reports_Filter_Reason_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filter_Reason_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filter_reason_all(inputs)
	if (locale === "de") return de_ranger_reports_filter_reason_all(inputs)
	if (locale === "fr") return fr_ranger_reports_filter_reason_all(inputs)
	if (locale === "it") return it_ranger_reports_filter_reason_all(inputs)
	if (locale === "nl") return nl_ranger_reports_filter_reason_all(inputs)
	if (locale === "pl") return pl_ranger_reports_filter_reason_all(inputs)
	if (locale === "pt") return pt_ranger_reports_filter_reason_all(inputs)
	if (locale === "ru") return ru_ranger_reports_filter_reason_all(inputs)
	if (locale === "sv") return sv_ranger_reports_filter_reason_all(inputs)
	if (locale === "tr") return tr_ranger_reports_filter_reason_all(inputs)
	if (locale === "zh") return zh_ranger_reports_filter_reason_all(inputs)
	if (locale === "ja") return ja_ranger_reports_filter_reason_all(inputs)
	return en_ranger_reports_filter_reason_all(inputs)
});
