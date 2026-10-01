/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_ReportInputs */

const en_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report abuse`)
};

const es_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar abuso`)
};

const de_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missbrauch melden`)
};

const fr_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler un abus`)
};

const it_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala abuso`)
};

const nl_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misbruik melden`)
};

const pl_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś nadużycie`)
};

const pt_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar abuso`)
};

const ru_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться`)
};

const sv_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl missbruk`)
};

const tr_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kötüye kullanımı bildir`)
};

const zh_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报滥用`)
};

const ja_logs_report = /** @type {(inputs: Logs_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不正利用を報告`)
};

/**
* | output |
* | --- |
* | "Report abuse" |
*
* @param {Logs_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report = /** @type {((inputs?: Logs_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report(inputs)
	if (locale === "de") return de_logs_report(inputs)
	if (locale === "fr") return fr_logs_report(inputs)
	if (locale === "it") return it_logs_report(inputs)
	if (locale === "nl") return nl_logs_report(inputs)
	if (locale === "pl") return pl_logs_report(inputs)
	if (locale === "pt") return pt_logs_report(inputs)
	if (locale === "ru") return ru_logs_report(inputs)
	if (locale === "sv") return sv_logs_report(inputs)
	if (locale === "tr") return tr_logs_report(inputs)
	if (locale === "zh") return zh_logs_report(inputs)
	if (locale === "ja") return ja_logs_report(inputs)
	return en_logs_report(inputs)
});
