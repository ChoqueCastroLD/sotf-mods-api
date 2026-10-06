/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_DescriptionInputs */

const en_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search Sons of the Forest mods, builds and creators on SOTF Mods.`)
};

const es_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods, builds y creadores de Sons of the Forest en SOTF Mods.`)
};

const de_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durchsuche Sons-of-the-Forest-Mods, Builds und Creator auf SOTF Mods.`)
};

const fr_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cherchez des mods, builds et créateurs Sons of the Forest sur SOTF Mods.`)
};

const it_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build e creator di Sons of the Forest su SOTF Mods.`)
};

const nl_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek Sons of the Forest-mods, builds en makers op SOTF Mods.`)
};

const pl_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów i twórców do Sons of the Forest w SOTF Mods.`)
};

const pt_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquise mods, builds e criadores de Sons of the Forest no SOTF Mods.`)
};

const ru_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды, постройки и авторов для Sons of the Forest на SOTF Mods.`)
};

const sv_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen och skapare till Sons of the Forest på SOTF Mods.`)
};

const tr_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta Sons of the Forest modlarını, yapılarını ve üreticilerini ara.`)
};

const zh_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 SOTF Mods 上搜索 Sons of the Forest 模组、建筑和创作者。`)
};

const ja_explore_search_description = /** @type {(inputs: Explore_Search_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods で Sons of the Forest の MOD、建築、クリエイターを検索。`)
};

/**
* | output |
* | --- |
* | "Search Sons of the Forest mods, builds and creators on SOTF Mods." |
*
* @param {Explore_Search_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_description = /** @type {((inputs?: Explore_Search_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_description(inputs)
	if (locale === "de") return de_explore_search_description(inputs)
	if (locale === "fr") return fr_explore_search_description(inputs)
	if (locale === "it") return it_explore_search_description(inputs)
	if (locale === "nl") return nl_explore_search_description(inputs)
	if (locale === "pl") return pl_explore_search_description(inputs)
	if (locale === "pt") return pt_explore_search_description(inputs)
	if (locale === "ru") return ru_explore_search_description(inputs)
	if (locale === "sv") return sv_explore_search_description(inputs)
	if (locale === "tr") return tr_explore_search_description(inputs)
	if (locale === "zh") return zh_explore_search_description(inputs)
	if (locale === "ja") return ja_explore_search_description(inputs)
	return en_explore_search_description(inputs)
});
