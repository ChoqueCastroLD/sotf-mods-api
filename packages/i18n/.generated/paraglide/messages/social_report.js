/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_ReportInputs */

const en_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar`)
};

const de_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const pl_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const ru_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться`)
};

const sv_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl`)
};

const tr_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet et`)
};

const zh_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_social_report = /** @type {(inputs: Social_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通報`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Social_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report = /** @type {((inputs?: Social_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report(inputs)
	if (locale === "de") return de_social_report(inputs)
	if (locale === "fr") return fr_social_report(inputs)
	if (locale === "it") return it_social_report(inputs)
	if (locale === "nl") return nl_social_report(inputs)
	if (locale === "pl") return pl_social_report(inputs)
	if (locale === "pt") return pt_social_report(inputs)
	if (locale === "ru") return ru_social_report(inputs)
	if (locale === "sv") return sv_social_report(inputs)
	if (locale === "tr") return tr_social_report(inputs)
	if (locale === "zh") return zh_social_report(inputs)
	if (locale === "ja") return ja_social_report(inputs)
	return en_social_report(inputs)
});
