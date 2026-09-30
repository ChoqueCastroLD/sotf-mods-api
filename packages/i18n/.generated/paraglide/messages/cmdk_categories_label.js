/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Categories_LabelInputs */

const en_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories`)
};

const es_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías`)
};

const de_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien`)
};

const fr_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories`)
};

const it_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const nl_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën`)
};

const pl_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const pt_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias`)
};

const ru_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории`)
};

const sv_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier`)
};

const tr_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler`)
};

const zh_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_cmdk_categories_label = /** @type {(inputs: Cmdk_Categories_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Cmdk_Categories_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_categories_label = /** @type {((inputs?: Cmdk_Categories_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Categories_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_categories_label(inputs)
	if (locale === "de") return de_cmdk_categories_label(inputs)
	if (locale === "fr") return fr_cmdk_categories_label(inputs)
	if (locale === "it") return it_cmdk_categories_label(inputs)
	if (locale === "nl") return nl_cmdk_categories_label(inputs)
	if (locale === "pl") return pl_cmdk_categories_label(inputs)
	if (locale === "pt") return pt_cmdk_categories_label(inputs)
	if (locale === "ru") return ru_cmdk_categories_label(inputs)
	if (locale === "sv") return sv_cmdk_categories_label(inputs)
	if (locale === "tr") return tr_cmdk_categories_label(inputs)
	if (locale === "zh") return zh_cmdk_categories_label(inputs)
	if (locale === "ja") return ja_cmdk_categories_label(inputs)
	return en_cmdk_categories_label(inputs)
});
