/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Explore_Catalog_Category_LinkInputs */

const en_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Category: ${i?.name}`)
};

const es_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Categoría: ${i?.name}`)
};

const de_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kategorie: ${i?.name}`)
};

const fr_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Catégorie : ${i?.name}`)
};

const it_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Categoria: ${i?.name}`)
};

const nl_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Categorie: ${i?.name}`)
};

const pl_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kategoria: ${i?.name}`)
};

const pt_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Categoria: ${i?.name}`)
};

const ru_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Категория: ${i?.name}`)
};

const sv_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kategori: ${i?.name}`)
};

const tr_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kategori: ${i?.name}`)
};

const zh_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`分类：${i?.name}`)
};

const ja_explore_catalog_category_link = /** @type {(inputs: Explore_Catalog_Category_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`カテゴリ: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Category: {name}" |
*
* @param {Explore_Catalog_Category_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_category_link = /** @type {((inputs: Explore_Catalog_Category_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Category_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_category_link(inputs)
	if (locale === "de") return de_explore_catalog_category_link(inputs)
	if (locale === "fr") return fr_explore_catalog_category_link(inputs)
	if (locale === "it") return it_explore_catalog_category_link(inputs)
	if (locale === "nl") return nl_explore_catalog_category_link(inputs)
	if (locale === "pl") return pl_explore_catalog_category_link(inputs)
	if (locale === "pt") return pt_explore_catalog_category_link(inputs)
	if (locale === "ru") return ru_explore_catalog_category_link(inputs)
	if (locale === "sv") return sv_explore_catalog_category_link(inputs)
	if (locale === "tr") return tr_explore_catalog_category_link(inputs)
	if (locale === "zh") return zh_explore_catalog_category_link(inputs)
	if (locale === "ja") return ja_explore_catalog_category_link(inputs)
	return en_explore_catalog_category_link(inputs)
});
