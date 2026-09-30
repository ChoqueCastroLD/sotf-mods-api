/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_UnknownInputs */

const en_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not scanned (no scanner available)`)
};

const es_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin analizar (no hay escáner disponible)`)
};

const de_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gescannt (kein Scanner verfügbar)`)
};

const fr_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non analysé (aucun scanner disponible)`)
};

const it_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non analizzato (nessuno scanner disponibile)`)
};

const nl_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet gescand (geen scanner beschikbaar)`)
};

const pl_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzeskanowane (brak skanera)`)
};

const pt_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não analisado (nenhum scanner disponível)`)
};

const ru_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не проверено (нет доступного сканера)`)
};

const sv_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte skannad (ingen skanner tillgänglig)`)
};

const tr_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taranmadı (tarayıcı yok)`)
};

const zh_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未扫描（无可用扫描器）`)
};

const ja_ranger_scan_unknown = /** @type {(inputs: Ranger_Scan_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未スキャン（利用できるスキャナーなし）`)
};

/**
* | output |
* | --- |
* | "Not scanned (no scanner available)" |
*
* @param {Ranger_Scan_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_unknown = /** @type {((inputs?: Ranger_Scan_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_unknown(inputs)
	if (locale === "de") return de_ranger_scan_unknown(inputs)
	if (locale === "fr") return fr_ranger_scan_unknown(inputs)
	if (locale === "it") return it_ranger_scan_unknown(inputs)
	if (locale === "nl") return nl_ranger_scan_unknown(inputs)
	if (locale === "pl") return pl_ranger_scan_unknown(inputs)
	if (locale === "pt") return pt_ranger_scan_unknown(inputs)
	if (locale === "ru") return ru_ranger_scan_unknown(inputs)
	if (locale === "sv") return sv_ranger_scan_unknown(inputs)
	if (locale === "tr") return tr_ranger_scan_unknown(inputs)
	if (locale === "zh") return zh_ranger_scan_unknown(inputs)
	if (locale === "ja") return ja_ranger_scan_unknown(inputs)
	return en_ranger_scan_unknown(inputs)
});
