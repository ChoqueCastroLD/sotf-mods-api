/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_MaliciousInputs */

const en_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicious`)
};

const es_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso`)
};

const de_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schädlich`)
};

const fr_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malveillant`)
};

const it_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dannoso`)
};

const nl_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwaadaardig`)
};

const pl_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Złośliwe`)
};

const pt_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso`)
};

const ru_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вредоносно`)
};

const sv_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skadlig`)
};

const tr_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zararlı`)
};

const zh_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恶意`)
};

const ja_ranger_scan_malicious = /** @type {(inputs: Ranger_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`悪意あり`)
};

/**
* | output |
* | --- |
* | "Malicious" |
*
* @param {Ranger_Scan_MaliciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_malicious = /** @type {((inputs?: Ranger_Scan_MaliciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_MaliciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_malicious(inputs)
	if (locale === "de") return de_ranger_scan_malicious(inputs)
	if (locale === "fr") return fr_ranger_scan_malicious(inputs)
	if (locale === "it") return it_ranger_scan_malicious(inputs)
	if (locale === "nl") return nl_ranger_scan_malicious(inputs)
	if (locale === "pl") return pl_ranger_scan_malicious(inputs)
	if (locale === "pt") return pt_ranger_scan_malicious(inputs)
	if (locale === "ru") return ru_ranger_scan_malicious(inputs)
	if (locale === "sv") return sv_ranger_scan_malicious(inputs)
	if (locale === "tr") return tr_ranger_scan_malicious(inputs)
	if (locale === "zh") return zh_ranger_scan_malicious(inputs)
	if (locale === "ja") return ja_ranger_scan_malicious(inputs)
	return en_ranger_scan_malicious(inputs)
});
