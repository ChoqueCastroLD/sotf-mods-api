/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ sort: NonNullable<unknown> }} Explore_Sort_ReversedInputs */

const en_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (reversed)`)
};

const es_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (invertido)`)
};

const de_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (umgekehrt)`)
};

const fr_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (inversé)`)
};

const it_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (invertito)`)
};

const nl_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (omgekeerd)`)
};

const pl_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (odwrotnie)`)
};

const pt_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (invertido)`)
};

const ru_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (обратный порядок)`)
};

const sv_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (omvänd)`)
};

const tr_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort} (ters)`)
};

const zh_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort}（倒序）`)
};

const ja_explore_sort_reversed = /** @type {(inputs: Explore_Sort_ReversedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.sort}（逆順）`)
};

/**
* | output |
* | --- |
* | "{sort} (reversed)" |
*
* @param {Explore_Sort_ReversedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_reversed = /** @type {((inputs: Explore_Sort_ReversedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_ReversedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_reversed(inputs)
	if (locale === "de") return de_explore_sort_reversed(inputs)
	if (locale === "fr") return fr_explore_sort_reversed(inputs)
	if (locale === "it") return it_explore_sort_reversed(inputs)
	if (locale === "nl") return nl_explore_sort_reversed(inputs)
	if (locale === "pl") return pl_explore_sort_reversed(inputs)
	if (locale === "pt") return pt_explore_sort_reversed(inputs)
	if (locale === "ru") return ru_explore_sort_reversed(inputs)
	if (locale === "sv") return sv_explore_sort_reversed(inputs)
	if (locale === "tr") return tr_explore_sort_reversed(inputs)
	if (locale === "zh") return zh_explore_sort_reversed(inputs)
	if (locale === "ja") return ja_explore_sort_reversed(inputs)
	return en_explore_sort_reversed(inputs)
});
