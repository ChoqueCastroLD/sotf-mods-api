/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_SuspiciousInputs */

const en_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspicious`)
};

const es_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospechoso`)
};

const de_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdächtig`)
};

const fr_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspect`)
};

const it_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospetto`)
};

const nl_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdacht`)
};

const pl_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podejrzany`)
};

const pt_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspeito`)
};

const ru_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подозрительно`)
};

const sv_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misstänkt`)
};

const tr_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şüpheli`)
};

const zh_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可疑`)
};

const ja_basecamp_scan_suspicious = /** @type {(inputs: Basecamp_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`疑わしい`)
};

/**
* | output |
* | --- |
* | "Suspicious" |
*
* @param {Basecamp_Scan_SuspiciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_suspicious = /** @type {((inputs?: Basecamp_Scan_SuspiciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_SuspiciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_suspicious(inputs)
	if (locale === "de") return de_basecamp_scan_suspicious(inputs)
	if (locale === "fr") return fr_basecamp_scan_suspicious(inputs)
	if (locale === "it") return it_basecamp_scan_suspicious(inputs)
	if (locale === "nl") return nl_basecamp_scan_suspicious(inputs)
	if (locale === "pl") return pl_basecamp_scan_suspicious(inputs)
	if (locale === "pt") return pt_basecamp_scan_suspicious(inputs)
	if (locale === "ru") return ru_basecamp_scan_suspicious(inputs)
	if (locale === "sv") return sv_basecamp_scan_suspicious(inputs)
	if (locale === "tr") return tr_basecamp_scan_suspicious(inputs)
	if (locale === "zh") return zh_basecamp_scan_suspicious(inputs)
	if (locale === "ja") return ja_basecamp_scan_suspicious(inputs)
	return en_basecamp_scan_suspicious(inputs)
});
