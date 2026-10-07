/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_CategoryInputs */

const en_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a category.`)
};

const es_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una categoría.`)
};

const de_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle eine Kategorie.`)
};

const fr_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez une catégorie.`)
};

const it_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una categoria.`)
};

const nl_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een categorie.`)
};

const pl_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz kategorię.`)
};

const pt_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma categoria.`)
};

const ru_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите категорию.`)
};

const sv_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en kategori.`)
};

const tr_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kategori seç.`)
};

const zh_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个分类。`)
};

const ja_upload_error_category = /** @type {(inputs: Upload_Error_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a category." |
*
* @param {Upload_Error_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_category = /** @type {((inputs?: Upload_Error_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_category(inputs)
	if (locale === "de") return de_upload_error_category(inputs)
	if (locale === "fr") return fr_upload_error_category(inputs)
	if (locale === "it") return it_upload_error_category(inputs)
	if (locale === "nl") return nl_upload_error_category(inputs)
	if (locale === "pl") return pl_upload_error_category(inputs)
	if (locale === "pt") return pt_upload_error_category(inputs)
	if (locale === "ru") return ru_upload_error_category(inputs)
	if (locale === "sv") return sv_upload_error_category(inputs)
	if (locale === "tr") return tr_upload_error_category(inputs)
	if (locale === "zh") return zh_upload_error_category(inputs)
	if (locale === "ja") return ja_upload_error_category(inputs)
	return en_upload_error_category(inputs)
});
