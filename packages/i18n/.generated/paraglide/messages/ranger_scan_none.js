/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_NoneInputs */

const en_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not scanned`)
};

const es_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin analizar`)
};

const de_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gescannt`)
};

const fr_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non analysé`)
};

const it_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non analizzato`)
};

const nl_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet gescand`)
};

const pl_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzeskanowane`)
};

const pt_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não analisado`)
};

const ru_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не проверено`)
};

const sv_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte skannad`)
};

const tr_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taranmadı`)
};

const zh_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未扫描`)
};

const ja_ranger_scan_none = /** @type {(inputs: Ranger_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未スキャン`)
};

/**
* | output |
* | --- |
* | "Not scanned" |
*
* @param {Ranger_Scan_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_none = /** @type {((inputs?: Ranger_Scan_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_none(inputs)
	if (locale === "de") return de_ranger_scan_none(inputs)
	if (locale === "fr") return fr_ranger_scan_none(inputs)
	if (locale === "it") return it_ranger_scan_none(inputs)
	if (locale === "nl") return nl_ranger_scan_none(inputs)
	if (locale === "pl") return pl_ranger_scan_none(inputs)
	if (locale === "pt") return pt_ranger_scan_none(inputs)
	if (locale === "ru") return ru_ranger_scan_none(inputs)
	if (locale === "sv") return sv_ranger_scan_none(inputs)
	if (locale === "tr") return tr_ranger_scan_none(inputs)
	if (locale === "zh") return zh_ranger_scan_none(inputs)
	if (locale === "ja") return ja_ranger_scan_none(inputs)
	return en_ranger_scan_none(inputs)
});
