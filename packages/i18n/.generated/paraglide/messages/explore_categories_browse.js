/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Categories_BrowseInputs */

const en_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse`)
};

const es_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar`)
};

const de_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansehen`)
};

const fr_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourir`)
};

const it_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia`)
};

const nl_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijken`)
};

const pl_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj`)
};

const pt_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver`)
};

const ru_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть`)
};

const sv_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra`)
};

const tr_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Göz at`)
};

const zh_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览`)
};

const ja_explore_categories_browse = /** @type {(inputs: Explore_Categories_BrowseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`見る`)
};

/**
* | output |
* | --- |
* | "Browse" |
*
* @param {Explore_Categories_BrowseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_categories_browse = /** @type {((inputs?: Explore_Categories_BrowseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Categories_BrowseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_categories_browse(inputs)
	if (locale === "de") return de_explore_categories_browse(inputs)
	if (locale === "fr") return fr_explore_categories_browse(inputs)
	if (locale === "it") return it_explore_categories_browse(inputs)
	if (locale === "nl") return nl_explore_categories_browse(inputs)
	if (locale === "pl") return pl_explore_categories_browse(inputs)
	if (locale === "pt") return pt_explore_categories_browse(inputs)
	if (locale === "ru") return ru_explore_categories_browse(inputs)
	if (locale === "sv") return sv_explore_categories_browse(inputs)
	if (locale === "tr") return tr_explore_categories_browse(inputs)
	if (locale === "zh") return zh_explore_categories_browse(inputs)
	if (locale === "ja") return ja_explore_categories_browse(inputs)
	return en_explore_categories_browse(inputs)
});
