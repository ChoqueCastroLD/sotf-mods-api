/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Sort_TrendingInputs */

const en_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending this week`)
};

const es_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendencia de esta semana`)
};

const de_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Im Trend diese Woche`)
};

const fr_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tendance cette semaine`)
};

const it_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In tendenza questa settimana`)
};

const nl_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trending deze week`)
};

const pl_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na topie w tym tygodniu`)
};

const pt_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em alta esta semana`)
};

const ru_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В тренде на этой неделе`)
};

const sv_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populärt den här veckan`)
};

const tr_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu hafta öne çıkanlar`)
};

const zh_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周热门`)
};

const ja_explore_catalog_sort_trending = /** @type {(inputs: Explore_Catalog_Sort_TrendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のトレンド`)
};

/**
* | output |
* | --- |
* | "Trending this week" |
*
* @param {Explore_Catalog_Sort_TrendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_sort_trending = /** @type {((inputs?: Explore_Catalog_Sort_TrendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Sort_TrendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_sort_trending(inputs)
	if (locale === "de") return de_explore_catalog_sort_trending(inputs)
	if (locale === "fr") return fr_explore_catalog_sort_trending(inputs)
	if (locale === "it") return it_explore_catalog_sort_trending(inputs)
	if (locale === "nl") return nl_explore_catalog_sort_trending(inputs)
	if (locale === "pl") return pl_explore_catalog_sort_trending(inputs)
	if (locale === "pt") return pt_explore_catalog_sort_trending(inputs)
	if (locale === "ru") return ru_explore_catalog_sort_trending(inputs)
	if (locale === "sv") return sv_explore_catalog_sort_trending(inputs)
	if (locale === "tr") return tr_explore_catalog_sort_trending(inputs)
	if (locale === "zh") return zh_explore_catalog_sort_trending(inputs)
	if (locale === "ja") return ja_explore_catalog_sort_trending(inputs)
	return en_explore_catalog_sort_trending(inputs)
});
