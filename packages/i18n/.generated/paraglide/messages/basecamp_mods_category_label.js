/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Category_LabelInputs */

const en_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_basecamp_mods_category_label = /** @type {(inputs: Basecamp_Mods_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Basecamp_Mods_Category_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_category_label = /** @type {((inputs?: Basecamp_Mods_Category_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Category_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_category_label(inputs)
	if (locale === "de") return de_basecamp_mods_category_label(inputs)
	if (locale === "fr") return fr_basecamp_mods_category_label(inputs)
	if (locale === "it") return it_basecamp_mods_category_label(inputs)
	if (locale === "nl") return nl_basecamp_mods_category_label(inputs)
	if (locale === "pl") return pl_basecamp_mods_category_label(inputs)
	if (locale === "pt") return pt_basecamp_mods_category_label(inputs)
	if (locale === "ru") return ru_basecamp_mods_category_label(inputs)
	if (locale === "sv") return sv_basecamp_mods_category_label(inputs)
	if (locale === "tr") return tr_basecamp_mods_category_label(inputs)
	if (locale === "zh") return zh_basecamp_mods_category_label(inputs)
	if (locale === "ja") return ja_basecamp_mods_category_label(inputs)
	return en_basecamp_mods_category_label(inputs)
});
