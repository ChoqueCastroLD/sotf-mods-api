/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Category_PlaceholderInputs */

const en_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a category`)
};

const es_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una categoría`)
};

const de_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie wählen`)
};

const fr_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisis une catégorie`)
};

const it_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una categoria`)
};

const nl_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een categorie`)
};

const pl_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz kategorię`)
};

const pt_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma categoria`)
};

const ru_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите категорию`)
};

const sv_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en kategori`)
};

const tr_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kategori seç`)
};

const zh_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择分类`)
};

const ja_basecamp_listing_category_placeholder = /** @type {(inputs: Basecamp_Listing_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーを選択`)
};

/**
* | output |
* | --- |
* | "Choose a category" |
*
* @param {Basecamp_Listing_Category_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_category_placeholder = /** @type {((inputs?: Basecamp_Listing_Category_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Category_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_category_placeholder(inputs)
	if (locale === "de") return de_basecamp_listing_category_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_listing_category_placeholder(inputs)
	if (locale === "it") return it_basecamp_listing_category_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_listing_category_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_listing_category_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_listing_category_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_listing_category_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_listing_category_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_listing_category_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_listing_category_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_listing_category_placeholder(inputs)
	return en_basecamp_listing_category_placeholder(inputs)
});
