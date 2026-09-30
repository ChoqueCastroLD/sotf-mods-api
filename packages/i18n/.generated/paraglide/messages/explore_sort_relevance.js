/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_RelevanceInputs */

const en_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best match`)
};

const es_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más relevantes`)
};

const de_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beste Treffer`)
};

const fr_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus pertinents`)
};

const it_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più pertinenti`)
};

const nl_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beste match`)
};

const pl_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najtrafniejsze`)
};

const pt_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais relevantes`)
};

const ru_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По релевантности`)
};

const sv_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bäst matchning`)
};

const tr_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En alakalı`)
};

const zh_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最相关`)
};

const ja_explore_sort_relevance = /** @type {(inputs: Explore_Sort_RelevanceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`関連度順`)
};

/**
* | output |
* | --- |
* | "Best match" |
*
* @param {Explore_Sort_RelevanceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_relevance = /** @type {((inputs?: Explore_Sort_RelevanceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_RelevanceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_relevance(inputs)
	if (locale === "de") return de_explore_sort_relevance(inputs)
	if (locale === "fr") return fr_explore_sort_relevance(inputs)
	if (locale === "it") return it_explore_sort_relevance(inputs)
	if (locale === "nl") return nl_explore_sort_relevance(inputs)
	if (locale === "pl") return pl_explore_sort_relevance(inputs)
	if (locale === "pt") return pt_explore_sort_relevance(inputs)
	if (locale === "ru") return ru_explore_sort_relevance(inputs)
	if (locale === "sv") return sv_explore_sort_relevance(inputs)
	if (locale === "tr") return tr_explore_sort_relevance(inputs)
	if (locale === "zh") return zh_explore_sort_relevance(inputs)
	if (locale === "ja") return ja_explore_sort_relevance(inputs)
	return en_explore_sort_relevance(inputs)
});
