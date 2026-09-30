/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Category_LabelInputs */

const en_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_upload_category_label = /** @type {(inputs: Upload_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Upload_Category_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_category_label = /** @type {((inputs?: Upload_Category_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Category_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_category_label(inputs)
	if (locale === "de") return de_upload_category_label(inputs)
	if (locale === "fr") return fr_upload_category_label(inputs)
	if (locale === "it") return it_upload_category_label(inputs)
	if (locale === "nl") return nl_upload_category_label(inputs)
	if (locale === "pl") return pl_upload_category_label(inputs)
	if (locale === "pt") return pt_upload_category_label(inputs)
	if (locale === "ru") return ru_upload_category_label(inputs)
	if (locale === "sv") return sv_upload_category_label(inputs)
	if (locale === "tr") return tr_upload_category_label(inputs)
	if (locale === "zh") return zh_upload_category_label(inputs)
	if (locale === "ja") return ja_upload_category_label(inputs)
	return en_upload_category_label(inputs)
});
