/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_NameInputs */

const en_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name A to Z`)
};

const es_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre de A a Z`)
};

const de_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name A bis Z`)
};

const fr_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom de A à Z`)
};

const it_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome dalla A alla Z`)
};

const nl_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam A tot Z`)
};

const pl_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa od A do Z`)
};

const pt_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de A a Z`)
};

const ru_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название от А до Я`)
};

const sv_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn A till Ö`)
};

const tr_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad, A’dan Z’ye`)
};

const zh_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称 A 到 Z`)
};

const ja_explore_sort_name = /** @type {(inputs: Explore_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前順（A から Z）`)
};

/**
* | output |
* | --- |
* | "Name A to Z" |
*
* @param {Explore_Sort_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_name = /** @type {((inputs?: Explore_Sort_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_name(inputs)
	if (locale === "de") return de_explore_sort_name(inputs)
	if (locale === "fr") return fr_explore_sort_name(inputs)
	if (locale === "it") return it_explore_sort_name(inputs)
	if (locale === "nl") return nl_explore_sort_name(inputs)
	if (locale === "pl") return pl_explore_sort_name(inputs)
	if (locale === "pt") return pt_explore_sort_name(inputs)
	if (locale === "ru") return ru_explore_sort_name(inputs)
	if (locale === "sv") return sv_explore_sort_name(inputs)
	if (locale === "tr") return tr_explore_sort_name(inputs)
	if (locale === "zh") return zh_explore_sort_name(inputs)
	if (locale === "ja") return ja_explore_sort_name(inputs)
	return en_explore_sort_name(inputs)
});
