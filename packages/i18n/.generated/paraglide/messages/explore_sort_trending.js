/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_TrendingInputs */

const en_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending`)
};

const es_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendencia`)
};

const de_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Trend`)
};

const fr_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendances`)
};

const it_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Di tendenza`)
};

const nl_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populair nu`)
};

const pl_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na topie`)
};

const pt_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em alta`)
};

const ru_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярное`)
};

const sv_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trendar`)
};

const tr_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler`)
};

const zh_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门`)
};

const ja_explore_sort_trending = /** @type {(inputs: Explore_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注目`)
};

/**
* | output |
* | --- |
* | "Trending" |
*
* @param {Explore_Sort_TrendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_trending = /** @type {((inputs?: Explore_Sort_TrendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_TrendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_trending(inputs)
	if (locale === "de") return de_explore_sort_trending(inputs)
	if (locale === "fr") return fr_explore_sort_trending(inputs)
	if (locale === "it") return it_explore_sort_trending(inputs)
	if (locale === "nl") return nl_explore_sort_trending(inputs)
	if (locale === "pl") return pl_explore_sort_trending(inputs)
	if (locale === "pt") return pt_explore_sort_trending(inputs)
	if (locale === "ru") return ru_explore_sort_trending(inputs)
	if (locale === "sv") return sv_explore_sort_trending(inputs)
	if (locale === "tr") return tr_explore_sort_trending(inputs)
	if (locale === "zh") return zh_explore_sort_trending(inputs)
	if (locale === "ja") return ja_explore_sort_trending(inputs)
	return en_explore_sort_trending(inputs)
});
