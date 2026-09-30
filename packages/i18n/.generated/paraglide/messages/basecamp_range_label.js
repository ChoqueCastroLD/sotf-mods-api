/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Range_LabelInputs */

const en_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Period`)
};

const es_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const de_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitraum`)
};

const fr_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Période`)
};

const it_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const nl_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periode`)
};

const pl_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okres`)
};

const pt_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Período`)
};

const ru_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Период`)
};

const sv_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Period`)
};

const tr_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dönem`)
};

const zh_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间范围`)
};

const ja_basecamp_range_label = /** @type {(inputs: Basecamp_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間`)
};

/**
* | output |
* | --- |
* | "Period" |
*
* @param {Basecamp_Range_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_range_label = /** @type {((inputs?: Basecamp_Range_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_range_label(inputs)
	if (locale === "de") return de_basecamp_range_label(inputs)
	if (locale === "fr") return fr_basecamp_range_label(inputs)
	if (locale === "it") return it_basecamp_range_label(inputs)
	if (locale === "nl") return nl_basecamp_range_label(inputs)
	if (locale === "pl") return pl_basecamp_range_label(inputs)
	if (locale === "pt") return pt_basecamp_range_label(inputs)
	if (locale === "ru") return ru_basecamp_range_label(inputs)
	if (locale === "sv") return sv_basecamp_range_label(inputs)
	if (locale === "tr") return tr_basecamp_range_label(inputs)
	if (locale === "zh") return zh_basecamp_range_label(inputs)
	if (locale === "ja") return ja_basecamp_range_label(inputs)
	return en_basecamp_range_label(inputs)
});
