/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Categories_TitleInputs */

const en_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod and build categories`)
};

const es_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías de mods y builds de Sons of the Forest`)
};

const de_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien für Sons of the Forest Mods und Builds`)
};

const fr_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories de mods et builds Sons of the Forest`)
};

const it_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie di mod e build di Sons of the Forest`)
};

const nl_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën voor Sons of the Forest-mods en -builds`)
};

const pl_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie modów i buildów do Sons of the Forest`)
};

const pt_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias de mods e builds de Sons of the Forest`)
};

const ru_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории модов и построек для Sons of the Forest`)
};

const sv_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier för moddar och byggen till Sons of the Forest`)
};

const tr_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod ve yapı kategorileri`)
};

const zh_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组与建筑分类`)
};

const ja_explore_categories_title = /** @type {(inputs: Explore_Categories_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD と建築のカテゴリ`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mod and build categories" |
*
* @param {Explore_Categories_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_categories_title = /** @type {((inputs?: Explore_Categories_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Categories_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_categories_title(inputs)
	if (locale === "de") return de_explore_categories_title(inputs)
	if (locale === "fr") return fr_explore_categories_title(inputs)
	if (locale === "it") return it_explore_categories_title(inputs)
	if (locale === "nl") return nl_explore_categories_title(inputs)
	if (locale === "pl") return pl_explore_categories_title(inputs)
	if (locale === "pt") return pt_explore_categories_title(inputs)
	if (locale === "ru") return ru_explore_categories_title(inputs)
	if (locale === "sv") return sv_explore_categories_title(inputs)
	if (locale === "tr") return tr_explore_categories_title(inputs)
	if (locale === "zh") return zh_explore_categories_title(inputs)
	if (locale === "ja") return ja_explore_categories_title(inputs)
	return en_explore_categories_title(inputs)
});
