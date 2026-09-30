/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_AddInputs */

const en_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add category`)
};

const es_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir categoría`)
};

const de_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie hinzufügen`)
};

const fr_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une catégorie`)
};

const it_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi categoria`)
};

const nl_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie toevoegen`)
};

const pl_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj kategorię`)
};

const pt_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar categoria`)
};

const ru_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить категорию`)
};

const sv_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till kategori`)
};

const tr_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori ekle`)
};

const zh_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加类别`)
};

const ja_jams_editor_category_add = /** @type {(inputs: Jams_Editor_Category_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリを追加`)
};

/**
* | output |
* | --- |
* | "Add category" |
*
* @param {Jams_Editor_Category_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_add = /** @type {((inputs?: Jams_Editor_Category_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_add(inputs)
	if (locale === "de") return de_jams_editor_category_add(inputs)
	if (locale === "fr") return fr_jams_editor_category_add(inputs)
	if (locale === "it") return it_jams_editor_category_add(inputs)
	if (locale === "nl") return nl_jams_editor_category_add(inputs)
	if (locale === "pl") return pl_jams_editor_category_add(inputs)
	if (locale === "pt") return pt_jams_editor_category_add(inputs)
	if (locale === "ru") return ru_jams_editor_category_add(inputs)
	if (locale === "sv") return sv_jams_editor_category_add(inputs)
	if (locale === "tr") return tr_jams_editor_category_add(inputs)
	if (locale === "zh") return zh_jams_editor_category_add(inputs)
	if (locale === "ja") return ja_jams_editor_category_add(inputs)
	return en_jams_editor_category_add(inputs)
});
