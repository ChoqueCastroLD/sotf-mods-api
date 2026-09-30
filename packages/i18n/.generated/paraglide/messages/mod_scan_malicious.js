/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_MaliciousInputs */

const en_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicious: do not install`)
};

const es_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso: no lo instales`)
};

const de_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schädlich: nicht installieren`)
};

const fr_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malveillant : ne pas installer`)
};

const it_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dannoso: non installarlo`)
};

const nl_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schadelijk: niet installeren`)
};

const pl_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Złośliwy: nie instaluj`)
};

const pt_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Malicioso: não instale`)
};

const ru_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вредоносный: не устанавливайте`)
};

const sv_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skadlig: installera inte`)
};

const tr_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zararlı: kurma`)
};

const zh_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恶意：请勿安装`)
};

const ja_mod_scan_malicious = /** @type {(inputs: Mod_Scan_MaliciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`悪意あり：導入しないでください`)
};

/**
* | output |
* | --- |
* | "Malicious: do not install" |
*
* @param {Mod_Scan_MaliciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_malicious = /** @type {((inputs?: Mod_Scan_MaliciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_MaliciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_malicious(inputs)
	if (locale === "de") return de_mod_scan_malicious(inputs)
	if (locale === "fr") return fr_mod_scan_malicious(inputs)
	if (locale === "it") return it_mod_scan_malicious(inputs)
	if (locale === "nl") return nl_mod_scan_malicious(inputs)
	if (locale === "pl") return pl_mod_scan_malicious(inputs)
	if (locale === "pt") return pt_mod_scan_malicious(inputs)
	if (locale === "ru") return ru_mod_scan_malicious(inputs)
	if (locale === "sv") return sv_mod_scan_malicious(inputs)
	if (locale === "tr") return tr_mod_scan_malicious(inputs)
	if (locale === "zh") return zh_mod_scan_malicious(inputs)
	if (locale === "ja") return ja_mod_scan_malicious(inputs)
	return en_mod_scan_malicious(inputs)
});
