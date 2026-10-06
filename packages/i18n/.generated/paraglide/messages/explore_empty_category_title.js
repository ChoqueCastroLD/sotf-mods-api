/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_Category_TitleInputs */

const en_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This category is empty`)
};

const es_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta categoría está vacía`)
};

const de_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Kategorie ist leer`)
};

const fr_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette catégorie est vide`)
};

const it_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa categoria è vuota`)
};

const nl_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze categorie is leeg`)
};

const pl_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta kategoria jest pusta`)
};

const pt_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta categoria está vazia`)
};

const ru_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта категория пуста`)
};

const sv_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här kategorin är tom`)
};

const tr_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kategori boş`)
};

const zh_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此分类暂无内容`)
};

const ja_explore_empty_category_title = /** @type {(inputs: Explore_Empty_Category_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このカテゴリは空です`)
};

/**
* | output |
* | --- |
* | "This category is empty" |
*
* @param {Explore_Empty_Category_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_category_title = /** @type {((inputs?: Explore_Empty_Category_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Category_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_category_title(inputs)
	if (locale === "de") return de_explore_empty_category_title(inputs)
	if (locale === "fr") return fr_explore_empty_category_title(inputs)
	if (locale === "it") return it_explore_empty_category_title(inputs)
	if (locale === "nl") return nl_explore_empty_category_title(inputs)
	if (locale === "pl") return pl_explore_empty_category_title(inputs)
	if (locale === "pt") return pt_explore_empty_category_title(inputs)
	if (locale === "ru") return ru_explore_empty_category_title(inputs)
	if (locale === "sv") return sv_explore_empty_category_title(inputs)
	if (locale === "tr") return tr_explore_empty_category_title(inputs)
	if (locale === "zh") return zh_explore_empty_category_title(inputs)
	if (locale === "ja") return ja_explore_empty_category_title(inputs)
	return en_explore_empty_category_title(inputs)
});
