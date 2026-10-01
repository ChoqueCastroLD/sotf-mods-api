/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_TitleInputs */

const en_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort by`)
};

const es_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const de_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren nach`)
};

const fr_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier par`)
};

const it_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina per`)
};

const nl_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteer op`)
};

const pl_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj według`)
};

const pt_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const ru_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировать по`)
};

const sv_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera efter`)
};

const tr_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralama ölçütü`)
};

const zh_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序方式`)
};

const ja_explore_sort_title = /** @type {(inputs: Explore_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort by" |
*
* @param {Explore_Sort_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_title = /** @type {((inputs?: Explore_Sort_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_title(inputs)
	if (locale === "de") return de_explore_sort_title(inputs)
	if (locale === "fr") return fr_explore_sort_title(inputs)
	if (locale === "it") return it_explore_sort_title(inputs)
	if (locale === "nl") return nl_explore_sort_title(inputs)
	if (locale === "pl") return pl_explore_sort_title(inputs)
	if (locale === "pt") return pt_explore_sort_title(inputs)
	if (locale === "ru") return ru_explore_sort_title(inputs)
	if (locale === "sv") return sv_explore_sort_title(inputs)
	if (locale === "tr") return tr_explore_sort_title(inputs)
	if (locale === "zh") return zh_explore_sort_title(inputs)
	if (locale === "ja") return ja_explore_sort_title(inputs)
	return en_explore_sort_title(inputs)
});
