/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_UnknownInputs */

const en_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown`)
};

const es_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconocido`)
};

const de_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekannt`)
};

const fr_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inconnu`)
};

const it_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sconosciuto`)
};

const nl_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekend`)
};

const pl_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznany`)
};

const pt_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconhecido`)
};

const ru_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестно`)
};

const sv_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd`)
};

const tr_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmiyor`)
};

const zh_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知`)
};

const ja_basecamp_scan_unknown = /** @type {(inputs: Basecamp_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明`)
};

/**
* | output |
* | --- |
* | "Unknown" |
*
* @param {Basecamp_Scan_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_unknown = /** @type {((inputs?: Basecamp_Scan_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_unknown(inputs)
	if (locale === "de") return de_basecamp_scan_unknown(inputs)
	if (locale === "fr") return fr_basecamp_scan_unknown(inputs)
	if (locale === "it") return it_basecamp_scan_unknown(inputs)
	if (locale === "nl") return nl_basecamp_scan_unknown(inputs)
	if (locale === "pl") return pl_basecamp_scan_unknown(inputs)
	if (locale === "pt") return pt_basecamp_scan_unknown(inputs)
	if (locale === "ru") return ru_basecamp_scan_unknown(inputs)
	if (locale === "sv") return sv_basecamp_scan_unknown(inputs)
	if (locale === "tr") return tr_basecamp_scan_unknown(inputs)
	if (locale === "zh") return zh_basecamp_scan_unknown(inputs)
	if (locale === "ja") return ja_basecamp_scan_unknown(inputs)
	return en_basecamp_scan_unknown(inputs)
});
