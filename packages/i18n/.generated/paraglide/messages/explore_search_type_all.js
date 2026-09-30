/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Type_AllInputs */

const en_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto`)
};

const nl_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё`)
};

const sv_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt`)
};

const tr_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_explore_search_type_all = /** @type {(inputs: Explore_Search_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Explore_Search_Type_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_type_all = /** @type {((inputs?: Explore_Search_Type_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Type_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_type_all(inputs)
	if (locale === "de") return de_explore_search_type_all(inputs)
	if (locale === "fr") return fr_explore_search_type_all(inputs)
	if (locale === "it") return it_explore_search_type_all(inputs)
	if (locale === "nl") return nl_explore_search_type_all(inputs)
	if (locale === "pl") return pl_explore_search_type_all(inputs)
	if (locale === "pt") return pt_explore_search_type_all(inputs)
	if (locale === "ru") return ru_explore_search_type_all(inputs)
	if (locale === "sv") return sv_explore_search_type_all(inputs)
	if (locale === "tr") return tr_explore_search_type_all(inputs)
	if (locale === "zh") return zh_explore_search_type_all(inputs)
	if (locale === "ja") return ja_explore_search_type_all(inputs)
	return en_explore_search_type_all(inputs)
});
