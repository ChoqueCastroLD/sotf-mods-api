/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_NewInputs */

const en_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más nuevos`)
};

const de_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus récents`)
};

const it_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais novos`)
};

const ru_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste`)
};

const tr_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新发布`)
};

const ja_explore_sort_new = /** @type {(inputs: Explore_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着順`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Explore_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_new = /** @type {((inputs?: Explore_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_new(inputs)
	if (locale === "de") return de_explore_sort_new(inputs)
	if (locale === "fr") return fr_explore_sort_new(inputs)
	if (locale === "it") return it_explore_sort_new(inputs)
	if (locale === "nl") return nl_explore_sort_new(inputs)
	if (locale === "pl") return pl_explore_sort_new(inputs)
	if (locale === "pt") return pt_explore_sort_new(inputs)
	if (locale === "ru") return ru_explore_sort_new(inputs)
	if (locale === "sv") return sv_explore_sort_new(inputs)
	if (locale === "tr") return tr_explore_sort_new(inputs)
	if (locale === "zh") return zh_explore_sort_new(inputs)
	if (locale === "ja") return ja_explore_sort_new(inputs)
	return en_explore_sort_new(inputs)
});
