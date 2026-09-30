/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_PendingInputs */

const en_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scanning`)
};

const es_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaneando`)
};

const de_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird gescannt`)
};

const fr_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analyse en cours`)
};

const it_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analisi in corso`)
};

const nl_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezig met scannen`)
};

const pl_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skanowanie`)
};

const pt_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando`)
};

const ru_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяется`)
};

const sv_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skannar`)
};

const tr_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taranıyor`)
};

const zh_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`扫描中`)
};

const ja_basecamp_scan_pending = /** @type {(inputs: Basecamp_Scan_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキャン中`)
};

/**
* | output |
* | --- |
* | "Scanning" |
*
* @param {Basecamp_Scan_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_pending = /** @type {((inputs?: Basecamp_Scan_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_pending(inputs)
	if (locale === "de") return de_basecamp_scan_pending(inputs)
	if (locale === "fr") return fr_basecamp_scan_pending(inputs)
	if (locale === "it") return it_basecamp_scan_pending(inputs)
	if (locale === "nl") return nl_basecamp_scan_pending(inputs)
	if (locale === "pl") return pl_basecamp_scan_pending(inputs)
	if (locale === "pt") return pt_basecamp_scan_pending(inputs)
	if (locale === "ru") return ru_basecamp_scan_pending(inputs)
	if (locale === "sv") return sv_basecamp_scan_pending(inputs)
	if (locale === "tr") return tr_basecamp_scan_pending(inputs)
	if (locale === "zh") return zh_basecamp_scan_pending(inputs)
	if (locale === "ja") return ja_basecamp_scan_pending(inputs)
	return en_basecamp_scan_pending(inputs)
});
