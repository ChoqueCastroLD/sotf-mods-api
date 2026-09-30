/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_DeleteInputs */

const en_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete draft`)
};

const es_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar borrador`)
};

const de_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf löschen`)
};

const fr_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le brouillon`)
};

const it_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina bozza`)
};

const nl_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept verwijderen`)
};

const pl_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń szkic`)
};

const pt_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir rascunho`)
};

const ru_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить черновик`)
};

const sv_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort utkast`)
};

const tr_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslağı sil`)
};

const zh_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除草稿`)
};

const ja_jams_editor_delete = /** @type {(inputs: Jams_Editor_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きを削除`)
};

/**
* | output |
* | --- |
* | "Delete draft" |
*
* @param {Jams_Editor_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_delete = /** @type {((inputs?: Jams_Editor_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_delete(inputs)
	if (locale === "de") return de_jams_editor_delete(inputs)
	if (locale === "fr") return fr_jams_editor_delete(inputs)
	if (locale === "it") return it_jams_editor_delete(inputs)
	if (locale === "nl") return nl_jams_editor_delete(inputs)
	if (locale === "pl") return pl_jams_editor_delete(inputs)
	if (locale === "pt") return pt_jams_editor_delete(inputs)
	if (locale === "ru") return ru_jams_editor_delete(inputs)
	if (locale === "sv") return sv_jams_editor_delete(inputs)
	if (locale === "tr") return tr_jams_editor_delete(inputs)
	if (locale === "zh") return zh_jams_editor_delete(inputs)
	if (locale === "ja") return ja_jams_editor_delete(inputs)
	return en_jams_editor_delete(inputs)
});
