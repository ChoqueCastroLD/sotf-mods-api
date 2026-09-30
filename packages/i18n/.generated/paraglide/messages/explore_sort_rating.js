/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_RatingInputs */

const en_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top rated`)
};

const es_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mejor valorados`)
};

const de_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Am besten bewertet`)
};

const fr_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mieux notés`)
};

const it_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più votate`)
};

const nl_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best beoordeeld`)
};

const pl_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepiej oceniane`)
};

const pt_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais bem avaliados`)
};

const ru_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие оценки`)
};

const sv_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Högst betyg`)
};

const tr_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yüksek puanlı`)
};

const zh_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评分最高`)
};

const ja_explore_sort_rating = /** @type {(inputs: Explore_Sort_RatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高評価順`)
};

/**
* | output |
* | --- |
* | "Top rated" |
*
* @param {Explore_Sort_RatingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_rating = /** @type {((inputs?: Explore_Sort_RatingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_RatingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_rating(inputs)
	if (locale === "de") return de_explore_sort_rating(inputs)
	if (locale === "fr") return fr_explore_sort_rating(inputs)
	if (locale === "it") return it_explore_sort_rating(inputs)
	if (locale === "nl") return nl_explore_sort_rating(inputs)
	if (locale === "pl") return pl_explore_sort_rating(inputs)
	if (locale === "pt") return pt_explore_sort_rating(inputs)
	if (locale === "ru") return ru_explore_sort_rating(inputs)
	if (locale === "sv") return sv_explore_sort_rating(inputs)
	if (locale === "tr") return tr_explore_sort_rating(inputs)
	if (locale === "zh") return zh_explore_sort_rating(inputs)
	if (locale === "ja") return ja_explore_sort_rating(inputs)
	return en_explore_sort_rating(inputs)
});
