/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Error_Category_NameInputs */

const en_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give the category a name.`)
};

const es_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponle un nombre a la categoría.`)
};

const de_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib der Kategorie einen Namen.`)
};

const fr_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Donnez un nom à la catégorie.`)
};

const it_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dai un nome alla categoria.`)
};

const nl_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geef de categorie een naam.`)
};

const pl_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadaj kategorii nazwę.`)
};

const pt_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dê um nome à categoria.`)
};

const ru_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите название категории.`)
};

const sv_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ge kategorin ett namn.`)
};

const tr_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriye bir ad verin.`)
};

const zh_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请为类别填写名称。`)
};

const ja_jams_editor_error_category_name = /** @type {(inputs: Jams_Editor_Error_Category_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーに名前を付けてください。`)
};

/**
* | output |
* | --- |
* | "Give the category a name." |
*
* @param {Jams_Editor_Error_Category_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_error_category_name = /** @type {((inputs?: Jams_Editor_Error_Category_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_Category_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_error_category_name(inputs)
	if (locale === "de") return de_jams_editor_error_category_name(inputs)
	if (locale === "fr") return fr_jams_editor_error_category_name(inputs)
	if (locale === "it") return it_jams_editor_error_category_name(inputs)
	if (locale === "nl") return nl_jams_editor_error_category_name(inputs)
	if (locale === "pl") return pl_jams_editor_error_category_name(inputs)
	if (locale === "pt") return pt_jams_editor_error_category_name(inputs)
	if (locale === "ru") return ru_jams_editor_error_category_name(inputs)
	if (locale === "sv") return sv_jams_editor_error_category_name(inputs)
	if (locale === "tr") return tr_jams_editor_error_category_name(inputs)
	if (locale === "zh") return zh_jams_editor_error_category_name(inputs)
	if (locale === "ja") return ja_jams_editor_error_category_name(inputs)
	return en_jams_editor_error_category_name(inputs)
});
