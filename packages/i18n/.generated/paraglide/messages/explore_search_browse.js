/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_BrowseInputs */

const en_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse categories`)
};

const es_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver categorías`)
};

const de_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien ansehen`)
};

const fr_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir les catégories`)
};

const it_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia le categorie`)
};

const nl_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën bekijken`)
};

const pl_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj kategorie`)
};

const pt_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver categorias`)
};

const ru_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть категории`)
};

const sv_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland kategorier`)
};

const tr_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorilere göz at`)
};

const zh_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览分类`)
};

const ja_explore_search_browse = /** @type {(inputs: Explore_Search_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリを見る`)
};

/**
* | output |
* | --- |
* | "Browse categories" |
*
* @param {Explore_Search_BrowseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_browse = /** @type {((inputs?: Explore_Search_BrowseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_BrowseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_browse(inputs)
	if (locale === "de") return de_explore_search_browse(inputs)
	if (locale === "fr") return fr_explore_search_browse(inputs)
	if (locale === "it") return it_explore_search_browse(inputs)
	if (locale === "nl") return nl_explore_search_browse(inputs)
	if (locale === "pl") return pl_explore_search_browse(inputs)
	if (locale === "pt") return pt_explore_search_browse(inputs)
	if (locale === "ru") return ru_explore_search_browse(inputs)
	if (locale === "sv") return sv_explore_search_browse(inputs)
	if (locale === "tr") return tr_explore_search_browse(inputs)
	if (locale === "zh") return zh_explore_search_browse(inputs)
	if (locale === "ja") return ja_explore_search_browse(inputs)
	return en_explore_search_browse(inputs)
});
