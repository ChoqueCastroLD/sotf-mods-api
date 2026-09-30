/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_CategoryInputs */

const en_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_basecamp_listing_category = /** @type {(inputs: Basecamp_Listing_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Basecamp_Listing_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_category = /** @type {((inputs?: Basecamp_Listing_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_category(inputs)
	if (locale === "de") return de_basecamp_listing_category(inputs)
	if (locale === "fr") return fr_basecamp_listing_category(inputs)
	if (locale === "it") return it_basecamp_listing_category(inputs)
	if (locale === "nl") return nl_basecamp_listing_category(inputs)
	if (locale === "pl") return pl_basecamp_listing_category(inputs)
	if (locale === "pt") return pt_basecamp_listing_category(inputs)
	if (locale === "ru") return ru_basecamp_listing_category(inputs)
	if (locale === "sv") return sv_basecamp_listing_category(inputs)
	if (locale === "tr") return tr_basecamp_listing_category(inputs)
	if (locale === "zh") return zh_basecamp_listing_category(inputs)
	if (locale === "ja") return ja_basecamp_listing_category(inputs)
	return en_basecamp_listing_category(inputs)
});
