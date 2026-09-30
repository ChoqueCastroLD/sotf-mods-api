/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Categories_DescriptionInputs */

const en_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every category of Sons of the Forest mods and builds on SOTF Mods, with what each one covers and how many items it holds.`)
};

const es_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las categorías de mods y builds de Sons of the Forest en SOTF Mods, con lo que abarca cada una y cuántos elementos tiene.`)
};

const de_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kategorien für Sons-of-the-Forest-Mods und -Builds auf SOTF Mods, mit ihrem Inhalt und der Anzahl der Einträge.`)
};

const fr_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les catégories de mods et builds Sons of the Forest sur SOTF Mods, avec leur contenu et leur nombre d’éléments.`)
};

const it_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le categorie di mod e build di Sons of the Forest su SOTF Mods, con cosa comprende ciascuna e quanti elementi contiene.`)
};

const nl_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle categorieën van Sons of the Forest-mods en -builds op SOTF Mods, met wat elke categorie omvat en hoeveel items erin zitten.`)
};

const pl_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie kategorie modów i buildów do Sons of the Forest w SOTF Mods, z opisem zawartości i liczbą elementów.`)
};

const pt_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as categorias de mods e builds de Sons of the Forest no SOTF Mods, com o que cada uma abrange e quantos itens tem.`)
};

const ru_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все категории модов и построек для Sons of the Forest на SOTF Mods: что в них входит и сколько в каждой элементов.`)
};

const sv_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla kategorier av moddar och byggen till Sons of the Forest på SOTF Mods, med vad varje kategori omfattar och hur många objekt den har.`)
};

const tr_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’taki tüm Sons of the Forest mod ve yapı kategorileri; her birinin neyi kapsadığı ve kaç öğe içerdiği.`)
};

const zh_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 上所有 Sons of the Forest 模组与建筑分类，包括各分类的内容和收录数量。`)
};

const ja_explore_categories_description = /** @type {(inputs: Explore_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods にある Sons of the Forest の MOD と建築のカテゴリ一覧。それぞれの内容と件数を確認できます。`)
};

/**
* | output |
* | --- |
* | "Every category of Sons of the Forest mods and builds on SOTF Mods, with what each one covers and how many items it holds." |
*
* @param {Explore_Categories_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_categories_description = /** @type {((inputs?: Explore_Categories_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Categories_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_categories_description(inputs)
	if (locale === "de") return de_explore_categories_description(inputs)
	if (locale === "fr") return fr_explore_categories_description(inputs)
	if (locale === "it") return it_explore_categories_description(inputs)
	if (locale === "nl") return nl_explore_categories_description(inputs)
	if (locale === "pl") return pl_explore_categories_description(inputs)
	if (locale === "pt") return pt_explore_categories_description(inputs)
	if (locale === "ru") return ru_explore_categories_description(inputs)
	if (locale === "sv") return sv_explore_categories_description(inputs)
	if (locale === "tr") return tr_explore_categories_description(inputs)
	if (locale === "zh") return zh_explore_categories_description(inputs)
	if (locale === "ja") return ja_explore_categories_description(inputs)
	return en_explore_categories_description(inputs)
});
