/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Taxonomy_TitleInputs */

const en_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories and tags`)
};

const es_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías y etiquetas`)
};

const de_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien und Tags`)
};

const fr_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories et tags`)
};

const it_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie e tag`)
};

const nl_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën en tags`)
};

const pl_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie i tagi`)
};

const pt_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias e tags`)
};

const ru_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории и теги`)
};

const sv_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier och taggar`)
};

const tr_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler ve etiketler`)
};

const zh_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类与标签`)
};

const ja_admin_taxonomy_title = /** @type {(inputs: Admin_Taxonomy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーとタグ`)
};

/**
* | output |
* | --- |
* | "Categories and tags" |
*
* @param {Admin_Taxonomy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_taxonomy_title = /** @type {((inputs?: Admin_Taxonomy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Taxonomy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_taxonomy_title(inputs)
	if (locale === "de") return de_admin_taxonomy_title(inputs)
	if (locale === "fr") return fr_admin_taxonomy_title(inputs)
	if (locale === "it") return it_admin_taxonomy_title(inputs)
	if (locale === "nl") return nl_admin_taxonomy_title(inputs)
	if (locale === "pl") return pl_admin_taxonomy_title(inputs)
	if (locale === "pt") return pt_admin_taxonomy_title(inputs)
	if (locale === "ru") return ru_admin_taxonomy_title(inputs)
	if (locale === "sv") return sv_admin_taxonomy_title(inputs)
	if (locale === "tr") return tr_admin_taxonomy_title(inputs)
	if (locale === "zh") return zh_admin_taxonomy_title(inputs)
	if (locale === "ja") return ja_admin_taxonomy_title(inputs)
	return en_admin_taxonomy_title(inputs)
});
