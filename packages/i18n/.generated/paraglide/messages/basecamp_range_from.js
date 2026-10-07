/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_FromInputs */

const en_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From`)
};

const es_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desde`)
};

const de_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Von`)
};

const fr_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const it_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dal`)
};

const nl_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Van`)
};

const pl_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od`)
};

const pt_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De`)
};

const ru_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С`)
};

const sv_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från`)
};

const tr_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç`)
};

const zh_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始`)
};

const ja_basecamp_range_from = /** @type {(inputs: Basecamp_Range_FromInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日`)
};

/**
* | output |
* | --- |
* | "From" |
*
* @param {Basecamp_Range_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_from = /** @type {((inputs?: Basecamp_Range_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_from(inputs)
	if (locale === "de") return de_basecamp_range_from(inputs)
	if (locale === "fr") return fr_basecamp_range_from(inputs)
	if (locale === "it") return it_basecamp_range_from(inputs)
	if (locale === "nl") return nl_basecamp_range_from(inputs)
	if (locale === "pl") return pl_basecamp_range_from(inputs)
	if (locale === "pt") return pt_basecamp_range_from(inputs)
	if (locale === "ru") return ru_basecamp_range_from(inputs)
	if (locale === "sv") return sv_basecamp_range_from(inputs)
	if (locale === "tr") return tr_basecamp_range_from(inputs)
	if (locale === "zh") return zh_basecamp_range_from(inputs)
	if (locale === "ja") return ja_basecamp_range_from(inputs)
	return en_basecamp_range_from(inputs)
});
