/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_TitleInputs */

const en_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report this log`)
};

const es_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar este log`)
};

const de_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Log melden`)
};

const fr_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler ce log`)
};

const it_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala questo log`)
};

const nl_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze log melden`)
};

const pl_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś ten log`)
};

const pt_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar este log`)
};

const ru_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться на этот лог`)
};

const sv_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl den här loggen`)
};

const tr_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu logu bildir`)
};

const zh_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报此日志`)
};

const ja_logs_report_title = /** @type {(inputs: Logs_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このログを報告`)
};

/**
* | output |
* | --- |
* | "Report this log" |
*
* @param {Logs_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_title = /** @type {((inputs?: Logs_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_title(inputs)
	if (locale === "de") return de_logs_report_title(inputs)
	if (locale === "fr") return fr_logs_report_title(inputs)
	if (locale === "it") return it_logs_report_title(inputs)
	if (locale === "nl") return nl_logs_report_title(inputs)
	if (locale === "pl") return pl_logs_report_title(inputs)
	if (locale === "pt") return pt_logs_report_title(inputs)
	if (locale === "ru") return ru_logs_report_title(inputs)
	if (locale === "sv") return sv_logs_report_title(inputs)
	if (locale === "tr") return tr_logs_report_title(inputs)
	if (locale === "zh") return zh_logs_report_title(inputs)
	if (locale === "ja") return ja_logs_report_title(inputs)
	return en_logs_report_title(inputs)
});
