/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sort_OldestInputs */

const en_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest first`)
};

const es_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más antiguos primero`)
};

const de_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste zuerst`)
};

const fr_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus anciens d’abord`)
};

const it_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima i più vecchi`)
};

const nl_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste eerst`)
};

const pl_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze najpierw`)
};

const pt_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigos primeiro`)
};

const ru_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые`)
};

const sv_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldst först`)
};

const tr_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en eski`)
};

const zh_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早的在前`)
};

const ja_ranger_sort_oldest = /** @type {(inputs: Ranger_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い順`)
};

/**
* | output |
* | --- |
* | "Oldest first" |
*
* @param {Ranger_Sort_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sort_oldest = /** @type {((inputs?: Ranger_Sort_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sort_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sort_oldest(inputs)
	if (locale === "de") return de_ranger_sort_oldest(inputs)
	if (locale === "fr") return fr_ranger_sort_oldest(inputs)
	if (locale === "it") return it_ranger_sort_oldest(inputs)
	if (locale === "nl") return nl_ranger_sort_oldest(inputs)
	if (locale === "pl") return pl_ranger_sort_oldest(inputs)
	if (locale === "pt") return pt_ranger_sort_oldest(inputs)
	if (locale === "ru") return ru_ranger_sort_oldest(inputs)
	if (locale === "sv") return sv_ranger_sort_oldest(inputs)
	if (locale === "tr") return tr_ranger_sort_oldest(inputs)
	if (locale === "zh") return zh_ranger_sort_oldest(inputs)
	if (locale === "ja") return ja_ranger_sort_oldest(inputs)
	return en_ranger_sort_oldest(inputs)
});
