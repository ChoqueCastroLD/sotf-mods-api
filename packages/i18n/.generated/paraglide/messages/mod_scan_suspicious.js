/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_SuspiciousInputs */

const en_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspicious: a ranger is reviewing it`)
};

const es_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospechoso: un ranger lo está revisando`)
};

const de_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdächtig: Ein Ranger prüft die Datei`)
};

const fr_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspect : un ranger l’examine`)
};

const it_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospetto: un ranger lo sta esaminando`)
};

const nl_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdacht: een ranger bekijkt het`)
};

const pl_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podejrzany: ranger go sprawdza`)
};

const pt_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspeito: um ranger está analisando`)
};

const ru_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подозрительный: рейнджер проверяет`)
};

const sv_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misstänkt: en ranger granskar den`)
};

const tr_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şüpheli: bir korucu inceliyor`)
};

const zh_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可疑：护林员正在审核`)
};

const ja_mod_scan_suspicious = /** @type {(inputs: Mod_Scan_SuspiciousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不審：レンジャーが確認中`)
};

/**
* | output |
* | --- |
* | "Suspicious: a ranger is reviewing it" |
*
* @param {Mod_Scan_SuspiciousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_suspicious = /** @type {((inputs?: Mod_Scan_SuspiciousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_SuspiciousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_suspicious(inputs)
	if (locale === "de") return de_mod_scan_suspicious(inputs)
	if (locale === "fr") return fr_mod_scan_suspicious(inputs)
	if (locale === "it") return it_mod_scan_suspicious(inputs)
	if (locale === "nl") return nl_mod_scan_suspicious(inputs)
	if (locale === "pl") return pl_mod_scan_suspicious(inputs)
	if (locale === "pt") return pt_mod_scan_suspicious(inputs)
	if (locale === "ru") return ru_mod_scan_suspicious(inputs)
	if (locale === "sv") return sv_mod_scan_suspicious(inputs)
	if (locale === "tr") return tr_mod_scan_suspicious(inputs)
	if (locale === "zh") return zh_mod_scan_suspicious(inputs)
	if (locale === "ja") return ja_mod_scan_suspicious(inputs)
	return en_mod_scan_suspicious(inputs)
});
