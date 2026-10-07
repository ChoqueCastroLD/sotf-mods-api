/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sort_NewestInputs */

const en_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest first`)
};

const es_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes primero`)
};

const de_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste zuerst`)
};

const fr_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus récents d’abord`)
};

const it_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima i più recenti`)
};

const nl_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste eerst`)
};

const pl_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze najpierw`)
};

const pt_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes primeiro`)
};

const ru_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые`)
};

const sv_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyast först`)
};

const tr_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en yeni`)
};

const zh_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新的在前`)
};

const ja_ranger_sort_newest = /** @type {(inputs: Ranger_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい順`)
};

/**
* | output |
* | --- |
* | "Newest first" |
*
* @param {Ranger_Sort_NewestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sort_newest = /** @type {((inputs?: Ranger_Sort_NewestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sort_NewestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sort_newest(inputs)
	if (locale === "de") return de_ranger_sort_newest(inputs)
	if (locale === "fr") return fr_ranger_sort_newest(inputs)
	if (locale === "it") return it_ranger_sort_newest(inputs)
	if (locale === "nl") return nl_ranger_sort_newest(inputs)
	if (locale === "pl") return pl_ranger_sort_newest(inputs)
	if (locale === "pt") return pt_ranger_sort_newest(inputs)
	if (locale === "ru") return ru_ranger_sort_newest(inputs)
	if (locale === "sv") return sv_ranger_sort_newest(inputs)
	if (locale === "tr") return tr_ranger_sort_newest(inputs)
	if (locale === "zh") return zh_ranger_sort_newest(inputs)
	if (locale === "ja") return ja_ranger_sort_newest(inputs)
	return en_ranger_sort_newest(inputs)
});
