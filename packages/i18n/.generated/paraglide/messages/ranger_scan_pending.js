/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_PendingInputs */

const en_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan pending`)
};

const es_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Análisis pendiente`)
};

const de_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan ausstehend`)
};

const fr_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyse en attente`)
};

const it_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analisi in attesa`)
};

const nl_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scan in afwachting`)
};

const pl_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skan oczekuje`)
};

const pt_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Análise pendente`)
};

const ru_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сканирование ожидается`)
};

const sv_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanning väntar`)
};

const tr_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarama bekliyor`)
};

const zh_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待扫描`)
};

const ja_ranger_scan_pending = /** @type {(inputs: Ranger_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキャン待ち`)
};

/**
* | output |
* | --- |
* | "Scan pending" |
*
* @param {Ranger_Scan_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_pending = /** @type {((inputs?: Ranger_Scan_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_pending(inputs)
	if (locale === "de") return de_ranger_scan_pending(inputs)
	if (locale === "fr") return fr_ranger_scan_pending(inputs)
	if (locale === "it") return it_ranger_scan_pending(inputs)
	if (locale === "nl") return nl_ranger_scan_pending(inputs)
	if (locale === "pl") return pl_ranger_scan_pending(inputs)
	if (locale === "pt") return pt_ranger_scan_pending(inputs)
	if (locale === "ru") return ru_ranger_scan_pending(inputs)
	if (locale === "sv") return sv_ranger_scan_pending(inputs)
	if (locale === "tr") return tr_ranger_scan_pending(inputs)
	if (locale === "zh") return zh_ranger_scan_pending(inputs)
	if (locale === "ja") return ja_ranger_scan_pending(inputs)
	return en_ranger_scan_pending(inputs)
});
