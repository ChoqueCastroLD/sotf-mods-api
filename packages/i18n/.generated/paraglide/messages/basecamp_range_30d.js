/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_30dInputs */

const en_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 d`)
};

const es_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 d`)
};

const de_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 T.`)
};

const fr_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 j`)
};

const it_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 g`)
};

const nl_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 d`)
};

const pl_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 dni`)
};

const pt_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 d`)
};

const ru_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 дн.`)
};

const sv_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 d`)
};

const tr_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 g`)
};

const zh_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 天`)
};

const ja_basecamp_range_30d = /** @type {(inputs: Basecamp_Range_30dInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`30 日`)
};

/**
* | output |
* | --- |
* | "30 d" |
*
* @param {Basecamp_Range_30dInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_30d = /** @type {((inputs?: Basecamp_Range_30dInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_30dInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_30d(inputs)
	if (locale === "de") return de_basecamp_range_30d(inputs)
	if (locale === "fr") return fr_basecamp_range_30d(inputs)
	if (locale === "it") return it_basecamp_range_30d(inputs)
	if (locale === "nl") return nl_basecamp_range_30d(inputs)
	if (locale === "pl") return pl_basecamp_range_30d(inputs)
	if (locale === "pt") return pt_basecamp_range_30d(inputs)
	if (locale === "ru") return ru_basecamp_range_30d(inputs)
	if (locale === "sv") return sv_basecamp_range_30d(inputs)
	if (locale === "tr") return tr_basecamp_range_30d(inputs)
	if (locale === "zh") return zh_basecamp_range_30d(inputs)
	if (locale === "ja") return ja_basecamp_range_30d(inputs)
	return en_basecamp_range_30d(inputs)
});
