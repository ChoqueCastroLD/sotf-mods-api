/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_ReportInputs */

const en_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const de_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const ru_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться`)
};

const sv_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_requests_report = /** @type {(inputs: Requests_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通報`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Requests_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_report = /** @type {((inputs?: Requests_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_report(inputs)
	if (locale === "de") return de_requests_report(inputs)
	if (locale === "fr") return fr_requests_report(inputs)
	if (locale === "it") return it_requests_report(inputs)
	if (locale === "nl") return nl_requests_report(inputs)
	if (locale === "pl") return pl_requests_report(inputs)
	if (locale === "pt") return pt_requests_report(inputs)
	if (locale === "ru") return ru_requests_report(inputs)
	if (locale === "sv") return sv_requests_report(inputs)
	if (locale === "tr") return tr_requests_report(inputs)
	if (locale === "zh") return zh_requests_report(inputs)
	if (locale === "ja") return ja_requests_report(inputs)
	return en_requests_report(inputs)
});
