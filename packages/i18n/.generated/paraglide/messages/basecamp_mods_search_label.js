/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Search_LabelInputs */

const en_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suchen`)
};

const fr_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

const it_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar`)
};

const ru_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск`)
};

const sv_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_basecamp_mods_search_label = /** @type {(inputs: Basecamp_Mods_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Basecamp_Mods_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_search_label = /** @type {((inputs?: Basecamp_Mods_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_search_label(inputs)
	if (locale === "de") return de_basecamp_mods_search_label(inputs)
	if (locale === "fr") return fr_basecamp_mods_search_label(inputs)
	if (locale === "it") return it_basecamp_mods_search_label(inputs)
	if (locale === "nl") return nl_basecamp_mods_search_label(inputs)
	if (locale === "pl") return pl_basecamp_mods_search_label(inputs)
	if (locale === "pt") return pt_basecamp_mods_search_label(inputs)
	if (locale === "ru") return ru_basecamp_mods_search_label(inputs)
	if (locale === "sv") return sv_basecamp_mods_search_label(inputs)
	if (locale === "tr") return tr_basecamp_mods_search_label(inputs)
	if (locale === "zh") return zh_basecamp_mods_search_label(inputs)
	if (locale === "ja") return ja_basecamp_mods_search_label(inputs)
	return en_basecamp_mods_search_label(inputs)
});
