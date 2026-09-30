/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Scan_NoneInputs */

const en_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No scan yet.`)
};

const es_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin escanear.`)
};

const de_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nicht gescannt.`)
};

const fr_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore analysé.`)
};

const it_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ancora analizzata.`)
};

const nl_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niet gescand.`)
};

const pl_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nie przeskanowano.`)
};

const pt_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não verificado.`)
};

const ru_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё не проверено.`)
};

const sv_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte skannad än.`)
};

const tr_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz taranmadı.`)
};

const zh_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未扫描。`)
};

const ja_basecamp_versions_scan_none = /** @type {(inputs: Basecamp_Versions_Scan_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだスキャンされていません。`)
};

/**
* | output |
* | --- |
* | "No scan yet." |
*
* @param {Basecamp_Versions_Scan_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_scan_none = /** @type {((inputs?: Basecamp_Versions_Scan_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Scan_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_scan_none(inputs)
	if (locale === "de") return de_basecamp_versions_scan_none(inputs)
	if (locale === "fr") return fr_basecamp_versions_scan_none(inputs)
	if (locale === "it") return it_basecamp_versions_scan_none(inputs)
	if (locale === "nl") return nl_basecamp_versions_scan_none(inputs)
	if (locale === "pl") return pl_basecamp_versions_scan_none(inputs)
	if (locale === "pt") return pt_basecamp_versions_scan_none(inputs)
	if (locale === "ru") return ru_basecamp_versions_scan_none(inputs)
	if (locale === "sv") return sv_basecamp_versions_scan_none(inputs)
	if (locale === "tr") return tr_basecamp_versions_scan_none(inputs)
	if (locale === "zh") return zh_basecamp_versions_scan_none(inputs)
	if (locale === "ja") return ja_basecamp_versions_scan_none(inputs)
	return en_basecamp_versions_scan_none(inputs)
});
