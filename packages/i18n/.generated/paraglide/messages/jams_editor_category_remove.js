/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_RemoveInputs */

const en_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove category`)
};

const es_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar categoría`)
};

const de_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie entfernen`)
};

const fr_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la catégorie`)
};

const it_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi categoria`)
};

const nl_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie verwijderen`)
};

const pl_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń kategorię`)
};

const pt_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover categoria`)
};

const ru_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить категорию`)
};

const sv_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort kategori`)
};

const tr_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriyi kaldır`)
};

const zh_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除类别`)
};

const ja_jams_editor_category_remove = /** @type {(inputs: Jams_Editor_Category_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリを削除`)
};

/**
* | output |
* | --- |
* | "Remove category" |
*
* @param {Jams_Editor_Category_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_remove = /** @type {((inputs?: Jams_Editor_Category_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_remove(inputs)
	if (locale === "de") return de_jams_editor_category_remove(inputs)
	if (locale === "fr") return fr_jams_editor_category_remove(inputs)
	if (locale === "it") return it_jams_editor_category_remove(inputs)
	if (locale === "nl") return nl_jams_editor_category_remove(inputs)
	if (locale === "pl") return pl_jams_editor_category_remove(inputs)
	if (locale === "pt") return pt_jams_editor_category_remove(inputs)
	if (locale === "ru") return ru_jams_editor_category_remove(inputs)
	if (locale === "sv") return sv_jams_editor_category_remove(inputs)
	if (locale === "tr") return tr_jams_editor_category_remove(inputs)
	if (locale === "zh") return zh_jams_editor_category_remove(inputs)
	if (locale === "ja") return ja_jams_editor_category_remove(inputs)
	return en_jams_editor_category_remove(inputs)
});
