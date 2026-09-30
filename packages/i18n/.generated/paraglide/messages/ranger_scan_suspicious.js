/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_SuspiciousInputs */

const en_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspicious`)
};

const es_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospechoso`)
};

const de_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdächtig`)
};

const fr_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspect`)
};

const it_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospetto`)
};

const nl_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdacht`)
};

const pl_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podejrzane`)
};

const pt_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspeito`)
};

const ru_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подозрительно`)
};

const sv_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misstänkt`)
};

const tr_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şüpheli`)
};

const zh_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可疑`)
};

const ja_ranger_scan_suspicious = /** @type {(inputs: Ranger_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`疑わしい`)
};

/**
* | output |
* | --- |
* | "Suspicious" |
*
* @param {Ranger_Scan_SuspiciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_suspicious = /** @type {((inputs?: Ranger_Scan_SuspiciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_SuspiciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_suspicious(inputs)
	if (locale === "de") return de_ranger_scan_suspicious(inputs)
	if (locale === "fr") return fr_ranger_scan_suspicious(inputs)
	if (locale === "it") return it_ranger_scan_suspicious(inputs)
	if (locale === "nl") return nl_ranger_scan_suspicious(inputs)
	if (locale === "pl") return pl_ranger_scan_suspicious(inputs)
	if (locale === "pt") return pt_ranger_scan_suspicious(inputs)
	if (locale === "ru") return ru_ranger_scan_suspicious(inputs)
	if (locale === "sv") return sv_ranger_scan_suspicious(inputs)
	if (locale === "tr") return tr_ranger_scan_suspicious(inputs)
	if (locale === "zh") return zh_ranger_scan_suspicious(inputs)
	if (locale === "ja") return ja_ranger_scan_suspicious(inputs)
	return en_ranger_scan_suspicious(inputs)
});
