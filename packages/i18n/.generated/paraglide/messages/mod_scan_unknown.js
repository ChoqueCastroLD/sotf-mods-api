/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Scan_UnknownInputs */

const en_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not scanned yet`)
};

const es_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin analizar`)
};

const de_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nicht gescannt`)
};

const fr_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore analysé`)
};

const it_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ancora scansionato`)
};

const nl_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niet gescand`)
};

const pl_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nie przeskanowano`)
};

const pt_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não verificado`)
};

const ru_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё не проверен`)
};

const sv_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte skannad än`)
};

const tr_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz taranmadı`)
};

const zh_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未扫描`)
};

const ja_mod_scan_unknown = /** @type {(inputs: Mod_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未スキャン`)
};

/**
* | output |
* | --- |
* | "Not scanned yet" |
*
* @param {Mod_Scan_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_unknown = /** @type {((inputs?: Mod_Scan_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_unknown(inputs)
	if (locale === "de") return de_mod_scan_unknown(inputs)
	if (locale === "fr") return fr_mod_scan_unknown(inputs)
	if (locale === "it") return it_mod_scan_unknown(inputs)
	if (locale === "nl") return nl_mod_scan_unknown(inputs)
	if (locale === "pl") return pl_mod_scan_unknown(inputs)
	if (locale === "pt") return pt_mod_scan_unknown(inputs)
	if (locale === "ru") return ru_mod_scan_unknown(inputs)
	if (locale === "sv") return sv_mod_scan_unknown(inputs)
	if (locale === "tr") return tr_mod_scan_unknown(inputs)
	if (locale === "zh") return zh_mod_scan_unknown(inputs)
	if (locale === "ja") return ja_mod_scan_unknown(inputs)
	return en_mod_scan_unknown(inputs)
});
