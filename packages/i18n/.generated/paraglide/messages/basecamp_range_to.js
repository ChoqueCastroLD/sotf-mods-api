/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_ToInputs */

const en_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To`)
};

const es_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta`)
};

const de_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis`)
};

const fr_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au`)
};

const it_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al`)
};

const nl_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tot`)
};

const pl_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do`)
};

const pt_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até`)
};

const ru_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По`)
};

const sv_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till`)
};

const tr_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitiş`)
};

const zh_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结束`)
};

const ja_basecamp_range_to = /** @type {(inputs: Basecamp_Range_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了日`)
};

/**
* | output |
* | --- |
* | "To" |
*
* @param {Basecamp_Range_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_to = /** @type {((inputs?: Basecamp_Range_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_to(inputs)
	if (locale === "de") return de_basecamp_range_to(inputs)
	if (locale === "fr") return fr_basecamp_range_to(inputs)
	if (locale === "it") return it_basecamp_range_to(inputs)
	if (locale === "nl") return nl_basecamp_range_to(inputs)
	if (locale === "pl") return pl_basecamp_range_to(inputs)
	if (locale === "pt") return pt_basecamp_range_to(inputs)
	if (locale === "ru") return ru_basecamp_range_to(inputs)
	if (locale === "sv") return sv_basecamp_range_to(inputs)
	if (locale === "tr") return tr_basecamp_range_to(inputs)
	if (locale === "zh") return zh_basecamp_range_to(inputs)
	if (locale === "ja") return ja_basecamp_range_to(inputs)
	return en_basecamp_range_to(inputs)
});
