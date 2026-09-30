/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_LabelInputs */

const en_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort:`)
};

const es_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar:`)
};

const de_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren:`)
};

const fr_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier :`)
};

const it_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina:`)
};

const nl_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren:`)
};

const pl_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj:`)
};

const pt_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar:`)
};

const ru_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка:`)
};

const sv_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera:`)
};

const tr_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırala:`)
};

const zh_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序：`)
};

const ja_explore_sort_label = /** @type {(inputs: Explore_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え：`)
};

/**
* | output |
* | --- |
* | "Sort:" |
*
* @param {Explore_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_label = /** @type {((inputs?: Explore_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_label(inputs)
	if (locale === "de") return de_explore_sort_label(inputs)
	if (locale === "fr") return fr_explore_sort_label(inputs)
	if (locale === "it") return it_explore_sort_label(inputs)
	if (locale === "nl") return nl_explore_sort_label(inputs)
	if (locale === "pl") return pl_explore_sort_label(inputs)
	if (locale === "pt") return pt_explore_sort_label(inputs)
	if (locale === "ru") return ru_explore_sort_label(inputs)
	if (locale === "sv") return sv_explore_sort_label(inputs)
	if (locale === "tr") return tr_explore_sort_label(inputs)
	if (locale === "zh") return zh_explore_sort_label(inputs)
	if (locale === "ja") return ja_explore_sort_label(inputs)
	return en_explore_sort_label(inputs)
});
