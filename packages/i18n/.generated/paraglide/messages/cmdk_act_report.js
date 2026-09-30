/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_ReportInputs */

const en_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const de_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const ru_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться`)
};

const sv_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera`)
};

const tr_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildir`)
};

const zh_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_cmdk_act_report = /** @type {(inputs: Cmdk_Act_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Cmdk_Act_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_report = /** @type {((inputs?: Cmdk_Act_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_report(inputs)
	if (locale === "de") return de_cmdk_act_report(inputs)
	if (locale === "fr") return fr_cmdk_act_report(inputs)
	if (locale === "it") return it_cmdk_act_report(inputs)
	if (locale === "nl") return nl_cmdk_act_report(inputs)
	if (locale === "pl") return pl_cmdk_act_report(inputs)
	if (locale === "pt") return pt_cmdk_act_report(inputs)
	if (locale === "ru") return ru_cmdk_act_report(inputs)
	if (locale === "sv") return sv_cmdk_act_report(inputs)
	if (locale === "tr") return tr_cmdk_act_report(inputs)
	if (locale === "zh") return zh_cmdk_act_report(inputs)
	if (locale === "ja") return ja_cmdk_act_report(inputs)
	return en_cmdk_act_report(inputs)
});
