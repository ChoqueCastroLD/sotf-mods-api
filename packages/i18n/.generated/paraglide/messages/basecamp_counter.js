/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Basecamp_CounterInputs */

const en_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const es_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const de_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const fr_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const it_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const nl_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pl_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pt_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ru_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const sv_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const tr_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const zh_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ja_basecamp_counter = /** @type {(inputs: Basecamp_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

/**
* | output |
* | --- |
* | "{count} / {max}" |
*
* @param {Basecamp_CounterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_counter = /** @type {((inputs: Basecamp_CounterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_CounterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_counter(inputs)
	if (locale === "de") return de_basecamp_counter(inputs)
	if (locale === "fr") return fr_basecamp_counter(inputs)
	if (locale === "it") return it_basecamp_counter(inputs)
	if (locale === "nl") return nl_basecamp_counter(inputs)
	if (locale === "pl") return pl_basecamp_counter(inputs)
	if (locale === "pt") return pt_basecamp_counter(inputs)
	if (locale === "ru") return ru_basecamp_counter(inputs)
	if (locale === "sv") return sv_basecamp_counter(inputs)
	if (locale === "tr") return tr_basecamp_counter(inputs)
	if (locale === "zh") return zh_basecamp_counter(inputs)
	if (locale === "ja") return ja_basecamp_counter(inputs)
	return en_basecamp_counter(inputs)
});
