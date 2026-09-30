/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_CleanInputs */

const en_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No detections`)
};

const es_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin detecciones`)
};

const de_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Treffer`)
};

const fr_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune détection`)
};

const it_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun rilevamento`)
};

const nl_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen detecties`)
};

const pl_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak wykryć`)
};

const pt_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma detecção`)
};

const ru_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Угроз не найдено`)
};

const sv_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga träffar`)
};

const tr_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tespit yok`)
};

const zh_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未检出`)
};

const ja_ranger_scan_clean = /** @type {(inputs: Ranger_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検出なし`)
};

/**
* | output |
* | --- |
* | "No detections" |
*
* @param {Ranger_Scan_CleanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_clean = /** @type {((inputs?: Ranger_Scan_CleanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_CleanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_clean(inputs)
	if (locale === "de") return de_ranger_scan_clean(inputs)
	if (locale === "fr") return fr_ranger_scan_clean(inputs)
	if (locale === "it") return it_ranger_scan_clean(inputs)
	if (locale === "nl") return nl_ranger_scan_clean(inputs)
	if (locale === "pl") return pl_ranger_scan_clean(inputs)
	if (locale === "pt") return pt_ranger_scan_clean(inputs)
	if (locale === "ru") return ru_ranger_scan_clean(inputs)
	if (locale === "sv") return sv_ranger_scan_clean(inputs)
	if (locale === "tr") return tr_ranger_scan_clean(inputs)
	if (locale === "zh") return zh_ranger_scan_clean(inputs)
	if (locale === "ja") return ja_ranger_scan_clean(inputs)
	return en_ranger_scan_clean(inputs)
});
