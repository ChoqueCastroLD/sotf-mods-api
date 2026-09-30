/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_MaliciousInputs */

const en_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicious`)
};

const es_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso`)
};

const de_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schädlich`)
};

const fr_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malveillant`)
};

const it_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dannoso`)
};

const nl_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schadelijk`)
};

const pl_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Złośliwy`)
};

const pt_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso`)
};

const ru_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вредоносно`)
};

const sv_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skadlig`)
};

const tr_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zararlı`)
};

const zh_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恶意`)
};

const ja_basecamp_scan_malicious = /** @type {(inputs: Basecamp_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`悪意あり`)
};

/**
* | output |
* | --- |
* | "Malicious" |
*
* @param {Basecamp_Scan_MaliciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_malicious = /** @type {((inputs?: Basecamp_Scan_MaliciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_MaliciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_malicious(inputs)
	if (locale === "de") return de_basecamp_scan_malicious(inputs)
	if (locale === "fr") return fr_basecamp_scan_malicious(inputs)
	if (locale === "it") return it_basecamp_scan_malicious(inputs)
	if (locale === "nl") return nl_basecamp_scan_malicious(inputs)
	if (locale === "pl") return pl_basecamp_scan_malicious(inputs)
	if (locale === "pt") return pt_basecamp_scan_malicious(inputs)
	if (locale === "ru") return ru_basecamp_scan_malicious(inputs)
	if (locale === "sv") return sv_basecamp_scan_malicious(inputs)
	if (locale === "tr") return tr_basecamp_scan_malicious(inputs)
	if (locale === "zh") return zh_basecamp_scan_malicious(inputs)
	if (locale === "ja") return ja_basecamp_scan_malicious(inputs)
	return en_basecamp_scan_malicious(inputs)
});
