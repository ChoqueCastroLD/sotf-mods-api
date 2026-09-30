/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_Search_PlaceholderInputs */

const en_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name, tag or author…`)
};

const es_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre, etiqueta o autor…`)
};

const de_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name, Tag oder Autor…`)
};

const fr_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom, tag ou auteur…`)
};

const it_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome, tag o autore…`)
};

const nl_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam, tag of maker…`)
};

const pl_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa, tag lub autor…`)
};

const pt_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome, tag ou autor…`)
};

const ru_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название, тег или автор…`)
};

const sv_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn, tagg eller skapare…`)
};

const tr_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad, etiket veya üretici…`)
};

const zh_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称、标签或作者…`)
};

const ja_explore_filter_search_placeholder = /** @type {(inputs: Explore_Filter_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前、タグ、作者…`)
};

/**
* | output |
* | --- |
* | "Name, tag or author…" |
*
* @param {Explore_Filter_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_search_placeholder = /** @type {((inputs?: Explore_Filter_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_search_placeholder(inputs)
	if (locale === "de") return de_explore_filter_search_placeholder(inputs)
	if (locale === "fr") return fr_explore_filter_search_placeholder(inputs)
	if (locale === "it") return it_explore_filter_search_placeholder(inputs)
	if (locale === "nl") return nl_explore_filter_search_placeholder(inputs)
	if (locale === "pl") return pl_explore_filter_search_placeholder(inputs)
	if (locale === "pt") return pt_explore_filter_search_placeholder(inputs)
	if (locale === "ru") return ru_explore_filter_search_placeholder(inputs)
	if (locale === "sv") return sv_explore_filter_search_placeholder(inputs)
	if (locale === "tr") return tr_explore_filter_search_placeholder(inputs)
	if (locale === "zh") return zh_explore_filter_search_placeholder(inputs)
	if (locale === "ja") return ja_explore_filter_search_placeholder(inputs)
	return en_explore_filter_search_placeholder(inputs)
});
