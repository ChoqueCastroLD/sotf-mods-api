/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Sort_PopularInputs */

const en_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popular`)
};

const es_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populares`)
};

const de_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beliebt`)
};

const fr_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populaires`)
};

const it_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popolari`)
};

const nl_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populair`)
};

const pl_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularne`)
};

const pt_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populares`)
};

const ru_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Популярные`)
};

const sv_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Populära`)
};

const tr_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popüler`)
};

const zh_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门`)
};

const ja_kits_sort_popular = /** @type {(inputs: Kits_Sort_PopularInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気`)
};

/**
* | output |
* | --- |
* | "Popular" |
*
* @param {Kits_Sort_PopularInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_sort_popular = /** @type {((inputs?: Kits_Sort_PopularInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Sort_PopularInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_sort_popular(inputs)
	if (locale === "de") return de_kits_sort_popular(inputs)
	if (locale === "fr") return fr_kits_sort_popular(inputs)
	if (locale === "it") return it_kits_sort_popular(inputs)
	if (locale === "nl") return nl_kits_sort_popular(inputs)
	if (locale === "pl") return pl_kits_sort_popular(inputs)
	if (locale === "pt") return pt_kits_sort_popular(inputs)
	if (locale === "ru") return ru_kits_sort_popular(inputs)
	if (locale === "sv") return sv_kits_sort_popular(inputs)
	if (locale === "tr") return tr_kits_sort_popular(inputs)
	if (locale === "zh") return zh_kits_sort_popular(inputs)
	if (locale === "ja") return ja_kits_sort_popular(inputs)
	return en_kits_sort_popular(inputs)
});
