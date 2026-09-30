/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_CleanInputs */

const en_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clean`)
};

const es_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpio`)
};

const de_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sauber`)
};

const fr_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sain`)
};

const it_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulito`)
};

const nl_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schoon`)
};

const pl_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czysty`)
};

const pt_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpo`)
};

const ru_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чисто`)
};

const sv_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ren`)
};

const tr_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temiz`)
};

const zh_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全`)
};

const ja_basecamp_scan_clean = /** @type {(inputs: Basecamp_Scan_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題なし`)
};

/**
* | output |
* | --- |
* | "Clean" |
*
* @param {Basecamp_Scan_CleanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_clean = /** @type {((inputs?: Basecamp_Scan_CleanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_CleanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_clean(inputs)
	if (locale === "de") return de_basecamp_scan_clean(inputs)
	if (locale === "fr") return fr_basecamp_scan_clean(inputs)
	if (locale === "it") return it_basecamp_scan_clean(inputs)
	if (locale === "nl") return nl_basecamp_scan_clean(inputs)
	if (locale === "pl") return pl_basecamp_scan_clean(inputs)
	if (locale === "pt") return pt_basecamp_scan_clean(inputs)
	if (locale === "ru") return ru_basecamp_scan_clean(inputs)
	if (locale === "sv") return sv_basecamp_scan_clean(inputs)
	if (locale === "tr") return tr_basecamp_scan_clean(inputs)
	if (locale === "zh") return zh_basecamp_scan_clean(inputs)
	if (locale === "ja") return ja_basecamp_scan_clean(inputs)
	return en_basecamp_scan_clean(inputs)
});
