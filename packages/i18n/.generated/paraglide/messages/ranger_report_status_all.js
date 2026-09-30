/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Status_AllInputs */

const en_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const de_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous`)
};

const it_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const ru_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_ranger_report_status_all = /** @type {(inputs: Ranger_Report_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Ranger_Report_Status_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_status_all = /** @type {((inputs?: Ranger_Report_Status_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Status_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_status_all(inputs)
	if (locale === "de") return de_ranger_report_status_all(inputs)
	if (locale === "fr") return fr_ranger_report_status_all(inputs)
	if (locale === "it") return it_ranger_report_status_all(inputs)
	if (locale === "nl") return nl_ranger_report_status_all(inputs)
	if (locale === "pl") return pl_ranger_report_status_all(inputs)
	if (locale === "pt") return pt_ranger_report_status_all(inputs)
	if (locale === "ru") return ru_ranger_report_status_all(inputs)
	if (locale === "sv") return sv_ranger_report_status_all(inputs)
	if (locale === "tr") return tr_ranger_report_status_all(inputs)
	if (locale === "zh") return zh_ranger_report_status_all(inputs)
	if (locale === "ja") return ja_ranger_report_status_all(inputs)
	return en_ranger_report_status_all(inputs)
});
