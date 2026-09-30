/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Scan_False_PositiveInputs */

const en_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`False positive`)
};

const es_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo`)
};

const de_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlalarm`)
};

const fr_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faux positif`)
};

const it_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo`)
};

const nl_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vals positief`)
};

const pl_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fałszywy alarm`)
};

const pt_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falso positivo`)
};

const ru_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ложное срабатывание`)
};

const sv_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falsklarm`)
};

const tr_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanlış alarm`)
};

const zh_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`误报`)
};

const ja_basecamp_scan_false_positive = /** @type {(inputs: Basecamp_Scan_False_PositiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誤検知`)
};

/**
* | output |
* | --- |
* | "False positive" |
*
* @param {Basecamp_Scan_False_PositiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_scan_false_positive = /** @type {((inputs?: Basecamp_Scan_False_PositiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_False_PositiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_scan_false_positive(inputs)
	if (locale === "de") return de_basecamp_scan_false_positive(inputs)
	if (locale === "fr") return fr_basecamp_scan_false_positive(inputs)
	if (locale === "it") return it_basecamp_scan_false_positive(inputs)
	if (locale === "nl") return nl_basecamp_scan_false_positive(inputs)
	if (locale === "pl") return pl_basecamp_scan_false_positive(inputs)
	if (locale === "pt") return pt_basecamp_scan_false_positive(inputs)
	if (locale === "ru") return ru_basecamp_scan_false_positive(inputs)
	if (locale === "sv") return sv_basecamp_scan_false_positive(inputs)
	if (locale === "tr") return tr_basecamp_scan_false_positive(inputs)
	if (locale === "zh") return zh_basecamp_scan_false_positive(inputs)
	if (locale === "ja") return ja_basecamp_scan_false_positive(inputs)
	return en_basecamp_scan_false_positive(inputs)
});
