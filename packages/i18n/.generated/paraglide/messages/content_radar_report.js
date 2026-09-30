/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_ReportInputs */

const en_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar`)
};

const de_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar`)
};

const ru_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отчёт`)
};

const sv_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告`)
};

const ja_content_radar_report = /** @type {(inputs: Content_Radar_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Content_Radar_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_report = /** @type {((inputs?: Content_Radar_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_report(inputs)
	if (locale === "de") return de_content_radar_report(inputs)
	if (locale === "fr") return fr_content_radar_report(inputs)
	if (locale === "it") return it_content_radar_report(inputs)
	if (locale === "nl") return nl_content_radar_report(inputs)
	if (locale === "pl") return pl_content_radar_report(inputs)
	if (locale === "pt") return pt_content_radar_report(inputs)
	if (locale === "ru") return ru_content_radar_report(inputs)
	if (locale === "sv") return sv_content_radar_report(inputs)
	if (locale === "tr") return tr_content_radar_report(inputs)
	if (locale === "zh") return zh_content_radar_report(inputs)
	if (locale === "ja") return ja_content_radar_report(inputs)
	return en_content_radar_report(inputs)
});
