/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Status_OpenInputs */

const en_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abiertos`)
};

const de_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen`)
};

const fr_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouverts`)
};

const it_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperte`)
};

const nl_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const pl_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte`)
};

const pt_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abertas`)
};

const ru_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытые`)
};

const sv_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna`)
};

const tr_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未处理`)
};

const ja_ranger_report_status_open = /** @type {(inputs: Ranger_Report_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Ranger_Report_Status_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_status_open = /** @type {((inputs?: Ranger_Report_Status_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Status_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_status_open(inputs)
	if (locale === "de") return de_ranger_report_status_open(inputs)
	if (locale === "fr") return fr_ranger_report_status_open(inputs)
	if (locale === "it") return it_ranger_report_status_open(inputs)
	if (locale === "nl") return nl_ranger_report_status_open(inputs)
	if (locale === "pl") return pl_ranger_report_status_open(inputs)
	if (locale === "pt") return pt_ranger_report_status_open(inputs)
	if (locale === "ru") return ru_ranger_report_status_open(inputs)
	if (locale === "sv") return sv_ranger_report_status_open(inputs)
	if (locale === "tr") return tr_ranger_report_status_open(inputs)
	if (locale === "zh") return zh_ranger_report_status_open(inputs)
	if (locale === "ja") return ja_ranger_report_status_open(inputs)
	return en_ranger_report_status_open(inputs)
});
